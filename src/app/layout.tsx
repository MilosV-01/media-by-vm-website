'use client';

import Lenis from 'lenis';
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';

import '@/shared/styles/globals.scss';

// ✅ SEO metadata
export const metadata = {
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
        url: "/images/og-image.jpg", // postavi u public/images
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

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dimension, setDimension] = useState<any>(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <html lang="sr">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ff6600" />
      </head>

      <body className={montserrat.className} suppressHydrationWarning>
        <main id="top">{children}</main>
      </body>
    </html>
  );
}
