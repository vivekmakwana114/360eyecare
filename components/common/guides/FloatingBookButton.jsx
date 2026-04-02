"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

/**
 * FloatingBookButton: A refined FAB that stops at the LocationSection
 * and hides when near the top navbar. Features a horizontal layout.
 */
const FloatingBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      // 1. Visibility: Hide when at the very top (under navbar area)
      setIsVisible(scrollY > 150);

      // 2. Icon Toggle: Change to Up arrow when near the bottom
      // We check if we are within the LocationSection or near the end
      const locationSection = document.getElementById("locations");
      if (locationSection) {
        const rect = locationSection.getBoundingClientRect();
        // If the top of location section is visible, we are "at bottom"
        setIsAtBottom(rect.top < windowHeight * 0.8);
        
        // 3. Sticking Logic: Stop fixed positioning before footer
        // If the bottom of location section is visible, we stick to it
        setIsStuck(rect.bottom < windowHeight - 40);
      } else {
        setIsAtBottom(scrollY + windowHeight > fullHeight - 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById("locations");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed right-6 sm:right-10 z-50 transition-all duration-300 ${
        isStuck ? "bottom-[420px]" : "bottom-10"
      }`}
      style={{
        // If stuck, we might want to adjust based on exact footer height if known,
        // but 420px is a safe estimate for this project's large footer.
        transition: "bottom 0.1s ease-out" 
      }}
    >
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="flex items-center gap-3 group transition-all duration-300 bg-white border border-combination-100 rounded-full pl-6 pr-2 py-2 shadow-xl hover:shadow-2xl active:scale-95"
      >
        <span className="text-combination-100 text-xs sm:text-sm font-extrabold uppercase tracking-widest">
          {isAtBottom ? "Back to Top" : "Book Eye Exam"}
        </span>
        
        <div className="bg-combination-100 text-white p-2 sm:p-2.5 rounded-full group-hover:bg-combination-200 transition-colors duration-300">
          {isAtBottom ? (
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </div>
      </button>
    </div>
  );
};

export default FloatingBookButton;
