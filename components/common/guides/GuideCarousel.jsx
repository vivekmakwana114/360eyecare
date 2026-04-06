"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * GuideCarousel: A standalone component for the points-based smooth slider.
 * Groups points into pairs (2 per card) and displays 3 cards at a time on desktop.
 * Includes auto-scroll and manual navigation arrows.
 */
const GuideCarousel = ({
  heading,
  subheading,
  points = [],
  contentBottom,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Group points into pairs (2 per card)
  const groupedPoints = [];
  for (let i = 0; i < points.length; i += 2) {
    groupedPoints.push(points.slice(i, i + 2));
  }

  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, groupedPoints.length - visibleCards);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (groupedPoints.length > visibleCards) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [maxIndex, groupedPoints.length, visibleCards]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="max-w-6xl mx-auto my-12 sm:my-20 px-4 sm:px-0">
      <div className="flex flex-col gap-8 w-full">
        {(heading || subheading) && (
          <div className="flex flex-col gap-4 max-w-4xl">
            {heading && (
              <div className="flex flex-col gap-2">
                <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900] leading-tight">
                  {heading}
                </h2>
                <hr className="w-[65px] h-1 bg-combination-100" />
              </div>
            )}
            {subheading && (
              <h3 className="text-xl font-bold text-combination-200">
                {subheading}
              </h3>
            )}
          </div>
        )}

        {/* Carousel Wrapper */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {groupedPoints.map((pair, cardIdx) => (
                <div
                  key={cardIdx}
                  className="flex-shrink-0 w-full sm:w-1/3 px-2 sm:px-3"
                >
                  <div className="h-full bg-[#f9fbfd] border border-gray-100 rounded-xl p-6 sm:p-8 flex flex-col gap-8 shadow-sm">
                    {pair.map((point, pIdx) => (
                      <div key={pIdx} className="flex flex-col gap-2">
                        <h4 className="font-bold text-combination-200 text-lg sm:text-xl">
                          {point.title}
                        </h4>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {groupedPoints.length > visibleCards && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-[-15px] sm:left-[-25px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 z-10 border border-gray-100 text-combination-200 hover:bg-combination-100 hover:text-white"
                aria-label="Previous card"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-[-15px] sm:right-[-25px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 z-10 border border-gray-100 text-combination-200 hover:bg-combination-100 hover:text-white"
                aria-label="Next card"
              >
                <FaChevronRight size={14} />
              </button>
            </>
          )}
        </div>

        {contentBottom && (
          <div className="text-neutral-500 text-base leading-relaxed space-y-4 pt-4">
            {contentBottom}
          </div>
        )}
      </div>
    </section>
  );
};

export default GuideCarousel;
