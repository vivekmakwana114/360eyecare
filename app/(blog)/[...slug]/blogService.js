import he from "he";

const stripDashboard = (url) => url?.replace(/\/dashboard\//g, "/");

// Only strip /dashboard/ from href attributes — leaves img src untouched so
// images continue to load from /dashboard/wp-content/ until nginx is updated.
const stripDashboardHrefs = (html) =>
  html
    ?.replace(/href="\/dashboard\//g, 'href="/')
    .replace(
      /href="https?:\/\/(?:www\.)?360eyecare\.ca\/dashboard\//gi,
      'href="https://www.360eyecare.ca/',
    );

const cleanYoastData = (yoastData) => {
  if (!yoastData) return yoastData;

  return {
    ...yoastData,
    canonical: stripDashboard(yoastData.canonical),
    og_url: stripDashboard(yoastData.og_url),
    article_publisher: stripDashboard(yoastData.article_publisher),
    // og_image src kept as-is — served from /dashboard/wp-content/ until nginx proxies /wp-content/
    schema: yoastData.schema
      ? {
          ...yoastData.schema,
          "@graph": yoastData.schema["@graph"]?.map((item) => ({
            ...item,
            url: stripDashboard(item.url),
            "@id": stripDashboard(item["@id"]),
          })),
        }
      : undefined,
  };
};

export async function getPostBySlug(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BLOG_BASE_URL || "";
  const apiUrl = `${baseUrl}/posts?slug=${encodeURIComponent(slug)}`;

  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Failed to fetch post");

  const posts = await res.json();

  // Audit: log every field from WordPress that contains /dashboard/
  if (process.env.NODE_ENV === "development" && posts.length > 0) {
    const post = posts[0];
    const dashboardFields = {};
    const yoast = post.yoast_head_json || {};

    if (yoast.canonical?.includes("/dashboard/"))       dashboardFields.canonical       = yoast.canonical;
    if (yoast.og_url?.includes("/dashboard/"))          dashboardFields.og_url          = yoast.og_url;
    if (yoast.article_publisher?.includes("/dashboard/")) dashboardFields.article_publisher = yoast.article_publisher;
    if (yoast.twitter_image?.includes("/dashboard/"))   dashboardFields.twitter_image   = yoast.twitter_image;
    if (yoast.og_image?.some((i) => i.url?.includes("/dashboard/")))
      dashboardFields.og_image = yoast.og_image.map((i) => i.url);
    if (post.content?.rendered?.includes("/dashboard/"))
      dashboardFields.content_dashboard_count =
        (post.content.rendered.match(/\/dashboard\//g) || []).length + " occurrences";
    if (post.excerpt?.rendered?.includes("/dashboard/"))
      dashboardFields.excerpt_dashboard_count =
        (post.excerpt.rendered.match(/\/dashboard\//g) || []).length + " occurrences";

    if (Object.keys(dashboardFields).length > 0) {
      console.log("[WP /dashboard/ audit] slug:", post.slug, dashboardFields);
    } else {
      console.log("[WP /dashboard/ audit] slug:", post.slug, "— no /dashboard/ URLs found");
    }
  }

  // Clean the posts data
  return posts.map((post) => ({
    ...post,
    title: {
      ...post.title,
      rendered: he.decode(post.title.rendered || ""),
    },
    content: {
      ...post.content,
      rendered: stripDashboardHrefs(he.decode(post.content.rendered || "")),
    },
    excerpt: {
      ...post.excerpt,
      rendered: stripDashboardHrefs(he.decode(post.excerpt.rendered || "")),
    },
    yoast_head_json: cleanYoastData(post.yoast_head_json),
  }));
}
