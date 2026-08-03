import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import ProtectedImage from "@/components/ProtectedImage";
import RelatedLinks from "@/components/RelatedLinks";
import { SERVICES } from "@/content/services";
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo";
import { ADDRESS, AUTHOR, LAST_REVIEWED, OPENING_HOURS_DISPLAY } from "@/lib/site";

const PATH = "/hakkimda";
const TITLE = "Hakkımda | Psikolog Rabia Bakıcı, Başakşehir";
const DESCRIPTION =
  "Psikolog Rabia Bakıcı'nın eğitim geçmişi, çalışma yaklaşımı, çalıştığı yaş grupları ve etik ilkeleri. Başakşehir'de çocuk ve ergen psikolojisi.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImageAlt: "Psikolog Rabia Bakıcı",
});

const BREADCRUMBS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hakkımda", path: PATH },
];

const EDUCATION = [
  {
    title: "Bakü Devlet Üniversitesi — Psikoloji Lisansı",
    description:
      "Psikolojinin temel alanları, gelişim psikolojisi ve araştırma yöntemleri üzerine lisans eğitimi.",
  },
  {
    title: "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji Yüksek Lisansı",
    description:
      "Klinik değerlendirme, psikoterapi kuramları ve süpervizyon eşliğinde uygulama içeren yüksek lisans programı.",
  },
  {
    title: "Oyun terapisi uygulama eğitimi",
    description:
      "Çocuklarla oyun aracılığıyla yürütülen terapi yöntemleri üzerine uygulamalı eğitim ve saha deneyimi.",
  },
];

const APPROACH = [
  {
    title: "Çocuğun kendi ritmi",
    description:
      "Terapi çocuğa uydurulur, çocuk terapiye uydurulmaz. Yöntem seçimi çocuğun yaşına, dil gelişimine ve ifade tercihine göre belirlenir.",
  },
  {
    title: "Ebeveyn iş birliği",
    description:
      "Çocuk haftada bir seansta, zamanın kalanını evde ve okulda geçirir. Bu nedenle ebeveyn görüşmeleri sürecin isteğe bağlı değil, ayrılmaz bir parçasıdır.",
  },
  {
    title: "Şeffaf çerçeve",
    description:
      "Hedefler, seans düzeni, tahmini süre ve gizliliğin sınırları baştan açıkça konuşulur. Belirsizlik, güven ilişkisini en çok zedeleyen unsurdur.",
  },
  {
    title: "Abartısız beklenti",
    description:
      "Belirli bir seans sayısında kesin sonuç taahhüt edilmez. İlerleme düzenli aralıklarla birlikte gözden geçirilir ve gerekirse plan değişir.",
  },
];

const ETHICS = [
  "Görüşme içeriği mesleki gizlilik kapsamındadır ve onay olmadan paylaşılmaz.",
  "Okul veya hekimle iletişim yalnızca ailenin yazılı onayıyla kurulur.",
  "Tıbbi teşhis konulmaz, ilaç önerilmez; gerekli durumlarda hekime yönlendirilir.",
  "Adli süreçler ve velayet davaları için rapor ya da görüş düzenlenmez.",
  "Uzmanlık alanı dışındaki başvurularda uygun bir uzmana yönlendirme yapılır.",
  "Bir çocuğun güvenliğini tehdit eden durumlarda yasal bildirim yükümlülükleri uygulanır.",
  "Danışan geri bildirimleri yalnızca yazılı izinle ve anonimleştirilerek paylaşılır.",
];

export default function AboutPage() {
  const serviceLinks = SERVICES.slice(0, 6).map((service) => ({
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
            title: "Hakkımda",
            description: DESCRIPTION,
            lastReviewed: LAST_REVIEWED,
            type: "AboutPage",
          }),
          breadcrumbSchema(BREADCRUMBS),
        )}
      />

      <PageIntro
        breadcrumbs={BREADCRUMBS}
        eyebrow="Hakkımda"
        title={`${AUTHOR.title} ${AUTHOR.name}`}
        answer={`${AUTHOR.credentials} mezunu, İstanbul Başakşehir'de çocuk ve ergenlerle çalışan bir psikologum. Oyun terapisi ve çocuklarda davranış problemleri alanında 5 yılı aşkın uygulama deneyimim var.`}
      />

      <section className="container mx-auto px-5 lg:px-8 pb-[var(--section-y)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <figure className="frame-arch frame-offset relative w-full max-w-sm aspect-[4/5] bg-surface shadow-[var(--shadow-lg)]">
              <ProtectedImage
                src={AUTHOR.image}
                alt={`${AUTHOR.title} ${AUTHOR.name}, oyun terapisi materyalleriyle çalışma odasında`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </figure>
            <dl className="detail-grid mt-10">
              <div>
                <dt>Çalışılan yaş grupları</dt>
                <dd>3–18 yaş çocuk ve ergenler, ayrıca ebeveynler</dd>
              </div>
              <div>
                <dt>Görüşme dili</dt>
                <dd>Türkçe</dd>
              </div>
              <div>
                <dt>Konum ve saatler</dt>
                <dd>
                  {ADDRESS.display} · {OPENING_HOURS_DISPLAY}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 content-main">
            <section className="prose-block">
              <h2 className="display-3">Nasıl çalışıyorum?</h2>
              <p>
                Çocuklar zorlandıkları şeyi genellikle sözcüklerle anlatmaz;
                davranışlarıyla, oyunlarıyla ve bedenleriyle anlatır. Bu nedenle
                çalışmanın ilk aşaması anlamaktır: gelişim öyküsü, aile bağlamı,
                okul işleyişi ve çocuğun kendi ifadesi bir araya getirilir.
              </p>
              <p>
                Yalnızca sonra bir plan kurulur. Bu plan çocuğa göre değişir; aynı
                belirtiyi gösteren iki çocukla tümüyle farklı bir çerçevede
                çalışılabilir. Süreç boyunca hedefler ve ilerleme düzenli
                aralıklarla ailenizle birlikte gözden geçirilir.
              </p>
              <blockquote>
                Her çocuğun biricik olduğuna inanıyor ve terapiyi çocuğun
                ihtiyaçlarına göre şekillendiriyorum.
              </blockquote>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Eğitim ve mesleki gelişim</h2>
              <ul className="credential-list">
                {EDUCATION.map((item) => (
                  <li key={item.title}>
                    <h3 className="step-title">{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-ink-soft/85">
                Diploma ve katılım belgeleri görüşme sırasında talep üzerine
                gösterilebilir. Belgelendirilemeyen bir unvan ya da yetkinlik bu
                sitede beyan edilmemektedir.
              </p>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Çalışma yaklaşımım</h2>
              <ul className="credential-list">
                {APPROACH.map((item) => (
                  <li key={item.title}>
                    <h3 className="step-title">{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Etik ilkeler ve gizlilik</h2>
              <p>
                Çocuk ve ergenlerle yürütülen çalışmada gizlilik, çocuğun sürece
                güvenebilmesi için gereklidir; aynı zamanda ailenin bilgilendirilme
                hakkı vardır. Bu iki gerekliliğin nasıl dengelendiği baştan açıkça
                konuşulur.
              </p>
              <ul className="list-check">
                {ETHICS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Kişisel verilerin işlenmesine ilişkin ayrıntılar için{" "}
                <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> ve{" "}
                <Link href="/kullanim-kosullari">Kullanım Koşulları ve Feragat</Link>{" "}
                sayfalarını inceleyebilirsiniz.
              </p>
            </section>

            <section className="prose-block">
              <h2 className="display-3">Kapsam dışındaki alanlar</h2>
              <p>
                Bir uzmanın neyi yapmadığını bilmek, ne yaptığını bilmek kadar
                önemlidir. Aşağıdaki alanlar çalışma kapsamım dışındadır ve bu
                konularda uygun uzmana yönlendirme yapılır.
              </p>
              <ul className="list-dash">
                <li>Tıbbi tanı ve ilaç tedavisi — çocuk ve ergen psikiyatristi</li>
                <li>Yetişkin bireysel terapisi ve çift terapisi</li>
                <li>Adli değerlendirme, velayet görüşü ve mahkeme raporu</li>
                <li>Resmî zekâ testi belgelendirmesi ve özel eğitim raporu</li>
                <li>Acil psikiyatrik müdahale — acil servis ya da 112</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-[var(--section-y)]">
          <RelatedLinks title="Hizmetler" links={serviceLinks} />
        </div>
      </section>

      <CtaBand
        ctaLocation="about"
        title="Tanışmak ister misiniz?"
        description="İlk görüşme genellikle yalnızca ebeveynlerle yapılır. Bu görüşmede durumu birlikte değerlendirir ve uygun adımı belirleriz."
      />
    </>
  );
}
