import Link from "next/link";
import ProtectedImage from "@/components/ProtectedImage";
import { AUTHOR } from "@/lib/site";

/** Tarihi "3 Ağustos 2026" biçiminde gösterir. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Yazar ve klinik gözden geçirme bilgisi. Sağlıkla ilgili içerikte
 * içeriğin kim tarafından hazırlandığı ve ne zaman gözden geçirildiği
 * görünür olmalıdır (PRD §12).
 */
export default function AuthorBox({
  reviewed,
  published,
}: {
  reviewed: string;
  published?: string;
}) {
  return (
    <aside className="author-box" aria-label="Yazar ve gözden geçirme bilgisi">
      <span className="author-avatar">
        <ProtectedImage
          src={AUTHOR.image}
          alt={`${AUTHOR.name}, ${AUTHOR.title}`}
          fill
          className="object-cover"
          sizes="64px"
        />
      </span>
      <div>
        <p className="author-name">
          <Link href={AUTHOR.profileUrl}>{AUTHOR.name}</Link>
          <span className="author-title"> · {AUTHOR.title}</span>
        </p>
        <p className="author-meta">{AUTHOR.credentials}</p>
        <p className="author-meta">
          {published ? <>Yayın: {formatDate(published)} · </> : null}
          Son klinik gözden geçirme: {formatDate(reviewed)}
        </p>
      </div>
    </aside>
  );
}
