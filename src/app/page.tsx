import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import ProtectedImage from "@/components/ProtectedImage";
import Reveal from "@/components/Reveal";
import TestimonialGallery from "@/components/TestimonialGallery";
import PracticeIndex from "@/components/PracticeIndex";
import TrackedLink from "@/components/TrackedLink";
import { CONCERNS } from "@/content/concerns";
import { HOME_FAQS } from "@/content/faq";
import { SERVICES } from "@/content/services";
import { TESTIMONIAL_DISCLOSURE } from "@/content/testimonials";
import { buildMetadata, faqSchema, graph, webPageSchema } from "@/lib/seo";
import {
  ADDRESS,
  APPOINTMENT_MESSAGE,
  AUTHOR,
  EMAIL,
  LAST_REVIEWED,
  OPENING_HOURS_DISPLAY,
  PHONE,
  PHONE_DISPLAY,
  whatsappLink,
} from "@/lib/site";

const TITLE = "Klinik Psikolog Rabia Bakıcı | Çocuk ve Ergen Psikolojisi";
const DESCRIPTION =
  "Başakşehir'de çocuk ve ergen psikolojisi, oyun terapisi, kaygı, davranış sorunları ve ebeveyn danışmanlığı hakkında bilgi alın.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  ogImageAlt:
    "Klinik Psikolog Rabia Bakıcı — İstanbul Başakşehir, çocuk ve ergen psikolojisi",
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

const fieldSlugs = ["oyun-terapisi", "cocuk-psikologu", "ergen-psikologu", "aile-ve-ebeveyn-danismanligi"];
const fields = fieldSlugs.flatMap((slug) => {
  const service = SERVICES.find((item) => item.slug === slug);
  return service ? [{ slug, navLabel: service.navLabel, summary: service.summary, photo: service.image, photoAlt: service.imageAlt }] : [];
});
export default function Home() {
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

      <HomeHero />

      <PracticeIndex fields={fields} />

      <section className="portrait-section" id="hakkimda" aria-labelledby="hakkimda-baslik">
        <div className="container portrait-spread">
          <div className="portrait-story">
            <p className="edition-label"><span aria-hidden="true" />Yaklaşımım</p>
            <Reveal><h2 id="hakkimda-baslik">Önce çocuğu<br /><em>tanırım.</em></h2></Reveal>
            <p>Bir oyunu tekrar tekrar kurması, bir soruda duraksaması, okula gitmeden önce söyledikleri… Her çocuğun kendini anlatma biçimi farklı.</p>
            <p>Görüşmelerimizde çocuğunuzun dünyasını tanımaya zaman ayırırım. Oyun odasında gözlemlediklerimi evde fark ettiklerinizle bir araya getirir, nasıl ilerleyeceğimize birlikte karar veririz.</p>
            <Link href="/hakkimda" className="index-link">Eğitimim ve deneyimim <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <Reveal className="portrait-print">
            <figure><div className="portrait-photo"><ProtectedImage src={AUTHOR.image} alt="Rabia Bakıcı oyun terapisi materyalleriyle çalışma odasında" fill sizes="(max-width: 740px) 85vw, 380px" /></div>
              <figcaption><span>{AUTHOR.name}</span><small>{AUTHOR.title}</small></figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      {/* Süreç */}
      <section className="section home-process" aria-labelledby="surec-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow mb-4">Süreç</span>
              <h2 id="surec-baslik" className="display-2">
                Nasıl ilerliyoruz?
              </h2>
            </div>
          </Reveal>
          <ol className="process-timeline">
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
      <section className="section home-concerns" aria-labelledby="durumlar-baslik">
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
          <ul className="concern-directory">
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

      {/* Yorumlar */}
      <section id="yorumlar" className="section home-testimonials" aria-labelledby="yorumlar-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-10">
              <span className="eyebrow mb-4">Aile geri bildirimleri</span>
              <h2 id="yorumlar-baslik" className="display-2">
                Ailelerin sözleriyle
              </h2>
              <p className="text-sm text-ink-soft/85 mt-5">{TESTIMONIAL_DISCLOSURE}</p>
            </div>
          </Reveal>
          <Reveal>
            <TestimonialGallery />
          </Reveal>
        </div>
      </section>

      {/* SSS */}
      <section className="section home-faq" aria-labelledby="sss-baslik">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 id="sss-baslik" className="display-2 mb-6">
                  Sık sorulan sorular
                </h2>
                <p className="mb-7">
                  Randevu, görüşmeler ve gizlilik hakkında en çok sorulan
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

      <section className="contact-invitation" id="iletisim" aria-labelledby="iletisim-baslik">
        <div className="container invitation-inner">
          <div>
            <p className="edition-label"><span aria-hidden="true" />Randevu ve iletişim</p>
            <h2 id="iletisim-baslik">Bir görüşmeyle<br /><em>başlayalım.</em></h2>
            <TrackedLink className="atelier-action" href={whatsappLink(APPOINTMENT_MESSAGE)} target="_blank" rel="noopener noreferrer"
              event="generate_lead" eventParams={{ method: "whatsapp", cta_location: "home_contact" }}>WhatsApp ile randevu <ArrowUpRight size={17} aria-hidden="true" /></TrackedLink>
          </div>
          <div className="invitation-details">
            <p>{ADDRESS.display}</p>
            <p>{OPENING_HOURS_DISPLAY}</p>
            <TrackedLink href={`tel:${PHONE}`} event="click_phone" eventParams={{ cta_location: "home_contact" }}>{PHONE_DISPLAY}</TrackedLink>
            <TrackedLink href={`mailto:${EMAIL}`} event="click_email" eventParams={{ cta_location: "home_contact" }}>{EMAIL}</TrackedLink>
            <Link href="/iletisim" className="index-link">İletişim formu ve ulaşım <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
