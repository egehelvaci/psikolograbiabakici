/**
 * Site geneli sabitler — iletişim bilgileri tek kaynaktan yönetilir ki
 * sayfa içeriği, yapısal veri ve meta veriler her zaman tutarlı kalsın.
 *
 * NAP (isim/adres/telefon) tutarlılığı yerel SEO'nun temelidir: bu dosyadaki
 * değerler Google Business Profile ve dizin kayıtlarıyla birebir aynı olmalıdır.
 */
export const SITE_URL = "https://psikolograbiabakici.com";
export const SITE_NAME = "Psikolog Rabia Bakıcı";
export const SITE_TAGLINE = "Çocuk ve Ergen Psikoloğu · İstanbul Başakşehir";
export const PHONE = "+905452855283";
export const PHONE_DISPLAY = "+90 (545) 285 52 83";
export const EMAIL = "psikolograbiabakici@gmail.com";
export const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}`;
export const INSTAGRAM_URL =
  "https://www.instagram.com/psikolograbiabakici?igsh=MWZhZ253NDc3cjhnaQ==";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/rabia-bak%C4%B1c%C4%B1-897664276";

/**
 * Adres bilgisi ilçe düzeyinde yayımlanır. Danışan gizliliği gereği açık
 * sokak adresi siteye konulmaz; kesin adres randevu onayında paylaşılır.
 */
export const ADDRESS = {
  locality: "Başakşehir",
  region: "İstanbul",
  postalCode: "34480",
  country: "TR",
  countryName: "Türkiye",
  /** Görünür metinlerde ve yapısal veride aynı biçimde kullanılır. */
  display: "Başakşehir · Eyüpsultan, İstanbul",
  /** Yaklaşık ilçe merkezi — harita çerçevesi için, kesin konum değildir. */
  geo: { latitude: "41.0860", longitude: "28.8026" },
} as const;

export const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Psikolog+Rabia+Bak%C4%B1c%C4%B1+Ba%C5%9Fak%C5%9Fehir+%C4%B0stanbul";

/** Google Maps yerleştirmesi anahtar gerektirmeyen arama modunu kullanır. */
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Ba%C5%9Fak%C5%9Fehir%2C%20%C4%B0stanbul&z=13&output=embed";

/** Çalışma saatleri: görünür metin ve OpeningHoursSpecification tek kaynaktan. */
export const OPENING_HOURS = [
  { days: ["Monday", "Tuesday"], label: "Başakşehir · Pazartesi – Salı", opens: "12:00", closes: "19:00" },
  { days: ["Wednesday", "Thursday", "Friday"], label: "Eyüpsultan · Çarşamba – Cuma", opens: "12:00", closes: "20:00" },
] as const;

export const OPENING_HOURS_DISPLAY = "Başakşehir: Pazartesi – Salı, 12:00 – 19:00 · Eyüpsultan: Çarşamba – Cuma, 12:00 – 20:00";

/** İletişime dönüş süresi — abartısız ve tutulabilir bir taahhüt. */
export const RESPONSE_TIME_DISPLAY = "Mesajlar genellikle aynı gün, en geç 1 iş günü içinde yanıtlanır.";

/**
 * İçerik yazarı ve klinik gözden geçiren. Unvan, belgelenebilir eğitim
 * bilgisiyle sınırlı tutulur (PRD §8.3 / §12).
 */
export const AUTHOR = {
  name: "Rabia Bakıcı",
  title: "Psikolog",
  credentials: "Klinik Psikoloji Yüksek Lisansı",
  shortBio:
    "İstanbul Başakşehir'de çocuk ve ergenlerle çalışan psikolog. Oyun terapisi ve çocuklarda davranış problemleri alanında 5 yılı aşkın deneyim.",
  image: "/images/rabiabakici.jpg",
  profileUrl: "/hakkimda",
} as const;

/** Klinik doğruluk gözden geçirmesinin yapıldığı tarih (ISO). */
export const LAST_REVIEWED = "2026-08-03";

/** Acil durum bilgilendirmesi — sitenin acil hizmet olmadığı her sayfada belirtilir. */
export const EMERGENCY = {
  number: "112",
  numberLabel: "112 Acil Çağrı Merkezi",
  notice:
    "Bu web sitesi acil yardım hizmeti değildir ve teşhis koymaz. Kendine ya da bir başkasına zarar verme riski, yaşamı tehdit eden bir durum veya acil bir kriz söz konusuysa 112 Acil Çağrı Merkezi'ni arayın ya da en yakın hastanenin acil servisine başvurun.",
} as const;

/** Analytics kimlikleri. GA4 ölçüm kimliği ortam değişkeninden okunur. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GOOGLE_ADS_ID = "AW-17092278848";

/**
 * Search Console doğrulaması HTML etiketi yöntemiyle yapılacaksa doldurulur.
 * Tercih edilen yöntem DNS TXT kaydıdır; o durumda boş kalabilir.
 */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

/** Tüm dış profillere verilen sameAs bağlantıları. */
export const SAME_AS = [INSTAGRAM_URL, LINKEDIN_URL] as const;

/** Randevu talebi için hazır WhatsApp bağlantısı üretir. */
export function whatsappLink(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const APPOINTMENT_MESSAGE = "Merhaba, randevu talep etmek istiyorum.";
export const CTA_PRIMARY_LABEL = "WhatsApp ile Randevu Talep Et";
