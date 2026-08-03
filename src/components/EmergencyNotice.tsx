import { EMERGENCY } from "@/lib/site";

/**
 * Acil durum sınırlaması. Ruh sağlığı içeriği taşıyan her sayfada, sitenin
 * acil hizmet olmadığı ve teşhis koymadığı açıkça belirtilir (PRD §12).
 */
export default function EmergencyNotice({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="notice notice-compact" role="note">
        Bu sayfa bilgilendirme amaçlıdır, teşhis yerine geçmez. Acil bir durumda{" "}
        <a href={`tel:${EMERGENCY.number}`}>{EMERGENCY.numberLabel}</a>&apos;ni arayın.
      </p>
    );
  }

  return (
    <aside className="notice" role="note" aria-label="Acil durum bilgilendirmesi">
      <h2 className="notice-title">Acil durumlar için</h2>
      <p>{EMERGENCY.notice}</p>
      <p className="mt-3">
        <a href={`tel:${EMERGENCY.number}`} className="btn btn-secondary btn-sm">
          {EMERGENCY.numberLabel}&apos;ni ara
        </a>
      </p>
    </aside>
  );
}
