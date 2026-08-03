import { CONCERNS } from "./concerns";
import { SERVICES } from "./services";

export type NavChild = { href: string; label: string };
export type NavItem = { href: string; label: string; children?: NavChild[] };

/** Ana menü. Hizmet ve sorun sayfaları içerik modelinden türetilir. */
export const MAIN_NAV: NavItem[] = [
  { href: "/hakkimda", label: "Hakkımda" },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: SERVICES.map((service) => ({
      href: `/hizmetler/${service.slug}`,
      label: service.navLabel,
    })),
  },
  {
    href: "/sorunlar",
    label: "Sık Görülen Durumlar",
    children: CONCERNS.map((concern) => ({
      href: `/sorunlar/${concern.slug}`,
      label: concern.navLabel,
    })),
  },
  {
    href: "/kaynaklar",
    label: "Kaynaklar",
    children: [
      { href: "/kaynaklar/makaleler", label: "Yazılar" },
      { href: "/kaynaklar/sikca-sorulan-sorular", label: "Sıkça Sorulan Sorular" },
    ],
  },
  { href: "/iletisim", label: "İletişim" },
];

export const LEGAL_NAV: NavChild[] = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/kullanim-kosullari", label: "Kullanım Koşulları ve Feragat" },
  { href: "/erisilebilirlik", label: "Erişilebilirlik" },
];

/** Kırıntı yolu ve sitemap için sabit sayfa başlıkları. */
export const STATIC_PAGE_TITLES: Record<string, string> = {
  "/": "Ana Sayfa",
  "/hakkimda": "Hakkımda",
  "/hizmetler": "Hizmetler",
  "/sorunlar": "Sık Görülen Durumlar",
  "/kaynaklar": "Kaynaklar",
  "/kaynaklar/makaleler": "Yazılar",
  "/kaynaklar/sikca-sorulan-sorular": "Sıkça Sorulan Sorular",
  "/iletisim": "İletişim",
  "/gizlilik-politikasi": "Gizlilik Politikası",
  "/cerez-politikasi": "Çerez Politikası",
  "/kullanim-kosullari": "Kullanım Koşulları ve Feragat",
  "/erisilebilirlik": "Erişilebilirlik",
};
