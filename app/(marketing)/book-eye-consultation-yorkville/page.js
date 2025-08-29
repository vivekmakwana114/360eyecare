import React from "react";
import Banner from "../../../components/marketing-page/Banner";
import HappyClients from "../../../components/marketing-page/HappyClients";
import PrimaryBackground from "../../../components/marketing-page/PrimaryBackground";
import DigitalEyeStain from "../../../components/marketing-page/DigitalEyeStain";
import HeroSection from "../../../components/marketing-page/HeroSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <HappyClients />
      <PrimaryBackground />
      <DigitalEyeStain />      
      <Banner />
    </main>
  );
};

export default page;
