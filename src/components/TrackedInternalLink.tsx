"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

type TrackedInternalLinkProps = ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  eventParams?: AnalyticsParams;
  children: ReactNode;
};

/**
 * Site içi geçişlerde GA4 olayı gönderen bağlantı. İstemci tarafı gezinme
 * korunur; olaya yalnızca üst veri geçer.
 */
export default function TrackedInternalLink({
  event,
  eventParams,
  children,
  onClick,
  ...linkProps
}: TrackedInternalLinkProps) {
  return (
    <Link
      {...linkProps}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
