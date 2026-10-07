import React from "react";
import SubHeader from "../../../components/SubHeader";
import Banner from "../../../components/Banner";
import Link from "next/link";
import { MyopiaImage } from "../../../constants/Images";
import Image from "next/image";
import MyopiaControl from "../../../components/MyopiaControl";
import MyopiaControlPage from "../../../components/MyopiaControlPage";
import DryFaqs from "../../../components/DryFaqs";
import { dryEyeClinics, myopiaFaqdata } from "@/constants/Constants";

const pageTitle =
  "Myopia Control for Children Toronto | Ortho-K, MiSight, Atropine | 360 Eyecare";
const pageDescription =
  "Slow your child's myopia progression with Ortho-K, MiSight, MiyoSmart, MyoCare and low-dose atropine at 360 Eyecare's Yorkville and Beaches clinics in Toronto. No referral needed.";
const pageUrl = "https://www.360eyecare.ca/myopia-control-clinic/";

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
  mainEntity: myopiaFaqdata.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const linkClass = "text-combination-200 hover:text-combination-100";
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md";

const BookButtons = ({ label = "Book a Myopia Control Consultation" }) => (
  <div className="flex flex-col sm:flex-row gap-4">
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

const myopiaRisks = [
  {
    head: "Retinal detachment",
    para: "the risk increases substantially with myopia above -3.00D and rises steeply above -6.00D. Retinal detachment is a medical emergency that can cause permanent vision loss if not treated immediately.",
  },
  {
    head: "Glaucoma",
    para: "people with high myopia are two to three times more likely to develop glaucoma than the general population.",
  },
  {
    head: "Myopic macular degeneration",
    para: "stretching of the retinal tissue at the macula can cause progressive central vision loss that is difficult to treat and irreversible.",
  },
  {
    head: "Cataracts",
    para: "high myopia is associated with earlier onset and more rapid progression of nuclear cataracts.",
  },
];

const progressionFactors = [
  {
    head: "1. Time Outdoors vs. Time on Screens",
    paras: [
      "The evidence for outdoor time as a protective factor against myopia progression is among the strongest in the field. The mechanism isn't simply that outdoors means less near work; it's that natural light exposure at outdoor intensities (typically 10,000 to 100,000 lux) is fundamentally different from indoor lighting (typically 300 to 500 lux) in ways that affect retinal signalling and axial growth regulation.",
      "Studies suggest that children need approximately 90 minutes to two hours of outdoor time per day to achieve meaningful protective effect. For most school-age children in Toronto, reaching this threshold consistently requires deliberate scheduling rather than passive outdoor exposure.",
      "Screen time itself is less directly implicated in myopia than the sustained near focus it demands. The screen isn't the problem; the prolonged close-distance viewing is. The 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds) helps manage accommodative fatigue but doesn't substitute for the protective effect of genuine outdoor exposure.",
    ],
  },
  {
    head: "2. Near Work Intensity and Visual Environment",
    paras: [
      "Reading, homework, and digital device use all involve sustained near focal demand. There is evidence that prolonged near work, particularly without adequate breaks, contributes to the signals that drive axial elongation, though the precise mechanism is still under investigation.",
      "Practical modifications that reduce near work strain include maintaining reading distance at 30 to 40 centimetres, ensuring good lighting to reduce visual effort, encouraging upright posture during desk work, and building regular breaks into study sessions. These modifications don't replace clinical myopia control treatment, but they complement it, and for children with rapidly progressing myopia, every contributing factor worth addressing should be addressed.",
    ],
  },
  {
    head: "3. Genetic Predisposition",
    paras: [
      "Genetics establishes the foundation. A child with two myopic parents has a substantially higher baseline risk of developing myopia, and once myopia is present, a higher risk of rapid progression. Genetic predisposition isn't modifiable, but it is a clinical input: children with strong family histories of high myopia warrant earlier assessment, more frequent monitoring, and a lower threshold for starting myopia control treatment, even when the initial prescription is mild.",
      "At 360 Eyecare, family history is part of the standard intake for every pediatric myopia assessment at both our Yorkville and Beaches clinics because it directly informs how aggressively we recommend intervening and how frequently we schedule monitoring.",
    ],
  },
];

const lifestyleTips = [
  {
    head: "Prioritise outdoor time — year-round, not just in summer:",
    para: "The target is 90 minutes to two hours of outdoor time daily. For Toronto families, this requires active planning through the winter months when daylight is limited and cold weather compresses the window for outdoor activity. Lunch breaks, after-school time before dark, and weekend mornings all count. The protective effect accumulates across the day rather than requiring a single continuous block. Even overcast outdoor light is significantly more intense than indoor environments and retains meaningful protective effect.",
  },
  {
    head: "Manage near work deliberately:",
    para: "30 to 40 centimetres is the evidence-based recommendation for reading, and children frequently hold books and devices closer than this, particularly when tired. Upright posture during desk work, adequate task lighting, and enforced breaks every 20 to 30 minutes of sustained near work all reduce the accommodative load that contributes to progression. The 20-20-20 rule is a useful starting point, but for children with rapidly progressing myopia, more frequent breaks are appropriate.",
  },
  {
    head: "Maintain appropriate screen habits:",
    para: "The screen itself isn't the primary concern; the sustained near focal demand is. Larger screens viewed at greater distances produce less near work strain than small devices held close. Phones and tablets used for reading or video content should be held at arm's length, not in the lap or propped on a chest at close range. Device-free time before bed also reduces late-evening near work that occurs at the end of the day when the visual system is most fatigued.",
  },
  {
    head: "Schedule annual myopia monitoring (more frequently if progression is rapid):",
    para: "Myopia that is being actively monitored can be managed; myopia that is discovered at a threshold it took three years to reach silently cannot be rewound. Children with a family history of myopia, or those already diagnosed, should have eye exams at least annually and more frequently if their optometrist has recommended myopia control treatment. At 360 Eyecare, children in active myopia control programs are typically seen every three to six months, depending on the treatment modality and the rate of progression at baseline. Ensure proper nutrition and sleep.",
  },
];

const page = () => {
  return (
    <main className="pt-[110px] bg-[#F9F9F9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SubHeader text="Myopia Control for Children in Toronto — Yorkville & The Beaches" />

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-6 lg:px-0 flex flex-col">
        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-4">
          Introduction
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-2">
          Myopia, or nearsightedness, is the most rapidly increasing vision
          condition in children worldwide, and Canada is not exempt from that
          trend. What most parents don't realise is that myopia isn't just a
          glasses prescription that gets updated annually. It's a structural
          change to the eye that compounds over time and significantly increases
          the risk of serious sight-threatening conditions in adulthood.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          The good news is that myopia progression can be slowed, and in many
          cases substantially, with the right intervention started at the right
          time. At 360 Eyecare's Yorkville clinic on Bloor Street West and our
          Beaches clinic on Queen Street East, we offer a comprehensive myopia
          control program for children using evidence-based treatments including
          orthokeratology, MiSight contact lenses, MiyoSmart and MyoCare
          spectacle lenses, and low-dose atropine therapy. The right treatment
          depends on your child's age, prescription, progression rate, and
          lifestyle.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          If your child has been diagnosed with myopia, or if you've noticed
          their distance vision changing between prescriptions, early assessment
          is the highest-leverage step you can take for their long-term vision
          health.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-base md:text-lg mb-6">
          {dryEyeClinics.map((clinic) => (
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
      </div>

      {/* Why Parents Must Watch Out — with image */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-4">
              Why Parents Must Watch Out For Myopia
            </h2>
            <hr className="w-20 h-1 bg-combination-100 mb-4" />
            <p className="text-neutral-500 text-base mb-2">
              Most parents understand myopia as a vision problem. Their child
              can&apos;t see the board at school, they need stronger glasses
              every year, the prescription goes up, and life goes on. What&apos;s
              less widely understood is what&apos;s happening structurally as
              that prescription increases, and why the final prescription your
              child reaches in adulthood has direct implications for their
              lifetime risk of serious eye disease.
            </p>
            <p className="text-neutral-500 text-base mb-2">
              Myopia is caused by the eyeball growing too long (axial
              elongation), which causes light to focus in front of the retina
              rather than directly on it. Every additional dioptre of myopia
              represents more axial length, and as the eye elongates, the retina
              and surrounding structures are stretched thinner. That thinning is
              the mechanism behind the elevated disease risks associated with
              high myopia:
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[292px]">
              <Image
                src={MyopiaImage}
                alt="Child myopia control assessment at 360 Eyecare Toronto"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="list-disc list-outside pl-5 ml-5 mt-4 text-neutral-500 text-base">
          {myopiaRisks.map((risk) => (
            <li key={risk.head} className="mb-2">
              <strong>{risk.head}</strong> — {risk.para}
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 text-base mb-4 mt-4">
          The relationship is dose-dependent: a child who reaches -3.00D in
          adulthood has meaningfully lower risk than one who reaches -6.00D.
          Clinical research consistently shows that myopia control treatments
          can slow progression by 40 to 60 percent compared to standard
          single-vision correction — which, compounded over a child&apos;s
          development years, can translate to a significantly lower final
          prescription and a substantially reduced lifetime disease burden.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          This is why the timing of intervention matters. Myopia typically
          develops between ages six and fourteen and progresses most rapidly
          during the school years, particularly in children with two myopic
          parents, significant near work demands, and limited outdoor time.
          Starting myopia control early at the first sign of progression rather
          than waiting until the prescription stabilises produces the best
          long-term outcomes.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          At 360 Eyecare, myopia control is treated as a clinical priority, not
          an add-on. Our optometrists at both the{" "}
          <Link href="/toronto-rosedale-optometrist" className={linkClass}>
            Yorkville
          </Link>{" "}
          and{" "}
          <Link href="/toronto-beaches-optometrist" className={linkClass}>
            Beaches
          </Link>{" "}
          clinics monitor axial length alongside prescription changes to track
          the actual structural progression of myopia, giving a more complete
          and actionable picture of your child&apos;s situation than
          prescription measurements alone.
        </p>
      </div>

      {/* Understanding Myopia + Causes */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-6 lg:px-0 flex flex-col">
        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-4">
          Understanding Myopia — What&apos;s Actually Happening in Your
          Child&apos;s Eye
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-4">
          Myopia occurs when the eyeball grows too long relative to the focusing
          power of the cornea and lens. In a normally shaped eye, light entering
          through the cornea focuses precisely on the retina at the back of the
          eye. In a myopic eye, the axial length is excessive, causing light to
          converge in front of the retina rather than on it. The result is clear
          vision up close and blurry vision at distance; the defining
          characteristic of nearsightedness.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          What&apos;s important to understand is that myopia isn&apos;t a static
          optical error that simply requires a stronger lens each year.
          It&apos;s an active biological process, and the rate of that
          elongation is what myopia control treatments are designed to slow.
        </p>

        <h3 className="text-combination-200 text-xl sm:text-2xl md:text-[30px] font-[900] mb-4 mt-4">
          What Causes Myopia?
        </h3>
        <p className="text-neutral-500 text-base mb-2">
          The exact cause of myopia isn&apos;t fully understood, but the
          evidence points consistently to a combination of genetic
          predisposition and environmental exposure:
        </p>
        <ul className="list-disc list-outside pl-5 ml-5 text-neutral-500 text-base">
          <li className="mb-2">
            <strong>Genetics:</strong> Family history is the strongest single
            predictor of myopia development. A child with one myopic parent has
            roughly three times the risk of developing myopia compared to a
            child with no myopic parents. With two myopic parents, that risk
            increases further. Genetics establishes the predisposition; the
            environment determines how far it progresses.
          </li>
          <li className="mb-2">
            <strong className="font-bold">
              Environment and visual behaviour:
            </strong>{" "}
            The modern visual environment is the primary driver of the global
            myopia epidemic. Children today spend significantly more time doing
            sustained close-focus tasks than any previous generation, and the
            data correlating near work intensity with myopia progression is
            consistent across populations.
            <p className="mt-2">
              Outdoor time has a specific protective effect that appears to go
              beyond simply reducing near work. Natural light exposure is
              believed to stimulate dopamine release in the retina, which
              inhibits axial elongation. Studies consistently show that children
              who spend more time outdoors develop myopia at lower rates and
              progress more slowly than those who don&apos;t, regardless of near
              work habits.
            </p>
            <p className="mt-2">
              For families in Toronto, the seasonal dimension of this is worth
              noting. Reduced outdoor time during winter months may contribute
              to faster progression during those periods. Actively protecting
              outdoor time year-round, not just in summer, is relevant myopia
              control advice for Toronto families specifically.
            </p>
          </li>
        </ul>
      </div>

      {/* Factors Section */}
      <div className="max-w-6xl mx-auto my-6 sm:my-14 px-4 sm:px-6 lg:px-0 flex flex-col">
        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-4">
          Factors Contributing to Myopia Progression
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-4">
          Understanding what drives myopia progression in your child&apos;s
          specific situation is the starting point for building an effective
          control strategy. The three primary factors are well-established in
          the research literature, and two of the three are modifiable.
        </p>

        {progressionFactors.map((item) => (
          <div key={item.head} className="mb-6">
            <h3 className="text-combination-200 text-xl sm:text-2xl md:text-[30px] font-[900] mb-2">
              {item.head}
            </h3>
            {item.paras.map((para) => (
              <p key={para} className="text-neutral-500 text-base mb-2">
                {para}
              </p>
            ))}
          </div>
        ))}

        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[30px] font-[900] mb-4 mt-6">
          Prevention and Lifestyle — What Families Can Do
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-4">
          Myopia control treatment and lifestyle habits work best together.
          Clinical interventions slow the biological process of axial
          elongation. Lifestyle modifications reduce the environmental inputs
          that drive it. Neither replaces the other, but the combination
          consistently produces better outcomes than either approach alone.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          Here&apos;s what the evidence supports for families managing myopia in
          children:
        </p>
        <ul className="list-disc list-outside ml-5 text-neutral-500 text-base">
          {lifestyleTips.map((tip) => (
            <li key={tip.head} className="mb-2">
              <strong>{tip.head}</strong> {tip.para}
            </li>
          ))}
        </ul>
      </div>

      {/* Assessment CTA */}
      <div className="max-w-6xl mx-auto my-8 px-4 sm:px-6 lg:px-0 flex flex-col">
        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[30px] font-[900] mb-4">
          Is Your Child&apos;s Myopia Progressing? Start With an Assessment.
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-4">
          The earlier myopia control treatment begins, the more progression it
          can prevent. If your child has been diagnosed with myopia or if
          you&apos;ve noticed their distance vision changing between annual
          exams, a dedicated myopia control assessment is the right next step.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          Both 360 Eyecare locations offer comprehensive{" "}
          <Link href="/pediatric-eye-exams" className={linkClass}>
            pediatric
          </Link>{" "}
          myopia assessments, including axial length measurement, refractive
          error evaluation, and a full discussion of treatment options matched
          to your child&apos;s age, prescription, and lifestyle.
        </p>
        <div className="flex flex-col gap-4 text-base mb-6 text-neutral-500">
          <p>
            <strong>360 Eyecare Yorkville</strong> — 55 Bloor St W, Manulife
            Centre
            <br />
            <a href="tel:+1-416-901-2725" className={`${linkClass} font-semibold`}>
              📞 416-901-2725
            </a>
          </p>
          <p>
            <strong>360 Eyecare Beaches</strong> — 2199 Queen St E
            <br />
            <a href="tel:+1-416-698-3937" className={`${linkClass} font-semibold`}>
              📞 416-698-3937
            </a>
          </p>
        </div>
        <BookButtons label="Book a Myopia Control Assessment" />
      </div>

      <MyopiaControl />
      <MyopiaControlPage />

      <DryFaqs faqData={myopiaFaqdata} title="Myopia Control FAQs" />

      <Banner />
    </main>
  );
};

export default page;
