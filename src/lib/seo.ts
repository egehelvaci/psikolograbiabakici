import type { Metadata } from "next";
import {
  ADDRESS,
  AUTHOR,
  EMAIL,
  OPENING_HOURS,
  PHONE,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const DEFAULT_OG_IMAGE = "/images/og-card.png";

type BuildMetadataInput = {
  /** Tam başlık etiketi. Marka eki dahil yazılır; şablon uygulanmaz. */
  title: string;
  description: string;
  /** Kök göreli yol, ör. "/hizmetler/oyun-terapisi". */
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Kanonik adresi üretir. trailingSlash kapalı olduğu için hiçbir adres sonda
 * eğik çizgi taşımaz; ana sayfa da yalnızca kök adresle temsil edilir.
 */
export function canonicalUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

/**
 * Her indekslenebilir sayfa için tekil başlık, açıklama, canonical, Open Graph
 * ve Twitter kartı üretir (PRD §9.3).
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}: BuildMetadataInput): Metadata {
  const url = canonicalUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path === "/" ? "/" : path },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
      type,
      locale: "tr_TR",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* ------------------------------------------------------------------
   JSON-LD üreticileri

   Kural: yapısal veri yalnızca sayfada görünen ve doğrulanabilir bilgiyi
   yansıtır. Puan/yorum işaretlemesi kullanılmaz (PRD §9.5, §13).
   ------------------------------------------------------------------ */

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": ["ProfessionalService", "Psychologist"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: ["Rabia Bakıcı Psikolog", "Çocuk Psikoloğu Rabia Bakıcı"],
    url: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${AUTHOR.image}`,
      width: 800,
      height: 600,
      caption: `${SITE_NAME} — İstanbul Başakşehir'de çocuk ve ergen psikoloğu`,
    },
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.jpg`,
      width: 200,
      height: 200,
    },
    telephone: PHONE,
    email: EMAIL,
    description:
      "İstanbul Başakşehir'de çocuk ve ergen psikoloğu. Oyun terapisi, çocuklarda kaygı, davranış problemleri, psikolojik değerlendirme ve ebeveyn danışmanlığı.",
    founder: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ADDRESS.geo.latitude,
      longitude: ADDRESS.geo.longitude,
    },
    openingHoursSpecification: OPENING_HOURS.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...slot.days],
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [...SAME_AS],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Başakşehir" },
      { "@type": "City", name: "İstanbul" },
    ],
    availableLanguage: ["Turkish"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Randevu ve bilgi",
      telephone: PHONE,
      email: EMAIL,
      availableLanguage: ["Turkish"],
    },
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR.name,
    jobTitle: AUTHOR.title,
    description: AUTHOR.shortBio,
    image: `${SITE_URL}${AUTHOR.image}`,
    url: `${SITE_URL}${AUTHOR.profileUrl}`,
    sameAs: [...SAME_AS],
    worksFor: { "@id": ORGANIZATION_ID },
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Bakü Devlet Üniversitesi" },
      { "@type": "EducationalOrganization", name: "İstanbul Esenyurt Üniversitesi" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Yüksek Lisans",
      name: AUTHOR.credentials,
      educationalLevel: "Yüksek Lisans",
    },
    knowsAbout: [
      "Çocuk Psikolojisi",
      "Ergen Psikolojisi",
      "Oyun Terapisi",
      "Ebeveyn Danışmanlığı",
      "Çocuklarda Kaygı",
      "Psikolojik Değerlendirme",
    ],
    knowsLanguage: [{ "@type": "Language", name: "Türkçe", alternateName: "tr" }],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "tr-TR",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function webPageSchema({
  path,
  title,
  description,
  lastReviewed,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  lastReviewed?: string;
  /** WebPage alt türü: AboutPage, ContactPage, CollectionPage vb. */
  type?: string;
}) {
  return {
    "@type": type,
    "@id": `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name: title,
    description,
    inLanguage: "tr-TR",
    isPartOf: { "@id": WEBSITE_ID },
    ...(lastReviewed
      ? { lastReviewed, reviewedBy: { "@id": PERSON_ID } }
      : {}),
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export type FaqItem = { question: string; answer: string };

/** FAQPage yalnızca soru ve yanıtların tamamı sayfada görünür olduğunda kullanılır. */
export function faqSchema(faqs: FaqItem[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${canonicalUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    "@id": `${canonicalUrl(path)}#service`,
    name,
    description,
    serviceType: name,
    url: canonicalUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Başakşehir" },
      { "@type": "City", name: "İstanbul" },
    ],
    audience: { "@type": "Audience", audienceType: "Çocuklar, ergenler ve ebeveynler" },
  };
}

export function articleSchema({
  path,
  headline,
  description,
  published,
  reviewed,
  image = DEFAULT_OG_IMAGE,
}: {
  path: string;
  headline: string;
  description: string;
  published: string;
  reviewed: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${canonicalUrl(path)}#article`,
    headline,
    description,
    inLanguage: "tr-TR",
    mainEntityOfPage: { "@id": `${canonicalUrl(path)}#webpage` },
    image: `${SITE_URL}${image}`,
    datePublished: published,
    dateModified: reviewed,
    author: { "@id": PERSON_ID },
    reviewedBy: { "@id": PERSON_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** Birden çok şema nesnesini tek bir @graph belgesinde birleştirir. */
export function graph(...nodes: Array<Record<string, unknown>>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
