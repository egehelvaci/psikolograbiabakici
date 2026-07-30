import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2f5d3f",
};

const DESCRIPTION =
  "İstanbul Başakşehir'de çocuk ve ergen psikoloğu Rabia Bakıcı. Oyun terapisi, aile danışmanlığı, kaygı terapisi ve psikolojik değerlendirme için randevu alın. 5+ yıl deneyim.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Psikolog Rabia Bakıcı | Çocuk ve Ergen Psikoloğu İstanbul Başakşehir",
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    // Ana anahtar kelimeler
    "psikolog rabia bakıcı", "çocuk psikoloğu istanbul", "ergen psikoloğu başakşehir",
    "oyun terapisi istanbul", "çocuk psikoloğu başakşehir", "psikolog başakşehir",
    // Hizmet odaklı kelimeler
    "aile danışmanlığı istanbul", "çocuk kaygı tedavisi", "psikolojik değerlendirme çocuk",
    "davranış problemleri çocuk", "sosyal beceri geliştirme", "eğitim danışmanlığı",
    // Lokasyon bazlı
    "istanbul psikolog", "başakşehir psikoloji", "çocuk terapisti istanbul",
    // Uzun kuyruk kelimeler
    "çocuklarda dikkat eksikliği tedavisi", "okul fobisi tedavisi", "çocuk özgüven geliştirme",
    "ergen psikolojik destek", "aile terapisi istanbul", "çocuk gelişim uzmanı",
  ],
  authors: [{ name: "Rabia Bakıcı", url: SITE_URL }],
  creator: "Rabia Bakıcı",
  publisher: "Rabia Bakıcı",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    title: "Psikolog Rabia Bakıcı | Çocuk ve Ergen Psikoloğu İstanbul Başakşehir",
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Psikolog Rabia Bakıcı - İstanbul Başakşehir Çocuk ve Ergen Psikoloğu, Oyun Terapisi Uzmanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psikolog Rabia Bakıcı | Çocuk ve Ergen Psikoloğu İstanbul Başakşehir",
    description: DESCRIPTION,
    images: ["/images/og-card.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "health",
  classification: "Psychology Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${fraunces.variable} antialiased`}>
        {/* JavaScript kapalıyken scroll-reveal içeriği gizlememeli */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17092278848"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17092278848');
          `}
        </Script>
      </body>
    </html>
  );
}
