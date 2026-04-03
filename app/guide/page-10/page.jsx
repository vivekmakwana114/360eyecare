import React from "react";
import SubHeader from "../../../components/SubHeader";
import LocationSection from "../../../components/common/guides/LocationSection";
import { guides } from "../../../constants/guideData";
import GuideImageRight from "../../../components/common/guides/GuideImageRight";
import GuideImageLeft from "../../../components/common/guides/GuideImageLeft";
import GuideImageCenter from "../../../components/common/guides/GuideImageCenter";
import GuideImageFullRight from "../../../components/common/guides/GuideImageFullRight";
import GuideCarousel from "../../../components/common/guides/GuideCarousel";
import Faqs from "../../../components/Faqs";
import FloatingBookButton from "../../../components/common/guides/FloatingBookButton";

const Page10Guide = () => {
  const guideData = guides["page-10"];
  if (!guideData) return <div>Guide not found</div>;
  return (
    <main className="pt-[110px] pb-10 sm:pb-32 relative">
      <SubHeader title={guideData.title} subtitle={guideData.subtitle} backgroundImage={guideData.headerImage} />
      
      {/* Sections will be added here directly when data is available */}
      
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
export default Page10Guide;
