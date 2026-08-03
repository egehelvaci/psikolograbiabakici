import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import EmergencyNotice from "@/components/EmergencyNotice";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import AuthorBox from "@/components/AuthorBox";
import { ALL_FAQS, FAQ_GROUPS } from "@/content/faq";
import { breadcrumbSchema, buildMetadata, faqSchema, graph, webPageSchema } from "@/lib/seo";
import { LAST_REVIEWED } from "@/lib/site";

const PATH = "/kaynaklar/sikca-sorulan-sorular";
const TITLE = "Sıkça Sorulan Sorular | Psikolog Rabia Bakıcı";
const DESCRIPTION =
  "Randevu süreci, hizmet kapsamı, yaş grupları, gizlilik ve konum hakkında ebeveynlerin en sık sorduğu soruların yanıtları.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const BREADCRUMBS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kaynaklar", path: "/kaynaklar" },
  { name: "Sıkça Sorulan Sorular", path: PATH },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            title: "Sıkça Sorulan Sorular",
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
          }),
          breadcrumbSchema(BREADCRUMBS),
          faqSchema(ALL_FAQS, PATH),
        )}
      />

      <PageIntro
        breadcrumbs={BREADCRUMBS}
        eyebrow="Sıkça sorulan sorular"
        title="Sıkça Sorulan Sorular"
        answer="Randevu süreci, hizmet kapsamı, gizlilik ve konum hakkında en sık sorulan sorular. Yanıtını bulamadığınız bir soru varsa WhatsApp üzerinden sorabilirsiniz."
      >
        <div className="mt-8">
          <AuthorBox reviewed={LAST_REVIEWED} />
        </div>
      </PageIntro>

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="max-w-3xl flex flex-col gap-12">
          {FAQ_GROUPS.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-baslik`}>
              <h2 id={`${group.id}-baslik`} className="display-3 mb-6">
                {group.title}
              </h2>
              <FaqList faqs={group.items} />
            </section>
          ))}

          <EmergencyNotice />
        </div>
      </section>

      <CtaBand ctaLocation="faq_page" title="Sorunuzun yanıtını bulamadınız mı?" />
    </>
  );
}
