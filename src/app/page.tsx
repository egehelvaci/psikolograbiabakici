import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl text-primary">🧩</span>
            <h1 className="text-2xl font-bold text-primary">Psikolog Rabia Bakıcı</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="font-medium hover:text-primary transition-colors">Ana Sayfa</Link></li>
              <li><Link href="#hizmetler" className="font-medium hover:text-primary transition-colors">Hizmetler</Link></li>
              <li><Link href="#hakkimda" className="font-medium hover:text-primary transition-colors">Hakkımda</Link></li>
              <li><Link href="#iletisim" className="font-medium hover:text-primary transition-colors">İletişim</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-light-blue to-light-purple py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Çocuğunuzun Gelişiminde Yanınızdayız</h2>
            <p className="text-lg mb-8">Oyun terapisi ve çocuk odaklı yaklaşımlarla çocuğunuzun sağlıklı gelişimine destek oluyoruz.</p>
            <div className="flex space-x-4">
              <a href="https://wa.me/905452855283?text=Merhaba%2C%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn-primary">Randevu Al</a>
              <a href="https://wa.me/905452855283?text=Merhaba%2C%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn-secondary">Bilgi Al</a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80 rounded-kiddy shadow-kiddy overflow-hidden bg-white">
              <Image
                src="/images/family.jpg"
                alt="Aile ve çocuk görseli"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-light-yellow rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3">Oyun Terapisi</h3>
              <p>Çocukların duygusal ve davranışsal sorunlarını oyun yoluyla ifade etmelerine ve çözüm bulmalarına yardımcı oluyoruz.</p>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-light-pink rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Psikolojik Değerlendirme</h3>
              <p>Çocuğunuzun gelişimsel ihtiyaçlarını belirlemek için kapsamlı psikolojik değerlendirmeler yapıyoruz.</p>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-light-green rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3">Aile Danışmanlığı</h3>
              <p>Çocuğunuzun gelişiminde sizi desteklemek için aile danışmanlığı hizmeti sunuyoruz.</p>
            </div>
            
            {/* Service Card 4 */}
            <div className="bg-light-purple rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Eğitim Danışmanlığı</h3>
              <p>Çocuğunuzun eğitim hayatında karşılaştığı zorlukları aşması için destek sağlıyoruz.</p>
            </div>
            
            {/* Service Card 5 */}
            <div className="bg-light-blue rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-3">Kaygı Terapisi</h3>
              <p>Çocuk ve ergenlerin yaşadığı kaygı sorunlarıyla baş etmesine yardımcı oluyoruz.</p>
            </div>
            
            {/* Service Card 6 */}
            <div className="bg-light-yellow rounded-kiddy shadow-kiddy p-6 transition-transform hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Sosyal Beceri Gelişimi</h3>
              <p>Çocukların sosyal becerilerini geliştirerek akran ilişkilerinde başarılı olmalarını sağlıyoruz.</p>
            </div>
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
                alt="Psikolog Rabia Bakıcı"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">Hakkımda</h2>
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
          <h2 className="text-4xl font-bold text-center mb-12">Danışan Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-light-blue rounded-kiddy shadow-kiddy p-6">
              <div className="flex items-center mb-4">
                <div className="text-warning text-xl">★★★★★</div>
              </div>
              <p className="italic mb-4">&quot;Çocuğumuzun kaygı sorunlarıyla başa çıkmasında çok yardımcı oldu. Artık çok daha mutlu ve özgüvenli.&quot;</p>
              <p className="font-bold">- Ayşe Y., Anne</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-light-yellow rounded-kiddy shadow-kiddy p-6">
              <div className="flex items-center mb-4">
                <div className="text-warning text-xl">★★★★★</div>
              </div>
              <p className="italic mb-4">&quot;Oğlumun dikkat eksikliği sorunu için başvurduk. Hem bize hem de oğlumuza çok destek oldu.&quot;</p>
              <p className="font-bold">- Mehmet K., Baba</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-light-green rounded-kiddy shadow-kiddy p-6">
              <div className="flex items-center mb-4">
                <div className="text-warning text-xl">★★★★★</div>
              </div>
              <p className="italic mb-4">&quot;Kızımın okul fobisini aşmasında büyük rol oynadı. Profesyonel yaklaşımı için teşekkür ederiz.&quot;</p>
              <p className="font-bold">- Zeynep T., Anne</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="iletisim" className="py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">İletişim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bize Ulaşın</h3>
              <p className="flex items-center mb-4">
                <span className="mr-2">📍</span> 
                İstanbul, Başakşehir
              </p>
              <p className="flex items-center mb-4">
                <span className="mr-2">📞</span>
                +90 (545) 285 52 83
              </p>
              <p className="flex items-center mb-4">
                <span className="mr-2">✉️</span>
                psikolograbiabakici@gmail.com
              </p>
              <p className="flex items-center mb-8">
                <span className="mr-2">⏰</span>
                Pazartesi - Cumartesi: 09:00 - 18:00
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/psikolograbiabakici?igsh=MWZhZ253NDc3cjhnaQ==" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">📸</a>
                <a href="https://www.linkedin.com/in/rabia-bak%C4%B1c%C4%B1-897664276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">💼</a>
                <a href="https://wa.me/905452855283" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">📱</a>
              </div>
            </div>
            <div>
              <form className="bg-white rounded-kiddy shadow-kiddy p-6">
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Ad Soyad</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">E-posta</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="ornek@mail.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Telefon</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+90 (___) ___ __ __"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Mesajınız</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>
                <a 
                  href="https://wa.me/905452855283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full block text-center"
                >
                  WhatsApp&apos;tan İletişime Geç
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-3xl">🧩</span>
              <h2 className="text-xl font-bold">Psikolog Rabia Bakıcı</h2>
            </div>
            <div>
              <p>&copy; 2023 Tüm Hakları Saklıdır.</p>
              <div className="flex space-x-4 mt-3 justify-center md:justify-end">
                <a href="https://www.instagram.com/psikolograbiabakici?igsh=MWZhZ253NDc3cjhnaQ==" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-80 transition-opacity">📸</a>
                <a href="https://www.linkedin.com/in/rabia-bak%C4%B1c%C4%B1-897664276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-80 transition-opacity">💼</a>
                <a href="https://wa.me/905452855283" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-80 transition-opacity">📱</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
