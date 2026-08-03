import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import EmergencyNotice from "@/components/EmergencyNotice";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import PageIntro from "@/components/PageIntro";
import TrackedLink from "@/components/TrackedLink";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_URL,
  LAST_REVIEWED,
  LINKEDIN_URL,
  OPENING_HOURS_DISPLAY,
  PHONE,
  PHONE_DISPLAY,
  RESPONSE_TIME_DISPLAY,
  whatsappLink,
} from "@/lib/site";

const PATH = "/iletisim";
const TITLE = "İletişim ve Konum | Psikolog Rabia Bakıcı";
const DESCRIPTION =
  "Başakşehir'de çocuk ve ergen psikoloğu Rabia Bakıcı ile iletişim: randevu talebi, telefon, e-posta, çalışma saatleri, ulaşım ve otopark bilgileri.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const BREADCRUMBS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "İletişim", path: PATH },
];

const SERVICE_AREAS = [
  "Başakşehir",
  "Bahçeşehir",
  "Küçükçekmece",
  "Esenler",
  "Sultangazi",
  "Arnavutköy",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            title: "İletişim ve Konum",
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
            type: "ContactPage",
          }),
          breadcrumbSchema(BREADCRUMBS),
        )}
      />

      <PageIntro
        breadcrumbs={BREADCRUMBS}
        eyebrow="İstanbul Başakşehir"
        title="İletişim ve Konum"
        answer="Randevu talebinizi WhatsApp üzerinden ya da telefonla iletebilirsiniz. Mesajınıza çocuğunuzun yaşını ve kısaca başvuru nedeninizi eklemeniz, uygun bir görüşme planlamayı kolaylaştırır."
      />

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className="display-3 mb-6">İletişim bilgileri</h2>
            <dl className="contact-list">
              <div>
                <dt>Konum</dt>
                <dd>
                  <address className="not-italic">
                    {ADDRESS.locality}, {ADDRESS.region} ({ADDRESS.postalCode}),{" "}
                    {ADDRESS.countryName}
                  </address>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <TrackedLink
                    href={`tel:${PHONE}`}
                    event="click_phone"
                    eventParams={{ cta_location: "contact_page" }}
                  >
                    {PHONE_DISPLAY}
                  </TrackedLink>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <TrackedLink
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    event="click_whatsapp"
                    eventParams={{ cta_location: "contact_page" }}
                  >
                    Mesaj gönder
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
                    eventParams={{ cta_location: "contact_page" }}
                  >
                    {EMAIL}
                  </TrackedLink>
                </dd>
              </div>
              <div>
                <dt>Görüşme saatleri</dt>
                <dd>{OPENING_HOURS_DISPLAY}</dd>
              </div>
              <div>
                <dt>Dönüş süresi</dt>
                <dd>{RESPONSE_TIME_DISPLAY}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-3 mt-8">
              <TrackedLink
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                event="outbound_click"
                eventParams={{ cta_location: "contact_page", link_url: "instagram" }}
              >
                Instagram
              </TrackedLink>
              <TrackedLink
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                event="outbound_click"
                eventParams={{ cta_location: "contact_page", link_url: "linkedin" }}
              >
                LinkedIn
              </TrackedLink>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>

        <div className="mt-[var(--section-y)] grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display-3 mb-6">Konum ve ulaşım</h2>
            <MapEmbed />
          </div>

          <div className="lg:col-span-5 content-main">
            <section className="prose-block">
              <h3 className="title-3">Adres bilgisi</h3>
              <p>
                Görüşmeler {ADDRESS.display} bölgesinde yapılmaktadır. Danışan
                gizliliğini korumak amacıyla açık adres web sitesinde
                yayımlanmamaktadır; görüşme yerinin tam adresi, kat ve giriş
                bilgileri randevu onaylandığında sizinle paylaşılır.
              </p>
            </section>

            <section className="prose-block">
              <h3 className="title-3">Toplu taşıma</h3>
              <p>
                Başakşehir&apos;e M3 metro hattı ve ilçe içi otobüs hatlarıyla
                ulaşılabilir. Randevu onayında, size en yakın durak ve yürüme süresi
                bilgisi de iletilir.
              </p>
            </section>

            <section className="prose-block">
              <h3 className="title-3">Otopark</h3>
              <p>
                Bölgede ücretli ve ücretsiz sokak otoparkı seçenekleri
                bulunmaktadır. Yoğun saatlerde park yeri bulmak zaman alabileceği
                için randevudan 10–15 dakika önce yola çıkmanız önerilir.
              </p>
            </section>

            <section className="prose-block">
              <h3 className="title-3">Erişilebilirlik</h3>
              <p>
                Görüşme mekânının fiziksel erişilebilirlik koşulları (asansör,
                rampa, tekerlekli sandalye erişimi) hakkında ayrıntılı bilgiye
                ihtiyacınız varsa, randevu talebinizde belirtmeniz yeterlidir;
                netleştirip size dönüş yapılır. Web sitesinin erişilebilirliği için{" "}
                <Link href="/erisilebilirlik">Erişilebilirlik sayfasına</Link>{" "}
                bakabilirsiniz.
              </p>
            </section>

            <section className="prose-block">
              <h3 className="title-3">Hizmet verilen bölgeler</h3>
              <ul className="pill-list">
                {SERVICE_AREAS.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <p className="text-sm text-ink-soft/85">
                Bu bölgeler danışanların en sık geldiği yerlerdir; İstanbul&apos;un
                diğer ilçelerinden gelen ailelerle de çalışılmaktadır.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <EmergencyNotice />
        </div>
      </section>
    </>
  );
}
