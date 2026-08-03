import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import EmergencyNotice from "@/components/EmergencyNotice";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { formatDate } from "@/components/AuthorBox";
import { ARTICLES_BY_DATE } from "@/content/articles";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { AUTHOR, LAST_REVIEWED, SITE_URL } from "@/lib/site";

const PATH = "/kaynaklar/makaleler";
const TITLE = "Yazılar | Çocuk ve Ergen Psikolojisi";
const DESCRIPTION =
  "Oyun terapisi, terapi süreci, ne zaman psikoloğa başvurulmalı ve uzmanlar arasındaki farklar üzerine ebeveynler için hazırlanmış yazılar.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const BREADCRUMBS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kaynaklar", path: "/kaynaklar" },
  { name: "Yazılar", path: PATH },
];

export default function ArticleHubPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            title: "Yazılar",
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
            type: "CollectionPage",
          }),
          breadcrumbSchema(BREADCRUMBS),
          {
            "@type": "ItemList",
            name: "Yazılar",
            itemListElement: ARTICLES_BY_DATE.map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: article.title,
              url: `${SITE_URL}/kaynaklar/makaleler/${article.slug}`,
            })),
          },
        )}
      />

      <PageIntro
        breadcrumbs={BREADCRUMBS}
        eyebrow="Yazılar"
        title="Ebeveynler için Yazılar"
        answer="Yazıların tamamı bir psikolog tarafından hazırlanır ve düzenli olarak gözden geçirilir. İçerikler bilgilendirme amaçlıdır; bireysel değerlendirmenin ya da tıbbi görüşün yerine geçmez."
      />

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <ul className="article-list">
          {ARTICLES_BY_DATE.map((article) => (
            <li key={article.slug}>
              <article className="card card-hover p-7 sm:p-8 h-full flex flex-col">
                <p className="article-meta">
                  {formatDate(article.published)} · {article.readingMinutes} dk okuma
                </p>
                <h2 className="title-3 mt-3 mb-3">
                  <Link href={`/kaynaklar/makaleler/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="flex-1">{article.excerpt}</p>
                <p className="article-meta mt-6">
                  {AUTHOR.name}, {AUTHOR.title} · Gözden geçirme:{" "}
                  {formatDate(article.reviewed)}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 max-w-3xl">
          <EmergencyNotice />
        </div>
      </section>

      <CtaBand ctaLocation="article_hub" />
    </>
  );
}
