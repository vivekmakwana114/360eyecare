/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Disable sitemap generation since we're using a dynamic route
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  
  // Keep the robots.txt configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.360eyecare.ca',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // Point to our dynamic sitemap route
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.360eyecare.ca'}/sitemap.xml`
    ],
  },
  // Disable output to prevent file conflicts
  outDir: '.next',
  exclude: ["/server-sitemap.xml", "/admin/*"],
};
