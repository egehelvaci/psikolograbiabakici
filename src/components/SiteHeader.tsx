"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProtectedImage from "@/components/ProtectedImage";
import { WHATSAPP_URL } from "@/lib/site";

const NAV_LINKS = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

/** Yapışkan üst menü: mobil menü durumu ve kaydırma gölgesi. */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="Psikolog Rabia Bakıcı - Ana Sayfa">
          <span className="relative w-12 h-12 rounded-full overflow-hidden border border-line bg-surface shrink-0">
            <ProtectedImage
              src="/images/logo.jpg"
              alt="Psikolog Rabia Bakıcı logosu"
              fill
              className="object-cover scale-[1.4]"
              sizes="48px"
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif font-semibold text-ink text-base tracking-tight">Rabia Bakıcı</span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/80">Klinik Psikolog</span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Ana Menü">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a
            href={`${WHATSAPP_URL}?text=Merhaba%2C%20randevu%20almak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Randevu Al
          </a>
        </nav>

        {/* Mobil menü butonu */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-line-strong text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
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
        <nav
          className="md:hidden px-5 pb-6 pt-2 border-t border-line bg-background/95"
          id="mobile-menu"
          aria-label="Mobil Menü"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-line last:border-0">
                <Link
                  href={link.href}
                  className="block py-3.5 font-medium text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`${WHATSAPP_URL}?text=Merhaba%2C%20randevu%20almak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Randevu Al
          </a>
        </nav>
      )}
    </header>
  );
}
