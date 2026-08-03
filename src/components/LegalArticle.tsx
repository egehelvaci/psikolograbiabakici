import ContentSections from "@/components/ContentSections";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { formatDate } from "@/components/AuthorBox";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/seo";
import type { LegalDocument } from "@/content/legal";

/**
 * Yasal metinler için ortak şablon. Metnin son güncelleme tarihi ve hukuki
 * gözden geçirme gereksinimi her sayfada görünür biçimde belirtilir.
 */
export default function LegalArticle({ document: doc }: { document: LegalDocument }) {
  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: doc.navLabel, path: doc.path },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: doc.path,
            title: doc.h1,
            description: doc.metaDescription,
          }),
          breadcrumbSchema(breadcrumbs),
        )}
      />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow={`Son güncelleme: ${formatDate(doc.updated)}`}
        title={doc.h1}
        answer={doc.intro}
      />

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="content-main max-w-3xl">
          <ContentSections sections={doc.sections} />
          <p className="notice notice-compact" role="note">
            Bu metin genel bir çerçeve sunar. Kendi durumunuza ilişkin hukuki bir
            soru için bir hukuk danışmanına başvurmanız önerilir.
          </p>
        </div>
      </section>
    </>
  );
}
