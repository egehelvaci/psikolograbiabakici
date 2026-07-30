"use client";

import { useEffect } from "react";

/**
 * Görsel koruma: sağ tık ve kaydetme kısayollarını engeller.
 * Görsel bir çıktısı yoktur; yalnızca global dinleyicileri yönetir.
 */
export default function ImageProtection() {
  useEffect(() => {
    const preventImageDownload = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
        return false;
      }
    };

    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // CTRL+S, CTRL+U, F12 tuşlarını engelle
      if ((e.ctrlKey && (e.key === "s" || e.key === "u")) || e.key === "F12") {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", preventImageDownload);
    document.addEventListener("keydown", preventKeyboardShortcuts);

    return () => {
      document.removeEventListener("contextmenu", preventImageDownload);
      document.removeEventListener("keydown", preventKeyboardShortcuts);
    };
  }, []);

  return null;
}
