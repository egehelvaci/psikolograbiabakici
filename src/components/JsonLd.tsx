/**
 * Yapısal veriyi sunucu tarafında render eder; ilk HTML yanıtında yer alır,
 * böylece arama motorlarının JavaScript çalıştırmasına gerek kalmaz.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
