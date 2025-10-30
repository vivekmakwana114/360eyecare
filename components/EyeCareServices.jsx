"use client";
import { eyeCareServicesImage } from "constants/Images";
import Image from "next/image";
import React, { useState } from "react";

const EyeCareServices = ({
  eyeCareServiceData,
  choose360eyeCareData,
  choose360eyeCareTitle,
  heading,
  imageFront,
  imageBack,
  altFront,
  altBack,
}) => {
  const [openIndex, setOpenIndex] = useState(1);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
      {/* Heading and paragraph*/}
      <div className="flex flex-col gap-6 text-center md:text-left mb-10 justify-items-center items-center">
        <h2 className="font-poppins font-[700] text-[28px] md:text-[32px] lg:text-[40px] text-[#28305F]">
          {heading}
        </h2>
        <p className="font-poppins font-[400] text-[14px] md:text-[16px] lg:text-[18px] text-neutral-500">
          Explore the treatments and specialties we provide for your complete
          vision care.
        </p>
      </div>

      {/*  Accordion + Right side image  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Accordion Section */}
        <div className="w-full order-2 md:order-1">
          <div className="flex flex-col gap-6">
            {eyeCareServiceData.map((item) => (
              <div
                key={item.id}
                className="border border-[#E1E6EB] rounded-[8px] p-[10px]"
              >
                <div className="flex flex-col gap-3">
                  <div
                    className="flex flex-row justify-between cursor-pointer"
                    onClick={() =>
                      setOpenIndex(item.id === openIndex ? null : item.id)
                    }
                  >
                    <div className="flex flex-row gap-3 md:items-start items-center">
                      <div className="bg-combination-100 w-7 h-7 rounded-[6px] flex justify-center items-center shrink-0">
                        <Image
                          src={item.icon}
                          alt="Eye Care Service"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[#28305F] font-[600] text-[18px]">
                        {item.head}
                      </p>
                    </div>

                    <div className="flex justify-center items-center border border-[#E1E6EB] rounded-[6px] w-[22px] h-[22px] shrink-0">
                      <Image
                        src={`${
                          item.id === openIndex
                            ? "/public/minusIcon.svg"
                            : "/public/plusIcon.svg"
                        }`}
                        alt="Eye Care Service"
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>

                  {item.id === openIndex && (
                    <div className="flex flex-col gap-2">
                      <p className="text-[16px] font-poppins text-[#888888]">
                        {item.para[0]}
                      </p>
                      <ul className="list-disc list-inside px-2 font-poppins text-[#888888] marker:text-combination-200 leading-relaxed">
                        {item?.para?.slice(1)?.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Images Section */}
        <div className="w-full order-1 md:order-2">
          <div
            className="relative flex justify-center items-center overflow-visible 
                  h-[280px] sm:h-[340px] md:h-[400px]"
          >
            {/* Back Image */}
            <div
              className="absolute top-0 right-0 z-10 border-4 border-[#41BBC8] bg-white 
                    w-[80%] sm:w-[300px] md:w-[350px]  shadow-md"
            >
              <div className="relative aspect-[7/5] m-3 sm:m-4 md:m-6">
                <Image
                  src={imageBack}
                  alt={altBack}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 80vw, 350px"
                />
              </div>
            </div>

            {/* Front Image */}
            <div
              className="absolute  -bottom-8 sm:-bottom-10 md:-bottom-14 z-20 border-4 border-[#28305F] bg-white 
                    w-[80%] sm:w-[300px] md:w-[350px]  shadow-lg"
            >
              <div className="relative  aspect-[7/5] m-3 sm:m-4 md:m-6">
                <Image
                  src={imageFront}
                  alt={altFront}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 80vw, 350px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-[100px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-[700] text-[36px] text-center text-[#28305F] max-w-xl">
            {choose360eyeCareTitle}
          </h2>
          <p className="font-[400] text-[16px] text-center text-neutral-500 max-w-4xl">
            Discover the key reasons why patients trust and choose our clinic
            for exceptional eye care services.
          </p>
        </div>

        <div className="flex flex-row gap-5 flex-wrap">
          {choose360eyeCareData.map((item, index) => {
            return (
              <div
                key={index}
                className="md:w-[285px] w-full md:h-[352px] h-full border-[#E1E6EB] border-[1px] rounded-[8px] p-5"
              >
                <div className="flex flex-col gap-3">
                  <div className="bg-combination-100 w-[60px] h-[60px] rounded-[8px] flex justify-center items-center">
                    <Image
                      src={item.icon}
                      alt="Eye Care Service"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="font-[600] text-[18px] text-[#28305F]">
                    {item.head}
                  </p>
                  <p className="font-[400] text-[16px] text-neutral-500">
                    {item.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EyeCareServices;
