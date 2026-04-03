import React from "react";
import Image from "next/image";

/**
 * GuideFeatureImage: A component for displaying a large feature image (1216x600)
 * at the start of a guide page, with accompanying content underneath.
 */
const GuideFeatureImage = ({ image, content }) => {
  if (!image && !content) return null;

  return (
    <section className="max-w-[1216px] mx-auto my-12 sm:my-20 px-4 xl:px-0">
      {image && (
        <div className="relative w-full aspect-[2.02/1] overflow-hidden rounded-2xl shadow-xl border border-gray-100 mb-10 group">
          <Image
            src={image}
            alt="Feature Guide Image"
            fill
            sizes="(max-width: 1216px) 100vw, 1216px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Subtle gradient overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      )}

      {content && (
        <div className="max-w-4xl mx-auto">
          <div className="text-neutral-600 text-lg leading-relaxed space-y-6 font-light">
            {content}
          </div>
          <div className="mt-8 flex justify-start">
            <hr className="w-16 h-1 bg-combination-100 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GuideFeatureImage;
