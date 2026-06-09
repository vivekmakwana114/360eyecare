import { getServerSideSitemap } from "next-sitemap";
import axios from "axios";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.360eyecare.ca"
).replace(/\/$/, "");

const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_BLOG_BASE_URL ||
  `${SITE_URL}/dashboard/wp-json/wp/v2`;

// Static pages — URLs must exactly match the canonical declared in each page's metadata.
// Trailing slashes are included here because every static page's canonical uses them.
const staticPages = [
  // Homepage
  { url: `${SITE_URL}/`,                                    changefreq: "daily",  priority: 1.0 },

  // Core navigation
  { url: `${SITE_URL}/about-us/`,                           changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/blog/`,                               changefreq: "daily",  priority: 0.9 },
  { url: `${SITE_URL}/optometrists/`,                       changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/our-team/`,                           changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/faq/`,                                changefreq: "weekly", priority: 0.6 },

  // Eye care services
  { url: `${SITE_URL}/eye-exams/`,                          changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/pediatric-eye-exams/`,                changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/laser-vision-correction/`,            changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/myopia-control-clinic/`,              changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/orthokeratology-treatment/`,          changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/advanced-diagnostics-eye-exams/`,     changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/dry-eye-syndrome-keratograph-i-pen/`, changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/intense-pulsed-light-ipl-and-radio-frequency-rf-dry-eye-treatment/`, changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/common-eye-conditions/`,              changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/eye-emergencies/`,                    changefreq: "weekly", priority: 0.8 },

  // Eyewear & products
  { url: `${SITE_URL}/eye-glasses/`,                        changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/contact-lenses-faq/`,                 changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/prescription-lenses/`,                changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/custom-lenses/`,                      changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/custom-lenses-toronto/`,              changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/sunglasses-catalog/`,                 changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/maui-jim-lens-technology/`,           changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/miyosmart/`,                          changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/buying-eyeglasses-selection-guide/`,  changefreq: "weekly", priority: 0.6 },

  // Locations
  { url: `${SITE_URL}/toronto-beaches-optometrist/`,        changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/toronto-rosedale-optometrist/`,       changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/find-eye-doctor-near-me/`,            changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/contact-address-directions/`,         changefreq: "weekly", priority: 0.7 },

  // Booking & patient info
  { url: `${SITE_URL}/book-eye-exam/`,                      changefreq: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/direct-billing/`,                     changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/payment-plans/`,                      changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/virtual-consult/`,                    changefreq: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/virtual-shopping/`,                   changefreq: "weekly", priority: 0.6 },

  // Team members
  { url: `${SITE_URL}/team-members/dr-sam-baraam/`,         changefreq: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/team-members/dr-anita-sritharan/`,    changefreq: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/team-members/dr-gina-chen/`,          changefreq: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/team-members/dr-harmandeep-gill/`,    changefreq: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/team-members/dr-alina-shahid/`,       changefreq: "monthly", priority: 0.7 },

  // Company
  { url: `${SITE_URL}/giving-back/`,                        changefreq: "monthly", priority: 0.5 },
  { url: `${SITE_URL}/career-opportunities/`,               changefreq: "monthly", priority: 0.5 },

  // Legal
  { url: `${SITE_URL}/privacy-policy/`,                     changefreq: "yearly",  priority: 0.3 },
  { url: `${SITE_URL}/terms-conditions/`,                   changefreq: "yearly",  priority: 0.3 },
  { url: `${SITE_URL}/shipping-return-policy/`,             changefreq: "yearly",  priority: 0.3 },

  // Excluded (not indexed):
  // /thank-you                    — marketing funnel page
  // /virtual-consult-consent-form — form page
  // /book-eye-consultation-yorkville — marketing landing page
  // /shop                         — embedded widget page
];

// Paths owned by static Next.js pages — used to deduplicate WordPress post slugs
// so the same path never appears twice in the sitemap.
const staticPaths = new Set(
  staticPages.map((p) => new URL(p.url).pathname.replace(/\/$/, ""))
);

async function getAllWordPressPosts() {
  let allPosts = [];
  let page = 1;
  const perPage = 100;

  try {
    while (true) {
      const response = await axios.get(`${WORDPRESS_API_URL}/posts`, {
        params: {
          per_page: perPage,
          page,
          _fields: "slug,modified,date,modified_gmt",
          status: "publish",
          orderby: "modified",
          order: "desc",
        },
      });

      const posts = response.data;
      if (!posts.length) break;

      for (const post of posts) {
        const slug = post.slug.startsWith("/") ? post.slug.slice(1) : post.slug;
        const path = `/${slug}`;

        // Skip if a static Next.js page already owns this path
        if (staticPaths.has(path)) continue;

        // Blog post canonicals use no trailing slash — matches cleanCanonical in page.jsx
        allPosts.push({
          loc: `${SITE_URL}/${slug}`,
          lastmod: new Date(
            post.modified_gmt || post.modified || post.date
          ).toISOString(),
          changefreq: "weekly",
          priority: 0.8,
        });
      }

      const totalPages = parseInt(response.headers["x-wp-totalpages"] || "1");
      if (page >= totalPages) break;
      page++;
    }
  } catch (error) {
    console.error("Sitemap: error fetching WordPress posts:", error.message);
  }

  return allPosts;
}

export async function GET() {
  try {
    const wordPressPosts = await getAllWordPressPosts();
    const lastmod = new Date().toISOString();

    const allUrls = [
      ...staticPages.map((p) => ({
        loc: p.url,
        lastmod,
        changefreq: p.changefreq,
        priority: p.priority,
      })),
      ...wordPressPosts,
    ];

    return getServerSideSitemap(allUrls);
  } catch (e) {
    console.error("Sitemap: generation failed:", e.message);
    return getServerSideSitemap([
      { loc: `${SITE_URL}/`, lastmod: new Date().toISOString(), changefreq: "daily", priority: 1.0 },
    ]);
  }
}

export const revalidate = 3600;
