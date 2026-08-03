import { LAST_REVIEWED } from "@/lib/site";
import type { ConcernPage } from "./types";

/**
 * Sorun odaklı sayfalar. Ebeveynler hizmet adıyla değil yaşadıkları
 * durumla arama yapar; bu sayfalar o uzun kuyruklu niyeti karşılar
 * ve ilgili hizmet sayfasına yönlendirir (PRD §7.2, §9.6).
 */
export const CONCERNS: ConcernPage[] = [
  {
    slug: "okul-reddi",
    navLabel: "Okul Reddi ve Okul Fobisi",
    h1: "Çocuğum Okula Gitmek İstemiyor",
    metaTitle: "Çocuğum Okula Gitmek İstemiyor | Okul Reddi",
    metaDescription:
      "Okul reddi ve okul fobisinde ne olur, nedenleri nelerdir ve ebeveyn ne yapabilir? Başakşehir'de okul kaygısı için psikolojik destek.",
    summary:
      "Sabah okula gitmeme direnci, karın ağrısı ve ağlama nöbetleriyle kendini gösteren okul reddinin nedenleri ve destek yolları.",
    answer:
      "Okul reddi bir tembellik ya da inatlaşma değildir; çoğu zaman kaygının davranışa dönüşmüş hâlidir. Çocuk okuldan değil, okulda karşılaşacağını düşündüğü bir durumdan kaçınmaktadır. Bu nedenle çözüm zorlamak değil, kaçınmanın altındaki nedeni bulup çocuğa kademeli bir dönüş planı kurmaktır.",
    observations: [
      "Sabah okula hazırlanırken ağlama, yavaşlama ya da direnç",
      "Okul öncesi karın ağrısı, mide bulantısı, baş ağrısı",
      "Hafta sonları kaybolan, pazartesi geri dönen yakınmalar",
      "Okul kapısında ebeveynden ayrılmakta zorlanma",
      "Okulda revire sık gitme ve eve gelme isteği",
      "Öğretmen veya belirli bir ders hakkında yoğun kaygı",
      "Uykuya geçmede zorlanma ve okul gecesi huzursuzluk",
    ],
    possibleReasons: [
      "Ayrılık kaygısı — asıl zorlanma okul değil, ebeveynden ayrılmaktır",
      "Sosyal kaygı — sınıfta konuşmak, dikkat çekmek ya da yargılanmak korkusu",
      "Akran sorunları — dışlanma, arkadaş bulamama ya da zorbalık",
      "Akademik zorlanma — anlamadığı bir konuda başarısız görünme korkusu",
      "Öğretmenle ilişkide yaşanan olumsuz bir deneyim",
      "Bir yaşam olayı — taşınma, boşanma, kayıp, kardeş doğumu",
      "Uzun bir aradan dönüş — tatil, hastalık ya da devamsızlık sonrası",
      "Bedensel bir rahatsızlık — bu nedenle önce hekim değerlendirmesi önerilir",
    ],
    sections: [
      {
        heading: "Okul reddi ile isteksizlik arasındaki fark",
        paragraphs: [
          "Hemen her çocuk zaman zaman okula gitmek istemez; bu beklenen bir durumdur. Okul reddinden söz edebilmek için direncin süreklilik kazanması, yoğun bir duygusal tepki içermesi ve çocuğun okula devamını fiilen engellemeye başlaması gerekir.",
          "Ayırt edici bir işaret bedensel yakınmaların zamanlamasıdır. Karın ağrısı yalnızca okul sabahları ortaya çıkıp hafta sonu ve tatilde kayboluyorsa, yakınma büyük olasılıkla kaygı kaynaklıdır. Buna karşın tekrarlayan bedensel belirtilerde önce pediatrik değerlendirme yapılması, tıbbi bir nedeni dışlamak açısından önemlidir.",
          "Süre de belirleyicidir. Yeni okula başlama ya da uzun bir aradan dönüş sonrası birkaç haftalık uyum zorluğu beklenir. Direnç aylarca sürüyor, giderek artıyor ve devamsızlığa dönüşüyorsa profesyonel destek almak yerinde olur.",
        ],
      },
      {
        heading: "Neden \"zorla göndermek\" tek başına işe yaramaz?",
        paragraphs: [
          "Kaygı, kaçınmayla beslenir. Çocuk okula gitmediği gün rahatlar; bu rahatlama kaçınma davranışını güçlendirir ve bir sonraki gün gitmek daha da zorlaşır. Bu döngü nedeniyle okula devamı sürdürmek gerçekten önemlidir.",
          "Ancak yalnızca zorlamak, altındaki nedeni çözmediği için genellikle çatışmayı büyütür. Örneğin zorbalık yaşayan bir çocuğu her sabah zorla göndermek, yaşadığı durumu değiştirmediği gibi güven ilişkisini de zedeler.",
          "İşleyen yaklaşım ikisini birleştirir: devamı mümkün olduğunca sürdürmek ve aynı zamanda kaçınmanın nedenine yönelik somut bir müdahale planı kurmak. Bu plan okul, aile ve gerekiyorsa psikolog iş birliğiyle yürütülür.",
        ],
      },
      {
        heading: "Kademeli dönüş planı nasıl kurulur?",
        paragraphs: [
          "Devamsızlık uzamışsa doğrudan tam güne dönüş çoğu zaman gerçekleşmez. Bunun yerine kademeli bir plan kurulur: önce okul bahçesine gitmek, sonra rehberlik odasında kısa süre kalmak, ardından bir ders, iki ders ve tam gün.",
          "Her adımın önceden belirlenmiş, öngörülebilir ve çocuğun kabul ettiği bir hedef olması gerekir. Adım başarıldığında bir sonrakine geçilir; zorlanma yaşandığında bir basamak geriye dönülür ama süreç bırakılmaz.",
          "Bu planın okulla birlikte yürütülmesi kritiktir. Öğretmenin ve rehberlik servisinin planı bilmesi, çocuğun sınıfa dönüşünde karşılaşacağı tepkiyi öngörülebilir kılar. Aile onayıyla kurulan bu iş birliği, okul reddinde sonucu en çok etkileyen unsurlardan biridir.",
        ],
      },
    ],
    homeSupport: [
      "Sabah rutinini sadeleştirin ve her gün aynı sırayla uygulayın; öngörülebilirlik kaygıyı azaltır.",
      "Duyguyu geçerli sayın ama planı değiştirmeyin: \"Gitmenin zor olduğunu görüyorum, yine de bugün gidiyoruz.\"",
      "Sabah tartışmasını uzatmayın; kararı bir gece önce netleştirin.",
      "Vedayı kısa ve net tutun; uzun veda ayrılık kaygısını büyütür.",
      "Okuldan döndüğünde günü sorgulamak yerine birlikte sakin bir zaman geçirin.",
      "Okula gitmediği gün evi \"ödüllendirici\" hâle getirmeyin; ekran ve serbest zaman sınırlı kalsın.",
      "Öğretmenle düzenli ve sakin bir iletişim kanalı kurun.",
      "Tekrarlayan bedensel yakınmalar için önce çocuk hekimine başvurun.",
    ],
    seekHelpSigns: [
      "Direnç bir aydan uzun süredir devam ediyor",
      "Devamsızlık günleri artıyor ya da okula hiç gidemiyor",
      "Okul dışındaki alanlarda da (arkadaş, aktivite) çekilme başladı",
      "Yoğun panik tepkileri, kusma ya da ağlama nöbetleri var",
      "Zorbalık şüphesi ya da okulda güvenlik endişesi var",
      "Çocuk umutsuzluk ya da kendine zarar verme ifadeleri kullanıyor",
      "Ailenin günlük düzeni okul reddi çevresinde şekillenmeye başladı",
    ],
    faqs: [
      {
        question: "Okul fobisi ile okul reddi aynı şey mi?",
        answer:
          "Günlük dilde birlikte kullanılır ama tam olarak aynı değildir. Okul fobisi, okulun kendisine yönelik yoğun bir korkuyu anlatır. Okul reddi ise daha geniş bir şemsiye kavramdır; altında ayrılık kaygısı, sosyal kaygı, akran sorunları ya da akademik zorlanma bulunabilir. Doğru destek, hangi nedenin baskın olduğuna göre belirlenir.",
      },
      {
        question: "Okula gitmediği gün ne yapmalıyım?",
        answer:
          "Gün evde \"tatil\" gibi geçmemelidir. Ekran ve serbest zaman sınırlı tutulur, mümkünse okul çalışması evde sürdürülür. Amaç ceza vermek değil, evde kalmanın okuldan daha çekici hâle gelmesini önlemektir.",
      },
      {
        question: "Öğretmenle nasıl konuşmalıyım?",
        answer:
          "Suçlayıcı olmayan, bilgi paylaşımına dayalı bir yaklaşım en iyi sonucu verir. Çocuğun evde gösterdiği tepkileri, sabahları neler yaşandığını ve varsa tetikleyicileri paylaşın; öğretmenin sınıf içi gözlemini isteyin. Kademeli dönüş planı kuruluyorsa okulun bu plandan haberdar olması gerekir.",
      },
      {
        question: "Bu durum kendiliğinden geçer mi?",
        answer:
          "Yeni okula uyum ya da uzun bir aradan dönüşe bağlı kısa süreli direnç genellikle birkaç hafta içinde azalır. Aylarca süren ve devamsızlığa dönüşen okul reddi ise kendiliğinden çözülmeyip yerleşme eğilimi gösterir; erken müdahale süreci belirgin biçimde kolaylaştırır.",
      },
    ],
    primaryService: "cocuklarda-kaygi-terapisi",
    relatedServices: ["cocuk-psikologu", "cocuklarda-kaygi-terapisi", "psikolojik-degerlendirme"],
    relatedConcerns: ["ayrilik-kaygisi", "akran-iliskileri", "dikkat-problemleri"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "cocugu-terapiye-hazirlamak"],
    references: [
      {
        label: "NHS — Çocuklarda kaygı ve okul",
        url: "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "ayrilik-kaygisi",
    navLabel: "Ayrılık Kaygısı",
    h1: "Çocuklarda Ayrılık Kaygısı",
    metaTitle: "Çocuklarda Ayrılık Kaygısı | Belirtiler ve Destek",
    metaDescription:
      "Çocuklarda ayrılık kaygısı belirtileri, hangi yaşta beklenir ve ne zaman destek gerekir? Ebeveynler için uygulanabilir yaklaşımlar.",
    summary:
      "Ebeveynden ayrılırken yaşanan yoğun tepkilerin gelişimsel karşılığı, ne zaman beklenen olduğu ve ne zaman destek gerektirdiği.",
    answer:
      "Ayrılık kaygısı belirli yaşlarda gelişimin beklenen bir parçasıdır; genellikle 8–18 aylıkta başlar ve okul öncesi dönemde azalır. Destek gerektiren durum, kaygının yaşa göre beklenenden yoğun olması ve çocuğun okula gitmek, arkadaşında kalmak ya da yalnız uyumak gibi günlük işlevlerini engellemeye başlamasıdır.",
    observations: [
      "Ebeveyn odadan çıktığında yoğun ağlama ve panik",
      "Okula ya da kreşe bırakma anında uzun süren tepkiler",
      "Yalnız uyumayı reddetme, gece ebeveynin yatağına gelme",
      "Ebeveynin başına kötü bir şey geleceği korkusu",
      "Ayrılık öncesi karın ağrısı, baş ağrısı, mide bulantısı",
      "Ebeveyni sürekli gözle takip etme, peşinden ayrılmama",
      "Doğum günü, kamp gibi ebeveynsiz etkinliklerden kaçınma",
    ],
    possibleReasons: [
      "Gelişimsel dönem — 8–18 ay ve okul öncesi geçişte beklenen bir aşama",
      "Bir yaşam değişimi — taşınma, kardeş doğumu, okul değişikliği",
      "Ailede yaşanan bir kayıp ya da hastalık",
      "Ebeveynin kendi kaygısının ayrılık anında çocuğa aktarılması",
      "Ani ve hazırlıksız yaşanan bir ayrılık deneyimi",
      "Tutarsız veya belirsiz veda rutinleri",
      "Uzun bir bağlılık dönemi sonrası ani bir bakım değişikliği",
    ],
    sections: [
      {
        heading: "Hangi yaşta ne beklenir?",
        paragraphs: [
          "Bebeklikte, yaklaşık 8. aydan itibaren çocuk ebeveyninin ayrı bir kişi olduğunu ve gözden kaybolabileceğini kavramaya başlar. Bu dönemde ortaya çıkan ayrılık tepkisi sağlıklı bir bağlanmanın göstergesidir.",
          "2–3 yaş civarında tepkiler yoğunlaşabilir; çocuk artık ayrılığı öngörebildiği için önceden protesto eder. 3–5 yaş arasında, çocuk ebeveynin geri döneceğini deneyimleyerek öğrendikçe tepkiler kademeli olarak azalır.",
          "Okul çağında ayrılık kaygısının belirgin biçimde azalması beklenir. Bu dönemde hâlâ yoğun tepkiler görülüyor, çocuk okula gidemiyor ya da yalnız uyuyamıyorsa durum bir uyum güçlüğünden çok, ele alınması gereken bir kaygı örüntüsüne işaret eder.",
        ],
      },
      {
        heading: "Ayrılık anını kolaylaştıran yaklaşım",
        paragraphs: [
          "En sık yapılan iki hata birbirinin zıddıdır: gizlice ayrılmak ve vedayı uzatmak. Gizlice ayrılmak kısa vadede ağlamayı önler ama çocuğun \"ebeveynim her an kaybolabilir\" beklentisini güçlendirir ve gözle takip davranışını artırır. Uzun veda ise kaygıyı besler, çünkü ayrılık anını uzatarak gerginliği tırmandırır.",
          "İşleyen yaklaşım kısa, net ve her seferinde aynı olan bir veda ritüelidir: aynı cümle, aynı hareket, aynı süre. Öngörülebilirlik çocuğun kaygısını en çok azaltan unsurdur.",
          "Bir diğer önemli nokta ebeveynin kendi tepkisidir. Çocuk ebeveynin sesindeki tereddüdü hemen fark eder. Vedanın sakin ve kararlı olması, geri döneceğinize dair güven verir. Sonrasında ne zaman döneceğinizi çocuğun anlayacağı bir zaman ölçüsüyle söylemek (\"öğle yemeğinden sonra\") saatten daha işlevlidir.",
        ],
      },
      {
        heading: "Kademeli alıştırma",
        paragraphs: [
          "Ayrılık kaygısı yoğunsa doğrudan uzun ayrılıklar denenmez. Süre kısa tutularak başlanır ve kademeli olarak uzatılır: önce aynı evde farklı odada kısa süre, sonra kısa süreli dışarı çıkmalar, ardından güvenilen bir yakınla kalma.",
          "Her başarılı deneyim çocuğun \"ayrıldı ve geri döndü\" kaydını güçlendirir. Bu kayıt biriktikçe kaygı doğal olarak azalır. Önemli olan sürecin çocuğun kaldırabileceği adımlarla ilerlemesi ve verilen sözün her seferinde tutulmasıdır.",
        ],
      },
    ],
    homeSupport: [
      "Kısa, net ve her zaman aynı olan bir veda ritüeli oluşturun.",
      "Asla gizlice ayrılmayın; ayrılacağınızı mutlaka söyleyin.",
      "Ne zaman döneceğinizi çocuğun anlayacağı bir olayla ifade edin (\"uykudan sonra\").",
      "Verdiğiniz dönüş sözünü her seferinde tutun.",
      "Ayrılık sürelerini kısa başlatıp kademeli olarak uzatın.",
      "Duyguyu adlandırın ama planı değiştirmeyin: \"Üzgün olduğunu görüyorum, birazdan döneceğim.\"",
      "Ayrılık sonrası ağlamanın ne kadar sürdüğünü öğretmen ya da bakıcıdan öğrenin; çoğu çocuk kısa süre içinde sakinleşir.",
      "Geceleri kendi yatağında uyumasını kademeli bir planla destekleyin.",
    ],
    seekHelpSigns: [
      "Kaygı okul çağında hâlâ yoğun biçimde sürüyor",
      "Çocuk okula, kreşe ya da etkinliklere gidemiyor",
      "Gece hiçbir biçimde yalnız uyuyamıyor ve bu aylardır sürüyor",
      "Ayrılık anlarında panik düzeyinde tepkiler (kusma, nefes darlığı) görülüyor",
      "Ebeveynin başına kötü bir şey geleceğine dair sürekli ve yoğun korku var",
      "Ailenin günlük planları çocuğun ayrılık kaygısına göre şekilleniyor",
      "Kaygı, çocuğun sosyal ve akademik gelişimini sınırlamaya başladı",
    ],
    faqs: [
      {
        question: "Çocuğum ağlarken bırakıp gitmem doğru mu?",
        answer:
          "Veda ettikten sonra planı değiştirmemek genellikle daha işlevlidir; geri dönmek çocuğa ağlamanın ayrılığı iptal ettirdiğini öğretir. Bununla birlikte bırakma ortamının güvenli ve tanıdık olması, öğretmen veya bakıcının çocuğu karşılamaya hazır olması gerekir. Çocuğun ne kadar sürede sakinleştiğini sonradan öğrenmek de önemlidir.",
      },
      {
        question: "Kaç yaşa kadar ayrılık kaygısı normaldir?",
        answer:
          "8–18 aylıkta başlayıp okul öncesi dönemde kademeli olarak azalması beklenir. Okul çağında yoğun biçimde sürmesi ve çocuğun günlük işlevlerini engellemesi durumunda destek almak yerinde olur.",
      },
      {
        question: "Gece yalnız uyumak istemiyor, ne yapabilirim?",
        answer:
          "Kademeli bir plan en iyi sonucu verir: önce odada sandalyede oturmak, sonra kapıya yakın durmak, ardından kısa aralıklarla kontrol etmek. Her adımda birkaç gece kalınır ve çocuk hazır olduğunda bir sonrakine geçilir. Ani geçişler genellikle geri adım getirir.",
      },
      {
        question: "Bu durum benim bir hatamdan mı kaynaklanıyor?",
        answer:
          "Ayrılık kaygısı çoğunlukla gelişimsel bir aşama ya da bir yaşam değişikliğine verilen uyum tepkisidir; ebeveynin hatası değildir. Ebeveynin tepki biçimi kaygının seyrini etkileyebilir, bu da değiştirilebilir bir unsurdur — suçluluk yerine somut bir plan çok daha işlevlidir.",
      },
    ],
    primaryService: "cocuklarda-kaygi-terapisi",
    relatedServices: ["cocuklarda-kaygi-terapisi", "oyun-terapisi", "aile-ve-ebeveyn-danismanligi"],
    relatedConcerns: ["okul-reddi", "ofke-nobetleri", "akran-iliskileri"],
    relatedArticles: ["oyun-terapisi-nedir", "cocuk-ne-zaman-psikologa-goturulmeli"],
    references: [
      {
        label: "NHS — Çocuklarda kaygı",
        url: "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "ofke-nobetleri",
    navLabel: "Öfke Nöbetleri",
    h1: "Çocuklarda Öfke Nöbetleri",
    metaTitle: "Çocuklarda Öfke Nöbetleri | Nedenleri ve Yaklaşım",
    metaDescription:
      "Çocuklarda öfke nöbetlerinin nedenleri, nöbet anında ne yapılması gerektiği ve profesyonel destek gerektiren işaretler.",
    summary:
      "Öfke nöbetlerinin gelişimsel karşılığı, nöbet anında işleyen yaklaşım ve destek gerektiren işaretler.",
    answer:
      "Öfke nöbeti, çocuğun o an hissettiği yoğun duyguyu düzenleyemediğinde ortaya çıkan bir taşma durumudur. Küçük yaşlarda beklenen bir davranıştır; çünkü duyguyu düzenleyen beyin bölgeleri henüz gelişmektedir. Nöbet anında öğretmek işe yaramaz — işleyen yaklaşım önce güvenliği sağlamak, sonra sakinleşme sonrası konuşmaktır.",
    observations: [
      "Yerlere yatma, tekmeleme, bağırma, ağlama krizleri",
      "Eşya atma, vurma, kendine ya da başkasına zarar verme girişimi",
      "Nöbetin uzun sürmesi ve zor sakinleşme",
      "Hayır yanıtı ya da bir isteğin reddi sonrası tetiklenme",
      "Geçiş anlarında (oyun bitişi, uyku saati) yoğunlaşma",
      "Evde ve okulda farklı sıklıkta ortaya çıkma",
      "Nöbet sonrası yorgunluk ya da pişmanlık",
    ],
    possibleReasons: [
      "Gelişimsel dönem — 18 ay ile 4 yaş arası öfke nöbetleri beklenen bir aşamadır",
      "Duygu düzenleme kapasitesinin henüz gelişmemiş olması",
      "Kelime dağarcığının duyguyu anlatmaya yetmemesi",
      "Yorgunluk, uykusuzluk veya açlık",
      "Tutarsız ve öngörülemeyen sınırlar",
      "Aşırı uyaran — kalabalık, gürültü, uzun ekran süresi",
      "Duyusal hassasiyet",
      "Bir yaşam değişimi veya ailedeki gerginlik",
      "Kaygının öfke olarak ifade bulması",
    ],
    sections: [
      {
        heading: "Öfke nöbeti anında ne olur?",
        paragraphs: [
          "Nöbet sırasında çocuk gerçek anlamda kontrolünü kaybeder. Yoğun duygu, mantık yürütme ve dil kapasitesini geçici olarak devre dışı bırakır. Bu nedenle o anda yapılan açıklamalar, uyarılar ve pazarlıklar çocuğa ulaşmaz.",
          "Bu bilgi ebeveyn için rahatlatıcıdır: nöbet anında \"doğru cümleyi\" bulmak zorunda değilsiniz. O anki tek hedef güvenliği sağlamak ve fırtınanın geçmesine sakin biçimde eşlik etmektir.",
          "Az söz, sakin ses tonu ve yakında ama müdahale etmeden durmak çoğu durumda yeterlidir. Çocuk kendine ya da başkasına zarar verme riski taşıyorsa fiziksel güvenlik sağlanır, ancak bu bir ceza ya da cezalandırıcı tutma biçiminde olmamalıdır.",
        ],
      },
      {
        heading: "Nöbetten sonra ne yapılır?",
        paragraphs: [
          "Öğrenme, nöbetten sonra sakinleşmiş bir çocukla gerçekleşir. Bu aşamada üç şey yapılır: duyguyu adlandırmak, ne olduğunu birlikte anlamak ve bir sonraki sefer için alternatif bir yol belirlemek.",
          "\"Çok kızdın çünkü oyunu bırakmak zorunda kaldın. Kızmak normal ama vurmak yok. Bir dahaki sefere kızdığında bana söyleyebilir ya da yastığa vurabilirsin\" gibi bir çerçeve, duyguyu geçerli sayarken davranışa sınır koyar.",
          "Bu konuşma kısa olmalıdır. Uzun ahlaki açıklamalar çocuğun ilgisini kaybettirir ve mesajı zayıflatır. Aynı çerçevenin tutarlı biçimde tekrarlanması, tek bir uzun konuşmadan çok daha etkilidir.",
        ],
      },
      {
        heading: "Nöbetleri azaltan önleyici düzenlemeler",
        paragraphs: [
          "Öfke nöbetlerinde en etkili müdahale nöbet anında değil, öncesinde yapılır. Nöbetlerin ne zaman yoğunlaştığını birkaç gün not almak, çoğu ailede net bir örüntü ortaya çıkarır: yorgunluk saatleri, geçiş anları, açlık, aşırı uyaran.",
          "Bu örüntü belirlendikten sonra somut düzenlemeler yapılır: geçişleri önceden haber vermek (\"beş dakika sonra oyun bitiyor\"), uyku düzenini korumak, açlık saatlerinde talep etmemek, kalabalık ortamlarda süreyi kısaltmak.",
          "Bir diğer önleyici unsur, olumlu davranışın görünür kılınmasıdır. Çocuk çoğunlukla dikkati sorun çıkardığında alıyorsa davranış tekrarlanır. Sakin kaldığı, beklediği ve isteğini sözle söylediği anları fark edip adlandırmak, bu dengeyi değiştirir.",
        ],
      },
    ],
    homeSupport: [
      "Nöbet anında tartışmayın, pazarlık yapmayın ve uzun açıklama yapmayın.",
      "Güvenliği sağlayın; gerekirse ortamı sadeleştirin.",
      "Sakin ses tonu ve az sözle yakında durun.",
      "Sakinleştikten sonra kısa bir çerçeveyle konuşun: duyguyu onaylayın, davranışa sınır koyun.",
      "Geçişleri önceden haber verin ve süreyi somutlaştırın.",
      "Uyku, beslenme ve ekran düzenini istikrarlı tutun.",
      "Nöbetlerin saatini ve tetikleyicisini bir hafta boyunca not alın.",
      "Sakin ve iş birliğine açık davranışları özellikle fark edip adlandırın.",
      "Eşinizle aynı sınırı aynı biçimde uygulayın.",
    ],
    seekHelpSigns: [
      "Nöbetler 5 yaşından sonra sıklık ve şiddetini korumaya devam ediyor",
      "Nöbetler günde birkaç kez tekrarlıyor ya da 20 dakikadan uzun sürüyor",
      "Çocuk kendine ya da başkasına düzenli olarak zarar veriyor",
      "Nöbetler nedeniyle okul, kreş ya da sosyal ortamlarda sorun yaşanıyor",
      "Nöbet sonrası uzun süre sakinleşemiyor",
      "Aile içindeki gerginlik nöbetler çevresinde artıyor",
      "Nöbetlerin yanında uyku, iştah ya da ruh hâlinde belirgin değişiklik var",
    ],
    faqs: [
      {
        question: "Öfke nöbeti hangi yaşa kadar normaldir?",
        answer:
          "En yoğun dönem 18 ay ile 4 yaş arasıdır; bu yaşlarda nöbetler beklenen bir gelişim aşamasıdır. 5 yaşından sonra sıklık ve şiddetin belirgin biçimde azalması beklenir. Azalmıyor ya da artıyorsa değerlendirme yapılması yerinde olur.",
      },
      {
        question: "Nöbet anında çocuğu odaya göndermek doğru mu?",
        answer:
          "Tek başına izolasyon, özellikle küçük yaşta çocuğun düzenlenme kapasitesini geliştirmez. Daha işlevli olan, çocuğun sakinleşebileceği güvenli ve sade bir alan sunup yakında kalmaktır. Amaç dışlamak değil, uyaranı azaltıp eşlik etmektir.",
      },
      {
        question: "Nöbet sırasında istediğini vermek yanlış mı?",
        answer:
          "Nöbet sırasında verilen taviz, nöbetin işe yaradığını öğrettiği için davranışı güçlendirir. Ancak baştan verilen kararın da gerçekçi ve tutarlı olması gerekir. En işlevli yol, sınırı nöbet başlamadan net koymak ve nöbet sırasında değiştirmemektir.",
      },
      {
        question: "Öfke nöbeti bir hastalık belirtisi olabilir mi?",
        answer:
          "Çoğu öfke nöbeti gelişimseldir. Ancak nöbetler yaşa göre beklenenden çok yoğun, sık ve uzun sürüyorsa; bunlara uyku, iştah, dikkat veya duyusal hassasiyet sorunları eşlik ediyorsa değerlendirme yapılması ve gerektiğinde hekime yönlendirilmesi önerilir.",
      },
    ],
    primaryService: "davranis-problemleri",
    relatedServices: ["davranis-problemleri", "oyun-terapisi", "aile-ve-ebeveyn-danismanligi"],
    relatedConcerns: ["kardes-kiskancligi", "dikkat-problemleri", "ayrilik-kaygisi"],
    relatedArticles: ["oyun-terapisi-nedir", "cocuk-ne-zaman-psikologa-goturulmeli"],
    references: [
      {
        label: "CDC — Olumlu ebeveynlik ve davranış",
        url: "https://www.cdc.gov/parents/essentials/index.html",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "kardes-kiskancligi",
    navLabel: "Kardeş Kıskançlığı",
    h1: "Çocuklarda Kardeş Kıskançlığı",
    metaTitle: "Çocuklarda Kardeş Kıskançlığı | Ne Yapmalı?",
    metaDescription:
      "Kardeş kıskançlığının nedenleri, evde uygulanabilir yaklaşımlar ve profesyonel destek gerektiren işaretler. Ebeveynler için rehber.",
    summary:
      "Yeni kardeş sonrası geriye dönüşler, sürekli rekabet ve çatışmanın nedenleri ile evde işleyen yaklaşımlar.",
    answer:
      "Kardeş kıskançlığı, çocuğun ebeveyn sevgisinin ve dikkatinin sınırlı bir kaynak olduğunu düşünmesinden doğar. Çatışmayı tümüyle ortadan kaldırmak hedef değildir; kardeş ilişkisi çocuğun çatışma çözmeyi öğrendiği ilk laboratuvardır. Hedef, çatışmanın yıkıcı olmaktan çıkıp yönetilebilir hâle gelmesidir.",
    observations: [
      "Yeni kardeş sonrası geriye dönüş (altını ıslatma, bebek gibi konuşma, emzik isteği)",
      "Kardeşe yönelik fiziksel tepkiler — vurma, itme, oyuncak alma",
      "Sürekli \"o daha çok seviliyor\" ifadeleri",
      "Ebeveynin kardeşle ilgilendiği anlarda artan olumsuz davranış",
      "Kardeşin eşyalarına ya da işine zarar verme",
      "Aşırı uyumlu ve \"mükemmel\" davranarak dikkat arama",
      "Sürekli karşılaştırma ve rekabet",
    ],
    possibleReasons: [
      "Yeni bir kardeşin doğumuyla değişen aile düzeni",
      "Yaş farkının küçük olması ve aynı ihtiyaçların çakışması",
      "Ebeveyn dikkatinin dağılımına dair algılanan eşitsizlik",
      "Karşılaştırmalı dil — \"kardeşin gibi yap\"",
      "Çocuğun ailedeki rolüne dair belirsizlik",
      "Gelişimsel farklar nedeniyle farklı kurallar uygulanması ve bunun açıklanmaması",
      "Ailedeki genel gerginlik ya da bir yaşam değişimi",
      "Çatışma anında ebeveynin sürekli hakem rolüne girmesi",
    ],
    sections: [
      {
        heading: "Kıskançlık neden ortaya çıkar?",
        paragraphs: [
          "Bir çocuk için kardeşin gelişi, hayatındaki en büyük değişimlerden biridir. Daha önce bölünmeyen ebeveyn dikkati artık paylaşılmaktadır ve çocuk bunu bir kayıp olarak yaşar. Bu nedenle ilk tepkiler genellikle geriye dönüş ve dikkat arama biçiminde ortaya çıkar.",
          "Kıskançlık yalnızca yeni doğumla sınırlı değildir. Yaş ilerledikçe rekabet başka biçimler alır: akademik karşılaştırma, yetenek karşılaştırması, ailedeki ayrıcalıklar. Özellikle aynı alanda (aynı okul, aynı spor) bulunan kardeşlerde rekabet daha görünür olur.",
          "Ebeveynlerin sık düştüğü bir yanılgı, tam eşitlik kurmaya çalışmaktır. Her çocuğun ihtiyacı farklı olduğu için tam eşitlik hem imkânsızdır hem de çocuğun kendi ihtiyacının görülmediği hissini büyütür. İşleyen yaklaşım eşitlik değil, her çocuğa kendi ihtiyacına göre yaklaşmak ve bunu açıkça ifade etmektir.",
        ],
      },
      {
        heading: "Çatışma anında ebeveynin rolü",
        paragraphs: [
          "Ebeveyn her çatışmada hakem olduğunda çocuklar çözüm üretmeyi öğrenmez; kimin haklı olduğuna karar verecek bir yetkili beklemeye alışır. Bu döngü çatışmaların sıklığını artırır.",
          "Güvenlik riski yoksa çocuklara çözüm üretmeleri için kısa bir alan bırakmak daha işlevlidir. Müdahale gerektiğinde ise suçluyu bulmak yerine kurala odaklanmak önerilir: \"Bu evde vurmak yok. İkiniz de sakinleşene kadar ayrı oynayacaksınız.\"",
          "Fiziksel şiddet söz konusuysa müdahale nettir ve gecikmez. Ancak burada da hedef ceza vermek değil, sınırı açıkça belirtmek ve sakinleşme sonrası alternatif davranışı konuşmaktır.",
        ],
      },
      {
        heading: "Bire bir zaman: en güçlü müdahale",
        paragraphs: [
          "Kardeş kıskançlığında en etkili tek uygulama, her çocukla düzenli ve kısa bire bir zaman geçirmektir. Bu zaman uzun olmak zorunda değildir; günde 10–15 dakikalık, kesintisiz ve çocuğun yönlendirdiği bir zaman çoğu ailede belirgin fark yaratır.",
          "Bu zamanın öngörülebilir olması gerekir. Çocuk sırasının geleceğini bildiğinde, ebeveynin kardeşle ilgilendiği anları tehdit olarak yaşamayı bırakır. \"Ben kardeşini uyuttuktan sonra yarım saat sadece seninleyim\" gibi net bir çerçeve, dikkat arama davranışını azaltır.",
          "Bunun yanında çocuğun ailedeki rolünü olumlu biçimde tanımlamak da işe yarar: kardeşine yardım edebileceği somut ve yaşına uygun görevler vermek, onu \"rakip\" konumundan \"katkı veren\" konumuna taşır.",
        ],
      },
    ],
    homeSupport: [
      "Her çocukla düzenli, kısa ve kesintisiz bire bir zaman planlayın.",
      "Karşılaştırmalı dil kullanmaktan kaçının (\"kardeşin gibi yap\").",
      "Farklı kural uyguluyorsanız nedenini yaşa dayandırarak açıklayın.",
      "Çatışmada suçlu aramak yerine kurala odaklanın.",
      "Güvenlik riski yoksa çözüm üretmeleri için kısa bir alan bırakın.",
      "Fiziksel şiddette net ve gecikmeden sınır koyun.",
      "Büyük çocuğa ailedeki rolünü olumlu biçimde tanımlayan görevler verin.",
      "Yeni kardeş sonrası geriye dönüşleri cezalandırmayın; geçici bir uyum tepkisidir.",
      "Kardeşlerin birlikte keyif aldığı ortak etkinlikler yaratın.",
    ],
    seekHelpSigns: [
      "Kardeşe yönelik saldırganlık sıklaşıyor ve şiddetleniyor",
      "Bir çocuğun güvenliği risk altında",
      "Kıskançlık okul ya da arkadaş ilişkilerine yayılmış",
      "Geriye dönüşler aylardır sürüyor ve azalmıyor",
      "Çocukta belirgin özgüven düşüşü ve \"sevilmiyorum\" inancı yerleşmiş",
      "Uyku, iştah ya da ruh hâlinde belirgin değişiklik var",
      "Aile içi gerginlik kardeş çatışmaları çevresinde sürekli hâle gelmiş",
    ],
    faqs: [
      {
        question: "Kardeşine vurduğunda ne yapmalıyım?",
        answer:
          "Müdahale net ve gecikmesiz olmalıdır: fiziksel olarak ayırın ve kuralı kısaca söyleyin (\"Bu evde vurmak yok\"). Uzun sorgulamayı ve suçlu aramayı sakinleşme sonrasına bırakın. O aşamada duyguyu onaylayıp alternatif davranışı birlikte belirleyin.",
      },
      {
        question: "Yeni kardeş gelince büyük çocuğu nasıl hazırlarım?",
        answer:
          "Doğumdan önce yaşına uygun, dürüst bir açıklama yapın ve abartılı beklenti kurmayın (\"sana arkadaş geliyor\" gibi ifadeler hayal kırıklığı yaratabilir). Doğum sonrası rutinlerini mümkün olduğunca korumak ve bire bir zamanı sürdürmek en belirleyici unsurdur.",
      },
      {
        question: "Geriye dönüş davranışları ne kadar sürer?",
        answer:
          "Yeni kardeş sonrası geriye dönüşler genellikle birkaç hafta ile birkaç ay içinde azalır. Cezalandırılmadığında ve çocuğun ihtiyacı karşılandığında daha hızlı geçer. Aylarca sürüyor ve artıyorsa değerlendirme yapılması yerinde olur.",
      },
      {
        question: "Kardeşler arası kavga tamamen bitmeli mi?",
        answer:
          "Hayır ve bu gerçekçi bir hedef de değildir. Kardeş çatışması çocuğun pazarlık, sınır koyma ve uzlaşma öğrendiği doğal bir alandır. Hedef çatışmayı yok etmek değil, fiziksel şiddet ve aşağılamadan arınmış, çözülebilir bir çatışma kültürü kurmaktır.",
      },
    ],
    primaryService: "aile-ve-ebeveyn-danismanligi",
    relatedServices: ["aile-ve-ebeveyn-danismanligi", "oyun-terapisi", "davranis-problemleri"],
    relatedConcerns: ["ofke-nobetleri", "akran-iliskileri", "ayrilik-kaygisi"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "oyun-terapisi-nedir"],
    references: [
      {
        label: "UNICEF — Ebeveynlik desteği",
        url: "https://www.unicef.org/parenting/",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "dikkat-problemleri",
    navLabel: "Dikkat Problemleri",
    h1: "Çocuklarda Dikkat Problemleri",
    metaTitle: "Çocuklarda Dikkat Problemleri | Değerlendirme",
    metaDescription:
      "Çocuklarda dikkat dağınıklığının olası nedenleri, DEHB ile ilişkisi, evde uygulanabilir düzenlemeler ve değerlendirme süreci.",
    summary:
      "Dikkat dağınıklığının olası nedenleri, DEHB ile ilişkisi ve değerlendirme sürecinin nasıl işlediği.",
    answer:
      "Dikkat problemi tek bir nedene bağlı değildir. Kaygı, uyku düzensizliği, öğrenme güçlüğü, aşırı ekran kullanımı ve DEHB benzer görünen dikkat sorunlarına yol açabilir. Bu nedenle doğru adım, davranışı adlandırmak değil hangi nedenin baskın olduğunu değerlendirmektir. DEHB tanısı tıbbi bir süreçtir ve hekim tarafından konulur.",
    observations: [
      "Ödev ve görevleri tamamlamakta zorlanma",
      "Verilen yönergeyi kısa süre sonra hatırlamama",
      "Kolay dikkat dağılması, sık \"dalıp gitme\"",
      "Eşyaları sürekli kaybetme, dağınıklık",
      "Sırasını bekleyememe, sözü kesme",
      "Yerinde duramama, sürekli hareket etme",
      "Sevdiği bir etkinlikte uzun süre odaklanabilirken görevde odaklanamama",
      "Okuldan tekrarlayan dikkat ve organize olma geri bildirimleri",
    ],
    possibleReasons: [
      "Kaygı — endişeyle meşgul bir zihin, göreve dikkat ayıramaz",
      "Uyku yetersizliği veya bozuk uyku düzeni",
      "Öğrenme güçlüğü — anlaşılmayan bir konuda dikkat doğal olarak dağılır",
      "Aşırı ekran süresi ve yüksek uyaran alışkanlığı",
      "Görev zorluğunun çocuğun düzeyine uygun olmaması",
      "Duyusal hassasiyet ya da uygun olmayan çalışma ortamı",
      "Bir yaşam değişimi ya da ailedeki gerginlik",
      "Dikkat eksikliği ve hiperaktivite bozukluğu (DEHB) — tanısı hekim tarafından konulur",
      "İşitme ya da görme sorunu — bu nedenle tıbbi kontrol önerilir",
    ],
    sections: [
      {
        heading: "Dikkat problemi mi, başka bir şey mi?",
        paragraphs: [
          "Bir çocuğun sevdiği oyunda saatlerce odaklanıp ödevde beş dakika duramaması ebeveynleri en çok yanıltan gözlemdir. Bu, çocuğun \"isteyince yapabildiği\" anlamına gelmez. Yüksek ilgi çekici ve anında geri bildirim veren etkinliklerde odaklanmak, düşük ilgi çekici ve gecikmeli ödüllü görevlerde odaklanmaktan farklı bir işleyiş gerektirir.",
          "Ayırt etmede en yararlı bilgi, sorunun hangi ortamlarda görüldüğüdür. Dikkat sorunu yalnızca okulda görülüyorsa akademik zorlanma, öğretmen ilişkisi ya da sınıf ortamı; yalnızca evde görülüyorsa rutin, ekran alışkanlığı ya da ev içi gerginlik akla gelir. Hem evde hem okulda, uzun süredir ve birçok alanda görülüyorsa daha kapsamlı bir değerlendirme gerekir.",
          "Bir diğer önemli nokta, kaygı ile dikkat arasındaki ilişkidir. Sürekli endişeyle meşgul olan bir zihinde dikkat kapasitesinin bir kısmı kaygıya ayrılır. Bu çocuklar dikkatsiz görünür ama aslında dağınık değil, meşguldür. Kaygı ele alındığında dikkat belirgin biçimde düzelebilir.",
        ],
      },
      {
        heading: "Değerlendirme nasıl işler?",
        paragraphs: [
          "Psikolojik değerlendirme, ebeveyn görüşmesi, çocuk görüşmeleri, gözlem, yapılandırılmış ölçekler ve onayınızla alınan öğretmen bilgisiyle yürütülür. Amaç dikkat sorununun hangi nedenle ilişkili olduğunu ve hangi alanlarda kendini gösterdiğini haritalamaktır.",
          "Bu değerlendirme bir DEHB tanısı değildir. DEHB tıbbi bir tanıdır ve çocuk-ergen psikiyatristi tarafından, gelişim öyküsü ve klinik muayene temelinde konulur. Değerlendirme bulguları gerekli görüldüğünde hekimle paylaşılmak üzere sizinle birlikte ele alınır ve yönlendirme yapılır.",
          "Tanı olsa da olmasa da destek planının içeriği benzer alanları kapsar: görev bölme, ortam düzenleme, rutin kurma, dikkat sürelerini kademeli uzatma ve ev-okul tutarlılığı. Bu nedenle tanı beklenirken de somut adımlar atılabilir.",
        ],
      },
      {
        heading: "Evde ve okulda düzenlemeler",
        paragraphs: [
          "Dikkat, ortam tarafından güçlü biçimde etkilenir. Çalışma alanının sade tutulması, telefonun başka odada olması ve masada yalnızca o an gereken materyalin bulunması çoğu çocukta ölçülebilir fark yaratır.",
          "Görevlerin bölünmesi de belirleyicidir. \"Ödevini bitir\" yerine \"ilk beş soruyu yap, sonra beş dakika ara\" biçiminde bir yapı, çocuğun dikkat kapasitesine uygun bir ritim kurar. Zamanlayıcı kullanmak bu yapıyı görünür kılar.",
          "Okul iş birliği, onayınızla kurulduğunda süreci hızlandırır. Öğretmenin öne oturtma, yönergeyi tekrar etme ve görev bölme gibi küçük düzenlemeleri, sınıf içinde belirgin katkı sağlar.",
        ],
      },
    ],
    homeSupport: [
      "Çalışma alanını sadeleştirin; masada yalnızca o an gereken materyal bulunsun.",
      "Ödevi küçük parçalara bölün ve aralarda kısa molalar planlayın.",
      "Zamanlayıcı kullanarak süreyi görünür hâle getirin.",
      "Uyku düzenini istikrarlı tutun; yetersiz uyku dikkati doğrudan etkiler.",
      "Ekran süresini sınırlayın, özellikle ödev öncesinde.",
      "Yönergeleri tek tek ve göz teması kurarak verin.",
      "Tamamlanan görevleri fark edip adlandırın; yalnızca eksiklere odaklanmayın.",
      "Görsel bir günlük plan veya kontrol listesi kullanın.",
      "İşitme ve görme kontrolü yapılmadıysa çocuk hekimine başvurun.",
    ],
    seekHelpSigns: [
      "Dikkat sorunu hem evde hem okulda ve 6 aydan uzun süredir görülüyor",
      "Akademik başarı belirgin biçimde etkilenmeye başladı",
      "Okuldan tekrarlayan dikkat ve davranış geri bildirimleri geliyor",
      "Çocuk kendine dair olumsuz bir inanç geliştirmeye başladı (\"ben aptalım\")",
      "Dikkat sorununun yanında yoğun kaygı ya da huzursuzluk var",
      "Akran ilişkileri dürtüsellik nedeniyle zarar görüyor",
      "Ev içi çatışmalar ödev ve görevler çevresinde sürekli hâle geldi",
    ],
    faqs: [
      {
        question: "Çocuğuma DEHB tanısı koyabilir misiniz?",
        answer:
          "Hayır. DEHB tıbbi bir tanıdır ve çocuk-ergen psikiyatristi tarafından konulur. Psikolojik değerlendirme, dikkat ve dürtü kontrolüne dair bulguları ortaya koyar; gerekli görüldüğünde hekime yönlendirme yapılır ve bulgular sizinle paylaşılır.",
      },
      {
        question: "Oyun oynarken odaklanabiliyor, demek ki yapabiliyor?",
        answer:
          "Bu yaygın bir yanılgıdır. Yüksek ilgi çekici, hızlı geri bildirimli etkinliklerde odaklanmak; düşük ilgi çekici ve gecikmeli ödüllü görevlerde odaklanmaktan farklı bir kapasite gerektirir. İkisi arasındaki belirgin fark, dikkat sorununun varlığını dışlamaz.",
      },
      {
        question: "Ekran kullanımı dikkat problemine neden olur mu?",
        answer:
          "Aşırı ve yüksek uyaranlı ekran kullanımı, düşük uyaranlı görevlere dayanma kapasitesini zorlaştırabilir ve uyku düzenini bozarak dikkati dolaylı olarak etkiler. Tek başına neden olduğu söylenemez, ancak düzenlenmesi çoğu çocukta gözle görülür fark yaratır.",
      },
      {
        question: "Değerlendirme yapmadan destek almaya başlayabilir miyiz?",
        answer:
          "Evet. Ortam düzenleme, görev bölme ve rutin kurma gibi adımlar tanıdan bağımsız olarak uygulanabilir. Bununla birlikte sorun uzun süreli ve yaygınsa, doğru odağı belirlemek için değerlendirme yapılması önerilir.",
      },
    ],
    primaryService: "psikolojik-degerlendirme",
    relatedServices: ["psikolojik-degerlendirme", "davranis-problemleri", "cocuk-psikologu"],
    relatedConcerns: ["okul-reddi", "ofke-nobetleri", "akran-iliskileri"],
    relatedArticles: ["psikolog-psikiyatrist-pedagog-farki", "cocuk-ne-zaman-psikologa-goturulmeli"],
    references: [
      {
        label: "CDC — Dikkat eksikliği ve hiperaktivite bozukluğu",
        url: "https://www.cdc.gov/adhd/diagnosis/index.html",
      },
    ],
    reviewed: LAST_REVIEWED,
  },

  {
    slug: "akran-iliskileri",
    navLabel: "Akran İlişkileri",
    h1: "Çocuğum Arkadaş Edinemiyor",
    metaTitle: "Çocuğum Arkadaş Edinemiyor | Akran İlişkileri",
    metaDescription:
      "Arkadaş edinmekte zorlanan çocuklarda olası nedenler, evde uygulanabilir destekler ve profesyonel yardım gerektiren durumlar.",
    summary:
      "Arkadaşlık kurmakta zorlanma, dışlanma ve akran çatışmalarının olası nedenleri ile destek yolları.",
    answer:
      "Arkadaşlık kurmak öğrenilen bir beceridir. Bir çocuk arkadaş edinemiyorsa bunun nedeni genellikle karakteri değil, oyuna katılma, duygu okuma ya da anlaşmazlık çözme gibi belirli bir basamakta yaşadığı zorlanmadır. Hangi basamağın eksik kaldığını belirlemek, genel öneriler vermekten çok daha etkilidir.",
    observations: [
      "Teneffüslerde çoğunlukla yalnız kalması",
      "Oyuna katılmak isteyip nasıl başlayacağını bilememesi",
      "Doğum günü ve etkinlik davetlerine çağrılmaması",
      "Oyunu kaybettiğinde terk etmesi ya da öfkelenmesi",
      "Sırasını beklemekte ya da paylaşmakta zorlanması",
      "Sosyal ortamlardan kaçınması",
      "\"Arkadaşım yok\", \"beni kimse sevmiyor\" gibi ifadeler",
      "Okuldan sürekli olumsuz akran haberleriyle dönmesi",
    ],
    possibleReasons: [
      "Sosyal beceri basamaklarından birinde eksiklik — oyuna katılma, sıra bekleme, duygu okuma",
      "Sosyal kaygı — istiyor ama yargılanma korkusuyla kaçınıyor",
      "Mizaç — içe dönük bir çocuk az sayıda arkadaşla mutlu olabilir, bu bir sorun değildir",
      "Dürtüsellik — sıra beklemekte zorlanma akran tepkisi doğurur",
      "Okul ya da şehir değişikliği sonrası uyum süreci",
      "Zorbalık ya da dışlama — bu durumda sorumluluk çocukta değildir",
      "Dil ya da iletişim gelişiminde zorlanma",
      "Ailede yaşanan bir değişimin sosyal geri çekilmeye yol açması",
    ],
    sections: [
      {
        heading: "Önce ayırt etmek gerekir",
        paragraphs: [
          "Arkadaş edinmekte zorlanan her çocuk aynı desteğe ihtiyaç duymaz. En temel ayrım şudur: çocuk sosyal ilişki kurmak istiyor ama nasıl yapacağını bilmiyor mu, yoksa kaygı nedeniyle kaçınıyor mu, yoksa aslında az sayıda arkadaşla yeterince mutlu mu?",
          "Birinci durumda sosyal beceri çalışması, ikinci durumda öncelikle kaygı çalışması gerekir. Üçüncü durumda ise müdahale gerekmez; içe dönüklük bir eksiklik değildir ve düzeltilmesi gereken bir özellik olarak ele alınmamalıdır.",
          "Bu ayrımı yapmanın en pratik yolu çocuğun kendi ifadesine bakmaktır. Yalnızlıktan rahatsız olduğunu söyleyen, arkadaş isteyen ama başaramayan bir çocuk destekten yararlanır. Kendi başına oynamaktan keyif alan ve bundan yakınmayan bir çocuk için asıl mesele ebeveynin kaygısı olabilir.",
        ],
      },
      {
        heading: "Zorbalık ayrı bir konudur",
        paragraphs: [
          "Çocuk sistematik biçimde dışlanıyor, alay konusu oluyor ya da fiziksel şiddete maruz kalıyorsa bu bir sosyal beceri eksikliği değildir. Zorbalık, okulun müdahale sorumluluğu bulunan ayrı bir durumdur.",
          "Bu durumda çocuğa \"kendini nasıl savunacağını öğretmek\" tek başına yeterli ve adil bir yaklaşım değildir. Öncelikle okul yönetimi ve rehberlik servisiyle resmî bir süreç başlatılmalı, çocuğun güvenliği sağlanmalıdır.",
          "Paralel olarak çocukla yaşadığı deneyimin etkileri üzerine çalışılır: özgüven, kendini koruma, yardım isteme ve olayın sorumluluğunun kendisinde olmadığını içselleştirme. Bu iki hattın birlikte yürütülmesi gerekir.",
        ],
      },
      {
        heading: "Beceriyi gerçek ortama taşımak",
        paragraphs: [
          "Sosyal beceri yalnızca konuşularak öğrenilmez; denenerek yerleşir. Bu nedenle her beceri için gerçek ortamda uygulanabilecek küçük ve somut bir hedef belirlenir: bir çocuğa oyun teklif etmek, bir kez sırasını beklemek, bir arkadaşa soru sormak.",
          "Ebeveynin bu aşamadaki rolü fırsat yaratmaktır. Küçük gruplarla planlanan buluşmalar, kalabalık ortamlardan daha iyi sonuç verir; çünkü kalabalık, zorlanan çocuk için yönetilmesi güç bir uyaran yoğunluğu oluşturur. Bir ya da iki çocukla, yapılandırılmış ve süresi sınırlı buluşmalar daha yüksek başarı şansı taşır.",
          "Ortak ilgi alanına dayalı etkinlikler de işlevlidir. Aynı sporu ya da hobiyi paylaşan bir grupta, sohbet başlatma yükü doğal olarak azalır; etkinliğin kendisi ortak bir zemin sağlar.",
        ],
      },
    ],
    homeSupport: [
      "Çocuğun yalnızlıktan rahatsız olup olmadığını doğrudan ve yargılamadan sorun.",
      "Bir veya iki çocukla, süresi sınırlı ve yapılandırılmış buluşmalar planlayın.",
      "Ortak ilgi alanına dayalı bir etkinliğe (spor, kulüp) yönlendirin.",
      "Oyuna katılma cümlelerini evde rol oyunuyla prova edin.",
      "Kaybetmeyi tolere etmeyi aile içi oyunlarla çalışın.",
      "Duygu okuma pratiği yapın: fotoğraf ya da hikâyelerde duyguyu birlikte adlandırın.",
      "\"Neden arkadaşın yok\" gibi soruları ve karşılaştırmayı kullanmayın.",
      "Öğretmenden teneffüs gözlemi isteyin.",
      "Zorbalık şüphesinde okul yönetimiyle resmî bir süreç başlatın.",
    ],
    seekHelpSigns: [
      "Yalnızlık aylardır sürüyor ve çocuk bundan belirgin biçimde rahatsız",
      "Sosyal ortamlardan sistematik olarak kaçınıyor",
      "\"Beni kimse sevmiyor\" gibi inançlar yerleşmeye başladı",
      "Okula gitmek istememe başladı",
      "Zorbalık ya da dışlama söz konusu",
      "Belirgin özgüven düşüşü, çekilme ya da ruh hâli değişikliği var",
      "Umutsuzluk ya da kendine zarar verme ifadeleri var",
    ],
    faqs: [
      {
        question: "Çocuğuma arkadaş bulmak için ne yapabilirim?",
        answer:
          "Kalabalık ortamlar yerine bir veya iki çocukla, süresi sınırlı ve yapılandırılmış buluşmalar planlamak en etkili başlangıçtır. Ortak ilgi alanına dayalı bir etkinliğe yönlendirmek de sohbet başlatma yükünü azaltarak işi kolaylaştırır.",
      },
      {
        question: "Zorbalık varsa çocuğuma ne öğretmeliyim?",
        answer:
          "Zorbalıkta birincil adım okulun müdahalesidir; çocuğun kendini savunmayı öğrenmesi tek başına yeterli değildir. Çocukla çalışılacak konular yardım isteme, olanların sorumluluğunun kendisinde olmadığını anlaması ve özgüvenini koruması üzerinedir.",
      },
      {
        question: "Çocuğum yalnız oynamayı seviyor, müdahale etmeli miyim?",
        answer:
          "Çocuk yalnızlığından rahatsız değilse ve sosyal ortamlarda gerektiğinde işlev görebiliyorsa müdahale gerekmez. İçe dönüklük bir sorun değildir. Belirleyici olan çocuğun kendi rahatsızlığıdır, ebeveynin beklentisi değil.",
      },
      {
        question: "Sosyal beceri çalışması ne kadar sürer?",
        answer:
          "Hangi basamakların çalışılacağına ve çocuğun gerçek ortamda uygulama fırsatına göre değişir. Değerlendirme sonrasında tahmini bir çerçeve paylaşılır; ilerleme düzenli aralıklarla birlikte gözden geçirilir.",
      },
    ],
    primaryService: "sosyal-beceri-destegi",
    relatedServices: ["sosyal-beceri-destegi", "cocuklarda-kaygi-terapisi", "cocuk-psikologu"],
    relatedConcerns: ["okul-reddi", "kardes-kiskancligi", "dikkat-problemleri"],
    relatedArticles: ["cocuk-ne-zaman-psikologa-goturulmeli", "oyun-terapisi-nedir"],
    references: [
      {
        label: "CASEL — Sosyal ve duygusal öğrenme",
        url: "https://casel.org/fundamentals-of-sel/",
      },
    ],
    reviewed: LAST_REVIEWED,
  },
];

export const CONCERN_SLUGS = CONCERNS.map((concern) => concern.slug);

export function getConcern(slug: string): ConcernPage | undefined {
  return CONCERNS.find((concern) => concern.slug === slug);
}
