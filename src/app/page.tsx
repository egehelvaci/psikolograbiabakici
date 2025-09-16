"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Görsel koruma fonksiyonu
  useEffect(() => {
    const preventImageDownload = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
        return false;
      }
    };

    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // CTRL+S, CTRL+U, F12 tuşlarını engelle
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'u')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Sağ tıklamayı engelle
    document.addEventListener('contextmenu', preventImageDownload);
    // Klavye kısayollarını engelle
    document.addEventListener('keydown', preventKeyboardShortcuts);

    return () => {
      document.removeEventListener('contextmenu', preventImageDownload);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
    };
  }, []);

  // Sayfa kaydırma durumunu kontrol eden fonksiyon
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  // Başa dön butonuna tıklandığında çalışacak fonksiyon
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Schema.org yapısal verileri */}
      <Script
        id="schema-org-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://psikolograbiabakici.vercel.app",
            "name": "Psikolog Rabia Bakıcı",
            "image": "https://psikolograbiabakici.vercel.app/images/rabiabakici.jpg",
            "url": "https://psikolograbiabakici.vercel.app",
            "telephone": "+905452855283",
            "email": "psikolograbiabakici@gmail.com",
            "description": "Psikolog Rabia Bakıcı - İstanbul Başakşehir'de çocuk ve ergen psikoloğu. Oyun terapisi, aile danışmanlığı ve psikolojik değerlendirme hizmetleri sunmaktayız.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Başakşehir",
              "addressRegion": "İstanbul",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.0860",
              "longitude": "28.8026"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "15:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/psikolograbiabakici?igsh=MWZhZ253NDc3cjhnaQ==",
              "https://www.linkedin.com/in/rabia-bak%C4%B1c%C4%B1-897664276"
            ],
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "İstanbul"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Psikolojik Hizmetler",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Oyun Terapisi"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Psikolojik Değerlendirme"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Aile Danışmanlığı"
                  }
                }
              ]
            },
            "makesOffer": [
              {
                "@type": "Offer",
                "name": "Çocuklar için Psikolojik Değerlendirme"
              },
              {
                "@type": "Offer",
                "name": "Ergen Psikolojik Danışmanlık"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+905452855283",
              "contactType": "customer service",
              "availableLanguage": ["Turkish", "English"],
              "email": "psikolograbiabakici@gmail.com"
            }
          })
        }}
      />

      {/* Header/Navbar */}
      <header className="bg-[#f0ede9] py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/logo.jpg"
                  alt="Psikolog Rabia Bakıcı Logo"
                  fill
                  className="object-scale-down transform scale-135"
                  sizes="120px"
                  draggable="false"
                  onCopy={(e) => e.preventDefault()}
                />
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              className="w-6 h-6 text-gray-800" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <nav className="hidden md:block" aria-label="Ana Menü">
            <ul className="flex space-x-6">
              <li><Link href="/" className="font-medium text-gray-800 hover:text-primary transition-colors">Ana Sayfa</Link></li>
              <li><Link href="#hizmetler" className="font-medium text-gray-800 hover:text-primary transition-colors">Hizmetler</Link></li>
              <li><Link href="#hakkimda" className="font-medium text-gray-800 hover:text-primary transition-colors">Hakkımda</Link></li>
              <li><Link href="#iletisim" className="font-medium text-gray-800 hover:text-primary transition-colors">İletişim</Link></li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden py-4 px-4 bg-[#f0ede9] border-t border-gray-200" id="mobile-menu" aria-label="Mobil Menü">
            <ul className="flex flex-col space-y-3">
              <li><Link href="/" className="block font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link></li>
              <li><Link href="#hizmetler" className="block font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Hizmetler</Link></li>
              <li><Link href="#hakkimda" className="block font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Hakkımda</Link></li>
              <li><Link href="#iletisim" className="block font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>İletişim</Link></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-light-blue to-light-purple py-12 sm:py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">İstanbul Başakşehir'de Çocuk ve Ergen Psikoloğu Rabia Bakıcı</h1>
            <p className="text-base sm:text-lg mb-8">Oyun terapisi ve çocuk odaklı yaklaşımlarla çocuğunuzun sağlıklı gelişimine destek oluyoruz.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://wa.me/905452855283?text=Merhaba%2C%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn-primary text-center">Randevu Al</a>
              <a href="https://wa.me/905452855283?text=Merhaba%2C%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">Bilgi Al</a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 rounded-kiddy shadow-kiddy overflow-hidden bg-white">
              <Image
                src="/images/family.jpg"
                alt="İstanbul Başakşehir'de çocuk psikoloğu Rabia Bakıcı danışmanlık hizmetleri - Aile ve çocuk görseli"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                draggable="false"
                onCopy={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Psikolog Rabia Bakıcı - Uzman Psikolojik Danışmanlık Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <article className="bg-light-yellow rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4" aria-hidden="true">🎮</div>
              <h3 className="text-xl font-bold mb-3">Oyun Terapisi</h3>
              <p>Çocukların duygusal ve davranışsal sorunlarını oyun yoluyla ifade etmelerine ve çözüm bulmalarına yardımcı oluyoruz.</p>
            </article>
            
            {/* Service Card 2 */}
            <article className="bg-light-pink rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4" aria-hidden="true">🧠</div>
              <h3 className="text-xl font-bold mb-3">Psikolojik Değerlendirme</h3>
              <p>Çocuğunuzun gelişimsel ihtiyaçlarını belirlemek için kapsamlı psikolojik değerlendirmeler yapıyoruz.</p>
            </article>
            
            {/* Service Card 3 */}
            <article className="bg-light-green rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4" aria-hidden="true">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3">Aile Danışmanlığı</h3>
              <p>Çocuğunuzun gelişiminde sizi desteklemek için aile danışmanlığı hizmeti sunuyoruz.</p>
            </article>
            
            {/* Service Card 4 */}
            <article className="bg-light-purple rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4" aria-hidden="true">📚</div>
              <h3 className="text-xl font-bold mb-3">Eğitim Danışmanlığı</h3>
              <p>Çocuğunuzun eğitim hayatında karşılaştığı zorlukları aşması için destek sağlıyoruz.</p>
            </article>
            
            {/* Service Card 5 */}
            <article className="bg-light-blue rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4" aria-hidden="true">😰</div>
              <h3 className="text-xl font-bold mb-3">Kaygı Terapisi</h3>
              <p>Çocuk ve ergenlerin yaşadığı kaygı sorunlarıyla baş etmesine yardımcı oluyoruz.</p>
            </article>
            
            {/* Service Card 6 */}
            <article className="bg-light-yellow rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
              <h3 className="text-xl font-bold mb-3">Sosyal Beceri Gelişimi</h3>
              <p>Çocukların sosyal becerilerini geliştirerek akran ilişkilerinde başarılı olmalarını sağlıyoruz.</p>
            </article>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="hakkimda" className="py-16 bg-light-pink">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/images/rabiabakici.jpg"
                alt="Psikolog Rabia Bakıcı - İstanbul Başakşehir'de çocuk ve ergen psikoloğu"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 256px"
                draggable="false"
                onCopy={(e) => e.preventDefault()}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">Psikolog Rabia Bakıcı Kimdir?</h2>
            <p className="text-lg mb-4">
              Merhaba, ben Psikolog Rabia Bakıcı. Çocuk ve ergen psikolojisi alanında 5 yılı aşkın deneyime sahibim.
            </p>
            <p className="text-lg mb-4">
              Bakü Devlet Üniversitesi&apos;nden mezun olduktan sonra, İstanbul Esenyurt Üniversitesi&apos;nde Klinik Psikoloji yüksek lisansımı tamamladım. Uzmanlık alanım oyun terapisi ve çocuklarda davranış problemleridir.
            </p>
            <p className="text-lg mb-4">
              Her çocuğun biricik olduğuna inanıyor ve terapiyi çocuğun ihtiyaçlarına göre şekillendiriyorum.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Danışanlarımızın Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <article className="bg-light-blue rounded-kiddy shadow-kiddy p-6">
              <div className="flex items-center mb-4">
                <div className="text-warning text-xl" aria-label="5 üzerinden 5 yıldız">★★★★★</div>
              </div>
              <blockquote className="italic mb-4">&quot;Çocuğumuzun kaygı sorunlarıyla başa çıkmasında çok yardımcı oldu. Artık çok daha mutlu ve özgüvenli.&quot;</blockquote>
              <p className="font-bold">- Ayşe Y., Anne</p>
            </article>
            
            {/* Testimonial 2 */}
            <article className="bg-light-yellow rounded-kiddy shadow-kiddy p-6">
              <div className="flex items-center mb-4">
                <div className="text-warning text-xl" aria-label="5 üzerinden 5 yıldız">★★★★★</div>
              </div>
              <blockquote className="italic mb-4">&quot;Oğlumun dikkat eksikliği sorunu için başvurduk. Hem bize hem de oğlumuza çok destek oldu.&quot;</blockquote>
              <p className="font-bold">- Mehmet K., Baba</p>
            </article>
            
            {/* Testimonial 3 */}
            <article className="bg-light-green rounded-kiddy shadow-kiddy p-6">
              <div className="flex items-center mb-4">
                <div className="text-warning text-xl" aria-label="5 üzerinden 5 yıldız">★★★★★</div>
              </div>
              <blockquote className="italic mb-4">&quot;Kızımın okul fobisini aşmasında büyük rol oynadı. Profesyonel yaklaşımı için teşekkür ederiz.&quot;</blockquote>
              <p className="font-bold">- Zeynep T., Anne</p>
            </article>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="iletisim" className="py-12 sm:py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">İstanbul Başakşehir'de Psikolog - İletişim Bilgilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Bize Ulaşın</h3>
              <address className="not-italic">
                <p className="flex items-center mb-4 text-base sm:text-lg">
                  <span className="mr-2 text-2xl" aria-hidden="true">📍</span> 
                  İstanbul, Başakşehir
                </p>
                <p className="flex items-center mb-4 text-base sm:text-lg">
                  <span className="mr-2 text-2xl" aria-hidden="true">📞</span>
                  <a href="tel:+905452855283" className="hover:text-primary transition-colors">
                    +90 (545) 285 52 83
                  </a>
                </p>
                <p className="flex items-center mb-4 text-base sm:text-lg">
                  <span className="mr-2 text-2xl" aria-hidden="true">✉️</span>
                  <a href="mailto:psikolograbiabakici@gmail.com" className="hover:text-primary transition-colors">
                    psikolograbiabakici@gmail.com
                  </a>
                </p>
                <p className="flex items-center mb-8 text-base sm:text-lg">
                  <span className="mr-2 text-2xl" aria-hidden="true">⏰</span>
                  Pazartesi - Salı: 12:00 - 19:00
                </p>
              </address>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://www.instagram.com/psikolograbiabakici?igsh=MWZhZ253NDc3cjhnaQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button flex items-center instagram-gradient text-white py-2 px-4 rounded-full shadow-md" 
                  aria-label="Instagram sayfamızı ziyaret edin">
                  <span className="text-2xl mr-2" aria-hidden="true">📸</span>
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/rabia-bak%C4%B1c%C4%B1-897664276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button flex items-center linkedin-color text-white py-2 px-4 rounded-full shadow-md" 
                  aria-label="LinkedIn profilimizi ziyaret edin">
                  <span className="text-2xl mr-2" aria-hidden="true">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://wa.me/905452855283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button flex items-center whatsapp-color text-white py-2 px-4 rounded-full shadow-md" 
                  aria-label="WhatsApp üzerinden bizimle iletişime geçin">
                  <span className="text-2xl mr-2" aria-hidden="true">📱</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <form className="bg-white rounded-kiddy shadow-kiddy p-6" aria-label="İletişim Formu">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">Ad Soyad</label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Adınız Soyadınız"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">E-posta</label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="ornek@mail.com"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-medium">Telefon</label>
                  <input 
                    id="phone"
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+90 (___) ___ __ __"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">Mesajınız</label>
                  <textarea 
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                    placeholder="Mesajınızı buraya yazın..."
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <a 
                  href="https://wa.me/905452855283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full block text-center"
                  aria-label="WhatsApp üzerinden iletişime geç"
                >
                  WhatsApp&apos;tan İletişime Geç
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#f0ede9] text-gray-800 py-6 sm:py-8">
        <div className="container mx-auto px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 md:mb-2">
              <Link href="/">
                <div className="relative w-10 h-10 overflow-visible">
                  <Image
                    src="/images/logo.jpg"
                    alt="Psikolog Rabia Bakıcı Logo"
                    fill
                    className="object-scale-down transform scale-120 origin-left"
                    sizes="40px"
                    draggable="false"
                    onCopy={(e) => e.preventDefault()}
                  />
                </div>
              </Link>
              <h2 className="text-lg sm:text-xl font-bold">Psikolog Rabia Bakıcı</h2>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.</p>
              <div className="flex space-x-6 mt-3 justify-center md:justify-end">
                <a href="https://www.instagram.com/psikolograbiabakici?igsh=MWZhZ253NDc3cjhnaQ==" 
                  title="Instagram" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button text-xl sm:text-2xl hover:opacity-80 transition-opacity text-gray-800"
                  aria-label="Instagram sayfamız">
                  <span className="flex flex-col items-center">
                    <span aria-hidden="true">📸</span>
                    <span className="text-xs">Instagram</span>
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/rabia-bak%C4%B1c%C4%B1-897664276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  title="LinkedIn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button text-xl sm:text-2xl hover:opacity-80 transition-opacity text-gray-800"
                  aria-label="LinkedIn profilimiz">
                  <span className="flex flex-col items-center">
                    <span aria-hidden="true">💼</span>
                    <span className="text-xs">LinkedIn</span>
                  </span>
                </a>
                <a href="https://wa.me/905452855283" 
                  title="WhatsApp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button text-xl sm:text-2xl hover:opacity-80 transition-opacity text-gray-800"
                  aria-label="WhatsApp üzerinden iletişim">
                  <span className="flex flex-col items-center">
                    <span aria-hidden="true">📱</span>
                    <span className="text-xs">WhatsApp</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Başa Dön Butonu */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-110 pulse"
          aria-label="Sayfanın başına dön"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
