import type { Metadata } from "next";
import Link from "next/link";
import { CONCERNS } from "@/content/concerns";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  description: "Aradığınız sayfa bulunamadı. Hizmetler, yazılar ve iletişim sayfalarına buradan ulaşabilirsiniz.",
  robots: { index: false, follow: true },
};

/**
 * 404 sayfası. Eksik sayfalar ana sayfaya yönlendirilmez; kullanıcıya
 * gerçekten yararlı bağlantılar sunulur (PRD §9.2).
 */
export default function NotFound() {
  return (
    <section className="section">
      <div className="container mx-auto px-5 lg:px-8 max-w-3xl">
        <span className="eyebrow mb-5">404</span>
        <h1 className="display-2">Aradığınız sayfa bulunamadı</h1>
        <p className="lead mt-6">
          Adres değişmiş ya da bağlantı hatalı olabilir. Aşağıdaki bölümlerden
          devam edebilir veya doğrudan iletişime geçebilirsiniz.
        </p>

        <div className="flex flex-wrap gap-3 mt-9">
          <Link href="/" className="btn btn-primary">
            Ana sayfaya dön
          </Link>
          <Link href="/iletisim" className="btn btn-secondary">
            İletişim
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 mt-14">
          <nav aria-labelledby="404-hizmetler">
            <h2 id="404-hizmetler" className="footer-heading">
              Hizmetler
            </h2>
            <ul className="footer-list">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/hizmetler/${service.slug}`}>{service.navLabel}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="404-durumlar">
            <h2 id="404-durumlar" className="footer-heading">
              Sık görülen durumlar
            </h2>
            <ul className="footer-list">
              {CONCERNS.map((concern) => (
                <li key={concern.slug}>
                  <Link href={`/sorunlar/${concern.slug}`}>{concern.navLabel}</Link>
                </li>
              ))}
            </ul>
            <h2 className="footer-heading mt-7">Kaynaklar</h2>
            <ul className="footer-list">
              <li>
                <Link href="/kaynaklar/makaleler">Yazılar</Link>
              </li>
              <li>
                <Link href="/kaynaklar/sikca-sorulan-sorular">Sıkça sorulan sorular</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
