/**
 * GA4 olay gönderimi.
 *
 * Gizlilik kuralı: buraya yalnızca olay üst verisi geçer. Ad, telefon,
 * e-posta, serbest metin mesaj içeriği veya sağlıkla ilgili herhangi bir
 * ayrıntı gönderilmez. `sanitizeParams` bu kuralı çalışma zamanında da
 * uygular, böylece yeni bir çağrı yanlışlıkla kişisel veri sızdıramaz.
 */

export type AnalyticsEvent =
  | "generate_lead"
  | "form_start"
  | "form_submit"
  | "click_whatsapp"
  | "click_phone"
  | "click_email"
  | "click_directions"
  | "view_service"
  | "select_service"
  | "faq_open"
  | "outbound_click";

export type PageType =
  | "home"
  | "service_hub"
  | "service"
  | "concern_hub"
  | "concern"
  | "article_hub"
  | "article"
  | "faq"
  | "about"
  | "contact"
  | "legal"
  | "not_found";

export type AnalyticsParams = {
  page_type?: PageType;
  service_name?: string;
  cta_location?: string;
  link_url?: string;
  method?: string;
};

/** Gizlilik açısından güvenli olduğu doğrulanmış parametre adları. */
const ALLOWED_PARAMS = new Set([
  "page_path",
  "page_type",
  "service_name",
  "cta_location",
  "link_url",
  "method",
]);

/** Serbest metin ya da kişisel veri taşıyabilecek değerleri eler. */
function sanitizeParams(params: AnalyticsParams & { page_path?: string }) {
  const safe: Record<string, string> = {};
  for (const [key, value] of Object.entries(params)) {
    if (!ALLOWED_PARAMS.has(key) || typeof value !== "string") continue;
    // Uzun serbest metinler ve e-posta/telefon benzeri değerler gönderilmez.
    if (value.length > 120) continue;
    if (/@|\+?\d{7,}/.test(value)) continue;
    safe[key] = value;
  }
  return safe;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;

  const payload = sanitizeParams({
    ...params,
    page_path: window.location.pathname,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
    return;
  }

  // gtag henüz yüklenmediyse olay dataLayer kuyruğunda beklesin.
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
