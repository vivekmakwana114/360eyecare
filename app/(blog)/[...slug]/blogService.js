import he from "he";

const cleanYoastData = (yoastData) => {
  if (!yoastData) return yoastData;

  return {
    ...yoastData,
    // Remove /dashboard/ from canonical URL
    canonical: yoastData.canonical?.replace(/\/dashboard\//g, "/"),
    // Remove /dashboard/ from og_url
    og_url: yoastData.og_url?.replace(/\/dashboard\//g, "/"),
    // Clean article publisher URL if it exists
    article_publisher: yoastData.article_publisher?.replace(/\/dashboard\//g, "/"),
    // If there's a schema with mainEntityOfPage, clean it too
    schema: yoastData.schema
      ? {
          ...yoastData.schema,
          "@graph": yoastData.schema["@graph"]?.map((item) => ({
            ...item,
            url: item.url?.replace(/\/dashboard\//g, "/"),
            "@id": item["@id"]?.replace(/\/dashboard\//g, "/"),
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

  // Clean the posts data
  return posts.map((post) => ({
    ...post,
    title: {
      ...post.title,
      rendered: he.decode(post.title.rendered || ""),
    },
    content: {
      ...post.content,
      rendered: he.decode(post.content.rendered || ""),
    },
    excerpt: {
      ...post.excerpt,
      rendered: he.decode(post.excerpt.rendered || ""),
    },
    yoast_head_json: cleanYoastData(post.yoast_head_json),
  }));
}
