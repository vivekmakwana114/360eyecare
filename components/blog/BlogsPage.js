"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuUserPen } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const perPage = 12;


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_BASE_URL}/posts?page=1&per_page=${perPage}`);
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
        console.log(data);
        setPosts(data);
        setHasMore(currentPage < totalPages);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleViewMore = async () => {
    if (isLoadingMore || !hasMore) return;
    
    setIsLoadingMore(true);
    const nextPage = currentPage + 1;
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_BASE_URL}/posts?page=${nextPage}&per_page=${perPage}`);
      if (!res.ok) {
        throw new Error("Failed to fetch more posts");
      }
      const data = await res.json();
      const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
      
      setPosts(prevPosts => [...prevPosts, ...data]);
      setCurrentPage(nextPage);
      setHasMore(nextPage < totalPages);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching more posts:', err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  if (isLoading) return <div className="flex items-center justify-center min-h-screen bg-white">
  <div className="w-24 h-24 border-8 border-combination-100 border-t-transparent rounded-full animate-spin"></div>
</div>
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col gap-5 max-w-7xl mx-auto mt-10 md:mt-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-items-center">
        {posts.map((post) => (
          <div key={post.id} className="w-full max-w-[387px] h-auto rounded-[8px] border border-[#E1E6EB] p-4">
            <div className="flex flex-col gap-4">
              {post?.yoast_head_json?.og_image?.[0]?.url ? (
                <Image 
                  src={ post?.yoast_head_json?.og_image?.[0]?.url}
                  alt={post.title.rendered} 
                  width={367} 
                  height={210} 
                  className="w-full h-[210px] object-cover rounded cursor-pointer" 
                  onClick={() => router.push(`/${post.slug}`)} 
                />
              ) : null}
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 sm:gap-8">
                  <div className="flex flex-row gap-2 items-center">
                    <CiCalendar size={21} color="#888888"/>
                    <p className="text-[#888888] text-[14px] font-[400]">
                      {new Date(post.date).toLocaleString('default', { year: 'numeric', month: 'long', day: '2-digit' })}
                    </p>
                  </div>
                  
                  <div className="flex flex-row gap-2 items-center">
                    <LuUserPen size={21} color="#888888" />
                    <p className="text-[#888888] text-[14px] font-[400]">{post?.yoast_head_json?.author}</p>
                  </div>
                </div>
                                
                <h3 className="text-[#28305F] font-semibold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[34px] break-words min-h-[56px] sm:min-h-[68px] line-clamp-2 cursor-pointer" onClick={() => router.push(`/${post.slug}`)}>
                  {post.title.rendered}
                </h3>
                               
                <p className="text-gray-600 text-[14px] leading-[20px]">
                  {post.excerpt.rendered.slice(3, 105)}....
                </p>
                                                
                <Link href={`/${post.slug}`}>
                  <div className="flex flex-row gap-2 items-center hover:opacity-80 transition-opacity">
                    <p className="text-[#41BBC8] font-medium text-[16px]">Read More</p>
                    <Image src="/Icons/circleblue.svg" alt="Read More" className="w-[24px] h-[24px]" width={24} height={24}/>
                  </div>
                </Link>
                         
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center mb-10">
        {hasMore && (
          <button 
            className="flex flex-row gap-2 items-center hover:opacity-80 transition-opacity disabled:opacity-50" 
            onClick={handleViewMore}
            disabled={isLoadingMore}
          >
            <p className="text-[#41BBC8] font-medium text-[16px]">
              {isLoadingMore ? 'Loading...' : 'View More'}
            </p>
            {!isLoadingMore && <ChevronDown size={21} color="#41BBC8" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;