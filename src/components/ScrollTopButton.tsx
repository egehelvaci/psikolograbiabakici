"use client";

import { useEffect, useState } from "react";

/** Sayfa 400px kaydırıldığında görünen "başa dön" butonu. */
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-5 sm:right-7 sm:bottom-7 w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-line-strong text-ink shadow-[var(--shadow-md)] hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 z-50"
      aria-label="Sayfanın başına dön"
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
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
