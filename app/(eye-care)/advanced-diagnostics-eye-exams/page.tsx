import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import {
  advancedDiagnostics,
  advancedDiagnostics_2,
} from "../../../constants/Images";
import Image from "next/image";
import AdvancedDiagnosisService from "../../../components/AdvancedDiagnosisService";
import Faqs from "../../../components/Faqs";
import ClinicBookingCards from "../../../components/ClinicBookingCards";
import {
  advanceddiagnosticsbenefitsData,
  advancedDiagnosticsFaqs,
  dryEyeClinics,
} from "../../../constants/Constants";
import Benefits from "../../../components/Benefits";

const pageTitle =
  "Advanced Eye Exam Diagnostics Toronto | OCT & Retinal Imaging | 360 Eyecare";
const pageDescription =
  "Eye exams with OCT, retinal imaging, corneal topography, meibography and visual field testing at 360 Eyecare's Yorkville and Beaches clinics in Toronto.";
const pageUrl = "https://www.360eyecare.ca/advanced-diagnostics-eye-exams/";

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
  mainEntity: advancedDiagnosticsFaqs.map((faq) => ({
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
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md";
const bookLabel = "Book an Advanced Eye Exam";

const careConnections = [
  {
    head: "For dry eye patients",
    para: "Meibography findings from the Keratograph 5M determine whether a patient needs warm compresses and drops, or whether gland structure has deteriorated to the point where in-office treatment is needed. Osmolarity values from the i-PEN provide an objective measure of severity at baseline and a benchmark for tracking treatment response. A patient whose osmolarity normalises over a treatment course has objective evidence their condition is improving, independent of how their eyes feel on any given day.",
    link: {
      href: "/dry-eye-syndrome-keratograph-i-pen",
      label: "Dry eye assessment",
    },
  },
  {
    head: "For glaucoma suspects",
    para: "OCT nerve fibre layer measurements, Humphrey visual field results, intraocular pressure readings, and pachymetry findings are synthesised together to produce a risk profile rather than a single data point. A patient with borderline pressure but normal OCT and visual fields is managed differently from one with the same pressure but early nerve fibre thinning, and that distinction is only possible with comprehensive diagnostic data.",
  },
  {
    head: "For myopia management in children",
    para: "Axial length measurement at each monitoring visit tracks the structural progression of myopia independently of prescription changes. A child whose axial length is stable on Ortho-K has objective confirmation of treatment efficacy; one whose axial length continues to elongate despite treatment is a candidate for combination therapy.",
    link: { href: "/myopia-control-clinic/", label: "Myopia control" },
  },
  {
    head: "For keratoconus",
    para: "Serial corneal topography maps allow detection of progressive corneal steepening at a stage where corneal cross-linking is most effective and achieves the best outcomes. Waiting for symptomatic vision distortion to prompt investigation frequently means intervention occurs after preventable corneal distortion has already developed.",
  },
  {
    head: "For all patients",
    para: "The longitudinal record created by repeated imaging at each exam is what makes change detectable. A single OCT or retinal photograph tells you what things look like today. A series of images from annual exams over five years tells you whether things are stable.",
  },
];

const BookButtons = () => (
  <div className="flex flex-col gap-3">
    {dryEyeClinics.map((clinic) => (
      <Link key={clinic.name} href={clinic.bookHref} className={bookButtonClass}>
        {bookLabel} — {clinic.shortName}
      </Link>
    ))}
  </div>
);

const IntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
    <div className="flex flex-col gap-4">
      <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900]">
        Advanced Diagnostics for Comprehensive Eye Exams
      </h2>
      <hr className="w-20 h-1 bg-combination-100 mb-2" />
      <p className="text-neutral-500 text-base md:text-lg">
        A standard eye exam at many clinics covers visual acuity, a basic
        health check, and a prescription update. A comprehensive exam at 360
        Eyecare does all of that, and then uses advanced diagnostic imaging to
        assess the structures of your eye in detail that isn&apos;t possible
        with a slit lamp and ophthalmoscope alone. The result is earlier
        detection of conditions that cause serious vision loss, more precise
        monitoring of existing conditions, and a documented baseline that
        makes future changes measurable rather than estimated.
      </p>
      <p className="text-neutral-500 text-base md:text-lg">
        At both our{" "}
        <Link href="/toronto-rosedale-optometrist" className={linkClass}>
          Yorkville clinic
        </Link>{" "}
        on Bloor Street West and our{" "}
        <Link href="/toronto-beaches-optometrist" className={linkClass}>
          Beaches clinic
        </Link>{" "}
        on Queen Street East, we&apos;ve invested in the diagnostic technology
        that allows our optometrists to practise at the standard of care that
        modern optometry makes possible: OCT imaging, corneal topography,
        meibography, tear osmolarity testing, digital retinal imaging,
        automated perimetry, and pachymetry. Each tool serves a specific
        clinical purpose. Together, they make a 360 Eyecare eye exam
        fundamentally more informative than a basic vision check.
      </p>
    </div>
    <div className="flex flex-col gap-6">
      <Image
        src={advancedDiagnostics_2}
        alt="Optometrist performing corneal topography at 360 Eyecare Toronto"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        className="w-full h-auto aspect-[4/3] object-cover object-[center_30%] rounded-lg shadow-sm"
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
      <SubHeader text="Advanced Eye Exam Diagnostics in Toronto — Yorkville & The Beaches" />
      <IntroSection />

      {/* Why diagnostics matter */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Why Diagnostic Technology Matters</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className={paraClass}>
          The conditions that cause the most serious and irreversible vision
          loss, such as glaucoma, macular degeneration, diabetic retinopathy,
          and keratoconus, share a common characteristic: they are largely
          asymptomatic in their early stages. By the time a patient notices
          something is wrong, meaningful structural damage has typically
          already occurred. The damage from glaucoma, for example, begins in
          the peripheral visual field, an area the brain is highly effective at
          compensating for, meaning patients frequently lose significant
          peripheral vision before noticing any change in their daily visual
          experience.
        </p>
        <p className={paraClass}>
          Advanced diagnostic imaging detects these conditions structurally
          before those changes produce symptoms. That early detection window is
          where intervention is most effective and outcomes are best.
        </p>
        <p className={paraClass}>
          The same principle applies to{" "}
          <Link href="/dry-eye-syndrome-keratograph-i-pen" className={linkClass}>
            dry eye disease
          </Link>
          . The structural health of the meibomian glands can be assessed and
          documented with meibography before symptoms become chronic, allowing
          early treatment that preserves gland tissue before atrophy occurs. For{" "}
          <Link href="/myopia-control-clinic/" className={linkClass}>
            myopia management
          </Link>
          , axial length measurement tracks the actual elongation of the
          eyeball rather than relying solely on prescription changes, giving a
          more sensitive and actionable picture of progression.
        </p>
        <p className={paraClass}>
          At 360 Eyecare, diagnostic imaging is a core component of every
          comprehensive eye exam. The images and measurements generated at each
          appointment create a documented longitudinal record of your eye
          health that makes change detectable at the earliest possible stage.
        </p>
      </div>

      <Benefits
        benefitsData={advanceddiagnosticsbenefitsData}
        title="Comprehensive Eye Exam Technologies"
        subtitle="Explore our advanced diagnostic tools for precise and thorough eye exams"
      />

      <AdvancedDiagnosisService />

      {/* How diagnostics shape care */}
      <div className={sectionClass}>
        <h2 className={h2Class}>How Our Diagnostics Connect to Your Care</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className={paraClass}>
          Diagnostic technology is only as useful as the clinical
          interpretation behind it. At 360 Eyecare, advanced imaging is
          integrated into a care model where findings directly shape treatment
          decisions.
        </p>
        <p className={`${paraClass} font-semibold`}>
          Here&apos;s how that works in practice:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {careConnections.map((item, index) => (
            <li
              key={item.head}
              className={`bg-gray-50 rounded-lg p-6 border-t-4 border-combination-100 flex flex-col gap-2 ${
                index === careConnections.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-combination-200 text-lg sm:text-xl font-bold">
                {item.head}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {item.para}
              </p>
              {item.link && (
                <Link
                  href={item.link.href}
                  className={`${linkClass} font-semibold mt-auto`}
                >
                  {item.link.label} →
                </Link>
              )}
            </li>
          ))}
        </ul>
        <p className={`${paraClass} font-semibold`}>
          Both our Yorkville and Beaches clinics maintain the same diagnostic
          technology and the same documentation standards.
        </p>
      </div>

      {/* Booking */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Book an Advanced Eye Exam in Toronto</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-4">
          <div>
            <p className={paraClass}>
              If you haven&apos;t had a comprehensive eye exam that includes
              retinal imaging, OCT scanning, and corneal assessment, you
              haven&apos;t had a complete picture of your eye health. Both 360
              Eyecare locations offer advanced diagnostic eye exams for new and
              returning patients, with the same technology and the same
              standard of clinical interpretation at each clinic.
            </p>
            <p className={paraClass}>
              OHIP covers annual eye exams for patients under 20 and 65 and
              older. For adults between 20 and 64, extended health benefits may
              apply; check your plan. Supplementary imaging fees are disclosed
              in advance.
            </p>
            <p className={`${paraClass} font-semibold`}>
              No referral required. New patients welcome at both locations.
            </p>
          </div>
          <Image
            src={advancedDiagnostics}
            alt="Patient having an advanced eye exam with an optometrist"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
          />
        </div>
        <ClinicBookingCards bookLabel={bookLabel} />
      </div>

      {/* FAQs */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Advanced Eye Exam FAQs</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <Faqs faqData={advancedDiagnosticsFaqs} />
      </div>
    </main>
  );
};

export default page;
