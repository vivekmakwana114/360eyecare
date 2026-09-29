import React from "react";
import SubHeader from "../../../components/SubHeader";
import AboutUsSection from "../../../components/AboutUsSection";

import Link from "next/link";
import Image from "next/image";
import { EyeExamImage } from "../../../constants/Images";
import FaqPlusMinus from "../../../components/FaqPlusMinus";
import EyeExamTools from "../../../components/EyeExamTools";
import { eyeexamsCardData } from "constants/Constants";
export async function generateMetadata() {
  return {
    title: "Eye Exams Toronto - Book an Eye Tests at Beaches and Yorkville",
    description:
      "Eye exams Toronto for comprehensive eye examination to all ages. Get your eyes tested at our eye clinic at The Beaches, Yorkville.",
    openGraph: {
      title: "Eye Exams Toronto - Book an Eye Tests at Beaches and Yorkville",
      description:
        "Eye exams Toronto for comprehensive eye examination to all ages. Get your eyes tested at our eye clinic at The Beaches, Yorkville.",
      url: "https://www.360eyecare.ca/eye-exams/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/eye-exams/",
    },
  };
}

// Booking destinations per clinic (same targets as the /book-eye-exam page)
const BOOK_YORKVILLE_URL =
  "https://360rosedale.mypatientsportal.com/select-location";
const BOOK_BEACHES_URL = "/book-eye-exam#book-appointment";

const linkClass = "text-combination-200 hover:text-combination-100";
const bookButtonClass =
  "px-6 sm:px-8 py-2 flex justify-center items-center bg-combination-100 text-white text-center font-bold rounded-full hover:bg-combination-200 transition-colors";

const comprehensiveEyeExam = [
  {
    head: "Visual acuity and refractive status assessment",
    paras: [
      "This test involves you reading letters off a chart, with and without your current glasses or contacts. But the goal isn't just to confirm you can see the bottom line. Your optometrist is establishing a precise baseline for your vision at distance, near, and intermediate ranges, then using a phoropter to determine the exact corrective prescription that brings you to your clearest, most comfortable vision.",
      "At 360 Eyecare, we use digital phoropter technology rather than the manual version because it's faster, more precise, and eliminates a lot of the \"is it better with one, or with two?\" guesswork that patients often find frustrating.",
    ],
  },
  {
    head: "Binocular assessment",
    paras: [
      "This assessment evaluates how well your eyes work together, tracking, converging, and maintaining alignment across different distances and tasks.",
    ],
  },
  {
    head: "Accommodative assessment",
    paras: [
      "Related to binocular function but distinct from it, this test measures your eyes' ability to shift focus, for example, from a screen to a whiteboard, or from a book to the road. It's particularly relevant for patients who spend long hours on screens, which in Toronto means most of our patients. Difficulty with accommodation is one of the more common and underdiagnosed drivers of digital eye strain.",
    ],
  },
  {
    head: "Pupil assessment",
    paras: [
      "Your optometrist observes how each pupil responds to light and whether both pupils react symmetrically. Asymmetric responses can be an early indicator of nerve involvement, including conditions like Horner's syndrome or nerve palsy, neither of which you'd otherwise notice during your day.",
    ],
  },
  {
    head: "Extra-ocular muscle function test",
    paras: [
      "Assesses the six muscles responsible for moving each eye in every direction. Weakness or restriction in any of these muscles can affect depth perception, reading comfort, and in some cases, it means there are neurological changes that are worth investigating further.",
    ],
  },
  {
    head: "Cover test",
    paras: [
      "Used to detect strabismus (eye turns) and phoric disorders. These are conditions where the eyes have a tendency to drift when not actively being forced to work together. Many adults with undiagnosed phoria have spent years attributing their headaches or reading fatigue to stress or screen time.",
    ],
  },
  {
    head: "Visual field assessment",
    paras: [
      "Your peripheral vision is assessed here, and the mode of testing depends on what the optometrist is screening for. A manual confrontation test gives a broad overview. Automated perimetry is used when there's a specific concern, such as glaucoma screening and brain tumour detection, both of which rely on this test, which is why it's a non-negotiable part of a comprehensive exam rather than an optional add-on.",
    ],
  },
  {
    head: "Intraocular pressure test",
    paras: [
      "Measures the pressure inside your eyes. Elevated intraocular pressure is one of the primary risk factors for glaucoma, a condition that can cause irreversible vision loss before it produces any noticeable symptoms. Catching pressure changes early is exactly why you need annual eye exams.",
    ],
  },
  {
    head: "Anterior segment assessment",
    paras: [
      "Optometrists examine the front structures of the human eye under a slit lamp microscope to pick up conditions like conjunctivitis, keratoconus, anterior uveitis, and early cataract development. The lids and adnexa are also assessed here, which is relevant for patients with meibomian gland dysfunction or chronic dry eye.",
    ],
  },
  {
    head: "Posterior segment assessment",
    paras: [
      "The retina, optic nerve, macula, and surrounding structures are examined through a dilated pupil. This is where diabetic retinopathy, macular degeneration, retinal detachment risk, and optic nerve changes become visible. If your systemic health history includes diabetes, hypertension, or elevated cholesterol, this part of your exam carries particular weight.",
    ],
  },
  {
    head: "Retinal imaging",
    paras: [
      "A high-resolution photograph and scan of the posterior structures, captured using an advanced retinal camera. The images are provided to you after every exam for your own records and more importantly, they create a documented baseline that allows your optometrist to track changes over time with precision rather than relying on memory or written notes alone.",
    ],
  },
  {
    head: "Emergency eye care",
    paras: [
      "Our optometrists at both the Yorkville and Beaches locations are licensed to diagnose and manage urgent eye conditions, including acute pink eye, keratitis, corneal abrasions, and foreign body removal. If something feels wrong with your eyes, you don't need to wait for a GP referral or sit in an emergency room.",
    ],
  },
];

const clinics = [
  {
    name: "360 Eyecare Yorkville",
    pageHref: "/toronto-rosedale-optometrist",
    addressLines: [
      "55 Bloor Street West, Suite 03",
      "Manulife Centre, Toronto, ON M4W 1A5",
    ],
    description:
      "Steps from Bay Station, serving Yorkville, The Annex, Bay Street corridor, Church-Wellesley Village, and the University of Toronto campus.",
    bookHref: BOOK_YORKVILLE_URL,
    phone: "416-901-2725",
  },
  {
    name: "360 Eyecare Beaches",
    pageHref: "/toronto-beaches-optometrist",
    addressLines: ["2199 Queen Street East", "Toronto, ON M4E 1E5"],
    description:
      "Accessible via the 501 Queen streetcar and Woodbine Station, serving The Beaches, Leslieville, Upper Beaches, East Danforth, and surrounding east end communities.",
    bookHref: BOOK_BEACHES_URL,
    phone: "416-698-3937",
  },
];

const page = () => {
  return (
    <main className="pt-[110px]">
      <div className="bg-[#F6F7F5]">
        <SubHeader text="Comprehensive Eye Exams in Toronto | Yorkville & The Beaches" />
        <div className="bg-[#F6F7F5] px-4 sm:px-10 md:pb-12 pb-8">
          <AboutUsSection cardData={eyeexamsCardData} />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-4 my-8 sm:my-12 px-4 sm:px-6 md:px-8">
          <p className="text-neutral-500 text-base  leading-relaxed">
            Eye exams have changed a lot, but the core of what an optometrist
            looks for hasn&apos;t changed much, except for the tools, the
            precision, and the breadth of what a modern exam can detect.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            At 360 Eyecare, we provide comprehensive eye exams across two
            Toronto locations:
          </p>
          <ul className="list-disc pl-5 text-neutral-500 text-base leading-relaxed">
            <li>
              Our{" "}
              <Link href="/toronto-rosedale-optometrist" className={linkClass}>
                Yorkville clinic
              </Link>{" "}
              on Bloor Street West inside the Manulife Centre.
            </li>
            <li>
              Our{" "}
              <Link href="/toronto-beaches-optometrist" className={linkClass}>
                Beaches clinic
              </Link>{" "}
              on Queen Street East.
            </li>
          </ul>
          <p className="text-neutral-500 text-base  leading-relaxed">
            Together, they serve patients from across the city, from Bay Street
            professionals and University of Toronto students to Leslieville
            families and lifelong Beaches residents.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            <Link href="/optometrists/" className={linkClass}>
              Our optometrists
            </Link>{" "}
            see patients as young as six months old and are trained to diagnose
            and treat eye conditions at every stage of life.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            What sets a 360 Eyecare exam apart isn&apos;t just the technology,
            though we do use some of the most advanced diagnostic equipment
            available in Toronto. It&apos;s the fact that we treat every
            appointment as a full health assessment.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            Systemic conditions like diabetes, hypertension, and even early
            neurological changes can show up in the eyes before they show up
            anywhere else. Catching them early is the entire point.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed mb-6">
            So what actually happens during a comprehensive eye exam? Here&apos;s
            everything you need to know.
          </p>

          <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[700] mt-2">
            Eye Exams in Yorkville &amp; The Beaches
          </h3>
          <hr className="w-24 h-1 bg-combination-100 mb-3" />
          <p className="text-neutral-500 text-base  leading-relaxed">
            <Link href="/toronto-rosedale-optometrist" className={linkClass}>
              360 Eyecare Yorkville
            </Link>{" "}
            is located at 55 Bloor Street West inside the Manulife Centre, one
            of the most accessible addresses in midtown Toronto.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            We&apos;re a short walk from Bay Station and Bloor-Yonge, which
            makes us a convenient stop for patients coming from the Bay Street
            corridor, The Annex, Church-Wellesley Village, and the University of
            Toronto&apos;s St. George campus.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            If you work downtown and keep putting off your annual exam because
            you can&apos;t find a clinic because of your schedule, we offer
            extended hours and Saturday appointments specifically for that
            reason.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            <Link href="/toronto-beaches-optometrist" className={linkClass}>
              360 Eyecare Beaches
            </Link>{" "}
            is located at 2199 Queen Street East, right in the heart of one of
            Toronto&apos;s most tightly-knit neighbourhoods. Accessible by the
            501 Queen streetcar or via Woodbine Station on the Bloor-Danforth
            line, our Beaches clinic serves patients from Leslieville, Upper
            Beaches, East Danforth, and the surrounding east end communities.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            The Beaches has a higher-than-average proportion of young families
            and active adults, so beyond routine exams, we see a lot of
            pediatric appointments, myopia management cases, and dry eye
            consultations driven by sun and wind exposure along the waterfront.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed mb-6">
            Both clinics offer the same full-scope comprehensive eye exams, the
            same diagnostic technology, and the same standard of care. The only
            difference is which neighbourhood you call home.
          </p>

          <div className="flex flex-wrap gap-4 sm:justify-start mb-8 sm:mb-10">
            <Link
              href={BOOK_YORKVILLE_URL}
              className={`${bookButtonClass} text-nowrap w-[240px]`}
            >
              Book at Yorkville
            </Link>
            <Link
              href={BOOK_BEACHES_URL}
              className={`${bookButtonClass} text-nowrap w-[240px]`}
            >
              Book at The Beaches
            </Link>
          </div>

          <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[700] mt-2">
            The Basics of a Comprehensive Eye Exam
          </h3>
          <hr className="w-24 h-1 bg-combination-100 mb-3" />
          <p className="text-neutral-500 text-base  leading-relaxed">
            A properly conducted comprehensive exam is a systematic health
            assessment that covers your visual system, your ocular health, and
            in many cases, early indicators of conditions that have nothing to
            do with your eyes at all.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            At 360 Eyecare, every exam follows a structured sequence of
            assessments. Some are quick and straightforward. Others involve
            equipment that looks more like something from a research lab than a
            neighbourhood optometry clinic. All of them serve a purpose.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            Here&apos;s what your optometrist works through during your
            appointment:
          </p>

          <div className="flex flex-col gap-4 mb-8 sm:mb-10">
            {comprehensiveEyeExam.map((item, index) => (
              <div key={index}>
                <h4 className="text-combination-200 text-base sm:text-[18px] font-bold mb-2 sm:mb-3">
                  {item.head}
                </h4>
                <div className="flex flex-col gap-3">
                  {item.paras.map((para, paraIndex) => (
                    <p
                      key={paraIndex}
                      className="text-neutral-500 text-sm sm:text-base  leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white">
          <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 sm:gap-8">
            <div className="flex items-end">
              <Image
                src={EyeExamImage}
                alt="spectacle-image"
                height={320}
                width={500}
                className="object-contain"
              />
            </div>

            <div className="max-w-xl px-2 sm:px-0">
              <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-bold mt-2 mb-4">
                Ready to Book Your Eye Test in Toronto?
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-3" />
              <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed mb-6">
                Whether you&apos;re due for your annual eye check-up or it&apos;s
                been a little longer, both 360 Eyecare locations have
                availability for new and returning patients. Evening and
                Saturday appointments are available at both clinics.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link href={BOOK_YORKVILLE_URL} className={bookButtonClass}>
                  Book at Yorkville — 55 Bloor St W
                </Link>
                <Link href={BOOK_BEACHES_URL} className={bookButtonClass}>
                  Book at The Beaches — 2199 Queen St E
                </Link>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                OHIP covers eye exams for children under 20 and adults 65 and
                older*.
              </p>
              <p className="text-neutral-500 text-xs leading-relaxed">
                *Terms &amp; Conditions apply
              </p>
            </div>
          </div>
        </div>
      </div>
      <EyeExamTools />

      <FaqPlusMinus />

      <div className="bg-[#F6F7F5] mx-auto p-4 sm:p-6 md:px-8 lg:px-24 md:py-10 flex flex-col gap-4">
        <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[700] mt-2">
          The Importance of Eye Examinations
        </h3>
        <hr className="w-24 h-1 bg-combination-100 mb-3" />
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          There&apos;s a reason optometrists keep pushing for annual exams even
          when your vision feels perfectly fine. And no, they&apos;re not trying
          to sell you glasses.
        </p>
        {/* TODO(content): source copy was truncated after "multiple s" — confirm the sentence ending with the content team before merge */}
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          The eye is the only place in the human body where blood vessels and
          nerve tissue can be observed directly, without surgery or invasive
          imaging. That makes a comprehensive eye exam one of the few routine
          health assessments that can detect diabetes, hypertension, high
          cholesterol, and multiple sclerosis.
        </p>
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          The conditions that cause the most irreversible vision loss, such as
          glaucoma, macular degeneration, or diabetic retinopathy, share one
          particularly dangerous trait: they&apos;re largely asymptomatic in
          their early stages. By the time you notice something is wrong,
          meaningful damage has often already occurred. Glaucoma alone affects
          an estimated 400,000 Canadians, and roughly half of them don&apos;t
          know they have it. Early detection through regular comprehensive
          exams is currently the only reliable way to catch it before it takes
          your peripheral vision with it.
        </p>
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          Technology has also changed what&apos;s possible during a routine
          appointment. OCT scanning, digital retinal imaging, and automated
          perimetry allow 360 Eyecare optometrists to assess the health of your
          eyes at a level of detail that simply wasn&apos;t available in a
          community clinic a decade ago.
        </p>
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          If you still have questions about what a comprehensive eye exam
          involves, what to expect at either of our Toronto locations, or
          whether your situation calls for more frequent monitoring, we&apos;re
          happy to help. Reach out by phone, email, or through the website, or
          simply walk in if you&apos;re passing by.
        </p>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:px-8 md:py-10 flex flex-col gap-4">
          <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[700] mt-2">
            Book Your Eye Exam in Toronto
          </h3>
          <hr className="w-24 h-1 bg-combination-100 mb-3" />
          <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
            360 Eyecare has two full-scope optometry clinics in Toronto, each
            offering comprehensive eye exams for patients of all ages. Evening
            and Saturday appointments available. OHIP coverage for children
            under 20 and adults 65+. Direct billing for most major extended
            health plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            {clinics.map((clinic) => (
              <div
                key={clinic.name}
                className="bg-[#F6F7F5] rounded-lg p-6 flex flex-col gap-3"
              >
                <h4 className="text-combination-200 text-lg sm:text-xl font-bold">
                  <Link href={clinic.pageHref} className="hover:text-combination-100">
                    {clinic.name}
                  </Link>
                </h4>
                <address className="not-italic text-neutral-500 text-sm sm:text-base leading-relaxed">
                  {clinic.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                  {clinic.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-auto pt-2">
                  <Link
                    href={clinic.bookHref}
                    className={`${bookButtonClass} text-nowrap`}
                  >
                    Book an Eye Exam
                  </Link>
                  <a
                    href={`tel:+1-${clinic.phone}`}
                    className="text-combination-200 hover:text-combination-100 font-semibold"
                  >
                    📞 {clinic.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
            Questions before you book? Call either clinic directly or reach out
            through our website. We&apos;re always happy to help.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
