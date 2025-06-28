import BlogPostClient from "./BlogPostClient";
import { getPostBySlug } from "./blogService";

export async function generateMetadata({ params }) {
  try {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post || post.length === 0) {
      return {
        title: "Post Not Found",
        description: "This post doesn't exist or may have been removed.",
        openGraph: {
          title: "Post Not Found",
          description: "This post doesn't exist or may have been removed.",
          images: [],
        },
      };
    }

    const postData = post[0];
    const cleanExcerpt =
      postData.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "";
    const imageUrl = postData.yoast_head_json?.og_image?.[0]?.url || "";

    return {
      title: postData.title?.rendered || "Blog Post",
      description: cleanExcerpt,
      openGraph: {
        title: postData.title?.rendered || "Blog Post",
        description: cleanExcerpt,
        images: imageUrl
          ? [
              {
                url: imageUrl,
                alt: postData.title?.rendered || "Blog post image",
              },
            ]
          : [],
        // url: `https://yourdomain.com/blog/${slug}`,
        type: "article",
        article: {
          publishedTime: postData.date,
          modifiedTime: postData.modified,
          authors: [postData.yoast_head_json?.author || "360 Eyecare"],
          tags: postData.tags || [],
        },
      },
      twitter: {
        card: "summary_large_image",
        title: postData.title?.rendered || "Blog Post",
        description: cleanExcerpt,
        images: imageUrl ? [imageUrl] : [],
      },
    };
  } catch (error) {
    // console.error("Error generating metadata:", error);
    return {
      title: "Error Loading Post",
      description: "There was an error loading this post.",
      openGraph: {
        title: "Error Loading Post",
        description: "There was an error loading this post.",
        images: [],
      },
    };
  }
}

export default function BlogPostPage({ params, searchParams }) {
  return <BlogPostClient params={params} searchParams={searchParams} />;
}
