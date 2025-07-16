"use client";
import { Avatar } from "../components/ui/avatar.tsx";
import { AvatarImage } from "../components/ui/avatar.tsx";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";

import rosedaleReviews from "../../constants/rosedaleReviews.json";

const HappyClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});

  // Function to determine items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 768) return 1; // mobile
      if (width < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3; // default for SSR
  };

  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      // Reset current index if it would show empty items
      const totalItems = rosedaleReviews.length;
      const newMaxIndex = Math.ceil(totalItems / newItemsPerPage) - 1;
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const totalItems = rosedaleReviews.length;
  const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const toggleExpanded = (cardIndex) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardIndex]: !prev[cardIndex],
    }));
  };

  const visibleItems = rosedaleReviews.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const CHARACTER_LIMIT = 160;

  return (
    <div className="max-w-6xl mx-auto h-auto px-4 sm:px-6 lg:px-0 md:my-12 my-8">
      <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[48px] items-start sm:items-center justify-between">
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[36px] font-[700] text-[#28305F]">
            Happy Clients
          </h2>
          <p className="text-[16px] font-[400] text-[#888888]">
            Hear what our patients are saying about their experience
          </p>
        </div>
        <div className="hidden md:flex flex-row gap-[16px] sm:gap-[24px] self-end sm:self-auto">
          <BsArrowLeft
            size={28}
            className={`sm:w-8 sm:h-8 ${
              currentIndex === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-mainBlue cursor-pointer"
            }`}
            onClick={currentIndex > 0 ? handlePrevious : undefined}
          />
          <BsArrowRight
            size={28}
            className={`sm:w-8 sm:h-8 ${
              currentIndex >= maxIndex
                ? "text-gray-400 cursor-not-allowed"
                : "text-mainBlue cursor-pointer"
            }`}
            onClick={currentIndex < maxIndex ? handleNext : undefined}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {visibleItems.map((item, index) => {
          const actualIndex = currentIndex * itemsPerPage + index;
          const isExpanded = expandedCards[actualIndex];
          const shouldShowReadMore =
            item.reviewDescription.length > CHARACTER_LIMIT;

          return (
            <div key={actualIndex}>
              <div className="relative flex flex-col gap-[10px] w-full max-w-[387px] mx-auto lg:mx-0 h-auto min-h-[250px] sm:min-h-[274px] border border-[#E1E6EB] rounded-[10px] cursor-pointer p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex-grow relative">
                  <p className="text-[16px] sm:text-[18px] font-[500] text-[#888888]">
                    {shouldShowReadMore && !isExpanded
                      ? item.reviewDescription.slice(0, CHARACTER_LIMIT) + "..."
                      : item.reviewDescription}
                    {shouldShowReadMore && (
                      <span
                        onClick={() => toggleExpanded(actualIndex)}
                        className="text-[14px] sm:text-[16px] font-[500] text-[#28305F] hover:text-[#40BCC8] transition-colors ml-1 cursor-pointer "
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                  <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 z-[-10]">
                    <Image
                      src="/quote.svg"
                      width={68}
                      height={68}
                      alt="quote"
                      className="absolute bottom-0 right-0 w-[68px] h-[68px] z-[-10]"
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center mt-auto">
                  <div className="w-[48px] h-[48px]">
                    <Image
                      src={item.reviewImage}
                      alt={item.reviewName}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-avatar.png";
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <div className="flex flex-row gap-[6px]">
                      {Array.from({ length: item.stars }).map(
                        (_, starIndex) => (
                          <Image
                            key={starIndex}
                            src="/starIcon.svg"
                            alt="star"
                            width={16}
                            height={16}
                            className="sm:w-[18px] sm:h-[18px]"
                          />
                        )
                      )}
                    </div>
                    <p className="text-[14px] sm:text-[16px] font-[500] text-dark-text truncate text-black">
                      {item.reviewName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex md:hidden flex-row gap-[16px] items-center justify-between mt-6">
        <BsArrowLeft
          size={28}
          className={`sm:w-8 sm:h-8 ${
            currentIndex === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-mainBlue cursor-pointer"
          }`}
          onClick={currentIndex > 0 ? handlePrevious : undefined}
        />
        <BsArrowRight
          size={28}
          className={`sm:w-8 sm:h-8 ${
            currentIndex >= maxIndex
              ? "text-gray-400 cursor-not-allowed"
              : "text-mainBlue cursor-pointer"
          }`}
          onClick={currentIndex < maxIndex ? handleNext : undefined}
        />
      </div>
    </div>
  );
};

export default HappyClients;
