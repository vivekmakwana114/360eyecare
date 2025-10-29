"use client";
import React, { useState } from "react";
import Image from "next/image";

const EyeExam = ({ heading }) => {
  const [activeTab, setActiveTab] = useState("Before Your Visit");

  const ExamOptionData = {
    "Before Your Visit": [
      {
        icon: "/public/eyeglasses.svg",
        text: "Bring current glasses/contacts",
      },
      { icon: "/public/medicine.svg", text: "List of current medications" },
      { icon: "/public/inc.svg", text: "Insurance information" },
      {
        icon: "/public/eyeglasses.svg",
        text: "Bring sunglasses (pupils may be dilated)",
      },
      { icon: "/public/time.svg", text: "Arrive 10 minutes early" },
    ],
    "During Your Exam": [
      { icon: "/public/vision.svg", text: "Comprehensive vision testing" },
      { icon: "/public/eye.svg", text: "Ocular health assessment" },
      { icon: "/public/retina.svg", text: "Digital retinal photography" },
      { icon: "/public/pressure.svg", text: "Peripheral vision testing" },
      { icon: "/public/oct.svg", text: "OCT scan and review" },
      { icon: "/public/peripheral.svg", text: "Eye pressure measurement" },
    ],
    "After Your Exam": [
      { icon: "/public/note.svg", text: "Detailed results discussion" },
      { icon: "/public/prescribe.svg", text: "Prescription updates if needed" },
      { icon: "/public/eyetreat.svg", text: "Treatment recommendations" },
      { icon: "/public/glasses.svg", text: "Same-day eyewear ordering" },
      { icon: "/public/schedule.svg", text: "Follow-up scheduling" },
    ],
  };


  const getGridClass = (total) => {
  if (total === 5) {
    return `
      grid 
      grid-cols-1 sm:grid-cols-3 
      gap-6 flex-1 relative 
      sm:[&>:nth-child(4)]:col-start-2 
      sm:[&>:nth-child(5)]:col-start-3
    `;
  }
  return "grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 relative";
};

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
        <div className="flex md:flex-col flex-row md:w-2xl  overflow-x-auto gap-3 pb-2">
          {Object.keys(ExamOptionData)?.map((tab) => (
            <button
              key={tab}
              onMouseEnter={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-6 py-3 rounded-md text-left font-medium transition border border-[#E1E6EB] ${
                activeTab === tab
                  ? "bg-[#28305F] text-[#FFFFFF]"
                  : "bg-[#F3F3F3] text-[#111111]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right side options */}
        <div
          className={`${getGridClass(
            ExamOptionData[activeTab]?.length
          )} mt-4 md:mt-0 w-full`}
        >
          {ExamOptionData[activeTab]?.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-start gap-3 p-6 rounded-lg shadow-sm bg-white border border-[#E1E6EB] hover:shadow-md transition mt-2 min-h-[180px]"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                <Image src={item.icon} alt={item.text} width={40} height={40} />
              </div>
              <p className="font-semibold text-[#000000]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EyeExam;
