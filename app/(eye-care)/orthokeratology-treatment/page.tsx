import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import FormSection from "../../../components/FormSection";
import {
  OrthoImage,
  OrthoImage2,
  OrthoImage3,
} from "../../../constants/Images";
import Image from "next/image";
import Banner2 from "../../../components/Banner2";
import BenefitsOrtho from "../../../components/BenefitsOrtho";
import ClinicBookingCards from "../../../components/ClinicBookingCards";
import DryFaqs from "../../../components/DryFaqs";
import { dryEyeClinics, orthoFaqdata } from "@/constants/Constants";

const pageTitle =
  "Orthokeratology (Ortho-K) Toronto | Yorkville & The Beaches | 360 Eyecare";
const pageDescription =
  "Overnight Ortho-K lenses for clear daytime vision without glasses or surgery, and proven myopia control for children. Fitted at 360 Eyecare's Yorkville and Beaches clinics in Toronto.";
const pageUrl = "https://www.360eyecare.ca/orthokeratology-treatment/";

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

// FAQPage structured data, generated from the same array the accordion renders
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: orthoFaqdata.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const linkClass = "text-combination-200 hover:text-combination-100";
const h2Class = "text-combination-200 text-2xl sm:text-[30px] font-[900] mb-2";
const h3Class = "text-combination-200 text-xl sm:text-2xl font-[900] mb-2 mt-6";
const paraClass = "text-neutral-500 text-base mb-2";
const listClass =
  "list-disc list-outside pl-6 text-neutral-500 text-base mb-4 space-y-2";
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md";

const BookButtons = ({ label = "Book an Ortho-K Consultation" }) => (
  <div className="flex flex-col gap-3">
    {dryEyeClinics.map((clinic) => (
      <Link
        key={clinic.name}
        href={clinic.bookHref}
        className={bookButtonClass}
      >
        {label} — {clinic.shortName}
      </Link>
    ))}
  </div>
);

// Bullet list where each item has a bold lead-in followed by its description
const HeadParaList = ({ items, separator = " — " }) => (
  <ul className={listClass}>
    {items.map((item) => (
      // head alone isn't unique (e.g. two "Patients" items), so key on both
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

const reshapingStages = [
  {
    head: "Without Ortho-K:",
    para: "The myopic cornea focuses light in front of the retina — distance vision is blurry",
  },
  {
    head: "With Ortho-K lens fitted:",
    para: "The reverse-geometry lens applies controlled pressure to the central cornea during sleep",
  },
  {
    head: "After overnight adjustment:",
    para: "The flattened central cornea now focuses light directly on the retina",
  },
  {
    head: "Daytime lens removed:",
    para: "Clear unaided vision persists throughout the day as the reshaped cornea holds its new profile",
  },
];

const assessmentItems = [
  {
    head: "Corneal topography",
    para: "a detailed digital map of the corneal surface curvature, measuring thousands of points across the cornea to produce a precise three-dimensional profile. This map is the primary data input for custom lens design and is the most important single measurement in the fitting process",
  },
  {
    head: "Refractive error measurement",
    para: "cycloplegic refraction to determine the full prescription with accommodation relaxed, giving the most accurate baseline for lens parameter calculation",
  },
  {
    head: "Axial length measurement",
    para: "particularly important for children, establishing the baseline structural measurement against which myopia control effectiveness will be tracked",
  },
  {
    head: "Slit lamp examination",
    para: "assessing corneal health, tear film quality, and eyelid health to confirm the ocular surface is suitable for overnight lens wear",
  },
  {
    head: "Prescription assessment",
    para: "confirming the refractive error falls within the appropriate range for Ortho-K correction",
  },
];

const fittingSteps = [
  {
    head: "Step 2: Lens dispensing and training",
    para: "When the custom lenses arrive, your optometrist verifies the lens parameters against the ordered specifications and checks the fit on the eye before dispensing. You receive thorough training in lens insertion, removal, and care, including cleaning protocols, storage procedures, and what to do if a lens is lost or damaged. You won't take the lenses home until both you and your optometrist are confident with the handling process.",
  },
  {
    head: "Step 3: First overnight wear and next-day follow-up",
    para: "The first night of Ortho-K wear is followed by a clinic visit the next morning, ideally within one to two hours of lens removal, while the corneal reshape is at its most pronounced. Your optometrist assesses the corneal topography post-wear to evaluate the reshaping response, checks visual acuity, and examines the corneal surface for any early signs of mechanical interaction. Lens parameters are adjusted if needed at this stage.",
  },
  {
    head: "Step 4: Early follow-up visits",
    para: "Further follow-up visits are scheduled at two weeks and one month following the initial overnight wear. At each visit, corneal topography, visual acuity, and refraction are measured to confirm the reshape is progressing correctly and stabilising. Lens adjustments are made if the topography map shows the reshaping pattern is off-centre or insufficient. Most patients reach their full target correction within one to two weeks of consistent nightly wear.",
  },
  {
    head: "Step 5: Ongoing monitoring",
    para: "Once the fit is optimised and vision is stable, follow-up appointments are scheduled every three to six months. At each monitoring visit, your optometrist measures axial length alongside refraction and corneal topography, assesses lens condition, and evaluates ocular surface health. Lens replacement is typically recommended every one to two years depending on wear and deposit accumulation.",
  },
];

// `head` renders bold via HeadParaList; `para` continues the same sentence
const lifestyleFit = [
  {
    head: "Active children and teenagers",
    para: "who play contact sports, swim competitively, or find glasses impractical during physical activity",
  },
  {
    head: "Adults who want freedom",
    para: "from daytime eyewear without committing to refractive surgery (Ortho-K is fully reversible and produces no permanent corneal change)",
  },
  {
    head: "Patients who find daytime contact lenses uncomfortable",
    para: "due to dry eye, dusty or screen-heavy work environments, or long wearing hours",
  },
  {
    head: "Patients not yet eligible for laser eye surgery",
    para: "due to age or prescription instability, for whom Ortho-K provides a surgical-quality vision experience in the interim",
  },
  {
    head: "Parents of myopic children",
    para: "seeking an effective, Health Canada-approved myopia control option that doubles as a vision correction solution",
  },
];

const notSuitable = [
  "Patients with active corneal infections or significant corneal disease",
  "Patients with severe dry eye that is not adequately managed",
  "Patients whose prescriptions significantly exceed the correctable range for their corneal anatomy",
  "Patients who are unwilling or unable to commit to the nightly lens wear and care routine",
  "Patients with certain systemic conditions affecting wound healing or immune response",
];

const myopiaControlEvidence = [
  "A 2019 meta-analysis of randomised controlled trials and prospective cohort studies confirmed that Ortho-K produces statistically significant reduction in axial elongation compared to single-vision spectacle or contact lens correction, with a weighted mean reduction of approximately 45 percent",
  "The ROMIO (Randomized Orthokeratology Study in Myopia) trial demonstrated significant slowing of axial elongation in Ortho-K wearers versus single-vision contact lens wearers over a two-year period in Hong Kong children",
  "Multiple studies comparing Ortho-K to MiSight and other myopia control modalities show broadly comparable axial length control efficacy (in the 40 to 60 percent reduction range) making Ortho-K one of the most effective individual myopia control options available",
  "Combination therapy studies demonstrate enhanced axial length control beyond either modality alone, particularly in children with rapidly progressing myopia",
];

const monitoringProgram = [
  {
    head: "Baseline assessment",
    para: "corneal topography, cycloplegic refraction, and axial length measurement establish the starting point before lenses are fitted",
  },
  {
    head: "First-night follow-up",
    para: "clinic visit the morning after first wear to assess corneal reshaping response",
  },
  {
    head: "Two-week and one-month follow-ups",
    para: "confirming stable correction and optimising lens fit",
  },
  {
    head: "Every three to six months thereafter",
    para: "axial length, refraction, topography, and ocular health assessment at each visit, with results discussed and treatment adjusted if progression is not adequately controlled",
  },
  {
    head: "Combination therapy assessment",
    para: "children whose axial length continues to progress despite Ortho-K wear may be candidates for low-dose atropine as an adjunct, which clinical evidence suggests enhances overall myopia control efficacy",
  },
];

const lensCare = [
  {
    head: "Daily cleaning routine",
    para: "Each morning after lens removal, lenses are rinsed with sterile contact lens solution; never tap water, which contains microorganisms that can cause serious corneal infections. A multipurpose or hydrogen peroxide-based cleaning solution is used to clean and disinfect the lenses before storing them in fresh solution in a clean lens case. The lens case itself should be rinsed with solution (not water), left to air dry face-down on a clean tissue, and replaced every three months.",
  },
  {
    head: "Why tap water is a serious risk",
    para: "Tap water contact with contact lenses is the primary risk factor for Acanthamoeba keratitis, a severe corneal infection caused by a waterborne organism that is resistant to standard disinfection. Patients should never rinse lenses, lens cases, or their hands (before lens handling) with tap water. This applies equally to swimming. Ortho-K lenses should never be worn in water, including showers, pools, lakes, or hot tubs.",
  },
  {
    head: "Replacement schedule",
    para: "Ortho-K lenses are rigid gas-permeable lenses designed for durability but not indefinite use. Replacement is typically recommended every one to two years depending on wear patterns, deposit accumulation, and any changes in corneal topography that require updated lens parameters. Your optometrist will assess lens condition at every monitoring visit.",
  },
  {
    head: "Handling care",
    para: "Rigid lenses require careful handling to avoid chipping or cracking. Insertion and removal techniques are covered thoroughly at the dispensing appointment. A suction cup remover tool is typically provided for patients who find finger removal difficult; your optometrist will show you how to use it.",
  },
];

const page = () => {
  return (
    <main className="pt-[110px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SubHeader text="Orthokeratology (Ortho-K) in Toronto — Yorkville & The Beaches" />

      {/* Introduction */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:mr-10 mb-6 sm:mb-0">
          <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] leading-[1.3]">
            Overnight Vision Correction and Myopia Control
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className={paraClass}>
            Orthokeratology, commonly known as Ortho-K, is a non-surgical vision
            correction and myopia control treatment that uses custom-designed
            gas-permeable contact lenses worn overnight. The lenses gently
            reshape the cornea during sleep. By morning, they&apos;re removed,
            and the reshaped cornea provides clear unaided vision throughout the
            day without glasses or daytime lenses, or surgery.
          </p>
          <p className={paraClass}>
            At 360 Eyecare, we fit Ortho-K lenses at both our{" "}
            <Link href="/toronto-rosedale-optometrist" className={linkClass}>
              Yorkville clinic
            </Link>{" "}
            on Bloor Street West and our{" "}
            <Link href="/toronto-beaches-optometrist" className={linkClass}>
              Beaches clinic
            </Link>{" "}
            on Queen Street East. Ortho-K is approved by Health Canada and has a
            well-established safety and efficacy record spanning over two
            decades. Beyond vision correction, it&apos;s one of the most
            effective{" "}
            <Link href="/myopia-control-clinic/" className={linkClass}>
              myopia control
            </Link>{" "}
            treatments available for children. Clinical studies consistently
            show a{" "}
            <Link
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10432494/"
              className={linkClass}
            >
              40 to 60 percent reduction in axial elongation
            </Link>{" "}
            compared to standard single-vision correction.
          </p>
          <p className={paraClass}>
            If you&apos;re tired of glasses and not ready for surgery, or if
            your child&apos;s myopia is progressing and you want an effective,
            reversible intervention, Ortho-K may be the right fit.
          </p>
        </div>
        <div className="w-full sm:w-[585px] flex flex-col gap-6 mt-4 sm:mt-0">
          <div className="flex flex-row items-end">
            <div className="hidden sm:block w-[30px] h-[290px] bg-gray-50" />
            <Image
              src={OrthoImage3}
              alt="Orthokeratology lens reshaping the cornea before, during and after overnight wear"
              width={585}
              height={290}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-4 sm:pl-[30px]">
            {/* whitespace-nowrap keeps each number on one line; flex-wrap
                drops the second one below only if both can't fit */}
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

      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0">
        {/* What is Ortho-K */}
        <h2 className={h2Class}>What is Orthokeratology?</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          Orthokeratology (Ortho-K), CRT (Corneal Reshaping Therapy), or
          overnight vision correction is a non-surgical procedure that uses
          specially designed rigid gas-permeable contact lenses to temporarily
          reshape the cornea while you sleep. The cornea is the clear front
          surface of the eye through which light passes before being focused by
          the lens onto the retina. In myopic eyes, the cornea is typically too
          curved or the eyeball too long, causing light to focus in front of the
          retina rather than directly on it, producing clear near vision but
          blurry distance vision.
        </p>
        <p className={paraClass}>
          Ortho-K lenses work by applying gentle, controlled pressure to the
          corneal epithelium during overnight wear. This pressure temporarily
          flattens the central cornea into a shape that focuses light correctly
          on the retina. The change is reversible: the corneal epithelium is
          highly regenerative, and the cornea gradually returns to its original
          curvature over one to two days if lens wear is discontinued.
        </p>
        <p className={paraClass}>
          What makes Ortho-K distinct from standard contact lens correction is
          that the vision improvement it produces persists after the lenses are
          removed. A patient who inserts Ortho-K lenses at bedtime and removes
          them upon waking can function with clear unaided vision throughout the
          day.
        </p>
        <p className={`${paraClass} mb-8`}>
          Ortho-K is approved by Health Canada for myopia correction and myopia
          control. It is completely reversible. If treatment is discontinued,
          the cornea returns to its pre-treatment shape and the original
          prescription is restored, with no permanent change to corneal
          structure.
        </p>

        {/* How Ortho-K Works */}
        <h2 className={h2Class}>How Ortho-K Works</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          Ortho-K lenses are worn overnight, typically for seven to eight hours
          of sleep. During that time, the lens exerts controlled hydraulic
          pressure on the tear film and corneal surface. This pressure
          redistributes the corneal epithelial cells, flattening the central
          zone of the cornea and creating a steeper mid-peripheral ring. The
          result is a corneal profile that bends incoming light to focus
          precisely on the retina, producing clear distance vision when the
          lenses are removed.
        </p>
        <p className={paraClass}>
          The effect is gradual over the first few nights of wear and typically
          reaches its full correction within one to two weeks of consistent
          nightly use. Most patients notice significant vision improvement from
          the first morning, though full, stable correction takes several nights
          as the corneal reshape reaches its designed endpoint.
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
          <div className="flex flex-col w-full lg:w-[70%]">
            <h3 className={h3Class}>The Myopia Control Mechanism</h3>
            <p className={paraClass}>
              Apart from correcting vision, Ortho-K produces a peripheral
              defocus pattern that inhibits axial elongation. In a myopic eye
              corrected with standard single-vision glasses or contact lenses,
              the peripheral retina receives a hyperopic defocus signal which
              research suggests stimulates the eye to continue elongating. The
              reshaped cornea produced by Ortho-K reverses this: peripheral
              light is focused in front of the retinal plane rather than behind
              it, removing the elongation stimulus.
            </p>
            <p className={paraClass}>
              This peripheral defocus mechanism is why Ortho-K slows myopia
              progression. It addresses the same retinal signalling pathway that
              drives axial growth, not just the refractive error at the centre
              of vision. Clinical trials consistently demonstrate a 40 to 60
              percent reduction in axial elongation in Ortho-K wearers compared
              to children wearing standard single-vision correction over the
              same period.
            </p>
          </div>
          <div className="w-full lg:w-[380px] h-auto lg:h-[280px] mt-4 lg:mt-6">
            <Image
              src={OrthoImage2}
              alt="Cornea flattened by an Ortho-K lens creating myopic defocus on the peripheral retina"
              width={380}
              height={280}
              className="w-full h-auto"
            />
          </div>
        </div>

        <h3 className={h3Class}>The Before, During, and After</h3>
        <HeadParaList items={reshapingStages} separator=" " />
        <div className="w-full max-w-3xl mx-auto mb-8">
          <Image
            src={OrthoImage}
            alt="Corneal reshaping with Ortho-K: myopic eye, lens fitted, after overnight adjustment and daytime lens removed"
            width={1200}
            height={628}
            className="w-full h-auto"
          />
        </div>

        {/* Fitting Process */}
        <h2 className={h2Class}>The Ortho-K Fitting Process</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          Ortho-K lenses are custom-designed for each patient&apos;s corneal
          geometry. The fitting process is therefore more involved than a
          standard contact lens fitting, requiring detailed corneal measurements
          and a structured sequence of follow-up visits before the fit is fully
          optimised.
        </p>
        <h3 className={h3Class}>
          Step 1: Comprehensive assessment and corneal topography
        </h3>
        <p className={paraClass}>
          Before any lenses are designed or ordered, your optometrist conducts a
          thorough assessment of your suitability for Ortho-K. This includes:
        </p>
        <HeadParaList items={assessmentItems} />
        <p className={paraClass}>
          This data is sent to a specialist laboratory where the custom Ortho-K
          lenses are manufactured to the precise parameters required for your
          corneal profile and prescription.
        </p>
        {fittingSteps.map((step) => (
          <div key={step.head}>
            <h3 className={h3Class}>{step.head}</h3>
            <p className={paraClass}>{step.para}</p>
          </div>
        ))}
      </div>

      <Banner2
        title="Book an Eye Exam"
        description="For exceptional eye care, schedule your eye exam at our Beaches and Yorkville, Toronto locations today!"
        rosedale={true}
        ctaText="Book an Eye Exam"
        ctaLink="https://360rosedale.mypatientsportal.com/select-location"
      />

      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0">
        {/* Candidacy */}
        <h2 className={h2Class}>Am I a Candidate for Ortho-K?</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          Ortho-K is appropriate for a wide range of patients but not everyone.
          Candidacy depends on prescription, corneal anatomy, age, and
          lifestyle. Here&apos;s what your optometrist will assess:
        </p>

        <h3 className={h3Class}>Prescription Range</h3>
        <p className={paraClass}>
          Ortho-K is most effective for myopia up to approximately -5.00D to
          -6.00D, with some lens designs accommodating up to -8.00D depending on
          corneal anatomy. Astigmatism up to approximately -1.75D can typically
          be managed simultaneously with toric Ortho-K lens designs, though
          higher levels of astigmatism may limit achievable correction. Mild
          hyperopia (farsightedness) can also be addressed with reverse-geometry
          Ortho-K designs, though myopia correction is the primary and most
          established application.
        </p>
        <p className={paraClass}>
          Patients outside the optimal prescription range may achieve partial
          correction, enough to function comfortably without glasses or daytime
          lenses for most daily activities, but should discuss realistic
          expectations with their optometrist before proceeding.
        </p>

        <h3 className={h3Class}>Age</h3>
        <p className={paraClass}>
          Ortho-K has no upper age limit for adults seeking vision correction or
          convenience benefits. For children in myopia control programs, the
          typical starting age is eight to ten years. Some children adapt
          successfully from age seven with strong parental involvement in the
          daily routine. There is no maximum age for Ortho-K wear provided
          corneal health is adequate.
        </p>

        <h3 className={h3Class}>Corneal Health and Anatomy</h3>
        <p className={paraClass}>
          A healthy corneal surface is essential for safe overnight lens wear.
          Active corneal infections, significant{" "}
          <Link
            href="/dry-eye-syndrome-keratograph-i-pen"
            className={linkClass}
          >
            dry eye
          </Link>
          , or conditions affecting corneal integrity are contraindications.
          Corneal shape determines whether a custom lens design can achieve the
          desired reshaping profile; corneas that are highly irregular or have
          very steep or very flat curvature may not be suitable candidates.
        </p>

        <h3 className={h3Class}>Lifestyle Fit</h3>
        <p className={paraClass}>Ortho-K is particularly well-suited to:</p>
        <HeadParaList items={lifestyleFit} separator=" " />

        <h3 className={h3Class}>Who Is Not Suitable for Ortho-K?</h3>
        <BulletList items={notSuitable} />

        {/* Clinical Evidence */}
        <h2 className={`${h2Class} mt-8`}>Clinical Evidence for Ortho-K</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          Orthokeratology has one of the most extensive evidence bases of any
          contact lens modality, with peer-reviewed research spanning over two
          decades across diverse populations. The evidence supports both its
          vision correction efficacy and its myopia control effectiveness.
        </p>

        <h3 className={h3Class}>Vision Correction</h3>
        <p className={paraClass}>
          Ortho-K reliably achieves full correction of myopia within the
          treatable range in the majority of patients, with studies showing that
          over 90 percent of patients with myopia up to -4.00D achieve
          uncorrected visual acuity of 6/6 or better following lens
          optimisation. Correction is temporary but consistent and predictable
          for patients whose prescriptions are stable and whose corneal response
          is well-matched to their lens design.
        </p>

        <h3 className={h3Class}>Myopia Control</h3>
        <p className={paraClass}>
          The myopia control evidence for Ortho-K is robust and consistent
          across multiple study designs and populations:
        </p>
        <BulletList items={myopiaControlEvidence} />

        <h3 className={h3Class}>Safety</h3>
        <p className={paraClass}>
          Long-term safety data for Ortho-K is reassuring. The primary risk
          associated with overnight contact lens wear is microbial keratitis
          (corneal infection) which is significantly mitigated by proper lens
          hygiene, care protocol adherence, and regular follow-up monitoring.
          Studies consistently show that the risk of microbial keratitis with
          appropriately managed Ortho-K wear in children is comparable to the
          risk associated with extended wear soft contact lenses, and lower than
          the risk associated with overnight wear of standard soft lenses.
        </p>
        <p className={paraClass}>
          No permanent adverse changes to corneal structure have been documented
          in long-term Ortho-K wearers who follow appropriate care protocols.
        </p>
      </div>

      <BenefitsOrtho />

      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0">
        {/* Myopia Control in Children */}
        <h2 className={h2Class}>Ortho-K for Myopia Control in Children</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          For parents whose children have been diagnosed with myopia, Ortho-K
          offers something that most other{" "}
          <Link href="/myopia-control-clinic/" className={linkClass}>
            myopia control treatments
          </Link>{" "}
          don&apos;t: a single intervention that simultaneously corrects vision
          and slows progression. A child wearing Ortho-K sees clearly all day
          without glasses and benefits from clinically meaningful myopia
          control.
        </p>

        <h3 className={h3Class}>Why Myopia Control Matters</h3>
        <p className={paraClass}>
          Myopia isn&apos;t just a vision problem that glasses solve. The
          eyeball elongation that drives myopia progression is cumulative and
          irreversible. Every additional dioptre of myopia reached in adulthood
          represents more structural change to the eye and proportionally higher
          risk of serious sight-threatening conditions later in life. Studies
          estimate that a child who reaches -6.00D has roughly five to six times
          the risk of retinal detachment compared to a non-myopic adult, and
          significantly elevated risk of glaucoma and myopic macular
          degeneration.
        </p>
        <p className={paraClass}>
          The goal of myopia control isn&apos;t to achieve a perfectly flat
          prescription, it&apos;s to reduce the final prescription your child
          reaches, and by doing so, reduce their lifetime disease burden.
          Ortho-K&apos;s 40 to 60 percent slowing of axial elongation, sustained
          over the active progression years, can meaningfully shift that
          endpoint.
        </p>

        <h3 className={h3Class}>What Parents Can Expect at 360 Eyecare</h3>
        <p className={paraClass}>
          At both our Yorkville and Beaches clinics, children fitted with
          Ortho-K for myopia control are enrolled in a structured monitoring
          program:
        </p>
        <HeadParaList items={monitoringProgram} />
        <p className={`${paraClass} mb-8`}>
          Every child&apos;s response to treatment is individual. Some progress
          very little on Ortho-K alone; others benefit from combination
          approaches. The monitoring program exists specifically to detect when
          the current approach needs adjustment and intervene before significant
          additional elongation occurs.
        </p>

        {/* Lens Care */}
        <h2 className={h2Class}>Ortho-K Lens Care and Maintenance</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          Ortho-K lenses are worn against the corneal surface overnight. Proper
          care and hygiene are essential to maintaining ocular health and lens
          performance. The protocol is straightforward, but it must be followed
          consistently.
        </p>
        {lensCare.map((item) => (
          <div key={item.head}>
            <h3 className={h3Class}>{item.head}</h3>
            <p className={paraClass}>{item.para}</p>
          </div>
        ))}

        {/* Booking */}
        <h2 className={`${h2Class} mt-10`}>
          Book Your Ortho-K Consultation in Toronto
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className={paraClass}>
          If you&apos;re ready to explore Ortho-K for yourself or for your
          child, the first step is a dedicated consultation that includes
          corneal topography mapping, a full candidacy assessment, and a clear
          discussion of what to expect from the fitting process and the
          treatment itself.
        </p>
        <p className={paraClass}>
          At 360 Eyecare&apos;s Yorkville and Beaches clinics, Ortho-K
          consultations are conducted by optometrists with extensive experience
          in corneal reshaping therapy and myopia control. We&apos;ll tell you
          clearly whether you&apos;re a suitable candidate, what correction
          level is achievable for your prescription, and what the realistic
          timeline and commitment looks like before you make any decision.
        </p>
        <p className={`${paraClass} font-semibold`}>
          No referral required. New patients welcome at both locations.
        </p>
        <ClinicBookingCards bookLabel="Book an Ortho-K Consultation" />
        <p className={paraClass}>
          Questions about whether Ortho-K is right for you or your child? Call
          either clinic directly or reach out through our website. We&apos;re
          happy to talk through your situation before you book.
        </p>
      </div>

      <DryFaqs faqData={orthoFaqdata} title="Ortho-K FAQs" />

      <div className="bg-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-4 md:px-8 gap-8">
          {/* Left: Text + Form */}
          <div className="w-full lg:w-[70%]">
            <h3 className="text-combination-200 text-3xl sm:text-4xl font-bold mb-2">
              BOOK AN EYE EXAM
            </h3>
            <hr className="w-20 h-1 bg-combination-100 mb-6 sm:mb-8" />

            <FormSection css="max-w-3xl" />
          </div>

          {/* Right: Info and Image */}
          <div className="flex flex-col w-full lg:w-[40%] mt-8 lg:mt-0">
            <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              Experience Clear Vision with Orthokeratology in Toronto
            </h3>
            <hr className="w-20 h-1 bg-combination-100 mb-3" />
            <p className="text-neutral-500 text-base mb-4">
              Transform your vision overnight without surgery. Ortho-K lenses
              correct your vision while you sleep. Fill out the form to book
              your consultation and see clearly without glasses or contacts!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
