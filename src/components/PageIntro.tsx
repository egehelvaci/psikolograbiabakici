import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo";

/**
 * Alt sayfaların ortak açılışı: kırıntı yolu, tek H1 ve kısa doğrudan yanıt.
 * Doğrudan yanıtın hemen başlık altında yer alması, arama sonuçlarındaki
 * öne çıkan yanıt alanları için de uygun bir yapı sağlar.
 */
export default function PageIntro({
  breadcrumbs,
  eyebrow,
  title,
  answer,
  children,
}: {
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  answer?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container mx-auto px-5 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow ? <span className="eyebrow mt-6 mb-4">{eyebrow}</span> : null}
        <h1 className="display-2 mt-4">{title}</h1>
        {answer ? <p className="lead mt-6 max-w-3xl">{answer}</p> : null}
        {children}
      </div>
    </section>
  );
}
