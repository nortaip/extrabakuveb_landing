<?php
/**
 * Extra Baku — careers application handler.
 * Receives the application form (multipart/form-data) and emails it,
 * with the CV attached, to the careers inbox.
 *
 * Deploy this file to a PHP-capable host (e.g. the same host as the site).
 * If the site is served from a different domain than this PHP file, set
 * NEXT_PUBLIC_APPLY_ENDPOINT in the frontend to this file's full URL and
 * keep the CORS header below.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

/* ---- Where applications are delivered ---- */
$TO = 'extraclub.az@gmail.com';
$MAX_BYTES = 5 * 1024 * 1024; // 5 MB
$ALLOWED_EXT = ['pdf', 'doc', 'docx'];

/* ---- Honeypot: silently accept bots ---- */
if (!empty($_POST['_honey'])) {
    echo json_encode(['success' => true]);
    exit;
}

/* ---- Sanitise inputs (strip header-injection chars) ---- */
function field($key) {
    $v = isset($_POST[$key]) ? trim($_POST[$key]) : '';
    return str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);
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

$subject = "New Job Application — $position — $name";

$bodyText =
    "Position: $position\n" .
    "Name: $name\n" .
    "Contact: $contact\n\n" .
    "About:\n" . ($message !== '' ? $message : '—') . "\n";

/* ---- From / Reply-To ---- */
$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'extrabaku.az');
$fromEmail = 'no-reply@' . $host;
$boundary  = 'b_' . bin2hex(random_bytes(12));

$headers  = "From: Extra Baku Careers <$fromEmail>\r\n";
if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: $contact\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

/* ---- Body (text part) ---- */
$body  = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $bodyText . "\r\n";

/* ---- Attachment (optional) ---- */
if (
    isset($_FILES['attachment']) &&
    $_FILES['attachment']['error'] === UPLOAD_ERR_OK &&
    is_uploaded_file($_FILES['attachment']['tmp_name'])
) {
    $file = $_FILES['attachment'];
    $ext  = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if ($file['size'] > 0 && $file['size'] <= $MAX_BYTES && in_array($ext, $ALLOWED_EXT, true)) {
        $data  = file_get_contents($file['tmp_name']);
        $fname = preg_replace('/[^A-Za-z0-9._-]/', '_', $file['name']);
        $encoded = chunk_split(base64_encode($data));
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"$fname\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fname\"\r\n\r\n";
        $body .= $encoded . "\r\n";
    }
}

$body .= "--$boundary--";

/* ---- Encode subject for UTF-8 ---- */
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$sent = @mail($TO, $encodedSubject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Application sent']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent']);
}
