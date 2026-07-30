import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description:
    "Aradığınız sayfa bulunamadı. Psikolog Rabia Bakıcı ana sayfasına dönerek hizmetler, hakkımda ve iletişim bölümlerine ulaşabilirsiniz.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-lg text-center py-24">
        <p className="eyebrow justify-center mb-6">Hata 404</p>
        <h1 className="display-2 mb-5">Aradığınız sayfa bulunamadı</h1>
        <p className="lead mx-auto mb-10">
          Bu bağlantı taşınmış ya da hiç var olmamış olabilir. Ana sayfadan hizmetlerimize, hakkımda bölümüne ve
          iletişim bilgilerine ulaşabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            Ana Sayfaya Dön
          </Link>
          <Link href="/#iletisim" className="btn btn-secondary">
            İletişime Geç
          </Link>
        </div>
      </div>
    </main>
  );
}
