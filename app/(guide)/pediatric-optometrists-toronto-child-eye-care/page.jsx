import React from "react";
import SubHeader from "../../../components/SubHeader";
import LocationSection from "../../../components/common/guides/LocationSection";
import { guideData } from "../../../constants/guidedata/pediatric-optometrists-toronto-child-eye-care";
import GuideImageRight from "../../../components/common/guides/GuideImageRight";
import GuideImageLeft from "../../../components/common/guides/GuideImageLeft";
import GuideImageCenter from "../../../components/common/guides/GuideImageCenter";
import GuideImageFullRight from "../../../components/common/guides/GuideImageFullRight";
import GuideCarousel from "../../../components/common/guides/GuideCarousel";
import GuideFeatureImage from "../../../components/common/guides/GuideFeatureImage";
import GuideKeyTakeaways from "../../../components/common/guides/GuideKeyTakeaways";
import Faqs from "../../../components/Faqs";
import FloatingBookButton from "../../../components/common/guides/FloatingBookButton";

export const metadata = {
  title: "Pediatric Optometrists in Toronto on Caring for Your Child’s Eyes",
  description: "Protect your child’s vision with tips from pediatric optometrists in Toronto on eye care, early detection, and healthy habits for growing eyes.",
};

const PediatricGuide = () => {
      if (!guideData) return <div>Guide not found</div>;
  return (
    <main className="pt-[110px] pb-10 sm:pb-32 relative">
      <SubHeader
      text={guideData.subtitle}
      />
      
      <GuideFeatureImage 
        image={guideData.featureImage} 
        content={guideData.content} 
      />

      <GuideKeyTakeaways takeaways={guideData.keyTakeaways} />
      
       <GuideImageRight {...guideData.sections[0]} />
 
      {/* Section 1 – Warning Signs */}
      <GuideImageLeft {...guideData.sections[1]} />
 
      {/* Section 2 – Why Regular Eye Exams Are Essential */}
      <GuideImageRight {...guideData.sections[2]} />
 
      {/* Section 3 – Myopia & Hyperopia */}
      <GuideImageLeft {...guideData.sections[3]} />
 
      {/* Section 4 – Amblyopia & Strabismus + Other Concerns */}
      <GuideImageRight {...guideData.sections[4]} />
 
      {/* Section 5 – Screen Time, Outdoor Play & Healthy Habits */}
      <GuideImageLeft {...guideData.sections[5]} />
 
      {/* Section 6 – Eye Protection (Sports, UV, Ergonomics) */}
      <GuideImageRight {...guideData.sections[6]} />
 
      {/* Section 7 – When to Seek Immediate Care */}
      <GuideImageLeft {...guideData.sections[7]} />
 
      {/* Section 8 – Conclusion */}
      <GuideImageRight {...guideData.sections[8]} />
      
      {guideData.faqs?.length > 0 && (
        <section className="max-w-6xl mx-auto my-12 sm:my-20 px-4 sm:px-0">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900] mb-4">Frequently Asked Questions</h2>
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
export default PediatricGuide;
