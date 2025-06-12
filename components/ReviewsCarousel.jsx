"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";


const ReviewsCarousel = ({ title ,data}) => {
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [reviews, currentIndex]);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-combination-200 mb-6">
          {title}
        </h1>
        <div className="h-1 w-32 bg-blue-300 mb-10"></div>
        <div className="text-center py-10">Loading reviews...</div>
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-combination-200 mb-6">
          {title}
        </h1>
        <div className="h-1 w-32 bg-combination-100 mb-10"></div>
        <div className="text-center py-10">No reviews available.</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 px-0 md:px-6 lg:px-4 relative my-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-combination-200 mb-4 md:mb-6 text-center md:text-left">
  {title}
      </h1>
      <div className="h-1 w-20 md:w-32 bg-combination-100 mb-8 md:mb-10 mx-auto md:mx-0"></div>

      {/* Left arrow - visible on both mobile and desktop */}
      <button
        className="absolute md:left-8 left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50 transition-colors"
        onClick={handlePrev}
        aria-label="Previous reviews"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
      </button>

      {/* Reviews carousel */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6 max-w-[1120px] mx-auto px-5">
        {visibleReviews.map((review, idx) => (
          <div
            key={`${currentIndex}-${idx}`}
            className="flex-1 bg-white rounded-[24px] p-6 min-h-[450px] lg:min-h-[550px] flex flex-col justify-between border border-gray-300"
          >
            <div>
              <div className="flex justify-center mb-4">
                {renderStars(review.stars)}
              </div>
              <p className="text-center text-gray-600 mb-6 flex-grow leading-relaxed hidden md:block">{review.reviewDescription.length > 345 ? review.reviewDescription.slice(0, 345) + "...." : review.reviewDescription}</p>
              <p className="text-center text-gray-600 mb-6 flex-grow leading-relaxed block md:hidden">{review.reviewDescription.length > 208 ? review.reviewDescription.slice(0, 208) + "...." : review.reviewDescription}</p>
            </div>

            <div className="flex flex-col items-center">
              {review.reviewImage ? (
                <div className="w-12 h-12 rounded-full overflow-hidden mb-2 bg-gray-200">
                  <Image
                  width={32}
                  height={32}
                  
                    src={review.reviewImage}
                    alt={`Profile picture of ${review.reviewName}`}
               
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl mb-2">
                  {review.reviewName.charAt(0)}
                </div>
              )}

              <span className="font-medium text-gray-700 mb-4 ">
                {review.reviewName}
              </span>
              {/* <p className="text-gray-500 text-sm mb-4">{review.reviewDate}</p> */}


<div className="flex flex-row gap-4 items-center">
<a
                href={review.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Google"
                className="hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </a>


              <div className="flex flex-col ">
                <p className="text-gray-500 text-sm ">Posted On</p>
                <a href={review.reviewLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-base ">Google </a>
                </div>


</div>
            
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow - visible on both mobile and desktop */}
      <button
        className="absolute md:right-8 right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50 transition-colors"
        onClick={handleNext}
        aria-label="Next reviews"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
      </button>

      {/* Dots navigation - hidden on mobile, visible on desktop */}
      <div className="hidden md:flex justify-center mt-8 gap-2">
        {Array.from({ length: getTotalDots() }, (_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              getActiveDot() === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewsCarousel;