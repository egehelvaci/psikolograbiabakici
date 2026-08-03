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
import TrackView from "@/components/TrackView";
import { ARTICLES } from "@/content/articles";
import { CONCERNS } from "@/content/concerns";
import { SERVICES, getService } from "@/content/services";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import { ADDRESS, OPENING_HOURS_DISPLAY } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
    ogImageAlt: `${service.h1} — Psikolog Rabia Bakıcı`,
  });
}

export default async function ServicePageRoute({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/hizmetler/${service.slug}`;
  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.navLabel, path },
  ];

  const relatedServices = service.relatedServices
    .map((s) => SERVICES.find((item) => item.slug === s))
    .filter((item): item is (typeof SERVICES)[number] => Boolean(item))
    .map((item) => ({
      href: `/hizmetler/${item.slug}`,
      title: item.navLabel,
      description: item.summary,
    }));

  const relatedConcerns = service.relatedConcerns
    .map((c) => CONCERNS.find((item) => item.slug === c))
    .filter((item): item is (typeof CONCERNS)[number] => Boolean(item))
    .map((item) => ({
      href: `/sorunlar/${item.slug}`,
      title: item.navLabel,
      description: item.summary,
    }));

  const relatedArticles = service.relatedArticles
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
            title: service.h1,
            description: service.metaDescription,
            lastReviewed: service.reviewed,
          }),
          breadcrumbSchema(breadcrumbs),
          serviceSchema({ name: service.h1, description: service.summary, path }),
          faqSchema(service.faqs, path),
        )}
      />

      <TrackView
        event="view_service"
        params={{ page_type: "service", service_name: service.slug }}
      />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow="Hizmet"
        title={service.h1}
        answer={service.answer}
      >
        <div className="mt-8">
          <AuthorBox reviewed={service.reviewed} />
        </div>
      </PageIntro>

      <div className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="content-layout">
          <article className="content-main">
            <section className="prose-block">
              <h2 className="display-3">Kimler için uygun?</h2>
              <ul className="list-check">
                {service.suitableFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Ebeveynlerin sık fark ettiği belirtiler</h2>
              <p>
                Aşağıdaki durumlar tek başına bir tanı anlamına gelmez. Birkaçının
                birlikte görülmesi ve haftalardır sürmesi, değerlendirme yapılmasını
                düşündüren bir işarettir.
              </p>
              <ul className="list-dot">
                {service.signs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <ContentSections sections={service.sections} />

            <section className="prose-block">
              <h2 className="display-3">Süreç nasıl işler?</h2>
              <ol className="step-list">
                {service.process.map((step, index) => (
                  <li key={step.title}>
                    <span className="step-num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="step-title">{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Çalışma çerçevesi</h2>
              <dl className="detail-grid">
                <div>
                  <dt>Yaş grupları</dt>
                  <dd>{service.ageGroups}</dd>
                </div>
                <div>
                  <dt>Ebeveyn katılımı</dt>
                  <dd>{service.parentInvolvement}</dd>
                </div>
                <div>
                  <dt>Seans düzeni</dt>
                  <dd>{service.sessionFormat}</dd>
                </div>
                <div>
                  <dt>Görüşme yeri ve saatleri</dt>
                  <dd>
                    Görüşmeler {ADDRESS.display} bölgesinde, {OPENING_HOURS_DISPLAY}{" "}
                    aralığında yapılır. Tam adres ve ulaşım bilgileri randevu
                    onaylandığında paylaşılır.{" "}
                    <Link href="/iletisim">İletişim ve konum sayfası</Link>
                  </dd>
                </div>
              </dl>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Bu hizmetin vaat etmediği şeyler</h2>
              <p>
                Beklentilerin baştan net olması, sürecin en önemli parçalarından
                biridir. Aşağıdakiler bu çalışmanın kapsamı dışındadır.
              </p>
              <ul className="list-dash">
                {service.notPromised.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <EmergencyNotice />

            <section className="prose-block">
              <h2 className="display-3">Eğitim ve deneyim</h2>
              <ul className="list-check">
                {service.credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Ayrıntılı eğitim geçmişi ve çalışma yaklaşımı için{" "}
                <Link href="/hakkimda">hakkımda sayfasını</Link> inceleyebilirsiniz.
              </p>
            </section>

            <section className="prose-block" aria-labelledby="sss-baslik">
              <h2 id="sss-baslik" className="display-3">
                Sıkça sorulan sorular
              </h2>
              <FaqList faqs={service.faqs} />
            </section>

            {service.references && service.references.length > 0 ? (
              <section className="prose-block">
                <h2 className="display-3">Kaynaklar</h2>
                <ul className="list-dot text-sm">
                  {service.references.map((reference) => (
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

          <aside className="content-aside" aria-label="Sayfa özeti">
            <div className="card p-6 sticky-card">
              <h2 className="footer-heading">Özet</h2>
              <p className="text-sm mb-5">{service.summary}</p>
              <dl className="aside-facts">
                <div>
                  <dt>Yaş</dt>
                  <dd>{service.ageGroups.split(".")[0]}.</dd>
                </div>
                <div>
                  <dt>Konum</dt>
                  <dd>{ADDRESS.display}</dd>
                </div>
                <div>
                  <dt>Saatler</dt>
                  <dd>{OPENING_HOURS_DISPLAY}</dd>
                </div>
              </dl>
              <Link href="/iletisim" className="btn btn-secondary btn-sm w-full mt-6">
                İletişim bilgileri
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-[var(--section-y)] flex flex-col gap-14">
          <RelatedLinks title="İlgili hizmetler" links={relatedServices} />
          <RelatedLinks title="Bu hizmetle ilişkili durumlar" links={relatedConcerns} />
          <RelatedLinks title="İlgili yazılar" links={relatedArticles} columns={2} />
        </div>
      </div>

      <CtaBand
        serviceName={service.navLabel}
        ctaLocation={`service_${service.slug}`}
        title={`${service.navLabel} için randevu talebi`}
      />
    </>
  );
}
