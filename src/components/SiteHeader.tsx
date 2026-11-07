"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/content/navigation";
import { APPOINTMENT_MESSAGE, AUTHOR, ADDRESS, whatsappLink } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import ProtectedImage from "./ProtectedImage";

function HeaderBrand() {
  return <>
    <span className="mast-logo"><ProtectedImage src="/images/logo.jpg" alt="" fill sizes="48px" /></span>
    <span>{AUTHOR.name}<small>{AUTHOR.title}</small></span>
  </>;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const panel = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = useCallback(() => panel.current?.close(), []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(close, [close, pathname]);
  useEffect(() => {
    if (!opened) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = previous; };
  }, [opened]);

  const overlay = pathname === "/" && !scrolled;
  return (
    <header className={`masthead ${pathname === "/" ? "over-hero" : ""} ${overlay ? "is-clear" : ""}`}>
      <div className="container mast-inner">
        <Link href="/" className="mast-brand" aria-label={`${AUTHOR.name} — Ana sayfa`}>
          <HeaderBrand />
        </Link>
        <nav className="mast-shortcuts" aria-label="Ana menü">
          <Link href="/hakkimda" aria-current={pathname === "/hakkimda" ? "page" : undefined}>Hakkımda</Link>
          <Link href="/hizmetler" aria-current={pathname === "/hizmetler" ? "page" : undefined}>Çalışma alanları</Link>
          <Link href="/kaynaklar" aria-current={pathname === "/kaynaklar" ? "page" : undefined}>Kaynaklar</Link>
        </nav>
        <div className="mast-actions">
          <a className="mast-book" href={whatsappLink(APPOINTMENT_MESSAGE)} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("generate_lead", { method: "whatsapp", cta_location: "header" })}>Randevu <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="mast-menu" aria-label="Menüyü aç" aria-haspopup="dialog" aria-controls="site-menu" aria-expanded={opened}
            onClick={() => { panel.current?.showModal(); setOpened(true); }}><span>Menü</span><Menu size={21} strokeWidth={1.5} aria-hidden="true" /></button>
        </div>
      </div>
      <dialog ref={panel} id="site-menu" className="menu-dialog" aria-label="Site menüsü" onClose={() => setOpened(false)}>
        {opened && (
          <div className="container menu-sheet">
            <div className="menu-top"><span className="mast-brand"><HeaderBrand /></span>
              <button onClick={close} className="mast-menu" aria-label="Menüyü kapat" autoFocus>Kapat <X size={21} aria-hidden="true" /></button>
            </div>
            <div className="menu-columns">
              <nav aria-label="Tüm sayfalar">
                {MAIN_NAV.map((item, i) => (
                  <motion.div key={item.href} initial={reduced ? false : { y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .32, delay: reduced ? 0 : i * .045 }}>
                    <Link href={item.href} onClick={close}>{item.label}<ArrowUpRight aria-hidden="true" /></Link>
                  </motion.div>
                ))}
              </nav>
              <aside className="menu-photo"><ProtectedImage src={AUTHOR.image} alt="Klinik Psikolog Rabia Bakıcı" fill sizes="340px" /></aside>
            </div>
            <p className="menu-address">{ADDRESS.display}</p>
          </div>
        )}
      </dialog>
    </header>
  );
}
