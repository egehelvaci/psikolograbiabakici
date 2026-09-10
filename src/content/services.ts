import { LAST_REVIEWED } from "@/lib/site";
import type { ServicePage } from "./types";

/**
 * Hizmet sayfaları. Her sayfa tek bir birincil arama niyetine hizmet eder;
 * iki sayfa aynı niyeti hedeflemez (PRD §7.4).
 */
export const SERVICES: ServicePage[] = [
  {
    slug: "cocuk-psikologu",
    image: "/images/child-development.jpg",
    imageAlt: "Çocuğun yaratıcı etkinlikle ilgilendiği bir an",
    navLabel: "Çocuk Psikolojisi",
    h1: "Başakşehir Çocuk Psikoloğu",
    metaTitle: "Başakşehir Çocuk Psikoloğu | Rabia Bakıcı",
    metaDescription:
      "Başakşehir'de çocuk psikolojisi desteği: kaygı, davranış problemleri, uyum güçlükleri ve okul sorunları. Süreç, yaş grupları ve randevu bilgileri.",
    summary:
      "3–12 yaş arası çocuklarda duygusal, davranışsal ve uyum güçlüklerinde çocuk odaklı psikolojik destek.",
    answer:
      "Çocuk psikolojisi desteği, bir çocuğun duygularını, davranışlarını ve ilişkilerini kendi gelişim dönemi içinde değerlendirip; çocuğa ve ebeveyne birlikte çalışan bir destek planı sunmaktır. Amaç çocuğu \"düzeltmek\" değil, zorlandığı alanda ona ve ailesine uygun beceriler kazandırmaktır.",
    suitableFor: [
      "Son dönemde belirgin bir davranış değişikliği fark ettiğiniz çocuklar",
      "Kaygı, korku ya da aşırı endişe belirtileri gösteren çocuklar",
      "Okula uyum, öğretmen veya arkadaş ilişkilerinde zorlanan çocuklar",
      "Öfke patlamaları, inatlaşma ve kural sınırlarında sık çatışma yaşayan çocuklar",
      "Taşınma, boşanma, kayıp veya kardeş doğumu gibi bir değişimin ardından zorlanan çocuklar",
      "Uyku, yeme veya tuvalet alışkanlıklarında geriye dönüş yaşayan çocuklar",
    ],
    signs: [
      "Daha önce keyif aldığı etkinliklerden çekilmesi",
      "Sık sık karın ağrısı, baş ağrısı gibi tıbbi nedeni bulunamayan yakınmalar",
      "Ayrılık anlarında yoğun ve uzun süren tepkiler",
      "Yaşına göre beklenenden sık ve şiddetli öfke nöbetleri",
      "Okulda ya da evde belirgin performans veya davranış farkı",
      "Akranlarıyla ilişki kurmakta süreklilik gösteren zorluk",
      "Kendine güvenle ilgili olumsuz ifadeler (\"ben yapamam\", \"beni kimse sevmiyor\")",
    ],
    sections: [
      {
        heading: "Çocuk psikolojisi desteği nasıl bir çalışmadır?",
        paragraphs: [
          "Çocuklar zorlandıkları şeyi çoğu zaman sözcüklerle anlatmaz; davranışlarıyla, oyunlarıyla ve bedenleriyle anlatır. Bu nedenle çocuklarla yapılan psikolojik çalışma yetişkin terapisinin küçültülmüş hâli değildir. Çalışmanın merkezinde çocuğun yaşı, dil gelişimi, dikkat süresi ve oyun kapasitesi bulunur.",
          "Süreç genellikle ebeveyn görüşmesiyle başlar. Çocuğun gelişim öyküsü, aile yapısı, okul durumu ve şu anda sizi endişelendiren durum ayrıntılı biçimde konuşulur. Ardından çocukla tanışma seansları yapılır. Bu seanslarda çocuk gözlenir, oyun ve yaşa uygun etkinlikler aracılığıyla iç dünyasına dair bilgi toplanır.",
          "Toplanan bilgiler bir araya getirildiğinde sizinle bir değerlendirme görüşmesi yapılır: hangi alanlarda zorlanma olduğu, bunun hangi ihtiyaçla ilişkili olabileceği ve nasıl bir çalışma planı önerildiği açıkça paylaşılır. Plan üzerinde birlikte karar verilir.",
        ],
      },
      {
        heading: "Hangi konularda çalışılır?",
        bullets: [
          "Kaygı, korkular ve aşırı endişe",
          "Öfke kontrolü ve davranış sınırları",
          "Okula uyum, okul reddi ve okul kaygısı",
          "Kardeş ilişkileri ve kıskançlık",
          "Akran ilişkileri, arkadaşlık kurma ve sosyal geri çekilme",
          "Özgüven ve benlik algısı",
          "Boşanma, taşınma, kayıp gibi yaşam değişimlerine uyum",
          "Dikkat ve organize olma güçlükleri (gerekli durumlarda hekim değerlendirmesiyle birlikte)",
        ],
      },
      {
        heading: "Başakşehir ve çevresinden ulaşım",
        paragraphs: [
          "Görüşmeler İstanbul Başakşehir'de yapılmaktadır. Başakşehir'in yanı sıra Küçükçekmece, Bahçeşehir, Esenler, Sultangazi ve Arnavutköy çevresinden gelen ailelerle de çalışılmaktadır. Randevu onaylandığında görüşme yerinin tam adresi, ulaşım ve otopark bilgileri sizinle paylaşılır.",
          "Çocukla yapılan çalışmada devamlılık önemlidir. Bu nedenle randevu planlanırken ulaşım süresi, okul saatleri ve çocuğun günlük ritmi birlikte gözden geçirilir.",
        ],
      },
    ],
    process: [
      {
        title: "Ebeveyn görüşmesi",
        description:
          "Çocuk olmadan yapılan ilk görüşmede gelişim öyküsü, aile ve okul bağlamı ile mevcut endişeler ayrıntılı biçimde alınır.",
      },
      {
        title: "Çocukla tanışma",
        description:
          "Çocuğun kendini güvende hissedeceği bir ortamda, oyun ve yaşa uygun etkinliklerle tanışma seansları yapılır.",
      },
      {
        title: "Değerlendirme ve plan",
        description:
          "Toplanan bilgiler sizinle paylaşılır; hedefler, seans sıklığı ve tahmini süre birlikte belirlenir.",
      },
      {
        title: "Düzenli seanslar",
        description:
          "Genellikle haftada bir, 45–50 dakikalık seanslar yapılır. Çocuğun ihtiyacına göre sıklık değişebilir.",
      },
      {
        title: "Ebeveyn geri bildirimi",
        description:
          "Belirli aralıklarla ebeveyn görüşmeleri yapılır; evde ve okulda uygulanabilecek yaklaşımlar birlikte planlanır.",
      },
      {
        title: "Gözden geçirme ve sonlandırma",
        description:
          "Hedeflere yaklaşıldığında süreç birlikte değerlendirilir ve kazanımların kalıcılığı için kademeli bir sonlandırma planlanır.",
      },
    ],
    ageGroups:
      "Ağırlıklı olarak 3–12 yaş arası çocuklarla çalışılmaktadır. 12 yaş üzeri için ergen psikolojisi çalışması ayrı bir çerçevede yürütülür.",
    parentInvolvement:
      "Ebeveyn katılımı sürecin ayrılmaz bir parçasıdır. Çocuk seanslarının yanında düzenli ebeveyn görüşmeleri planlanır; evde denenecek yaklaşımlar birlikte belirlenir. Çocuğun seans içeriği, güven ilişkisini koruyacak biçimde ve çocuğun yaşına uygun bir çerçevede paylaşılır.",
    sessionFormat:
      "Seanslar yüz yüze, haftada bir ve 45–50 dakika olarak planlanır. Ebeveyn görüşmeleri genellikle 4–6 seansta bir yapılır. Gerekli durumlarda okul ile iş birliği, ebeveyn onayıyla kurulur.",
    notPromised: [
      "Belirli bir seans sayısında kesin sonuç garantisi verilmez.",
      "Tıbbi teşhis konulmaz; teşhis yetkisi hekimlere aittir.",
      "İlaç önerisi veya reçete düzenlenmez.",
      "Çocuğun kişilik özelliklerini değiştirmek hedeflenmez.",
      "Adli süreçlerde kullanılmak üzere rapor düzenlenmez.",
    ],
    credentials: [
      "Bakü Devlet Üniversitesi — Psikoloji lisansı",
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Oyun terapisi ve çocuklarda davranış problemleri alanında 5 yılı aşkın uygulama deneyimi",
    ],
    faqs: [
      {
        question: "İlk görüşmeye çocuğumu getirmem gerekir mi?",
        answer:
          "Hayır. İlk görüşme genellikle yalnızca ebeveynlerle yapılır. Bu görüşmede çocuğun gelişim öyküsünü ve sizi endişelendiren durumu, çocuğun yanında konuşmak zorunda kalmadan ayrıntılı biçimde paylaşabilirsiniz.",
      },
      {
        question: "Çocuğuma psikoloğa gittiğimizi nasıl anlatmalıyım?",
        answer:
          "Yaşına uygun, kısa ve dürüst bir açıklama en iyi sonucu verir. Örneğin \"Çocukların duygularını anlamasına yardım eden biriyle tanışacağız, orada oyuncaklar ve oyunlar var\" gibi bir ifade kullanılabilir. Ceza gibi sunulmaması ve sürpriz yapılmaması önemlidir.",
      },
      {
        question: "Görüşmeler ne kadar sürer, kaç seans gerekir?",
        answer:
          "Seanslar 45–50 dakikadır. Toplam süre çocuğun yaşına, zorlanma alanına ve ailenin sürece katılımına göre değişir. Değerlendirme sonrasında size tahmini bir çerçeve sunulur ve bu çerçeve süreç içinde birlikte gözden geçirilir.",
      },
      {
        question: "Seansta konuşulanlar bana aktarılıyor mu?",
        answer:
          "Çocuğunuzun sürece güvenmesi için seans içeriğinin bir kısmı ona ait kalır. Bununla birlikte gidişat, çalışılan hedefler ve evde işinize yarayacak yaklaşımlar ebeveyn görüşmelerinde düzenli olarak paylaşılır. Çocuğun güvenliğini tehdit eden bir durum söz konusuysa bu bilgi mutlaka sizinle paylaşılır.",
      },
      {
        question: "Çocuk psikoloğu ile pedagog arasındaki fark nedir?",
        answer:
          "Psikoloji lisansı ve klinik psikoloji yüksek lisansı olan bir psikolog, duygusal ve davranışsal zorlanmalar üzerinde psikolojik değerlendirme ve destek çalışması yürütür. Pedagoji ise eğitim bilimleri alanıdır ve öğrenme süreçlerine odaklanır. Ayrıntılı karşılaştırma için ilgili yazımızı okuyabilirsiniz.",
      },
    ],
    relatedServices: ["oyun-terapisi", "cocuklarda-kaygi-terapisi", "davranis-problemleri"],
    relatedConcerns: ["okul-reddi", "ofke-nobetleri", "ayrilik-kaygisi"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "ilk-gorusmede-ne-olur"],
    references: [
      {
        label: "Türk Psikologlar Derneği — Etik Yönetmelik",
        url: "https://www.psikolog.org.tr/tr/yayinlar/etik-yonetmelik/",
      },
      {
        label: "Dünya Sağlık Örgütü — Çocuk ve ergen ruh sağlığı",
        url: "https://www.who.int/news-room/fact-sheets/detail/mental-health-of-children-and-young-people",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "ergen-psikologu",
    image: "/images/creative-play.jpg",
    imageAlt: "Çocuğun kitapla sakin bir etkinlik yaptığı an",
    navLabel: "Ergen Psikolojisi",
    h1: "Başakşehir Ergen Psikoloğu",
    metaTitle: "Başakşehir Ergen Psikoloğu | Rabia Bakıcı",
    metaDescription:
      "Ergenlerle psikolojik destek çalışması: kaygı, öfke, iletişim sorunları, okul ve akran baskısı. Gizlilik, ebeveyn katılımı ve süreç bilgileri.",
    summary:
      "12–18 yaş aralığında kimlik, kaygı, öfke, motivasyon ve iletişim konularında ergene ve ailesine destek.",
    answer:
      "Ergenlik döneminde yapılan psikolojik çalışma, gencin kendi sesini bulabileceği güvenli bir alan kurmayı ve aynı zamanda aile içi iletişimi onarmayı hedefler. Ergenin sürece kendi isteğiyle katılması, sonucun kalıcılığı açısından belirleyicidir.",
    suitableFor: [
      "Ailesiyle iletişimi belirgin biçimde kopmuş ergenler",
      "Yoğun kaygı, sınav kaygısı veya sosyal kaygı yaşayan ergenler",
      "Öfke kontrolünde zorlanan, sık çatışmaya giren ergenler",
      "Okul motivasyonunu kaybetmiş, devamsızlık yapan ergenler",
      "Akran baskısı, dışlanma veya zorbalık yaşayan ergenler",
      "Kendine güven, beden algısı ve kimlik sorularıyla zorlanan ergenler",
    ],
    signs: [
      "Uzun süredir devam eden çekilme, odaya kapanma ve iletişimden kaçınma",
      "Uyku ve iştah düzeninde belirgin değişiklik",
      "Ders başarısında ani ve sürekli düşüş",
      "Arkadaş çevresinde ani ve açıklanamayan değişimler",
      "Sürekli gerginlik, ağlama veya öfke patlamaları",
      "Kendine zarar verme ya da umutsuzluk ifadeleri",
    ],
    sections: [
      {
        heading: "Ergenle çalışmayı farklı kılan nedir?",
        paragraphs: [
          "Ergenlik, bağımsızlık ihtiyacının en güçlü olduğu dönemdir. Bu nedenle ergen, kendisi adına alınan kararlara ve \"düzeltilmeye\" karşı doğal bir direnç gösterir. Çalışmanın ilk hedefi bu direnci aşmak değil, ergenin kendi hedeflerini tanımlayabildiği bir iş birliği kurmaktır.",
          "İlk görüşme genellikle ebeveynlerle yapılır ve öykü alınır. Ardından ergenle baş başa görüşmeler başlar. Bu görüşmelerin sınırları ve gizlilik çerçevesi hem ergene hem aileye baştan açıkça anlatılır; belirsizlik güven ilişkisini en çok zedeleyen unsurdur.",
          "Çalışma boyunca ergenin okul, arkadaş çevresi ve aile içindeki rolü birlikte ele alınır. Duygu düzenleme, çatışma anında geri çekilebilme, sınır koyma ve ihtiyacını sözle ifade etme gibi somut beceriler üzerinde çalışılır.",
        ],
      },
      {
        heading: "Gizlilik nasıl işler?",
        paragraphs: [
          "Ergenin anlattıkları, güven ilişkisinin korunabilmesi için ayrıntılı biçimde aileye aktarılmaz. Ebeveyn görüşmelerinde sürecin gidişatı, çalışılan hedefler ve ailenin nasıl destek olabileceği paylaşılır.",
          "Bu gizliliğin net bir sınırı vardır: ergenin ya da bir başkasının güvenliğini tehdit eden bir durum söz konusuysa (kendine zarar verme riski, istismar, yaşamı tehdit eden bir durum) bu bilgi ailesiyle ve gerektiğinde ilgili kurumlarla paylaşılır. Bu sınır ergene de baştan açıkça anlatılır.",
        ],
      },
      {
        heading: "Ailenin rolü",
        paragraphs: [
          "Ergen terapisinde aile \"sorunun kaynağı\" olarak değil, çözümün önemli bir parçası olarak ele alınır. Ebeveyn görüşmelerinde ergenlik dönemine özgü gelişimsel ihtiyaçlar, sınır koyma ile özerklik tanıma arasındaki denge ve tartışmayı tırmandırmayan iletişim biçimleri üzerinde çalışılır.",
          "Ailenin en sık sorduğu soru, ergen konuşmak istemediğinde ne yapılacağıdır. Bu durumda süreç zorlamayla değil, ergenin kendi gündemine alan açılarak kurulur; ilk seanslarda hedef sorunu çözmek değil, konuşulabilir bir ilişki kurmaktır.",
        ],
      },
    ],
    process: [
      {
        title: "Ebeveyn görüşmesi",
        description:
          "Gelişim öyküsü, aile bağlamı ve mevcut endişeler alınır; ergene sürecin nasıl anlatılacağı birlikte planlanır.",
      },
      {
        title: "Ergenle tanışma",
        description:
          "Ergenle baş başa yapılan görüşmede gizlilik çerçevesi anlatılır ve onun kendi hedefleri konuşulur.",
      },
      {
        title: "Ortak hedef belirleme",
        description:
          "Ergenin kabul ettiği, somut ve ölçülebilir hedefler tanımlanır; zorlama yerine iş birliği kurulur.",
      },
      {
        title: "Düzenli seanslar",
        description:
          "Haftada bir, 45–50 dakikalık seanslarla duygu düzenleme, iletişim ve baş etme becerileri üzerinde çalışılır.",
      },
      {
        title: "Ebeveyn danışmanlığı",
        description:
          "Aileyle ayrı görüşmelerde sınır koyma, özerklik tanıma ve çatışma yönetimi ele alınır.",
      },
      {
        title: "Gözden geçirme",
        description:
          "Hedeflere ne kadar yaklaşıldığı ergen ve aileyle birlikte değerlendirilir; gerekirse plan güncellenir.",
      },
    ],
    ageGroups: "12–18 yaş aralığındaki ergenlerle çalışılmaktadır.",
    parentInvolvement:
      "Ergenin gizliliği korunarak, düzenli aralıklarla ebeveyn görüşmeleri yapılır. Bu görüşmelerde seans içeriği değil, sürecin gidişatı ve ailenin destekleyici rolü konuşulur.",
    sessionFormat:
      "Haftada bir, 45–50 dakikalık yüz yüze seanslar. Ebeveyn görüşmeleri genellikle 4–6 seansta bir planlanır.",
    notPromised: [
      "Ergenin belirli bir davranışı bırakacağına dair garanti verilmez.",
      "Aileye, ergenin paylaşımlarının tamamı aktarılmaz.",
      "Tıbbi teşhis konulmaz, ilaç önerilmez.",
      "Okul veya adli kurumlar için resmî rapor düzenlenmez.",
      "Ergen istemediği hâlde sürece zorlanmaz.",
    ],
    credentials: [
      "Bakü Devlet Üniversitesi — Psikoloji lisansı",
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Çocuk ve ergen alanında 5 yılı aşkın uygulama deneyimi",
    ],
    faqs: [
      {
        question: "Ergen çocuğum gelmek istemiyor, ne yapabilirim?",
        answer:
          "Bu çok sık görülen bir durumdur. İlk adım olarak yalnızca ebeveyn görüşmesi yapılabilir; bu görüşmede ergene süreci nasıl anlatabileceğiniz ve hangi yaklaşımın direnci artırmayacağı planlanır. Zorlama genellikle ters etki yaptığı için tercih edilmez.",
      },
      {
        question: "Ergenimin anlattıklarını öğrenebilir miyim?",
        answer:
          "Seansların ayrıntılı içeriği paylaşılmaz; bu gizlilik ergenin sürece güvenmesi için gereklidir. Sürecin gidişatı, çalışılan hedefler ve sizin nasıl destek olabileceğiniz düzenli olarak paylaşılır. Güvenlik riski içeren durumlar bu gizliliğin dışındadır.",
      },
      {
        question: "Sınav kaygısı için de çalışıyor musunuz?",
        answer:
          "Evet. Sınav kaygısında hem kaygıyı sürdüren düşünce örüntüleri hem de çalışma düzeni, uyku ve dinlenme dengesi birlikte ele alınır. Ailenin beklenti dili de sürecin önemli bir parçasıdır.",
      },
      {
        question: "Kaç seans sürer?",
        answer:
          "Ergenle çalışmada süre, hedefin kapsamına ve ergenin katılımına göre değişir. Değerlendirme sonrasında tahmini bir çerçeve paylaşılır; bu çerçeve süreç içinde birlikte gözden geçirilir.",
      },
    ],
    relatedServices: ["cocuklarda-kaygi-terapisi", "aile-ve-ebeveyn-danismanligi", "psikolojik-degerlendirme"],
    relatedConcerns: ["okul-reddi", "akran-iliskileri", "dikkat-problemleri"],
    relatedArticles: ["ilk-gorusmede-ne-olur", "cocuk-ne-zaman-psikologa-goturulmeli"],
    references: [
      {
        label: "Dünya Sağlık Örgütü — Ergen ruh sağlığı",
        url: "https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "oyun-terapisi",
    image: "/images/play-therapy.jpg",
    imageAlt: "Oyun terapisi materyalleriyle çalışan çocuk",
    navLabel: "Oyun Terapisi",
    h1: "Başakşehir'de Oyun Terapisi",
    metaTitle: "Oyun Terapisi Başakşehir | Psikolog Rabia Bakıcı",
    metaDescription:
      "Oyun terapisi nedir, hangi yaşlara uygundur ve seanslar nasıl işler? Başakşehir'de oyun terapisi süreci, ebeveyn katılımı ve randevu bilgileri.",
    summary:
      "Çocuğun duygularını oyunun doğal dili aracılığıyla ifade ettiği, yapılandırılmış terapi yaklaşımı.",
    answer:
      "Oyun terapisi, çocuğun duygularını ve yaşadığı zorlanmayı oyun aracılığıyla ifade ettiği yapılandırılmış bir psikolojik destek yöntemidir. Oyun burada bir ödül ya da vakit geçirme aracı değil, çocuğun kendini anlatabildiği doğal dilidir.",
    suitableFor: [
      "Yaşadığını sözle anlatmakta zorlanan 3–10 yaş arası çocuklar",
      "Kaygı, korku ve endişeyle zorlanan çocuklar",
      "Öfke ve dürtü kontrolünde güçlük yaşayan çocuklar",
      "Boşanma, kayıp, taşınma veya kardeş doğumu gibi bir değişim yaşayan çocuklar",
      "Utangaçlık ve sosyal geri çekilme yaşayan çocuklar",
      "Uyku, tuvalet veya yeme alışkanlıklarında geriye dönüş görülen çocuklar",
    ],
    signs: [
      "Duygularını anlatmak yerine davranışla göstermesi",
      "Sık ve şiddetli öfke nöbetleri",
      "Belirgin geri çekilme ya da aşırı çekingenlik",
      "Tekrarlayan korkular ve gece uyanmaları",
      "Yaşına uygun olmayan bir alanda geriye dönüş (altını ıslatma, konuşma azalması)",
      "Oyunlarında tekrar eden kaygılı ya da saldırgan temalar",
    ],
    sections: [
      {
        heading: "Oyun terapisi nasıl işler?",
        paragraphs: [
          "Çocuğun soyut düşünme ve duygusunu sözelleştirme kapasitesi henüz gelişim aşamasındadır. \"Neden üzgünsün?\" sorusuna çoğu çocuk anlamlı bir yanıt veremez; ama aynı çocuk oyuncaklarla kurduğu sahnede kimin korktuğunu, kimin kızgın olduğunu ve neye ihtiyaç duyulduğunu açıkça gösterebilir.",
          "Oyun terapisinde çocuğa özel olarak seçilmiş materyaller sunulur: figürler, kum havuzu, sanat malzemeleri, kukla ve rol oyunu araçları. Çocuk ne oynayacağını büyük ölçüde kendisi seçer. Terapist bu oyunu yönlendirmek yerine izler, adlandırır ve çocuğun ifade ettiği duyguya karşılık verir.",
          "Zamanla oyunun temaları değişir. Başlangıçta tekrar eden kaygılı ya da çatışmalı sahneler, süreç ilerledikçe çözüm ve baş etme içeren sahnelere dönüşür. Bu değişim, çalışmanın en önemli göstergelerinden biridir.",
        ],
      },
      {
        heading: "Direktif ve direktif olmayan yaklaşım",
        paragraphs: [
          "Oyun terapisi tek bir yöntem değildir. Direktif olmayan yaklaşımda çocuk oyunun içeriğini tümüyle belirler; terapist güvenli sınırları korur ve çocuğun ifadesine eşlik eder. Bu yaklaşım özellikle kaygı, kayıp ve uyum güçlüklerinde tercih edilir.",
          "Direktif yaklaşımda ise belirli bir hedefe yönelik yapılandırılmış oyunlar kullanılır: duygu tanıma kartları, sıra bekleme oyunları, sosyal senaryolar. Bu yaklaşım öfke kontrolü ve sosyal beceri hedeflerinde işlevlidir.",
          "Uygulamada çoğu zaman iki yaklaşım birlikte kullanılır. Hangi ağırlıkta çalışılacağı, değerlendirme sonrasında çocuğun ihtiyacına göre belirlenir ve sizinle paylaşılır.",
        ],
      },
      {
        heading: "Ebeveynin süreçteki yeri",
        paragraphs: [
          "Oyun terapisinde ebeveyn seansların dışında kalır, ama sürecin dışında kalmaz. Belirli aralıklarla yapılan ebeveyn görüşmelerinde çocuğun oyunlarında öne çıkan temalar, gelişme gösteren alanlar ve evde denenebilecek yaklaşımlar konuşulur.",
          "Evde uygulanan basit ama tutarlı düzenlemeler, seanslarda kazanılanın kalıcı olmasını belirgin biçimde destekler. Bu nedenle ebeveyn görüşmelerine katılım, sürecin isteğe bağlı değil, ayrılmaz bir parçası olarak planlanır.",
        ],
      },
    ],
    process: [
      {
        title: "Ebeveyn görüşmesi",
        description: "Gelişim öyküsü, oyun alışkanlıkları ve mevcut endişeler ayrıntılı biçimde alınır.",
      },
      {
        title: "Gözlem seansları",
        description:
          "Çocuğun oyun kurma biçimi, tema seçimi ve duygu ifadesi ilk 2–3 seansta gözlenir.",
      },
      {
        title: "Hedef belirleme",
        description:
          "Gözlem sonuçları sizinle paylaşılır; hangi alanda çalışılacağı ve seans sıklığı birlikte belirlenir.",
      },
      {
        title: "Terapi seansları",
        description:
          "Haftada bir, 45 dakikalık seanslarla çocuğun kendi ritminde ilerleyen bir çalışma yürütülür.",
      },
      {
        title: "Ebeveyn görüşmeleri",
        description: "4–6 seansta bir yapılan görüşmelerle evdeki yaklaşımlar birlikte güncellenir.",
      },
      {
        title: "Kademeli sonlandırma",
        description:
          "Hedeflere ulaşıldığında seanslar aralıklandırılarak sonlandırılır; çocuk için ani bir kesinti oluşturulmaz.",
      },
    ],
    ageGroups:
      "Oyun terapisi çoğunlukla 3–10 yaş arası çocuklarda kullanılır. 10 yaş üstünde çocuğun ilgi ve gelişim düzeyine göre konuşma ağırlıklı yöntemlerle birleştirilir.",
    parentInvolvement:
      "Çocuk seansları ebeveyn olmadan yürütülür; buna karşılık düzenli ebeveyn görüşmeleri planlanır. Çok küçük yaş grubunda, çocuğun ayrılık kaygısı yüksekse ilk seanslarda ebeveynin odada bulunması kademeli olarak azaltılacak biçimde planlanabilir.",
    sessionFormat:
      "Haftada bir, 45 dakikalık yüz yüze seanslar. Materyaller çocuğun yaşına göre seçilir; seans odası her seansta benzer düzende tutulur, çünkü öngörülebilirlik çocuğun güven duygusunu destekler.",
    notPromised: [
      "Belirli sayıda seansta belirli bir sonuç garanti edilmez.",
      "Oyun terapisi tıbbi bir tedavi değildir ve tıbbi teşhis yerine geçmez.",
      "Gelişimsel tanılar (otizm spektrumu, dikkat eksikliği gibi) oyun terapisiyle konulmaz.",
      "Çocuğun kişilik özelliklerini değiştirmek amaçlanmaz.",
      "Ebeveyn katılımı olmadan aynı düzeyde ilerleme beklenmez.",
    ],
    credentials: [
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Oyun terapisi alanında uygulama eğitimi ve 5 yılı aşkın saha deneyimi",
      "Çocuklarda davranış problemleri alanında yoğunlaşma",
    ],
    faqs: [
      {
        question: "Oyun terapisi kaç yaş için uygundur?",
        answer:
          "Yaygın uygulama aralığı 3–10 yaştır. Bu aralık, çocuğun sembolik oyun kurabildiği ama duygularını sözle ayrıntılı anlatmakta henüz zorlandığı döneme karşılık gelir. 10 yaş üstünde oyun materyalleri konuşma ağırlıklı yöntemlerle birlikte kullanılır.",
      },
      {
        question: "Oyun terapisi sadece oyun oynamak mı?",
        answer:
          "Hayır. Kullanılan materyaller, terapistin müdahale biçimi ve seansın çerçevesi belirli bir hedefe göre planlanır. Dışarıdan bakıldığında serbest oyun gibi görünse de terapist çocuğun tema seçimini, tekrarlarını ve duygu ifadesini takip ederek çalışmayı yönlendirir.",
      },
      {
        question: "Kaç seans sürer?",
        answer:
          "Süre, çocuğun zorlanma alanına ve ailenin sürece katılımına göre değişir. Değerlendirme sonrasında tahmini bir çerçeve paylaşılır; ilerleme belirli aralıklarla birlikte gözden geçirilir. Kesin bir seans sayısı baştan taahhüt edilmez.",
      },
      {
        question: "Seansta neler olduğunu bana anlatacak mısınız?",
        answer:
          "Ebeveyn görüşmelerinde çocuğun oyunlarında öne çıkan temaları, gelişme gösterdiği alanları ve evde işinize yarayacak yaklaşımları paylaşırız. Çocuğun güven duygusunu koruyabilmek için seansın tüm ayrıntısı aktarılmaz.",
      },
      {
        question: "Çocuğum oyuncakla oynamayı sevmiyor, yine uygun olur mu?",
        answer:
          "Oyun terapisi yalnızca oyuncak kullanımı değildir. Sanat malzemeleri, kum havuzu, hikâye kurma ve kukla gibi farklı ifade araçları vardır. Çocuğun hangi araçla daha rahat ifade edebildiği tanışma seanslarında birlikte keşfedilir.",
      },
    ],
    relatedServices: ["cocuk-psikologu", "davranis-problemleri", "cocuklarda-kaygi-terapisi"],
    relatedConcerns: ["ofke-nobetleri", "ayrilik-kaygisi", "kardes-kiskancligi"],
    relatedArticles: ["oyun-terapisi-nedir", "oyun-terapisi-kac-yas", "cocugu-terapiye-hazirlamak"],
    references: [
      {
        label: "Association for Play Therapy — Oyun terapisi tanımı",
        url: "https://www.a4pt.org/page/PTMakesADifference",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "psikolojik-degerlendirme",
    image: "/images/family-support.jpg",
    imageAlt: "Çocuğun oyun odasında yaratıcı materyallerle ilgilendiği an",
    navLabel: "Psikolojik Değerlendirme",
    h1: "Çocuklarda Psikolojik Değerlendirme",
    metaTitle: "Çocuklarda Psikolojik Değerlendirme | Başakşehir",
    metaDescription:
      "Çocuklarda psikolojik değerlendirme süreci: hangi alanlar incelenir, kaç görüşme sürer, geri bildirim nasıl verilir ve değerlendirmenin sınırları nelerdir?",
    summary:
      "Çocuğun duygusal, davranışsal ve gelişimsel ihtiyaçlarını yapılandırılmış görüşme ve ölçme araçlarıyla anlama süreci.",
    answer:
      "Psikolojik değerlendirme, çocuğun güçlü olduğu ve desteğe ihtiyaç duyduğu alanları yapılandırılmış görüşmeler, gözlem ve yaşa uygun ölçme araçlarıyla anlamaya yönelik bir süreçtir. Değerlendirme bir etiket koyma işlemi değil, doğru destek planını kurmak için gereken haritayı çıkarma çalışmasıdır.",
    suitableFor: [
      "Nedeni net olmayan davranış değişikliği yaşayan çocuklar",
      "Okuldan dikkat, uyum veya davranışa dair geri bildirim alan aileler",
      "Hekim tarafından psikolojik değerlendirme önerilen çocuklar",
      "Duygusal zorlanmanın kaynağı konusunda netlik arayan aileler",
      "Destek planının hangi alandan başlaması gerektiğini bilmek isteyen aileler",
    ],
    signs: [
      "Okul ile ev arasında belirgin davranış farkı",
      "Öğrenme veya dikkat konusunda tekrarlayan okul geri bildirimleri",
      "Uzun süren duygusal zorlanma ve nedeninin belirsiz kalması",
      "Yaşına göre beklenenden farklı gelişim seyri",
      "Birden fazla alanda (ev, okul, arkadaş) aynı anda görülen zorlanma",
    ],
    sections: [
      {
        heading: "Değerlendirmede hangi alanlara bakılır?",
        bullets: [
          "Duygusal işleyiş: kaygı düzeyi, duygu tanıma ve düzenleme kapasitesi",
          "Davranışsal örüntüler: dürtü kontrolü, kurallara uyum, öfke tepkileri",
          "Sosyal işleyiş: akran ilişkileri, iş birliği, çatışma çözme",
          "Aile bağlamı: ilişki örüntüleri, sınırlar, yaşam olayları",
          "Okul işleyişi: uyum, dikkat, akademik zorlanma alanları",
          "Gelişim öyküsü: doğum, erken dönem, dil ve motor gelişim basamakları",
        ],
      },
      {
        heading: "Süreç kaç aşamadan oluşur?",
        paragraphs: [
          "Değerlendirme tek bir görüşmede tamamlanmaz. İlk aşamada ebeveynlerle ayrıntılı bir klinik görüşme yapılır; gelişim öyküsü, aile yapısı ve mevcut zorlanma alanları alınır.",
          "İkinci aşamada çocukla görüşmeler yapılır. Çocuğun yaşına ve zorlanma alanına göre gözlem, oyun temelli değerlendirme, projektif teknikler ve yapılandırılmış ölçekler kullanılabilir. Bu görüşmelerin sayısı çocuğun dikkat süresine göre planlanır.",
          "Üçüncü aşamada, ailenin yazılı onayıyla okul öğretmeninden gözlem bilgisi alınabilir. Ev ve okul gözlemlerinin karşılaştırılması, zorlanmanın bağlama özgü mü yoksa yaygın mı olduğunu ayırt etmede belirleyicidir.",
          "Son aşamada tüm bulgular bir araya getirilir ve sizinle bir geri bildirim görüşmesi yapılır. Bu görüşmede bulgular anlaşılır bir dille aktarılır, önerilen destek planı sunulur ve sorularınız yanıtlanır.",
        ],
      },
      {
        heading: "Değerlendirmenin sınırları",
        paragraphs: [
          "Psikolojik değerlendirme tıbbi teşhis değildir. Dikkat eksikliği ve hiperaktivite bozukluğu, otizm spektrum bozukluğu veya öğrenme bozukluğu gibi tanılar tıbbi bir süreçtir ve çocuk-ergen psikiyatristi tarafından konulur. Değerlendirme, bu tanı sürecine katkı sunacak psikolojik bulguları ortaya koyar ve gerektiğinde hekime yönlendirme yapılır.",
          "Değerlendirme aynı zamanda bir fotoğraftır: çocuğun o dönemdeki işleyişini yansıtır. Gelişim devam ettiği için bulgular zaman içinde değişebilir. Bu nedenle geri bildirim görüşmesinde bulgular kesin ve değişmez bir tanım olarak değil, destek planı için bir başlangıç noktası olarak sunulur.",
        ],
      },
    ],
    process: [
      {
        title: "Ebeveyn klinik görüşmesi",
        description: "Gelişim öyküsü, aile bağlamı ve endişeler ayrıntılı biçimde alınır (genellikle 1–2 görüşme).",
      },
      {
        title: "Çocukla değerlendirme görüşmeleri",
        description:
          "Yaşa uygun gözlem, oyun temelli değerlendirme ve ölçme araçları kullanılır (genellikle 2–4 görüşme).",
      },
      {
        title: "Okul bilgisi (onaya bağlı)",
        description: "Ailenin yazılı onayıyla öğretmen gözlemi alınır; ev ve okul bulguları karşılaştırılır.",
      },
      {
        title: "Bulguların birleştirilmesi",
        description: "Tüm veriler bir araya getirilerek tutarlı bir işleyiş tablosu oluşturulur.",
      },
      {
        title: "Geri bildirim görüşmesi",
        description:
          "Bulgular anlaşılır bir dille aktarılır; önerilen destek planı ve gerekiyorsa yönlendirmeler paylaşılır.",
      },
      {
        title: "Yönlendirme ve planlama",
        description:
          "Gerekli durumlarda hekime, özel eğitime veya okul rehberliğine yönlendirme yapılır.",
      },
    ],
    ageGroups: "3–18 yaş aralığında, çocuğun yaşına uygun araçlar seçilerek uygulanır.",
    parentInvolvement:
      "Ebeveyn, değerlendirmenin en önemli bilgi kaynağıdır. Gelişim öyküsü, günlük rutinler ve gözlemleriniz olmadan bulgular eksik kalır. Süreç bir geri bildirim görüşmesiyle tamamlanır ve tüm bulgular sizinle paylaşılır.",
    sessionFormat:
      "Toplam 4–7 görüşmeden oluşur; her görüşme 45–60 dakikadır. Çocuğun dikkat süresine göre görüşmeler bölünebilir. Süreç genellikle 3–5 hafta içinde tamamlanır.",
    notPromised: [
      "Tıbbi teşhis konulmaz; DEHB, otizm ve öğrenme bozukluğu tanıları hekim yetkisindedir.",
      "Adli süreçlerde ya da velayet davalarında kullanılmak üzere rapor düzenlenmez.",
      "Zekâ düzeyine ilişkin resmî bir belge verilmez.",
      "Değerlendirme sonucunda mutlaka bir \"sorun\" bulunacağı varsayılmaz.",
      "Tek görüşmede kesin sonuç verilmez.",
    ],
    credentials: [
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Çocuk ve ergen değerlendirmesinde yapılandırılmış görüşme ve gözlem deneyimi",
      "Okul ve hekim iş birliği süreçlerinde 5 yılı aşkın uygulama",
    ],
    faqs: [
      {
        question: "Psikolojik değerlendirme ne kadar sürer?",
        answer:
          "Toplamda 4–7 görüşme ve genellikle 3–5 hafta sürer. Süre, çocuğun yaşına, dikkat süresine ve incelenmesi gereken alan sayısına göre değişir. Tek bir görüşmede güvenilir bir değerlendirme yapılamaz.",
      },
      {
        question: "Sonucunda rapor veriliyor mu?",
        answer:
          "Süreç, bulguların ayrıntılı biçimde aktarıldığı bir geri bildirim görüşmesiyle tamamlanır. Talebiniz hâlinde okul veya hekimle paylaşmanız için bulguları özetleyen bir yazılı bilgilendirme hazırlanabilir. Adli süreçlerde kullanılmak üzere rapor düzenlenmez.",
      },
      {
        question: "Değerlendirme çocuğumu etiketler mi?",
        answer:
          "Amaç etiketlemek değil, çocuğun neye ihtiyaç duyduğunu anlamaktır. Geri bildirim görüşmesinde bulgular çocuğun güçlü yanlarıyla birlikte sunulur ve doğrudan uygulanabilir öneriler paylaşılır.",
      },
      {
        question: "DEHB tanısı koyabilir misiniz?",
        answer:
          "Hayır. DEHB tıbbi bir tanıdır ve çocuk-ergen psikiyatristi tarafından konulur. Değerlendirme, dikkat ve dürtü kontrolüne dair psikolojik bulguları ortaya koyar; gerekli görüldüğünde hekime yönlendirme yapılır ve bulgular sizinle paylaşılır.",
      },
      {
        question: "Okulla iletişime geçiyor musunuz?",
        answer:
          "Yalnızca sizin yazılı onayınızla. Öğretmen gözlemi, çocuğun evdeki ve okuldaki işleyişini karşılaştırmak açısından değerlidir; ancak bu iletişim hiçbir zaman onayınız olmadan kurulmaz.",
      },
    ],
    relatedServices: ["cocuk-psikologu", "davranis-problemleri", "ergen-psikologu"],
    relatedConcerns: ["dikkat-problemleri", "okul-reddi", "akran-iliskileri"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "psikolog-psikiyatrist-pedagog-farki"],
    references: [
      {
        label: "American Psychological Association — Psikolojik değerlendirme",
        url: "https://www.apa.org/topics/testing-assessment-measurement",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "cocuklarda-kaygi-terapisi",
    image: "/images/child-development.jpg",
    imageAlt: "Çocuğun renkli bir etkinlikle kendini ifade ettiği an",
    navLabel: "Kaygı Desteği",
    h1: "Çocuklarda Kaygı Terapisi",
    metaTitle: "Çocuklarda Kaygı Terapisi | Başakşehir Psikolog",
    metaDescription:
      "Çocuklarda kaygı belirtileri, ayrılık kaygısı ve okul kaygısında terapi süreci. Ebeveynin rolü, seans düzeni ve Başakşehir randevu bilgileri.",
    summary:
      "Yoğun endişe, korkular, ayrılık kaygısı ve bedensel kaygı belirtilerinde çocuk ve ebeveynle birlikte yürütülen destek.",
    answer:
      "Kaygı çocuklukta beklenen bir duygudur; sorun olan, kaygının çocuğun günlük yaşamını kısıtlamaya başlamasıdır. Terapide amaç kaygıyı tümüyle ortadan kaldırmak değil, çocuğun kaygıyı fark edip onunla baş edebileceği beceriler kazanmasıdır.",
    suitableFor: [
      "Ayrılık anlarında yoğun ve uzun süren tepkiler gösteren çocuklar",
      "Okula gitmek konusunda direnç geliştiren çocuklar",
      "Yeni ortamlarda konuşmaktan veya katılmaktan kaçınan çocuklar",
      "Tekrarlayan korkular, gece uyanmaları ve karanlık korkusu yaşayan çocuklar",
      "Tıbbi nedeni bulunamayan karın ağrısı ve baş ağrısı yaşayan çocuklar",
      "Sürekli onay arayan, hata yapmaktan aşırı çekinen çocuklar",
    ],
    signs: [
      "Sürekli \"ya olursa\" sorularıyla gelecek kaygısı",
      "Sabah okul öncesi ağlama, mide bulantısı, karın ağrısı",
      "Yalnız kalmayı reddetme, ebeveynden ayrılmakta güçlük",
      "Yeni durumlardan ve kalabalıktan kaçınma",
      "Uykuya geçmede zorlanma ve sık kâbuslar",
      "Mükemmeliyetçilik ve hata karşısında aşırı tepki",
      "Tırnak yeme, saç koparma gibi gerginlik davranışları",
    ],
    sections: [
      {
        heading: "Kaygı ne zaman destek gerektirir?",
        paragraphs: [
          "Belirli yaşlarda belirli korkular gelişimin normal parçasıdır: bebeklikte yabancı kaygısı, okul öncesinde karanlık ve hayali yaratık korkusu, okul çağında başarısızlık ve dışlanma kaygısı. Bu korkular genellikle zamanla azalır.",
          "Kaygının profesyonel destek gerektirdiğini düşündüren ölçüt şudur: kaygı çocuğun yapmak istediği ya da yapması gereken şeyleri engelliyor mu? Okula gidememek, doğum gününe katılamamak, arkadaşında kalamamak, yalnız uyuyamamak gibi kısıtlanmalar süreklilik kazandığında destek almak yerinde olur.",
          "İkinci ölçüt süredir. Bir yaşam olayının ardından ortaya çıkan kaygı birkaç hafta içinde azalıyorsa beklenen bir uyum tepkisi olabilir. Aylarca süren, giderek yaygınlaşan ve ailenin günlük düzenini yeniden şekillendirmeye başlayan kaygı ise ele alınmalıdır.",
        ],
      },
      {
        heading: "Terapide neler yapılır?",
        paragraphs: [
          "Çalışma önce kaygıyı görünür kılmakla başlar. Çocuğun yaşına uygun araçlarla kaygının bedende nerede hissedildiği, hangi durumlarda büyüdüğü ve hangi düşüncelerin onu beslediği birlikte haritalanır. Kaygıya bir isim vermek, çocuğun onu kendisinden ayırabilmesini sağlar.",
          "Ardından baş etme becerileri üzerinde çalışılır: nefes ve gevşeme teknikleri, kaygılı düşünceye alternatif üretme, kademeli olarak kaçınılan duruma yaklaşma. Kademeli yaklaşma, kaygı çalışmasının en belirleyici bileşenidir; çocuk kaçındığı durumu küçük ve yönetilebilir adımlarla deneyimledikçe kaygı doğal olarak azalır.",
          "Üçüncü bileşen ailedir. Kaygılı bir çocuğun ebeveyni, çocuğu üzmemek için farkında olmadan kaçınmayı destekleyebilir: soruyu onun yerine yanıtlamak, okula gitmemesine izin vermek, geceleri yanında yatmak. Bu davranışlar kısa vadede rahatlatır, uzun vadede kaygıyı büyütür. Ebeveyn görüşmelerinde bu döngü birlikte ele alınır.",
        ],
      },
      {
        heading: "Ne zaman hekime yönlendirilir?",
        paragraphs: [
          "Bazı durumlarda psikolojik destek yeterli olmaz ve tıbbi değerlendirme gerekir. Kaygıyla birlikte belirgin kilo kaybı, uzun süreli uyku bozukluğu, panik nöbetleri, kendine zarar verme davranışı ya da işlevselliğin ciddi biçimde bozulması söz konusuysa çocuk-ergen psikiyatristine yönlendirme yapılır.",
          "Ayrıca tekrarlayan bedensel yakınmalarda önce pediatrik değerlendirme önerilir; tıbbi bir neden dışlandıktan sonra psikolojik çalışma daha net bir zeminde yürütülür.",
        ],
      },
    ],
    process: [
      {
        title: "Ebeveyn görüşmesi",
        description: "Kaygının başlangıcı, tetikleyicileri ve ailenin şu ana kadar denediği yaklaşımlar alınır.",
      },
      {
        title: "Kaygı haritası",
        description: "Çocukla birlikte kaygının hangi durumlarda büyüdüğü ve bedende nasıl hissedildiği belirlenir.",
      },
      {
        title: "Baş etme becerileri",
        description: "Nefes, gevşeme ve düşünceyle çalışma teknikleri yaşa uygun biçimde öğretilir.",
      },
      {
        title: "Kademeli yaklaşma",
        description: "Kaçınılan durumlara küçük ve planlı adımlarla yaklaşılır; her adım birlikte değerlendirilir.",
      },
      {
        title: "Ebeveyn danışmanlığı",
        description: "Kaçınmayı besleyen ev içi döngüler ele alınır; destekleyici tepkiler birlikte planlanır.",
      },
      {
        title: "Kazanımların pekiştirilmesi",
        description: "Seanslar aralıklandırılarak kazanılan becerilerin günlük yaşamda yerleşmesi desteklenir.",
      },
    ],
    ageGroups: "4–18 yaş aralığında, yaşa uygun yöntemlerle çalışılır.",
    parentInvolvement:
      "Kaygı çalışmasında ebeveyn katılımı sonucu en çok etkileyen unsurdur. Ev içindeki kaçınma döngüsünü kırmak, çocuğun kazandığı becerileri günlük yaşama taşıması için gereklidir. Bu nedenle ebeveyn görüşmeleri düzenli olarak planlanır.",
    sessionFormat:
      "Haftada bir, 45–50 dakikalık seanslar. Kademeli yaklaşma aşamasında ev ödevleri planlanır ve her seansta birlikte gözden geçirilir.",
    notPromised: [
      "Kaygının tümüyle ortadan kalkacağı vaat edilmez; hedef kaygıyla baş edebilmektir.",
      "Belirli bir seans sayısında sonuç garantisi verilmez.",
      "Tıbbi teşhis konulmaz, ilaç önerilmez.",
      "Bedensel yakınmalar için tıbbi değerlendirmenin yerine geçmez.",
      "Ebeveyn katılımı olmadan aynı düzeyde ilerleme beklenmez.",
    ],
    credentials: [
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Çocuk ve ergenlerde kaygı çalışmalarında 5 yılı aşkın deneyim",
      "Oyun terapisi uygulama eğitimi",
    ],
    faqs: [
      {
        question: "Çocuğumun kaygısı normal mi, terapiye ihtiyacı var mı?",
        answer:
          "Belirleyici ölçüt kaygının çocuğu kısıtlayıp kısıtlamadığıdır. Kaygı yüzünden okula gidemiyor, arkadaşında kalamıyor, yalnız uyuyamıyor ve bu durum haftalardır sürüyorsa destek almak yerinde olur. Bir ebeveyn görüşmesi, terapiye başlamadan önce durumu netleştirmek için yeterli olabilir.",
      },
      {
        question: "Kaygılı çocuğa \"korkacak bir şey yok\" demek işe yarar mı?",
        answer:
          "Genellikle yaramaz, çünkü çocuk kaygısının gerçek olduğunu hisseder ve anlaşılmadığını düşünür. Daha işlevli olan, duyguyu adlandırıp geçerli saymak ve ardından küçük bir adım önermektir: \"Şu an çok gergin olduğunu görüyorum. Birlikte kapıya kadar gidelim mi?\" gibi.",
      },
      {
        question: "Okul kaygısında okulla iş birliği yapılıyor mu?",
        answer:
          "Sizin onayınızla evet. Okul kaygısında öğretmen ve rehberlik servisiyle kurulan tutarlı bir plan, sürecin en etkili bileşenlerinden biridir. Bu iletişim yalnızca yazılı onayınızla kurulur.",
      },
      {
        question: "Kaygı ilaçla mı tedavi edilir?",
        answer:
          "İlaç kararı yalnızca hekime aittir ve psikolojik destek çoğu durumda ilk seçenektir. Belirtiler çocuğun işlevselliğini ciddi biçimde bozuyorsa çocuk-ergen psikiyatristine yönlendirme yapılır; süreç gerektiğinde hekimle eş güdümlü yürütülür.",
      },
    ],
    relatedServices: ["cocuk-psikologu", "oyun-terapisi", "ergen-psikologu"],
    relatedConcerns: ["ayrilik-kaygisi", "okul-reddi", "akran-iliskileri"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "oyun-terapisi-nedir"],
    references: [
      {
        label: "NHS — Çocuklarda kaygı",
        url: "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "davranis-problemleri",
    image: "/images/play-therapy.jpg",
    imageAlt: "Oyun materyalleriyle odaklanan çocuk",
    navLabel: "Davranış Problemleri",
    h1: "Çocuklarda Davranış Problemleri",
    metaTitle: "Çocuklarda Davranış Problemleri | Başakşehir",
    metaDescription:
      "Öfke nöbetleri, inatlaşma, kurallara uymama ve saldırgan davranışlarda psikolojik destek. Süreç, ebeveyn danışmanlığı ve randevu bilgileri.",
    summary:
      "Öfke nöbetleri, kurallara uymama, inatlaşma ve saldırgan davranışlarda çocuk ve ebeveynle birlikte yürütülen çalışma.",
    answer:
      "Davranış problemleri çoğu zaman çocuğun \"yapmak istemediği\" değil, o an \"yapamadığı\" bir şeyin göstergesidir. Çalışmanın hedefi davranışı bastırmak değil, altındaki ihtiyacı anlamak ve çocuğa o ihtiyacı daha işlevli biçimde karşılayacak beceriler kazandırmaktır.",
    suitableFor: [
      "Yaşına göre beklenenden sık ve şiddetli öfke nöbetleri yaşayan çocuklar",
      "Sınırlarla sürekli çatışan, kurallara uymakta zorlanan çocuklar",
      "Kardeşine ya da akranlarına fiziksel tepki veren çocuklar",
      "Okulda tekrarlayan davranış geri bildirimleri alan çocuklar",
      "Hayır yanıtını kabul etmekte belirgin güçlük yaşayan çocuklar",
      "Ev ve okulda tutarsız kural uygulamasından etkilenen aileler",
    ],
    signs: [
      "Uzun süren ve zor sakinleşen öfke nöbetleri",
      "Eşya kırma, vurma, ısırma gibi davranışlar",
      "Kural ve sınırlara sistematik direnç",
      "Okuldan tekrarlayan olumsuz davranış geri bildirimleri",
      "Kardeş ilişkilerinde sürekli çatışma",
      "Sorumluluk almaktan kaçınma ve suçu başkasına yükleme",
    ],
    sections: [
      {
        heading: "Davranışın altındaki ihtiyaç",
        paragraphs: [
          "Davranış bir iletişim biçimidir. Aynı davranış farklı çocuklarda çok farklı ihtiyaçlara işaret edebilir: dikkat çekme, bir şeyden kaçınma, duygu düzenleme kapasitesinin yetersiz kalması, tutarsız sınırlar karşısında test etme ya da yorgunluk ve uyku düzensizliği.",
          "Bu nedenle çalışma önce işlev analiziyle başlar: davranış hangi durumlarda ortaya çıkıyor, hemen öncesinde ne oluyor, sonrasında ne kazanılıyor. Bu üçlü aydınlatıldığında müdahale noktası netleşir. Aynı öfke nöbeti bir çocukta duygu düzenleme çalışmasını, diğerinde ev içi tutarlılığın yeniden kurulmasını gerektirebilir.",
          "Davranış problemlerinde en sık yapılan hata, yalnızca davranış anına odaklanmaktır. Kalıcı değişim, davranış öncesindeki koşulların düzenlenmesiyle sağlanır: öngörülebilir rutin, geçişlerin önceden haber verilmesi, net ve tutarlı sınırlar, olumlu davranışın fark edilmesi.",
        ],
      },
      {
        heading: "Ebeveyn danışmanlığının ağırlığı",
        paragraphs: [
          "Davranış problemlerinde ebeveyn danışmanlığı, çocuk seanslarından daha az değil çoğu zaman daha belirleyicidir. Çocuk haftada 45 dakika seansta, kalan zamanın tamamını ise ev ve okul ortamında geçirir.",
          "Ebeveyn görüşmelerinde şu alanlar üzerinde çalışılır: net ve uygulanabilir sınırlar kurmak, tutarlılık sağlamak, olumlu davranışı görünür kılmak, tırmandırmayan bir dil kullanmak, öfke anında müdahale değil sakinleşme sonrası konuşma tercih etmek, eşler arasındaki uygulama farklarını azaltmak.",
          "Bu çalışma bir ebeveynlik eleştirisi değildir. Çoğu ailede sorun iyi niyetin eksikliği değil, hangi yaklaşımın hangi ihtiyaca karşılık geldiğine dair bilgi eksikliğidir.",
        ],
      },
      {
        heading: "Okul iş birliği",
        paragraphs: [
          "Davranış hem evde hem okulda görülüyorsa iki ortam arasında tutarlılık kurmak sürecin en güçlü bileşenidir. Ailenin yazılı onayıyla öğretmen ve rehberlik servisiyle iletişim kurulabilir; ortak bir yaklaşım planı oluşturulur.",
          "Davranış yalnızca tek ortamda görülüyorsa bu bilgi de değerlidir: o ortama özgü bir tetikleyici ya da beklenti farkı olduğunu gösterir ve müdahalenin odağını daraltır.",
        ],
      },
    ],
    process: [
      {
        title: "Ebeveyn görüşmesi ve işlev analizi",
        description:
          "Davranışın hangi durumlarda ortaya çıktığı, öncesi ve sonrası ayrıntılı biçimde haritalanır.",
      },
      {
        title: "Çocukla tanışma ve gözlem",
        description: "Çocuğun duygu düzenleme kapasitesi ve dürtü kontrolü oyun ortamında gözlenir.",
      },
      {
        title: "Ortak plan",
        description: "Hangi davranıştan başlanacağı, hangi yaklaşımın uygulanacağı birlikte kararlaştırılır.",
      },
      {
        title: "Beceri çalışması",
        description:
          "Çocukla duygu tanıma, sakinleşme, sıra bekleme ve çatışma çözme üzerine yaşa uygun çalışma yapılır.",
      },
      {
        title: "Ebeveyn danışmanlığı",
        description: "Sınır koyma, tutarlılık ve tırmandırmayan iletişim üzerine düzenli görüşmeler yapılır.",
      },
      {
        title: "İzleme ve düzenleme",
        description: "Uygulanan plan belirli aralıklarla gözden geçirilir ve gerekiyorsa güncellenir.",
      },
    ],
    ageGroups: "3–14 yaş aralığında, çocuğun gelişim düzeyine uygun yöntemlerle çalışılır.",
    parentInvolvement:
      "Ebeveyn danışmanlığı bu hizmetin merkezindedir. Çocuk seanslarıyla eş zamanlı olarak, evdeki uygulamayı planlayan düzenli ebeveyn görüşmeleri yürütülür. Mümkün olduğunda iki ebeveynin de katılımı önerilir; uygulama farkı azaldıkça sonuç belirgin biçimde iyileşir.",
    sessionFormat:
      "Haftada bir, 45–50 dakikalık çocuk seansları ve 3–4 seansta bir ebeveyn görüşmesi. Bazı durumlarda süreç yalnızca ebeveyn danışmanlığı olarak da yürütülebilir.",
    notPromised: [
      "Davranışın belirli bir sürede tamamen ortadan kalkacağı garanti edilmez.",
      "Ceza temelli, hızlı sonuç iddia eden yöntemler kullanılmaz.",
      "Tıbbi teşhis konulmaz; DEHB ve davranım bozukluğu tanıları hekim yetkisindedir.",
      "Ebeveyn katılımı olmadan kalıcı değişim beklenmez.",
      "Okul için resmî davranış raporu düzenlenmez.",
    ],
    credentials: [
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Çocuklarda davranış problemleri alanında yoğunlaşma ve 5 yılı aşkın uygulama",
      "Oyun terapisi uygulama eğitimi",
    ],
    faqs: [
      {
        question: "Öfke nöbeti sırasında ne yapmalıyım?",
        answer:
          "Nöbet anında öğretme, tartışma ve uzun açıklama işe yaramaz; çünkü çocuk o anda mantık yürütme kapasitesini geçici olarak kaybetmiştir. Önce güvenliği sağlayıp sakin ve az sözle eşlik etmek, ardından çocuk sakinleştikten sonra ne olduğunu birlikte konuşmak daha işlevlidir.",
      },
      {
        question: "Ceza vermek gerekiyor mu?",
        answer:
          "Ceza kısa vadede davranışı durdurabilir ama yerine ne yapılacağını öğretmez ve tekrar etme olasılığını azaltmaz. Bunun yerine net sınırlar, öngörülebilir sonuçlar ve olumlu davranışın fark edilmesi üzerine kurulu bir yaklaşım tercih edilir.",
      },
      {
        question: "Eşim ve ben farklı davranıyoruz, sorun bu mu?",
        answer:
          "Uygulama farkı davranış problemlerini sürdüren en yaygın etkenlerden biridir, çünkü çocuk için sınırın nerede olduğu belirsiz hâle gelir. Ebeveyn görüşmelerinde ortak ve uygulanabilir bir çerçeve kurmak öncelikli hedeflerden biridir.",
      },
      {
        question: "Sadece ebeveyn danışmanlığı yeterli olur mu?",
        answer:
          "Özellikle küçük yaş grubunda ve davranışın ev içi tutarlılıkla ilişkili olduğu durumlarda evet, süreç yalnızca ebeveyn danışmanlığı olarak yürütülebilir. Bu karar değerlendirme sonrasında sizinle birlikte verilir.",
      },
    ],
    relatedServices: ["oyun-terapisi", "aile-ve-ebeveyn-danismanligi", "psikolojik-degerlendirme"],
    relatedConcerns: ["ofke-nobetleri", "kardes-kiskancligi", "dikkat-problemleri"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "oyun-terapisi-nedir"],
    references: [
      {
        label: "CDC — Çocuklarda davranış sorunları",
        url: "https://www.cdc.gov/children-mental-health/about/about-disruptive-behavior-disorders.html",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "aile-ve-ebeveyn-danismanligi",
    image: "/images/family-support.jpg",
    imageAlt: "Çocuğun güvenli bir ortamda oyun oynadığı an",
    navLabel: "Aile ve Ebeveyn Danışmanlığı",
    h1: "Aile ve Ebeveyn Danışmanlığı",
    metaTitle: "Aile ve Ebeveyn Danışmanlığı | Başakşehir",
    metaDescription:
      "Başakşehir'de ebeveyn danışmanlığı: sınır koyma, tutarlılık, kardeş ilişkileri ve aile içi iletişim. Süreç, seans düzeni ve randevu bilgileri.",
    summary:
      "Ebeveynlik yaklaşımını, aile içi iletişimi ve sınırları birlikte gözden geçirdiğimiz yapılandırılmış danışmanlık.",
    answer:
      "Ebeveyn danışmanlığı, çocuk sürece dâhil olmadan yalnızca ebeveynlerle yürütülen bir çalışmadır. Amaç ebeveynin eksiğini bulmak değil, ailenin kendi değerlerine uygun, tutarlı ve uygulanabilir bir yaklaşım kurmasını desteklemektir.",
    suitableFor: [
      "Çocuğuyla iletişimde tıkandığını düşünen ebeveynler",
      "Sınır koymakta ya da tutarlılık sağlamakta zorlanan aileler",
      "Eşler arasında ebeveynlik yaklaşımı farkı yaşayan aileler",
      "Kardeş çatışmalarını yönetmekte zorlanan aileler",
      "Boşanma, ayrılık veya yeni bir aile düzenine geçiş sürecindeki ebeveynler",
      "Çocuğu henüz terapiye başlamadan önce yön almak isteyen aileler",
    ],
    signs: [
      "Her gün aynı konu üzerinde tekrarlayan tartışmalar",
      "Kuralların uygulanmasında eşler arası belirgin fark",
      "Çocukla iletişimde sürekli yükselen ses tonu",
      "Ebeveynlik konusunda yoğun suçluluk ve tükenme hissi",
      "Kardeşler arasında sürekli rekabet ve çatışma",
      "Ailedeki bir değişimin ardından bozulan günlük düzen",
    ],
    sections: [
      {
        heading: "Ebeveyn danışmanlığı nasıl işler?",
        paragraphs: [
          "İlk görüşmede ailenin yapısı, günlük rutin, çocuğun gelişim öyküsü ve şu anda en çok zorlandığınız durumlar ayrıntılı biçimde konuşulur. Ardından somut ve önceliklendirilmiş bir gündem oluşturulur; her şeyi aynı anda değiştirmeye çalışmak yerine en çok yükü hafifletecek alandan başlanır.",
          "Görüşmeler yalnızca konuşmadan oluşmaz. Her görüşmede evde denenecek somut bir düzenleme belirlenir ve sonraki görüşmede nasıl işlediği birlikte değerlendirilir. Uygulama sırasında ortaya çıkan zorluklar, sürecin başarısızlığı değil ince ayar için gereken bilgi olarak ele alınır.",
          "Danışmanlık çocuğun kendisi sürece katılmadan da anlamlı sonuç üretebilir. Ebeveynin tepki biçimi değiştiğinde çocuğun davranışının da değiştiği durumlar oldukça yaygındır; özellikle küçük yaş grubunda ilk seçenek olarak bu yol önerilir.",
        ],
      },
      {
        heading: "Hangi konularda çalışılır?",
        bullets: [
          "Net, yaşa uygun ve uygulanabilir sınırlar kurmak",
          "Eşler arasında ortak bir ebeveynlik çerçevesi oluşturmak",
          "Öfke ve çatışma anlarında tırmandırmayan iletişim",
          "Kardeş ilişkilerini ve rekabeti yönetmek",
          "Ekran süresi, uyku ve rutin düzenlemeleri",
          "Boşanma ve ayrılık süreçlerinde çocuğu koruyan iletişim",
          "Ebeveyn tükenmişliği ve suçluluk duygusuyla çalışmak",
          "Okulla iş birliği kurmak",
        ],
      },
      {
        heading: "Aile danışmanlığından farkı",
        paragraphs: [
          "Ebeveyn danışmanlığında görüşmelere yalnızca ebeveynler katılır ve gündem çocuğa yönelik ebeveynlik yaklaşımıdır. Bu çerçeve, ailenin tümünü kapsayan sistemik aile terapisinden ya da eşler arası ilişkiye odaklanan çift terapisinden farklıdır.",
          "İhtiyacınızın hangi çerçeveye uygun olduğu ilk görüşmede netleştirilir. Eşler arası ilişki sorunları ön plandaysa ya da farklı bir uzmanlık gerekiyorsa şeffaf biçimde yönlendirme yapılır.",
        ],
      },
    ],
    process: [
      {
        title: "İlk görüşme",
        description: "Aile yapısı, rutinler ve en çok zorlandığınız alanlar ayrıntılı biçimde alınır.",
      },
      {
        title: "Gündem belirleme",
        description: "Öncelik sırası oluşturulur; en çok yükü hafifletecek alandan başlanır.",
      },
      {
        title: "Uygulanabilir düzenlemeler",
        description: "Her görüşmede evde denenecek somut bir adım belirlenir.",
      },
      {
        title: "Değerlendirme ve ince ayar",
        description: "Uygulamanın nasıl işlediği birlikte gözden geçirilir ve yaklaşım güncellenir.",
      },
      {
        title: "Tutarlılığın yerleşmesi",
        description: "Görüşmeler aralıklandırılarak yeni yaklaşımın kalıcı hâle gelmesi desteklenir.",
      },
    ],
    ageGroups:
      "Her yaş grubundan çocuğu olan ebeveynler için uygundur; gündem çocuğun yaşına göre şekillendirilir.",
    parentInvolvement:
      "Bu hizmette birincil katılımcı ebeveyndir. Mümkün olduğunda iki ebeveynin de görüşmelere katılması önerilir; ortak çerçeve kurulduğunda sonuç belirgin biçimde iyileşir. Ayrı yaşayan ebeveynlerde görüşmeler ayrı da planlanabilir.",
    sessionFormat:
      "Genellikle iki haftada bir, 50 dakikalık görüşmeler. Yoğun bir dönemde haftalık, tutarlılık yerleştikten sonra aylık olarak planlanabilir.",
    notPromised: [
      "Çocuğun davranışında belirli bir sürede değişim garantisi verilmez.",
      "Çift terapisi ya da aile terapisi yerine geçmez.",
      "Boşanma veya velayet süreçleri için görüş ya da rapor düzenlenmez.",
      "Ebeveynlik konusunda tek doğru bir model önerilmez; aile kendi değerlerine uygun çerçeveyi kurar.",
      "Tıbbi teşhis konulmaz.",
    ],
    credentials: [
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Ebeveyn danışmanlığı ve aile görüşmelerinde 5 yılı aşkın deneyim",
      "Çocuk ve ergen alanında uygulama yoğunlaşması",
    ],
    faqs: [
      {
        question: "Çocuğumu getirmem gerekiyor mu?",
        answer:
          "Hayır. Ebeveyn danışmanlığı yalnızca ebeveynlerle yürütülür. Değerlendirme sonrasında çocuğun da bir çalışmaya ihtiyacı olduğu düşünülürse bu ayrıca konuşulur ve kararı siz verirsiniz.",
      },
      {
        question: "Eşim katılmak istemiyor, tek başıma gelsem faydası olur mu?",
        answer:
          "Olur. İki ebeveynin katılımı ideal olsa da tek ebeveynle yürütülen çalışma da anlamlı sonuç üretir. Bu durumda evde uygulama farkını azaltacak stratejiler de gündemin bir parçası hâline gelir.",
      },
      {
        question: "Kaç görüşme sürer?",
        answer:
          "Gündemin kapsamına göre değişir. Tek bir konuda yön almak için 3–5 görüşme yeterli olabilirken, kapsamlı bir düzen değişikliği daha uzun sürebilir. İlk görüşmeden sonra tahmini bir çerçeve paylaşılır.",
      },
      {
        question: "Görüşmelerde anlattıklarım gizli kalıyor mu?",
        answer:
          "Evet. Görüşme içeriği mesleki gizlilik kapsamındadır ve onayınız olmadan hiç kimseyle paylaşılmaz. Tek istisna, bir çocuğun ya da kişinin güvenliğini tehdit eden durumların bildirilmesine ilişkin yasal yükümlülüklerdir.",
      },
    ],
    relatedServices: ["davranis-problemleri", "cocuk-psikologu", "ergen-psikologu"],
    relatedConcerns: ["kardes-kiskancligi", "ofke-nobetleri", "okul-reddi"],
    relatedArticles: ["ilk-gorusmede-ne-olur", "cocugu-terapiye-hazirlamak"],
    references: [
      {
        label: "UNICEF — Ebeveynlik desteği",
        url: "https://www.unicef.org/parenting/",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "sosyal-beceri-destegi",
    image: "/images/creative-play.jpg",
    imageAlt: "Çocuğun açık havada neşeli bir etkinlik yaptığı an",
    navLabel: "Sosyal Beceri Desteği",
    h1: "Çocuklarda Sosyal Beceri Desteği",
    metaTitle: "Çocuklarda Sosyal Beceri Desteği | Başakşehir",
    metaDescription:
      "Arkadaşlık kurma, paylaşma, sıra bekleme ve çatışma çözme becerilerinde çocuklara yönelik yapılandırılmış destek çalışması.",
    summary:
      "Arkadaşlık kurma, paylaşma, sıra bekleme ve çatışma çözme becerilerinde yapılandırılmış destek.",
    answer:
      "Sosyal beceriler doğuştan gelmez; öğrenilir ve tekrarla yerleşir. Sosyal beceri desteği, çocuğun akran ilişkilerinde zorlandığı somut adımları belirleyip bunları güvenli bir ortamda adım adım çalıştığı yapılandırılmış bir programdır.",
    suitableFor: [
      "Arkadaşlık kurmakta ve sürdürmekte zorlanan çocuklar",
      "Oyuna katılmak isteyip nasıl başlayacağını bilemeyen çocuklar",
      "Paylaşma, sıra bekleme ve kaybetmeyi kabul etmede güçlük yaşayan çocuklar",
      "Çekingenliği nedeniyle grup etkinliklerinden uzak duran çocuklar",
      "Akran çatışmalarını sözle çözmekte zorlanan çocuklar",
      "Yeni okula ya da yeni bir şehre uyum sağlayan çocuklar",
    ],
    signs: [
      "Teneffüslerde çoğunlukla yalnız kalması",
      "Oyuna katılma girişimlerinin sık sık reddedilmesi",
      "Kaybettiğinde oyunu terk etmesi ya da öfkelenmesi",
      "Sırasını beklemekte belirgin zorluk",
      "Arkadaş davetlerinden kaçınması",
      "\"Beni kimse sevmiyor\", \"arkadaşım yok\" gibi ifadeler",
    ],
    sections: [
      {
        heading: "Sosyal beceri neyi kapsar?",
        paragraphs: [
          "Sosyal beceri tek bir yetenek değil, birbirini destekleyen birçok küçük adımın toplamıdır: göz teması kurmak, bir oyuna nasıl katılacağını bilmek, karşıdakinin ifadesinden duygusunu okumak, sırasını beklemek, hayır yanıtını kabul etmek, anlaşmazlıkta sözle çözüm aramak.",
          "Çocuk bu adımlardan hangisinde zorlandığı belirlenmeden yapılan genel öneriler (\"arkadaş edinmeye çalış\", \"paylaşmayı öğren\") işe yaramaz. Bu nedenle çalışma önce hangi basamağın eksik kaldığını tespit etmekle başlar.",
          "Ardından bu basamak güvenli bir ortamda çalışılır: rol oyunu, sosyal senaryolar, duygu tanıma çalışmaları ve yapılandırılmış oyunlar kullanılır. Kazanılan beceri, aile ve okul iş birliğiyle gerçek ortamda denenerek pekiştirilir.",
        ],
      },
      {
        heading: "Çekingenlik mi, sosyal kaygı mı?",
        paragraphs: [
          "Her sessiz çocuk sosyal beceri desteğine ihtiyaç duymaz. Bazı çocuklar mizaç olarak daha içe dönüktür ve az sayıda ama doyurucu arkadaşlıkla mutludur; bu durum bir sorun değildir.",
          "Ayırt edici soru şudur: çocuk sosyal ilişki kurmak istiyor ama nasıl yapacağını bilmediği için mi geride kalıyor, yoksa kaygı nedeniyle mi kaçınıyor? Birinci durumda beceri çalışması, ikinci durumda öncelikle kaygı çalışması gerekir. Değerlendirme bu ayrımı netleştirir ve gerektiğinde iki çalışma birleştirilir.",
        ],
      },
      {
        heading: "Okul ve ailenin rolü",
        paragraphs: [
          "Sosyal beceri, yalnızca seans odasında kalırsa yerleşmez. Bu nedenle her beceri için gerçek ortamda uygulanabilecek küçük bir hedef belirlenir: teneffüste bir çocuğa oyun teklif etmek, bir kez sırasını beklemek gibi.",
          "Ailenin yazılı onayıyla öğretmenle kurulan iş birliği bu aşamada çok değerlidir; öğretmenin sınıf içinde küçük fırsatlar yaratması, kazanımın hızını belirgin biçimde artırır. Ayrıca zorbalık söz konusuysa bu durum ayrıca ele alınır ve okulun müdahalesi gerektiği açıkça belirtilir.",
        ],
      },
    ],
    process: [
      {
        title: "Ebeveyn görüşmesi",
        description: "Sosyal öykü, okul geri bildirimleri ve zorlanma alanları ayrıntılı biçimde alınır.",
      },
      {
        title: "Beceri haritası",
        description: "Hangi sosyal basamakta zorlandığı gözlem ve etkinliklerle belirlenir.",
      },
      {
        title: "Yapılandırılmış çalışma",
        description: "Rol oyunu, sosyal senaryolar ve duygu tanıma çalışmalarıyla beceri adım adım öğretilir.",
      },
      {
        title: "Gerçek ortamda deneme",
        description: "Her beceri için okulda ya da çevrede uygulanabilir küçük bir hedef belirlenir.",
      },
      {
        title: "Aile ve okul iş birliği",
        description: "Onayınızla öğretmenle iletişim kurulur; kazanımı destekleyecek fırsatlar planlanır.",
      },
      {
        title: "Pekiştirme",
        description: "Kazanılan beceriler tekrar ve genişleyen ortamlarla kalıcı hâle getirilir.",
      },
    ],
    ageGroups: "4–14 yaş aralığında, çocuğun gelişim düzeyine uygun içerikle çalışılır.",
    parentInvolvement:
      "Ebeveyn, becerinin gerçek ortama taşınmasında kilit rol oynar. Görüşmelerde evde ve sosyal ortamlarda yaratılabilecek uygulama fırsatları birlikte planlanır.",
    sessionFormat:
      "Haftada bir, 45 dakikalık bireysel seanslar. Uygun durumlarda küçük grup çalışması da planlanabilir; grup, becerinin akranla denenmesi için doğal bir ortam sağlar.",
    notPromised: [
      "Çocuğun popüler olacağı ya da çok sayıda arkadaş edineceği vaat edilmez.",
      "Mizaç değiştirilmez; içe dönük olmak bir sorun olarak ele alınmaz.",
      "Zorbalık durumunda okulun sorumluluğu yerine geçmez.",
      "Otizm spektrum bozukluğu gibi tanılar konulmaz; gerektiğinde hekime yönlendirilir.",
      "Belirli bir seans sayısında sonuç garantisi verilmez.",
    ],
    credentials: [
      "İstanbul Esenyurt Üniversitesi — Klinik Psikoloji yüksek lisansı",
      "Çocuklarda sosyal beceri ve akran ilişkileri çalışmalarında uygulama deneyimi",
      "Oyun terapisi uygulama eğitimi",
    ],
    faqs: [
      {
        question: "Çocuğum utangaç, bu bir sorun mu?",
        answer:
          "Utangaçlık tek başına bir sorun değildir. Belirleyici olan, çocuğun istediği hâlde sosyal ilişki kuramaması ve bu durumdan rahatsız olmasıdır. Az sayıda arkadaşla mutlu olan bir çocuk için müdahale gerekmez.",
      },
      {
        question: "Grup çalışması mı bireysel çalışma mı daha iyi?",
        answer:
          "İkisinin farklı işlevi vardır. Bireysel çalışma beceriyi güvenli ortamda öğretmek için, grup çalışması ise beceriyi akranla denemek için uygundur. Çoğu süreçte önce bireysel çalışılır, hazır olunduğunda grup ortamı devreye girer.",
      },
      {
        question: "Okulda zorbalığa maruz kalıyorsa ne yapılır?",
        answer:
          "Zorbalık bir sosyal beceri eksikliği olarak ele alınamaz; okulun müdahale sorumluluğu vardır. Bu durumda çocukla baş etme ve kendini koruma üzerine çalışılırken, aynı zamanda aileye okul ve rehberlik servisiyle nasıl ilerleyeceği konusunda destek verilir.",
      },
      {
        question: "Kaç seans sürer?",
        answer:
          "Hangi becerilerin çalışılacağına ve çocuğun uygulama fırsatlarına göre değişir. Değerlendirme sonrasında tahmini bir çerçeve paylaşılır ve ilerleme düzenli olarak birlikte gözden geçirilir.",
      },
    ],
    relatedServices: ["cocuk-psikologu", "oyun-terapisi", "cocuklarda-kaygi-terapisi"],
    relatedConcerns: ["akran-iliskileri", "kardes-kiskancligi", "okul-reddi"],
    relatedArticles: ["oyun-terapisi-nedir", "cocuk-ne-zaman-psikologa-goturulmeli"],
    references: [
      {
        label: "CASEL — Sosyal ve duygusal öğrenme çerçevesi",
        url: "https://casel.org/fundamentals-of-sel/",
      },
    ],
    reviewed: LAST_REVIEWED,
  },
];

export const SERVICE_SLUGS = SERVICES.map((service) => service.slug);

export function getService(slug: string): ServicePage | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
