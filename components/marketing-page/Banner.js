"use client";
import Image from "next/image";
import React from "react";
const Banner = () => {
  return (
    <div className="max-w-[1550px] mx-auto bg-[#28305F] flex flex-col justify-center items-center md:h-[527px] h-[340px]">
      <div className="md:w-3xl w-full flex flex-col gap-[24px] justify-center items-center">
        <h2 className="md:text-[48px] text-[24px] font-[700] text-white text-center">
          Take the First Step to Clearer, More Comfortable Vision
        </h2>
        <p className="md:text-[18px] text-[16px] font-[500] text-white text-center">
          Book your free digital eye strain consultation today — no payment
          required.
        </p>

        <button
          className="bg-[#40BCC8] md:w-[303px] md:h-[60px] w-auto h-[48px] font-[600] text-[16px] px-[20px] py-[16px] rounded-[6px] cursor-pointer flex items-center gap-[8px] text-white justify-center"
          onClick={() => {
            document.getElementById("hero-form-section").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <p className="text-[18px] text-[#FFFFFF] text-nowrap bg-[#40BCC8] ">
            Book a Free Consultation
          </p>
          <Image src="/arrow.svg" width={20} height={20} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
