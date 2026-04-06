import React from "react";
import Image from "next/image";

/**
 * GuideImageRight: A standalone component with text on the left and an image on the right.
 * Features a decorative gray bar to the left of the image.
 */
const GuideImageRight = ({
  heading,
  subheading,
  image,
  contentTop,
  contentBottom,
}) => {
  return (
    <section className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-12 sm:mb-16 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-10 sm:gap-16">
        {/* Content Side */}
        <div className="w-full sm:flex-1 flex flex-col gap-4">
          {heading && (
            <>
              <h2 className="text-primary text-3xl sm:text-[37px] font-[900] leading-tight">
                {heading}
              </h2>
              <hr className="w-20 h-1 bg-secondary mb-2" />
            </>
          )}
          {subheading && (
            <h3 className="text-xl font-bold text-primary -mt-2">
              {subheading}
            </h3>
          )}
          <div className="text-neutral-500 text-base leading-relaxed space-y-4 text-justify">
            {contentTop}
          </div>
        </div>

        {/* Image Side - Image on Right */}
        {image?.src && (
          <div className="w-full sm:flex-1 flex flex-row items-stretch">
            {/* Decorative Gray Bar */}
            {/* <div className="hidden sm:block w-[4px] bg-gray-300 mr-4 shrink-0" /> */}
            
            <div className="relative overflow-hidden rounded-sm bg-gray-50 flex items-center justify-center w-full">
              <Image
                src={image.src}
                alt={image.alt || heading || "Guide Image"}
                width={585}
                height={536}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
      
      {contentBottom && (
        <div className="mt-10 text-neutral-500 text-base leading-relaxed space-y-4 text-justify">
          {contentBottom}
        </div>
      )}
    </section>
  );
};

export default GuideImageRight;
