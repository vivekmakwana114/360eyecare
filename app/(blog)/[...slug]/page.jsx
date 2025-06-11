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
} from 'react-share';
import RecentPosts from "../../../components/blog/RecentPosts";
import SearchSuggestion from "../../../components/SearchSuggestion";

const page = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // Set the share URL when component mounts
    if (typeof window !== 'undefined') {
      setShareUrl(`${window.location.origin}/blog/${slug}`);
    }
  }, [slug]);

  useEffect(() => {
    const fetchPost = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BLOG_BASE_URL}/posts?slug=${slug}`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch post");
          }
          const data = await res.json();
          console.log(data[0]);
          setData(data[0]);
        } catch (err) {
          console.error("Error fetching post:", err);
        } finally {
          setIsLoading(false);
        }
    };

    fetchPost();

    return () => {
      setData([]);
    };
  }, [slug]);

  // Share data
  const shareTitle = data?.title?.rendered || 'Check out this article';
  const shareDescription = data?.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '';
  const shareImage = data?.yoast_head_json?.og_image?.[0]?.url || '';

  return (
    <main className="pt-[110px] h-auto">
        {isLoading ? (
            <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-24 h-24 border-8 border-combination-100 border-t-transparent rounded-full animate-spin"></div>
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
                <div className="content-wrapper prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
                
                <style jsx>{`
                  .content-wrapper {
                    line-height: 1.7;
                    color: #888888;
                  }
                  .content-wrapper p {
                    margin-bottom: 1rem;
                  }
                  .content-wrapper h1, .content-wrapper h2, .content-wrapper h3, .content-wrapper h4, .content-wrapper h5, .content-wrapper h6 {
                    color: #28305F;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                  }
                  .e-con-inner {
                    color: #28305F;
                  }
                  .content-wrapper ul, .content-wrapper ol {
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
                    color: #41BBC8;
                    text-decoration: underline;
                  }
                  .content-wrapper blockquote {
                    border-left: 4px solid #41BBC8;
                    padding-left: 1rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #28305F ;
                  }
                  .content-wrapper span {
                    color: inherit;
                    font-weight: normal;
                  }
                `}</style>

                {/* Enhanced Social Sharing Section */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-8 pt-6 border-t border-[#E1E6EB]">
                    <p className="font-medium text-[#28305F] mb-2 sm:mb-0">Share:</p>
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
                            Visit 360 Eyecare Beaches for expert care and updated prescriptions, right in your neighborhood.
                        </p>
                        <button className="bg-[#28305F] text-white font-medium text-[16px] p-3  hover:bg-[#1e2347] transition-colors mt-2" onClick={() => window.location.href = "/toronto-beaches-optometrist"}>
                            Book at Beaches
                        </button>  
                    </div>

                    <div className="bg-[#28305F]  p-6 flex flex-col gap-4 text-white">
                        <p className="font-semibold text-[20px] leading-[28px]">
                            See better with 360 Eyecare 
                        </p>
                        <p className="text-[16px] font-normal leading-[24px]">
                            Providing complete Eye Exam & premium vision care in Toronto's vibrant Yorkville neighbourhood.
                        </p>
                        <button className="bg-[#41BBC8] text-white font-medium text-[16px] p-3  hover:bg-[#369ca8] transition-colors mt-2" onClick={() => window.location.href = "/toronto-rosedale-optometrist"}>
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