import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AuthorBox from "@/components/AuthorBox";
import ContentSections from "@/components/ContentSections";
import CtaBand from "@/components/CtaBand";
import EmergencyNotice from "@/components/EmergencyNotice";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { ARTICLES, getArticle } from "@/content/articles";
import { CONCERNS } from "@/content/concerns";
import { getService } from "@/content/services";
import {
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
  graph,
  webPageSchema,
} from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/kaynaklar/makaleler/${article.slug}`,
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.reviewed,
    ogImageAlt: article.title,
  });
}

export default async function ArticlePageRoute({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/kaynaklar/makaleler/${article.slug}`;
  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Kaynaklar", path: "/kaynaklar" },
    { name: "Yazılar", path: "/kaynaklar/makaleler" },
    { name: article.title, path },
  ];

  const primaryService = getService(article.primaryService);

  const relatedConcerns = article.relatedConcerns
    .map((c) => CONCERNS.find((item) => item.slug === c))
    .filter((item): item is (typeof CONCERNS)[number] => Boolean(item))
    .map((item) => ({
      href: `/sorunlar/${item.slug}`,
      title: item.navLabel,
      description: item.summary,
    }));

  const relatedArticles = article.relatedArticles
    .map((a) => ARTICLES.find((item) => item.slug === a))
    .filter((item): item is (typeof ARTICLES)[number] => Boolean(item))
    .map((item) => ({
      href: `/kaynaklar/makaleler/${item.slug}`,
      title: item.title,
      description: item.excerpt,
    }));

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path,
            title: article.h1,
            description: article.metaDescription,
            lastReviewed: article.reviewed,
          }),
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            path,
            headline: article.h1,
            description: article.metaDescription,
            published: article.published,
            reviewed: article.reviewed,
          }),
        )}
      />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow={`${article.readingMinutes} dakika okuma`}
        title={article.h1}
        answer={article.answer}
      >
        <div className="mt-8">
          <AuthorBox reviewed={article.reviewed} published={article.published} />
        </div>
      </PageIntro>

      <div className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="content-layout">
          <article className="content-main">
            <ContentSections sections={article.sections} />

            <section className="prose-block">
              <h2 className="display-3">Özetle</h2>
              <ul className="list-check">
                {article.keyPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Bu yazının sınırları</h2>
              <p>
                Bu yazı genel bilgilendirme amaçlıdır. Bir çocuğun durumu ancak
                gelişim öyküsü, aile bağlamı ve doğrudan gözlem birlikte
                değerlendirildiğinde anlaşılabilir. Buradaki bilgiler tanı koymak
                ya da bir tedavi kararı vermek için kullanılmamalıdır.
              </p>
              <h3 className="title-3">Profesyonel destek almayı düşündüren işaretler</h3>
              <ul className="list-dot">
                {article.seekHelpSigns.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {primaryService ? (
                <p>
                  Bu konuyla ilgili çalışmanın nasıl yürütüldüğünü{" "}
                  <Link href={`/hizmetler/${primaryService.slug}`}>
                    {primaryService.navLabel.toLocaleLowerCase("tr")} sayfasında
                  </Link>{" "}
                  ayrıntılı olarak bulabilirsiniz.
                </p>
              ) : null}
            </section>

            <EmergencyNotice />

            {article.references && article.references.length > 0 ? (
              <section className="prose-block">
                <h2 className="display-3">Kaynaklar</h2>
                <ul className="list-dot text-sm">
                  {article.references.map((reference) => (
                    <li key={reference.label}>
                      {reference.url ? (
                        <a href={reference.url} target="_blank" rel="noopener noreferrer nofollow">
                          {reference.label}
                        </a>
                      ) : (
                        reference.label
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </article>

          <aside className="content-aside" aria-label="İlgili hizmet">
            {primaryService ? (
              <div className="card p-6 sticky-card">
                <h2 className="footer-heading">İlgili hizmet</h2>
                <p className="title-3 mb-3">{primaryService.navLabel}</p>
                <p className="text-sm mb-5">{primaryService.summary}</p>
                <Link
                  href={`/hizmetler/${primaryService.slug}`}
                  className="btn btn-secondary btn-sm w-full"
                >
                  Hizmeti incele
                </Link>
              </div>
            ) : null}
          </aside>
        </div>

        <div className="mt-[var(--section-y)] flex flex-col gap-14">
          <RelatedLinks title="İlgili durumlar" links={relatedConcerns} columns={2} />
          <RelatedLinks title="Diğer yazılar" links={relatedArticles} columns={2} />
        </div>
      </div>

      <CtaBand
        serviceName={primaryService?.navLabel}
        ctaLocation={`article_${article.slug}`}
        title="Çocuğunuz için değerlendirme mi düşünüyorsunuz?"
      />
    </>
  );
}
