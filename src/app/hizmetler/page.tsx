import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import EmergencyNotice from "@/components/EmergencyNotice";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import ProtectedImage from "@/components/ProtectedImage";
import RelatedLinks from "@/components/RelatedLinks";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import { CONCERNS } from "@/content/concerns";
import { SERVICES } from "@/content/services";
import { breadcrumbSchema, buildMetadata, canonicalUrl, graph, webPageSchema } from "@/lib/seo";
import { LAST_REVIEWED } from "@/lib/site";

const PATH = "/hizmetler";
const TITLE = "Hizmetler | Çocuk ve Ergen Psikoloğu Başakşehir";
const DESCRIPTION =
  "Başakşehir'de çocuk ve ergen psikolojisi hizmetleri: oyun terapisi, kaygı desteği, davranış problemleri, psikolojik değerlendirme ve ebeveyn danışmanlığı.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const BREADCRUMBS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hizmetler", path: PATH },
];

export default function ServicesHubPage() {
  const concernLinks = CONCERNS.map((concern) => ({
    href: `/sorunlar/${concern.slug}`,
    title: concern.navLabel,
    description: concern.summary,
  }));

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            title: "Hizmetler",
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
            type: "CollectionPage",
          }),
          breadcrumbSchema(BREADCRUMBS),
          {
            "@type": "ItemList",
            name: "Psikolojik destek hizmetleri",
            itemListElement: SERVICES.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.navLabel,
              url: canonicalUrl(`/hizmetler/${service.slug}`),
            })),
          },
        )}
      />

      <PageIntro
        breadcrumbs={BREADCRUMBS}
        eyebrow="İstanbul Başakşehir"
        title="Çocuk ve Ergen Psikolojisi Hizmetleri"
        answer="Her hizmet, çocuğun yaşına ve zorlandığı alana göre farklı bir çerçevede yürütülür. Hangisinin uygun olduğundan emin değilseniz, önce yalnızca ebeveyn görüşmesi planlayarak birlikte karar verebiliriz."
      />

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <ul className="service-directory">
          {SERVICES.map((service, index) => (
            <li key={service.slug} className="h-full">
              <TrackedInternalLink
                href={`/hizmetler/${service.slug}`}
                className={`card card-hover service-card service-${service.slug} h-full p-7 flex flex-col`}
                event="select_service"
                eventParams={{
                  page_type: "service_hub",
                  service_name: service.slug,
                  cta_location: "service_grid",
                }}
              >
                <span className="service-card-image">
                  <ProtectedImage src={service.image} alt={service.imageAlt} fill sizes="(max-width: 767px) 100vw, 180px" className="object-cover" />
                </span>
                <span className="service-card-meta flex items-baseline justify-between mb-5">
                  <span className="service-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="rule w-10" aria-hidden="true" />
                </span>
                <h2 className="title-3 mb-3">{service.navLabel}</h2>
                <p className="text-[0.95rem] leading-relaxed flex-1">{service.summary}</p>
                <span className="text-sm font-medium text-primary mt-6">
                  Ayrıntılı bilgi →
                </span>
              </TrackedInternalLink>
            </li>
          ))}
        </ul>

        <div className="mt-14 max-w-3xl">
          <EmergencyNotice />
        </div>

        <div className="mt-[var(--section-y)]">
          <RelatedLinks title="Sık görülen durumlar" links={concernLinks} />
        </div>
      </section>

      <CtaBand
        title="Hangi hizmetin uygun olduğundan emin değilseniz"
        description="Bir ebeveyn görüşmesi çoğu zaman bu soruyu netleştirmek için yeterlidir. Görüşmede durumu birlikte değerlendirir ve uygun adımı belirleriz."
        ctaLocation="service_hub"
      />
    </>
  );
}
