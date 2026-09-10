import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import EmergencyNotice from "@/components/EmergencyNotice";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { CONCERNS } from "@/content/concerns";
import { SERVICES } from "@/content/services";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { LAST_REVIEWED, SITE_URL } from "@/lib/site";

const PATH = "/sorunlar";
const TITLE = "Sık Görülen Durumlar | Çocuk ve Ergen Psikolojisi";
const DESCRIPTION =
  "Okul reddi, ayrılık kaygısı, öfke nöbetleri, kardeş kıskançlığı, dikkat ve akran sorunları: ebeveynlerin en sık karşılaştığı durumlar ve destek yolları.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const BREADCRUMBS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sık Görülen Durumlar", path: PATH },
];

export default function ConcernsHubPage() {
  const serviceLinks = SERVICES.map((service) => ({
    href: `/hizmetler/${service.slug}`,
    title: service.navLabel,
    description: service.summary,
  }));

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            title: "Sık Görülen Durumlar",
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
            type: "CollectionPage",
          }),
          breadcrumbSchema(BREADCRUMBS),
          {
            "@type": "ItemList",
            name: "Sık görülen durumlar",
            itemListElement: CONCERNS.map((concern, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: concern.navLabel,
              url: `${SITE_URL}/sorunlar/${concern.slug}`,
            })),
          },
        )}
      />

      <PageIntro
        breadcrumbs={BREADCRUMBS}
        eyebrow="Ebeveynler için"
        title="Sık Görülen Durumlar"
        answer="Ebeveynler çoğu zaman bir hizmet adı değil, yaşadıkları bir durumla yola çıkar. Aşağıdaki sayfalar en sık karşılaşılan durumları, olası nedenlerini ve profesyonel destek almayı düşündüren işaretleri açıklar."
      />

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <ul className="concern-directory">
          {CONCERNS.map((concern) => (
            <li key={concern.slug} className="h-full">
              <Link
                href={`/sorunlar/${concern.slug}`}
                className="card card-hover h-full p-7 flex flex-col"
              >
                <h2 className="title-3 mb-3">{concern.navLabel}</h2>
                <p className="text-[0.95rem] leading-relaxed flex-1">{concern.summary}</p>
                <span className="text-sm font-medium text-primary mt-6">Ayrıntılı bilgi →</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 max-w-3xl">
          <EmergencyNotice />
        </div>

        <div className="mt-[var(--section-y)]">
          <RelatedLinks title="Hizmetler" links={serviceLinks} />
        </div>
      </section>

      <CtaBand ctaLocation="concern_hub" />
    </>
  );
}
