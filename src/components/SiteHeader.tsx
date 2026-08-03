"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ProtectedImage from "@/components/ProtectedImage";
import { trackEvent } from "@/lib/analytics";
import { MAIN_NAV } from "@/content/navigation";
import { APPOINTMENT_MESSAGE, AUTHOR, whatsappLink } from "@/lib/site";

/**
 * Yapışkan üst menü.
 *
 * Alt menüler standart bağlantılardan oluşur ve masaüstünde hem klavye odağı
 * hem fare üzerinde açılır; böylece tarayıcı JavaScript çalıştırmasa da
 * bağlantılar taranabilir kalır (PRD §9.8).
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container mx-auto px-5 lg:px-8 flex items-center justify-between h-20 gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${AUTHOR.name} — Ana sayfa`}>
          <span className="relative w-12 h-12 rounded-full overflow-hidden border border-line bg-surface shrink-0">
            <ProtectedImage
              src="/images/logo.jpg"
              alt=""
              fill
              className="object-cover scale-[1.4]"
              sizes="48px"
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif font-semibold text-ink text-base tracking-tight">
              {AUTHOR.name}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/80">
              Çocuk ve Ergen Psikoloğu
            </span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Ana menü">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="nav-group"
                onMouseEnter={() => setOpenGroup(item.href)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
                  aria-expanded={openGroup === item.href}
                  onFocus={() => setOpenGroup(item.href)}
                >
                  {item.label}
                  <span className="nav-caret" aria-hidden="true">
                    ▾
                  </span>
                </Link>
                <div className={`nav-panel ${openGroup === item.href ? "is-open" : ""}`}>
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onBlur={() => setOpenGroup(null)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                    <li className="nav-panel-all">
                      <Link href={item.href}>Tümünü gör →</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={whatsappLink(APPOINTMENT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm shrink-0"
            onClick={() =>
              trackEvent("generate_lead", { method: "whatsapp", cta_location: "header" })
            }
          >
            Randevu Talep Et
          </a>
        </nav>

        {/* Mobil menü butonu */}
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-line-strong text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <nav className="lg:hidden mobile-menu" id="mobile-menu" aria-label="Mobil menü">
          <ul>
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="mobile-menu-link">
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mobile-submenu">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(APPOINTMENT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full mt-5"
            onClick={() =>
              trackEvent("generate_lead", { method: "whatsapp", cta_location: "mobile_menu" })
            }
          >
            Randevu Talep Et
          </a>
        </nav>
      )}
    </header>
  );
}
