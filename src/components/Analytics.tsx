"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/site";

/**
 * gtag.js yükleyicisi.
 *
 * GA4 ölçüm kimliği `NEXT_PUBLIC_GA_MEASUREMENT_ID` ortam değişkeninden
 * okunur; tanımlı değilse yalnızca mevcut Google Ads etiketi yüklenir.
 *
 * Gizlilik: sayfa görüntüleme dışında otomatik veri toplanmaz, form içerikleri
 * ve kişisel veriler hiçbir olayda gönderilmez (bkz. lib/analytics.ts).
 */
export default function Analytics() {
  const pathname = usePathname();
  const primaryId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  // App Router istemci tarafı geçişlerinde sayfa görüntülemeyi bildirir.
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
          ${
            GA_MEASUREMENT_ID
              ? `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true, anonymize_ip: true });`
              : ""
          }
        `}
      </Script>
    </>
  );
}
