import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/shared/styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mediabyvm.com"),
  title: {
    default: "Media By VM | Digitalni marketing i brendiranje",
    template: "%s | Media By VM",
  },
  description:
    "Agencija za digitalni marketing iz Mladenovca. Pomažemo biznisima da izgledaju profesionalno, povećaju vidljivost i prodaju više kroz društvene mreže, video sadržaj i web dizajn.",
  keywords: [
    "digitalni marketing",
    "brendiranje",
    "marketing agencija",
    "video produkcija",
    "instagram marketing",
    "tiktok marketing",
    "izrada sajta",
    "web dizajn",
    "Media By VM",
    "Mladenovac",
    "Srbija",
    "Beograd",
  ],
  authors: [{ name: "Media By VM", url: "https://mediabyvm.com" }],
  creator: "Media By VM",
  publisher: "Media By VM",
  alternates: { canonical: "/" },
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
  openGraph: {
    title: "Media By VM | Marketing koji prodaje",
    description:
      "Dva brata, jedna misija: digitalni rast. Kreiramo sadržaj koji pretvara pratioce u kupce.",
    url: "https://mediabyvm.com",
    siteName: "Media By VM",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Media By VM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media By VM | Digitalni marketing i brendiranje",
    description:
      "Digitalni marketing i brendiranje za biznise u Srbiji. Strategija, sadržaj i web dizajn koji donose prodaju.",
    images: ["/images/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#ff6600",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={montserrat.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
