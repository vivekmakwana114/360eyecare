import React from "react";
import SubHeader from "../../../components/SubHeader";
import LocationSection from "../../../components/common/guides/LocationSection";
import { guideData } from "../../../constants/guidedata/eye-doctor-toronto-optometrist-ophthalmologist-optician";
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
  title: "Eye Doctor in Toronto Helps You Decide: Optometrist, Ophthalmologist, or Optician?",
  description: "Not sure which eye doctor in Toronto to see? Discover whether an optometrist, ophthalmologist, or optician is right for your vision needs.",
};

const EyeDoctorGuide = () => {
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
      <GuideImageLeft {...guideData.sections[1]} />
      <GuideImageRight {...guideData.sections[2]} />
      <GuideImageLeft {...guideData.sections[3]} />
      <GuideImageRight {...guideData.sections[4]} />
      <GuideImageLeft {...guideData.sections[5]} />
      <GuideImageRight {...guideData.sections[6]} />
      <GuideImageLeft {...guideData.sections[7]} />
      
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
export default EyeDoctorGuide;
