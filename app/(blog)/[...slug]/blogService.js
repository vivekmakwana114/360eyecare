export async function getPostBySlug(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BLOG_BASE_URL || "";
  const apiUrl = `${baseUrl}/posts?slug=${encodeURIComponent(slug)}`;

  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Failed to fetch post");
  return await res.json();
}
