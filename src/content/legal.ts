import { EMAIL, EMERGENCY, PHONE_DISPLAY, SITE_NAME, SITE_URL } from "@/lib/site";
import type { ContentSection } from "./types";

export type LegalDocument = {
  path: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
  updated: string;
};

const UPDATED = "2026-08-03";

/**
 * Yasal metinler.
 *
 * Bu metinler genel bir çerçeve sunar ve yayımlanmadan önce hukuk
 * danışmanı tarafından gözden geçirilmelidir (PRD §21, §30). Metinlerde
 * sitenin fiilî işleyişi anlatılır: iletişim formu verisi sunucuda
 * saklanmaz, analiz araçlarına kişisel veri gönderilmez.
 */
export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    path: "/gizlilik-politikasi",
    navLabel: "Gizlilik Politikası",
    h1: "Gizlilik Politikası",
    metaTitle: "Gizlilik Politikası | Psikolog Rabia Bakıcı",
    metaDescription:
      "Bu web sitesinde hangi kişisel veriler işlenir, hangi amaçla kullanılır, ne kadar süre saklanır ve ilgili kişi hakları nelerdir?",
    intro:
      "Bu politika, psikolograbiabakici.com üzerinden hangi kişisel verilerin işlendiğini, bu verilerin hangi amaçla kullanıldığını ve haklarınızı açıklar. Klinik görüşmeler kapsamında işlenen veriler ayrı bir mesleki gizlilik çerçevesine tabidir ve görüşme öncesinde ayrıca bilgilendirme yapılır.",
    sections: [
      {
        heading: "Veri sorumlusu",
        paragraphs: [
          `Veri sorumlusu ${SITE_NAME}'dır. İletişim: ${EMAIL}, ${PHONE_DISPLAY}. Bu politika yalnızca ${SITE_URL} adresindeki web sitesi için geçerlidir.`,
        ],
      },
      {
        heading: "Web sitesi üzerinden işlenen veriler",
        paragraphs: [
          "Bu web sitesinde kullanıcı hesabı, üyelik ya da veri tabanına kayıt bulunmamaktadır. Sitedeki randevu talep formu, girdiğiniz bilgileri sunucuya göndermez ve saklamaz.",
          "Form doldurulduğunda bilgiler yalnızca tarayıcınızda bir WhatsApp mesaj metnine dönüştürülür. Mesajı göndermeden önce içeriğini görebilir ve değiştirebilirsiniz. Mesajı gönderdiğinizde iletişim, WhatsApp üzerinden ve WhatsApp'ın kendi gizlilik koşulları çerçevesinde kurulur.",
        ],
        bullets: [
          "Randevu talebi için: ad, telefon, seçtiğiniz konu ve varsa kısa notunuz — yalnızca WhatsApp mesajı olarak size ait cihazdan iletilir.",
          "Telefon veya e-posta ile iletişim kurduğunuzda: iletişim bilgileriniz ve mesaj içeriğiniz.",
          "Ölçümleme için: sayfa adresi, sayfa türü, tıklanan buton konumu, cihaz kategorisi ve trafik kaynağı gibi kişisel olmayan üst veriler.",
        ],
      },
      {
        heading: "Analiz araçlarına gönderilmeyen veriler",
        paragraphs: [
          "Ölçümleme yalnızca olay üst verisiyle yapılır. Aşağıdaki bilgiler hiçbir koşulda analiz veya reklam araçlarına gönderilmez:",
        ],
        bullets: [
          "Ad ve soyad",
          "Telefon numarası",
          "E-posta adresi",
          "Form içindeki serbest metin ve not alanları",
          "Sağlık durumu, belirti veya tanı bilgisi",
          "Kimliği belirlenebilir oturum ayrıntıları",
        ],
      },
      {
        heading: "İşleme amaçları ve hukuki dayanak",
        bullets: [
          "Randevu talebinizi almak ve size dönüş yapmak — talebinizi yerine getirme ve açık rızanız.",
          "Web sitesinin güvenliğini ve teknik işleyişini sağlamak — meşru menfaat.",
          "Sitenin hangi bölümlerinin işe yaradığını anlamak ve içeriği iyileştirmek — açık rızanız kapsamında ölçümleme.",
          "Yasal yükümlülüklere uymak — ilgili mevzuat.",
        ],
      },
      {
        heading: "Saklama süreleri",
        paragraphs: [
          "Web sitesi üzerinden gönderilen form verileri sitede saklanmaz. WhatsApp, telefon veya e-posta yoluyla ilettiğiniz iletişim mesajları, talebinizin gereği yerine getirilene kadar ve en fazla 12 ay süreyle tutulur; ardından silinir.",
          "Klinik görüşmelere ilişkin kayıtlar, mesleki mevzuat ve etik kurallar çerçevesinde belirlenen süre boyunca, erişimi kısıtlı biçimde saklanır. Bu konudaki ayrıntılı bilgilendirme görüşme öncesinde yazılı olarak yapılır.",
        ],
      },
      {
        heading: "Üçüncü taraflar",
        paragraphs: [
          "Site, işleyişi için sınırlı sayıda üçüncü taraf hizmeti kullanır:",
        ],
        bullets: [
          "Barındırma ve içerik dağıtımı sağlayıcısı — teknik erişim kayıtları.",
          "Google (gtag.js) — ölçümleme ve reklam etiketi; yalnızca kişisel olmayan olay üst verisi iletilir.",
          "Google Maps — harita yalnızca sizin tıklamanızla yüklenir; yüklendiğinde Google tarafından çerez yerleştirilebilir.",
          "WhatsApp (Meta) — mesajlaşma yoluyla iletişim kurduğunuzda.",
        ],
      },
      {
        heading: "Haklarınız",
        paragraphs: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, aktarıldığı üçüncü kişileri öğrenme ve işlemeye itiraz etme haklarına sahipsiniz.",
          `Bu haklarınızı kullanmak için ${EMAIL} adresine yazabilirsiniz. Talepler en kısa sürede ve her hâlükârda mevzuatta öngörülen süre içinde yanıtlanır.`,
        ],
      },
      {
        heading: "Çocuklara ilişkin veriler",
        paragraphs: [
          "Bu web sitesi çocuklara yönelik değildir ve çocuklardan doğrudan veri toplamaz. Randevu talepleri ebeveyn veya yasal temsilci tarafından iletilir. Çocuğunuza ait bilgileri paylaşırken yalnızca gerekli olan asgari bilgiyi iletmeniz önerilir; ayrıntılar görüşmede ele alınır.",
        ],
      },
      {
        heading: "Güvenlik",
        paragraphs: [
          "Site HTTPS üzerinden sunulur ve güvenlik başlıkları uygulanır. Yönetimsel erişim sınırlıdır ve çok faktörlü doğrulama kullanılır. Buna karşılık internet üzerinden yapılan hiçbir iletimin mutlak güvenlikte olmadığını hatırlatmak isteriz; hassas sağlık bilgilerini ilk mesajınızda paylaşmamanız önerilir.",
        ],
      },
      {
        heading: "Değişiklikler",
        paragraphs: [
          "Bu politika gerektiğinde güncellenir. Güncelleme tarihi sayfanın başında belirtilir. Önemli değişikliklerde, sitede görünür bir bilgilendirme yapılır.",
        ],
      },
    ],
    updated: UPDATED,
  },

  {
    path: "/cerez-politikasi",
    navLabel: "Çerez Politikası",
    h1: "Çerez Politikası",
    metaTitle: "Çerez Politikası | Psikolog Rabia Bakıcı",
    metaDescription:
      "Bu web sitesinde hangi çerezler kullanılır, hangi amaçla kullanılır ve çerez tercihlerinizi nasıl yönetebilirsiniz?",
    intro:
      "Çerezler, ziyaret ettiğiniz siteler tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Bu sayfa, psikolograbiabakici.com üzerinde hangi çerezlerin kullanıldığını ve bunları nasıl yönetebileceğinizi açıklar.",
    sections: [
      {
        heading: "Zorunlu çerezler",
        paragraphs: [
          "Sitenin temel işleyişi için gereken çerezlerdir; güvenlik ve oturum tutarlılığı gibi işlevleri sağlar. Bu çerezler olmadan site düzgün çalışmaz ve bu nedenle rıza gerektirmez.",
        ],
      },
      {
        heading: "Ölçümleme ve reklam çerezleri",
        paragraphs: [
          "Site, ziyaretçilerin hangi sayfaları yararlı bulduğunu anlamak ve reklam performansını ölçmek için Google tarafından sağlanan gtag.js etiketini kullanır. Bu etiket, ziyaret edilen sayfa ve tıklanan buton gibi kişisel olmayan üst verileri toplar.",
          "Bu çerezler zorunlu değildir. Tarayıcı ayarlarınızdan üçüncü taraf çerezlerini engelleyebilir ya da mevcut çerezleri silebilirsiniz; site bu durumda da işlevini korur.",
        ],
        bullets: [
          "_ga ve _ga_* — Google Analytics tarafından ziyaretçi ayrımı için kullanılır.",
          "_gcl_* — Google Ads dönüşüm ölçümü için kullanılır.",
        ],
      },
      {
        heading: "Tıklamayla yüklenen içerik",
        paragraphs: [
          "İletişim sayfasındaki harita, sayfa açılışında otomatik olarak yüklenmez. Haritayı görüntülemek için düğmeye bastığınızda Google Maps içeriği devreye girer ve Google tarafından çerez yerleştirilebilir. Bu tercih sizde kalır.",
        ],
      },
      {
        heading: "Çerezleri nasıl yönetirsiniz?",
        paragraphs: [
          "Tüm modern tarayıcılar çerezleri görüntüleme, silme ve engelleme imkânı sunar. İlgili ayarlar genellikle tarayıcının gizlilik ya da site verileri bölümünde bulunur.",
          "Çerezleri tümüyle engellemeniz durumunda bu sitedeki içeriklere erişmeye devam edebilirsiniz; yalnızca ölçümleme verisi toplanmaz.",
        ],
        bullets: [
          "Chrome: Ayarlar → Gizlilik ve güvenlik → Üçüncü taraf çerezleri",
          "Safari: Ayarlar → Gizlilik → Tüm çerezleri engelle",
          "Firefox: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri",
          "Edge: Ayarlar → Çerezler ve site izinleri",
        ],
      },
      {
        heading: "Oturum kaydı yapılmaz",
        paragraphs: [
          "Bu sitede oturum kaydı (session replay) veya ısı haritası aracı kullanılmamaktadır. Dolayısıyla form alanlarına yazdıklarınız kaydedilmez.",
        ],
      },
    ],
    updated: UPDATED,
  },

  {
    path: "/kullanim-kosullari",
    navLabel: "Kullanım Koşulları ve Feragat",
    h1: "Kullanım Koşulları ve Feragat",
    metaTitle: "Kullanım Koşulları ve Feragat | Rabia Bakıcı",
    metaDescription:
      "Bu web sitesindeki içeriklerin kapsamı, sınırları ve kullanım koşulları. Sağlık bilgisi feragatnamesi ve acil durum bilgilendirmesi.",
    intro:
      "Bu sayfa, psikolograbiabakici.com üzerindeki içeriklerin hangi amaçla sunulduğunu ve hangi sınırlara tabi olduğunu açıklar. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.",
    sections: [
      {
        heading: "İçeriklerin amacı",
        paragraphs: [
          "Bu sitedeki yazılar, hizmet açıklamaları ve sık sorulan sorular genel bilgilendirme amaçlıdır. İçerikler bir psikolog tarafından hazırlanır ve düzenli olarak gözden geçirilir; buna karşılık hiçbir içerik bireysel bir değerlendirmenin, tanının ya da tedavi önerisinin yerine geçmez.",
          "Bir çocuğun durumu ancak gelişim öyküsü, aile bağlamı ve doğrudan gözlem birlikte değerlendirildiğinde anlaşılabilir. Bu nedenle sitedeki bilgilerden yola çıkarak tanı koymamanız ya da bir tedaviyi başlatıp bırakmamanız önemlidir.",
        ],
      },
      {
        heading: "Sağlık bilgisi feragatnamesi",
        bullets: [
          "Bu site tıbbi teşhis koymaz ve tedavi önerisi sunmaz.",
          "Sitede yer alan hiçbir ifade, belirli bir sonucun elde edileceğine dair garanti içermez.",
          "Terapi süreçlerinin sonuçları kişiye, duruma ve sürece katılıma göre değişir.",
          "İçerikler, hekiminizin ya da size bakan sağlık profesyonelinin önerisinin yerine geçmez.",
          "Bir belirti listesine dayanarak kendi kendine tanı koymak yanıltıcıdır.",
        ],
      },
      {
        heading: "Acil durumlar",
        paragraphs: [EMERGENCY.notice],
      },
      {
        heading: "Danışan geri bildirimleri",
        paragraphs: [
          "Sitede yer alan aile geri bildirimleri, ailelerin yazılı izniyle ve kimlik bilgileri baş harflere indirilerek yayımlanır. Metinler anlamı değiştirmeyecek biçimde yalnızca kısaltılır.",
          "Bu ifadeler birinci taraf geri bildirimlerdir; doğrulanmış platform yorumu niteliği taşımaz ve her ailede benzer bir sonuç elde edileceğine dair bir vaat oluşturmaz. Bu nedenle sitede puan ya da yorum işaretlemesi (aggregateRating, Review) kullanılmamaktadır.",
          "Bir ailenin izni geri çekildiğinde ilgili geri bildirim gecikmeksizin siteden kaldırılır.",
        ],
      },
      {
        heading: "Fikri mülkiyet",
        paragraphs: [
          "Sitedeki metinler, görseller ve tasarım öğeleri üzerindeki haklar aksi belirtilmedikçe site sahibine aittir. İçerikler kaynak gösterilerek alıntılanabilir; bütünüyle kopyalanması, ticari amaçla çoğaltılması ya da izinsiz yayımlanması uygun değildir.",
          "Sitedeki fotoğraflar kişisel kullanım hakkıyla kullanılmaktadır ve izinsiz çoğaltılamaz.",
        ],
      },
      {
        heading: "Dış bağlantılar",
        paragraphs: [
          "Bazı içeriklerde kaynak olarak dış sitelere bağlantı verilir. Bu bağlantılar bilgilendirme amaçlıdır; bağlantı verilen sitelerin içeriğinden, güncelliğinden ya da gizlilik uygulamalarından site sahibi sorumlu değildir.",
        ],
      },
      {
        heading: "Sorumluluğun sınırı",
        paragraphs: [
          "Site içeriğinin doğru ve güncel olması için özen gösterilir; buna karşılık içeriğin kesintisiz, hatasız ya da her durum için eksiksiz olduğu garanti edilmez. Sitedeki bilgilere dayanarak alınan kararlardan doğan sonuçlar kullanıcının sorumluluğundadır.",
        ],
      },
      {
        heading: "Uygulanacak hukuk",
        paragraphs: [
          "Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Koşullar gerektiğinde güncellenir ve güncelleme tarihi sayfanın başında belirtilir.",
        ],
      },
    ],
    updated: UPDATED,
  },

  {
    path: "/erisilebilirlik",
    navLabel: "Erişilebilirlik",
    h1: "Erişilebilirlik Beyanı",
    metaTitle: "Erişilebilirlik Beyanı | Psikolog Rabia Bakıcı",
    metaDescription:
      "Bu web sitesinde uygulanan erişilebilirlik önlemleri, bilinen sınırlar ve geri bildirim yolları. WCAG 2.2 AA hedefi.",
    intro:
      "Bu site, engelli kullanıcılar dâhil herkesin içeriğe erişebilmesini hedefler. Uygulama hedefi WCAG 2.2 AA düzeyidir. Aşağıda uygulanan önlemler, bilinen sınırlar ve geri bildirim yolları açıklanmıştır.",
    sections: [
      {
        heading: "Uygulanan önlemler",
        bullets: [
          "Anlamsal HTML yapısı: başlık hiyerarşisi, gezinme, ana içerik ve alt bilgi bölgeleri tanımlıdır.",
          "Her sayfada içeriğe atlama bağlantısı bulunur.",
          "Tüm etkileşimli öğeler klavyeyle kullanılabilir ve görünür odak halkası taşır.",
          "Form alanlarının tamamı etiketlidir; hata mesajları ekran okuyucuya bildirilir.",
          "Metin ve arka plan renkleri kontrast eşiklerini karşılayacak biçimde seçilmiştir.",
          "Sayfa yüzde 200 yakınlaştırmada içerik kaybı olmadan kullanılabilir.",
          "Görsellere bağlama uygun alternatif metin yazılır; dekoratif görseller boş alternatif metinle işaretlenir.",
          "Otomatik oynatılan ses veya video kullanılmaz.",
          "Hareket azaltma tercihi (prefers-reduced-motion) desteklenir; kayan yorum şeridi bu tercihte durur.",
          "Sayfa dili Türkçe olarak beyan edilir.",
          "Harita ve benzeri gömülü içerik yalnızca kullanıcı isteğiyle yüklenir.",
        ],
      },
      {
        heading: "Bilinen sınırlar",
        paragraphs: [
          "Site sürekli geliştirilmektedir ve bazı sınırlar hâlâ mevcuttur:",
        ],
        bullets: [
          "Kullanıcı isteğiyle yüklenen Google Maps çerçevesi üçüncü taraf içeriğidir; erişilebilirliği Google tarafından belirlenir.",
          "Görsellerin kopyalanmasını sınırlamak için uygulanan koruma, bazı tarayıcı eklentilerinin görsel işleme davranışını etkileyebilir.",
          "Yorum şeridi, hareket azaltma tercihi kapalıysa otomatik olarak kayar; şeridin üzerine gelindiğinde ya da klavye odağı içine girdiğinde durur.",
        ],
      },
      {
        heading: "Yardımcı teknolojilerle uyum",
        paragraphs: [
          "Site, güncel tarayıcılar ve yaygın ekran okuyucularla (NVDA, VoiceOver, TalkBack) kullanılabilecek biçimde geliştirilmiştir. Kullandığınız yardımcı teknolojide bir sorunla karşılaşırsanız bunu bize bildirmeniz, düzeltme için en hızlı yoldur.",
        ],
      },
      {
        heading: "Geri bildirim",
        paragraphs: [
          `Bu sitede erişemediğiniz bir içerik ya da kullanamadığınız bir işlev varsa ${EMAIL} adresine yazabilir ya da ${PHONE_DISPLAY} numarasından ulaşabilirsiniz. Bildiriminizde hangi sayfada, hangi tarayıcı ve yardımcı teknolojiyle sorun yaşadığınızı belirtmeniz çözümü hızlandırır.`,
          "Bildirimler en kısa sürede değerlendirilir. Talep ettiğiniz içeriği erişilebilir bir biçimde (örneğin telefonda sözlü olarak) size iletebiliriz.",
        ],
      },
      {
        heading: "Görüşme mekânının erişilebilirliği",
        paragraphs: [
          "Bu beyan web sitesinin erişilebilirliğine ilişkindir. Görüşme mekânının fiziksel erişilebilirlik koşulları hakkında bilgiye ihtiyacınız varsa randevu talebinizde belirtmeniz yeterlidir; netleştirilip size dönüş yapılır.",
        ],
      },
    ],
    updated: UPDATED,
  },
];

export function getLegalDocument(path: string): LegalDocument | undefined {
  return LEGAL_DOCUMENTS.find((doc) => doc.path === path);
}
