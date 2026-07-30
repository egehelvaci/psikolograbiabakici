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
  
  // SEO ve Performans Optimizasyonları
  compress: true,
  poweredByHeader: false,
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers for SEO and Security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  // Bölüm URL'leri rewrite yerine 301 ile ana sayfaya yönlendirilir;
  // rewrite aynı içeriği birden çok URL'de sunarak duplicate content oluşturuyordu.
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hizmetler',
        destination: '/#hizmetler',
        permanent: true,
      },
      {
        source: '/hakkimda',
        destination: '/#hakkimda',
        permanent: true,
      },
      {
        source: '/iletisim',
        destination: '/#iletisim',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 