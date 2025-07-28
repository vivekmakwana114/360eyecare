"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { ImageSlider } from "./common/ImageSlider";

const LatestEyeCareInsight = () => {
  const [latestBlog, setLatestBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          process.env.NEXT_PUBLIC_BLOG_BASE_URL + "/posts"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setLatestBlog(data[0]);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlog();
  }, []);

  // Helper function to strip HTML tags and truncate text
  const getExcerpt = (htmlContent, maxLength = 200) => {
    if (!htmlContent) return "";
    const textContent = htmlContent.replace(/<[^>]*>/g, "");
    return textContent.length > maxLength
      ? textContent.slice(0, maxLength) + "..."
      : textContent;
  };

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-start gap-8">
          {/* Left Side - Blog Content */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col mb-10">
              <h2 className="text-4xl font-bold text-brand-blue mb-2 font-poppins">
                Latest Eye Care Insights
              </h2>
              <div className="h-[2px] w-[65px] bg-combination-100 mb-4"></div>
              <p className="text-neutral-500 font-normal text-base">
                Stay informed with our blog posts covering various eye care
                topics.
              </p>
            </div>

            {/* Blog Post */}
            {loading ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-[70%] h-48 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-full md:w-2/3 flex flex-col gap-3">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3"></div>
                </div>
              </div>
            ) : error ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full p-4 bg-red-50 border border-red-200 rounded">
                  <p className="text-red-600">
                    Error loading blog post: {error}
                  </p>
                </div>
              </div>
            ) : latestBlog ? (
              <div className="flex flex-col md:flex-row gap-6">
                {/* Post Image */}
                <div className="w-full md:w-[70%]">
                  <Link
                    href={latestBlog?.slug || "/"}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={
                        latestBlog?.yoast_head_json?.og_image?.[0]?.url ||
                        "/placeholder-image.jpg"
                      }
                      alt={
                        latestBlog?.yoast_head_json?.og_image?.[0]?.alt ||
                        "Blog post image"
                      }
                      width={300}
                      height={200}
                      className="w-full h-auto rounded object-cover"
                    />
                  </Link>
                </div>

                {/* Post Content */}
                <div className="w-full md:w-2/3 flex flex-col gap-3">
                  <div className="flex items-center gap-4 text-neutral-500 text-sm">
                    <div className="flex items-center gap-2">
                      <MdOutlineDateRange className="text-combination-100" />
                      <span>{formatDate(latestBlog?.date)}</span>
                    </div>
                    {latestBlog?.yoast_head_json?.author && (
                      <div className="flex items-center gap-2">
                        <FaUser className="text-combination-100" />
                        <span>{latestBlog.yoast_head_json.author}</span>
                      </div>
                    )}
                  </div>

                  <Link
                    href={latestBlog?.slug || "/"}
                    className="hover:text-combination-100 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-brand-blue mb-2">
                      {latestBlog?.title?.rendered || "Untitled Post"}
                    </h3>
                  </Link>

                  <p className="text-neutral-600 leading-relaxed">
                    {getExcerpt(latestBlog?.content?.rendered)}
                  </p>

                  <Link
                    href={latestBlog?.slug || "/"}
                    className="text-combination-100 hover:underline text-sm font-medium mt-2 inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6">
                <p className="text-neutral-500">No blog posts available.</p>
              </div>
            )}
          </div>

          {/* Right Side - Image Slider */}
          <div className="md:w-[28%] w-full aspect-[4/4]">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEyeCareInsight;
