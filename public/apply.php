<?php
/**
 * Extra Baku — careers application handler.
 *
 * Receives the application form (multipart/form-data) and emails it — with the
 * CV attached — to the careers inbox. Sends via real SMTP so the message is
 * actually delivered (plain PHP mail() returns true but is usually dropped /
 * spam-filtered on shared hosts because of missing SPF/DKIM).
 *
 * SETUP (one time):
 *   Set these as server environment variables OR fill SMTP_PASS below.
 *   For Gmail (extraclub.az@gmail.com):
 *     SMTP_HOST=smtp.gmail.com  SMTP_PORT=465  SMTP_SECURE=ssl
 *     SMTP_USER=extraclub.az@gmail.com
 *     SMTP_PASS=<16-char Google App Password>   (myaccount.google.com → Security
 *               → 2-Step Verification → App passwords)
 *   For the senategroup.az mailbox, use that provider's SMTP host/credentials.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

/* ----------------------------- Config ----------------------------- */
$TO          = 'extraclub.az@gmail.com';
$MAX_BYTES   = 5 * 1024 * 1024;
$ALLOWED_EXT = ['pdf', 'doc', 'docx'];

$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'extrabaku.az');

$SMTP = [
    'host'   => getenv('SMTP_HOST') ?: 'smtp.gmail.com',
    'port'   => (int) (getenv('SMTP_PORT') ?: 465),
    'secure' => getenv('SMTP_SECURE') ?: 'ssl',   // 'ssl' (465) or 'tls' (587)
    'user'   => getenv('SMTP_USER') ?: 'extraclub.az@gmail.com',
    'pass'   => getenv('SMTP_PASS') ?: '',         // <-- App Password goes here
    'ehlo'   => $host,
];

/* --------------------------- Honeypot ----------------------------- */
if (!empty($_POST['_honey'])) { echo json_encode(['success' => true]); exit; }

/* ----------------------- Validate + sanitise ---------------------- */
function field($key) {
    $v = isset($_POST[$key]) ? trim($_POST[$key]) : '';
    return str_replace(["\r", "\n"], ' ', $v);
}
$name     = field('name');
$contact  = field('contact');
$position = field('position');
$message  = isset($_POST['message']) ? trim($_POST['message']) : '';

if (mb_strlen($name) < 2 || mb_strlen($contact) < 5) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please provide your name and contact.']);
    exit;
}

$subject  = "New Job Application — $position — $name";
$bodyText =
    "Position: $position\n" .
    "Name: $name\n" .
    "Contact: $contact\n\n" .
    "About:\n" . ($message !== '' ? $message : '—') . "\n";

/* --------------------- Build the MIME message --------------------- */
$boundary = 'b_' . bin2hex(random_bytes(12));
$fromEmail = $SMTP['user'] ?: ('no-reply@' . $host);
$replyTo   = filter_var($contact, FILTER_VALIDATE_EMAIL) ? $contact : '';

$headers  = "From: Extra Baku Careers <$fromEmail>\r\n";
if ($replyTo) { $headers .= "Reply-To: $replyTo\r\n"; }
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$body  = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $bodyText . "\r\n";

if (
    isset($_FILES['attachment']) &&
    $_FILES['attachment']['error'] === UPLOAD_ERR_OK &&
    is_uploaded_file($_FILES['attachment']['tmp_name'])
) {
    $file = $_FILES['attachment'];
    $ext  = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if ($file['size'] > 0 && $file['size'] <= $MAX_BYTES && in_array($ext, $ALLOWED_EXT, true)) {
        $encoded = chunk_split(base64_encode(file_get_contents($file['tmp_name'])));
        $fname   = preg_replace('/[^A-Za-z0-9._-]/', '_', $file['name']);
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"$fname\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fname\"\r\n\r\n";
        $body .= $encoded . "\r\n";
    }
}
$body .= "--$boundary--\r\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

/* ------------------------- Minimal SMTP --------------------------- */
function smtp_send($cfg, $to, $fromEmail, $subjectHeader, $headers, $body, &$err) {
    $transport = ($cfg['secure'] === 'ssl' ? 'ssl://' : '') . $cfg['host'];
    $ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $fp = @stream_socket_client(
        "$transport:{$cfg['port']}", $errno, $errstr, 20,
        STREAM_CLIENT_CONNECT, $ctx
    );
    if (!$fp) { $err = "connect: $errstr ($errno)"; return false; }
    stream_set_timeout($fp, 20);

    $read = function () use ($fp) {
        $data = '';
        while (($line = fgets($fp, 515)) !== false) {
            $data .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $data;
    };
    $cmd = function ($c) use ($fp, $read) { fwrite($fp, $c . "\r\n"); return $read(); };
    $expect = function ($resp, $code) { return strpos(ltrim($resp), (string) $code) === 0; };

    if (!$expect($read(), 220)) { $err = 'no greeting'; fclose($fp); return false; }
    $cmd('EHLO ' . $cfg['ehlo']);
    if ($cfg['secure'] === 'tls') {
        if (!$expect($cmd('STARTTLS'), 220)) { $err = 'starttls failed'; fclose($fp); return false; }
        stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        $cmd('EHLO ' . $cfg['ehlo']);
    }
    $cmd('AUTH LOGIN');
    $cmd(base64_encode($cfg['user']));
    if (!$expect($cmd(base64_encode($cfg['pass'])), 235)) { $err = 'auth failed'; fclose($fp); return false; }
    if (!$expect($cmd("MAIL FROM:<$fromEmail>"), 250)) { $err = 'MAIL FROM rejected'; fclose($fp); return false; }
    if (!$expect($cmd("RCPT TO:<$to>"), 250))         { $err = 'RCPT TO rejected'; fclose($fp); return false; }
    if (!$expect($cmd('DATA'), 354))                  { $err = 'DATA rejected'; fclose($fp); return false; }

    $message = "To: $to\r\n" .
               "Subject: $subjectHeader\r\n" .
               $headers . "\r\n" .
               $body;
    // dot-stuffing for lines starting with '.'
    $message = preg_replace('/^\./m', '..', $message);
    fwrite($fp, $message . "\r\n.\r\n");
    $ok = $expect($read(), 250);
    $cmd('QUIT');
    fclose($fp);
    if (!$ok) { $err = 'message rejected'; }
    return $ok;
}

/* ----------------------------- Send ------------------------------- */
$err = '';
$sent = false;

if (!empty($SMTP['pass'])) {
    $sent = smtp_send($SMTP, $TO, $fromEmail, $encodedSubject, $headers, $body, $err);
} else {
    // No SMTP password configured yet → best-effort native mail().
    $sent = @mail($TO, $encodedSubject, $body, $headers);
    if (!$sent) { $err = 'SMTP not configured and mail() failed'; }
}

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Application sent']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent', 'error' => $err]);
}
