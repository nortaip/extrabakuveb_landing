import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const SITE_URL = "https://extrabaku.az";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Extra Baku Club — Bakının ən böyük əyləncə və gecə klubu | Bowling, Karaoke, Lounge",
    template: "%s | Extra Baku Club",
  },
  description:
    "Extra Baku Club — Bakıda premium əyləncə məkanı: 32 bowling zolağı, arcade, karaoke, restoran, lounge bar və canlı tədbirlər. Doğum günü, korporativ və VIP tədbirlər üçün rezervasiya. Extra Baku, Bakı gecə klubu.",
  keywords: [
    "Extra Baku",
    "Extra Baku Club",
    "Bakı gecə klubu",
    "Baku nightclub",
    "Bakıda əyləncə",
    "Bakı bowling",
    "bowling Baku",
    "Bakı karaoke",
    "karaoke Baku",
    "lounge bar Baku",
    "Bakıda lounge bar",
    "Bakı restoran",
    "Bakıda VIP tədbir",
    "doğum günü Bakı",
    "korporativ tədbir Bakı",
    "Bakı arcade",
    "Bakıda gecə həyatı",
    "nightlife Baku",
    "Azərbaycan əyləncə mərkəzi",
    "entertainment Baku",
    "events Baku",
    "клуб Баку",
    "ночной клуб Баку",
    "боулинг Баку",
    "караоке Баку",
    "развлечения Баку",
  ],
  category: "Entertainment",
  authors: [{ name: "Extra Baku Club", url: SITE_URL }],
  creator: "Extra Baku Club",
  publisher: "Extra Baku Club",
  applicationName: "Extra Baku Club",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    alternateLocale: ["en_US", "ru_RU"],
    url: SITE_URL,
    siteName: "Extra Baku Club",
    title:
      "Extra Baku Club — Bakının ən böyük əyləncə və gecə klubu",
    description:
      "Bakıda premium əyləncə məkanı — bowling, karaoke, arcade, restoran, lounge bar və canlı tədbirlər. Doğum günü, korporativ və VIP gecələr üçün rezervasiya.",
    images: [
      {
        url: "/club/club-1.png",
        width: 1200,
        height: 630,
        alt: "Extra Baku Club — Bakı gecə klubu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extra Baku Club — Bakının ən böyük əyləncə klubu",
    description:
      "Bowling, karaoke, lounge bar, restoran və VIP tədbirlər — hamısı bir məkanda. Bakıda unudulmaz gecə üçün rezervasiya et.",
    images: ["/club/club-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "az-AZ": SITE_URL,
      "en-US": SITE_URL,
      "ru-RU": SITE_URL,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05050a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["NightClub", "EntertainmentBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "Extra Baku Club",
  alternateName: ["Extra Baku", "Ekstra Baku Club"],
  description:
    "Bakıda premium əyləncə və gecə klubu — bowling, arcade, karaoke, restoran, lounge bar və canlı tədbirlər.",
  url: SITE_URL,
  image: [`${SITE_URL}/club/club-1.png`, `${SITE_URL}/club/club-2.png`],
  logo: `${SITE_URL}/club/club-1.png`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "CV57+44R",
    addressLocality: "Baku",
    addressRegion: "Baku",
    addressCountry: "AZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.4093,
    longitude: 49.8671,
  },
  areaServed: { "@type": "City", name: "Baku" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "20:00",
      closes: "06:00",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Bowling", value: true },
    { "@type": "LocationFeatureSpecification", name: "Karaoke", value: true },
    { "@type": "LocationFeatureSpecification", name: "Arcade", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Lounge Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "VIP Rooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Valet Parking", value: true },
  ],
  sameAs: [
    "https://instagram.com",
    "https://facebook.com",
    "https://tiktok.com",
    "https://youtube.com",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Extra Baku Club",
  inLanguage: ["az-AZ", "en-US", "ru-RU"],
  publisher: { "@id": `${SITE_URL}/#business` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <head>
        {/* Fontshare: Clash Display, Satoshi, General Sans */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700,500&f[]=satoshi@500,700,900&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        {/* Google Fonts: Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
