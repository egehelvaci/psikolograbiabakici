/**
 * Çalışan bir sunucuya karşı rota ve yönlendirme dumanı testi.
 * Kullanım: node scripts/route-smoke.mjs [taban-adres]
 */
const base = process.argv[2] ?? "http://localhost:3000";

const expectations = [
  { path: "/", status: 200 },
  { path: "/hizmetler", status: 200 },
  { path: "/hizmetler/oyun-terapisi", status: 200 },
  { path: "/sorunlar", status: 200 },
  { path: "/sorunlar/okul-reddi", status: 200 },
  { path: "/kaynaklar", status: 200 },
  { path: "/kaynaklar/makaleler", status: 200 },
  { path: "/kaynaklar/makaleler/oyun-terapisi-nedir", status: 200 },
  { path: "/kaynaklar/sikca-sorulan-sorular", status: 200 },
  { path: "/hakkimda", status: 200 },
  { path: "/iletisim", status: 200 },
  { path: "/gizlilik-politikasi", status: 200 },
  { path: "/cerez-politikasi", status: 200 },
  { path: "/kullanim-kosullari", status: 200 },
  { path: "/erisilebilirlik", status: 200 },
  { path: "/robots.txt", status: 200 },
  { path: "/sitemap.xml", status: 200 },
  { path: "/bulunmayan-sayfa", status: 404 },
  { path: "/blog", status: 308, location: "/kaynaklar/makaleler" },
  { path: "/sss", status: 308, location: "/kaynaklar/sikca-sorulan-sorular" },
  { path: "/kvkk", status: 308, location: "/gizlilik-politikasi" },
  { path: "/gizlilik", status: 308, location: "/gizlilik-politikasi" },
  { path: "/oyun-terapisi", status: 308, location: "/hizmetler/oyun-terapisi" },
  { path: "/kaygi-terapisi", status: 308, location: "/hizmetler/cocuklarda-kaygi-terapisi" },
  { path: "/hizmetler/", status: 308, location: "/hizmetler" },
];

let failed = 0;

for (const { path, status, location } of expectations) {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  const actualLocation = response.headers.get("location");
  const statusOk = response.status === status;
  const locationOk = !location || actualLocation === location;

  if (!statusOk || !locationOk) {
    failed += 1;
    console.log(
      `HATA  ${path} -> ${response.status}` +
        (actualLocation ? ` (${actualLocation})` : "") +
        `  | beklenen ${status}${location ? ` (${location})` : ""}`,
    );
  } else {
    console.log(`TAMAM ${path} -> ${response.status}${actualLocation ? ` ${actualLocation}` : ""}`);
  }
}

console.log(`\n${expectations.length - failed}/${expectations.length} kontrol geçti.`);
process.exit(failed > 0 ? 1 : 0);
