import React from "react";
import Image from "next/image";

/**
 * GuideImageCenter: A standalone component with centered text and a large image.
 * Renders heading and content at the top, followed by a wide image.
 */
const GuideImageCenter = ({
  heading,
  subheading,
  image,
  contentTop,
  contentBottom,
}) => {
  return (
    <section className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-12 sm:mb-16 px-4 sm:px-0 text-center">
      <div className="max-w-4xl mx-auto mb-10">
        {heading && (
          <>
            <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900] mb-4">
              {heading}
            </h2>
            <div className="flex justify-center mb-6">
              <hr className="w-20 h-1 bg-combination-100" />
            </div>
          </>
        )}
        {subheading && (
          <h3 className="text-xl font-bold text-combination-200 mb-4">
            {subheading}
          </h3>
        )}
        <div className="text-neutral-500 text-base leading-relaxed space-y-4">
          {contentTop}
        </div>
      </div>
      
      {image?.src && (
        <div className="mb-10 flex justify-center w-full px-4 text-center">
          <div 
            className="relative overflow-hidden rounded-lg shadow-lg border border-gray-100"
            style={{ 
              maxWidth: "800px",
              width: "100%" 
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || heading || "Guide Image"}
              width={800}
              height={450}
              className="w-full h-auto object-cover sm:w-[800px] sm:h-[450px]"
              priority
            />
          </div>
        </div>
      )}
      
      {contentBottom && (
        <div className="text-neutral-500 text-base leading-relaxed space-y-4 max-w-4xl mx-auto">
          {contentBottom}
        </div>
      )}
    </section>
  );
};

export default GuideImageCenter;
