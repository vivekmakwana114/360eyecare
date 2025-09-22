"use client";
import React from "react";
import Image from "next/image";
export default function ExpertiseSection({
  title,
  description = [],
  experience = [],
}) {
  return (
    <div className={`bg-[#28305F] text-[#FFFFFF] py-12 px-6 md:px-12`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-[#FFFFFF] mb-6">
            {title}
          </h2>
          <ul className="space-y-4">
            {description?.map((desc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Image
                  src="/public/point.svg"
                  alt="Triangle arrow"
                  width={20}
                  height={20}
                />
                <span className="text-md leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* right side */}
        <div className="flex flex-col justify-items-center items-start space-y-8 mt-10">
          {experience?.map((exp, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-[#FFFFFF] w-full md:w-auto"
            >
              {/* Circular Icon */}
              <div className="flex items-center justify-center w-15 h-15 bg-white rounded-full p-1">
                <Image
                  src="/public/medal.svg"
                  alt="Award"
                  width={45}
                  height={45}
                />
              </div>
              <div>
                <p className="text-xl font-bold">{exp.years}</p>
                <p className="text-sm">{exp.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
