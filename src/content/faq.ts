import type { Faq } from "./types";

export type FaqGroup = {
  id: string;
  title: string;
  items: Faq[];
};

/**
 * Site genelindeki sık sorulan sorular. FAQPage yapısal verisi yalnızca
 * yanıtların tamamı sayfada görünür olduğu için kullanılır (PRD §9.5).
 */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "randevu-ve-surec",
    title: "Randevu ve süreç",
    items: [
      {
        question: "Randevu nasıl alınır?",
        answer:
          "WhatsApp üzerinden mesaj göndererek ya da telefonla arayarak randevu talep edebilirsiniz. Mesajınıza çocuğunuzun yaşını ve kısaca başvuru nedeninizi eklemeniz, uygun bir görüşme planlamayı kolaylaştırır. Mesajlar genellikle aynı gün, en geç bir iş günü içinde yanıtlanır.",
      },
      {
        question: "İlk görüşmeye çocuğumu getirmem gerekir mi?",
        answer:
          "Hayır. İlk görüşme genellikle yalnızca ebeveynlerle yapılır. Böylece endişelerinizi çocuğunuzun yanında konuşmak zorunda kalmadan ayrıntılı biçimde paylaşabilirsiniz ve çocuğun ilk deneyimi tanışma olur.",
      },
      {
        question: "Görüşmeler ne kadar sürüyor?",
        answer:
          "Seanslar genellikle 45–50 dakikadır. Çok küçük yaş grubunda süre 30–40 dakikaya inebilir. Psikolojik değerlendirme görüşmeleri 45–60 dakika sürer.",
      },
      {
        question: "Seanslar hangi sıklıkta yapılıyor?",
        answer:
          "Çoğu süreçte haftada bir seans planlanır. İhtiyaca göre sıklık değişebilir; ebeveyn danışmanlığı genellikle iki haftada bir yürütülür. Kazanımlar yerleştikçe seanslar kademeli olarak aralıklandırılır.",
      },
      {
        question: "Kaç seans sürer?",
        answer:
          "Toplam süre çocuğun yaşına, zorlanma alanına ve ailenin sürece katılımına göre değişir. Değerlendirme sonrasında tahmini bir çerçeve paylaşılır ve bu çerçeve süreç içinde birlikte gözden geçirilir. Belirli bir seans sayısında kesin sonuç taahhüt edilmez.",
      },
      {
        question: "Randevumu iptal etmem gerekirse ne yapmalıyım?",
        answer:
          "İptal ya da erteleme ihtiyacınızı mümkün olan en kısa sürede bildirmeniz yeterlidir. Çocukla yürütülen çalışmada devamlılık önemli olduğu için, düzenli bir seans saatinin korunması önerilir.",
      },
    ],
  },
  {
    id: "hizmet-kapsami",
    title: "Hizmet kapsamı",
    items: [
      {
        question: "Hangi yaş gruplarıyla çalışıyorsunuz?",
        answer:
          "Ağırlıklı olarak 3–18 yaş aralığındaki çocuk ve ergenlerle ve onların ebeveynleriyle çalışılmaktadır. Oyun terapisi çoğunlukla 3–10 yaş, ergen çalışmaları 12–18 yaş aralığında yürütülür.",
      },
      {
        question: "Online görüşme yapıyor musunuz?",
        answer:
          "Çocuklarla yürütülen çalışmalar, özellikle oyun terapisi, yüz yüze planlanır çünkü materyal ve ortam çalışmanın parçasıdır. Ebeveyn danışmanlığı görüşmeleri için uygun durumlarda çevrim içi seçenek değerlendirilebilir; bunu randevu talebinizde belirtmeniz yeterlidir.",
      },
      {
        question: "Tanı koyuyor musunuz?",
        answer:
          "Hayır. Dikkat eksikliği ve hiperaktivite bozukluğu, otizm spektrum bozukluğu ve öğrenme bozukluğu gibi tanılar tıbbi tanılardır ve çocuk-ergen psikiyatristi tarafından konulur. Psikolojik değerlendirme bu sürece katkı sunacak bulguları ortaya koyar ve gerektiğinde hekime yönlendirme yapılır.",
      },
      {
        question: "İlaç öneriyor musunuz?",
        answer:
          "Hayır. İlaç değerlendirmesi ve reçete yalnızca hekim yetkisindedir. Gerekli görülen durumlarda çocuk-ergen psikiyatristine yönlendirme yapılır ve süreç aile onayıyla eş güdümlü yürütülebilir.",
      },
      {
        question: "Rapor düzenliyor musunuz?",
        answer:
          "Adli süreçler ve velayet davalarında kullanılmak üzere rapor düzenlenmez. Psikolojik değerlendirme sonrasında, talebiniz hâlinde okul veya hekimle paylaşmanız için bulguları özetleyen bir yazılı bilgilendirme hazırlanabilir.",
      },
      {
        question: "Okulla iletişime geçiyor musunuz?",
        answer:
          "Yalnızca yazılı onayınızla. Öğretmen gözlemi, çocuğun evdeki ve okuldaki işleyişini karşılaştırmak açısından değerlidir ve birçok süreçte belirleyici katkı sağlar; ancak bu iletişim hiçbir zaman onayınız olmadan kurulmaz.",
      },
    ],
  },
  {
    id: "gizlilik",
    title: "Gizlilik ve etik",
    items: [
      {
        question: "Görüşmelerde konuşulanlar gizli kalıyor mu?",
        answer:
          "Evet. Görüşme içeriği mesleki gizlilik kapsamındadır ve onayınız olmadan hiç kimseyle paylaşılmaz. Gizliliğin yasal bir sınırı vardır: bir çocuğun ihmal veya istismara maruz kaldığına dair ciddi bir bulgu ya da yaşamı tehdit eden bir risk söz konusuysa, ilgili mevzuat gereği bildirim yapılması zorunludur.",
      },
      {
        question: "Çocuğumun seansta anlattıklarını öğrenebilir miyim?",
        answer:
          "Çocuğunuzun sürece güvenmesi için seans içeriğinin bir kısmı ona ait kalır. Bununla birlikte sürecin gidişatı, çalışılan hedefler ve evde işinize yarayacak yaklaşımlar ebeveyn görüşmelerinde düzenli olarak paylaşılır. Güvenliği tehdit eden bir durum söz konusuysa bu bilgi mutlaka sizinle paylaşılır.",
      },
      {
        question: "Kişisel verilerim nasıl korunuyor?",
        answer:
          "Görüşme kayıtları yalnızca mesleki gereklilik kapsamında tutulur, üçüncü kişilerle paylaşılmaz ve erişimi sınırlıdır. Web sitesi üzerinden gönderdiğiniz bilgiler bir veri tabanında saklanmaz; ayrıntılar için Gizlilik Politikası sayfasını inceleyebilirsiniz.",
      },
      {
        question: "Web sitesindeki iletişim formu güvenli mi?",
        answer:
          "Formdaki bilgiler sitede saklanmaz; yalnızca WhatsApp mesajınızı hazırlamak için kullanılır ve mesajı göndermeden önce içeriği görüp değiştirebilirsiniz. Hassas sağlık bilgilerini ilk mesajda paylaşmamanız, ayrıntıları görüşmede konuşmanız önerilir.",
      },
    ],
  },
  {
    id: "ebeveyn-sorulari",
    title: "Ebeveynlerin sık sorduğu sorular",
    items: [
      {
        question: "Çocuğuma psikoloğa gideceğimizi nasıl anlatmalıyım?",
        answer:
          "Yaşına uygun, kısa ve dürüst bir açıklama en iyi sonucu verir: \"Çocukların duygularını anlamasına yardım eden biriyle tanışacağız, orada oyuncaklar ve oyunlar var.\" Ceza gibi sunmamak, sürpriz yapmamak ve \"seni düzeltecek\" ifadesini kullanmamak önemlidir.",
      },
      {
        question: "Çocuğum gelmek istemiyor, ne yapabilirim?",
        answer:
          "Bu yaygın bir durumdur ve genellikle bilinmeyene karşı duyulan kaygıdan kaynaklanır. İlk adım nedenini sormak ve varsa yanlış beklentiyi düzeltmektir. Ergenlerde zorlama ters etki yaptığı için süreç yalnızca ebeveyn danışmanlığı olarak da başlatılabilir.",
      },
      {
        question: "Sadece ebeveyn olarak destek alabilir miyim?",
        answer:
          "Evet. Ebeveyn danışmanlığı, çocuk sürece dâhil olmadan yürütülen bir çalışmadır. Özellikle küçük yaş grubunda ve davranışın ev içi tutarlılıkla ilişkili olduğu durumlarda ilk seçenek olarak önerilir.",
      },
      {
        question: "Eşim sürece katılmak istemiyor, sorun olur mu?",
        answer:
          "İki ebeveynin katılımı ideal olsa da tek ebeveynle yürütülen çalışma da anlamlı sonuç üretir. Bu durumda evdeki uygulama farkını azaltacak stratejiler de gündemin bir parçası hâline gelir.",
      },
      {
        question: "Çocuğumun durumu \"normal\" mi, destek gerekir mi?",
        answer:
          "Belirleyici üç ölçüt vardır: süre, yoğunluk ve işlevsellik. Bir zorlanma haftalardır sürüyor, yaşa göre beklenenden yoğun yaşanıyor ve çocuğun okul, arkadaşlık ya da aile yaşamını kısıtlamaya başlamışsa değerlendirme yapılması yerinde olur. Tek bir ebeveyn görüşmesi de bu soruyu netleştirmek için yeterli olabilir.",
      },
    ],
  },
  {
    id: "konum",
    title: "Konum ve ulaşım",
    items: [
      {
        question: "Görüşmeler nerede yapılıyor?",
        answer:
          "Görüşmeler İstanbul Başakşehir'de yapılmaktadır. Danışan gizliliği gereği açık adres web sitesinde yayımlanmaz; görüşme yerinin tam adresi, ulaşım ve otopark bilgileri randevu onaylandığında sizinle paylaşılır.",
      },
      {
        question: "Hangi bölgelerden danışan kabul ediyorsunuz?",
        answer:
          "Başakşehir'in yanı sıra Küçükçekmece, Bahçeşehir, Esenler, Sultangazi ve Arnavutköy çevresinden gelen ailelerle çalışılmaktadır. Randevu planlanırken ulaşım süresi ve çocuğun günlük ritmi birlikte gözden geçirilir.",
      },
      {
        question: "Çalışma saatleriniz nedir?",
        answer:
          "Görüşmeler Pazartesi ve Salı günleri 12:00 – 19:00 arasında planlanmaktadır. Uygun saat için WhatsApp üzerinden bilgi alabilirsiniz.",
      },
    ],
  },
];

/** Tüm soruları tek bir düz listede döndürür (FAQPage şeması için). */
export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((group) => group.items);

/** Ana sayfada gösterilen kısa SSS seti. */
export const HOME_FAQS: Faq[] = [
  ALL_FAQS[0],
  ALL_FAQS[1],
  FAQ_GROUPS[1].items[0],
  FAQ_GROUPS[2].items[0],
  FAQ_GROUPS[3].items[0],
  FAQ_GROUPS[4].items[0],
];
