import Link from "next/link";
import ProtectedImage from "@/components/ProtectedImage";
import TrackedLink from "@/components/TrackedLink";
import { LEGAL_NAV, MAIN_NAV } from "@/content/navigation";
import { SERVICES } from "@/content/services";
import {
  ADDRESS,
  AUTHOR,
  EMAIL,
  EMERGENCY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  LAST_REVIEWED,
  OPENING_HOURS_DISPLAY,
  PHONE,
  PHONE_DISPLAY,
  SITE_NAME,
  SITE_TAGLINE,
  whatsappLink,
} from "@/lib/site";

/** Alt bilgi: gezinme, NAP bilgileri, yasal bağlantılar ve acil durum notu. */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container mx-auto px-5 lg:px-8 py-14">
        <div className="footer-signoff"><span>Her çocuk, kendi ritminde.</span><Link href="/iletisim" className="text-link">Birlikte ilk adım <span aria-hidden="true">↗</span></Link></div>
        <div className="footer-grid">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label={`${SITE_NAME} — Ana sayfa`}>
              <span className="relative w-11 h-11 rounded-full overflow-hidden border border-line bg-surface shrink-0">
                <ProtectedImage
                  src="/images/logo.jpg"
                  alt=""
                  fill
                  className="object-cover scale-[1.4]"
                  sizes="44px"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif font-semibold text-ink">{SITE_NAME}</span>
                <span className="text-xs text-ink-soft/80">{SITE_TAGLINE}</span>
              </span>
            </Link>
            <p className="text-sm mt-5 max-w-xs">
              {AUTHOR.title} {AUTHOR.name} · {AUTHOR.credentials}
            </p>
            <div className="flex flex-wrap gap-4 mt-5">
              <TrackedLink
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm"
                event="outbound_click"
                eventParams={{ cta_location: "footer", link_url: "instagram" }}
              >
                Instagram
              </TrackedLink>
              <TrackedLink
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm"
                event="outbound_click"
                eventParams={{ cta_location: "footer", link_url: "linkedin" }}
              >
                LinkedIn
              </TrackedLink>
            </div>
          </div>

          <nav aria-labelledby="footer-hizmetler">
            <h2 id="footer-hizmetler" className="footer-heading">
              Hizmetler
            </h2>
            <ul className="footer-list">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/hizmetler/${service.slug}`}>{service.navLabel}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-site">
            <h2 id="footer-site" className="footer-heading">
              Site
            </h2>
            <ul className="footer-list">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <h2 className="footer-heading mt-7">Yasal</h2>
            <ul className="footer-list">
              {LEGAL_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">İletişim</h2>
            <address className="not-italic footer-list">
              <p>{ADDRESS.display}</p>
              <p>
                <TrackedLink
                  href={`tel:${PHONE}`}
                  event="click_phone"
                  eventParams={{ cta_location: "footer" }}
                >
                  {PHONE_DISPLAY}
                </TrackedLink>
              </p>
              <p>
                <TrackedLink
                  href={`mailto:${EMAIL}`}
                  event="click_email"
                  eventParams={{ cta_location: "footer" }}
                  className="break-all"
                >
                  {EMAIL}
                </TrackedLink>
              </p>
              <p>{OPENING_HOURS_DISPLAY}</p>
            </address>
            <TrackedLink
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm mt-5"
              event="click_whatsapp"
              eventParams={{ cta_location: "footer" }}
            >
              WhatsApp
            </TrackedLink>
          </div>
        </div>

        <p className="footer-emergency">{EMERGENCY.notice}</p>

        <div className="rule mt-8 mb-6" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row gap-3 justify-between text-sm text-ink-soft/80">
          <p>
            &copy; {year} {SITE_NAME}. Tüm hakları saklıdır.
          </p>
          <p>
            İçerikler {new Date(LAST_REVIEWED).toLocaleDateString("tr-TR")} tarihinde
            gözden geçirildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
