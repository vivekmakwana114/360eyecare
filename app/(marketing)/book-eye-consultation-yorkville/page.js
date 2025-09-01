import React from "react";
import Banner from "../../../components/marketing-page/Banner";
import HappyClients from "../../../components/marketing-page/HappyClients";
import PrimaryBackground from "../../../components/marketing-page/PrimaryBackground";
import DigitalEyeStain from "../../../components/marketing-page/DigitalEyeStain";
import HeroSection from "../../../components/marketing-page/HeroSection";
import BookFreeConsultation from "../../../components/marketing-page/BookFreeConsultation";

const page = () => {
  return (
    <main>
      <HeroSection />
      <HappyClients />
      <PrimaryBackground />
      <DigitalEyeStain />
      <Banner />

      <div className="hidden md:block">
        <BookFreeConsultation />
      </div>

      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50">
        <BookFreeConsultation />
      </div>

    </main>
  );
};

export default page;
