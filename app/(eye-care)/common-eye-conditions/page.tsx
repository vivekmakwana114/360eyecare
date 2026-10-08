import React from "react";
import SubHeader from "../../../components/SubHeader";
import { TiTick } from "react-icons/ti";
import {
  eyeCareServiceImage,
  eyecondition_2,
  visioneyeexam,
} from "../../../constants/Images";
import Image from "next/image";
import CommonEyeSlider from "../../../components/CommonEyeSlider";
import Banner2 from "../../../components/Banner2";
import Link from "next/link";
import EyeConditionsPage from "../../../components/EyeConditionsPage";
import Faqs from "../../../components/Faqs";
import ClinicBookingCards from "../../../components/ClinicBookingCards";
import {
  additionalEyeConditions,
  commonEyeConditionsFaqs,
  dryEyeClinics,
} from "../../../constants/Constants";

const pageTitle =
  "Common Eye Conditions Toronto | Cataracts, Glaucoma & AMD | 360 Eyecare";
const pageDescription =
  "Diagnosis and management of cataracts, glaucoma, dry eye, diabetic retinopathy, macular degeneration and more at 360 Eyecare's Yorkville and Beaches clinics.";
const pageUrl = "https://www.360eyecare.ca/common-eye-conditions/";

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
  mainEntity: commonEyeConditionsFaqs.map((faq) => ({
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
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-md";
const bookLabel = "Book an Eye Exam";

const IntroSection = () => (
  // items-start keeps the heading level with the top of the photo
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
    <div className="flex flex-col gap-4">
      <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900]">
        Common Eye Conditions We Diagnose and Manage
      </h2>
      <hr className="w-20 h-1 bg-combination-100" />
      <p className="text-neutral-500 text-base md:text-lg">
        At 360 Eyecare&apos;s{" "}
        <Link href="/toronto-rosedale-optometrist" className={linkClass}>
          Yorkville clinic
        </Link>{" "}
        on Bloor Street West and{" "}
        <Link href="/toronto-beaches-optometrist" className={linkClass}>
          Beaches clinic
        </Link>{" "}
        on Queen Street East, our optometrists diagnose, monitor, and manage
        the full range of common eye conditions from refractive errors and dry
        eye to glaucoma, macular degeneration, and diabetic retinopathy. For
        conditions requiring surgical or specialist intervention, we provide
        co-management and referral to appropriate specialists while
        maintaining continuity of your ongoing eye care.
      </p>
      <p className="text-neutral-500 text-base md:text-lg">
        This page covers the conditions we see and manage most frequently. For
        conditions with dedicated service pages, such as{" "}
        <Link href="/dry-eye-syndrome-keratograph-i-pen" className={linkClass}>
          dry eye
        </Link>
        ,{" "}
        <Link href="/myopia-control-clinic" className={linkClass}>
          myopia control
        </Link>
        ,{" "}
        <Link href="/orthokeratology-treatment" className={linkClass}>
          orthokeratology
        </Link>
        , and{" "}
        <Link href="/pediatric-eye-exams" className={linkClass}>
          pediatric eye care
        </Link>
        , links are provided to the relevant pages for full clinical detail.
      </p>
    </div>
    <div className="flex flex-col gap-4">
      <Image
        src={eyecondition_2}
        alt="360 Eyecare clinic in Toronto"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        className="w-full h-auto aspect-[16/9] object-cover rounded-lg shadow-sm"
      />
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
      <div className="flex flex-col gap-3">
        {dryEyeClinics.map((clinic) => (
          <Link
            key={clinic.name}
            href={clinic.bookHref}
            className={bookButtonClass}
          >
            {bookLabel} — {clinic.shortName}
          </Link>
        ))}
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
      <SubHeader text="Common Eye Conditions — Diagnosis and Management in Toronto" />
      <IntroSection />

      <EyeConditionsPage />

      <CommonEyeSlider />

      <div className={sectionClass}>
        <h2 className={h2Class}>
          Additional Eye Conditions We Diagnose and Manage
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-6" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalEyeConditions.map((condition, index) => (
            <li
              key={condition.title}
              className={`bg-gray-50 rounded-lg p-6 border-t-4 border-combination-100 flex flex-col gap-2 ${
                index === additionalEyeConditions.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <h3 className="text-combination-200 text-lg sm:text-xl font-bold">
                {condition.title}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {condition.description}
              </p>
              {condition.link && (
                <Link
                  href={condition.link.href}
                  className={`${linkClass} font-semibold mt-auto`}
                >
                  {condition.link.label} →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Banner2
        title="Need Expert Eye Care?"
        description="Our team of optometrists is ready to assist you. Schedule an appointment today for personalized eye care."
        ctaText="Book Your Eye Exam"
        ctaLink="/book-eye-exam"
      />

      {/* Second content section */}
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col-reverse sm:flex-row-reverse justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:ml-12 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900]">
            Your Vision Is Our Priority
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            We are committed to providing exceptional eye care services. Our
            experienced optometrists use advanced technology to ensure accurate
            diagnoses and personalized treatments.
          </p>
          <ul className="space-y-2">
            {[
              "Comprehensive eye exams to assess your vision and eye health",
              "Customized treatment plans to address your unique needs.",
              "Friendly and knowledgeable staff dedicated to your comfort and satisfaction.",
            ].map((item, i) => (
              <li key={i} className="flex items-start sm:items-center">
                <TiTick size={20} className="text-combination-100" />
                <span className="text-neutral-700 text-sm ml-2">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/book-eye-exam" className="w-full sm:w-auto">
            <button className="w-[280px] sm:w-auto bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md mt-4 sm:mt-0">
              Book Your Eye Exam Today
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-[585px] flex flex-row items-end mb-8 sm:mb-0">
          <div className="hidden sm:block w-[30px] h-[280px] bg-gray-100" />
          <Image
            src={eyeCareServiceImage}
            alt="Understanding Dry Eye"
            width={585}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Booking */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Book an Eye Exam at 360 Eyecare Toronto</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-4">
          <div>
            <p className={paraClass}>
              Whether you&apos;ve been diagnosed with an eye condition and need
              ongoing monitoring, have risk factors that warrant closer
              surveillance, or are simply due for your annual exam, both 360
              Eyecare locations are accepting new and returning patients.
            </p>
            <p className={paraClass}>
              OHIP covers annual eye exams for patients under 20 and 65 and
              older. For adults between 20 and 64, extended health benefits may
              apply; check your plan.
            </p>
            <p className={`${paraClass} font-semibold`}>
              No referral required. New patients welcome at both locations.
            </p>
          </div>
          <Image
            src={visioneyeexam}
            alt="Child having an eye exam with a phoropter"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
          />
        </div>
        <ClinicBookingCards bookLabel={bookLabel} />
      </div>

      {/* FAQs */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Eye Conditions FAQs</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <Faqs faqData={commonEyeConditionsFaqs} />
      </div>
    </main>
  );
};

export default page;
