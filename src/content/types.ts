/**
 * İçerik modeli.
 *
 * SEO alanları (başlık, açıklama, slug, yazar, gözden geçirme tarihi, şema
 * girdileri) içerikle birlikte yapılandırılmış biçimde tutulur; sayfa şablonları
 * yalnızca bu modeli okur. Böylece sitemap, iç bağlantılar ve yapısal veri
 * içerikten otomatik türetilir (PRD §28).
 */

export type Faq = {
  question: string;
  answer: string;
};

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Reference = {
  label: string;
  url?: string;
};

/** Hizmet sayfası şablonunun beklediği alanların tamamı (PRD §8.2). */
export type ServicePage = {
  slug: string;
  image: string;
  imageAlt: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Hizmet kartlarında ve ilgili içerik modüllerinde kullanılan özet. */
  summary: string;
  /** Sayfanın açılışındaki kısa ve doğrudan yanıt. */
  answer: string;
  /** Kime uygun olduğunu anlatan bölüm. */
  suitableFor: string[];
  /** Ebeveynlerin sık fark ettiği belirtiler. */
  signs: string[];
  sections: ContentSection[];
  process: ProcessStep[];
  ageGroups: string;
  parentInvolvement: string;
  sessionFormat: string;
  /** Hizmetin vaat etmediği şeyler — abartılı beklentileri önler. */
  notPromised: string[];
  credentials: string[];
  faqs: Faq[];
  relatedServices: string[];
  relatedConcerns: string[];
  relatedArticles: string[];
  references?: Reference[];
  reviewed: string;
};

/** Ebeveynin problemle arama yaptığı sayfalar (PRD §7.2). */
export type ConcernPage = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  answer: string;
  /** Ebeveynlerin evde veya okulda gözlemlediği durumlar. */
  observations: string[];
  /** Olası nedenler — teşhis değil, olası açıklamalar. */
  possibleReasons: string[];
  sections: ContentSection[];
  /** Evde denenebilecek destekleyici yaklaşımlar. */
  homeSupport: string[];
  /** Profesyonel desteğin uygun olabileceğini düşündüren işaretler. */
  seekHelpSigns: string[];
  faqs: Faq[];
  /** Bu sorunla en çok ilgili hizmet sayfasının slug'ı. */
  primaryService: string;
  relatedServices: string[];
  relatedConcerns: string[];
  relatedArticles: string[];
  references?: Reference[];
  reviewed: string;
};

/** Bilgilendirici makale (PRD §8.5). */
export type ArticlePage = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Liste sayfalarında görünen özet. */
  excerpt: string;
  /** Girişte verilen kısa yanıt. */
  answer: string;
  published: string;
  reviewed: string;
  readingMinutes: number;
  sections: ContentSection[];
  keyPoints: string[];
  seekHelpSigns: string[];
  references?: Reference[];
  /** Makalenin yönlendirdiği birincil ticari sayfa. */
  primaryService: string;
  relatedConcerns: string[];
  relatedArticles: string[];
};
