/**
 * Üretim çıktısındaki HTML dosyalarını okuyup PRD §22 kabul kriterlerini denetler:
 * tekil başlık/açıklama, canonical bütünlüğü, tek H1, geçerli JSON-LD,
 * yasaklı puan işaretlemesi ve görsel alt metinleri.
 *
 * Kullanım: npm run build && npm run seo:audit
 */
import { readFile, readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");
const SITE_URL = "https://psikolograbiabakici.com";

const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;

const errors = [];
const warnings = [];

function fail(route, message) {
  errors.push(`${route}: ${message}`);
}

function warn(route, message) {
  warnings.push(`${route}: ${message}`);
}

async function collectHtmlFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await collectHtmlFiles(full)));
    } else if (entry.name.endsWith(".html")) {
      found.push(full);
    }
  }
  return found;
}

function routeFromFile(file) {
  const rel = relative(APP_DIR, file).replaceAll(sep, "/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
}

function decode(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'");
}

function extractTag(html, regex) {
  const match = html.match(regex);
  return match ? decode(match[1]).trim() : null;
}

function stripTags(value) {
  return decode(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

const titles = new Map();
const descriptions = new Map();
const verbose = process.argv.includes("--verbose");
const rows = [];
const auditedRoutes = new Set();
/** Bir sayfaya, kendisi dışındaki kaç sayfadan bağlantı verildiği. */
const inboundLinks = new Map();

async function auditFile(file) {
  const route = routeFromFile(file);
  if (route === "/_not-found") return;

  const html = await readFile(file, "utf8");
  auditedRoutes.add(route);

  /* İç bağlantılar: yetim sayfa kontrolü için toplanır. */
  for (const [, href] of html.matchAll(/<a\b[^>]*\shref="(\/[^"#?]*)"/g)) {
    const target = href.length > 1 ? href.replace(/\/$/, "") : "/";
    if (target === route) continue;
    if (!inboundLinks.has(target)) inboundLinks.set(target, new Set());
    inboundLinks.get(target).add(route);
  }

  /* Başlık */
  const title = extractTag(html, /<title>([^<]*)<\/title>/);
  if (!title) {
    fail(route, "title etiketi yok");
  } else {
    if (title.length > TITLE_MAX) {
      warn(route, `title ${title.length} karakter (>${TITLE_MAX}): "${title}"`);
    }
    const seen = titles.get(title);
    if (seen) fail(route, `title tekil değil, ${seen} ile aynı: "${title}"`);
    else titles.set(title, route);
  }

  /* Açıklama */
  const description = extractTag(
    html,
    /<meta name="description" content="([^"]*)"/,
  );
  if (!description) {
    fail(route, "meta description yok");
  } else {
    if (description.length < DESC_MIN || description.length > DESC_MAX) {
      warn(route, `description ${description.length} karakter (hedef ${DESC_MIN}-${DESC_MAX})`);
    }
    const seen = descriptions.get(description);
    if (seen) fail(route, `description tekil değil, ${seen} ile aynı`);
    else descriptions.set(description, route);
  }

  /* Canonical */
  const canonical = extractTag(html, /<link rel="canonical" href="([^"]*)"/);
  const expected = route === "/" ? SITE_URL : `${SITE_URL}${route}`;
  if (!canonical) {
    fail(route, "canonical etiketi yok");
  } else if (canonical !== expected) {
    fail(route, `canonical beklenenden farklı: ${canonical} (beklenen ${expected})`);
  }

  /* Dil */
  if (!/<html[^>]+lang="tr"/.test(html)) {
    fail(route, 'html lang="tr" değil');
  }

  /* Tek H1 */
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => stripTags(m[1]));
  if (h1s.length === 0) fail(route, "H1 yok");
  else if (h1s.length > 1) fail(route, `${h1s.length} adet H1 var: ${h1s.join(" | ")}`);

  /* Başlık atlaması: H2 gelmeden H3 kullanılmamalı */
  const headingOrder = [...html.matchAll(/<h([1-4])[^>]*>/g)].map((m) => Number(m[1]));
  let previous = 1;
  for (const level of headingOrder) {
    if (level - previous > 1) {
      warn(route, `başlık seviyesi atlandı: h${previous} sonrası h${level}`);
      break;
    }
    previous = level;
  }

  /* Open Graph */
  for (const property of ["og:title", "og:description", "og:url", "og:image"]) {
    if (!html.includes(`property="${property}"`)) {
      fail(route, `${property} yok`);
    }
  }

  /* JSON-LD geçerliliği */
  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ];
  if (blocks.length === 0) fail(route, "JSON-LD bloğu yok");
  for (const [, raw] of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      fail(route, `JSON-LD ayrıştırılamadı: ${error.message}`);
      continue;
    }
    const nodes = parsed["@graph"] ?? [parsed];
    for (const node of nodes) {
      if (!node["@type"]) fail(route, "JSON-LD düğümünde @type yok");
    }
    if (JSON.stringify(parsed).includes("aggregateRating")) {
      fail(route, "aggregateRating işaretlemesi bulundu (PRD §9.5 yasaklıyor)");
    }
    if (/"(review|Review)"\s*:/.test(raw)) {
      fail(route, "Review işaretlemesi bulundu (doğrulanamayan yorum riski)");
    }
  }

  /* Görsellerde alt metni */
  const imagesWithoutAlt = [...html.matchAll(/<img\b((?:(?!>)[\s\S])*)>/g)].filter(
    ([, attrs]) => !/\salt=/.test(attrs),
  );
  if (imagesWithoutAlt.length > 0) {
    fail(route, `${imagesWithoutAlt.length} görselde alt metni yok`);
  }

  /* İstenmeyen noindex */
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) {
    warn(route, "noindex işaretli");
  }

  rows.push({
    route,
    titleLength: title?.length ?? 0,
    descriptionLength: description?.length ?? 0,
    h1: h1s[0] ?? "-",
    schemaTypes: blocks
      .flatMap(([, raw]) => {
        try {
          const parsed = JSON.parse(raw);
          return (parsed["@graph"] ?? [parsed]).map((node) =>
            Array.isArray(node["@type"]) ? node["@type"].join("+") : node["@type"],
          );
        } catch {
          return [];
        }
      })
      .join(", "),
  });
}

const files = await collectHtmlFiles(APP_DIR).catch(() => []);
if (files.length === 0) {
  console.error("Üretim çıktısı bulunamadı. Önce `npm run build` çalıştırın.");
  process.exit(1);
}

for (const file of files.sort()) {
  await auditFile(file);
}

/* Site haritası ile indekslenebilir sayfa kümesi birebir örtüşmeli. */
const sitemapPath = join(APP_DIR, "sitemap.xml.body");
const sitemapXml = await readFile(sitemapPath, "utf8").catch(() => null);
if (!sitemapXml) {
  errors.push("sitemap.xml üretilmemiş");
} else {
  const sitemapRoutes = new Set(
    [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => {
      const path = loc.replace(SITE_URL, "");
      return path === "" || path === "/" ? "/" : path.replace(/\/$/, "");
    }),
  );

  for (const route of sitemapRoutes) {
    if (!auditedRoutes.has(route)) {
      errors.push(`sitemap: ${route} için üretilmiş sayfa yok`);
    }
  }
  for (const route of auditedRoutes) {
    if (!sitemapRoutes.has(route)) {
      errors.push(`sitemap: ${route} site haritasında eksik`);
    }
  }
}

/* Yetim sayfa: ana sayfa dışında her sayfaya en az bir iç bağlantı gelmeli. */
for (const route of auditedRoutes) {
  if (route === "/") continue;
  if (!inboundLinks.has(route)) {
    errors.push(`${route}: hiçbir sayfadan iç bağlantı almıyor (yetim sayfa)`);
  }
}

/* Kırık iç bağlantı: hedefi olmayan kök göreli bağlantılar. */
const knownNonPageTargets = new Set(["/sitemap.xml", "/robots.txt"]);
for (const [target, sources] of inboundLinks) {
  if (auditedRoutes.has(target)) continue;
  if (knownNonPageTargets.has(target)) continue;
  if (/\.[a-z0-9]+$/i.test(target)) continue;
  errors.push(
    `kırık iç bağlantı: ${target} (kaynak: ${[...sources].slice(0, 3).join(", ")})`,
  );
}

console.log(`Denetlenen sayfa: ${files.length}`);

if (verbose) {
  console.log("");
  for (const row of rows.sort((a, b) => a.route.localeCompare(b.route))) {
    console.log(
      `${row.route.padEnd(42)} title:${String(row.titleLength).padStart(3)}  ` +
        `desc:${String(row.descriptionLength).padStart(3)}  ${row.schemaTypes}`,
    );
    console.log(`${" ".repeat(42)} H1: ${row.h1}`);
  }
}

if (warnings.length > 0) {
  console.log(`\nUyarı (${warnings.length}):`);
  for (const message of warnings) console.log(`  - ${message}`);
}

if (errors.length > 0) {
  console.log(`\nHata (${errors.length}):`);
  for (const message of errors) console.log(`  - ${message}`);
  process.exit(1);
}

console.log("\nTüm kritik SEO kontrolleri geçti.");
