import { LAST_REVIEWED } from "@/lib/site";
import type { ArticlePage } from "./types";

/**
 * Bilgilendirici makaleler. Araştırma aşamasındaki ebeveynin sorularını
 * yanıtlar ve her makale bir hizmet sayfasına yönlendirir (PRD §8.5, §9.6).
 *
 * Yayın takvimi: ilk 90 gün için ayda 2–4 içerik. Sıradaki başlıklar
 * docs/seo-operations.md içindeki içerik kuyruğunda tutulur.
 */
export const ARTICLES: ArticlePage[] = [
  {
    slug: "oyun-terapisi-nedir",
    title: "Oyun Terapisi Nedir?",
    h1: "Oyun Terapisi Nedir ve Nasıl İşler?",
    metaTitle: "Oyun Terapisi Nedir? Nasıl İşler? | Rabia Bakıcı",
    metaDescription:
      "Oyun terapisi nedir, hangi durumlarda kullanılır ve seanslarda neler olur? Bir çocuk psikoloğunun anlatımıyla oyun terapisinin işleyişi.",
    excerpt:
      "Oyun terapisinin ne olduğu, hangi durumlarda kullanıldığı ve bir seansın nasıl ilerlediği.",
    answer:
      "Oyun terapisi, çocuğun duygularını ve yaşadığı zorlanmayı oyun aracılığıyla ifade ettiği yapılandırılmış bir psikolojik destek yöntemidir. Oyun burada eğlence aracı değil, çocuğun kendini anlatabildiği doğal dilidir.",
    published: "2026-08-03",
    reviewed: LAST_REVIEWED,
    readingMinutes: 7,
    sections: [
      {
        heading: "Neden konuşma değil oyun?",
        paragraphs: [
          "Yetişkin terapisi büyük ölçüde dile dayanır: kişi duygusunu adlandırır, deneyimini anlatır, bağlantılar kurar. Çocukta bu kapasite henüz gelişim aşamasındadır. Sekiz yaşındaki bir çocuğa \"kardeşin doğduğunda ne hissettin?\" diye sorduğunuzda alacağınız yanıt genellikle \"bilmiyorum\" olur — çünkü gerçekten bilmiyordur, en azından sözcüklerle.",
          "Aynı çocuk oyuncaklarla bir sahne kurduğunda ise çok şey anlatır: hangi figürün dışarıda kaldığını, kimin sürekli tehlikede olduğunu, kimin kurtarıcı olduğunu. Oyun, çocuğun iç dünyasını dışarı taşıdığı doğal bir mecradır.",
          "Oyun terapisi bu doğal mecrayı sistematik biçimde kullanır. Terapist oyunu izler, tekrar eden temaları not eder, çocuğun ifade ettiği duyguya karşılık verir ve zamanla çocuğun kendi çözümünü üretebileceği bir alan açar.",
        ],
      },
      {
        heading: "Bir seansta neler olur?",
        paragraphs: [
          "Seans odası her seferinde benzer düzende tutulur. Öngörülebilirlik çocuğun güven duygusunu destekler; bu nedenle materyallerin yeri, seansın süresi ve başlangıç-bitiş ritüelleri istikrarlı kalır.",
          "Çocuk odaya girdiğinde ne oynayacağını büyük ölçüde kendisi seçer. Kum havuzu, figürler, sanat malzemeleri, kuklalar ve rol oyunu araçları arasından tercih yapar. Terapist bu tercihi yönlendirmez ama gözlemler: hangi materyale gittiği, neyi tekrar ettiği, hangi temadan kaçındığı anlamlı bilgilerdir.",
          "Seans boyunca terapist çocuğun ifade ettiğini adlandırır ve karşılık verir. Bu, oyunu yorumlayıp çocuğa açıklamak anlamına gelmez; çocuğun deneyimine eşlik etmek ve duygusunun görüldüğünü hissettirmek anlamına gelir.",
        ],
      },
      {
        heading: "Direktif ve direktif olmayan yaklaşımlar",
        paragraphs: [
          "Direktif olmayan yaklaşımda oyunun içeriğini tümüyle çocuk belirler. Terapist güvenlik sınırlarını korur ve çocuğun ifadesine eşlik eder. Bu yaklaşım kaygı, kayıp, boşanma ve uyum güçlüklerinde sık tercih edilir; çünkü çocuğun kendi hızında ilerlemesine alan açar.",
          "Direktif yaklaşımda ise belirli bir hedefe yönelik yapılandırılmış oyunlar kullanılır: duygu tanıma kartları, sıra bekleme oyunları, sosyal senaryolar, öfke anında kullanılacak sakinleşme teknikleri. Bu yaklaşım öfke kontrolü ve sosyal beceri hedeflerinde işlevlidir.",
          "Uygulamada iki yaklaşım genellikle birlikte kullanılır. Hangi ağırlıkta çalışılacağı değerlendirme sonrasında belirlenir ve aileyle paylaşılır.",
        ],
      },
      {
        heading: "İlerleme nasıl anlaşılır?",
        paragraphs: [
          "Oyun terapisinde ilerlemenin en görünür göstergesi oyunun temalarındaki değişimdir. Başlangıçta tekrar eden çatışmalı ya da kaygılı sahneler, süreç ilerledikçe çözüm ve baş etme içeren sahnelere dönüşür. Sürekli düşen kule, ayakta kalmaya başlar.",
          "İkinci gösterge günlük yaşamdaki değişimdir: uyku düzeninin toparlanması, öfke nöbetlerinin süresinin kısalması, ayrılık anlarının kolaylaşması, akran ilişkilerinde artan girişim. Bu değişimler ebeveyn görüşmelerinde düzenli olarak takip edilir.",
          "İlerleme her zaman doğrusal değildir. Bir yaşam olayı ya da hastalık dönemi geçici geri adımlara yol açabilir. Bu durum sürecin işlemediği anlamına gelmez; birlikte gözden geçirilip plan güncellenir.",
        ],
      },
      {
        heading: "Ne değildir?",
        bullets: [
          "Oyun terapisi tıbbi bir tedavi değildir ve tıbbi teşhis yerine geçmez.",
          "Otizm spektrum bozukluğu ya da dikkat eksikliği gibi tanılar oyun terapisiyle konulmaz.",
          "Belirli sayıda seansta belirli bir sonuç garanti eden bir yöntem değildir.",
          "Çocuğun kişilik özelliklerini değiştirmeyi amaçlamaz.",
          "Ebeveyn katılımı olmadan aynı etkiyi göstermesi beklenmez.",
        ],
      },
    ],
    keyPoints: [
      "Oyun terapisi, çocuğun kendini ifade ettiği doğal dili olan oyunu sistematik biçimde kullanır.",
      "Yaygın uygulama aralığı 3–10 yaştır; üst yaşlarda konuşma ağırlıklı yöntemlerle birleştirilir.",
      "Direktif ve direktif olmayan yaklaşımlar çocuğun ihtiyacına göre birlikte kullanılır.",
      "İlerlemenin göstergesi oyun temalarındaki değişim ve günlük yaşamdaki somut iyileşmedir.",
      "Ebeveyn görüşmeleri sürecin ayrılmaz bir parçasıdır.",
    ],
    seekHelpSigns: [
      "Çocuğunuzun zorlanması haftalardır sürüyor ve azalmıyor",
      "Günlük yaşamı (okul, uyku, arkadaşlık) belirgin biçimde etkileniyor",
      "Öfke nöbetleri yaşına göre beklenenden sık ve şiddetli",
      "Kendine ya da başkasına zarar verme davranışı var",
      "Bir yaşam olayının ardından belirgin bir geriye dönüş görülüyor",
    ],
    references: [
      {
        label: "Association for Play Therapy — Oyun terapisi nedir?",
        url: "https://www.a4pt.org/page/PTMakesADifference",
      },
      {
        label: "Dünya Sağlık Örgütü — Çocuk ve genç ruh sağlığı",
        url: "https://www.who.int/news-room/fact-sheets/detail/mental-health-of-children-and-young-people",
      },
    ],
    primaryService: "oyun-terapisi",
    relatedConcerns: ["ofke-nobetleri", "ayrilik-kaygisi"],
    relatedArticles: ["oyun-terapisi-kac-yas", "cocugu-terapiye-hazirlamak"],
  },

  {
    slug: "oyun-terapisi-kac-yas",
    title: "Oyun Terapisi Kaç Yaş İçin Uygundur?",
    h1: "Oyun Terapisi Kaç Yaş İçin Uygundur?",
    metaTitle: "Oyun Terapisi Kaç Yaş İçin Uygundur? | Rabia Bakıcı",
    metaDescription:
      "Oyun terapisinin uygun yaş aralığı, her yaş grubunda nasıl uygulandığı ve büyük çocuklarda hangi yöntemlerle birleştirildiği.",
    excerpt:
      "Oyun terapisinin yaş aralığı ve her gelişim döneminde yaklaşımın nasıl değiştiği.",
    answer:
      "Oyun terapisi en yaygın olarak 3–10 yaş arasında uygulanır. Bu aralık, çocuğun sembolik oyun kurabildiği ama duygularını sözle ayrıntılı anlatmakta henüz zorlandığı döneme karşılık gelir. 10 yaş üstünde oyun materyalleri konuşma ağırlıklı yöntemlerle birlikte kullanılır.",
    published: "2026-08-03",
    reviewed: LAST_REVIEWED,
    readingMinutes: 5,
    sections: [
      {
        heading: "3–5 yaş: oyunun en saf hâli",
        paragraphs: [
          "Bu dönemde çocuk sembolik oyunu yeni keşfetmiştir: bir kutu araba, bir çubuk kaşık olabilir. Duyguları yoğun yaşar ama adlandırma kapasitesi çok sınırlıdır.",
          "Seanslar kısa tutulur (30–40 dakika) çünkü dikkat süresi henüz kısadır. Materyaller sade ve az sayıda olur; fazla seçenek bu yaşta dağıtıcıdır. Ayrılık kaygısı yüksek olan çocuklarda ilk seanslarda ebeveynin odada bulunması kademeli olarak azaltılacak biçimde planlanabilir.",
          "Bu yaş grubunda ebeveyn danışmanlığının ağırlığı özellikle yüksektir. Çoğu durumda evdeki rutin ve sınır düzenlemeleri, çocuk seanslarından daha hızlı sonuç üretir.",
        ],
      },
      {
        heading: "6–10 yaş: oyun terapisinin merkez aralığı",
        paragraphs: [
          "Bu dönem oyun terapisinin en verimli çalıştığı aralıktır. Çocuk karmaşık oyun kurabilir, kurallı oyunları anlar, hikâye üretebilir; buna karşılık duygusunu doğrudan konuşmak yerine oyunla anlatmayı hâlâ tercih eder.",
          "Kullanılan araç yelpazesi genişler: kum havuzu, minyatür figürler, kuklalar, sanat malzemeleri, hikâye kartları, kurallı masa oyunları. Kurallı oyunlar bu yaşta özellikle değerlidir çünkü kaybetmeye dayanma, sıra bekleme ve kurala uyma gibi becerileri doğal bir zeminde çalışma imkânı verir.",
          "Seanslar 45 dakikaya çıkar. Bu dönemde çocuk süreçle ilgili kendi görüşünü de ifade edebilir; hedeflerin bir kısmı doğrudan çocukla birlikte belirlenebilir.",
        ],
      },
      {
        heading: "10 yaş ve üstü: karma yaklaşım",
        paragraphs: [
          "10 yaşından sonra çoğu çocuk \"oyuncakla oynamak\" fikrini kendine uygun bulmayabilir. Bu nedenle klasik oyun materyalleri yerine yaşa uygun ifade araçları devreye girer: sanat çalışmaları, hikâye ve senaryo yazımı, kart temelli çalışmalar, kum tepsisi.",
          "Bu dönemde konuşma ağırlığı artar ama tümüyle söze dayanan bir çalışma da çoğu zaman yetersiz kalır. Somut bir materyal üzerinden çalışmak, ergenliğe yaklaşan çocuğun doğrudan konuşmakta zorlandığı konuları güvenli bir mesafeden ele almasını sağlar.",
          "12 yaş üstünde çalışma büyük ölçüde ergen psikolojisi çerçevesine geçer: gizlilik sınırları netleştirilir, hedefler ergenle birlikte belirlenir ve ailenin rolü danışmanlık biçimini alır.",
        ],
      },
      {
        heading: "Yaş tek ölçüt değildir",
        paragraphs: [
          "Uygunluğu belirleyen yalnızca takvim yaşı değildir. Dil gelişimi, dikkat süresi, sembolik oyun kapasitesi ve çocuğun ifade tercihi de belirleyicidir.",
          "Örneğin dil gelişiminde gecikme olan 11 yaşındaki bir çocukta oyun materyalleri hâlâ birincil araç olabilir. Buna karşılık sözel ifadesi güçlü 8 yaşındaki bir çocukta konuşma ağırlıklı bir çalışma daha erken devreye girebilir.",
          "Bu nedenle yöntem seçimi tanışma seanslarındaki gözlem sonucunda belirlenir ve aileyle paylaşılır. Karar sabit değildir; çocuğun tepkisine göre süreç içinde güncellenir.",
        ],
      },
    ],
    keyPoints: [
      "En yaygın uygulama aralığı 3–10 yaştır.",
      "3–5 yaşta seanslar kısadır ve ebeveyn danışmanlığının ağırlığı yüksektir.",
      "6–10 yaş, oyun terapisinin en verimli çalıştığı aralıktır.",
      "10 yaş üstünde sanat, hikâye ve kum tepsisi gibi araçlar konuşmayla birleştirilir.",
      "Takvim yaşı tek ölçüt değildir; dil gelişimi ve ifade tercihi de belirleyicidir.",
    ],
    seekHelpSigns: [
      "Çocuğunuzun zorlanması günlük yaşamını etkiliyor",
      "Hangi yöntemin uygun olduğundan emin değilsiniz",
      "Daha önce denenen bir yaklaşım sonuç vermedi",
      "Çocuğunuzun yaşı sınırda ve doğru çerçeveyi belirlemek istiyorsunuz",
    ],
    references: [
      {
        label: "Association for Play Therapy — Uygulama alanları",
        url: "https://www.a4pt.org/page/PTMakesADifference",
      },
    ],
    primaryService: "oyun-terapisi",
    relatedConcerns: ["ofke-nobetleri", "ayrilik-kaygisi"],
    relatedArticles: ["oyun-terapisi-nedir", "ilk-gorusmede-ne-olur"],
  },

  {
    slug: "ilk-gorusmede-ne-olur",
    title: "İlk Çocuk Psikoloğu Görüşmesinde Ne Olur?",
    h1: "İlk Çocuk Psikoloğu Görüşmesinde Ne Olur?",
    metaTitle: "İlk Psikolog Görüşmesinde Ne Olur? | Rabia Bakıcı",
    metaDescription:
      "İlk görüşmeye kim katılır, hangi sorular sorulur, ne kadar sürer ve sonrasında ne olur? Ebeveynler için adım adım açıklama.",
    excerpt:
      "İlk görüşmenin akışı, sorulan sorular, süresi ve sonraki adımlar.",
    answer:
      "İlk görüşme genellikle çocuk olmadan, yalnızca ebeveynlerle yapılır ve yaklaşık 50 dakika sürer. Bu görüşmede çocuğun gelişim öyküsü, aile ve okul bağlamı ile sizi endişelendiren durum ayrıntılı biçimde konuşulur. Görüşmenin sonunda önerilen sonraki adımlar sizinle paylaşılır.",
    published: "2026-08-03",
    reviewed: LAST_REVIEWED,
    readingMinutes: 6,
    sections: [
      {
        heading: "İlk görüşmeye kim katılır?",
        paragraphs: [
          "İlk görüşme çoğu zaman yalnızca ebeveynlerle yapılır. Bunun iki nedeni vardır. Birincisi, endişelerinizi çocuğun yanında konuşmak zorunda kalmadan ayrıntılı biçimde paylaşabilmenizdir. İkincisi, çocuğun ilk deneyiminin \"hakkında konuşulan kişi\" olmak yerine tanışma olmasıdır.",
          "Mümkün olduğunda iki ebeveynin de katılması önerilir. Aynı durumu iki farklı gözden dinlemek, hem daha eksiksiz bir tablo oluşturur hem de uygulama farklarını erken aşamada görünür kılar. Ayrı yaşayan ebeveynlerde görüşmeler ayrı da planlanabilir.",
          "Ergenlerde akış biraz farklıdır: ilk görüşme ebeveynlerle yapılsa da ergene sürecin nasıl anlatılacağı bu görüşmede birlikte planlanır, çünkü ergenin kendi rızasıyla katılması sonucun kalıcılığını belirler.",
        ],
      },
      {
        heading: "Hangi konular konuşulur?",
        bullets: [
          "Sizi şu anda en çok endişelendiren durum ve ne zamandır sürdüğü",
          "Çocuğun gelişim öyküsü: gebelik, doğum, erken dönem, dil ve motor gelişim",
          "Uyku, beslenme ve tuvalet alışkanlıkları",
          "Aile yapısı, evdeki günlük düzen ve kimlerin bakımda rol aldığı",
          "Okul durumu, öğretmen geri bildirimleri, akran ilişkileri",
          "Yakın dönemde yaşanan değişimler: taşınma, kayıp, boşanma, kardeş doğumu",
          "Şimdiye kadar denediğiniz yaklaşımlar ve nasıl sonuç verdiği",
          "Ailede benzer zorlanma öyküsü olup olmadığı",
          "Varsa tıbbi öykü ve kullanılan ilaçlar",
        ],
      },
      {
        heading: "Görüşmeye nasıl hazırlanabilirsiniz?",
        paragraphs: [
          "Hazırlık zorunlu değildir ama görüşmenin verimini artırır. Endişelendiğiniz davranışın son bir hafta içinde hangi günler ve hangi saatlerde ortaya çıktığını not almak, en değerli bilgilerden biridir; çünkü örüntü çoğu zaman bu notlardan çıkar.",
          "Varsa okul geri bildirimlerini, öğretmen notlarını ve önceki değerlendirme ya da hekim raporlarını yanınızda getirmeniz yararlı olur. Ayrıca sormak istediğiniz soruları önceden yazmak, görüşme sonunda unutmanızı önler.",
          "Eşinizle görüşme öncesinde durumu nasıl tanımladığınızı kısaca konuşmanız da işe yarar. Farklı görmeniz bir sorun değildir; aksine bu fark sürecin önemli bir bilgisidir ve görüşmede açıkça paylaşılabilir.",
        ],
      },
      {
        heading: "Görüşmenin sonunda ne olur?",
        paragraphs: [
          "İlk görüşmenin sonunda ilk izlenimler ve önerilen sonraki adımlar sizinle paylaşılır. Bu, kesin bir sonuç ya da tanı anlamına gelmez; tek görüşmeyle güvenilir bir değerlendirme yapılamaz.",
          "Önerilen adım duruma göre değişir: çocukla tanışma seansları, kapsamlı bir psikolojik değerlendirme, yalnızca ebeveyn danışmanlığı ya da başka bir uzmana yönlendirme. Bazı durumlarda tek bir ebeveyn görüşmesi ve birkaç somut öneri yeterli olur; her başvuru bir terapi süreciyle sonuçlanmak zorunda değildir.",
          "Seans sıklığı, tahmini süre ve ücret bilgisi de bu aşamada netleştirilir. Sürecin nasıl ilerleyeceğine dair kararı, size sunulan bilgiyle birlikte siz verirsiniz.",
        ],
      },
      {
        heading: "Gizlilik nasıl işler?",
        paragraphs: [
          "Görüşmede paylaştıklarınız mesleki gizlilik kapsamındadır ve onayınız olmadan hiç kimseyle paylaşılmaz. Okulla iletişim kurulması gerekiyorsa bu ancak yazılı onayınızla yapılır.",
          "Gizliliğin yasal bir sınırı vardır: bir çocuğun ihmal ya da istismara maruz kaldığına dair ciddi bir bulgu ya da yaşamı tehdit eden bir risk söz konusuysa, ilgili mevzuat gereği bildirim yapılması zorunludur. Bu sınır ilk görüşmede size açıkça anlatılır.",
        ],
      },
    ],
    keyPoints: [
      "İlk görüşme genellikle çocuk olmadan, yalnızca ebeveynlerle yapılır.",
      "Yaklaşık 50 dakika sürer ve gelişim öyküsüyle mevcut endişeleri kapsar.",
      "Davranışın hangi gün ve saatlerde ortaya çıktığını not almak görüşmenin verimini artırır.",
      "Görüşme sonunda önerilen adımlar paylaşılır; tek görüşmede tanı konulmaz.",
      "Her başvuru bir terapi süreciyle sonuçlanmak zorunda değildir.",
    ],
    seekHelpSigns: [
      "Bir durumun destek gerektirip gerektirmediğinden emin değilsiniz",
      "Çocuğunuzun zorlanması haftalardır sürüyor",
      "Okuldan tekrarlayan geri bildirimler alıyorsunuz",
      "Denediğiniz yaklaşımlar sonuç vermedi",
    ],
    references: [
      {
        label: "Türk Psikologlar Derneği — Etik Yönetmelik",
        url: "https://www.psikolog.org.tr/tr/yayinlar/etik-yonetmelik/",
      },
    ],
    primaryService: "cocuk-psikologu",
    relatedConcerns: ["okul-reddi", "ofke-nobetleri"],
    relatedArticles: ["cocugu-terapiye-hazirlamak", "cocuk-ne-zaman-psikologa-goturulmeli"],
  },

  {
    slug: "cocuk-ne-zaman-psikologa-goturulmeli",
    title: "Çocuk Ne Zaman Psikoloğa Götürülmeli?",
    h1: "Çocuk Ne Zaman Psikoloğa Götürülmeli?",
    metaTitle: "Çocuk Ne Zaman Psikoloğa Götürülmeli? | Rehber",
    metaDescription:
      "Hangi belirtiler profesyonel destek gerektirir, hangileri gelişimin normal parçasıdır? Ebeveynler için pratik değerlendirme ölçütleri.",
    excerpt:
      "Gelişimin normal parçası olan zorlanmalarla destek gerektiren durumları ayırt etmenin ölçütleri.",
    answer:
      "Belirleyici üç ölçüt vardır: süre, yoğunluk ve işlevsellik. Bir zorlanma haftalardır sürüyor, yaşa göre beklenenden yoğun yaşanıyor ve çocuğun okul, arkadaşlık ya da aile yaşamını kısıtlamaya başlamışsa profesyonel destek almak yerinde olur.",
    published: "2026-08-03",
    reviewed: LAST_REVIEWED,
    readingMinutes: 7,
    sections: [
      {
        heading: "Üç temel ölçüt",
        paragraphs: [
          "Ebeveynlerin en sık sorduğu soru \"bu normal mi?\" biçimindedir. Çoğu davranış belirli yaşlarda gelişimin beklenen parçasıdır: iki yaşında öfke nöbeti, dört yaşında karanlık korkusu, sekiz yaşında başarısızlık kaygısı. Bunlar tek başına destek gerektirmez.",
          "Ayırt etmede işleyen çerçeve üç sorudan oluşur. Süre: bu durum ne kadar zamandır sürüyor? Birkaç gün mü, aylar mı? Yoğunluk: tepki yaşına göre beklenenden çok mu şiddetli? İşlevsellik: bu durum çocuğun yapmak istediği ya da yapması gereken şeyleri engelliyor mu?",
          "Üçüncü ölçüt en belirleyicidir. Karanlıktan korkan ama uyuyabilen bir çocukla, korkusu nedeniyle hiç yalnız uyuyamayan bir çocuk arasındaki fark, korkunun varlığı değil yaşamı ne kadar kısıttığıdır.",
        ],
      },
      {
        heading: "Destek almayı düşündüren işaretler",
        bullets: [
          "Bir zorlanma bir aydan uzun süredir devam ediyor ve azalmıyor",
          "Okula gitmeme, arkadaş ortamından çekilme gibi kısıtlanmalar başladı",
          "Uyku, iştah ya da tuvalet alışkanlıklarında belirgin ve süregelen değişiklik var",
          "Daha önce kazanılmış bir beceride geriye dönüş görülüyor",
          "Öfke nöbetleri yaşa göre beklenenden sık, uzun ve şiddetli",
          "Okuldan tekrarlayan davranış ya da dikkat geri bildirimleri geliyor",
          "Çocuk kendine dair olumsuz inançlar dile getiriyor (\"ben kötüyüm\", \"beni kimse sevmiyor\")",
          "Tıbbi nedeni bulunamayan tekrarlayan bedensel yakınmalar var",
          "Bir yaşam olayının (kayıp, boşanma, taşınma) ardından toparlanma gerçekleşmiyor",
          "Ailenin günlük düzeni bu zorlanma çevresinde şekillenmeye başladı",
        ],
      },
      {
        heading: "Gecikmeden başvurulması gereken durumlar",
        paragraphs: [
          "Bazı durumlarda \"bekleyip görelim\" yaklaşımı uygun değildir. Kendine zarar verme davranışı ya da bu yönde ifadeler, yaşamı sonlandırmaya dair sözler, bir başkasına ciddi zarar verme riski, istismar şüphesi ya da ani ve açıklanamayan ciddi işlev kaybı acil değerlendirme gerektirir.",
          "Bu durumlarda ilk adım en yakın hastanenin acil servisi ya da çocuk-ergen psikiyatrisi başvurusudur. Yaşamı tehdit eden bir kriz söz konusuysa 112 Acil Çağrı Merkezi aranmalıdır.",
          "Psikolojik destek bu durumlarda değerlidir ama tıbbi değerlendirmenin yerine geçmez ve gecikmeye neden olmamalıdır.",
        ],
      },
      {
        heading: "\"Bekleyelim, geçer\" ne zaman doğrudur?",
        paragraphs: [
          "Bazı zorlanmalar gerçekten kendiliğinden geçer. Yeni okula uyum, kardeş doğumu sonrası geriye dönüş, taşınma sonrası huzursuzluk — bunlar çoğunlukla birkaç hafta içinde azalır. Bu dönemde ailenin tutarlı ve sakin yaklaşımı en iyi müdahaledir.",
          "Beklemenin uygun olduğu durumda dahi yapılabilecek bir şey vardır: gözlem. Davranışın hangi günler, hangi saatlerde ve hangi durumlardan sonra ortaya çıktığını iki hafta boyunca not almak, hem örüntüyü görünür kılar hem de başvuru gerekirse çok değerli bir bilgi oluşturur.",
          "Beklemenin sınırı da nettir: durum azalmıyor, artıyor ya da yeni alanlara yayılıyorsa beklemek yerine değerlendirme yapılması yerinde olur. Erken başvuru çoğu durumda süreci kısaltır.",
        ],
      },
      {
        heading: "Başvurmak terapiye başlamak anlamına gelmez",
        paragraphs: [
          "Ebeveynleri en çok tereddütte bırakan düşünce, başvurunun uzun bir sürece bağlanacağı beklentisidir. Oysa tek bir ebeveyn görüşmesi de anlamlı bir sonuç üretebilir.",
          "Bu görüşmede durum değerlendirilir ve üç sonuçtan biri ortaya çıkar: gelişimsel olarak beklenen bir durumdur ve birkaç öneriyle ilerlenebilir; ebeveyn danışmanlığı yeterli olacaktır; ya da çocukla bir çalışma önerilir.",
          "Yani başvurmak, karar vermek değil bilgi almaktır. Kararı, elinizdeki bilgiyle birlikte siz verirsiniz.",
        ],
      },
    ],
    keyPoints: [
      "Süre, yoğunluk ve işlevsellik üç temel ölçüttür; işlevsellik en belirleyicidir.",
      "Bir aydan uzun süren ve azalmayan zorlanmalar değerlendirilmelidir.",
      "Kendine zarar verme, istismar şüphesi ve ani ciddi işlev kaybı gecikmeden tıbbi başvuru gerektirir.",
      "Beklemeye karar verilse bile iki hafta gözlem notu tutmak çok değerlidir.",
      "Başvurmak terapiye başlamak zorunda olmak anlamına gelmez.",
    ],
    seekHelpSigns: [
      "Zorlanma bir aydan uzun süredir devam ediyor",
      "Çocuğun okul, arkadaşlık ya da aile yaşamı kısıtlanıyor",
      "Kazanılmış bir beceride geriye dönüş var",
      "Kendine dair olumsuz inançlar dile getiriyor",
      "Kendine zarar verme davranışı ya da ifadeleri var — bu durumda gecikmeden başvurulmalıdır",
    ],
    references: [
      {
        label: "Dünya Sağlık Örgütü — Çocuk ve genç ruh sağlığı",
        url: "https://www.who.int/news-room/fact-sheets/detail/mental-health-of-children-and-young-people",
      },
      {
        label: "NHS — Çocuklarda ruh sağlığı belirtileri",
        url: "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/",
      },
    ],
    primaryService: "cocuk-psikologu",
    relatedConcerns: ["okul-reddi", "ofke-nobetleri", "dikkat-problemleri"],
    relatedArticles: ["ilk-gorusmede-ne-olur", "psikolog-psikiyatrist-pedagog-farki"],
  },

  {
    slug: "psikolog-psikiyatrist-pedagog-farki",
    title: "Psikolog, Psikiyatrist ve Pedagog Arasındaki Fark",
    h1: "Psikolog, Psikiyatrist ve Pedagog Arasındaki Fark Nedir?",
    metaTitle: "Psikolog, Psikiyatrist ve Pedagog Farkı Nedir?",
    metaDescription:
      "Psikolog, klinik psikolog, psikiyatrist ve pedagog hangi eğitimden gelir, hangi yetkilere sahiptir ve hangi durumda kime başvurulur?",
    excerpt:
      "Hangi uzman hangi eğitimden gelir, kim tanı koyar, kim ilaç yazar ve hangi durumda kime başvurulur?",
    answer:
      "Temel ayrım yetkilerde ve eğitimdedir: psikiyatrist bir hekimdir, tanı koyar ve ilaç yazabilir. Psikolog psikoloji lisansından gelir; psikolojik değerlendirme ve destek çalışması yürütür, ilaç yazamaz. Pedagoji ise eğitim bilimleri alanıdır ve öğrenme süreçlerine odaklanır.",
    published: "2026-08-03",
    reviewed: LAST_REVIEWED,
    readingMinutes: 6,
    sections: [
      {
        heading: "Psikiyatrist",
        paragraphs: [
          "Psikiyatrist tıp fakültesi mezunu bir hekimdir ve ardından psikiyatri uzmanlık eğitimi almıştır. Çocuklar için ayrı bir uzmanlık dalı vardır: çocuk ve ergen ruh sağlığı ve hastalıkları.",
          "Psikiyatristin yetki alanı tanı koymayı ve ilaç tedavisini kapsar. Dikkat eksikliği ve hiperaktivite bozukluğu, otizm spektrum bozukluğu, depresyon ve kaygı bozuklukları gibi tanılar tıbbi tanılardır ve hekim tarafından konulur.",
          "Bedensel bir nedenin dışlanması gereken durumlarda, ilaç değerlendirmesi gerektiğinde ve tanı netliği arandığında başvurulacak uzman psikiyatristtir.",
        ],
      },
      {
        heading: "Psikolog ve klinik psikolog",
        paragraphs: [
          "Psikolog, dört yıllık psikoloji lisansı mezunudur. Klinik psikoloji alanında yüksek lisans ya da doktora yapmış olanlar klinik psikoloji alanında uzmanlaşmış sayılır ve psikoterapi uygulamaları bu eğitim temeline dayanır.",
          "Psikologun çalışma alanı psikolojik değerlendirme, psikoterapi ve danışmanlıktır. İlaç yazamaz ve tıbbi tanı koyamaz. Buna karşılık psikolojik değerlendirme yaparak bulguları ortaya koyar ve gerektiğinde hekime yönlendirir.",
          "Çocuk alanında çalışan bir psikolog, oyun terapisi gibi yaşa özgü yöntemlerde ayrıca uygulama eğitimi alır. Bir uzmanı değerlendirirken lisans eğitimi, yüksek lisans alanı ve uyguladığı yöntemdeki eğitimini sormak yerindedir.",
        ],
      },
      {
        heading: "Pedagog ve rehber öğretmen",
        paragraphs: [
          "Pedagoji, eğitim bilimleri alanıdır; öğrenme süreçleri, öğretim yöntemleri ve eğitim programları üzerine odaklanır. Türkiye'de \"pedagog\" unvanı günlük dilde çok geniş ve zaman zaman yanıltıcı biçimde kullanılmaktadır; bu nedenle başvururken kişinin lisans eğitimini sormak önemlidir.",
          "Okullarda görev yapan rehber öğretmen ya da psikolojik danışman, rehberlik ve psikolojik danışmanlık lisansından gelir. Okul içinde yönlendirme, akademik rehberlik, akran sorunlarında müdahale ve aile-okul iletişimi konularında çalışır.",
          "Okul rehberliği çoğu durumda ilk ve en erişilebilir kaynaktır. Sorun okul bağlamının dışına taşıyor ya da klinik bir çalışma gerektiriyorsa psikolog veya hekime yönlendirme yapılır.",
        ],
      },
      {
        heading: "Hangi durumda kime başvurulur?",
        bullets: [
          "Uyku, iştah ya da bedensel belirtiler ön planda: önce çocuk hekimi",
          "Tanı netliği ya da ilaç değerlendirmesi gerekiyor: çocuk ve ergen psikiyatristi",
          "Duygusal ve davranışsal zorlanmada destek çalışması: çocuk alanında çalışan psikolog",
          "Kaygı, öfke, uyum güçlüğü, akran sorunları: psikolog",
          "Okul içi akademik ve yönlendirme sorunları: okul rehberlik servisi",
          "Öğrenme güçlüğü şüphesi: hekim değerlendirmesi ve özel eğitim değerlendirmesi birlikte",
          "Kendine zarar verme riski ya da acil durum: acil servis veya 112",
        ],
      },
      {
        heading: "İki uzman birlikte çalışabilir",
        paragraphs: [
          "Bu roller birbirinin alternatifi değildir; sık sık birlikte yürür. Örneğin dikkat eksikliği tanısı almış bir çocukta hekim ilaç tedavisini yönetirken, psikolog dikkat stratejileri, öz düzenleme ve ebeveyn danışmanlığı üzerinde çalışır.",
          "Bu eş güdüm ailenin onayıyla kurulur ve süreci belirgin biçimde güçlendirir. Bir uzmandan diğerine yönlendirme yapılması, ilk uzmanın yetersizliği değil doğru uygulamanın göstergesidir.",
        ],
      },
    ],
    keyPoints: [
      "Psikiyatrist hekimdir; tanı koyar ve ilaç yazabilir.",
      "Psikolog değerlendirme ve psikoterapi yürütür; ilaç yazamaz, tıbbi tanı koymaz.",
      "Pedagoji eğitim bilimleri alanıdır; unvanın kullanımı günlük dilde belirsizdir.",
      "Okul rehberlik servisi çoğu durumda ilk ve en erişilebilir kaynaktır.",
      "Roller birbirinin alternatifi değildir; birlikte çalışmak süreci güçlendirir.",
    ],
    seekHelpSigns: [
      "Hangi uzmana başvuracağınızdan emin değilsiniz",
      "Bir tanı aldınız ama nasıl ilerleyeceğinizi bilmiyorsunuz",
      "Okul bir uzmana yönlendirme önerdi",
      "Birden fazla uzmanla eş güdüm kurulması gerekiyor",
    ],
    references: [
      {
        label: "Türk Psikologlar Derneği",
        url: "https://www.psikolog.org.tr/",
      },
      {
        label: "American Psychological Association — Psikolog ve psikiyatrist",
        url: "https://www.apa.org/topics/psychotherapy/understanding",
      },
    ],
    primaryService: "psikolojik-degerlendirme",
    relatedConcerns: ["dikkat-problemleri", "okul-reddi"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "ilk-gorusmede-ne-olur"],
  },

  {
    slug: "cocugu-terapiye-hazirlamak",
    title: "Çocuğu Terapiye Nasıl Hazırlamalı?",
    h1: "Çocuğu Terapiye Nasıl Hazırlamalı?",
    metaTitle: "Çocuğu Terapiye Nasıl Hazırlamalı? | Rabia Bakıcı",
    metaDescription:
      "Çocuğa psikoloğa gideceğini nasıl anlatmalı, hangi ifadelerden kaçınmalı ve ilk seans öncesi neler yapılmalı?",
    excerpt:
      "Çocuğa süreci nasıl anlatmalı, hangi ifadeler işe yarar ve hangilerinden kaçınmalı?",
    answer:
      "En işleyen yaklaşım yaşına uygun, kısa ve dürüst bir açıklamadır. Çocuğa gideceğiniz yeri sürpriz yapmayın, ceza gibi sunmayın ve orada \"düzeltilmeyeceğini\" açıkça belirtin. Hazırlığın amacı ikna etmek değil, öngörülebilirlik sağlamaktır.",
    published: "2026-08-03",
    reviewed: LAST_REVIEWED,
    readingMinutes: 5,
    sections: [
      {
        heading: "Ne zaman söylemeli?",
        paragraphs: [
          "Çok erken söylemek küçük çocuklarda gereksiz kaygı biriktirir; çok geç söylemek ise güven ilişkisini zedeler. Okul öncesi çocuklarda bir veya iki gün önce, okul çağındaki çocuklarda üç ile beş gün önce söylemek genellikle uygun bir aralıktır.",
          "Ergenlerde durum farklıdır: karar sürecine baştan dâhil edilmeleri gerekir. Ergenin haberi olmadan alınan bir randevu, sürecin en başında direnç oluşturur ve bunu telafi etmek zaman alır.",
          "Söyleme zamanı kadar söyleme anı da önemlidir. Bir tartışmanın hemen ardından söylemek, gidişin bir yaptırım olduğu izlenimini yaratır. Sakin ve sıradan bir anda söylemek daha iyi sonuç verir.",
        ],
      },
      {
        heading: "Nasıl anlatmalı?",
        paragraphs: [
          "Küçük çocuklar için somut ve kısa bir çerçeve yeterlidir: \"Yarın çocukların duygularını anlamasına yardım eden biriyle tanışacağız. Orada oyuncaklar ve oyunlar var. Ben de dışarıda seni bekleyeceğim.\"",
          "Okul çağındaki çocuklara nedeni de eklenebilir, ama suçlayıcı olmayan bir dille: \"Son zamanlarda sabahlar bize zor geliyor. Bu konuda bize yardım edebilecek biriyle konuşacağız.\" Burada \"bize\" ifadesi önemlidir; sorunu çocuğa yüklemez.",
          "Ergenler için şeffaflık en iyi yoldur: neden gerekli görüldüğü, gizliliğin nasıl işlediği ve ilk görüşmeden sonra devam edip etmeme konusunda söz hakkı olduğu açıkça konuşulmalıdır.",
        ],
      },
      {
        heading: "Kaçınılması gereken ifadeler",
        bullets: [
          "\"Doktora gidiyoruz\" — iğne ve muayene beklentisi yaratır",
          "\"Seni düzeltecek\" — çocukta bozuk olduğu inancını pekiştirir",
          "\"Bu davranışına devam edersen yine gideceğiz\" — süreci cezaya dönüştürür",
          "\"Orada her şeyi anlatacaksın\" — baskı yaratır ve direnç doğurur",
          "\"Bir yere gitmiyoruz, sadece geziyoruz\" — güveni zedeler",
          "\"Sen sorunlu bir çocuksun, o yüzden gidiyoruz\" — etiketler",
          "Aşırı vaat: \"Çok eğlenecesin, bayılacaksın\" — hayal kırıklığı riski taşır",
        ],
      },
      {
        heading: "İlk seans günü",
        paragraphs: [
          "Randevuya erken varmak, çocuğun ortama alışması için birkaç dakika kazandırır. Aceleyle gelmek ve kapıda gerginlik yaşamak ilk izlenimi olumsuz etkiler.",
          "Çocuğun yanında sizin de sakin olmanız en güçlü mesajdır. Çocuk ortamın güvenli olup olmadığını büyük ölçüde sizin beden dilinizden okur.",
          "Seans sonrasında çocuğu sorgulamamak önemlidir. \"Ne konuştunuz, neler anlattın?\" biçiminde sorular çocuğu ikili bir sadakat çatışmasına sokar. Bunun yerine kısa ve baskısız bir ifade yeterlidir: \"İyi geçtiyse sevindim, sen istersen anlatırsın.\"",
        ],
      },
      {
        heading: "Çocuk gitmek istemezse",
        paragraphs: [
          "Direnç yaygındır ve genellikle bilinmeyene karşı duyulan kaygıdan kaynaklanır. İlk adım nedenini sormaktır: neyi bekliyor, neden çekiniyor? Çoğu zaman altında düzeltilecek yanlış bir beklenti vardır (\"iğne yapacak\", \"beni orada bırakacaksın\").",
          "Küçük çocuklarda ilk seanslara ebeveynin eşlik etmesi ve kademeli olarak geri çekilmesi planlanabilir. Bu, dirençle çalışmanın en yumuşak yoludur.",
          "Ergenlerde zorlama neredeyse her zaman ters etki yapar. Bu durumda süreç yalnızca ebeveyn danışmanlığı olarak başlatılabilir; ergen hazır olduğunda dâhil olur. Ebeveynin yaklaşımındaki değişim de tek başına anlamlı fark yaratabilir.",
        ],
      },
    ],
    keyPoints: [
      "Küçük çocuklarda 1–2 gün, okul çağında 3–5 gün önce söylemek uygundur.",
      "Ergenler karar sürecine baştan dâhil edilmelidir.",
      "Açıklama kısa, dürüst ve suçlayıcı olmayan bir dille yapılmalıdır.",
      "\"Seni düzeltecek\" ve \"doktora gidiyoruz\" gibi ifadelerden kaçınılmalıdır.",
      "Seans sonrası çocuğu sorgulamak yerine alan bırakmak gerekir.",
    ],
    seekHelpSigns: [
      "Çocuğunuz süreci reddediyor ve nasıl ilerleyeceğinizi bilmiyorsunuz",
      "Daha önce olumsuz bir terapi deneyimi yaşandı",
      "Ergen çocuğunuz görüşmeye gelmeyi kabul etmiyor",
      "Süreci nasıl anlatacağınız konusunda eşinizle anlaşamıyorsunuz",
    ],
    references: [
      {
        label: "American Psychological Association — Çocuklar için psikoterapi",
        url: "https://www.apa.org/topics/psychotherapy/understanding",
      },
    ],
    primaryService: "oyun-terapisi",
    relatedConcerns: ["okul-reddi", "ayrilik-kaygisi"],
    relatedArticles: ["ilk-gorusmede-ne-olur", "oyun-terapisi-nedir"],
  },
];

export const ARTICLE_SLUGS = ARTICLES.map((article) => article.slug);

export function getArticle(slug: string): ArticlePage | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

/** Yayın tarihine göre en yeniden eskiye sıralı liste. */
export const ARTICLES_BY_DATE = [...ARTICLES].sort((a, b) =>
  b.published.localeCompare(a.published),
);
