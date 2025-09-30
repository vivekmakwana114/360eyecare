"use client";
import GoogleMapEmbed from "../../../components/GoogleMapEmbed";
import Link from "next/link";
import LocationHeroSection from "../../../components/LocationHeroSection";
import ExpertiseSection from "../../../components/ExpertiseSection";
import { locationHeroYorkVille } from "constants/Images";
import { useState, useEffect } from "react";
import MeetOurFounder from "components/MeetOurFounder";
import Banner3 from "../../../components/Banner3";
import EyeExam from "../../../components/EyeExam";
import LocationServices from "../../../components/LocationServices";
import Image from "next/image";
import Insurance from "../../../components/Insurance";


import BeforeAppointmentRosedale from "../../../components/BeforeAppointmentRosedale";
import mockRosedaleReviews from "../../../constants/rosedaleReviews.json";

import {
  Rosedalechoose360eyeCareData,
  RosedaleeyeCareServiceData,
  RosedaleFaqData,
  RosedaleMajorStreets,
  RosedaleLandmarks,
  RosedaleAccessPoints,
} from "constants/Constants";
import EyeCareServices from "components/EyeCareServices";
import DryFaqs from "components/DryFaqs";
import ReviewsCarousel from "../../../components/ReviewsCarousel";

const TorontoRosedaleOptometrist = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <main className="pt-[110px]">
      <LocationHeroSection
        title="Leading Eye Clinic in Yorkville, Toronto | 360 Eyecare"
        desciption={
          <>
            Experience premium eye care with our optometrist, Dr. Sam Baraam,
            and our caring eye doctors in Yorkville. Conveniently located on
            Bloor Street West near Bay Street, serving Yorkville, The Annex, 
            Downtown Toronto, and Rosedale with comprehensive eye exams,
            advanced dry eye treatment, and personalized vision solutions.
          </>
        }
        ctaText="Book Your Eye Exam Today"
        ctaLink="https://360rosedale.mypatientportal.xyz/dashboard"
        ctaClinic="Call Our Clinic"
        ctaNumber="416-901-2725"
        imageSrc={locationHeroYorkVille}
        imageAlt="360 Eyecare Optometrist in Yorkville Toronto"
      />
      <MeetOurFounder
        title="Your Trusted Optometrist in Yorkville, Toronto"
        description={
          <>
            Dr. Sam Baraam is recognized as one of Toronto's leading eye
            doctors, bringing over 10 years of expertise to 360 Eyecare
            Yorkville. With a dedication to patient education, innovative
            treatments, and community engagement, Dr. Baraam provides
            personalized vision care to every patient.
          </>
        }
        ctaText="Book with Dr. Baraam"
        ctaLink="https://360rosedale.mypatientportal.xyz/dashboard"
        imageAlt="Dr Sam Baraam Optometrist Yorkville Toronto"
      />

      <ExpertiseSection
        title="Professional Credentials & Expertise:"

        description={[
          <>
            <strong>Canadian Association of Optometrists (CAO)</strong> -
            Certified Member
          </>,
          <>
            <strong>Ontario Association of Optometrists</strong> - Active Member
          </>,
          <>
            <strong>US National Board Examinations (NBEO)</strong> -
            Successfully completed all three parts
          </>,
          <>
            <strong>
              College of Optometrists in Vision Development (COVD)
            </strong>{" "}
            - Member
          </>,
          <>
            <strong>Advanced Dry Eye Treatment</strong> - IPL and RF Therapy
            Experienced
          </>,
          <>
            <strong>Pediatric Eye Care Specialist</strong> - Child vision
            development expertise
          </>,
        ]}
        experience={[
          { years: "10+", label: "Years of Experience" },
          { years: "10+", label: "Skilled Optometrists and Staff" },
          { years: "10,000+", label: "10,000+ Satisfied Patients" },
        ]}
      />

      <EyeCareServices
        heading="Our Eye Care Services in Yorkville, Toronto"
        eyeCareServiceData={RosedaleeyeCareServiceData}
        choose360eyeCareData={Rosedalechoose360eyeCareData}
        choose360eyeCareTitle="Why Choose 360 Eyecare Yorkville?"
        imageBack="/public/eyecareservice_image1_rosedale.svg"
        altBack="360 Eyecare Eye Clinic Yorkville Toronto"
        imageFront="/public/eyecareservice_image2_rosedale.svg"
        altFront="Eyewear in Yorkville Toronto"
      />

      <div>
        <Insurance/>
      </div>
      <div className="my-12">
        <Banner3 />
      </div>

      <div>
        <EyeExam heading="What to Expect During Your Yorkville Eye Exam" />
      </div>

      <BeforeAppointmentRosedale />

      <LocationServices
        mainTitle="Serving Toronto Streets & Neighborhoods"
        majorStreetsTitle="Major Streets We Serve"
        landmarksTitle="Nearby Toronto Landmarks & Areas"
        accessTitle="Easy Access from All Downtown Areas"
        majorStreets={RosedaleMajorStreets}
        landmarks={RosedaleLandmarks}
        accessPoints={RosedaleAccessPoints}
        disclaimerText="*Perfect for residents and workers along Bloor Street corridor, Bay Street financial district, Church-Wellesley Village, and Queen's Park government area."
        searchText={`*Searching for "eye doctor Bloor Street", "optometrist near Queen's Park", "Bay Street eye clinic", or "Church Street optometrist"? "We're your closest, best eye care on Bloor Street West!`}
      />

      <ReviewsCarousel title="Happy Clients!" data={mockRosedaleReviews} />

      <DryFaqs
        faqData={RosedaleFaqData}
        title="Frequently Asked Questions (FAQs)"
      />

      <GoogleMapEmbed
        src="https://www.google.com/maps?q=360+Eyecare+-+Yorkville+Rosedale,+55+Bloor+St+W,+Toronto,+ON+M4W+1A5,+Canada&output=embed"
        title="360 Eyecare Yorkville Rosedale Location"
      />
    </main>
  );
};

export default TorontoRosedaleOptometrist;
