"use client";
import LocationHeroSection from "../../../components/LocationHeroSection";
import GoogleMapEmbed from "../../../components/GoogleMapEmbed";
import Link from "next/link";
import { locationHeroBeaches } from "constants/Images";
import { useState, useEffect } from "react";
import MeetOurFounder from "../../../components/MeetOurFounder";
import ExpertiseSection from "../../../components/ExpertiseSection";
import EyeCareServices from "../../../components/EyeCareServices";
import Banner3 from "../../../components/Banner3";
import EyeExam from "../../../components/EyeExam";
import BeforeYourAppointment from "../../../components/BeforeYourAppointment";
import Image from "next/image";
import LocationServices from "../../../components/LocationServices";
import Insurance from "../../../components/Insurance";

import {
  choose360eyeCareData,
  eyeCareServiceData,
  torontoBeachesFaqData,
  theBeachesMajorStreets,
  theBeachesLandmarks,
  theBeachesAccessPoints,
} from "constants/Constants";
import DryFaqs from "components/DryFaqs";
import ReviewsCarousel from "../../../components/ReviewsCarousel";
import mockBeachesReviews from "../../../constants/beachesReviews.json";

const TorontoBeachesOptometrist = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrollToForm = (e) => {
    if (typeof window !== "undefined") {
      e.preventDefault();
      const formSection = document.getElementById("beachesLocation-form");
      if (formSection) {
        const headerOffset = 120;
        const elementPosition = formSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Listen for resize events
      window.addEventListener("resize", checkMobile);

      // Handle initial scroll if coming from a link with hash
      const handleInitialScroll = () => {
        if (window.location.hash === "#beachesLocation-form") {
          const formSection = document.getElementById("beachesLocation-form");
          if (formSection) {
            const headerOffset = 120;
            const elementPosition = formSection.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      };

      // Small delay to ensure DOM is loaded
      const timer = setTimeout(handleInitialScroll, 100);

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkMobile);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <main className="pt-[110px] ">
      <LocationHeroSection
        title="360 Eyecare - Top Optometrist in the Beaches, Toronto"
        subtitle="Premium Eye Care Clinic Near You In The Beaches"
        desciption={
          <>
            Discover exceptional eye care with Dr. Sam Baraam at 360 Eyecare -
            The Beaches. Located on Queen Street East, near Woodbine Beach, we
            offer comprehensive eye exams, advanced dry eye treatments,
            pediatric eye exams, and personalized eye care for families across
            The Beaches, Leslieville, East Danforth, Upper Beaches, Danforth
            Village, and nearby areas.
           
          </>
        }
        ctaText="Book Your Eye Exam Today"
        ctaLink="#beachesLocation-form"
        ctaClinic="Call Our Clinic"
        ctaNumber="416-698-3937"
        onCtaClick={scrollToForm}
        imageSrc={locationHeroBeaches}
        imageAlt="360 Eyecare Optometrist in Beaches Toronto"
      />

      <MeetOurFounder
        title="Your Trusted Beaches Optometrist"
        description={
          <>
            As the lead optometrist at 360 Eyecare - The Beaches, Dr. Sam Baraam
            has established himself as one of Toronto's most respected eye care
            doctors. Serving the vibrant Beaches community with dedication to
            innovative treatments and exceptional patient care, Dr. Baraam
            brings extensive expertise in comprehensive eye health management.
          </>
        }
        ctaText="Book with Dr. Baraam"
        ctaLink="/book-eye-exam"
        onCtaClick={scrollToForm}
        imageAlt="Dr Sam Baraam Optometrist Beaches Toronto"
      />

      <ExpertiseSection
        title="Specialized Training & Certifications :"

        description={[
          <>
            <strong>Therapeutic Optometry Certification</strong> -
            Licensed to diagnose and treat eye diseases
          </>,
          <>
            <strong>Ortho-K Specialty Training</strong> - Advanced myopia control techniques
          </>,
          <>
            <strong>Dry Eye Treatment Expert</strong> -
            IPL and RF therapy certified
          </>,
          <>
            <strong>
              Cataract Co-Management 
            </strong>{" "}
           - Pre and post-surgical care specialist
          </>,
          <>
            <strong>Pediatric Eye Care Specialist</strong> - Child vision development expertise
          </>,
        ]}
        experience={[
          { years: "10+", label: "Years of Experience" },
          { years: "10+", label: "Skilled Optometrists and Staff" },
          { years: "10,000+", label: "10,000+ Satisfied Patients" },
        ]}
      />
      <EyeCareServices
        heading="Our Complete Eye Care Services in the Beaches"
        eyeCareServiceData={eyeCareServiceData}
        choose360eyeCareData={choose360eyeCareData}
        choose360eyeCareTitle="Why Choose 360 Eyecare Beaches For Your Eye Care?"
        imageBack="/eyecareservice_image1_beaches.svg"
        altBack="Eye Care in Beaches Toronto"
        imageFront="/eyecareservice_image2_beaches.svg"
        altFront="Beaches Optometry"
      />
      <div>
        <Insurance/>
      </div>

      <div className="my-12">
        <Banner3 />
      </div>

      <div className="mt-12">
        <EyeExam heading="What to Expect During Your Beaches Eye Exam" />
      </div>

      <BeforeYourAppointment id="beachesLocation-form" />

      <LocationServices
        mainTitle="Serving the Greater Beaches Community"
        majorStreetsTitle="Beaches Neighborhoods & Streets"
        landmarksTitle="Famous Beaches Landmarks & Attractions"
        accessTitle="Getting to Our Queen Street East Clinic"
        majorStreets={theBeachesMajorStreets}
        landmarks={theBeachesLandmarks}
        accessPoints={theBeachesAccessPoints}
        disclaimerText={`*Ideal for residents of Leslieville, East Danforth, Upper Beaches, Danforth Village, and beach visitors seeking quality eye care.`}
        searchText={`*Searching for "eye doctor Queen Street East", "optometrist near Woodbine Beach", or "Beaches eye clinic"? You've found the best eye care destination in Toronto's beach community!`}
      />

      <ReviewsCarousel title="Happy Clients!" data={mockBeachesReviews} />

      <DryFaqs
        faqData={torontoBeachesFaqData}
        title="FAQs (Frequently Asked Questions)"
      />

      <GoogleMapEmbed
        src={
          "https://maps.google.com/maps?q=360%20eyecare%20-%20beaches&t=m&z=15&output=embed&iwloc=near"
        }
      />
    </main>
  );
};

export default TorontoBeachesOptometrist;
