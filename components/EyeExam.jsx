"use client";
import React, { useState } from "react";
import Image from "next/image";

const EyeExam = ({ heading }) => {
  const ExamOptionData = {
    "Before Your Visit": [
      { icon: "/icons/eyeglasses.svg", text: "Bring current glasses/contacts" },
      { icon: "/icons/medicine.svg", text: "List of current medications" },
      { icon: "/icons/insurance.svg", text: "Insurance information" },
      {
        icon: "/icons/eyeglasses.svg",
        text: "Bring sunglasses (pupils may be dilated)",
      },
      { icon: "/icons/time.svg", text: "Arrive 10 minutes early" },
    ],
    "During Your Exam": [
      { icon: "/icons/vision.svg", text: "Comprehensive vision testing" },
      { icon: "/icons/eye.svg", text: "Ocular health assessment" },
      { icon: "/icons/retina.svg", text: "Digital retinal photography" },
      { icon: "/icons/pressure.svg", text: "Peripheral vision testing" },
      { icon: "/icons/oct.svg", text: "OCT scan and review" },
      { icon: "/icons/peripheral.svg", text: "Eye pressure measurement" },
    ],
    "After Your Exam": [
      { icon: "/icons/note.svg", text: "Detailed results discussion" },
      {
        icon: "/icons/prescribe.svg",
        text: "Prescription updates if needed",
      },
      { icon: "/icons/eyetreat.svg", text: "Treatment recommendations" },
      { icon: "/icons/glasses.svg", text: "Same-day eyewear ordering" },
      { icon: "/icons/schedule.svg", text: "Follow-up scheduling" },
    ],
  };

  // Enhanced arrow direction logic
  const getArrowDirection = (idx, total, colCount = 3) => {
    const row = Math.floor(idx / colCount);
    const col = idx % colCount;
    const isLastItem = idx === total - 1;
    
    // Don't show arrow for the last item
    if (isLastItem) return null;
    
    // Special handling for different total counts
    if (total === 5) {
      // For 5 items: [0,1,2] -> [4,3] (right-to-left on second row)
      if (idx === 0 || idx === 1) return "right";  // First row: right arrows
      if (idx === 2) return "down";                // End of first row: down arrow
      if (idx === 3) return "left";                // Second row: left arrow
      return null; // idx === 4 (last item)
    }
    
    if (total === 6) {
      // For 6 items: [0,1,2] -> [5,4,3] (right-to-left on second row)
      if (idx === 0 || idx === 1) return "right";  // First row: right arrows
      if (idx === 2) return "down";                // End of first row: down arrow
       if (idx === 3 || idx === 4 || idx === 5) return idx === 5 ? null : "left";   // Second row: left arrows
      return null; // idx === 5 (last item)
    }
    
    // Default logic for other counts
    const itemsInCurrentRow = Math.min(colCount, total - (row * colCount));
    const isLastInCurrentRow = col === itemsInCurrentRow - 1;
    const hasNextRow = (row + 1) * colCount < total;

    if (row % 2 === 0) {
      // Even rows: left-to-right flow
      if (isLastInCurrentRow && hasNextRow) {
        return "down";
      } else if (!isLastInCurrentRow) {
        return "right";
      }
    } else {
      // Odd rows: right-to-left flow
      if (col === 0 && hasNextRow) {
        return "down";
      } else if (col > 0) {
        return "left";
      }
    }
    
    return null;
  };

  // Dynamic grid class based on item count
  const getGridClass = (total) => {
    if (total === 5) {
      return "grid grid-cols-3 gap-6 flex-1 relative [&>:nth-child(4)]:col-start-2 [&>:nth-child(5)]:col-start-3";
    }
    return "grid sm:grid-cols-3 gap-6 flex-1 relative";
  };

  // Arrow positioning logic
  const getArrowStyle = (direction) => {
    const baseStyle = {
      position: "absolute",
      zIndex: 20,
      pointerEvents: "none",
    };

    switch (direction) {
      case "right":
        return {
          ...baseStyle,
          right: "-30px",
          top: "50%",
          transform: "translateY(-50%)",
        };
      case "left":
        return {
          ...baseStyle,
          left: "-30px",
          top: "50%",
          transform: "translateY(-50%)",
        };
      case "down":
        return {
          ...baseStyle,
          bottom: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
        };
      default:
        return baseStyle;
    }
  };

  // Arrow SVG components for better control
  const ArrowRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#28305F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ArrowLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#28305F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ArrowDown = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#28305F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const renderArrow = (direction) => {
    const arrowComponents = {
      right: <ArrowRight />,
      left: <ArrowLeft />,
      down: <ArrowDown />,
    };

    return (
      <div 
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-2 border-[#E1E6EB] shadow-md"
        style={getArrowStyle(direction)}
      >
        {arrowComponents[direction]}
      </div>
    );
  };

  const [activeTab, setActiveTab] = useState("Before Your Visit");

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* heading */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#28305F]">
          {heading}
        </h2>
        <p className="text-neutral-500 mt-2">
          Our comprehensive eye examination process is designed to ensure your
          optimal eye health and vision.
        </p>
      </div>

      {/* 2 Column layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side Options */}
        <div className="flex flex-col gap-3 md:w-2xl">
          {Object.keys(ExamOptionData)?.map((tab) => (
            <button
              key={tab}
              onMouseEnter={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-md text-left font-medium transition border border-[#E1E6EB] ${
                activeTab === tab
                  ? "bg-[#28305F] text-[#FFFFFF]"
                  : "bg-[#F3F3F3] text-[#111111]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right side options with arrows */}
        <div className={getGridClass(ExamOptionData[activeTab]?.length)}>
          {ExamOptionData[activeTab]?.map((item, idx) => {
            const total = ExamOptionData[activeTab]?.length;
            const arrow = getArrowDirection(idx, total, 3);

            return (
              <div
                key={idx}
                className="relative flex flex-col items-start gap-3 p-6 rounded-lg shadow-sm bg-white border border-[#E1E6EB] hover:shadow-md transition mt-2 min-h-[180px]"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={40}
                    height={40}
                  />
                </div>
                <p className="font-semibold text-[#28305F]">{item.text}</p>

                {/* Render arrow if needed */}
                {arrow && renderArrow(arrow)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EyeExam;