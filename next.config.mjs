/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "www.360eyecare.ca",
    //   "lh3.googleusercontent.com",
    //   "secure.gravatar.com",
    // ],
    // formats: ["image/avif", "image/webp"],
    // deviceSizes: [640, 750, 828, 1080],
    // imageSizes: [16, 32, 48, 64, 96],
    // minimumCacheTTL: 31536000,
    // dangerouslyAllowSVG: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "react-icons"],
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB", "INP"],
    nextScriptWorkers: true,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async redirects() {
    return [
      // Redirect WordPress dashboard URLs to clean blog URLs
      {
        source: '/dashboard/blog/:slug',
        destination: '/:slug',
        permanent: true,
      },
      // // Redirect any /dashboard/ routes to clean URLs
      // {
      //   source: '/dashboard/:slug((?!wp-json|wp-admin|wp-content).*)',
      //   destination: '/:slug*',
      //   permanent: true,
      // },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
