import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/shared/styles/globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

// ✅ SEO metadata (server-side)
export const metadata: Metadata = {
  metadataBase: new URL("https://mediabyvm.com"),
  title: "Media By VM | Digitalni marketing i brendiranje",
  description:
    "Agencija za digitalni marketing iz Mladenovca. Pomažemo biznisima da izgledaju profesionalno, povećaju vidljivost i prodaju više kroz društvene mreže, video sadržaj i web dizajn.",
  keywords:
    "digitalni marketing, brendiranje, marketing agencija, video produkcija, instagram marketing, tiktok, izrada sajta, media by vm, mladenovac, srbija",
  authors: [{ name: "Media By VM", url: "https://mediabyvm.com" }],
  openGraph: {
    title: "Media By VM | Marketing koji prodaje",
    description:
      "Dva brata, jedna misija – digitalni rast. Kreiramo sadržaj koji pretvara pratioce u kupce.",
    url: "https://mediabyvm.com",
    siteName: "Media By VM",
    images: [
      {
        url: "/images/og-image.jpg", // stavi ovu sliku u public/images
        width: 1200,
        height: 630,
        alt: "Media By VM logo",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media By VM | Digitalni marketing i brendiranje",
    description:
      "Pomozite svom brendu da raste uz digitalni marketing koji prodaje.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mediabyvm.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ff6600" />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <main id="top">{children}</main>
      </body>
    </html>
  );
}
