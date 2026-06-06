import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const SITE_URL = "https://extrabaku.az";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Extra Baku Club — The Ultimate Entertainment Experience",
    template: "%s | Extra Baku Club",
  },
  description:
    "Extra Baku Club is Azerbaijan's premier entertainment & nightlife destination — 32 bowling lanes, arcade, karaoke, fine dining, lounge bar and headline events under one cinematic roof.",
  keywords: [
    "Extra Baku",
    "Baku nightclub",
    "entertainment Baku",
    "bowling Baku",
    "karaoke Baku",
    "lounge bar Baku",
    "events Azerbaijan",
    "nightlife Azerbaijan",
  ],
  authors: [{ name: "Extra Baku Club" }],
  creator: "Extra Baku Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Extra Baku Club",
    title: "Extra Baku Club — The Ultimate Entertainment Experience",
    description:
      "Azerbaijan's largest premium entertainment destination. Bowling, arcade, karaoke, dining, lounge & events.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Extra Baku Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extra Baku Club — The Ultimate Entertainment Experience",
    description:
      "Azerbaijan's largest premium entertainment destination. Reserve your unforgettable night.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#05050a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NightClub",
  name: "Extra Baku Club",
  description:
    "Azerbaijan's premier entertainment & nightlife destination featuring bowling, arcade, karaoke, dining, lounge bar and events.",
  url: SITE_URL,
  telephone: "+994 12 555 00 99",
  address: {
    "@type": "PostalAddress",
    streetAddress: "CV57+44R",
    addressLocality: "Baku",
    addressCountry: "AZ",
  },
  openingHours: "Mo-Su 20:00-06:00",
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
