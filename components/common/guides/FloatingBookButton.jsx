"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const FloatingBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsVisible(scrollY > 200);

      const locationSection = document.getElementById("locations");
      if (locationSection) {
        const rect = locationSection.getBoundingClientRect();
        setIsAtBottom(rect.top < windowHeight * 0.7);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(entry.isIntersecting);
      },
      { 
        root: null, 
        threshold: 0,
        rootMargin: "0px 0px -40px 0px" 
      }
    );

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footer) observer.unobserve(footer);
    };
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
      className={`right-6 sm:right-10 z-[60] ${
        isStuck ? "absolute bottom-4" : "fixed bottom-10"
      }`}
      style={{
        transition: "opacity 0.3s ease, transform 0.3s ease"
      }}
    >
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="flex items-center group transition-all duration-300 bg-white border border-combination-100 rounded-full p-2 hover:pl-6 shadow-xl hover:shadow-2xl active:scale-95"
      >
        <span className="w-0 opacity-0 overflow-hidden text-combination-100 text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-all duration-300 group-hover:w-auto group-hover:opacity-100 group-hover:mr-3 whitespace-nowrap">
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
