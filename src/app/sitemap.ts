import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/articles";
import { CONCERNS } from "@/content/concerns";
import { LEGAL_DOCUMENTS } from "@/content/legal";
import { SERVICES } from "@/content/services";
import { canonicalUrl } from "@/lib/seo";
import { LAST_REVIEWED } from "@/lib/site";

/**
 * Site haritası, içerik modelinden otomatik üretilir; yeni bir hizmet, sorun
 * ya da yazı eklendiğinde ayrı bir güncelleme gerekmez (PRD §9.1, §28).
 *
 * Yalnızca canonical, indekslenebilir ve HTTP 200 dönen sayfalar listelenir;
 * 404 sayfası ve yönlendirilen eski adresler dâhil edilmez.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const reviewed = new Date(LAST_REVIEWED);

  const staticPages: MetadataRoute.Sitemap = [
    { url: canonicalUrl("/"), lastModified: reviewed, changeFrequency: "monthly", priority: 1 },
    { url: canonicalUrl("/hizmetler"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.9 },
    { url: canonicalUrl("/hakkimda"), lastModified: reviewed, changeFrequency: "yearly", priority: 0.8 },
    { url: canonicalUrl("/iletisim"), lastModified: reviewed, changeFrequency: "yearly", priority: 0.8 },
    { url: canonicalUrl("/sorunlar"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/kaynaklar"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.6 },
    {
      url: canonicalUrl("/kaynaklar/makaleler"),
      lastModified: reviewed,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/kaynaklar/sikca-sorulan-sorular"),
      lastModified: reviewed,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: canonicalUrl(`/hizmetler/${service.slug}`),
    lastModified: new Date(service.reviewed),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const concernPages: MetadataRoute.Sitemap = CONCERNS.map((concern) => ({
    url: canonicalUrl(`/sorunlar/${concern.slug}`),
    lastModified: new Date(concern.reviewed),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: canonicalUrl(`/kaynaklar/makaleler/${article.slug}`),
    lastModified: new Date(article.reviewed),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const legalPages: MetadataRoute.Sitemap = LEGAL_DOCUMENTS.map((doc) => ({
    url: canonicalUrl(doc.path),
    lastModified: new Date(doc.updated),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticPages, ...servicePages, ...concernPages, ...articlePages, ...legalPages];
}
