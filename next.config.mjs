/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.360eyecare.ca', '360eyecare.snag-zilla.com', 'lh3.googleusercontent.com'],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
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
