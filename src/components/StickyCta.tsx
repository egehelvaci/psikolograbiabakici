"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { APPOINTMENT_MESSAGE, PHONE, whatsappLink } from "@/lib/site";

/**
 * Mobilde yapışkan randevu çubuğu.
 *
 * İçeriği kalıcı olarak kapatmaması için yalnızca bir miktar kaydırma
 * sonrası görünür olur ve kullanıcı tarafından kapatılabilir. Çubuk
 * yüksekliği `body` alt boşluğu ile telafi edilir, böylece footer içeriği
 * çubuğun altında kalmaz (PRD §16).
 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const active = visible && !dismissed;
    document.body.classList.toggle("has-sticky-cta", active);
    return () => document.body.classList.remove("has-sticky-cta");
  }, [visible, dismissed]);

  if (dismissed) return null;

  return (
    <div className={`sticky-cta ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <a
        href={whatsappLink(APPOINTMENT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm flex-1"
        onClick={() =>
          trackEvent("generate_lead", { method: "whatsapp", cta_location: "sticky_mobile" })
        }
        tabIndex={visible ? 0 : -1}
      >
        WhatsApp ile randevu
      </a>
      <a
        href={`tel:${PHONE}`}
        className="btn btn-secondary btn-sm"
        aria-label="Telefonla ara"
        onClick={() => trackEvent("click_phone", { cta_location: "sticky_mobile" })}
        tabIndex={visible ? 0 : -1}
      >
        Ara
      </a>
      <button
        type="button"
        className="sticky-cta-close"
        onClick={() => setDismissed(true)}
        aria-label="Randevu çubuğunu kapat"
        tabIndex={visible ? 0 : -1}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}
