import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo";

/**
 * Görünür kırıntı yolu. Son öğe geçerli sayfadır ve bağlantı içermez;
 * aynı öğe listesi BreadcrumbList yapısal verisinde de kullanılır.
 */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link href={item.path}>{item.name}</Link>
                  <span className="breadcrumb-sep" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
