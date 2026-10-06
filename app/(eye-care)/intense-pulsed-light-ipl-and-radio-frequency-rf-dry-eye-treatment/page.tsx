import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import Image from "next/image";
import {
  FormaBeforeAfterImage,
  FormaImage,
  LumeccaBeforeAfterImage,
  LummericaImage,
  Optometry6,
} from "../../../constants/Images";
import FormSection from "components/FormSection";
import DryFaqs from "../../../components/DryFaqs";
import { dryEyeClinics as clinics, iplRfFaqdata } from "constants/Constants";

const pageTitle =
  "IPL & RF Dry Eye Treatment Toronto | InMode Lumecca & Forma-I | 360 Eyecare";
const pageDescription =
  "InMode IPL and RF therapy for dry eye and MGD at 360 Eyecare's Yorkville and Beaches clinics in Toronto. Keratograph 5M and i-PEN tracked treatment. No referral needed.";
const pageUrl =
  "https://www.360eyecare.ca/intense-pulsed-light-ipl-and-radio-frequency-rf-dry-eye-treatment/";

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

// FAQPage structured data, built from the same array the accordion renders
// so the schema can never drift from the visible FAQ copy.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: iplRfFaqdata.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const linkClass = "text-combination-200 hover:text-combination-100";
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md";

const iplMechanisms = [
  {
    head: "Telangiectasia elimination",
    para: "The abnormal blood vessels (telangiectasia) that develop along the eyelid margins in patients with chronic MGD and rosacea are a primary driver of the inflammatory cycle that keeps meibomian glands blocked and dysfunctional. IPL light energy is selectively absorbed by the haemoglobin in these vessels, causing them to collapse and be reabsorbed, removing a key source of chronic lid margin inflammation.",
  },
  {
    head: "Thermal meibomian gland stimulation",
    para: "The light energy simultaneously heats the meibomian glands through the periocular skin, liquefying thickened or solidified meibum and improving gland secretion. Immediately following each IPL session, your optometrist performs meibomian gland expression to manually clear the softened gland contents. The combination of thermal treatment and expression consistently produces better outcomes than either approach alone.",
  },
  {
    head: "Demodex reduction",
    para: "IPL light pulses are lethal to Demodex mites, microscopic organisms that colonise the eyelash follicles and meibomian glands in a significant proportion of dry eye patients, particularly those over 50. Reducing demodex load removes another driver of lid margin inflammation and gland orifice obstruction that standard dry eye treatments don't address.",
  },
];

const iplSteps = [
  {
    head: "1. Consultation and evaluation",
    para: (
      <>
        Before your first IPL session, your optometrist conducts a{" "}
        <Link href="/dry-eye-syndrome-keratograph-i-pen" className={linkClass}>
          comprehensive dry eye assessment
        </Link>
        , including Keratograph 5M meibography and i-PEN osmolarity testing,
        to confirm that IPL is the appropriate treatment for your presentation
        and to establish the objective baseline we&apos;ll compare against at
        follow-up appointments. Skin type is also assessed at this stage;
        patients with Fitzpatrick skin types V and VI, or those with heavily
        tanned skin, are not suitable candidates for IPL and will be directed
        toward RF therapy instead.
      </>
    ),
  },
  {
    head: "2. Preparation",
    para: "You're seated comfortably in the treatment chair. Protective metal eye shields are placed directly over your eyes to block the IPL light pulses; these are essential and remain in place throughout the treatment. A cooling gel is applied to the periocular skin to enhance comfort and ensure optimal light transmission to the target tissue.",
  },
  {
    head: "3. IPL application",
    para: "Your optometrist uses the InMode Lumecca handpiece to deliver precise pulses of broad-spectrum light to the lower eyelids, upper cheeks, and temples. Each pulse produces a brief warming sensation and a flash of light. The handpiece is moved across the treatment area in a structured pattern, with multiple passes to ensure complete coverage. A full treatment session takes approximately 15 to 20 minutes.",
  },
  {
    head: "4. Meibomian gland expression",
    para: "Immediately following the IPL application, while the meibum has been softened by the light energy, your optometrist performs meibomian gland expression, manually clearing the softened contents from the treated glands. This step is critical to the effectiveness of the treatment and is what distinguishes a proper IPL protocol from light-only application.",
  },
  {
    head: "5. Post-treatment care",
    para: "The cooling gel is removed, and the treatment area is gently cleansed. A moisturiser or mineral sunscreen may be applied. Key post-treatment instructions include avoiding direct sun exposure for three weeks following each session and for three weeks before the next. UV exposure in the periocular area during this window can affect treatment outcomes and increase the risk of pigmentation changes. Mineral sunscreen and sunglasses outdoors are essential during the treatment course. Makeup can typically be applied immediately after treatment if the skin is intact.",
  },
  {
    head: "6. Follow-up sessions",
    para: "The standard IPL protocol at 360 Eyecare involves four sessions spaced two to four weeks apart. This spacing allows the inflammatory response to resolve between treatments and gives the glands time to begin secreting more normally before the next session. Most patients notice meaningful symptom improvement by the third session; the fourth consolidates and extends the response. Maintenance sessions every six to twelve months are typically recommended following the initial course.",
  },
];

const iplBenefits = [
  {
    head: "Targets the root cause, not the surface",
    para: "IPL addresses the vascular inflammation and gland dysfunction driving evaporative dry eye, not just the surface symptoms. This produces improvements that are durable rather than temporary.",
  },
  {
    head: "Reduces inflammation",
    para: "By eliminating the periocular telangiectasia that sustains chronic lid margin inflammation, IPL breaks the inflammatory cycle that keeps meibomian glands blocked. Patients with rosacea-associated dry eye often see the most dramatic response for this reason.",
  },
  {
    head: "Improves meibomian gland function",
    para: "The thermal stimulation and subsequent expression restore meibum flow to glands that have been producing inadequate or poor-quality oil, directly improving tear film stability and reducing evaporative dry eye symptoms.",
  },
  {
    head: "Reduces demodex load",
    para: "For the significant proportion of dry eye patients with demodex infestation, IPL addresses this driver alongside MGD.",
  },
  {
    head: "Non-invasive with no downtime",
    para: "No needles, no incisions, no anaesthesia required. Patients return to normal activities immediately following each session. The treatment area may appear mildly flushed for a few hours, which resolves on its own.",
  },
  {
    head: "Long-lasting relief",
    para: "Studies consistently show durable improvement following a full four-session course, with up to 87% of patients reporting meaningful symptom reduction. Results are further sustained with periodic maintenance sessions.",
  },
];

const iplCandidates = [
  "Evaporative dry eye driven by MGD",
  "Rosacea or ocular rosacea with associated lid margin inflammation",
  "Visible periocular telangiectasia",
  "Demodex blepharitis contributing to gland dysfunction",
  "Dry eye that hasn't responded adequately to drops, warm compresses, and eyelid hygiene",
  "Fitzpatrick skin types I through IV",
];

const iplContraindications = [
  "Pregnancy or nursing",
  "Impaired immune system due to immunosuppressive disease (including HIV/AIDS) or immunosuppressive medications",
  "History of conditions stimulated by heat, such as recurrent Herpes Simplex in the treatment area, may be treated only following a prophylactic regimen",
  "Severe concurrent conditions including cardiac disorders or sensory disturbances",
  "Active conditions in the treatment area including sores, psoriasis, eczema, or rash",
  "History of skin disorders, keloids, or abnormal wound healing; very dry or fragile skin",
  "Poorly controlled endocrine disorders including diabetes, thyroid dysfunction, or hormonal virilization",
  "Current or historical skin cancer; pre-malignant moles; current condition of any other cancer type",
  "Use of Isotretinoin (Accutane) within six months prior to treatment",
  "Known skin photosensitivity or use of photosensitising medications",
  "Diseases stimulated by light including epilepsy, lupus, and urticaria",
  "Vitiligo",
  "Fitzpatrick skin types V and VI, or excessively tanned skin from sun, tanning beds, or tanning products within the past two weeks",
];

const iplOutcomes = [
  "Measurable improvement in non-invasive tear breakup time (NIKBUT) on Keratograph follow-up assessment",
  "Improved meibum quality and expressibility",
  "Reduction in lid margin redness and telangiectasia",
  "Reduced osmolarity scores on i-PEN follow-up testing",
  "Symptomatic improvement in burning, grittiness, light sensitivity, and visual fluctuation",
];

const rfMechanisms = [
  {
    head: "Meibum liquefaction",
    para: "The RF handpiece delivers controlled heat directly to the eyelid tissue, targeting the meibomian glands in both the upper and lower lids. That heat softens and liquefies thickened or solidified meibum, the inspissated oil that blocks gland orifices and prevents normal tear film secretion. As the meibum becomes fluid, gland expression becomes possible and effective. Following RF application, your optometrist performs meibomian gland expression to clear the softened contents, restoring oil flow to the tear film.",
  },
  {
    head: "Collagen stimulation and structural eyelid support",
    para: "RF energy stimulates fibroblast activity in the periocular connective tissue, triggering new collagen synthesis. As we age, collagen production in the eyelid tissues naturally declines. RF-stimulated collagen remodelling rebuilds that structural matrix, creating firmer, better-supported eyelid tissue that maintains gland position and function more effectively over time. Collagen remodelling continues for several weeks to months after each session, which is why improvement with RF is progressive rather than immediate.",
  },
];

const rfSteps = [
  {
    head: "1. Consultation and evaluation",
    para: "Before your first RF session, your optometrist reviews your dry eye diagnostic findings to confirm RF is appropriate for your presentation and to establish objective baseline measurements. RF candidacy is assessed at this stage, including any implant history or active conditions in the treatment area. Unlike IPL, RF has no skin tone contraindications; it is appropriate for all Fitzpatrick skin types.",
  },
  {
    head: "2. Preparation",
    para: "You're seated comfortably in the treatment chair. Protective eye shields are placed over your eyes. A conductive gel is applied to the periocular skin to facilitate smooth, even transmission of the radiofrequency energy and to maintain patient comfort throughout the session.",
  },
  {
    head: "3. RF application",
    para: "Your optometrist uses the InMode Forma-I handpiece to deliver controlled RF energy to the eyelids and periocular tissue in a structured pattern. The handpiece moves continuously across the treatment area; the energy penetrates into the tissue, generating heat through resistive warming rather than surface absorption. Most patients describe the sensation as a warm, gentle massage. The treatment is well-tolerated without anaesthesia in the vast majority of patients, though a topical numbing agent can be applied if preferred. A full RF session takes approximately 15 to 20 minutes.",
  },
  {
    head: "4. Meibomian gland expression",
    para: "Immediately following RF application, while the meibum has been softened by the heat, your optometrist performs meibomian gland expression to manually clear the softened contents from the treated glands. This combined approach produces significantly better outcomes than thermal treatment alone.",
  },
  {
    head: "5. Post-treatment care",
    para: "The conductive gel is removed, and the treatment area is gently cleansed. Unlike IPL, RF has no mandatory sun avoidance requirement; patients can return to outdoor activities immediately. The periocular skin may appear mildly flushed for a few hours following treatment, which resolves without intervention. Some patients notice a temporary increase in eye watering immediately after the session as freshly expressed glands begin secreting more normally; this is a positive sign that the treatment is working.",
  },
  {
    head: "6. Follow-up sessions",
    para: "The standard RF protocol at 360 Eyecare involves three to four sessions spaced two to four weeks apart, tailored to each patient's diagnostic findings and treatment response. As with IPL, improvement is progressive; most patients notice meaningful change by the second or third session, with the full benefit of the course apparent several weeks after the final session as collagen remodelling continues. Maintenance sessions every six to twelve months sustain results, particularly for patients with significant gland atrophy where ongoing structural support is important.",
  },
];

const rfBenefits = [
  {
    head: "Effective across all skin tones:",
    para: "Unlike IPL, RF has no Fitzpatrick skin type contraindications. It delivers effective treatment regardless of skin pigmentation, making it the appropriate advanced dry eye treatment for patients who aren't suitable IPL candidates, and the preferred option in 360 Eyecare's Toronto clinics for patients across the full range of skin tones represented in Yorkville, The Beaches, and the surrounding communities.",
  },
  {
    head: "Addresses structural MGD:",
    para: "RF targets the meibomian glands directly through resistive tissue heating — addressing the structural and thermal dimension of gland dysfunction that surface-level treatments and even IPL alone don't fully resolve. For patients with significantly thickened or solidified meibum, RF-driven liquefaction is often transformative.",
  },
  {
    head: "Stimulates collagen remodelling:",
    para: "The collagen remodelling triggered by RF produces structural improvements in eyelid tissue that persist and develop over weeks to months following each session, a benefit with no equivalent in IPL, warm compresses, or any other dry eye treatment modality.",
  },
  {
    head: "Non-surgical with no downtime:",
    para: "No incisions, no stitches, no anaesthesia required. Patients return to normal activities immediately. No post-treatment sun avoidance required, unlike IPL.",
  },
  {
    head: "Combines effectively with IPL:",
    para: "RF and IPL address MGD from complementary angles: IPL targeting vascular inflammation and Demodex, RF targeting structural thermal dysfunction and collagen architecture. Used in combination, they produce more comprehensive treatment of moderate to severe MGD than either modality alone. For patients who are suitable for both, combined IPL and RF therapy is the approach most likely to produce durable, comprehensive improvement.",
  },
  {
    head: "Long-lasting relief:",
    para: "Studies support sustained improvement in dry eye symptoms following a full RF course, with results typically lasting six to twelve months before maintenance is beneficial. Objective Keratograph and i-PEN follow-up measurements allow your optometrist to track treatment response precisely and time maintenance sessions appropriately.",
  },
];

const rfCandidates = [
  "Evaporative dry eye driven by MGD, particularly where meibum is significantly thickened or solidified",
  "Age-related eyelid structural changes contributing to gland dysfunction",
  "Dry eye that hasn't responded to warm compresses, drops, or eyelid hygiene alone",
  "Skin types that preclude IPL treatment — RF is appropriate for all Fitzpatrick skin types",
  "Patients seeking combination therapy for moderate to severe MGD",
  "Patients who prefer a treatment with no post-procedure sun avoidance requirement",
];

const rfContraindications = [
  "Active infection, open wounds, or inflammatory skin conditions in the treatment area",
  "Metallic implants or electronic devices in or near the treatment area including pacemakers, cochlear implants, and metal facial implants",
  "Pregnancy",
  "Active cancer or a history of cancer in the treatment area",
  "Severe concurrent medical conditions that may affect treatment safety; discuss with your optometrist at the consultation appointment",
  "Treatment over tattoos or areas of permanent makeup; RF energy may cause pigment disruption",
  "Treatment over areas with high density of hair follicles; permanent hair reduction may occur in the treated area",
];

const rfOutcomes = [
  "Progressive improvement in meibum quality and gland expressibility across the treatment course",
  "Measurable improvement in non-invasive tear breakup time (NIKBUT) on Keratograph follow-up assessment",
  "Reduction in tear osmolarity on i-PEN follow-up testing as tear film stability improves",
  "Firmer, better-supported periocular tissue as collagen remodelling develops over weeks following each session",
  "Symptomatic improvement in burning, grittiness, visual fluctuation, and contact lens comfort",
];

const keratographMeasurements = [
  {
    head: "Infrared meibography",
    para: "direct visualisation of gland structure, dropout patterns, and atrophy in both upper and lower lids",
  },
  {
    head: "Non-invasive tear breakup time (NIKBUT)",
    para: "objective tear film stability measurement without dye",
  },
  {
    head: "Tear meniscus height",
    para: "distinguishing evaporative from aqueous deficient dry eye",
  },
  {
    head: "Lipid layer assessment",
    para: "evaluating the oily outer tear film layer that IPL and RF are designed to restore",
  },
  {
    head: "Standardised bulbar redness grading",
    para: "objective baseline for tracking inflammation reduction",
  },
];

const firstAppointmentItems = [
  "Comprehensive dry eye assessment including Keratograph 5M meibography and i-PEN osmolarity testing",
  "Lid margin examination and meibomian gland evaluation",
  "Clear explanation of your findings, your dry eye type, and your treatment options",
  "A treatment recommendation — IPL, RF, combination therapy, or an alternative approach — based on objective diagnostic data, not assumptions",
];

// Shared renderers so IPL and RF sections stay visually identical
const HeadParaList = ({ items }) => (
  <>
    {items.map((item) => (
      <div key={item.head} className="mt-4">
        <h3 className="text-xl text-combination-200 font-bold mb-3">
          {item.head}
        </h3>
        <ul className="text-neutral-500 text-base md:text-lg mb-4 list-disc list-outside pl-6 mt-2">
          <li className="ml-4">{item.para}</li>
        </ul>
      </div>
    ))}
  </>
);

const StepList = ({ steps }) => (
  <>
    {steps.map((step) => (
      <div key={step.head} className="mt-4 ml-4">
        <h3 className="text-base text-gray-500 font-bold mb-3">{step.head}</h3>
        <ul className="text-neutral-500 text-base md:text-lg mb-4 list-disc list-outside pl-6 mt-2">
          <li>{step.para}</li>
        </ul>
      </div>
    ))}
  </>
);

const BulletList = ({ items, className = "" }) => (
  <ul
    className={`text-neutral-500 text-base md:text-lg list-disc list-outside pl-6 ${className}`}
  >
    {items.map((item) => (
      <li key={item} className="ml-4">
        {item}
      </li>
    ))}
  </ul>
);

const BookButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    {clinics.map((clinic) => (
      <Link key={clinic.name} href={clinic.bookHref} className={bookButtonClass}>
        Book an IPL/RF Consultation — {clinic.shortName}
      </Link>
    ))}
  </div>
);

const page = () => {
  return (
    <main className="pt-[110px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SubHeader text="InMode IPL and RF Therapy for Dry Eye — Toronto's Yorkville & The Beaches Clinics" />

      <div className="max-w-[1200px] mx-auto my-8 md:my-16 px-4 md:px-0">
        {/* Intro */}
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          The majority of chronic dry eye is driven by Meibomian Gland
          Dysfunction, a structural problem with the oil-producing glands in
          your eyelids that no amount of lubricating drops can fix. InMode IPL
          and RF therapy are in-office treatments that address MGD directly:
          targeting the inflammation, heat-treating the glands, and restoring
          meibum flow.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          At 360 Eyecare, we offer both InMode IPL and InMode RF therapy at our{" "}
          <Link href="/toronto-rosedale-optometrist" className={linkClass}>
            Yorkville clinic
          </Link>{" "}
          on Bloor Street West and our{" "}
          <Link href="/toronto-beaches-optometrist" className={linkClass}>
            Beaches clinic
          </Link>{" "}
          on Queen Street East as standalone treatments or in combination,
          depending on what your diagnostic assessment reveals. Both treatments
          are non-invasive, require no recovery time, and are delivered as part
          of a managed care program that includes pre-treatment Keratograph 5M
          imaging and i-PEN osmolarity testing so we have objective data to
          track your response across the treatment course.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          If you&apos;ve been told you have MGD, if your dry eye hasn&apos;t
          responded to conventional management, or if you have rosacea
          alongside persistent dry eye symptoms, IPL or RF (or a combination of
          both) may be the right next step.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-base md:text-lg mb-6">
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
        <BookButtons />

        {/* ---------------- IPL ---------------- */}
        <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4 mt-10">
          What is IPL and How Does It Work for Dry Eye?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <Image
          src={LummericaImage}
          alt="InMode Lumecca IPL logo"
          width={150}
          height={48}
          className="w-[150px] h-[48px] object-contain"
        />
        <p className="text-neutral-500 text-base md:text-lg mb-4 mt-4">
          Intense Pulsed Light therapy was originally developed for
          dermatological conditions such as rosacea, hyperpigmentation, and
          vascular skin lesions, before clinicians noticed that patients
          receiving facial IPL were also reporting significant improvement in
          their dry eye symptoms. That observation prompted dedicated research
          into IPL as a targeted dry eye treatment, and the evidence base has
          grown substantially since.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          At 360 Eyecare, we use the InMode Lumecca IPL system, one of the most
          clinically validated and highest-intensity IPL platforms available.
          It delivers controlled pulses of broad-spectrum light to the
          periocular skin, targeting three distinct drivers of MGD-related dry
          eye simultaneously:
        </p>
        <HeadParaList items={iplMechanisms} />

        <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4 mt-6">
          Step-by-Step: What Happens During an IPL Session
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <StepList steps={iplSteps} />

        <h3 className="text-combination-200 text-3xl md:text-[24px]  my-6 font-bold ">
          How it works
        </h3>
        <div className="w-full aspect-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/E44vqABjBOo?si=2Lix09cwpKFzNSxF"
            title="InMode IPL treatment video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="md:w-[1200px] md:h-[518px] w-full h-[280px]"
          ></iframe>
        </div>

        <h2 className="text-combination-200 text-3xl md:text-[24px]  my-6 font-bold ">
          Benefits of InMode IPL Therapy
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <HeadParaList items={iplBenefits} />

        <h2 className="text-combination-200 text-3xl md:text-[30px]  mt-6 mb-4 font-bold ">
          Who Is IPL Most Effective For?
        </h2>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          IPL produces the strongest results in patients with:
        </p>
        <BulletList items={iplCandidates} className="mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          IPL is not appropriate for patients with Fitzpatrick skin types V or
          VI, heavily tanned skin, active skin conditions in the treatment area,
          pregnancy, immunosuppressive conditions, a history of diseases
          stimulated by light (epilepsy, lupus, urticaria), or current use of
          photosensitising medications including Isotretinoin (Accutane) within
          six months of treatment. The full contraindications list follows
          below.
        </p>

        <h3 className="text-combination-200 text-3xl md:text-[22px] font-bold mb-4 mt-6">
          IPL Before and After Treatment
        </h3>
        <Image
          src={LumeccaBeforeAfterImage}
          alt="InMode Lumecca IPL before and after treatment"
          width={1200}
          height={518}
          className="md:w-[1200px] md:h-[518px] w-full h-auto object-contain"
        />

        <h2 className="text-combination-200 text-3xl md:text-[30px]  mt-6 mb-4 font-bold ">
          IPL Contraindications
        </h2>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          IPL is contraindicated for patients with any of the following:
        </p>
        <BulletList items={iplContraindications} className="mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          If you are uncertain whether any of these apply to you, your
          optometrist will review your full health history at the consultation
          appointment before any treatment is scheduled.
        </p>

        <h2 className="text-combination-200 text-3xl md:text-[30px] font-bold mb-4 mt-6">
          Expected Outcomes
        </h2>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Patients completing a full four-session InMode IPL course at 360
          Eyecare&apos;s Yorkville or Beaches clinic can expect:
        </p>
        <BulletList items={iplOutcomes} className="mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Individual results vary depending on the severity of MGD, the degree
          of gland atrophy present at baseline, and adherence to post-treatment
          sun protection protocols. Patients with rosacea-associated dry eye
          typically show the most pronounced objective improvement. Most
          patients report noticeable symptomatic improvement after sessions two
          and three, with the full benefit of the course apparent four to six
          weeks after the fourth session as the inflammatory response continues
          to resolve.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Results are not permanent (MGD is a chronic condition) but are
          durable, typically lasting six to twelve months before a maintenance
          session is beneficial. Objective Keratograph and i-PEN measurements at
          follow-up appointments give both you and your optometrist a precise
          picture of where things stand and when maintenance is appropriate.
        </p>

        {/* ---------------- RF ---------------- */}
        <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4 mt-6">
          What is RF and How Does It Work for Dry Eye?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <Image
          src={FormaImage}
          alt="InMode Forma-I RF logo"
          width={150}
          height={48}
          className="w-[150px] h-[48px] object-contain"
        />
        <p className="text-neutral-500 text-base md:text-lg mb-4 mt-4">
          Radiofrequency therapy has been used in aesthetic medicine for over
          two decades — primarily for skin tightening and collagen stimulation —
          before its application to dry eye treatment became established. The
          mechanism is directly relevant to eyelid health and meibomian gland
          function: RF energy heats tissue, and the meibomian glands and
          periocular structures respond to that heat in ways that address the
          structural and thermal dimensions of MGD that IPL alone doesn&apos;t
          fully cover.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          At 360 Eyecare, we use the InMode Forma-I RF system at both our
          Yorkville and Beaches clinics. Where IPL works primarily through light
          energy absorbed by pigmented blood vessels, RF delivers
          electromagnetic energy that heats tissue uniformly through resistive
          heating regardless of skin pigmentation. This makes RF effective
          across all Fitzpatrick skin types and appropriate for patients who are
          not suitable IPL candidates due to skin tone.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          RF addresses MGD through two primary mechanisms:
        </p>
        <HeadParaList items={rfMechanisms} />

        <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4 mt-6">
          Step-by-Step: What Happens During an RF Session
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <StepList steps={rfSteps} />

        <h3 className="text-combination-200 text-3xl md:text-[24px]  my-6 font-bold ">
          How it works
        </h3>
        <iframe
          src="https://www.youtube.com/embed/z30SFaNWIuw"
          title="InMode Forma-I RF treatment video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="md:w-[1200px] md:h-[518px] w-full h-[280px]"
        />

        <h2 className="text-combination-200 text-3xl md:text-[30px]  my-6 font-bold ">
          Benefits of InMode RF Therapy
        </h2>
        <ul className="text-neutral-500 text-base md:text-lg list-disc list-outside pl-6 space-y-2">
          {rfBenefits.map((item) => (
            <li key={item.head} className="ml-4">
              <span className="font-bold">{item.head}</span> {item.para}
            </li>
          ))}
        </ul>

        <h2 className="text-combination-200 text-3xl md:text-[30px]  mt-6 mb-4 font-bold ">
          Who Is RF Most Effective For?
        </h2>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          RF produces the strongest results in patients with:
        </p>
        <BulletList items={rfCandidates} />

        <h3 className="text-combination-200 text-3xl md:text-[24px]  my-6 font-bold ">
          Before & After of Forma-I RF Treatment
        </h3>
        <Image
          src={FormaBeforeAfterImage}
          alt="InMode Forma-I RF before and after treatment"
          width={1200}
          height={518}
          className="md:w-[1200px] md:h-[518px] w-full h-auto object-contain"
        />

        <h2 className="text-combination-200 text-3xl md:text-[30px]  my-6 font-bold ">
          RF Contraindications
        </h2>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          RF therapy with InMode Forma-I is contraindicated for patients with:
        </p>
        <BulletList items={rfContraindications} className="mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Unlike IPL, RF has no skin tone contraindications and no
          photosensitivity-related restrictions. If you are uncertain whether
          any of the above apply to you, your optometrist will review your full
          health history at the consultation appointment before any treatment
          is scheduled.
        </p>

        <h2 className="text-combination-200 text-3xl md:text-[30px] font-bold mb-4 mt-6">
          Expected Outcomes
        </h2>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Patients completing a full InMode RF course at 360 Eyecare&apos;s
          Yorkville or Beaches clinic can expect:
        </p>
        <BulletList items={rfOutcomes} className="mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          RF improvement is characteristically progressive; the collagen
          remodelling component means results continue to develop for four to
          six weeks after each session and for up to three months after the
          final treatment in the course. Patients should not assess the full
          outcome of their RF course immediately after the last session; the
          most significant structural improvements often manifest in the weeks
          that follow.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Individual results vary depending on the severity and duration of
          MGD, the degree of gland atrophy at baseline, and whether RF is
          delivered as a standalone treatment or in combination with IPL.
          Objective Keratograph and i-PEN measurements at follow-up appointments
          allow your optometrist to assess response accurately and adjust the
          maintenance schedule accordingly.
        </p>

        {/* ---------------- Why 360 Eyecare ---------------- */}
        <h2 className="text-combination-200 text-3xl md:text-[30px]  my-6 font-bold ">
          Why Choose 360 Eyecare for IPL and RF Dry Eye Treatment
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          There are several Toronto clinics now offering IPL and RF for dry eye.
          The meaningful differences between them are in the diagnostic rigour
          before treatment, the technology used to deliver and track it, and
          the clinical experience managing the full spectrum of dry eye disease
          rather than offering procedures in isolation.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Here&apos;s what specifically distinguishes 360 Eyecare&apos;s IPL and
          RF program at our Yorkville and Beaches clinics:
        </p>

        <h3 className="text-combination-200 text-2xl font-bold my-4">
          Diagnosis Before Treatment
        </h3>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          At 360 Eyecare, IPL and RF are never offered as standalone procedures
          disconnected from a proper diagnostic workup. Every patient begins
          with a{" "}
          <Link href="/dry-eye-syndrome-keratograph-i-pen" className={linkClass}>
            comprehensive dry eye assessment
          </Link>{" "}
          that includes Keratograph 5M meibography, i-PEN osmolarity testing,
          tear film analysis, and lid margin examination, establishing objective
          baseline data before any treatment decision is made.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          This matters for two reasons. First, it ensures that IPL and RF are
          actually appropriate for your presentation; not every chronic dry eye
          case is driven by MGD, and treating the wrong mechanism produces poor
          results regardless of how good the technology is. Second, it gives us
          measurable data to compare against at follow-up appointments, so that
          treatment response is assessed objectively rather than relying solely
          on how you feel between sessions.
        </p>

        <h3 className="text-combination-200 text-2xl font-bold my-4">
          The OCULUS Keratograph 5M
        </h3>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          The Keratograph 5M is the most advanced dry eye imaging system
          available in community optometry and one that most Toronto clinics
          offering IPL and RF don&apos;t carry. At 360 Eyecare, it&apos;s the
          centrepiece of our{" "}
          <Link href="/advanced-diagnostics-eye-exams" className={linkClass}>
            dry eye diagnostic
          </Link>{" "}
          and monitoring program.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Before IPL or RF treatment, the Keratograph gives us:
        </p>
        <ul className="text-neutral-500 text-base md:text-lg list-disc list-outside pl-6 mb-4">
          {keratographMeasurements.map((item) => (
            <li key={item.head} className="ml-4">
              <span className="font-bold">{item.head}</span> — {item.para}
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          After each treatment course and at maintenance appointments, the same
          measurements are repeated, giving both you and your optometrist a
          precise, documented picture of what has changed structurally, not
          just symptomatically.
        </p>

        <h3 className="text-combination-200 text-2xl font-bold my-4">
          The i-PEN Osmolarity System
        </h3>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Tear osmolarity is the most sensitive and specific single biomarker
          for dry eye disease currently available, and the i-PEN measures it in
          seconds with a painless touch to the lower lid margin. At 360 Eyecare,
          osmolarity testing is standard at baseline and at follow-up
          appointments throughout the IPL and RF treatment course.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Osmolarity values that are elevated at baseline and normalise across
          the treatment course are one of the clearest objective indicators
          that IPL and RF are working independent of symptom reports, which can
          fluctuate. For patients who are uncertain whether their symptoms
          represent genuine improvement or natural variation, the i-PEN data
          provides an unambiguous answer.
        </p>

        <h3 className="text-combination-200 text-2xl font-bold my-4">
          InMode Technology — Lumecca IPL and Forma-I RF
        </h3>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Not all IPL and RF systems are equivalent. At 360 Eyecare, we use the
          InMode platform specifically (Lumecca for IPL and Forma-I for RF)
          because of its clinical validation record, its precise energy
          delivery parameters, and its established safety profile across
          diverse skin tones.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          The Lumecca IPL system delivers one of the highest available
          intensities of pulsed light of any IPL device on the market, which
          translates to more effective telangiectasia elimination and stronger
          thermal gland stimulation per session. The Forma-I RF system delivers
          controlled, uniform radiofrequency energy to periocular tissue with
          real-time temperature monitoring, ensuring consistent heat delivery to
          the target tissue without exceeding safe parameters.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Both systems are used specifically for ophthalmic dry eye treatment at
          360 Eyecare, not repurposed from an aesthetic skin clinic, but
          operated by optometrists with dedicated training in dry eye
          management and the clinical context to interpret what they find
          before, during, and after treatment.
        </p>

        <h3 className="text-combination-200 text-2xl font-bold my-4">
          Full-Spectrum Dry Eye Care
        </h3>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          IPL and RF are highly effective for the right patients, but
          they&apos;re not the right treatment for every presentation of dry
          eye, and they work best as part of a managed care approach rather
          than as isolated procedures. At 360 Eyecare, our{" "}
          <Link href="/dry-eye-syndrome-keratograph-i-pen" className={linkClass}>
            dry eye program
          </Link>{" "}
          covers the full treatment spectrum: from first-line lifestyle
          modifications and prescription medications through in-office
          procedures including LipiFlow, meibomian gland probing, punctal plug
          insertion, and scleral lens fitting, as well as IPL and RF.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          That means if IPL or RF isn&apos;t the right fit for your presentation
          or if you need additional interventions alongside them we can provide
          that care within the same clinic rather than referring you elsewhere.
          And if you&apos;re coming to us having already tried other approaches
          without adequate relief, we have the diagnostic tools to identify
          exactly why and the treatment range to address it.
        </p>

        <h3 className="text-combination-200 text-2xl font-bold my-4">
          Two Convenient Toronto Locations
        </h3>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Both 360 Eyecare clinics are fully equipped for IPL and RF treatment,
          with the same InMode technology, the same Keratograph 5M and i-PEN
          diagnostic systems, and the same standard of care at each location.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          <Link
            href="/toronto-rosedale-optometrist"
            className={`${linkClass} font-bold`}
          >
            360 Eyecare Yorkville
          </Link>{" "}
          — on Bloor Street West inside the Manulife Centre, steps from Bay
          Station. Convenient for patients from Yorkville, The Annex, the Bay
          Street corridor, Church-Wellesley Village, and the University of
          Toronto campus. Evening and Saturday appointments available.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          <Link
            href="/toronto-beaches-optometrist"
            className={`${linkClass} font-bold`}
          >
            360 Eyecare Beaches
          </Link>{" "}
          — on Queen Street East, accessible via the 501 streetcar and Woodbine
          Station. Serving The Beaches, Leslieville, Upper Beaches, East
          Danforth, and surrounding east end communities. Evening and Saturday
          appointments available.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          New patients are welcome at both locations. No GP referral required.
        </p>

        {/* ---------------- Booking ---------------- */}
        <h2 className="text-combination-200 text-3xl md:text-[30px] font-extrabold mt-6 mb-4">
          Book Your IPL or RF Dry Eye Consultation in Toronto
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          IPL and RF therapy produce their best results when they&apos;re part
          of a properly managed dry eye program starting with an accurate
          diagnosis, delivered with the right technology, and tracked
          objectively across the treatment course. That&apos;s the standard at
          both 360 Eyecare locations.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          If you&apos;ve been managing dry eye without lasting relief, if
          you&apos;ve been told you have MGD, or if you have rosacea alongside
          persistent dry eye symptoms, the right starting point is a
          comprehensive dry eye assessment. Book at whichever clinic is most
          convenient for you, and we&apos;ll take it from there.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          You don&apos;t need a referral. You don&apos;t need a recent
          optometry history. New patients are welcome at both locations.
        </p>
        <h3 className="text-combination-200 text-xl font-bold mb-3">
          What to expect at your first appointment:
        </h3>
        <BulletList items={firstAppointmentItems} className="mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {clinics.map((clinic) => (
            <div
              key={clinic.name}
              className="bg-gray-50 rounded-lg p-6 flex flex-col gap-3"
            >
              <h3 className="text-combination-200 text-lg sm:text-xl font-bold">
                <Link
                  href={clinic.pageHref}
                  className="hover:text-combination-100"
                >
                  {clinic.name}
                </Link>
              </h3>
              <address className="not-italic text-neutral-500 text-sm sm:text-base leading-relaxed">
                {clinic.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a
                  href={`tel:+1-${clinic.phone}`}
                  className={`${linkClass} block`}
                >
                  📞 {clinic.phone}
                </a>
                <a
                  href={`mailto:${clinic.email}`}
                  className={`${linkClass} block`}
                >
                  ✉ {clinic.email}
                </a>
              </address>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                {clinic.description}
              </p>
              <div className="mt-auto pt-2">
                <Link
                  href={clinic.bookHref}
                  className={`${bookButtonClass} inline-block`}
                >
                  Book an IPL/RF Consultation — {clinic.shortName}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left content */}
              <div className="md:w-3/5 space-y-6 w-full">
                <h2 className="text-3xl md:text-3xl font-extrabold text-combination-200">
                  Seek Relief from Dry Eyes Today
                </h2>

                <p className="text-neutral-500 text-base md:text-lg">
                  Send us a message and our team will help you book a
                  comprehensive dry eye assessment and IPL/RF consultation at
                  the clinic most convenient for you.
                </p>
                <div className="w-[60%]">
                  <div className="w-[280px] md:w-[550px]">
                    <FormSection css={{}} />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <Image
                  src={Optometry6}
                  alt="Dry eye examination equipment at 360 Eyecare"
                  width={585}
                  height={536}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DryFaqs faqData={iplRfFaqdata} title="IPL & RF Dry Eye Treatment FAQs" />
    </main>
  );
};

export default page;
