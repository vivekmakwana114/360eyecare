import React from "react";
import Image from "next/image";

/**
 * GuideImageLeft: A standalone component with an image on the left and text on the right.
 * Features a decorative gray bar to the right of the image.
 */
const GuideImageLeft = ({
  heading,
  subheading,
  image,
  contentTop,
  contentBottom,
}) => {
  return (
    <section className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-12 sm:mb-16 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row-reverse justify-between items-stretch gap-10 sm:gap-16">
        {/* Content Side */}
        <div className="w-full sm:flex-1 flex flex-col gap-4">
          {heading && (
            <>
              <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900] leading-tight">
                {heading}
              </h2>
              <hr className="w-20 h-1 bg-combination-100 mb-2" />
            </>
          )}
          {subheading && (
            <h3 className="text-xl font-bold text-combination-200 -mt-2">
              {subheading}
            </h3>
          )}
          <div className="text-neutral-500 text-base leading-relaxed space-y-4">
            {contentTop}
          </div>
        </div>

        {/* Image Side - Image on Left */}
        {image?.src && (
          <div className="w-full sm:w-auto flex flex-row items-stretch">
            <div className="relative overflow-hidden rounded-sm bg-gray-50 flex items-center justify-center sm:w-[585px] sm:h-[536px]">
              <Image
                src={image.src}
                alt={image.alt || heading || "Guide Image"}
                width={585}
                height={536}
                className="w-full h-full object-cover sm:w-[585px] sm:h-[536px]"
                priority
              />
            </div>
            
            {/* Decorative Gray Bar */}
            {/* <div className="hidden sm:block w-[4px] bg-gray-300 ml-4 shrink-0" /> */}
          </div>
        )}
      </div>
      
      {contentBottom && (
        <div className="mt-10 text-neutral-500 text-base leading-relaxed space-y-4">
          {contentBottom}
        </div>
      )}
    </section>
  );
};

export default GuideImageLeft;
