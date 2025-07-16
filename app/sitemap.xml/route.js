import { getServerSideSitemap } from "next-sitemap";
import axios from "axios";

// Get the site URL from environment variables or use the production URL as fallback
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.360eyecare.ca";
const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_BLOG_BASE_URL ||
  `${SITE_URL}/dashboard/wp-json/wp/v2`;

// Ensure the URL has the correct format
const formatUrl = (url) => {
  if (url.startsWith("http")) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

// Static pages that should be included in the sitemap
const staticPages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "weekly", priority: 0.7 },
  { url: "/blog", changefreq: "daily", priority: 0.9 },
  { url: "/book-eye-exam", changefreq: "weekly", priority: 0.8 },
  { url: "/contact-address-directions", changefreq: "weekly", priority: 0.7 },
  { url: "/direct-billing", changefreq: "weekly", priority: 0.7 },
  { url: "/find-eye-doctor-near-me", changefreq: "weekly", priority: 0.7 },
  { url: "/virtual-consult", changefreq: "weekly", priority: 0.7 },
  { url: "/virtual-consult-consent-form", changefreq: "weekly", priority: 0.7 },
  { url: "/payment-plans", changefreq: "weekly", priority: 0.7 },
  { url: "/common-eye-conditions", changefreq: "weekly", priority: 0.7 },
  { url: "/eye-emergencies", changefreq: "weekly", priority: 0.7 },
  {
    url: "/intense-pulsed-light-ipl-and-radio-frequency-rf-dry-eye-treatment",
    changefreq: "weekly",
    priority: 0.7,
  },
  { url: "/laser-vision-correction", changefreq: "weekly", priority: 0.7 },
  { url: "/myopia-control-clinic", changefreq: "weekly", priority: 0.7 },
  {
    url: "/dry-eye-syndrome-keratograph-i-pen",
    changefreq: "weekly",
    priority: 0.7,
  },
  { url: "/orthokeratology-treatment", changefreq: "weekly", priority: 0.7 },
  { url: "/contact-lenses-faq", changefreq: "weekly", priority: 0.7 },
  { url: "/pediatric-eye-exams", changefreq: "weekly", priority: 0.7 },
  {
    url: "/advanced-diagnostics-eye-exams",
    changefreq: "weekly",
    priority: 0.7,
  },
  { url: "/custom-lenses-toronto", changefreq: "weekly", priority: 0.7 },
  { url: "/custom-lenses", changefreq: "weekly", priority: 0.7 },
  { url: "/eye-glasses", changefreq: "weekly", priority: 0.7 },
  { url: "/maui-jim-lens-technology", changefreq: "weekly", priority: 0.7 },
  { url: "/prescription-lenses", changefreq: "weekly", priority: 0.7 },
  { url: "/miyosmart", changefreq: "weekly", priority: 0.7 },
  { url: "/virtual-shopping", changefreq: "weekly", priority: 0.7 },
  { url: "/eye-exams", changefreq: "weekly", priority: 0.7 },
  { url: "/selection-guide", changefreq: "weekly", priority: 0.7 },
  { url: "/toronto-beaches-optometrist", changefreq: "weekly", priority: 0.7 },
  { url: "/shipping-return-policy", changefreq: "weekly", priority: 0.5 },
  { url: "/terms-conditions", changefreq: "weekly", priority: 0.5 },
  { url: "/toronto-rosedale-optometrist", changefreq: "weekly", priority: 0.7 },
  { url: "/shop", changefreq: "weekly", priority: 0.8 },
  { url: "/privacy-policy", changefreq: "weekly", priority: 0.5 },
  { url: "/giving-back", changefreq: "weekly", priority: 0.5 },
  { url: "/optometrists", changefreq: "weekly", priority: 0.7 },
  { url: "/career-opportunities", changefreq: "weekly", priority: 0.5 },
  { url: "/sunglasses", changefreq: "weekly", priority: 0.8 },
  { url: "/about-us", changefreq: "weekly", priority: 0.8 },
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
