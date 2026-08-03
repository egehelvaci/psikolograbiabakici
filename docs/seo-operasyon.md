# SEO Operasyon Kılavuzu

Bu belge, PRD'de tanımlanan işlerin kod tarafında nasıl karşılandığını ve kod
dışında kalan (hesap kurulumu, doğrulama, içerik onayı) adımların nasıl
yürütüleceğini açıklar.

---

## 1. Tek doğruluk kaynakları

| Konu | Dosya |
| --- | --- |
| İşletme bilgileri, NAP, saatler, sosyal profiller, analitik kimlikleri | `src/lib/site.ts` |
| Metadata ve JSON-LD üreticileri | `src/lib/seo.ts` |
| GA4 olay gönderimi ve gizlilik filtresi | `src/lib/analytics.ts` |
| Hizmet içerikleri (8) | `src/content/services.ts` |
| Sorun/durum içerikleri (6) | `src/content/concerns.ts` |
| Yazılar (6) | `src/content/articles.ts` |
| SSS | `src/content/faq.ts` |
| Yasal metinler | `src/content/legal.ts` |
| Menü yapısı | `src/content/navigation.ts` |
| Referanslar ve rıza durumu | `src/content/testimonials.ts` |

Telefon, e-posta, ilçe, çalışma saatleri gibi bilgiler yalnızca
`src/lib/site.ts` içinde değiştirilir. Sayfalar, footer, yapısal veri ve
iletişim formu bu tek kaynaktan beslenir; böylece NAP tutarlılığı bozulmaz.

---

## 2. Ortam değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın.

| Değişken | Zorunlu | Açıklama |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Hayır | `G-` ile başlayan GA4 ölçüm kimliği. Boşsa GA4 betiği hiç yüklenmez. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Hayır | Search Console HTML etiketi doğrulaması. DNS TXT kaydı kullanılıyorsa boş bırakılır. |

Google Ads etiketi (`AW-17092278848`) koda gömülüdür ve GA4'ten bağımsız
çalışır.

---

## 3. Doğrulama komutları

```bash
npm run build      # tip kontrolü + 33 sayfanın statik üretimi
npm run lint       # ESLint
npm run seo:audit  # üretilen HTML üzerinde SEO denetimi
npm run smoke      # çalışan sunucuda rota ve yönlendirme kontrolü
```

`npm run smoke`, sunucu ayakta iken (varsayılan `http://localhost:3000`)
25 adresin durum kodunu ve eski adreslerin kalıcı yönlendirme hedeflerini
doğrular. Başka bir ortamı denetlemek için taban adres verilebilir:
`node scripts/route-smoke.mjs https://psikolograbiabakici.com`

`npm run seo:audit` (önce `npm run build` gerekir) şunları denetler ve ihlalde
sıfırdan farklı çıkış kodu döner:

- her sayfada tekil `<title>` ve tekil meta açıklama,
- `rel="canonical"` değerinin beklenen adresle birebir eşleşmesi,
- sayfa başına tam olarak bir `<h1>`,
- `html lang="tr"`,
- Open Graph alanlarının varlığı,
- JSON-LD bloklarının ayrıştırılabilirliği ve her düğümde `@type`,
- `aggregateRating` / `Review` işaretlemesinin bulunmaması,
- `alt` metni olmayan görsel bulunmaması,
- site haritası ile üretilen sayfa kümesinin birebir örtüşmesi,
- yetim sayfa (hiç iç bağlantı almayan sayfa) bulunmaması,
- kırık iç bağlantı bulunmaması.

Ayrıntılı liste için: `node scripts/seo-audit.mjs --verbose`

Uyarı olarak raporlanan, derlemeyi durdurmayan kontroller: başlık uzunluğu
60 karakterin üzerinde, açıklama 70–160 aralığının dışında, başlık seviyesi
atlanmış, sayfa `noindex` işaretli.

---

## 4. Yayın sonrası kurulum listesi

Bu adımlar kod tarafından yapılamaz; yayına alma sonrasında bir kez yürütülür.

### 4.1 Google Search Console

1. `https://psikolograbiabakici.com` için mülk oluşturun (Domain mülkü tercih
   edilir, DNS TXT kaydıyla doğrulanır).
2. `https://psikolograbiabakici.com/sitemap.xml` adresini gönderin.
3. Ana sayfa, `/hizmetler`, iki hizmet sayfası ve bir yazı için URL Denetimi
   çalıştırıp "Dizine eklenebilir" sonucunu doğrulayın.
4. Kapsam raporunda `www` ve `http` varyantlarının yönlendirme olarak
   göründüğünü kontrol edin (`next.config.js` içinde 301 tanımlı).

### 4.2 Google Analytics 4

1. GA4 mülkü açıp ölçüm kimliğini `NEXT_PUBLIC_GA_MEASUREMENT_ID` olarak
   ortam değişkenlerine ekleyin ve yeniden dağıtın.
2. Aşağıdaki olayları GA4'te **anahtar olay** olarak işaretleyin:
   `generate_lead`, `click_whatsapp`, `click_phone`, `form_submit`.
3. Veri saklama süresini 14 ay yapın; IP anonimleştirme GA4'te varsayılandır.
4. Gerçek Zamanlı raporda WhatsApp ve telefon tıklamalarını doğrulayın.

### 4.3 Google Business Profile

1. Kategori: birincil "Psikolog"; ikincil "Aile danışmanı".
2. Hizmet listesini `src/content/services.ts` içindeki sekiz başlıkla aynı
   yazın.
3. Adres alanı: açık adres yayımlanmadığı için hizmet bölgesi olarak
   Başakşehir ve çevre ilçeler girilir; işletme adı ve telefon `site.ts`
   içindeki değerlerle harfi harfine aynı olmalıdır.
4. Çalışma saatlerini `OPENING_HOURS` ile eşitleyin.
5. Web sitesi alanına `https://psikolograbiabakici.com/iletisim` girin.
6. Yorum toplarken teşvik/ödül kullanılmaz; yorumlar sitede yıldız
   işaretlemesi olarak kullanılmaz.

### 4.4 NAP tutarlılığı

İşletme adı, telefon ve ilçe bilgisi şu kanallarda birebir aynı yazılmalıdır:
web sitesi, Google Business Profile, Instagram biyografisi, LinkedIn profili,
yerel dizin kayıtları. Değişiklik gerektiğinde önce `src/lib/site.ts`
güncellenir, sonra dış kanallar eşitlenir.

---

## 5. GA4 olay sözlüğü

Tüm olaylar `src/lib/analytics.ts` içindeki `trackEvent` üzerinden gönderilir.
İzin verilen parametreler beyaz listeyle sınırlıdır; ad, telefon, e-posta,
serbest metin mesaj içeriği ve sağlıkla ilgili ayrıntılar gönderilmez.

| Olay | Tetiklendiği yer |
| --- | --- |
| `generate_lead` | WhatsApp randevu bağlantıları (header, mobil menü, ana sayfa, CTA şeridi, yapışkan mobil çubuk) ve iletişim formunun gönderimi |
| `form_start` | İletişim formunda ilk alan etkileşimi |
| `form_submit` | İletişim formunun doğrulamadan geçip gönderilmesi |
| `click_whatsapp` | Randevu amaçlı olmayan WhatsApp bağlantıları |
| `click_phone` | `tel:` bağlantıları |
| `click_email` | `mailto:` bağlantıları |
| `click_directions` | Harita yükleme ve yol tarifi bağlantısı |
| `view_service` | Hizmet detay sayfasının görüntülenmesi |
| `select_service` | Hizmet kartına tıklanması (ana sayfa ve hizmetler hub'ı) |
| `faq_open` | SSS başlığının açılması |
| `outbound_click` | Instagram ve LinkedIn bağlantıları |

Parametreler: `page_path`, `page_type`, `service_name`, `cta_location`,
`link_url`, `method`. Beyaz liste dışındaki anahtarlar, 120 karakterden uzun
değerler ve e-posta/telefon kalıbına uyan değerler çalışma zamanında elenir.

---

## 6. Yeni içerik ekleme

Yeni bir sayfa eklemek için ayrı bir sitemap, menü veya şema düzenlemesi
gerekmez; hepsi içerik modelinden üretilir.

**Yeni hizmet:** `src/content/services.ts` içine `ServicePage` nesnesi ekleyin.
Zorunlu alanlar doldurulduğunda `/hizmetler/<slug>` sayfası, site haritası
kaydı, `Service` + `FAQPage` şeması ve hub kartı kendiliğinden oluşur. Menüde
görünmesi için `src/content/navigation.ts` içindeki ilgili gruba ekleyin.

**Yeni sorun sayfası:** `src/content/concerns.ts`. En az bir hizmet sayfasına
`primaryService` üzerinden bağlanmalıdır.

**Yeni yazı:** `src/content/articles.ts`. `published` ve `reviewed` tarihleri
`YYYY-MM-DD` biçiminde olmalıdır; `reviewed` alanı `Article.dateModified` ve
yazar kutusundaki "son gözden geçirme" bilgisini besler.

Her yeni içerik için:

1. `relatedServices` / `relatedConcerns` / `relatedArticles` alanlarını
   doldurun; aksi hâlde denetim betiği yetim sayfa hatası verir.
2. `npm run build && npm run seo:audit` çalıştırın.
3. Sağlıkla ilgili iddialar için `references` alanına kaynak ekleyin.

---

## 7. Yayına alma öncesi kontrol listesi

- [ ] `npm run build`, `npm run lint`, `npm run seo:audit` hatasız geçiyor.
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` üretim ortamında tanımlı.
- [ ] Üretim `robots.txt` çıktısı `Allow: /` ve site haritası satırını içeriyor;
      önizleme ortamları `Disallow: /` döndürüyor.
- [ ] Yeni eklenen tüm referanslar için yazılı rıza dosyada
      (`consentOnFile: true`) ve metin kişi tanımlanamayacak şekilde
      anonimleştirilmiş.
- [ ] Yasal sayfalardaki "son güncelleme" tarihleri güncel.
- [ ] Acil durum uyarısı hizmet, sorun ve iletişim sayfalarında görünüyor.
- [ ] Mobilde yapışkan CTA çubuğu kapatılabiliyor ve footer içeriğini
      örtmüyor.

---

## 8. Bilinçli olarak yapılmayanlar

- **`aggregateRating` ve `Review` şeması yok.** Doğrulanabilir bir puan
  kaynağı bulunmadığı için arama sonuçlarında yıldız gösterimi hedeflenmiyor
  (PRD §9.5, §13). Denetim betiği bu işaretlemenin geri eklenmesini hata
  olarak raporlar.
- **Açık adres yayımlanmıyor.** Danışan gizliliği gereği yalnızca ilçe
  düzeyinde bilgi verilir; tam adres randevu onayında paylaşılır. Yapısal
  veride `streetAddress` alanı bu nedenle boş bırakılmıştır.
- **Form verisi sunucuda saklanmıyor.** İletişim formu, girilen bilgileri
  WhatsApp mesajına dönüştürür; site tarafında hiçbir kişisel veri
  kaydedilmez veya bir uç noktaya gönderilmez.
