import React from "react";
import Image from "next/image";

/**
 * GuideImageFullRight: A standalone component with text on the left and a full-height image on the right.
 * The image container takes up a fixed portion of the screen on desktop.
 */
const GuideImageFullRight = ({
  heading,
  subheading,
  image,
  contentTop,
  contentBottom,
}) => {
  return (
    <section className="max-w-6xl mx-auto my-12 sm:my-20 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-10 sm:gap-16">
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

        {/* Image Side - Full Height Right */}
        {image?.src && (
          <div className="w-full sm:w-auto flex flex-row items-stretch">
            <div className="relative overflow-hidden rounded-sm bg-gray-50 min-h-[400px] sm:min-h-[600px]">
              <Image
                src={image.src}
                alt={image.alt || heading || "Guide Image"}
                width={600}
                height={800}
                className="w-full h-[400px] object-cover sm:w-[500px] sm:h-[650px]"
                priority
              />
            </div>
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

export default GuideImageFullRight;
