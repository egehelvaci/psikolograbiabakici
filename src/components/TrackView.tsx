"use client";

import { useEffect, useRef } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

type TrackViewProps = {
  event: AnalyticsEvent;
  params?: AnalyticsParams;
};

/**
 * Sayfa görüntülemeye bağlı olayları (ör. view_service) bir kez gönderir.
 * Görsel çıktısı yoktur; yalnızca ölçüm amaçlıdır.
 */
export default function TrackView({ event, params }: TrackViewProps) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    trackEvent(event, params);
  }, [event, params]);

  return null;
}
