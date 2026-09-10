import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { ARTICLES_BY_DATE } from "@/content/articles";
import { CONCERNS } from "@/content/concerns";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { LAST_REVIEWED } from "@/lib/site";

const PATH = "/kaynaklar";
const TITLE = "Kaynaklar | Ebeveynler için Bilgi ve Yazılar";
const DESCRIPTION =
  "Çocuk ve ergen psikolojisi üzerine ebeveynler için hazırlanmış yazılar ve sıkça sorulan sorular. Oyun terapisi, kaygı, davranış ve terapi süreci.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const BREADCRUMBS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kaynaklar", path: PATH },
];

export default function ResourcesHubPage() {
  const latest = ARTICLES_BY_DATE.slice(0, 3).map((article) => ({
    href: `/kaynaklar/makaleler/${article.slug}`,
    title: article.title,
    description: article.excerpt,
  }));

  const concernLinks = CONCERNS.slice(0, 3).map((concern) => ({
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
            title: "Kaynaklar",
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
            type: "CollectionPage",
          }),
          breadcrumbSchema(BREADCRUMBS),
        )}
      />

      <PageIntro
        breadcrumbs={BREADCRUMBS}
        eyebrow="Bilgi merkezi"
        title="Ebeveynler için Kaynaklar"
        answer="Buradaki içerikler bilgilendirme amaçlıdır ve bireysel değerlendirmenin yerine geçmez. Amaç, bir konuda karar vermeden önce ne bildiğinizi netleştirmenize yardımcı olmaktır."
      />

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="resource-index">
          <Link href="/kaynaklar/makaleler" className="card card-hover p-8 flex flex-col">
            <span className="resource-number" aria-hidden="true">01</span>
            <h2 className="title-3 mb-3">Yazılar</h2>
            <p className="flex-1">
              Oyun terapisi, terapi süreci, ne zaman destek alınmalı ve uzmanlar
              arasındaki farklar gibi konularda ayrıntılı yazılar.
            </p>
            <span className="text-sm font-medium text-primary mt-6">
              {ARTICLES_BY_DATE.length} yazı →
            </span>
          </Link>
          <Link
            href="/kaynaklar/sikca-sorulan-sorular"
            className="card card-hover p-8 flex flex-col"
          >
            <span className="resource-number" aria-hidden="true">02</span>
            <h2 className="title-3 mb-3">Sıkça Sorulan Sorular</h2>
            <p className="flex-1">
              Randevu süreci, hizmet kapsamı, gizlilik, ücretlendirme çerçevesi ve
              konum hakkında en sık sorulan soruların yanıtları.
            </p>
            <span className="text-sm font-medium text-primary mt-6">Soruları gör →</span>
          </Link>
        </div>

        <div className="mt-[var(--section-y)] flex flex-col gap-14">
          <RelatedLinks title="Son yazılar" links={latest} />
          <RelatedLinks title="Sık görülen durumlar" links={concernLinks} />
        </div>
      </section>

      <CtaBand ctaLocation="resources_hub" />
    </>
  );
}
