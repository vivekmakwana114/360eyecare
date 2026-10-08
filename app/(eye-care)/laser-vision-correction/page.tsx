import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";

import Image from "next/image";

import LaserVisionSlider from "../../../components/LaserVisionSlider";
import Benefits from "../../../components/Benefits";
import Faqs from "../../../components/Faqs";
import ClinicBookingCards from "../../../components/ClinicBookingCards";
import {
  benefitsData,
  dryEyeClinics,
  laserCandidacyFactors,
  laserCoManagementSteps,
  laserNotCandidates,
  laservisiondata,
  laserVisionFaqs,
} from "../../../constants/Constants";
import LaserVisionService from "../../../components/LaserVisionService";
import {
  LaserCorrectionImage,
  LaserVisionServiceImage,
  PatientScaledImage,
  laservisioncorrection2,
} from "../../../constants/Images";

const pageTitle =
  "Laser Vision Correction Toronto | LASIK, PRK & SMILE Co-Management | 360 Eyecare";
const pageDescription =
  "Independent laser eye surgery candidacy assessments and post-operative care for LASIK, PRK and SMILE at 360 Eyecare's Yorkville and Beaches clinics in Toronto.";
const pageUrl = "https://www.360eyecare.ca/laser-vision-correction/";

export async function generateMetadata() {
  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: "360 Eyecare",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// FAQPage structured data built from the same array the accordion renders
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: laserVisionFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const linkClass = "text-combination-200 hover:text-combination-100";
const sectionClass = "max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0";
const h2Class =
  "text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-2";
const paraClass = "text-neutral-500 text-base mb-4";
const cardClass =
  "bg-gray-50 rounded-lg p-6 border-t-4 border-combination-100 flex flex-col gap-2";
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-md";

const BookButtons = () => (
  <div className="flex flex-col gap-3">
    {dryEyeClinics.map((clinic) => (
      <Link key={clinic.name} href={clinic.bookHref} className={bookButtonClass}>
        Book a Laser Vision Correction Consultation — {clinic.shortName}
      </Link>
    ))}
  </div>
);

const IntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    <div className="md:col-span-2 flex flex-col gap-4 -mb-4 md:-mb-6">
      <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900]">
        {/* Independent Care Before and After Laser Eye Surgery */}
        Laser Vision Correction in Toronto <br />Pre- and Post-Operative Co-Management
      </h2>
      <hr className="w-20 h-1 bg-combination-100" />
    </div>
    <div className="flex flex-col gap-4">
      <p className="text-neutral-500 text-base md:text-lg">
        Laser vision correction is one of the most commonly performed elective
        surgical procedures in the world. But before this surgical procedure,
        or any other procedure for that matter, a thorough candidacy assessment
        determines whether your eyes are suitable for laser correction, which
        procedure is most appropriate, and what realistic outcomes look like
        for your specific prescription and corneal anatomy. After surgery,
        careful monitoring ensures your healing is progressing correctly, and
        your final visual outcome is optimised.
      </p>
      <p className="text-neutral-500 text-base md:text-lg">
        At 360 Eyecare, our optometrists at both the{" "}
        <Link href="/toronto-rosedale-optometrist" className={linkClass}>
          Yorkville clinic
        </Link>{" "}
        on Bloor Street West and the{" "}
        <Link href="/toronto-beaches-optometrist" className={linkClass}>
          Beaches clinic
        </Link>{" "}
        on Queen Street East provide laser vision correction co-management.
        This refers to the pre-surgical consultation, candidacy assessment, and
        post-operative care that surrounds the surgical procedure itself. We
        work with experienced refractive surgeons in Toronto to ensure a
        seamless continuum of care from your initial assessment through to
        your final post-operative visit.
      </p>
      <p className="text-neutral-500 text-base md:text-lg">
        If you&apos;re considering laser vision correction and want an honest,
        independent assessment of whether you&apos;re a suitable candidate from
        an optometrist who has no financial interest in whether you proceed
        with surgery, we&apos;re the right starting point.
      </p>
    </div>
    <div className="flex flex-col gap-6">
      <Image
        src={PatientScaledImage}
        alt="Optometrist examining a patient's eyes at a slit lamp"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        className="w-full h-auto aspect-[4/3] object-cover object-[center_40%] rounded-lg shadow-sm"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-base">
          {dryEyeClinics.map((clinic) => (
            <a
              key={clinic.name}
              href={`tel:+1-${clinic.phone}`}
              className={`${linkClass} font-semibold whitespace-nowrap`}
            >
              📞 {clinic.shortName}: {clinic.phone}
            </a>
          ))}
        </div>
        <BookButtons />
      </div>
    </div>
  </div>
);

const page = () => {
  return (
    <main className="pt-[110px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SubHeader text="Laser Vision Correction in Toronto" />
      <IntroSection />

      <div className={sectionClass}>
        <h2 className={h2Class}>What is Laser Vision Correction Co-Management?</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-6" />
        <div className="flow-root">
          <Image
            src={LaserVisionServiceImage}
            alt="Optometrist assessing a patient's eyes before laser vision correction"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="w-full h-auto aspect-[4/3] md:aspect-[4/5] object-cover rounded-lg mb-6 md:float-right md:w-[40%] md:ml-10 md:mb-4"
          />
          <p className={paraClass}>
            Laser eye surgery, whether LASIK, PRK, or SMILE, is performed by an
            ophthalmologist or refractive surgeon in a surgical facility. The
            optometrist&apos;s role in laser vision correction is the
            co-management component: the clinical work that happens before and
            after the surgical procedure.
          </p>
          <p className={paraClass}>
            <strong className="text-combination-200">Before surgery</strong>,
            your optometrist conducts the candidacy assessment to determine
            whether your prescription, corneal anatomy, tear film health, and
            ocular health make you a suitable candidate for laser correction,
            and if so, which procedure is most appropriate. This assessment
            uses the same{" "}
            <Link href="/advanced-diagnostics-eye-exams" className={linkClass}>
              diagnostic technology
            </Link>{" "}
            used for general eye care: corneal topography to map the corneal
            surface and screen for keratoconus, pachymetry to measure corneal
            thickness, tear film assessment to identify dry eye that could
            affect surgical outcomes, and a full ocular health evaluation. The
            findings are communicated to the surgical team along with your
            co-managing optometrist&apos;s clinical assessment.
          </p>
          <p className={paraClass}>
            <strong className="text-combination-200">After surgery</strong>,
            your optometrist manages your post-operative care and the
            monitoring visits in the days, weeks, and months following the
            procedure that track your healing response, manage any
            post-operative dry eye or discomfort, assess whether the refractive
            outcome is on target, and identify any complications at the
            earliest possible stage. Most patients have more contact with their
            co-managing optometrist in the post-operative period than they do
            with the surgical team.
          </p>
          <p className="bg-gray-50 border-l-4 border-combination-100 rounded-r-lg p-5 text-neutral-600 text-base mb-4">
            The advantage of co-management with an independent optometrist like
            360 Eyecare is clinical objectivity. Your optometrist&apos;s role is
            to give you an accurate assessment of your candidacy and monitor
            your recovery, not to sell you surgery. If your corneal topography
            shows subclinical keratoconus, if your tear film is inadequate, or
            if your prescription falls outside the optimal range for the
            procedure you&apos;re considering, your co-managing optometrist will
            tell you and explain why.
          </p>
        </div>
      </div>

      <Benefits
        benefitsData={benefitsData}
        title="Why Choose Laser Vision Correction?"
        subtitle="Discover the benefits of LASIK and PRK for clear vision."
      />
      <LaserVisionService
        data={laservisiondata}
        image={laservisioncorrection2}
        imageTitle="Why Choose Us!"
        imageDesc="Experienced doctors with extensive training in laser vision correction management"
      />

      <div className={sectionClass}>
        <h2 className={h2Class}>Am I a Candidate for Laser Vision Correction?</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className={paraClass}>
          Not everyone is a suitable candidate for laser eye surgery.
          Determining candidacy accurately before proceeding is the most
          important step in the entire process. Here&apos;s what the assessment
          evaluates:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {laserCandidacyFactors.map((factor) => (
            <li key={factor.title} className={cardClass}>
              <h3 className="text-combination-200 text-lg sm:text-xl font-bold">
                {factor.title}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {factor.description}
              </p>
            </li>
          ))}
          <li className="bg-combination-200 rounded-lg p-6 flex flex-col gap-3 text-white">
            <h3 className="text-neutral-50 text-lg sm:text-xl font-bold">
              Who Typically Is NOT a Suitable Candidate
            </h3>
            <ul className="list-disc list-inside marker:text-combination-100 space-y-2 text-base leading-relaxed text-white/90">
              {laserNotCandidates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <LaserVisionSlider />

      {/* Co-management process */}
      <div className={sectionClass}>
        <h2 className={h2Class}>The Co-Management Process at 360 Eyecare</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className={paraClass}>
          Here&apos;s what the laser vision correction co-management process
          looks like when managed through 360 Eyecare&apos;s Yorkville or
          Beaches clinic:
        </p>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {laserCoManagementSteps.map((step, index) => (
            <li key={step.title} className={cardClass}>
              <div className="flex items-center gap-3 mb-1">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-combination-100 text-white font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-combination-200 text-lg sm:text-xl font-bold">
                  Step {index + 1}: {step.title}
                </h3>
              </div>
              {step.paragraphs.map((para) => (
                <p
                  key={para}
                  className="text-neutral-500 text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>

      {/* Booking */}
      <div className={sectionClass}>
        <h2 className={h2Class}>
          Book a Laser Vision Correction Consultation in Toronto
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-4">
          <div>
            <p className={paraClass}>
              If you&apos;re considering laser vision correction and want an
              honest, independent assessment of your candidacy before
              committing to anything, both 360 Eyecare locations offer
              pre-surgical consultations with no obligation to proceed.
            </p>
            <p className={paraClass}>
              Our optometrists will assess your corneal health, prescription
              stability, tear film, and ocular anatomy, give you a clear answer
              on whether you&apos;re a suitable candidate and for which
              procedure, and coordinate the referral and post-operative care if
              you decide to move forward. No sales pressure, no financial
              interest in your surgical decision.
            </p>
            <p className={`${paraClass} font-semibold`}>
              No referral required. New patients welcome at both locations.
            </p>
          </div>
          <Image
            src={LaserCorrectionImage}
            alt="Optometrist performing a pre-surgical eye assessment"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
          />
        </div>
        <ClinicBookingCards bookLabel="Book a Laser Vision Consultation" />
      </div>

      {/* FAQs */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Laser Vision Correction FAQs</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <Faqs faqData={laserVisionFaqs} />
      </div>
    </main>
  );
};

export default page;
