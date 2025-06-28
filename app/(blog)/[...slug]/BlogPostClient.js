"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { LuUserPen } from "react-icons/lu";
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";
import RecentPosts from "../../../components/blog/RecentPosts";
import SearchSuggestion from "../../../components/SearchSuggestion";
import { useRouter } from "next/navigation";

const page = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [shareUrl, setShareUrl] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Set the share URL when component mounts
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/${slug}`);
    }
  }, [slug]);

  useEffect(() => {
    let isMounted = true;

    const fetchPost = async () => {
      if (!slug) {
        router.push("/not-found");
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const baseUrl = process.env.NEXT_PUBLIC_BLOG_BASE_URL || "";
        const apiUrl = `${baseUrl}/posts?slug=${encodeURIComponent(slug)}`;

        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw new Error(
            `Failed to fetch post: ${res.status} ${res.statusText}`
          );
        }

        const postData = await res.json();
        console.log(postData, "check the data");
        if (!isMounted) return;

        if (!postData || postData.length === 0) {
          throw new Error("Post not found");
        }

        setData(postData[0]);
      } catch (err) {
        // console.error("Error fetching post:", err);
        if (isMounted) {
          setError(err.message);
          router.push("/not-found");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPost();

    return () => {
      isMounted = false;
      setData(null);
    };
  }, []);

  // Share data
  const shareTitle = data?.title?.rendered || "Check out this article";
  const shareDescription =
    data?.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "";
  const shareImage = data?.yoast_head_json?.og_image?.[0]?.url || "";

  return (
    <main className="pt-[110px] min-h-screen">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
          <div className="w-16 h-16 border-4 border-combination-100 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 text-center px-4">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't load the post. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-combination-100 text-white rounded-md hover:bg-combination-200 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : !data ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            No post found
          </h2>
          <p className="text-gray-600 mb-6">
            The post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="px-6 py-2 bg-combination-100 text-white rounded-md hover:bg-combination-200 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {data?.yoast_head_json?.og_image?.[0]?.url ? (
            <Image
              src={data?.yoast_head_json?.og_image?.[0]?.url}
              alt="image"
              width={1200}
              height={600}
              className="w-full h-[191px] md:h-[400px] lg:h-[600px] object-fill mt-6 border border-[#E1E6EB] rounded-[10px]"
            />
          ) : null}

          <div className="flex flex-col gap-5 mt-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-4 sm:gap-8">
                <div className="flex flex-row gap-2 items-center">
                  <CiCalendar size={21} color="#888888" />
                  <p className="text-[#888888] text-[14px] font-[400]">
                    {new Date(data?.date).toLocaleString("default", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })}
                  </p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <LuUserPen size={21} color="#888888" />
                  <p className="text-[#888888] text-[14px] font-[400]">
                    {data?.yoast_head_json?.author}
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-[#28305F] font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[36px] sm:leading-[42px] lg:leading-[48px]">
              {data?.title?.rendered}
            </h1>
          </div>

          <div className="w-full flex lg:flex-row flex-col gap-8 my-10">
            <div className="w-full lg:w-[70%] flex flex-col gap-5">
              <div
                className="content-wrapper prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
              />

              <style jsx>{`
                .content-wrapper {
                  line-height: 1.7;
                  color: #888888;
                }
                .content-wrapper p {
                  margin-bottom: 1rem;
                }
                .content-wrapper h1,
                .content-wrapper h2,
                .content-wrapper h3,
                .content-wrapper h4,
                .content-wrapper h5,
                .content-wrapper h6 {
                  color: #28305f;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                }
                .e-con-inner {
                  color: #28305f;
                }
                .content-wrapper ul,
                .content-wrapper ol {
                  margin: 1rem 0;
                  padding-left: 1.5rem;
                }
                .content-wrapper li {
                  margin-bottom: 0.5rem;
                }
                .content-wrapper img {
                  max-width: 100%;
                  height: auto;
                  border-radius: 8px;
                  margin: 1rem 0;
                }
                .content-wrapper a {
                  color: #41bbc8;
                  text-decoration: underline;
                }
                .content-wrapper blockquote {
                  border-left: 4px solid #41bbc8;
                  padding-left: 1rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  color: #28305f;
                }
                .content-wrapper span {
                  color: inherit;
                  font-weight: normal;
                }
              `}</style>

              {/* Enhanced Social Sharing Section */}
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-8 pt-6 border-t border-[#E1E6EB]">
                <p className="font-medium text-[#28305F] mb-2 sm:mb-0">
                  Share:
                </p>
                <div className="flex flex-row gap-3 flex-wrap">
                  {/* Facebook Share */}
                  <FacebookShareButton
                    url={shareUrl}
                    quote={shareTitle}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Image
                        src="/Icons/facebookIcon.svg"
                        alt="Share on Facebook"
                        width={24}
                        height={24}
                      />
                    </div>
                  </FacebookShareButton>

                  {/* Twitter Share */}
                  <TwitterShareButton
                    url={shareUrl}
                    title={shareTitle}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Image
                        src="/Icons/twitterIcon.svg"
                        alt="Share on Twitter"
                        width={24}
                        height={24}
                      />
                    </div>
                  </TwitterShareButton>

                  {/* Pinterest Share */}
                  <PinterestShareButton
                    url={shareUrl}
                    media={shareImage}
                    description={shareTitle}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Image
                        src="/Icons/pinterestIcon.svg"
                        alt="Share on Pinterest"
                        width={24}
                        height={24}
                      />
                    </div>
                  </PinterestShareButton>
                </div>
              </div>
            </div>

            <div className="lg:w-[30%] w-full">
              <div className="flex flex-col md:gap-6  gap-0  lg:sticky lg:top-[100px]">
                <SearchSuggestion />

                {/* CTA Cards */}
                <div className="bg-[#41BBC8]  p-6 flex flex-col gap-4 text-white">
                  <p className="font-semibold text-[20px] leading-[28px]">
                    Need an eye check-up?
                  </p>
                  <p className="text-[16px] font-normal leading-[24px]">
                    Visit 360 Eyecare Beaches for expert care and updated
                    prescriptions, right in your neighborhood.
                  </p>
                  <button
                    className="bg-[#28305F] text-white font-medium text-[16px] p-3  hover:bg-[#1e2347] transition-colors mt-2"
                    onClick={() =>
                      (window.location.href = "/toronto-beaches-optometrist")
                    }
                  >
                    Book at Beaches
                  </button>
                </div>

                <div className="bg-[#28305F]  p-6 flex flex-col gap-4 text-white">
                  <p className="font-semibold text-[20px] leading-[28px]">
                    See better with 360 Eyecare
                  </p>
                  <p className="text-[16px] font-normal leading-[24px]">
                    Providing complete Eye Exam & premium vision care in
                    Toronto's vibrant Yorkville neighbourhood.
                  </p>
                  <button
                    className="bg-[#41BBC8] text-white font-medium text-[16px] p-3  hover:bg-[#369ca8] transition-colors mt-2"
                    onClick={() =>
                      (window.location.href = "/toronto-rosedale-optometrist")
                    }
                  >
                    Book at Yorkville
                  </button>
                </div>
              </div>
            </div>
          </div>

          <RecentPosts />
        </div>
      )}
    </main>
  );
};

export default page;
