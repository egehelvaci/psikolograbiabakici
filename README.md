# psikolograbiabakici.com

Psikolog Rabia Bakıcı (İstanbul Başakşehir, çocuk ve ergen psikolojisi) için
Next.js tabanlı tanıtım ve randevu sitesi.

## Teknoloji

- Next.js 15 (App Router, statik üretim)
- React 19
- Tailwind CSS 4
- TypeScript

## Kurulum

```bash
npm install
cp .env.example .env.local   # değerleri doldurun (isteğe bağlı)
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusu (Turbopack) |
| `npm run build` | Üretim derlemesi ve tip kontrolü |
| `npm run start` | Derlenmiş çıktıyı sunar |
| `npm run lint` | ESLint |
| `npm run seo:audit` | Üretilen HTML üzerinde SEO denetimi (`build` sonrası çalıştırılır) |
| `npm run smoke` | Çalışan sunucuda rota ve yönlendirme kontrolü |

## Proje yapısı

```
src/
  app/          Sayfalar ve rotalar (App Router), sitemap.ts, robots.ts
  components/   Paylaşılan bileşenler (header, footer, form, CTA, SSS, harita)
  content/      İçerik modeli: hizmetler, sorunlar, yazılar, SSS, yasal metinler
  lib/          site.ts (işletme bilgileri), seo.ts (metadata + JSON-LD), analytics.ts
scripts/
  seo-audit.mjs SEO kabul kriterleri denetimi
docs/
  seo-operasyon.md  Kurulum, ölçüm ve içerik ekleme kılavuzu
```

Sayfalar içerik modelinden üretilir: `src/content/` altına yeni bir hizmet,
sorun ya da yazı eklendiğinde rota, site haritası kaydı ve yapısal veri
kendiliğinden oluşur.

## İşletme bilgilerini değiştirme

Telefon, e-posta, ilçe, çalışma saatleri, sosyal profiller ve analitik
kimlikleri tek bir dosyada tutulur: `src/lib/site.ts`. Sayfalar, footer,
iletişim formu ve JSON-LD bu kaynaktan beslenir.

## Ortam değişkenleri

| Değişken | Açıklama |
| --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 ölçüm kimliği (`G-…`). Boşsa GA4 yüklenmez. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console HTML etiketi doğrulaması (isteğe bağlı). |

## Ayrıntılı kılavuz

Search Console / GA4 / Google Business Profile kurulumu, GA4 olay sözlüğü,
içerik ekleme akışı ve yayın öncesi kontrol listesi için
[`docs/seo-operasyon.md`](docs/seo-operasyon.md) dosyasına bakın.
