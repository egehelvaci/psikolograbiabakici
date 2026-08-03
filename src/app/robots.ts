import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Üretim dışı ortamlar (Vercel önizlemeleri, staging) indekslenmemelidir;
 * bu ortamlarda tüm tarayıcılara kapalı bir robots.txt sunulur (PRD §9.1).
 */
const isProduction =
  process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

const isPreview = process.env.VERCEL_ENV === "preview";

export default function robots(): MetadataRoute.Robots {
  if (isPreview || !isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
