import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/shared/styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://vukma.com";
const BRAND = "VUKMA";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BRAND} | Digitalni marketing i brendiranje`,
    template: `%s | ${BRAND}`,
  },

  description:
    "VUKMA je digitalna marketing agencija iz Mladenovca. Pomažemo biznisima da povećaju vidljivost, izgrade brend i pretvore pratioce u kupce kroz moderan sadržaj i strategiju.",

  keywords: [
    "digitalni marketing",
    "brendiranje",
    "marketing agencija",
    "video produkcija",
    "instagram marketing",
    "tiktok marketing",
    "meta ads",
    "google my business",
    "izrada sajta",
    "web dizajn",
    "SEO optimizacija",
    "AEO optimizacija",
    "VUKMA",
    "Mladenovac",
    "Srbija",
    "Beograd",
  ],

  alternates: {
    canonical: "/",
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

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" }, // obriši ako nemaš
    ],
  },

  openGraph: {
    title: `${BRAND} | Marketing koji prodaje`,
    description:
      "Strategija, sadržaj i oglašavanje koje pretvara pratioce u kupce.",
    url: SITE_URL,
    siteName: BRAND,
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BRAND,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Digitalni marketing i brendiranje`,
    description:
      "Digitalni marketing i brendiranje za biznise u Srbiji. Strategija, sadržaj i web dizajn koji donose prodaju.",
    images: ["/images/og-image.jpg"],
  },

  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
};

export const viewport = {
  themeColor: "#ff6600",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaProfessionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BRAND,
    url: SITE_URL,
    telephone: "+381611415035",
    areaServed: "Srbija",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mladenovac",
      addressCountry: "RS",
    },
    sameAs: [
      "https://www.instagram.com/vukma.marketing/",
      "https://www.tiktok.com/@vukma.marketing",
      // Dodaj FB/LinkedIn kad imaš tačne linkove
    ],
  };

  const schemaWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE_URL,
  };

  return (
    <html lang="sr">
      <body className={montserrat.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaProfessionalService),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />

        {children}
      </body>
    </html>
  );
}