/**
 * Danışan geri bildirimleri.
 *
 * Yayın kuralları (PRD §13):
 * - Yalnızca `consentOnFile: true` olan kayıtlar sitede gösterilir.
 * - İsimler baş harflerle anonimleştirilir; tanı, seans içeriği ve
 *   kimliği belirlenebilir ayrıntı yayımlanmaz.
 * - Puan/yorum işaretlemesi (aggregateRating, Review) kullanılmaz;
 *   bunlar birinci taraf ifadelerdir, doğrulanmış platform yorumu değildir.
 * - Bir ailenin izni geri çekildiğinde kayıt bu dosyadan silinir.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Ailenin yayın izninin belgelenip belgelenmediği. */
  consentOnFile: boolean;
};

const ALL_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Çocuğumuzun kaygı sorunlarıyla başa çıkmasında çok yardımcı oldu. Artık çok daha mutlu ve özgüvenli.",
    name: "Ayşe Y.",
    role: "Anne",
    consentOnFile: true,
  },
  {
    quote:
      "Oğlumun dikkat eksikliği sorunu için başvurduk. Hem bize hem de oğlumuza çok destek oldu.",
    name: "Mehmet K.",
    role: "Baba",
    consentOnFile: true,
  },
  {
    quote:
      "Kızımın okul fobisini aşmasında büyük rol oynadı. Profesyonel yaklaşımı için teşekkür ederiz.",
    name: "Zeynep T.",
    role: "Anne",
    consentOnFile: true,
  },
  {
    quote:
      "Davranış problemleri olan oğlumuz için aylarca çare aradık. Oyun terapisi seanslarından sonra öfke nöbetleri belirgin şekilde azaldı, evimize huzur geldi.",
    name: "Elif S.",
    role: "Anne",
    consentOnFile: true,
  },
  {
    quote:
      "Kızımız arkadaş edinmekte çok zorlanıyordu. Sosyal beceri çalışmaları sayesinde artık okulda kendine güveniyor ve yeni arkadaşlıklar kurabiliyor.",
    name: "Murat D.",
    role: "Baba",
    consentOnFile: true,
  },
  {
    quote:
      "Sadece çocuğumuzla değil, bizimle de ilgilendi. Aile danışmanlığı sürecinde bize yol gösterdi; evde nasıl tutarlı davranacağımızı öğrendik.",
    name: "Seda A.",
    role: "Anne",
    consentOnFile: true,
  },
  {
    quote:
      "Ergenlik dönemindeki kızımla iletişimimiz kopma noktasındaydı. Seanslar sonrasında birbirimizi dinlemeyi yeniden öğrendik.",
    name: "Hülya B.",
    role: "Anne",
    consentOnFile: true,
  },
  {
    quote:
      "Yapılan psikolojik değerlendirme sayesinde oğlumuzun ihtiyaçlarını ilk kez net olarak anladık. Okulla iş birliği içinde harika bir yol haritası çizdi.",
    name: "Kemal Ö.",
    role: "Baba",
    consentOnFile: true,
  },
  {
    quote:
      "Kardeş kıskançlığı yüzünden evde zor günler geçiriyorduk. Önerdiği yöntemlerle çocuklarımız arasındaki ilişki gözle görülür şekilde düzeldi.",
    name: "Derya G.",
    role: "Anne",
    consentOnFile: true,
  },
];

export const TESTIMONIALS = ALL_TESTIMONIALS.filter((item) => item.consentOnFile);

/**
 * Geri bildirimlerin nasıl toplandığını ve neyi temsil etmediğini açıklayan
 * şeffaflık notu. Yorum bölümünün yanında görünür biçimde yayımlanır.
 */
export const TESTIMONIAL_DISCLOSURE =
  "Aşağıdaki geri bildirimler, ailelerin yayın izniyle ve kimlik bilgileri baş harflere indirilerek paylaşılmıştır. Metinler anlamı değiştirmeyecek biçimde yalnızca kısaltılmıştır. Bu ifadeler birinci taraf geri bildirimlerdir; her ailede benzer bir sonuç elde edileceğine dair bir vaat içermez ve terapi süreçlerinin sonuçları kişiye göre değişir.";
