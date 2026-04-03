import React from "react";
import SubHeader from "../../components/SubHeader";
import LocationSection from "../../components/common/guides/LocationSection";
import { guides } from "../../constants/guideData";

// Import specialized components
import GuideImageRight from "../../components/common/guides/GuideImageRight";
import GuideImageLeft from "../../components/common/guides/GuideImageLeft";
import GuideImageCenter from "../../components/common/guides/GuideImageCenter";
import GuideFeatureImage from "../../components/common/guides/GuideFeatureImage";

import Faqs from "../../components/Faqs";
import FloatingBookButton from "../../components/common/guides/FloatingBookButton";

/**
 * Main Guide Page serving as the landing page (renders 'page-1' content).
 */
const GuidePage = () => {
  const guideData = guides["page-1"];
  
  if (!guideData) return <div>Guide not found</div>;

  return (
    <main className="pt-[110px] pb-10 sm:pb-32 relative">
      <SubHeader
      text={guideData.title}
      />
      
      <GuideFeatureImage 
        image={guideData.featureImage} 
        content={guideData.content} 
      />
      
      <GuideImageRight {...guideData.sections[0]} />
      <GuideImageRight {...guideData.sections[1]} />
      <GuideImageLeft {...guideData.sections[2]} />
      <GuideImageRight {...guideData.sections[3]} />
      <GuideImageLeft {...guideData.sections[4]} />
      <GuideImageRight {...guideData.sections[5]} />
      <GuideImageLeft {...guideData.sections[6]} />
      <GuideImageRight {...guideData.sections[7]} />
      <GuideImageLeft {...guideData.sections[8]} />
      <GuideImageRight {...guideData.sections[9]} />
      <GuideImageLeft {...guideData.sections[10]} />
      <GuideImageRight {...guideData.sections[11]} />
      <GuideImageCenter {...guideData.sections[12]} />

      {/* Explore Other Guides */}
      <section className="max-w-6xl mx-auto my-12 sm:my-24 px-4 sm:px-0 border-t border-gray-100 pt-16">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900] mb-4">
            Explore More Eyecare Guides
          </h2>
          <hr className="w-[65px] h-1 bg-combination-100 hidden sm:block mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Object.keys(guides)
              .filter((key) => key !== "page-1")
              .slice(0, 6)
              .map((key) => (
                <a
                  key={key}
                  href={key === "page-1" ? "/guide/" : `/guide/${key}/`}
                  className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-combination-100 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-combination-200 group-hover:text-combination-100 transition-colors">
                    {guides[key].title}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-2">
                    {guides[key].subtitle || "Expert advice and clinical insights from our specialists."}
                  </p>
                  <span className="inline-block mt-4 text-combination-100 font-semibold text-sm">
                    Read Guide →
                  </span>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Moved to bottom */}
      {guideData.faqs?.length > 0 && (
        <section className="max-w-6xl mx-auto my-12 sm:my-20 px-4 sm:px-0">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900] mb-4">
              Frequently Asked Questions
            </h2>
            <hr className="w-[65px] h-1 bg-combination-100 hidden sm:block" />
          </div>
          <Faqs faqData={guideData.faqs} />
        </section>
      )}

      <LocationSection />
      <FloatingBookButton />
    </main>
  );
};

export default GuidePage;
