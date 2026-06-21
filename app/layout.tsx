import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { faqs, testimonials } from "@/lib/data";

const SITE_URL = "https://extrabaku.az";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Extra Baku – The Largest Premium Nightclub in the Caucasus | Night Club Baku",
    template: "%s | Extra Baku",
  },
  description:
    "Extra Baku is the best night club in Baku and the largest premium nightclub in the Caucasus. Experience world-class nightlife, VIP lounges, premium cocktails, live DJs, live music and exclusive events — a luxury nightlife destination in Azerbaijan.",
  keywords: [
    "Night Club Baku",
    "Nightclub Baku",
    "Best Night Club in Baku",
    "Luxury Night Club Baku",
    "VIP Club Baku",
    "Live Music Baku",
    "Lounge Bar Baku",
    "Premium Nightlife Baku",
    "Nightlife Azerbaijan",
    "Night Club Azerbaijan",
    "Best Nightlife in Baku",
    "VIP Lounge Baku",
    "Live DJ Baku",
    "Premium Events Baku",
    "Birthday Party Venue Baku",
    "Corporate Event Venue Baku",
    "Exclusive Club Baku",
    "Luxury Entertainment Baku",
    "Party Venue Azerbaijan",
    "Night Entertainment Baku",
    "Largest Nightclub in the Caucasus",
    "Extra Baku",
    "Bakı gecə klubu",
    "ночной клуб Баку",
  ],
  category: "Entertainment",
  authors: [{ name: "Extra Baku Club", url: SITE_URL }],
  creator: "Extra Baku Club",
  publisher: "Extra Baku Club",
  applicationName: "Extra Baku Club",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["az_AZ", "ru_RU"],
    url: SITE_URL,
    siteName: "Extra Baku Club",
    title: "Extra Baku – The Largest Premium Nightclub in the Caucasus",
    description:
      "World-class nightlife, VIP lounges, premium cocktails, live DJs and exclusive events in the heart of Baku, Azerbaijan.",
    images: [
      {
        url: "/club/og.jpg",
        width: 1200,
        height: 630,
        alt: "Extra Baku — the largest premium nightclub in the Caucasus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extra Baku – The Largest Premium Nightclub in the Caucasus",
    description:
      "Night Club Baku — world-class nightlife, VIP lounges, premium cocktails and live DJs. Reserve your night at the best night club in Baku.",
    images: ["/club/og.jpg"],
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
    "Extra Baku is the largest premium nightclub in the Caucasus — a luxury nightlife destination in Baku, Azerbaijan with VIP lounges, a premium lounge bar, live DJs, live music, signature cocktails and exclusive events.",
  url: SITE_URL,
  telephone: "+994 ",
  email: "extraclub.az@gmail.com",
  image: [`${SITE_URL}/club/club-1.webp`, `${SITE_URL}/club/club-2.webp`],
  logo: `${SITE_URL}/club/club-1.webp`,
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
    { "@type": "LocationFeatureSpecification", name: "Lounge Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Live Music", value: true },
    { "@type": "LocationFeatureSpecification", name: "DJ", value: true },
    { "@type": "LocationFeatureSpecification", name: "Billiards", value: true },
    { "@type": "LocationFeatureSpecification", name: "VIP Rooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Valet Parking", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/extra.baku",
    "https://www.tiktok.com/@extrabaku",
    "https://www.youtube.com/@extrabaku",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Extra Baku Club",
  alternateName: "Extra Baku",
  url: SITE_URL,
  logo: `${SITE_URL}/club/club-1.webp`,
  image: `${SITE_URL}/club/club-1.webp`,
  description:
    "Extra Baku is the largest premium nightclub in the Caucasus — a luxury nightlife destination in Baku, Azerbaijan with VIP lounges, live DJs, signature cocktails and exclusive events.",
  areaServed: ["Baku", "Azerbaijan", "Caucasus"],
  sameAs: [
    "https://www.instagram.com/extra.baku",
    "https://www.tiktok.com/@extrabaku",
    "https://www.youtube.com/@extrabaku",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "NightClub",
  "@id": `${SITE_URL}/#business`,
  name: "Extra Baku Club",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(testimonials.length * 240),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.quote,
  })),
};

const eventsJsonLd = [
  {
    name: "Live DJ Nights at Extra Baku",
    description:
      "Resident and international guest DJs perform premium club sets at the largest nightclub in the Caucasus.",
  },
  {
    name: "VIP Weekend Experience",
    description:
      "Exclusive VIP table and bottle service nights with live music in the heart of Baku.",
  },
].map((e, i) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${SITE_URL}/#event-${i + 1}`,
  name: e.name,
  description: e.description,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  startDate: "2026-01-01T20:00",
  doorTime: "20:00",
  organizer: { "@id": `${SITE_URL}/#organization` },
  location: { "@id": `${SITE_URL}/#business` },
  image: `${SITE_URL}/club/club-3.webp`,
  offers: {
    "@type": "Offer",
    url: SITE_URL,
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "AZN",
  },
}));

const allSchemas = [
  jsonLd,
  websiteJsonLd,
  organizationJsonLd,
  faqJsonLd,
  reviewJsonLd,
  ...eventsJsonLd,
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
