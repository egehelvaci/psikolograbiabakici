/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  // Üst dizindeki başıboş lockfile nedeniyle çalışma kökünün yanlış
  // algılanmasını önler (standalone dosya izlemesi için kritik).
  outputFileTracingRoot: __dirname,

  // Tek bir URL biçimi: sonda eğik çizgi kullanılmaz, canonical etiketler de
  // aynı biçimi kullanır. Böylece her sayfa için tek varyant 200 döner.
  trailingSlash: false,

  compress: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      // Görseller uzun süreli ve değişmez olarak önbelleğe alınır. Bu kural,
      // aşağıdaki genel kuralla çakışmaması için ayrı yolda tanımlıdır.
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path((?!images|_next).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Tercih edilen ana bilgisayar: www olmayan sürüm.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.psikolograbiabakici.com' }],
        destination: 'https://psikolograbiabakici.com/:path*',
        permanent: true,
      },

      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },

      // Eski tek sayfa yapısındaki bölüm adresleri artık gerçek sayfalar;
      // yalnızca yerini değiştiren eski adresler yönlendirilir.
      { source: '/yorumlar', destination: '/#yorumlar', permanent: true },
      { source: '/blog', destination: '/kaynaklar/makaleler', permanent: true },
      { source: '/blog/:slug', destination: '/kaynaklar/makaleler/:slug', permanent: true },
      { source: '/makaleler', destination: '/kaynaklar/makaleler', permanent: true },
      { source: '/sss', destination: '/kaynaklar/sikca-sorulan-sorular', permanent: true },
      { source: '/kvkk', destination: '/gizlilik-politikasi', permanent: true },
      { source: '/gizlilik', destination: '/gizlilik-politikasi', permanent: true },

      // Hizmet adlarının kök dizinde aranması durumunda doğru sayfaya taşır.
      { source: '/oyun-terapisi', destination: '/hizmetler/oyun-terapisi', permanent: true },
      { source: '/cocuk-psikologu', destination: '/hizmetler/cocuk-psikologu', permanent: true },
      { source: '/ergen-psikologu', destination: '/hizmetler/ergen-psikologu', permanent: true },
      {
        source: '/aile-danismanligi',
        destination: '/hizmetler/aile-ve-ebeveyn-danismanligi',
        permanent: true,
      },
      {
        source: '/psikolojik-degerlendirme',
        destination: '/hizmetler/psikolojik-degerlendirme',
        permanent: true,
      },
      {
        source: '/kaygi-terapisi',
        destination: '/hizmetler/cocuklarda-kaygi-terapisi',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
