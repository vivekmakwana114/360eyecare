"use client";
import Image from "next/image";
import React from "react";
const PrimaryBackground = () => {
  return (
    <div className="bg-[#28305F] max-w-[1550px] mx-auto flex justify-center items-center overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-[60%] flex flex-col gap-[16px] md:gap-[24px] justify-center md:items-start px-[20px] md:pl-[67px] py-[40px] md:py-0 items-center ">
          <div className="flex flex-row items-end gap-[4px]">
            <div className="w-[60px] bg-[#40BCC8] h-1" />
            <p className="text-[14px] md:text-[16px] font-[500] text-[#40BCC8] md:text-left text-center">
              About 360 Eyecare
            </p>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[36px] font-[700] text-white leading-tight md:text-left text-center">
            Proudly Serving Toronto’s Beaches and Yorkville Neighbors
          </h2>
          <p className="text-[14px] md:text-[16px] font-[400] text-white leading-relaxed md:text-left text-center">
            What started as a small practice has grown into a place where
            neighbors become family. Every day, we witness the profound joy that
            comes with clear vision. Some of our most treasured moments happen
            when someone puts on their new glasses for the first time. The
            sudden smile and the quiet "wow" are the moments that remind us why
            we fell in love with eye care. We're not just your eye doctors;
            we're part of your community, invested in the moments that matter
            most to you and your family. We're the place where three generations
            of families trust us with their vision care. Whether you're managing
            a condition or simply curious about your eye health, we're here to
            guide you with clarity, empathy, and expertise.
          </p>
          <button
            className="bg-[#40BCC8] w-auto md:w-[303px] h-[48px] md:h-[60px] font-[600] text-[14px] md:text-[16px] px-[20px] py-[16px] rounded-[6px] cursor-pointer flex items-center gap-[8px] text-white justify-center"
            onClick={() => {
              document.getElementById("hero-form-section").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <p className="text-[16px] md:text-[18px] text-[#FFFFFF] text-nowrap">
              Book a Free Consultation
            </p>
            <Image src="/arrow.svg" width={20} height={20} alt="arrow" />
          </button>
        </div>
        <div className="w-full md:w-[60%] flex justify-center items-center md:justify-end ">
          <Image
            src="/machine.webp"
            width={695}
            height={736}
            alt="machine"
            className="object-cover w-full max-w-[400px] md:max-w-[695px] h-auto md:h-[736px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryBackground;
