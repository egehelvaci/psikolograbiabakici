import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import ProtectedImage from "@/components/ProtectedImage";
import Reveal from "@/components/Reveal";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import TrackedLink from "@/components/TrackedLink";
import { CONCERNS } from "@/content/concerns";
import { HOME_FAQS } from "@/content/faq";
import { SERVICES } from "@/content/services";
import { TESTIMONIALS, TESTIMONIAL_DISCLOSURE } from "@/content/testimonials";
import { buildMetadata, faqSchema, graph, webPageSchema } from "@/lib/seo";
import {
  ADDRESS,
  APPOINTMENT_MESSAGE,
  AUTHOR,
  CTA_PRIMARY_LABEL,
  EMAIL,
  EMERGENCY,
  LAST_REVIEWED,
  OPENING_HOURS_DISPLAY,
  PHONE,
  PHONE_DISPLAY,
  RESPONSE_TIME_DISPLAY,
  whatsappLink,
} from "@/lib/site";

const TITLE = "Başakşehir Çocuk ve Ergen Psikoloğu | Rabia Bakıcı";
const DESCRIPTION =
  "Başakşehir'de çocuk ve ergen psikolojisi, oyun terapisi, kaygı, davranış sorunları ve ebeveyn danışmanlığı hakkında bilgi alın.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  ogImageAlt:
    "Psikolog Rabia Bakıcı — İstanbul Başakşehir çocuk ve ergen psikoloğu, oyun terapisi",
});

const PROCESS = [
  {
    title: "Randevu talebi",
    description:
      "WhatsApp ya da telefonla ulaşırsınız. Çocuğunuzun yaşını ve kısaca başvuru nedeninizi paylaşmanız yeterlidir.",
  },
  {
    title: "Ebeveyn görüşmesi",
    description:
      "İlk görüşme genellikle çocuk olmadan yapılır. Gelişim öyküsü ve sizi endişelendiren durum ayrıntılı biçimde konuşulur.",
  },
  {
    title: "Değerlendirme",
    description:
      "Gerekiyorsa çocukla tanışma seansları yapılır; gözlem ve yaşa uygun araçlarla durum değerlendirilir.",
  },
  {
    title: "Plan ve çalışma",
    description:
      "Hedefler, seans düzeni ve tahmini süre sizinle birlikte belirlenir. İlerleme düzenli aralıklarla gözden geçirilir.",
  },
];

export default function Home() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            title: TITLE,
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
          }),
          faqSchema(HOME_FAQS, "/"),
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-baslik">
        <div className="glow w-[32rem] h-[32rem] -top-40 -left-40 bg-primary-tint" aria-hidden="true" />
        <div className="glow w-[26rem] h-[26rem] top-1/3 -right-32 bg-accent-tint" aria-hidden="true" />

        <div className="container relative mx-auto px-5 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow mb-5">
                {AUTHOR.title} {AUTHOR.name} · {AUTHOR.credentials}
              </span>
              <h1 id="hero-baslik" className="display-1">
                Başakşehir <em className="not-italic text-primary">Çocuk ve Ergen</em> Psikoloğu
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-7">
                Oyun terapisi ve çocuk odaklı yaklaşımlarla; kaygı, davranış
                problemleri, okul uyumu ve akran ilişkileri gibi alanlarda çocuklara
                ve ebeveynlere destek sunuyorum. Sürecin nasıl ilerleyeceği, hedefler
                ve sınırlar baştan açıkça konuşulur.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <TrackedLink
                  href={whatsappLink(APPOINTMENT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  event="generate_lead"
                  eventParams={{ method: "whatsapp", cta_location: "hero" }}
                >
                  {CTA_PRIMARY_LABEL}
                </TrackedLink>
                <Link href="/hizmetler" className="btn btn-secondary">
                  Hizmetleri İncele
                </Link>
              </div>
              <p className="text-sm text-ink-soft/85 mt-5">
                {ADDRESS.display} · {OPENING_HOURS_DISPLAY} · {RESPONSE_TIME_DISPLAY}
              </p>
            </Reveal>
            <Reveal delay={320}>
              <dl className="grid grid-cols-3 gap-6 mt-11 pt-8 border-t border-line max-w-lg">
                <div className="flex flex-col">
                  <dt className="order-last text-sm text-ink-soft/90 mt-1">Yıl deneyim</dt>
                  <dd className="font-serif text-3xl font-semibold text-ink">5+</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-last text-sm text-ink-soft/90 mt-1">Yaş aralığı</dt>
                  <dd className="font-serif text-3xl font-semibold text-ink">3–18</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-last text-sm text-ink-soft/90 mt-1">Klinik psikoloji</dt>
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
                  alt="Gün batımında el ele yürüyen anne, baba ve çocuk"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
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
            <div className="max-w-2xl mb-12">
              <span className="eyebrow mb-4">Hizmetler</span>
              <h2 id="hizmetler-baslik" className="display-2">
                Hangi konularda destek sunuluyor?
              </h2>
              <p className="lead mt-5">
                Her hizmet, çocuğun yaşına ve zorlandığı alana göre farklı bir
                çerçevede yürütülür. Ayrıntılı süreç bilgisi için ilgili sayfayı
                inceleyebilirsiniz.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((service, i) => (
              <li key={service.slug} className="h-full">
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <TrackedInternalLink
                    href={`/hizmetler/${service.slug}`}
                    className="card card-hover service-card h-full p-7 sm:p-8 flex flex-col"
                    event="select_service"
                    eventParams={{
                      page_type: "home",
                      service_name: service.slug,
                      cta_location: "home_services",
                    }}
                  >
                    <span className="flex items-baseline justify-between mb-6">
                      <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="rule w-10" aria-hidden="true" />
                    </span>
                    <h3 className="title-3 mb-3">{service.navLabel}</h3>
                    <p className="text-[0.95rem] leading-relaxed flex-1">{service.summary}</p>
                    <span className="text-sm font-medium text-primary mt-6">
                      Ayrıntılı bilgi →
                    </span>
                  </TrackedInternalLink>
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="mt-9">
            <Link href="/hizmetler" className="btn btn-secondary">
              Tüm hizmetleri gör
            </Link>
          </p>
        </div>
      </section>

      {/* Süreç */}
      <section className="section" aria-labelledby="surec-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow mb-4">Süreç</span>
              <h2 id="surec-baslik" className="display-2">
                Nasıl ilerliyoruz?
              </h2>
            </div>
          </Reveal>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 80}>
                  <div className="card h-full p-7">
                    <span className="service-num">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="title-3 mt-4 mb-3">{step.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-sm text-ink-soft/85">
            Her başvuru bir terapi süreciyle sonuçlanmak zorunda değildir. Bazı
            durumlarda tek bir ebeveyn görüşmesi ve birkaç somut öneri yeterli olur.
          </p>
        </div>
      </section>

      {/* Sık görülen durumlar */}
      <section className="section section-alt" aria-labelledby="durumlar-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow mb-4">Ebeveynler için</span>
              <h2 id="durumlar-baslik" className="display-2">
                Sık görülen durumlar
              </h2>
              <p className="lead mt-5">
                Yaşadığınız durumu tanımlayan bir başlık varsa, oradan başlayabilirsiniz.
                Her sayfa olası nedenleri ve destek almayı düşündüren işaretleri açıklar.
              </p>
            </div>
          </Reveal>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CONCERNS.map((concern, index) => (
              <li key={concern.slug} className="h-full">
                <Reveal delay={(index % 3) * 80} className="h-full">
                  <Link href={`/sorunlar/${concern.slug}`} className="card card-hover h-full p-7 flex flex-col">
                    <h3 className="title-3 mb-3">{concern.navLabel}</h3>
                    <p className="text-[0.95rem] leading-relaxed flex-1">{concern.summary}</p>
                    <span className="text-sm font-medium text-primary mt-6">Devamını oku →</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hakkımda özeti */}
      <section id="hakkimda" className="section" aria-labelledby="hakkimda-baslik">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <Reveal className="w-full max-w-xs sm:max-w-sm">
              <figure className="frame-arch frame-offset relative w-full aspect-[4/5] bg-surface shadow-[var(--shadow-lg)]">
                <ProtectedImage
                  src={AUTHOR.image}
                  alt={`${AUTHOR.title} ${AUTHOR.name}, oyun terapisi materyalleriyle çalışma odasında`}
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
              <h2 id="hakkimda-baslik" className="display-2 mb-7">
                Psikolog Rabia Bakıcı
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mb-5">
                Çocuk ve ergen psikolojisi alanında 5 yılı aşkın deneyime sahibim.
                Bakü Devlet Üniversitesi&apos;nde psikoloji lisansımı, İstanbul
                Esenyurt Üniversitesi&apos;nde Klinik Psikoloji yüksek lisansımı
                tamamladım.
              </p>
              <p className="mb-6 max-w-xl">
                Uzmanlaştığım alanlar oyun terapisi ve çocuklarda davranış
                problemleridir. Çalışmanın merkezinde çocuğun kendi ritmi ve ebeveyn
                iş birliği bulunur; hedefler ve sınırlar süreç boyunca sizinle
                birlikte gözden geçirilir.
              </p>
              <ul className="flex flex-col gap-3 max-w-xl mb-8">
                <li className="flex items-start gap-4 text-[0.95rem]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" aria-hidden="true" />
                  Bakü Devlet Üniversitesi — Psikoloji lisansı
                </li>
                <li className="flex items-start gap-4 text-[0.95rem]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" aria-hidden="true" />
                  İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı
                </li>
                <li className="flex items-start gap-4 text-[0.95rem]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" aria-hidden="true" />
                  Oyun terapisi uygulama eğitimi ve saha deneyimi
                </li>
              </ul>
              <Link href="/hakkimda" className="btn btn-secondary">
                Eğitim ve yaklaşımın tamamı
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section id="yorumlar" className="section section-alt" aria-labelledby="yorumlar-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-10">
              <span className="eyebrow mb-4">Aile geri bildirimleri</span>
              <h2 id="yorumlar-baslik" className="display-2">
                Çalıştığımız ailelerin ifadeleri
              </h2>
              <p className="text-sm text-ink-soft/85 mt-5">{TESTIMONIAL_DISCLOSURE}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="marquee" aria-label="Ailelerin izniyle paylaşılan geri bildirimler">
              <div className="marquee-track">
                {[false, true].map((isCopy) => (
                  <div
                    key={isCopy ? "kopya" : "asil"}
                    className="marquee-group"
                    aria-hidden={isCopy || undefined}
                  >
                    {TESTIMONIALS.map((t) => (
                      <article
                        key={t.name}
                        className="card h-auto self-stretch w-[19rem] sm:w-[23rem] shrink-0 p-7 sm:p-8 flex flex-col"
                      >
                        <span
                          className="font-serif text-5xl leading-none text-accent/70 select-none"
                          aria-hidden="true"
                        >
                          &ldquo;
                        </span>
                        <blockquote className="font-serif italic text-lg text-ink leading-relaxed mt-2 mb-6 flex-1">
                          {t.quote}
                        </blockquote>
                        <footer className="pt-5 border-t border-line">
                          <p className="text-sm">
                            <span className="font-semibold text-ink">{t.name}</span>
                            <span className="text-ink-soft/80"> · {t.role}</span>
                          </p>
                        </footer>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SSS */}
      <section className="section" aria-labelledby="sss-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow mb-4">Sıkça sorulanlar</span>
                <h2 id="sss-baslik" className="display-2 mb-6">
                  Sık sorulan sorular
                </h2>
                <p className="mb-7">
                  Randevu süreci, hizmet kapsamı ve gizlilik hakkında en çok sorulan
                  sorular. Daha ayrıntılı yanıtlar için SSS sayfasına bakabilirsiniz.
                </p>
                <Link href="/kaynaklar/sikca-sorulan-sorular" className="btn btn-secondary btn-sm">
                  Tüm soruları gör
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={HOME_FAQS} headingLevel="h3" />
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="section section-alt" aria-labelledby="iletisim-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow mb-4">İstanbul Başakşehir</span>
                <h2 id="iletisim-baslik" className="display-2 mb-6">
                  Randevu ve iletişim
                </h2>
                <p className="lead mb-8">
                  Nasıl ilerlemek istediğinizden emin değilseniz, önce yalnızca
                  ebeveyn görüşmesi planlayabiliriz. Görüşmede durumu birlikte
                  değerlendirir ve uygun adımı belirleriz.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <dl className="contact-list">
                  <div>
                    <dt>Konum</dt>
                    <dd>
                      <address className="not-italic">{ADDRESS.display}</address>
                    </dd>
                  </div>
                  <div>
                    <dt>Telefon</dt>
                    <dd>
                      <TrackedLink
                        href={`tel:${PHONE}`}
                        event="click_phone"
                        eventParams={{ cta_location: "home_contact" }}
                      >
                        {PHONE_DISPLAY}
                      </TrackedLink>
                    </dd>
                  </div>
                  <div>
                    <dt>E-posta</dt>
                    <dd>
                      <TrackedLink
                        href={`mailto:${EMAIL}`}
                        className="break-all"
                        event="click_email"
                        eventParams={{ cta_location: "home_contact" }}
                      >
                        {EMAIL}
                      </TrackedLink>
                    </dd>
                  </div>
                  <div>
                    <dt>Görüşme saatleri</dt>
                    <dd>{OPENING_HOURS_DISPLAY}</dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-3 mt-8">
                  <TrackedLink
                    href={whatsappLink(APPOINTMENT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    event="generate_lead"
                    eventParams={{ method: "whatsapp", cta_location: "home_contact" }}
                  >
                    {CTA_PRIMARY_LABEL}
                  </TrackedLink>
                  <Link href="/iletisim" className="btn btn-secondary">
                    Ulaşım ve konum
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={140}>
                <div className="card p-7 sm:p-9">
                  <h3 className="title-3 mb-4">Randevu talebi nasıl iletilir?</h3>
                  <ol className="step-list step-list-compact">
                    <li>
                      <span className="step-num" aria-hidden="true">
                        01
                      </span>
                      <div>
                        <h4 className="step-title">WhatsApp ya da telefon</h4>
                        <p>Çocuğunuzun yaşını ve kısaca başvuru nedeninizi paylaşın.</p>
                      </div>
                    </li>
                    <li>
                      <span className="step-num" aria-hidden="true">
                        02
                      </span>
                      <div>
                        <h4 className="step-title">Uygun saatin belirlenmesi</h4>
                        <p>{RESPONSE_TIME_DISPLAY}</p>
                      </div>
                    </li>
                    <li>
                      <span className="step-num" aria-hidden="true">
                        03
                      </span>
                      <div>
                        <h4 className="step-title">Adres bilgisi</h4>
                        <p>
                          Randevu onaylandığında görüşme yerinin tam adresi ve ulaşım
                          bilgileri sizinle paylaşılır.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <p className="field-hint mt-6">
                    Hassas sağlık bilgilerini ilk mesajınızda paylaşmanıza gerek yok;
                    ayrıntıları görüşmede ele alırız. Kişisel verilerin nasıl işlendiğini{" "}
                    <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>{" "}
                    sayfasında bulabilirsiniz.
                  </p>
                  <p className="notice notice-compact mt-6" role="note">
                    Bu site acil yardım hizmeti değildir. Acil bir durumda{" "}
                    <a href={`tel:${EMERGENCY.number}`}>{EMERGENCY.numberLabel}</a>&apos;ni
                    arayın.
                  </p>
                  <p className="mt-6">
                    <Link href="/iletisim" className="btn btn-secondary btn-sm">
                      Randevu talep formunu aç
                    </Link>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
