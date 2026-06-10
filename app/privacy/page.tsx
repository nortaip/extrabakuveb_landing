import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Məxfilik Siyasəti",
  description:
    "Extra Baku Club məxfilik siyasəti — şəxsi məlumatlarınızın necə toplandığı, istifadə olunduğu və qorunduğu barədə.",
  alternates: { canonical: "https://extrabaku.az/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Ümumi müddəalar",
    body: (
      <>
        <p>
          Extra Baku Club (bundan sonra — <strong>“Klub”</strong>, “biz”, “bizim”)
          istifadəçilərinin məxfiliyinə hörmət edir və şəxsi məlumatların
          qorunmasını öhdəlik kimi qəbul edir. Bu Məxfilik Siyasəti{" "}
          <em>extrabaku.az</em> saytından (bundan sonra — “Sayt”) istifadə zamanı
          hansı məlumatların toplandığını, necə işlədildiyini və qorunduğunu
          izah edir.
        </p>
        <p>
          Saytdan istifadə etməklə siz bu sənəddə təsvir olunan şərtlərlə razı
          olduğunuzu təsdiq edirsiniz. Razı deyilsinizsə, lütfən, saytdan
          istifadəni dayandırın.
        </p>
      </>
    ),
  },
  {
    title: "2. Topladığımız məlumatlar",
    body: (
      <>
        <p>Klub aşağıdakı kateqoriyalardan olan məlumatları toplaya bilər:</p>
        <ul>
          <li>
            <strong>Texniki məlumatlar:</strong> IP ünvanı, brauzer növü və
            versiyası, əməliyyat sistemi, cihaz tipi, istinad URL-i, səhifəyə
            daxil olma vaxtı və müddəti.
          </li>
          <li>
            <strong>İstifadə məlumatları:</strong> ziyarət olunan səhifələr,
            klikləmələr, axtarış sorğuları və saytda davranış statistikası.
          </li>
          <li>
            <strong>Könüllü təqdim olunan məlumatlar:</strong> sizin əlaqə
            formaları, rezervasiya və ya tədbir sorğuları vasitəsilə paylaşdığınız
            ad, soyad, email, telefon nömrəsi kimi məlumatlar.
          </li>
          <li>
            <strong>Kuki (cookie) məlumatları:</strong> sayt fəaliyyətini
            yaxşılaşdırmaq və analitik məqsədlər üçün istifadə olunan kiçik
            mətn faylları.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Məlumatların istifadə məqsədi",
    body: (
      <>
        <p>Topladığımız məlumatlardan aşağıdakı məqsədlərlə istifadə edirik:</p>
        <ul>
          <li>Saytın düzgün işləməsini və təhlükəsizliyini təmin etmək;</li>
          <li>
            Rezervasiya, tədbir təşkili və müştəri sorğularını emal etmək;
          </li>
          <li>İstifadəçi təcrübəsini fərdiləşdirmək və yaxşılaşdırmaq;</li>
          <li>
            Marketinq, kampaniya və xüsusi təkliflər barədə yalnız sizin
            razılığınızla məlumat göndərmək;
          </li>
          <li>Qanunvericiliklə müəyyən edilmiş öhdəlikləri yerinə yetirmək.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Üçüncü tərəflərlə paylaşma",
    body: (
      <>
        <p>
          Klub sizin şəxsi məlumatlarınızı satmır, icarəyə vermir və ya kommersiya
          məqsədilə üçüncü tərəflərə ötürmür. Məlumatlar yalnız aşağıdakı
          hallarda paylaşıla bilər:
        </p>
        <ul>
          <li>
            Saytın işlənməsinə və xidmətin göstərilməsinə kömək edən etibarlı
            tərəfdaşlarla (məsələn, hostinq, analitika, ödəniş sistemləri);
          </li>
          <li>Qanuni səlahiyyətli orqanların rəsmi sorğusu əsasında;</li>
          <li>Klubun və ya istifadəçilərin hüquqlarını qorumaq üçün.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Kukilər (Cookies)",
    body: (
      <>
        <p>
          Sayt istifadəçi təcrübəsini yaxşılaşdırmaq və saytın performansını
          analiz etmək üçün kuki fayllarından istifadə edir. Brauzer
          parametrlərinizdən kukiləri istənilən vaxt söndürə bilərsiniz, lakin
          bu, saytın bəzi funksiyalarının düzgün işləməməsinə səbəb ola bilər.
        </p>
      </>
    ),
  },
  {
    title: "6. Məlumatların saxlanması və təhlükəsizliyi",
    body: (
      <>
        <p>
          Klub şəxsi məlumatların icazəsiz daxilolma, dəyişdirilmə, açıqlama və
          ya silinmədən qorunması üçün müasir texniki və təşkilati tədbirlər
          tətbiq edir. Bununla belə, internet üzərindən ötürülən heç bir məlumat
          tam təhlükəsiz hesab edilə bilməz.
        </p>
      </>
    ),
  },
  {
    title: "7. Sizin hüquqlarınız",
    body: (
      <>
        <p>İstifadəçi kimi sizin aşağıdakı hüquqlarınız var:</p>
        <ul>
          <li>Şəxsi məlumatlarınıza giriş əldə etmək;</li>
          <li>Səhv və ya natamam məlumatları düzəltməyi tələb etmək;</li>
          <li>Məlumatlarınızın silinməsini tələb etmək;</li>
          <li>Marketinq məqsədilə işlənmədən imtina etmək;</li>
          <li>Razılığınızı istənilən vaxt geri götürmək.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Uşaqların məxfiliyi",
    body: (
      <>
        <p>
          Sayt 18 yaşından kiçik şəxslər üçün nəzərdə tutulmayıb. Bilərəkdən
          uşaqlardan şəxsi məlumat toplamırıq. Belə bir hal aşkarlanarsa,
          məlumat dərhal silinəcək.
        </p>
      </>
    ),
  },
  {
    title: "9. Siyasətdə dəyişikliklər",
    body: (
      <>
        <p>
          Bu Məxfilik Siyasəti vaxtaşırı yenilənə bilər. Bütün dəyişikliklər bu
          səhifədə dərc olunduğu andan etibarən qüvvəyə minir. Mütəmadi olaraq
          bu səhifəni yoxlamağı tövsiyə edirik.
        </p>
      </>
    ),
  },
  {
    title: "10. Əlaqə",
    body: (
      <>
        <p>
          Məxfilik Siyasəti və ya şəxsi məlumatlarınızla bağlı sualınız varsa,
          bizimlə{" "}
          <Link href="/#contact" className="text-gold-light hover:underline">
            əlaqə bölməsi
          </Link>{" "}
          vasitəsilə əlaqə saxlaya bilərsiniz.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="relative grain pt-32 pb-24 sm:pt-40">
        <div className="container-max relative z-10 px-5 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-general text-xs uppercase tracking-[0.28em] text-white/50 transition-colors hover:text-gold-light"
            >
              ← Ana səhifə
            </Link>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Məxfilik <span className="text-gold-gradient">Siyasəti</span>
            </h1>

            <p className="mt-5 font-general text-sm text-white/55">
              Sonuncu yenilənmə: 7 iyun 2026
            </p>

            <div className="mt-10 space-y-10 font-general text-[15px] leading-relaxed text-white/70 [&_a]:transition-colors [&_li]:mt-2 [&_p+p]:mt-4 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_em]:text-gold-light [&_em]:not-italic">
              {sections.map((s) => (
                <section key={s.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
                  <h2 className="font-heading text-lg font-semibold uppercase tracking-[0.12em] text-white sm:text-xl">
                    {s.title}
                  </h2>
                  <div className="mt-4">{s.body}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
