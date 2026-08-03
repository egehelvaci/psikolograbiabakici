import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AuthorBox from "@/components/AuthorBox";
import ContentSections from "@/components/ContentSections";
import CtaBand from "@/components/CtaBand";
import EmergencyNotice from "@/components/EmergencyNotice";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { ARTICLES } from "@/content/articles";
import { CONCERNS, getConcern } from "@/content/concerns";
import { SERVICES, getService } from "@/content/services";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  graph,
  webPageSchema,
} from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CONCERNS.map((concern) => ({ slug: concern.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const concern = getConcern(slug);
  if (!concern) return {};

  return buildMetadata({
    title: concern.metaTitle,
    description: concern.metaDescription,
    path: `/sorunlar/${concern.slug}`,
    ogImageAlt: `${concern.h1} — Psikolog Rabia Bakıcı`,
  });
}

export default async function ConcernPageRoute({ params }: Params) {
  const { slug } = await params;
  const concern = getConcern(slug);
  if (!concern) notFound();

  const path = `/sorunlar/${concern.slug}`;
  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Sık Görülen Durumlar", path: "/sorunlar" },
    { name: concern.navLabel, path },
  ];

  const primaryService = getService(concern.primaryService);

  const relatedServices = concern.relatedServices
    .map((s) => SERVICES.find((item) => item.slug === s))
    .filter((item): item is (typeof SERVICES)[number] => Boolean(item))
    .map((item) => ({
      href: `/hizmetler/${item.slug}`,
      title: item.navLabel,
      description: item.summary,
    }));

  const relatedConcerns = concern.relatedConcerns
    .map((c) => CONCERNS.find((item) => item.slug === c))
    .filter((item): item is (typeof CONCERNS)[number] => Boolean(item))
    .map((item) => ({
      href: `/sorunlar/${item.slug}`,
      title: item.navLabel,
      description: item.summary,
    }));

  const relatedArticles = concern.relatedArticles
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
            title: concern.h1,
            description: concern.metaDescription,
            lastReviewed: concern.reviewed,
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(concern.faqs, path),
        )}
      />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow="Sık görülen durum"
        title={concern.h1}
        answer={concern.answer}
      >
        <div className="mt-8">
          <AuthorBox reviewed={concern.reviewed} />
        </div>
      </PageIntro>

      <div className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="content-layout">
          <article className="content-main">
            <section className="prose-block">
              <h2 className="display-3">Ebeveynlerin gözlemlediği durumlar</h2>
              <ul className="list-dot">
                {concern.observations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Olası nedenler</h2>
              <p>
                Aşağıdakiler olası açıklamalardır, tanı değildir. Aynı davranış
                farklı çocuklarda tümüyle farklı bir ihtiyaca işaret edebilir; bu
                nedenle doğru adım davranışı adlandırmak değil, nedenini
                değerlendirmektir.
              </p>
              <ul className="list-dash">
                {concern.possibleReasons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <ContentSections sections={concern.sections} />

            <section className="prose-block">
              <h2 className="display-3">Evde denenebilecek yaklaşımlar</h2>
              <p>
                Bu öneriler genel bilgilendirme amaçlıdır ve her çocuk için uygun
                olmayabilir. Uygulamadan sonuç alınamıyorsa, tekrar denemek yerine
                nedeni değerlendirmek daha işlevlidir.
              </p>
              <ul className="list-check">
                {concern.homeSupport.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Profesyonel destek almayı düşündüren işaretler</h2>
              <ul className="list-dot">
                {concern.seekHelpSigns.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {primaryService ? (
                <p>
                  Bu durumda en sık yürütülen çalışma{" "}
                  <Link href={`/hizmetler/${primaryService.slug}`}>
                    {primaryService.navLabel.toLocaleLowerCase("tr")}
                  </Link>{" "}
                  kapsamındadır. Süreç ve seans düzeni hakkında ayrıntılı bilgiyi
                  ilgili hizmet sayfasında bulabilirsiniz.
                </p>
              ) : null}
            </section>

            <EmergencyNotice />

            <section className="prose-block" aria-labelledby="sss-baslik">
              <h2 id="sss-baslik" className="display-3">
                Sıkça sorulan sorular
              </h2>
              <FaqList faqs={concern.faqs} />
            </section>

            {concern.references && concern.references.length > 0 ? (
              <section className="prose-block">
                <h2 className="display-3">Kaynaklar</h2>
                <ul className="list-dot text-sm">
                  {concern.references.map((reference) => (
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
          <RelatedLinks title="İlgili hizmetler" links={relatedServices} />
          <RelatedLinks title="Diğer sık görülen durumlar" links={relatedConcerns} />
          <RelatedLinks title="İlgili yazılar" links={relatedArticles} columns={2} />
        </div>
      </div>

      <CtaBand
        serviceName={primaryService?.navLabel}
        ctaLocation={`concern_${concern.slug}`}
        title="Durumu birlikte değerlendirelim"
      />
    </>
  );
}
