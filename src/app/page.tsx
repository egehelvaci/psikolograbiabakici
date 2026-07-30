import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import ScrollTopButton from "@/components/ScrollTopButton";
import ImageProtection from "@/components/ImageProtection";
import ProtectedImage from "@/components/ProtectedImage";
import {
  SITE_URL,
  SITE_NAME,
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/site";

const SERVICES = [
  {
    title: "Oyun Terapisi",
    description:
      "Çocukların duygusal ve davranışsal sorunlarını oyun yoluyla ifade etmelerine ve çözüm bulmalarına yardımcı oluyoruz.",
    featured: true,
  },
  {
    title: "Psikolojik Değerlendirme",
    description:
      "Çocuğunuzun gelişimsel ihtiyaçlarını belirlemek için kapsamlı psikolojik değerlendirmeler yapıyoruz.",
  },
  {
    title: "Aile Danışmanlığı",
    description:
      "Çocuğunuzun gelişiminde sizi desteklemek için aile danışmanlığı hizmeti sunuyoruz.",
  },
  {
    title: "Eğitim Danışmanlığı",
    description:
      "Çocuğunuzun eğitim hayatında karşılaştığı zorlukları aşması için destek sağlıyoruz.",
  },
  {
    title: "Kaygı Terapisi",
    description:
      "Çocuk ve ergenlerin yaşadığı kaygı sorunlarıyla baş etmesine yardımcı oluyoruz.",
  },
  {
    title: "Sosyal Beceri Gelişimi",
    description:
      "Çocukların sosyal becerilerini geliştirerek akran ilişkilerinde başarılı olmalarını sağlıyoruz.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Çocuğumuzun kaygı sorunlarıyla başa çıkmasında çok yardımcı oldu. Artık çok daha mutlu ve özgüvenli.",
    name: "Ayşe Y.",
    role: "Anne",
  },
  {
    quote:
      "Oğlumun dikkat eksikliği sorunu için başvurduk. Hem bize hem de oğlumuza çok destek oldu.",
    name: "Mehmet K.",
    role: "Baba",
  },
  {
    quote:
      "Kızımın okul fobisini aşmasında büyük rol oynadı. Profesyonel yaklaşımı için teşekkür ederiz.",
    name: "Zeynep T.",
    role: "Anne",
  },
];

/**
 * Schema.org yapısal verileri — sunucu tarafında render edilir ve ilk
 * HTML yanıtında yer alır; arama motorlarının JavaScript çalıştırmasına
 * gerek kalmaz.
 */
const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Psychologist", "MedicalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    "name": SITE_NAME,
    "alternateName": ["Rabia Bakıcı Psikolog", "Çocuk Psikoloğu Rabia Bakıcı"],
    "image": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/images/rabiabakici.jpg`,
      "width": 800,
      "height": 600,
      "caption": "Psikolog Rabia Bakıcı - İstanbul Başakşehir'de çocuk ve ergen psikoloğu",
    },
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/images/logo.jpg`,
      "width": 200,
      "height": 200,
    },
    "url": SITE_URL,
    "telephone": PHONE,
    "email": EMAIL,
    "description":
      "İstanbul Başakşehir'de 5+ yıl deneyimli çocuk ve ergen psikoloğu. Oyun terapisi, aile danışmanlığı, kaygı tedavisi ve psikolojik değerlendirme hizmetleri. Klinik Psikoloji yüksek lisans mezunu.",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Başakşehir",
      "addressRegion": "İstanbul",
      "addressCountry": "TR",
      "postalCode": "34480",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0860",
      "longitude": "28.8026",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday"],
        "opens": "12:00",
        "closes": "19:00",
      },
    ],
    "sameAs": [INSTAGRAM_URL, LINKEDIN_URL],
    "priceRange": "₺₺",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "TRY",
    "areaServed": [
      { "@type": "City", "name": "İstanbul" },
      { "@type": "AdministrativeArea", "name": "Başakşehir" },
    ],
    "serviceType": ["Psikolojik Danışmanlık", "Çocuk Psikolojisi", "Ergen Psikolojisi"],
    "medicalSpecialty": ["Child Psychology", "Adolescent Psychology", "Play Therapy"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Psikolojik Hizmetler",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oyun Terapisi",
            "description": "Çocukların duygusal ve davranışsal sorunlarını oyun yoluyla tedavi etme",
            "category": "Çocuk Psikolojisi",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Psikolojik Değerlendirme",
            "description": "Çocuk ve ergenlerin gelişimsel ihtiyaçlarının belirlenmesi",
            "category": "Değerlendirme",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aile Danışmanlığı",
            "description": "Çocuğun gelişiminde aileye destek ve rehberlik",
            "category": "Aile Terapisi",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kaygı Terapisi",
            "description": "Çocuk ve ergenlerde kaygı bozukluklarının tedavisi",
            "category": "Terapi",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Eğitim Danışmanlığı",
            "description": "Eğitim sürecinde karşılaşılan zorlukların çözümü",
            "category": "Eğitim Desteği",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sosyal Beceri Geliştirme",
            "description": "Çocuklarda sosyal becerilerin geliştirilmesi",
            "category": "Gelişim Desteği",
          },
        },
      ],
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE,
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English"],
      "email": EMAIL,
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday"],
        "opens": "12:00",
        "closes": "19:00",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    "name": "Rabia Bakıcı",
    "jobTitle": "Klinik Psikolog",
    "description": "5+ yıl deneyimli çocuk ve ergen psikoloğu. Oyun terapisi uzmanı.",
    "image": `${SITE_URL}/images/rabiabakici.jpg`,
    "url": SITE_URL,
    "sameAs": [INSTAGRAM_URL, LINKEDIN_URL],
    "worksFor": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Bakü Devlet Üniversitesi",
      },
      {
        "@type": "EducationalOrganization",
        "name": "İstanbul Esenyurt Üniversitesi",
      },
    ],
    "knowsAbout": [
      "Çocuk Psikolojisi",
      "Ergen Psikolojisi",
      "Oyun Terapisi",
      "Aile Danışmanlığı",
      "Kaygı Terapisi",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": SITE_NAME,
    "description":
      "İstanbul Başakşehir'de çocuk ve ergen psikoloğu. Oyun terapisi, aile danışmanlığı ve psikolojik değerlendirme hizmetleri.",
    "inLanguage": "tr-TR",
    "publisher": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <ImageProtection />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" aria-labelledby="hero-baslik">
          {/* Yumuşak ışık dekorları */}
          <div className="glow w-[32rem] h-[32rem] -top-40 -left-40 bg-primary-tint" aria-hidden="true" />
          <div className="glow w-[26rem] h-[26rem] top-1/3 -right-32 bg-accent-tint" aria-hidden="true" />

          <div className="container relative mx-auto px-5 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <h1 id="hero-baslik">
                  <span className="eyebrow mb-5">İstanbul Başakşehir Çocuk ve Ergen Psikoloğu</span>
                  <span className="block display-1">
                    Psikolog <em className="not-italic text-primary">Rabia Bakıcı</em>
                  </span>
                  <span className="block mt-4 font-serif italic font-normal text-ink-soft text-[clamp(1.25rem,2.4vw,1.75rem)] tracking-tight">
                    — Oyun Terapisi Uzmanı
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="lead mt-7">
                  İstanbul Başakşehir&apos;de oyun terapisi ve çocuk odaklı yaklaşımlarla çocuğunuzun sağlıklı
                  gelişimine destek oluyoruz. Dikkat eksikliği, kaygı bozuklukları, davranış problemleri ve sosyal
                  beceri geliştirme konularında uzman hizmet.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="flex flex-col sm:flex-row gap-3 mt-9">
                  <a
                    href={`${WHATSAPP_URL}?text=Merhaba%2C%20randevu%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Randevu Al
                  </a>
                  <a
                    href={`${WHATSAPP_URL}?text=Merhaba%2C%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Bilgi Al
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <dl className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-line max-w-lg">
                  <div className="flex flex-col">
                    <dt className="order-last text-sm text-ink-soft/90 mt-1">Yıl Deneyim</dt>
                    <dd className="font-serif text-3xl font-semibold text-ink">5+</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-last text-sm text-ink-soft/90 mt-1">Mutlu Aile</dt>
                    <dd className="font-serif text-3xl font-semibold text-ink">50+</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-last text-sm text-ink-soft/90 mt-1">Klinik Psikoloji</dt>
                    <dd className="font-serif text-3xl font-semibold text-ink">Y.L.</dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={200} className="w-full max-w-sm">
                <figure className="frame-arch frame-offset relative w-full aspect-[4/5] bg-surface shadow-[var(--shadow-lg)]">
                  <ProtectedImage
                    src="/images/family.jpg"
                    alt="Gün batımında el ele yürüyen anne, baba ve çocuk — aile danışmanlığı ve çocuk psikolojisi desteği"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section id="hizmetler" className="section section-alt" aria-labelledby="hizmetler-baslik">
          <div className="container mx-auto px-5 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-14">
                <span className="eyebrow mb-4">Uzman Psikolojik Danışmanlık</span>
                <h2 id="hizmetler-baslik" className="display-2">
                  Çocuk Psikoloğu İstanbul Başakşehir — Hizmetlerimiz
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) * 90}>
                  <article
                    className={`card card-hover service-card h-full p-7 sm:p-8 flex flex-col ${
                      service.featured ? "bg-primary-tint/60" : ""
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-6">
                      <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="rule w-10" aria-hidden="true" />
                    </div>
                    <h3 className="title-3 mb-3">{service.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed">{service.description}</p>
                    {service.featured && (
                      <p className="mt-auto pt-6 text-sm font-medium text-primary">
                        Uzmanlık alanımız — çocuğun dilinden konuşan terapi yöntemi
                      </p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Hakkımda */}
        <section id="hakkimda" className="section" aria-labelledby="hakkimda-baslik">
          <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <Reveal className="w-full max-w-xs sm:max-w-sm">
                <figure className="frame-arch frame-offset relative w-full aspect-[4/5] bg-surface shadow-[var(--shadow-lg)]">
                  <ProtectedImage
                    src="/images/rabiabakici.jpg"
                    alt="Psikolog Rabia Bakıcı, oyun terapisi seansında kullanılan oyuncaklarla birlikte"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </figure>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow mb-4">Hakkımda</span>
                <h2 id="hakkimda-baslik" className="display-2 mb-8">
                  Çocuk Psikoloğu Rabia Bakıcı Kimdir?
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="lead mb-5">
                  Merhaba, ben Psikolog Rabia Bakıcı. Çocuk ve ergen psikolojisi alanında 5 yılı aşkın deneyime
                  sahibim.
                </p>
                <p className="mb-5 max-w-xl">
                  Bakü Devlet Üniversitesi&apos;nden mezun olduktan sonra, İstanbul Esenyurt Üniversitesi&apos;nde
                  Klinik Psikoloji yüksek lisansımı tamamladım. Uzmanlık alanım oyun terapisi ve çocuklarda davranış
                  problemleridir.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <blockquote className="relative border-l-2 border-accent pl-6 py-1 my-8 max-w-xl">
                  <p className="font-serif italic text-xl text-ink leading-relaxed">
                    Her çocuğun biricik olduğuna inanıyor ve terapiyi çocuğun ihtiyaçlarına göre şekillendiriyorum.
                  </p>
                </blockquote>
                <ul className="flex flex-col gap-3 max-w-xl">
                  <li className="flex items-center gap-4 text-[0.95rem]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    Bakü Devlet Üniversitesi — Psikoloji Lisansı
                  </li>
                  <li className="flex items-center gap-4 text-[0.95rem]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    İstanbul Esenyurt Üniversitesi — Klinik Psikoloji Yüksek Lisansı
                  </li>
                  <li className="flex items-center gap-4 text-[0.95rem]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    Oyun terapisi ve çocuklarda davranış problemleri uzmanlığı
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Yorumlar */}
        <section id="yorumlar" className="section section-alt" aria-labelledby="yorumlar-baslik">
          <div className="container mx-auto px-5 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-14">
                <span className="eyebrow mb-4">Başarı Hikayeleri</span>
                <h2 id="yorumlar-baslik" className="display-2">
                  Memnun Ailelerimizin Yorumları
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 100}>
                  <article className="card card-hover h-full p-7 sm:p-8 flex flex-col">
                    <span className="font-serif text-5xl leading-none text-accent/70 select-none" aria-hidden="true">
                      &ldquo;
                    </span>
                    <blockquote className="font-serif italic text-lg text-ink leading-relaxed mt-2 mb-6 flex-1">
                      {t.quote}
                    </blockquote>
                    <footer className="flex items-center justify-between pt-5 border-t border-line">
                      <p className="text-sm">
                        <span className="font-semibold text-ink">{t.name}</span>
                        <span className="text-ink-soft/80"> · {t.role}</span>
                      </p>
                      <span className="text-gold text-sm tracking-[0.1em]" aria-label="5 üzerinden 5 yıldız">
                        ★★★★★
                      </span>
                    </footer>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="section" aria-labelledby="iletisim-baslik">
          <div className="container mx-auto px-5 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-14">
                <span className="eyebrow mb-4">İstanbul Başakşehir</span>
                <h2 id="iletisim-baslik" className="display-2">
                  Çocuk Psikoloğu Randevu Al — İletişim
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <Reveal className="lg:col-span-5 order-2 lg:order-1">
                <h3 className="title-3 mb-7">Bize Ulaşın</h3>
                <address className="not-italic flex flex-col divide-y divide-[var(--line)]">
                  <p className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm uppercase tracking-[0.14em] text-ink-soft/75">Konum</span>
                    <span className="text-ink font-medium">İstanbul, Başakşehir</span>
                  </p>
                  <p className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm uppercase tracking-[0.14em] text-ink-soft/75">Telefon</span>
                    <a href={`tel:${PHONE}`} className="text-ink font-medium hover:text-primary transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <p className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm uppercase tracking-[0.14em] text-ink-soft/75">E-posta</span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-ink font-medium hover:text-primary transition-colors break-all text-right"
                    >
                      {EMAIL}
                    </a>
                  </p>
                  <p className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm uppercase tracking-[0.14em] text-ink-soft/75">Çalışma Saatleri</span>
                    <span className="text-ink font-medium">Pazartesi – Salı, 12:00 – 19:00</span>
                  </p>
                </address>

                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="Instagram sayfamızı ziyaret edin"
                  >
                    Instagram
                  </a>
                  <a
                    href={`${LINKEDIN_URL}?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="LinkedIn profilimizi ziyaret edin"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="WhatsApp üzerinden bizimle iletişime geçin"
                  >
                    WhatsApp
                  </a>
                </div>
              </Reveal>

              <Reveal delay={140} className="lg:col-span-7 order-1 lg:order-2">
                <form className="card p-7 sm:p-9" aria-label="İletişim Formu">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-ink">
                        Ad Soyad
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="input"
                        placeholder="Adınız Soyadınız"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-ink">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="input"
                        placeholder="+90 (___) ___ __ __"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-ink">
                      E-posta
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="input"
                      placeholder="ornek@mail.com"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-ink">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="input h-32 resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                      required
                      aria-required="true"
                    ></textarea>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full mt-7"
                    aria-label="WhatsApp üzerinden iletişime geç"
                  >
                    WhatsApp&apos;tan İletişime Geç
                  </a>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-surface">
        <div className="container mx-auto px-5 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="flex items-center gap-3" aria-label="Psikolog Rabia Bakıcı - Ana Sayfa">
              <span className="relative w-10 h-10 rounded-full overflow-hidden border border-line bg-surface shrink-0">
                <ProtectedImage
                  src="/images/logo.jpg"
                  alt="Psikolog Rabia Bakıcı logosu"
                  fill
                  className="object-cover scale-[1.4]"
                  sizes="40px"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif font-semibold text-ink">Psikolog Rabia Bakıcı</span>
                <span className="text-xs text-ink-soft/80">Çocuk ve Ergen Psikoloğu · İstanbul Başakşehir</span>
              </span>
            </Link>

            <nav aria-label="Sosyal Medya" className="flex items-center gap-6">
              <a
                href={INSTAGRAM_URL}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm"
                aria-label="Instagram sayfamız"
              >
                Instagram
              </a>
              <a
                href={`${LINKEDIN_URL}?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app`}
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm"
                aria-label="LinkedIn profilimiz"
              >
                LinkedIn
              </a>
              <a
                href={WHATSAPP_URL}
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm"
                aria-label="WhatsApp üzerinden iletişim"
              >
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="rule mt-10 mb-6" aria-hidden="true" />
          <p className="text-sm text-center md:text-left text-ink-soft/80">
            &copy; {new Date().getFullYear()} Psikolog Rabia Bakıcı. Tüm Hakları Saklıdır.
          </p>
        </div>
      </footer>

      <ScrollTopButton />
    </div>
  );
}
