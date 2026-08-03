import Link from "next/link";

export type RelatedLink = {
  href: string;
  title: string;
  description?: string;
};

/**
 * İlgili içerik modülü. Her sayfanın giren ve çıkan bağlantılara sahip
 * olmasını sağlar; öksüz sayfa oluşmasını önler (PRD §9.6).
 */
export default function RelatedLinks({
  title,
  links,
  columns = 3,
}: {
  title: string;
  links: RelatedLink[];
  columns?: 2 | 3;
}) {
  if (links.length === 0) return null;

  return (
    <section className="related-block" aria-labelledby={`ilgili-${slugify(title)}`}>
      <h2 id={`ilgili-${slugify(title)}`} className="title-3 mb-6">
        {title}
      </h2>
      <ul
        className={`grid gap-4 ${
          columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {links.map((link) => (
          <li key={link.href} className="h-full">
            <Link href={link.href} className="card card-hover related-card">
              <span className="related-card-title">{link.title}</span>
              {link.description ? (
                <span className="related-card-desc">{link.description}</span>
              ) : null}
              <span className="related-card-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function slugify(value: string): string {
  return value
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşü]/g, (c) => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" })[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
