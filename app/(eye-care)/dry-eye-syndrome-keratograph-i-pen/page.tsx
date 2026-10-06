import React from "react";
import SubHeader from "../../../components/SubHeader";
import VideoSection from "../../../components/VideoSection";
import Link from "next/link";
import AdvancedTreatmentEyeCare from "../../../components/AdvancedTreatmentEyeCare";
import PreventingDryEye from "../../../components/PreventingDryEye";
import DryEyeVideoSection from "../../../components/DryEyeVideoSection";

import {
  DryEyeImage,
  dryEyeImage,
  ThumbnailDryEyeImage1,
  ThumbnailDryEyeImage2,
  understandDryEyeImage,
} from "../../../constants/Images";
import Image from "next/image";
import WhatHappensIfIDoNothing from "../../../components/WhatHappensIfIDoNothing";
import Symptoms from "../../../components/Symptoms";
import DryFaqs from "../../../components/DryFaqs";
import { dryEyeClinics as clinics, dryFaqdata } from "constants/Constants";

export async function generateMetadata() {
  return {
    title: "Dry Eye Clinic Toronto | Dry Eye Specialist | 360 Eyecare",
    description:
      "Do you suffer from Dry Eyes? Get your dry, itchy eyes, irritation & excessive tearing treated at Dry Eye Clinic Toronto. Book an appointment.",
    openGraph: {
      title: "Dry Eye Clinic Toronto | Dry Eye Specialist | 360 Eyecare",
      description:
        "Do you suffer from Dry Eyes? Get your dry, itchy eyes, irritation & excessive tearing treated at Dry Eye Clinic Toronto. Book an appointment.",
      url: "https://www.360eyecare.ca/dry-eye-syndrome-keratograph-i-pen/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical:
        "https://www.360eyecare.ca/dry-eye-syndrome-keratograph-i-pen/",
    },
  };
}

const linkClass = "text-combination-200 hover:text-combination-100";
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md";

const longTermHabits = [
  {
    head: "Daily warm compresses and eyelid hygiene:",
    para: "For patients with any history of MGD or blepharitis — maintenance of gland function requires ongoing attention, not just treatment during flare-ups.",
  },
  {
    head: "Consistent omega-3 supplementation:",
    para: "Rather than sporadic use — the meibum composition changes take weeks to months to manifest and require sustained intake.",
  },
  {
    head: "Preservative-free lubricating drops used proactively:",
    para: "In high-risk environments — before long flights, during allergy season, on particularly dry winter days — rather than reactively once symptoms are already significant.",
  },
  {
    head: "Regular contact lens hygiene and replacement schedule:",
    para: "For lens wearers — deposit accumulation and extended wear are significant MGD accelerators.",
  },
];

// Section components to improve modularity
const TopIntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col gap-4">
    <p className="text-neutral-500 text-base md:text-lg">
      Dry eye is one of the most common and most undertreated conditions we see
      at 360 Eyecare. Patients often spend years managing symptoms with
      over-the-counter drops, not realising that a proper diagnosis and the
      right treatment plan can deliver lasting relief rather than temporary
      cover.
    </p>
    <p className="text-neutral-500 text-base md:text-lg">
      At our Yorkville clinic on Bloor Street West and our Beaches clinic on
      Queen Street East, we offer full-scope dry eye care: from advanced
      diagnostic imaging with the OCULUS Keratograph 5M to in-office treatments
      including InMode IPL and RF therapy.
    </p>
    <p className="text-neutral-500 text-base md:text-lg">
      At 360 Eyecare, we identify the underlying cause and build a treatment
      plan around it.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-base md:text-lg">
      {clinics.map((clinic) => (
        <a
          key={clinic.name}
          href={`tel:+1-${clinic.phone}`}
          className={`${linkClass} font-semibold`}
        >
          📞 {clinic.shortName}: {clinic.phone}
        </a>
      ))}
    </div>
    <Link href="/book-eye-exam" className="w-fit">
      <button className="bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md">
        Book a Dry Eye Assessment
      </button>
    </Link>
  </div>
);

const IntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row justify-between mb-10">
    <div className="flex flex-col gap-4 w-full md:w-[585px] md:mr-10 mb-8 md:mb-0">
      <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
        Dry Eye Clinic
      </h2>
      <hr className="w-20 h-1 bg-combination-100 mb-4" />
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        For millions of Canadians, dry eye is a daily condition that affects how
        clearly they see, how comfortably they work, and how well they sleep.
        The burning, the grittiness, the paradoxical watering that makes your
        eyes feel wet and dry at the same time are the hallmarks of a condition
        that&apos;s far more complex than its name suggests.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Dry eye disease (DED) is a chronic condition that affects the tear film.
        When that tear film breaks down, whether through insufficient tear
        production, poor tear quality, or accelerated evaporation, the result is
        a cycle of inflammation and surface damage that tends to worsen over
        time if left unmanaged.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        At 360 Eyecare, we treat dry eye as a clinical condition that requires
        proper diagnosis before treatment. That means before we recommend drops,
        in-office procedures, or advanced therapies like IPL or RF, we conduct a
        thorough dry eye assessment using diagnostic tools that most Toronto
        optometry clinics don&apos;t carry. The OCULUS Keratograph 5M gives our
        optometrists detailed imaging of your meibomian glands, real-time tear
        film analysis, and non-invasive tear breakup time measurements. The
        i-PEN osmolarity testing device measures tear osmolarity (which is one
        of the most reliable objective markers of dry eye severity) in seconds.
        Together, they let us identify the dry eye type, how severe it is, and
        what&apos;s driving it.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Evaporative dry eye and aqueous deficient dry eye have different causes,
        different progressions, and different optimal treatments. A treatment
        plan built on a proper diagnosis produces better outcomes than one built
        on symptom management alone.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Both our Yorkville clinic on Bloor Street West and our Beaches clinic on
        Queen Street East are fully equipped for comprehensive dry eye
        assessment and treatment. If you&apos;ve been managing dry eyes with
        drops for months or years without real relief, it may be time for a
        proper diagnosis.
      </p>
      <Link href="/book-eye-exam">
        <button className="bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md">
          Book a Dry Eye Assessment
        </button>
      </Link>
    </div>
    <div className="w-full md:w-[585px] h-auto md:h-[536px]">
      <Image
        src={dryEyeImage}
        alt="Dry Eye Clinic"
        width={585}
        height={536}
        className="w-full h-auto"
      />
    </div>
  </div>
);

const UnderstandingDryEye = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row justify-between">
    <div className="flex flex-col gap-4 w-full md:w-[585px] md:mr-10 mb-8 md:mb-0">
      <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
        Understanding Dry Eye
      </h2>
      <hr className="w-20 h-1 bg-combination-100 mb-4" />
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Dry eye, technically known as Dry Eye Disease (DED), is a chronic
        condition affecting the tear film. That film has three components: an
        outer oily layer that slows evaporation, a middle watery layer that
        provides moisture and nutrients, and an inner mucin layer that helps the
        tear film spread evenly across the corneal surface. When any one of
        these layers is compromised, the entire system becomes unstable.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        The result is an eye surface that can&apos;t maintain adequate
        lubrication between blinks, which leads to burning, grittiness,
        fluctuating vision, and reflex tearing that dry eye patients know well.
        And yes, watery eyes can be a symptom of dry eye: when the surface
        becomes irritated enough, the lacrimal glands flood the eye with reflex
        tears as a protective response. Those tears don&apos;t have the oil
        content needed to stabilise the tear film, so they provide brief relief
        before evaporating and leaving things worse than before.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Dry eyes are also progressive. Without treatment, the cycle of
        inflammation and surface irritation tends to compound over time, causing
        increasing damage to the corneal epithelium and, in more advanced cases,
        scarring that can permanently affect vision quality.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        There are two primary types of dry eye, each with a distinct underlying
        mechanism:
      </p>
    </div>
    <div className="w-full md:w-[585px] flex flex-row items-end">
      <div className="hidden md:block w-[30px] h-[280px] bg-gray-100" />
      <Image
        src={understandDryEyeImage}
        alt="Understanding Dry Eye"
        width={585}
        height={536}
        className="w-full h-auto"
      />
    </div>
  </div>
);

const DryEyeTypes = () => (
  <ul className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col gap-4 list-disc list-inside text-neutral-500 text-base md:text-lg">
    <li>
      <strong className="text-gray-400 font-bold">Evaporative Dry Eye:</strong>
      <p className="mt-2 ml-0 md:ml-6">
        This is the most common type, which accounts for the majority of dry
        eye cases. Here, the problem is how quickly your tears evaporate. The
        culprit is almost always the oily outer layer of the tear film, which
        depends on meibum secreted by the meibomian glands in your eyelids. When
        those glands become blocked, inflamed, or dysfunctional (a condition
        known as Meibomian Gland Dysfunction, or MGD), the oily layer thins or
        disappears, and tears evaporate far faster than they should.
        Environmental factors accelerate this: screen time reduces blink rate,
        dry Toronto winters reduce ambient humidity, and wind exposure strips
        the tear film faster than the glands can replenish it.
      </p>
    </li>
    <li className="mt-4">
      <strong className="text-gray-400 font-bold">
        Aqueous Deficient Dry Eye:
      </strong>
      <p className="mt-2 ml-0 md:ml-6">
        Less common but often more severe. Here, the lacrimal glands, which are
        responsible for producing the watery middle layer of the tear film,
        simply don&apos;t produce enough tears to keep the ocular surface
        adequately lubricated. This type is frequently associated with
        autoimmune conditions like Sjögren&apos;s syndrome, certain medications
        including antihistamines and antidepressants, hormonal changes, and
        advancing age. Some patients present with a mixed picture: elements of
        both evaporative and aqueous deficient dry eye occurring simultaneously,
        which is part of why accurate diagnosis matters so much before
        committing to a treatment approach.
      </p>
    </li>
  </ul>
);

const SectionTitle = ({ title }) => (
  <>
    <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
      {title}
    </h2>
    <hr className="w-20 h-1 bg-combination-100 mb-4" />
  </>
);

const MGDSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col gap-6 text-neutral-500 text-base md:text-lg">
    <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
      Meibomian Gland Dysfunction (MGD)
    </h2>
    <hr className="w-20 h-1 bg-combination-100 mb-4" />

    <p>
      Meibomian gland dysfunction is the single most common driver of dry eye
      disease, yet it remains one of the most underdiagnosed conditions in
      optometry. Most patients who&apos;ve been managing dry eyes with
      artificial tears for years have never had their meibomian glands properly
      assessed, partly because doing so requires specialised imaging equipment
      that not every clinic carries, and partly because the condition can be
      present and progressing well before symptoms become severe enough to
      prompt investigation.
    </p>
    <p>
      At 360 Eyecare, MGD assessment is a core part of every dry eye
      consultation at both our Yorkville and Beaches clinics. Understanding
      what&apos;s happening inside your glands is the starting point for
      building a treatment plan that actually works.
    </p>

    <h3 className="text-2xl md:text-[30px] font-semibold text-combination-200 mt-6">
      What is MGD?
    </h3>
    <p>
      The meibomian glands are a row of small oil-producing glands embedded in
      the upper and lower eyelids. Their job is to secrete meibum, an oily
      substance that forms the outermost layer of the tear film. That oil layer
      slows tear evaporation, keeps the tear film stable between blinks, and
      protects the ocular surface from environmental exposure.
    </p>
    <p>
      When the meibomian glands become blocked, inflamed, or structurally
      compromised, meibum production decreases or the quality of the oil
      degrades. The tear film loses its protective outer layer. Tears evaporate
      too quickly. The ocular surface becomes inflamed. And because the glands
      themselves can permanently lose secretory tissue (atrophy) over time if
      left untreated, MGD is a condition where early intervention genuinely
      changes long-term outcomes.
    </p>

    <h3 className="text-2xl md:text-[30px] font-semibold text-combination-200 mt-6">
      Symptoms of MGD
    </h3>
    <p>
      The symptoms of MGD overlap significantly with general dry eye symptoms,
      which is one reason it often goes unidentified. The most common
      presentations include:
    </p>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Dryness and grittiness:</strong> Insufficient meibum causes
        tears to evaporate rapidly, leaving the surface inadequately lubricated.
      </li>
      <li className="mb-2">
        <strong>Burning or stinging:</strong> Particularly noticeable during
        blinking or after prolonged screen use.
      </li>
      <li className="mb-2">
        <strong>Redness:</strong> Inflammation of the eyelid margins and ocular
        surface.
      </li>
      <li className="mb-2">
        <strong>Blurry or fluctuating vision:</strong> Poor tear film quality
        disrupts the smooth refractive surface of the cornea, causing vision to
        blur and briefly clear with blinking.
      </li>
      <li className="mb-2">
        <strong>Light sensitivity:</strong> An inflamed ocular surface becomes
        more sensitive to bright light and glare.
      </li>
      <li className="mb-2">
        <strong>Crusting or debris along the lash line:</strong> A sign of gland
        secretion abnormalities and, in some cases, associated blepharitis.
      </li>
    </ul>

    <h3 className="text-2xl md:text-[30px] font-semibold text-combination-200 mt-6">
      Diagnosing MGD
    </h3>
    <p>
      Accurate MGD diagnosis requires more than a symptom questionnaire. At 360
      Eyecare, we use a structured assessment that includes:
    </p>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Meibography with the OCULUS Keratograph 5M:</strong> Infrared
        imaging of the meibomian glands allows your optometrist to directly
        visualise gland structure, identify areas of dropout or atrophy, and
        assess the degree of dysfunction. This is the most important single
        diagnostic step for MGD and it&apos;s one most patients haven&apos;t had
        done before their first visit to our clinic.
      </li>
      <li className="mb-2">
        <strong>Gland expression:</strong> Manual or instrument-assisted
        expression of the gland orifices to assess meibum quality and quantity.
        Healthy meibum is clear and flows freely. Thickened, cloudy, or
        toothpaste-like secretions indicate compromised gland function.
      </li>
      <li className="mb-2">
        <strong>Tear film analysis:</strong> Non-invasive tear breakup time
        measurement using the Keratograph 5M assesses how quickly the tear film
        destabilises after a blink; a direct measure of the oily layer&apos;s
        effectiveness. Tear meniscus height measurement evaluates the volume of
        the aqueous layer.
      </li>
      <li className="mb-2">
        <strong>i-PEN osmolarity testing:</strong> Tear osmolarity is one of the
        most sensitive and objective biomarkers of dry eye severity. The i-PEN
        measures osmolarity in seconds with a brief touch to the lower lid.
        Elevated osmolarity confirms tear film instability and helps track
        treatment response over time.
      </li>
      <li className="mb-2">
        <strong>Lid margin examination:</strong> Your optometrist examines the
        eyelid margins under magnification for signs of inflammation,
        irregularity, vascular changes, and associated conditions like
        blepharitis or demodex infestation, both of which can contribute to MGD
        and require separate management.
      </li>
    </ul>

    <h3 className="text-2xl md:text-[30px] font-semibold text-combination-200 mt-6">
      Treatment
    </h3>
    <p>
      Effective MGD management is tailored to the severity of gland dysfunction
      and the underlying drivers. Treatment is typically staged, beginning with
      the least invasive options and escalating where needed.
    </p>
    <h4 className="text-lg font-semibold mt-4">Lifestyle and Home Management:</h4>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Warm Compresses:</strong> Applied to closed eyelids for 10
        minutes daily, they soften thickened meibum and improve gland secretion.
        Consistency matters more than intensity here; a daily routine sustained
        over weeks produces better results than occasional use.
      </li>
      <li className="mb-2">
        <strong>Eyelid Hygiene:</strong> Gentle daily cleansing of the eyelid
        margins removes debris, bacterial biofilm, and demodex byproducts that
        contribute to gland blockage. Preservative-free lid wipes or diluted
        baby shampoo are typically recommended.
      </li>
      <li className="mb-2">
        <strong>Omega-3 Supplementation:</strong> Dietary omega-3 fatty acids
        have been shown to improve meibum quality and reduce ocular surface
        inflammation in patients with MGD. Triglyceride-form fish oil is better
        absorbed than ethyl ester formulations.
      </li>
    </ul>

    <h4 className="text-2xl md:text-[30px] text-combination-200 font-semibold mt-4">
      Prescription Medications:
    </h4>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Topical Antibiotics:</strong> Doxycycline and azithromycin have
        anti-inflammatory properties in addition to their antibiotic effects,
        and are often used in moderate to severe MGD to reduce lid margin
        inflammation and improve gland function.
      </li>
      <li className="mb-2">
        <strong>Topical Anti-inflammatories:</strong> Cyclosporine or
        corticosteroid eye drops may be prescribed where significant ocular
        surface inflammation is present alongside MGD.
      </li>
    </ul>

    <h4 className="text-2xl md:text-[30px] text-combination-200 font-semibold mt-4">
      In-Office Procedures:
    </h4>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>InMode IPL (Intense Pulsed Light):</strong> Targets the abnormal
        blood vessels around the meibomian glands that drive chronic lid margin
        inflammation, while simultaneously heating the glands to improve meibum
        flow. One of the most effective treatments available for evaporative dry
        eye driven by MGD. (Full detail in the IPL section below.)
      </li>
      <li className="mb-2">
        <strong>InMode RF (Radiofrequency):</strong> Uses controlled
        radiofrequency heat delivered to the eyelid tissue to liquefy
        inspissated meibum and stimulate collagen production in the eyelid
        structures that support gland function. Often used in combination with
        IPL. (Full detail in the RF section below.)
      </li>
    </ul>
  </div>
);

const LongTermHabits = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0">
    <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
      Long-Term Eye Care Habits
    </h2>
    <hr className="w-20 h-1 bg-combination-100 mb-4" />
    <p className="text-neutral-500 mt-4">
      Prevention ultimately comes down to consistency and the most important
      long-term habit is also the simplest: annual comprehensive eye exams.
      Regular monitoring allows your optometrist to track meibomian gland health
      over time using Keratograph imaging, identify early MGD before it becomes
      symptomatic, and intervene at a stage where treatment is more
      straightforward and outcomes are better.
    </p>
    <p className="text-neutral-500 mt-4">
      Beyond annual exams, the habits that matter most long-term are:
    </p>
    <ul className="list-disc list-inside space-y-6 md:space-y-8 md:mt-8 mt-4">
      {longTermHabits.map((item) => (
        <li key={item.head} className="ml-0 md:ml-4">
          <strong className="text-base font-bold mb-4 md:mb-8 text-neutral-500">
            {item.head}
          </strong>
          <p className="text-neutral-500 mt-2 md:mt-4">{item.para}</p>
        </li>
      ))}
    </ul>
  </div>
);

const FirstStepSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col gap-4">
    <SectionTitle title="Take the First Step Toward Lasting Dry Eye Relief" />
    <p className="text-neutral-500">
      Dry eye is a condition that responds well to treatment but only when that
      treatment is built on an accurate understanding of what&apos;s driving it.
      If you&apos;ve been managing symptoms with drops that help a little but
      never fully resolve the problem, or if you&apos;ve been told you have dry
      eye without ever having your meibomian glands properly assessed, a
      comprehensive dry eye consultation at 360 Eyecare is the right starting
      point.
    </p>
    <p className="text-neutral-500">
      Our optometrists at both the Yorkville and Beaches clinics have extensive
      experience diagnosing and treating the full spectrum of dry eye disease.
      Whatever stage you&apos;re at, we&apos;ll tell you exactly what we find,
      what it means, and what the realistic options are.
    </p>
    <p className="text-neutral-500">
      You don&apos;t need a referral. You don&apos;t need to have seen an
      optometrist recently. And you don&apos;t need to already know what type
      of dry eye you have; that&apos;s what the assessment is for.
    </p>
  </div>
);

const BookConsultationSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col gap-4">
    <SectionTitle title="Book Your Dry Eye Consultation in Toronto" />
    <p className="text-neutral-500">
      Both 360 Eyecare locations offer comprehensive dry eye assessments and
      the full spectrum of dry eye treatments, including InMode IPL, InMode RF,
      punctal plugs, and scleral lens fitting. Evening and Saturday
      appointments available. New patients are welcome at both clinics.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
      {clinics.map((clinic) => (
        <div
          key={clinic.name}
          className="bg-gray-50 rounded-lg p-6 flex flex-col gap-3"
        >
          <h3 className="text-combination-200 text-lg sm:text-xl font-bold">
            <Link href={clinic.pageHref} className="hover:text-combination-100">
              {clinic.name}
            </Link>
          </h3>
          <address className="not-italic text-neutral-500 text-sm sm:text-base leading-relaxed">
            {clinic.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={`tel:+1-${clinic.phone}`} className={`${linkClass} block`}>
              📞 {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`} className={`${linkClass} block`}>
              ✉ {clinic.email}
            </a>
          </address>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            {clinic.description}
          </p>
          <div className="mt-auto pt-2">
            <Link href={clinic.bookHref} className={`${bookButtonClass} inline-block`}>
              Book a Dry Eye Consultation — {clinic.shortName}
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Dry Eye Clinic in Toronto — Yorkville & The Beaches" />
      <TopIntroSection />
      <VideoSection />
      <IntroSection />
      <UnderstandingDryEye />
      <DryEyeTypes />
      <MGDSection />
      <WhatHappensIfIDoNothing />
      <Symptoms />
      <AdvancedTreatmentEyeCare />
      <PreventingDryEye />
      <LongTermHabits />
      <FirstStepSection />
      <BookConsultationSection />
      <DryEyeVideoSection />

      <DryFaqs faqData={dryFaqdata} title="Dry Eye FAQs" />
    </main>
  );
};

export default page;
