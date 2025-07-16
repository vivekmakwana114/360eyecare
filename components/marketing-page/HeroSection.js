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
        className="md:max-w-[1550px] mx-auto md:bg-[url('/herosection.webp')] md:bg-cover md:bg-center md:bg-no-repeat bg-contain  relative "
        id="hero-form-section"
      >
        <div className="absolute inset-0 !bg-[#111530EB]"></div>

        <div className="relative z-10 md:px-4 px-0 py-0 md:py-16">
          <div className="flex flex-col md:flex-row  md:gap-12 max-w-[1200px] mx-auto  justify-center items-center md:bg-none bg-[url('/herosection.webp')] bg-cover bg-center bg-no-repeat">
            {/* Left side - Text content */}
            <div className="relative w-full md:w-1/2 items-center justify-center text-center md:text-left px-4 py-8">
              <div className="absolute md:hidden inset-0 bg-[#111530EB] z-0"></div>
              <h2 className="relative z-10 text-[24px] md:text-[48px] font-[700] text-white leading-tight md:text-left text-center mb-4">
                Feeling Eye Fatigue from Too Much Screen Time?
              </h2>
              <p className="relative z-10 text-white text-sm sm:text-base md:text-left text-center">
                Book your Free Digital Eye Strain Consultation with a certified
                optometrist at 360 Eyecare.
              </p>
            </div>

            {/* Right side - Form */}
            <ScheduleForm />
          </div>
          <div className="mt-[24px] py-4 md:py-8 hidden md:block ">
            <div className="max-w-[1004px] mx-auto px-4">
              <div className="flex flex-row items-center text-center p-4">
                {statitsicsdata.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-row items-center text-center p-4  gap-4">
                      <div className="flex flex-col items-start justify-center gap-4 md:gap-2 mb-1">
                        <div className="flex flex-row items-center gap-2">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt="icon"
                            className="text-white"
                          />
                          <h3 className="text-[16px] md:text-[20px] font-[600] text-white">
                            {item.title}
                          </h3>
                        </div>

                        <div>
                          <p className="text-white text-[12px] md:text-[16px] font-[500] text-nowrap">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {index !== statitsicsdata.length - 1 && (
                        <div className="w-[1px] h-[99px] bg-[#495287] "></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics section - Full width background */}

      <div className="bg-white py-4 md:py-8 block md:hidden ">
        <div className="max-w-[1004px] mx-auto px-4">
          <div className="flex flex-col gap-[24px] items-center justify-center">
            {statitsicsdata2.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col items-center justify-center text-center gap-2 ">
                  <div className="flex items-center justify-center gap-1  ">
                    <Image
                      src={item.icon}
                      width={20}
                      height={20}
                      alt="icon"
                      className="text-[#28305F]"
                    />
                    <h3 className="text-[18px] font-[600] text-[#28305F]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#888888] text-[12px] font-[500] mb-4">
                    {item.description}
                  </p>
                </div>

                {index !== statitsicsdata2.length - 1 && (
                  <div className="w-[214px] h-[1px]    bg-[#E1E6EB] "></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
