import BlogPostClient from "./BlogPostClient";
import { getPostBySlug } from "./blogService";
import { notFound } from "next/navigation";

// Helper function to clean URLs from dashboard path
const cleanUrl = (url) => {
  if (!url) return url;
  return url.replace(/\/dashboard\//g, "/");
};

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;

    // Validate slug structure - should not contain multiple segments
    if (Array.isArray(slug) && slug.length > 1) {
      return {
        title: "Page Not Found",
        description: "The page you are looking for does not exist.",
        openGraph: {
          title: "Page Not Found",
          description: "The page you are looking for does not exist.",
          images: [],
        },
      };
    }

    const post = await getPostBySlug(slug);

    if (!post || post.length === 0) {
      return {
        title: "Post Not Found",
        description: "The requested blog post was not found.",
        openGraph: {
          title: "Post Not Found",
          description: "The requested blog post was not found.",
          images: [],
        },
      };
    }

    const postData = post[0];
    let yoastData = postData.yoast_head_json || {};

    // Clean the slug and create canonical URL
    const cleanSlug = Array.isArray(slug) ? slug.join("/") : slug;
    const cleanCanonical = `https://360eyecare.ca/${cleanSlug}`;
    console.log(yoastData.og_url,"og_url");
    console.log(yoastData.canonical,"canonical");

    // CRITICAL: Clean Yoast data to remove dashboard URLs
    if (yoastData) {
      yoastData = {
        ...yoastData,
        // Remove dashboard from canonical
        canonical: cleanUrl(yoastData.canonical),
        // Clean OG URL
        og_url: cleanUrl(yoastData.og_url),
        // Clean article publisher URL
        article_publisher: cleanUrl(yoastData.article_publisher),
      };
    }

    // Extract Twitter data
    const twitterData = {
      card: yoastData.twitter_card || "summary_large_image",
      title: yoastData.twitter_title || yoastData.title,
      description: yoastData.twitter_description || yoastData.description,
      images: yoastData.twitter_image
        ? [{ url: yoastData.twitter_image }]
        : yoastData.og_image
        ? [{ url: yoastData.og_image[0]?.url }]
        : [],
      creator: yoastData.twitter_creator || "",
      site: yoastData.twitter_site || "",
    };

    // Extract article data
    const articleData = {
      publishedTime: yoastData.article_published_time,
      modifiedTime: yoastData.article_modified_time,
      authors: yoastData.author ? [yoastData.author] : [],
      tags: yoastData.schema?.article?.keywords || [],
      section: yoastData.schema?.article?.articleSection || [],
    };

    return {
      title: yoastData.title || "Blog Post",
      description: yoastData.description || "",
      alternates: {
        canonical: cleanCanonical,
      },
      openGraph: {
        title: yoastData.og_title || yoastData.title,
        description: yoastData.og_description || yoastData.description,
        url: cleanCanonical,
        siteName: yoastData.og_site_name || "360 Eyecare",
        images: yoastData.og_image
          ? yoastData.og_image.map((img) => ({
              url: img.url,
              width: img.width,
              height: img.height,
              alt: yoastData.og_title || yoastData.title,
            }))
          : [],
        locale: yoastData.og_locale || "en_US",
        type: yoastData.og_type || "article",
        article: articleData,
      },
      twitter: twitterData,
      authors: articleData.authors,
      publisher: yoastData.article_publisher
        ? { name: "360 Eyecare", url: yoastData.article_publisher }
        : undefined,
      robots: yoastData.robots
        ? {
            index: yoastData.robots.index === "index",
            follow: yoastData.robots.follow === "follow",
            nocache: yoastData.robots["max-snippet"] === "-1",
            googleBot: {
              index: yoastData.robots.index === "index",
              follow: yoastData.robots.follow === "follow",
              noimageindex: yoastData.robots["max-image-preview"] === "none",
              "max-video-preview": yoastData.robots["max-video-preview"],
              "max-image-preview": yoastData.robots["max-image-preview"],
              "max-snippet": yoastData.robots["max-snippet"],
            },
          }
        : undefined,
    };
  } catch (error) {
    return {
      title: "Error Loading Route",
      description: "There was an error loading this route.",
      openGraph: {
        title: "Error Loading Route",
        description: "There was an error loading this route.",
        images: [],
      },
    };
  }
}

export default async function BlogPostPage({ params, searchParams }) {
  try {
    const { slug } = await params;

    // Validate slug structure - return 404 for multi-segment URLs
    if (Array.isArray(slug) && slug.length > 1) {
      notFound();
    }

    const post = await getPostBySlug(slug);

    // Return 404 if post doesn't exist
    if (!post || post.length === 0) {
      notFound();
    }

    return (
      <BlogPostClient
        params={params}
        searchParams={searchParams}
        post={post[0]}
      />
    );
  } catch (error) {
    console.error("Error in BlogPostPage:", error);
    notFound();
  }
}