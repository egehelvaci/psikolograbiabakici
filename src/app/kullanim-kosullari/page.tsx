import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { getLegalDocument } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const DOC = getLegalDocument("/kullanim-kosullari")!;

export const metadata: Metadata = buildMetadata({
  title: DOC.metaTitle,
  description: DOC.metaDescription,
  path: DOC.path,
});

export default function TermsPage() {
  return <LegalArticle document={DOC} />;
}
