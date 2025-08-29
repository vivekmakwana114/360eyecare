import React from "react";
import Image from "next/image";

import ScheduleForm from "./ScheduleForm";
const statitsicsdata = [
  {
    icon: "/star.svg",
    title: "4.9/5",
    description: "Rated by Toronto Locals",
  },
  {
    icon: "/thumb.svg",
    title: "10,000+",
    description: "Eye Exams Performed",
  },
  {
    icon: "/location.svg",
    title: "15+",
    description: "Years of Clinical Experience",
  },
  {
    icon: "/spectacles.svg",
    title: "2",
    description: "Location Served",
  },
];

const statitsicsdata2 = [
  {
    icon: "/star2.svg",
    title: "4.9/5",
    description: "Rated by Toronto Locals",
  },
  {
    icon: "/thumb2.svg",
    title: "10,000+",
    description: "Eye Exams Performed",
  },
  {
    icon: "/location2.svg",
    title: "15+",
    description: "Years of Clinical Experience",
  },
  {
    icon: "/spectacles2.svg",
    title: "2",
    description: "Location Served",
  },
];

const HeroSection = () => {
  return (
    <>
      {/* Hero Content */}
      <div
        className="md:max-w-svh mx-auto md:bg-cover md:bg-center bg-contain relative bg-[#E1E6EB] py-24"
        id="hero-form-section"
      >
        <div className="absolute inset-0 bg-[#E1E6EB] py-10"></div>

        <div className="relative z-10 md:px-4 px-5 py-0 md:py-16 ">
          <div className="flex flex-col md:flex-row md:gap-3 max-w-[1300px] md:h-[636px]  md:min-h-0 mx-auto justify-center items-center md:bg-none  ">
            {/* Left side - Text content */}
            <div className="relative w-full md:w-1/2 flex flex-col md:items-start items-center justify-center text-center md:text-left py-8 md:py-0 h-full gap-y-8 text-xs md:text-base ">
              <div className="bg-[#FBF7B9] p-2 border-red-600 border-2 rounded-sm">
                <img src="/icons/time.gif" alt="" width={20} height={20} className="inline-block mix-blend-multiply" />
                <span>Limited Time : </span>
                <span className="text-[#D00000]"> FREE Consultation Worth $150 </span></div>

              {/* list */}
              <div className="relative z-10 space-y-4">
                <h2 className="text-[32px] md:leading-[64px] leading-[42px] h-auto md:text-[40px] font-[700] text-[#28305F] md:text-left text-center mb-4">
                  <p>Stop Eye Strain From</p>
                  <p>Destroying Your Productivity</p>
                </h2>

                <p className="text-black text-sm sm:text-base md:text-[18px] text-left leading-[32px] tracking-normal">
                  Get a personalized solution to eliminate headaches, blurred vision, and tired eyes in just 15 minutes with our certified optometrist.
                </p>

                <div className="text-black">
                  <ul className="space-y-6 relative">
                    {[
                      "Identify what's really causing your eye strain and headaches",
                      "Learn proper screen positioning and lighting techniques",
                      "Get personalized recommendations for your workspace setup",
                      "Understand if you need specialized computer glasses",
                    ].map((item, index, arr) => (
                      <li
                        key={index}
                        className="grid grid-cols-[auto,1fr] gap-2 relative items-start text-left"
                      >
                        {/* Icon + line */}
                        <div className="relative flex flex-col items-center">
                          <img
                            src="/icons/tick-mark.png"
                            alt="tick"
                            className="md:w-6 md:h-6 w-5 h-4"
                          />
                          {index !== arr.length - 1 && (
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+12px)] bg-[#CFCFCF]" />
                          )}
                        </div>

                        {/* Text */}
                        <span className="md:text-lg leading-6 text-sm text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-1/2 bg-[#E1E6EB]  md:px-0">
              <ScheduleForm />
            </div>
          </div>

          {/* Desktop Statistics */}

        </div>
      </div>

      {/* Mobile Statistics section */}
    </>
  );
};

export default HeroSection;
