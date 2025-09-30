import he from "he";

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
  }));
}
