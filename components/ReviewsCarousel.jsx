"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ReviewsCarousel = ({ title, data }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewsPerPage = 3;
  const mobileReviewsPerPage = 1;

  useEffect(() => {
    // Simulate loading the reviews
    setTimeout(() => {
      setReviews(data);
      updateVisibleReviews(data, 0);
      setLoading(false);
    }, 500);
  }, []);

  const updateVisibleReviews = (allReviews, startIndex) => {
    if (!allReviews || allReviews.length === 0) return;

    const visible = [];
    const isMobile = window.innerWidth < 768;
    const itemsToShow = isMobile ? mobileReviewsPerPage : reviewsPerPage;

    for (let i = 0; i < itemsToShow && i < allReviews.length; i++) {
      const index = (startIndex + i) % allReviews.length;
      visible.push(allReviews[index]);
    }

    setVisibleReviews(visible);
  };

  const handleNext = () => {
    if (!reviews || reviews.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const step = isMobile ? mobileReviewsPerPage : reviewsPerPage;
    const newIndex = (currentIndex + step) % reviews.length;

    setCurrentIndex(newIndex);
    updateVisibleReviews(reviews, newIndex);
  };

  const handlePrev = () => {
    if (!reviews || reviews.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const step = isMobile ? mobileReviewsPerPage : reviewsPerPage;
    const newIndex = (currentIndex - step + reviews.length) % reviews.length;

    setCurrentIndex(newIndex);
    updateVisibleReviews(reviews, newIndex);
  };

  const handleDotClick = (dotIndex) => {
    if (!reviews || reviews.length === 0) return;

    // Calculate the starting index for the selected dot
    // Each dot represents a group of reviews
    const newIndex = (dotIndex * reviewsPerPage) % reviews.length;

    setCurrentIndex(newIndex);
    updateVisibleReviews(reviews, newIndex);
  };

  // Calculate the number of dots needed (only for desktop)
  const getTotalDots = () => {
    if (!reviews || reviews.length === 0) return 0;
    return Math.ceil(reviews.length / reviewsPerPage);
  };

  // Calculate which dot should be active
  const getActiveDot = () => {
    return Math.floor(currentIndex / reviewsPerPage);
  };

  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <span key={i} className="text-yellow-400 text-2xl">
          ★
        </span>
      ));
  };

  // Handle window resize to update visible reviews
  useEffect(() => {
    const handleResize = () => {
      if (reviews.length > 0) {
        updateVisibleReviews(reviews, currentIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [reviews, currentIndex]);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <h2 className="text-4xl font-bold text-combination-200 mb-6">
          {title}
        </h2>
        <div className="h-1 w-32 bg-blue-300 mb-10"></div>
        <div className="text-center py-10">Loading reviews...</div>
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <h2 className="text-4xl font-bold text-combination-200 mb-6">
          {title}
        </h2>
        <div className="h-1 w-32 bg-combination-100 mb-10"></div>
        <div className="text-center py-10">No reviews available.</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 px-0 md:px-6 lg:px-4 relative my-12">
      <div className="w-full max-w-[1120px] mx-auto px-5 mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-combination-200 mb-2">
          {title}
        </h2>

        <div className="flex items-center justify-between">
          <h4 className="text-[#888888] text-base md:text-lg">
            Hear what our patients are saying about their experience
          </h4>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/arrow-right.svg"
                alt="arrow right"
                width={30}
                height={30}
              />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next reviews"
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/arrow-left.svg"
                alt="arrow left"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-6 max-w-[1120px] mx-auto px-5">
        {visibleReviews.map((review, idx) => (
          <div
            key={`${currentIndex}-${idx}`}
            className="flex-1 bg-white rounded-[24px] p-6 min-h-[320px] flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            {/* Review text */}
            <p className="text-[#888888] text-base leading-relaxed flex-grow mb-6 text-center md:text-left">
              {review.reviewDescription.length > 220
                ? review.reviewDescription.slice(0, 220) + "..."
                : review.reviewDescription}
            </p>

            {/* Footer section: user + stars + name */}
            <div className="flex flex-col items-start border-t border-gray-100 pt-4">
              <div className="flex items-center gap-3 mb-2">
                {review.reviewImage ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={review.reviewImage}
                      alt={review.reviewName}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-medium">
                    {review.reviewName.charAt(0)}
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex">{renderStars(review.stars)}</div>
                  <span className="font-medium text-gray-700 text-sm mt-1 px-1">
                    {review.reviewName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-4xl flex flex-col items-center border border-[#E1E6EB] p-16">
          <div className="flex justify-center gap-8 items-center w-full mb-6">
            <div className="flex flex-col items-start">
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={120}
                height={40}
                className="mb-2"
              />
              <Image src="/stars.svg" alt="5 Stars" width={120} height={40} />
            </div>

            <span className="font-bold text-xl md:text-2xl lg:text-3xl text-[#111111]">
              4.9/5
            </span>
          </div>

          <p className="font-bold text-2xl md:text-lg text-center text-[#111111]">
            4.9/5 stars based on 315+ Google reviews
          </p>

           <Link
          href="https://360rosedale.mypatientsportal.com/select-location"
          className="bg-combination-200 font-semibold text-sm md:text-base text-[#FFFFFF]
                     py-2 px-6 rounded-full w-full max-w-[267px] 
                     h-[52px] flex justify-center items-center 
                     cursor-pointer hover:opacity-90 transition-opacity mt-4"
        >
          Book an Eye Exam Today
        </Link>
        </div>
       
      </div>
    </div>
  );
};

export default ReviewsCarousel;
