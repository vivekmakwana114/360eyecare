import React from "react";
import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import Link from "next/link";
import {
  childVisionImage,
  ExpertisePediatricImage,
  pediatricEyeImage,
  pediatricGirlImage,
} from "../../../constants/Images";
import PediatricOptometristsUI from "../../../components/PediatricOptometristsUI";
import Banner2 from "../../../components/Banner2";
import Faqs from "../../../components/Faqs";
import ClinicBookingCards from "../../../components/ClinicBookingCards";
import {
  dryEyeClinics,
  faqDatapediatric,
  pediatricEyeBenefitsData,
  pediatricEyeData,
} from "../../../constants/Constants";
import PediatricSlider from "../../../components/PediatricSlider";
import Benefits from "../../../components/Benefits";
import LaserVisionService from "../../../components/LaserVisionService";

const pageTitle =
  "Pediatric Eye Exams Toronto | Children's Optometrist | Yorkville & The Beaches";
const pageDescription =
  "OHIP-covered children's eye exams from six months old at 360 Eyecare's Yorkville and Beaches clinics in Toronto. Myopia control, vision therapy and contact lenses for kids.";
const pageUrl = "https://www.360eyecare.ca/pediatric-eye-exams/";

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

// FAQPage structured data from the same array the accordion renders; the
// display-only "Q. " prefix is stripped from the question text.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqDatapediatric.map((faq) => ({
    "@type": "Question",
    name: faq.question.replace(/^Q\.\s*/, ""),
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// Pediatric copy lists slightly different neighbourhoods than the shared
// clinic cards, so override just the description per clinic.
const pediatricClinicDescriptions = {
  Yorkville:
    "Steps from Bay Station — serving Yorkville, The Annex, Summerhill, Church-Wellesley Village, and the University of Toronto campus.",
  "The Beaches":
    "Accessible via the 501 Queen streetcar and Woodbine Station — serving The Beaches, Leslieville, Riverdale, East York, and surrounding east end communities.",
};
const pediatricClinics = dryEyeClinics.map((clinic) => ({
  ...clinic,
  description: pediatricClinicDescriptions[clinic.shortName] ?? clinic.description,
}));

const linkClass = "text-combination-200 hover:text-combination-100";
const sectionClass = "max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0";
const h2Class =
  "text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-2";
const h3Class = "text-combination-200 text-xl sm:text-2xl font-[900] mb-2 mt-6";
const paraClass = "text-neutral-500 text-base mb-2";
const listClass =
  "list-disc list-outside pl-6 text-neutral-500 text-base mb-4 space-y-2";
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md";

const BookButtons = ({ label = "Book a Pediatric Eye Exam" }) => (
  <div className="flex flex-col gap-3">
    {dryEyeClinics.map((clinic) => (
      <Link key={clinic.name} href={clinic.bookHref} className={bookButtonClass}>
        {label} — {clinic.shortName}
      </Link>
    ))}
  </div>
);

// Bullet list where each item has a bold lead-in followed by its description
const HeadParaList = ({ items, separator = " — " }) => (
  <ul className={listClass}>
    {items.map((item) => (
      <li key={`${item.head} ${item.para}`}>
        <strong>{item.head}</strong>
        {separator}
        {item.para}
      </li>
    ))}
  </ul>
);

const BulletList = ({ items }) => (
  <ul className={listClass}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const examSchedule = [
  {
    head: "6 to 9 months",
    para: "The first eye exam should occur between six and nine months of age. At this stage, the optometrist assesses basic visual function and checks for early signs of conditions like strabismus, significant refractive errors, and structural abnormalities that are most effectively managed when identified early. The exam uses objective techniques that don't require any verbal response from the infant.",
  },
  {
    head: "Age 2 to 5",
    para: "At least one exam before school entry, ideally between ages two and five. This is when amblyopia and strabismus are most effectively detected and treated, and when the developmental window for intervention is at its widest. Children in this age range can participate in more structured testing than infants, allowing a more complete picture of their visual function.",
  },
  {
    head: "School age — annually from age 6",
    para: "Annual eye exams throughout the school years are recommended and OHIP-covered. The school years are the period of most active myopia development, most intensive near work demand, and most significant academic vision load. Annual monitoring allows early detection of myopia onset, binocular vision difficulties that affect reading, and any prescription changes that affect learning.",
  },
  {
    head: "Family history or existing risk factors",
    para: "Children with a parent who has myopia, amblyopia, strabismus, or another hereditary eye condition should be examined more frequently than the minimum schedule. A family history of high myopia in particular warrants close monitoring from infancy.",
  },
];

const examStages = [
  {
    title: "Infants and toddlers (6 months to 3 years)",
    intro:
      "Testing at this age is entirely objective. Your child doesn't need to respond verbally or identify letters. Tests include:",
    items: [
      {
        head: "Preferential looking",
        para: "presenting visual targets to assess the infant's ability to detect and fixate on visual detail at a given resolution.",
      },
      {
        head: "Hirschberg corneal light reflex test",
        para: "a light is shone toward the eyes to assess alignment; asymmetric corneal reflections indicate strabismus.",
      },
      {
        head: "Cover test",
        para: "one eye is covered and uncovered to observe eye movement, detecting any tendency for the eyes to drift when not held in alignment by both eyes working together.",
      },
      {
        head: "Retinoscopy",
        para: "the optometrist shines a light into the eye and observes the light reflex to objectively determine the refractive error without any input from the patient.",
      },
      {
        head: "Anterior segment examination",
        para: "the slit lamp is used to examine the front of the eye for structural abnormalities.",
      },
    ],
  },
  {
    title: "Preschool children (3 to 5 years)",
    intro:
      "Children in this age range can typically participate in visual acuity testing using picture charts or matching games rather than letter charts. The exam expands to include:",
    items: [
      {
        head: "Visual acuity measurement",
        para: "using age-appropriate optotypes (pictures, tumbling E, or HOTV charts) rather than the standard Snellen letter chart.",
      },
      {
        head: "Stereopsis testing",
        para: "assessing depth perception, which requires both eyes to work together effectively.",
      },
      {
        head: "Colour vision screening",
        para: "particularly relevant for boys, as colour vision deficiency affects approximately 8 percent of males.",
      },
      {
        head: "Binocular vision assessment",
        para: "vergence testing and accommodative assessment to detect convergence or focusing difficulties that are common in this age group.",
      },
    ],
  },
  {
    title: "School-age children and teenagers (6 to 19 years)",
    intro:
      "The full adult exam structure applies, with additional attention to conditions particularly prevalent in this age group:",
    items: [
      {
        head: "Myopia assessment and progression monitoring",
        para: "refractive error measurement, axial length measurement where myopia is present or suspected, and discussion of myopia control options where appropriate.",
      },
      {
        head: "Binocular vision assessment",
        para: "convergence insufficiency is frequently first detected in school-age children when reading demands increase; accommodative disorders become apparent during the increased near work of the school years.",
      },
      {
        head: "Colour vision",
        para: "formally assessed if not already done.",
      },
      {
        head: "Full ocular health examination",
        para: "anterior and posterior segment, intraocular pressure, visual fields where indicated.",
      },
    ],
  },
];

const warningSigns = [
  {
    title: "At school or during reading",
    items: [
      "Sitting unusually close to screens, boards, or books.",
      "Losing their place frequently while reading, or skipping lines.",
      "Using a finger to track while reading beyond the age where this is typical.",
      "Avoiding reading or doing homework, particularly if they didn't before.",
      "Frequently tilting or turning the head to one side when looking at something.",
      "Rubbing eyes excessively during near tasks.",
      "Short attention span for visual tasks but not for other activities.",
      "Difficulty copying from the board.",
    ],
  },
  {
    title: "Physically",
    items: [
      "One eye that turns in, out, up, or down consistently or intermittently.",
      "Eyes that appear misaligned in photos (an eye that appears to look in a different direction from the other).",
      "Squinting frequently, particularly at distance.",
      "Closing or covering one eye to see better.",
      "Sensitivity to light that seems disproportionate.",
      "Frequent headaches, particularly at the front of the head or around the eyes, during or after school.",
    ],
  },
  {
    title: "In infants and toddlers",
    items: [
      "Eyes that don't appear to follow a moving object by three to four months of age.",
      "One or both eyes that wander or cross intermittently after four months.",
      "Significant asymmetry in how the eyes respond to light or stimulation.",
      "A white or grey reflex in photographs where a red-eye effect would be expected in both eyes.",
    ],
  },
  {
    title: "General",
    items: [
      "A sudden change in school performance that doesn't have an obvious explanation.",
      "Complaints of double vision.",
      "Avoidance of activities that previously interested them such as outdoor play, sports, or reading.",
    ],
  },
];

const ohipCovers = [
  "One comprehensive eye examination per calendar year for patients aged 19 and under.",
  "The exam is billed directly to OHIP by the optometrist.",
];

const ohipDoesNotCover = [
  "Glasses, contact lenses, or other optical appliances; extended health benefits may partially cover these if your family has workplace coverage.",
  "Specialized testing beyond the core comprehensive exam, such as visual field testing or fundus photography, may involve additional fees depending on clinical necessity.",
  "Contact lens fitting fees.",
];

const whyChooseUs = [
  {
    head: "Experience with children from six months old",
    para: "Our optometrists see patients from six months of age and are trained in the objective testing techniques required for pre-verbal and pre-literate patients. Infants, toddlers, and children who are anxious about the exam all receive a patient-paced appointment with as much time as needed to complete a thorough assessment.",
  },
  {
    head: "Two convenient Toronto locations",
    para: "Our Beaches clinic on Queen Street East is a short distance from Leslieville, Riverdale, East York, and the waterfront communities. Our Yorkville clinic on Bloor Street West, steps from Bay Station, serves families from midtown, The Annex, Summerhill, and the surrounding neighbourhoods. Both clinics offer evening and Saturday appointments to accommodate school and work schedules.",
  },
  {
    head: "Full pediatric service scope in one clinic",
    para: "Routine eye exams, myopia control, orthokeratology, vision therapy, contact lens fitting, and sports vision are all available at both locations. Families don't need to be referred elsewhere for specialised pediatric care; it's all under one roof, at the clinic you already know.",
  },
  {
    head: "OHIP billing handled directly",
    para: "We direct-bill OHIP for all eligible pediatric patients. Bring your child's OHIP card and we handle the rest.",
  },
  {
    head: "Child-friendly environment",
    para: "Both clinics are set up to make the exam experience as calm and comfortable as possible for younger patients. We go at your child's pace, explain what we're doing at each step in age-appropriate language, and never rush an assessment to move on.",
  },
  {
    head: "Myopia management expertise",
    para: "With the global rise in childhood myopia, many Toronto families are seeking optometrists who offer not just glasses but active myopia control. Our optometrists have experience across all four evidence-based myopia control modalities and provide structured monitoring programs with axial length measurement at every follow-up.",
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 sm:w-7 sm:h-7 text-combination-100 mr-2 mt-1 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 13L9 17L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row justify-between mb-6">
    <div className="flex flex-col gap-4 w-full md:w-[585px] md:mr-10 mb-8 md:mb-0">
      <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-bold">
        Comprehensive Pediatric Eye Exams
      </h2>
      <hr className="w-20 h-1 bg-combination-100 mb-2" />
      <p className="text-neutral-500 text-base md:text-lg mb-2">
        Most children don&apos;t know their vision isn&apos;t normal. They have
        no reference point for what clear sight looks like. A child who
        struggles to see the board at school, avoids reading, or holds books
        unusually close isn&apos;t necessarily being difficult. They may simply
        be managing a vision problem they don&apos;t have the language to
        describe. The only way to know is to have their eyes professionally
        examined.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-2">
        At 360 Eyecare, our pediatric optometrists provide comprehensive eye
        exams for children from six months of age through adolescence at both
        our{" "}
        <Link href="/toronto-rosedale-optometrist" className={linkClass}>
          Yorkville clinic
        </Link>{" "}
        on Bloor Street West and our{" "}
        <Link href="/toronto-beaches-optometrist" className={linkClass}>
          Beaches clinic
        </Link>{" "}
        on Queen Street East. Beyond prescriptions and visual acuity, we screen
        for the full range of conditions that affect childhood vision
        (amblyopia, strabismus, myopia, binocular vision disorders, and visual
        processing difficulties) and offer the full spectrum of pediatric
        treatment, including{" "}
        <Link href="/myopia-control-clinic/" className={linkClass}>
          myopia control
        </Link>
        , vision therapy, and contact lens fitting for children.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-2 font-semibold">
        OHIP covers annual eye exams for children and youth under 20. This means
        there&apos;s no cost barrier to getting your child&apos;s vision checked
        every year.
      </p>
    </div>
    <div className="w-full md:w-[585px] flex flex-col gap-6">
      <Image
        src={pediatricEyeImage}
        alt="Child having a pediatric eye exam at 360 Eyecare Toronto"
        width={585}
        height={536}
        className="w-full h-auto"
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
      <SubHeader text="Pediatric Eye Exams in Toronto — Yorkville & The Beaches" />
      <IntroSection />
      <PediatricOptometristsUI />

      {/* When to book */}
      <div className={sectionClass}>
        <h2 className={h2Class}>
          When Should My Child Have Their First Eye Exam?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          The Canadian Association of Optometrists recommends the following
          schedule as a minimum:
        </p>
        {examSchedule.map((stage) => (
          <div key={stage.head}>
            <h3 className={h3Class}>{stage.head}</h3>
            <p className={paraClass}>{stage.para}</p>
          </div>
        ))}
        <p className={`${paraClass} mt-6 font-semibold`}>
          In Toronto&apos;s school system, vision screening at school is not a
          substitute for a comprehensive eye exam. School screenings typically
          check basic visual acuity only and miss the majority of binocular
          vision disorders, accommodative problems, and early myopia that a
          full exam would detect.
        </p>
      </div>

      {/* What happens during the exam */}
      <div className={sectionClass}>
        <h2 className={h2Class}>
          What Happens During a Pediatric Eye Exam at 360 Eyecare?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          A pediatric eye exam at 360 Eyecare is structured differently
          depending on your child&apos;s age, but all exams cover the same core
          domains: visual acuity, refractive status, binocular function, ocular
          health, and developmental appropriateness.
        </p>
        {examStages.map((stage) => (
          <div key={stage.title}>
            <h3 className={h3Class}>{stage.title}</h3>
            <p className={paraClass}>{stage.intro}</p>
            <HeadParaList items={stage.items} />
          </div>
        ))}
        <p className={paraClass}>
          Throughout every exam, regardless of age, our optometrists use a
          patient-paced approach. Children who need more time, more
          reassurance, or a different testing sequence get it. The goal is a
          complete and accurate assessment, not a fast one.
        </p>
      </div>

      {/* Warning signs */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Signs Your Child May Have a Vision Problem</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          Because children rarely report vision problems, parents and teachers
          are often the first to notice the behavioural and academic signs that
          something may be affecting their vision. The challenge is that many
          of these signs are subtle and easily attributed to other causes.
        </p>
        <p className={`${paraClass} font-semibold`}>Watch for:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {warningSigns.map((group) => (
            <div key={group.title} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-combination-200 text-lg sm:text-xl font-bold mb-3">
                {group.title}
              </h3>
              <BulletList items={group.items} />
            </div>
          ))}
        </div>
        <p className={`${paraClass} mt-6`}>
          One or more of these signs warrants a comprehensive eye exam rather
          than &quot;waiting to see.&quot; Many are not things children
          outgrow; they&apos;re things that respond to the right intervention
          at the right time.
        </p>
      </div>

      {/* OHIP coverage */}
      <div className={sectionClass}>
        <h2 className={h2Class}>
          OHIP Coverage for Children&apos;s Eye Exams in Ontario
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          In Ontario, OHIP covers one comprehensive eye exam per year for all
          children and youth under 20. This means that from your child&apos;s
          first exam at six months through to age 19, routine annual eye exams
          are covered at no cost to you.
        </p>
        <h3 className={h3Class}>What OHIP covers:</h3>
        <BulletList items={ohipCovers} />
        <h3 className={h3Class}>What OHIP does not cover:</h3>
        <BulletList items={ohipDoesNotCover} />
        <p className={paraClass}>
          At both 360 Eyecare locations, we direct-bill OHIP for eligible
          patients. Bring your child&apos;s OHIP card to every appointment. If
          your card has expired or you&apos;re unsure about your OHIP status,
          our front desk team can help you confirm your coverage before the
          appointment.
        </p>
        <p className={paraClass}>
          The OHIP-covered annual exam is one of the most underused health
          benefits in Ontario. A significant proportion of school-age children
          have never had a comprehensive eye exam despite full coverage being
          available to them. If your child hasn&apos;t had an exam this year,
          booking one costs you nothing and could detect a vision problem
          that&apos;s been affecting their learning or development unnoticed.
        </p>
      </div>

      {/* Booking CTA */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Ready to Book Your Child&apos;s Eye Exam?</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={`${paraClass} mb-4`}>
          OHIP covers annual eye exams for all children and youth under 20.
          Both 360 Eyecare locations welcome new pediatric patients — no
          referral required.
        </p>
        <div className="flex flex-col gap-4 text-base mb-6 text-neutral-500">
          <p>
            <strong>360 Eyecare Yorkville</strong> — 55 Bloor St W, Manulife
            Centre
            <br />
            <a
              href="tel:+1-416-901-2725"
              className={`${linkClass} font-semibold`}
            >
              📞 416-901-2725
            </a>
          </p>
          <p>
            <strong>360 Eyecare Beaches</strong> — 2199 Queen St E
            <br />
            <a
              href="tel:+1-416-698-3937"
              className={`${linkClass} font-semibold`}
            >
              📞 416-698-3937
            </a>
          </p>
        </div>
        {/* Side by side here: the full-width section has room for both */}
        <div className="flex flex-col sm:flex-row gap-4">
          {dryEyeClinics.map((clinic) => (
            <Link
              key={clinic.name}
              href={clinic.bookHref}
              className={bookButtonClass}
            >
              Book a Pediatric Eye Exam — {clinic.shortName}
            </Link>
          ))}
        </div>
      </div>

      <Banner2
        title="Need Pediatric Eye Care?"
        description="Contact us today to schedule your child’s pediatric eye exam in Toronto."
        rosedale={true}
        ctaText="Book A Pediatric Eye Exam"
        ctaLink="/book-eye-exam"
      />

      <PediatricSlider />

      {/* Why choose us */}
      <div className={sectionClass}>
        <h2 className={h2Class}>
          Why Choose 360 Eyecare for Your Child&apos;s Eye Care
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-8" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="relative min-h-[260px] rounded-lg overflow-hidden">
            <Image
              src={pediatricGirlImage}
              alt="Child getting an eye exam"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </li>
          {whyChooseUs.map((item) => (
            <li
              key={item.head}
              className="bg-gray-50 rounded-lg p-6 border-t-4 border-combination-100 flex flex-col gap-2"
            >
              <div className="flex items-start">
                <CheckIcon />
                <h3 className="text-combination-200 text-lg sm:text-xl font-bold leading-snug mt-1">
                  {item.head}
                </h3>
              </div>
              <p className="text-neutral-500 text-base leading-relaxed">
                {item.para}
              </p>
            </li>
          ))}
          <li className="flex items-center justify-center rounded-lg bg-combination-50 p-6 min-h-[160px]">
            <Link
              href="/book-eye-exam"
              className="w-full sm:w-max text-center bg-combination-100 hover:bg-combination-200 hover:text-white text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md"
            > 
              Book A Pediatric Eye Exam
            </Link>
          </li>
        </ul>
      </div>

      {/* Kept with their existing copy (no new content supplied for these) */}
      <Benefits
        benefitsData={pediatricEyeBenefitsData}
        title="What You Get"
        subtitle="Value for your child's vision health."
      />
      <LaserVisionService
        data={pediatricEyeData}
        image={ExpertisePediatricImage}
        imageTitle="Expert Pediatric Eye Care"
        imageDesc="Trusted by families in Toronto"
      />

      {/* Booking */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Book Your Child&apos;s Eye Exam in Toronto</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        {/* Paragraphs beside the image (moved here from the FAQ section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-4">
          <div>
            <p className={paraClass}>
              Annual eye exams are covered by OHIP for all children under 20.
              If your child hasn&apos;t had a comprehensive exam this year, or
              has never had one, both 360 Eyecare locations are accepting new
              pediatric patients.
            </p>
            <p className={paraClass}>
              Our optometrists see children from six months old through
              adolescence, with the experience, equipment, and patience to
              conduct thorough assessments at every developmental stage.
              Whether you&apos;re booking a first exam for an infant, an annual
              check for a school-age child, or a consultation about myopia
              control or vision therapy, we&apos;ll make sure your child&apos;s
              appointment is as informative and comfortable as possible.
            </p>
          </div>
          <div className="flex flex-row items-end">
            <div className="hidden sm:block w-[30px] h-[200px] bg-combination-100 flex-shrink-0" />
            <Image
              src={childVisionImage}
              alt="Child vision testing"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        <ClinicBookingCards
          bookLabel="Book a Pediatric Eye Exam"
          clinics={pediatricClinics}
        />
        <p className="text-neutral-500 text-sm mt-2">
          Though OHIP covers eye exams for all children under 20, it does not
          cover additional diagnostic tests, medications, or other services
          your optometrist may recommend. These costs will need to be paid out
          of pocket.
        </p>
      </div>

      {/* FAQs */}
      {/* Full width now that the image has moved to the booking section */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Pediatric Eye Care FAQs</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className="text-neutral-500 text-base mb-4">
          Find answers to common questions about pediatric eye care in Toronto.
          Please contact us with specific questions about your child&apos;s
          vision health.
        </p>
        <Faqs faqData={faqDatapediatric} />
      </div>
    </main>
  );
};

export default page;
