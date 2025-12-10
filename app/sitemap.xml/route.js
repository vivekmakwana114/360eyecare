import { getServerSideSitemap } from "next-sitemap";
import axios from "axios";

// Get the site URL from environment variables or use the production URL as fallback
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.360eyecare.ca";
const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_BLOG_BASE_URL ||
  `${SITE_URL}/dashboard/wp-json/wp/v2`;


// Ensure the URL has the correct format (no trailing slash)
const formatUrl = (url) => {
  if (url.startsWith("http")) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  }
  const baseUrl = `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

// Helper function to create page objects with consistent structure
const createPage = (url, options = {}) => ({
  url,
  changefreq: options.changefreq || "weekly",
  priority: options.priority || 0.7,
  lastmod: new Date().toISOString(),
});

// Static pages organized by category
const staticPages = [
  // Homepage
  createPage("/", { changefreq: "daily", priority: 1.0 }),

  // Main navigation
  createPage("/about-us", { priority: 0.8 }),
  // createPage("/services", { priority: 0.8 }),
  // createPage("/contact", { priority: 0.8 }),
  createPage("/blog", { changefreq: "daily", priority: 0.9 }),
  createPage("/shop", { priority: 0.9 }),

  // Services
  createPage("/book-eye-consultation-yorkville", { priority: 0.9 }),
  createPage("/book-eye-exam", { priority: 0.8 }),
  createPage("/eye-exams", { priority: 0.8 }),
  createPage("/pediatric-eye-exams", { priority: 0.8 }),
  createPage("/contact-lenses-faq", { priority: 0.8 }),
  createPage("/laser-vision-correction", { priority: 0.8 }),
  createPage("/myopia-control-clinic", { priority: 0.8 }),
  createPage("/orthokeratology-treatment", { priority: 0.8 }),
  createPage("/advanced-diagnostics-eye-exams", { priority: 0.8 }),
  createPage(
    "intense-pulsed-light-ipl-and-radio-frequency-rf-dry-eye-treatment"
  ),
  createPage("dry-eye-syndrome-keratograph-i-pen"),

  // Products
  createPage("/eye-glasses", { priority: 0.8 }),
  createPage("/prescription-lenses", { priority: 0.8 }),
  createPage("/custom-lenses", { priority: 0.8 }),
  createPage("/custom-lenses-toronto", { priority: 0.8 }),
  createPage("/maui-jim-lens-technology", { priority: 0.7 }),
  createPage("/miyosmart", { priority: 0.7 }),
  createPage("/sunglasses", { priority: 0.8 }),

  // Locations
  createPage("/find-eye-doctor-near-me", { priority: 0.8 }),
  createPage("/toronto-beaches-optometrist", { priority: 0.8 }),
  createPage("/toronto-rosedale-optometrist", { priority: 0.8 }),
  createPage("/contact-address-directions", { priority: 0.7 }),

  // Patient info
  createPage("/direct-billing", { priority: 0.7 }),
  createPage("/payment-plans", { priority: 0.7 }),
  createPage("/virtual-consult", { priority: 0.7 }),
  createPage("/virtual-consult-consent-form", { priority: 0.5 }),
  createPage("/virtual-shopping", { priority: 0.6 }),

  // Team Members
  createPage("/team-members/dr-sam-baraam", { priority: 0.7 }),
  createPage("/team-members/dr-anita-sritharan", { priority: 0.7 }),
  createPage("/team-members/dr-gina-chen", { priority: 0.7 }),
  createPage("/team-members/dr-harmandeep-gill", { priority: 0.7 }),
  createPage("/team-members/dr-alina-shahid", { priority: 0.7 }),
  createPage("/team-members/dr-deepinder-swatch", { priority: 0.7 }),

  // Eye health
  createPage("/common-eye-conditions", { priority: 0.7 }),
  createPage("/eye-emergencies", { priority: 0.8 }),
  createPage("/selection-guide", { priority: 0.6 }),

  // Company
  createPage("/optometrists", { priority: 0.7 }),
  createPage("/giving-back", { priority: 0.5 }),
  createPage("/career-opportunities", { priority: 0.5 }),

  // Legal
  createPage("/privacy-policy", { priority: 0.3 }),
  createPage("/terms-conditions", { priority: 0.3 }),
  createPage("/shipping-return-policy", { priority: 0.3 }),

  // System pages
  createPage("/thank-you", { priority: 0.1 }),
];

// Fetch all WordPress posts with pagination
async function getAllWordPressPosts() {
  let allPosts = [];
  let page = 1;
  const perPage = 100;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get(`${WORDPRESS_API_URL}/posts`, {
        params: {
          per_page: perPage,
          page: page,
          _fields: "slug,modified,date,modified_gmt",
          status: "publish",
          orderby: "modified",
          order: "desc",
        },
      });

      const posts = response.data.map((post) => {
        // Ensure the slug is properly formatted
        const slug = post.slug.startsWith("/")
          ? post.slug.substring(1)
          : post.slug;

        return {
          // Use the direct slug without /blog/ prefix since your route is /[slug]
          loc: formatUrl(`/${slug}`),
          lastmod: new Date(
            post.modified_gmt || post.modified || post.date
          ).toISOString(),
          changefreq: "weekly",
          priority: 0.8, // Slightly higher priority for individual posts
        };
      });

      allPosts = [...allPosts, ...posts];

      // Check if there are more posts
      const totalPages = response.headers["x-wp-totalpages"] || 1;
      if (page < parseInt(totalPages)) {
        page++;
      } else {
        hasMore = false;
      }
    }
    return allPosts;
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return [];
  }
}

export async function GET() {
  try {
    // Get all WordPress posts
    const wordPressPosts = await getAllWordPressPosts();

    // Combine static pages with WordPress posts
    const allUrls = [
      ...staticPages.map((page) => ({
        loc: formatUrl(page.url),
        lastmod: new Date().toISOString(),
        changefreq: page.changefreq || "weekly",
        priority: page.priority || 0.5,
      })),
      ...wordPressPosts,
    ];

    console.log("Generated Sitemap URLs:", allUrls.map((u) => u.loc));


    // Generate the sitemap
    return getServerSideSitemap(allUrls);
  } catch (e) {
    console.error("Error generating sitemap:", e);
    // Return a minimal sitemap in case of error
    return getServerSideSitemap([
      {
        loc: formatUrl("/"),
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 1.0,
      },
    ]);
  }
}

// Set revalidation time (in seconds) - this will regenerate the sitemap at most once per hour
export const revalidate = 3600; // 1 hour
