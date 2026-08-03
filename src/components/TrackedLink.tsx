"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEvent;
  eventParams?: AnalyticsParams;
  children: ReactNode;
};

/**
 * Dönüşüm bağlantıları için GA4 olayı gönderen bağlantı.
 * Olaya yalnızca üst veri geçer; bağlantı metni veya kişisel veri gönderilmez.
 */
export default function TrackedLink({
  event,
  eventParams,
  children,
  onClick,
  ...anchorProps
}: TrackedLinkProps) {
  return (
    <a
      {...anchorProps}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
