import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Baloo_2, Bubblegum_Sans } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bubblegum = Bubblegum_Sans({
  variable: "--font-bubblegum",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://psikolograbiabakici.com'),
  title: {
    default: "Psikolog Rabia Bakıcı | Çocuk ve Ergen Psikoloğu İstanbul Başakşehir - Oyun Terapisi",
    template: "%s | Psikolog Rabia Bakıcı"
  },
  description: "🎯 Psikolog Rabia Bakıcı - İstanbul Başakşehir'de uzman çocuk ve ergen psikoloğu. Oyun terapisi, aile danışmanlığı, kaygı tedavisi ve psikolojik değerlendirme. 5+ yıl deneyim ✨ Randevu: +90 (545) 285 52 83",
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
    "ergen psikolojik destek", "aile terapisi istanbul", "çocuk gelişim uzmanı"
  ],
  authors: [{ name: "Rabia Bakıcı", url: "https://psikolograbiabakici.com" }],
  creator: "Rabia Bakıcı",
  publisher: "Rabia Bakıcı",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://psikolograbiabakici.com',
    title: 'Psikolog Rabia Bakıcı | Çocuk ve Ergen Psikoloğu İstanbul Başakşehir - Oyun Terapisi',
    description: '🎯 Psikolog Rabia Bakıcı - İstanbul Başakşehir\'de uzman çocuk ve ergen psikoloğu. Oyun terapisi, aile danışmanlığı, kaygı tedavisi ve psikolojik değerlendirme. 5+ yıl deneyim ✨ Randevu: +90 (545) 285 52 83',
    siteName: 'Psikolog Rabia Bakıcı',
    images: [
      {
        url: '/images/rabiabakici.jpg',
        width: 1200,
        height: 630,
        alt: 'Psikolog Rabia Bakıcı - İstanbul Başakşehir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psikolog Rabia Bakıcı | Çocuk ve Ergen Psikoloğu İstanbul Başakşehir - Oyun Terapisi',
    description: '🎯 Psikolog Rabia Bakıcı - İstanbul Başakşehir\'de uzman çocuk ve ergen psikoloğu. Oyun terapisi, aile danışmanlığı, kaygı tedavisi ve psikolojik değerlendirme. 5+ yıl deneyim ✨',
    images: ['/images/rabiabakici.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console doğrulama kodu buraya gelecek
    yandex: 'yandex-verification-code', // Yandex Webmaster doğrulama kodu
    other: {
      'msvalidate.01': 'bing-site-verification-code', // Bing Webmaster doğrulama kodu
    },
  },
  category: 'health',
  classification: 'Psychology Practice',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${bubblegum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
