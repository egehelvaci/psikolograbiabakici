"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { ADDRESS, MAPS_EMBED_URL, MAPS_SEARCH_URL } from "@/lib/site";

/**
 * Harita, yalnızca kullanıcı isteğiyle yüklenir.
 *
 * Google Maps iframe'i üçüncü taraf istekleri ve önemli miktarda JavaScript
 * getirir; sayfa açılışında yüklenmesi LCP ve INP değerlerini bozar. Bu nedenle
 * yer tutucu gösterilir ve iframe tıklamayla devreye girer (PRD §10).
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="map-embed">
      {loaded ? (
        <iframe
          title={`${ADDRESS.display} konum haritası`}
          src={MAPS_EMBED_URL}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="map-placeholder"
          onClick={() => {
            setLoaded(true);
            trackEvent("click_directions", { cta_location: "map_embed" });
          }}
        >
          <span className="map-placeholder-title">Haritayı görüntüle</span>
          <span className="map-placeholder-desc">
            {ADDRESS.display} bölgesi. Haritayı yüklediğinizde Google Maps
            içeriği devreye girer ve Google tarafından çerez yerleştirilebilir.
          </span>
        </button>
      )}
      <figcaption>
        Haritada ilçe düzeyinde konum gösterilir. Görüşme yerinin tam adresi
        randevu onaylandığında paylaşılır.{" "}
        <a
          href={MAPS_SEARCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("click_directions", { cta_location: "map_caption" })}
        >
          Google Haritalar&apos;da aç
        </a>
      </figcaption>
    </figure>
  );
}
