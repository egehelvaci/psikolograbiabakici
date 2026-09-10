import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import "./editorial.css";
import Analytics from "@/components/Analytics";
import ImageProtection from "@/components/ImageProtection";
import ScrollTopButton from "@/components/ScrollTopButton";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import JsonLd from "@/components/JsonLd";
import { graph, organizationSchema, personSchema, websiteSchema } from "@/lib/seo";
import { GOOGLE_SITE_VERIFICATION, SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#723e49",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Başakşehir Çocuk ve Ergen Psikoloğu | Rabia Bakıcı",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Başakşehir'de çocuk ve ergen psikolojisi, oyun terapisi, kaygı, davranış sorunları ve ebeveyn danışmanlığı hakkında bilgi alın.",
  authors: [{ name: "Rabia Bakıcı", url: `${SITE_URL}/hakkimda` }],
  creator: "Rabia Bakıcı",
  publisher: "Rabia Bakıcı",
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
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

/** Site geneli varlıklar; sayfa özel şemaları bu düğümlere @id ile bağlanır. */
const SITE_GRAPH = graph(organizationSchema(), personSchema(), websiteSchema());

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
          <style>{`.reveal{opacity:1 !important;transform:none !important}.nav-group:focus-within .nav-panel{opacity:1;visibility:visible;transform:none}`}</style>
        </noscript>
        <JsonLd data={SITE_GRAPH} />
        <a href="#icerik" className="skip-link">
          İçeriğe geç
        </a>
        <ImageProtection />
        <SiteHeader />
        <main id="icerik">{children}</main>
        <SiteFooter />
        <ScrollTopButton />
        <StickyCta />
        <Analytics />
      </body>
    </html>
  );
}

