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

const Page3Guide = () => {
  const guideData = guides["page-3"];
  if (!guideData) return <div>Guide not found</div>;
  const renderSection = (section, index) => {
    const commonProps = { key: index, heading: section.heading, subheading: section.subheading, image: section.image, contentTop: section.contentTop, contentBottom: section.contentBottom, points: section.points };
    switch (section.layout) {
      case "image-right": return <GuideImageRight {...commonProps} />;
      case "image-left": return <GuideImageLeft {...commonProps} />;
      case "image-center": return <GuideImageCenter {...commonProps} />;
      case "image-full-right": return <GuideImageFullRight {...commonProps} />;
      case "grid-points": return <GuideCarousel {...commonProps} />;
      default: return <GuideImageRight {...commonProps} />;
    }
  };
  return (
    <main className="pt-[110px] relative">
      <SubHeader title={guideData.title} subtitle={guideData.subtitle} backgroundImage={guideData.headerImage} />
      {guideData.sections?.map((section, index) => renderSection(section, index))}
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
export default Page3Guide;
