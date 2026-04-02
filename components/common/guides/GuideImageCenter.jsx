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
    <section className="max-w-6xl mx-auto my-12 sm:my-20 px-4 sm:px-0 text-center">
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
        <div className="mb-10 flex justify-center w-full">
          <div className="relative max-w-4xl w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src}
              alt={image.alt || heading || "Guide Image"}
              width={image.width || 1000}
              height={image.height || 500}
              className="w-full h-auto object-cover"
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
