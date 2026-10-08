import React from "react";
import Link from "next/link";
import Image from "next/image";
import SubHeader from "../../../components/SubHeader";
import Faqs from "../../../components/Faqs";
import ClinicBookingCards from "../../../components/ClinicBookingCards";
import {
  DigitalStainImage,
  findeyedoctorImage,
} from "../../../constants/Images";
import {
  dryEyeClinics,
  eyeEmergencyAvoid,
  eyeEmergencyBring,
  eyeEmergencyConditions,
  eyeEmergencyFaqs,
  eyeEmergencyTriage,
} from "../../../constants/Constants";

const pageTitle =
  "Emergency Eye Care Toronto | Same-Day Eye Emergencies | 360 Eyecare";
const pageDescription =
  "Same-day emergency eye care for corneal abrasions, foreign bodies, red eye, and flashes and floaters at 360 Eyecare's Yorkville and Beaches clinics in Toronto.";
const pageUrl = "https://www.360eyecare.ca/eye-emergencies/";

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
  mainEntity: eyeEmergencyFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

type Lead = string | { head: string; para: string };

const linkClass = "text-combination-200 hover:text-combination-100";
const sectionClass = "max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0";
const h2Class =
  "text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-2";
const paraClass = "text-neutral-500 text-base mb-4";
const listClass = "list-disc pl-5 marker:text-combination-100 space-y-2";
const callButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-md";
const erBoxClass =
  "bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 text-red-900 text-base";

// Paragraph with an optional bold lead-in ({ head, para })
const LeadParagraph = ({
  item,
  className,
}: {
  item: Lead;
  className: string;
}) =>
  typeof item === "string" ? (
    <p className={className}>{item}</p>
  ) : (
    <p className={className}>
      <strong className="text-combination-200">{item.head}:</strong> {item.para}
    </p>
  );

// Tap-to-call buttons, one per clinic: name as a small label, number large
const CallButtons = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {dryEyeClinics.map((clinic) => (
      <a
        key={clinic.name}
        href={`tel:+1-${clinic.phone}`}
        className="flex items-center gap-3 bg-combination-100 hover:bg-combination-200 text-white rounded-md px-4 py-3 shadow-md transition-colors duration-200"
      >
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
          📞
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-xs uppercase tracking-wide font-semibold text-white/85">
            {clinic.shortName}
          </span>
          <span className="text-lg font-bold whitespace-nowrap">
            {clinic.phone}
          </span>
        </span>
      </a>
    ))}
  </div>
);

const ErWarning = ({ children }: { children: React.ReactNode }) => (
  <p className={erBoxClass}>
    <strong>⚠ </strong>
    {children}
  </p>
);

const IntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
    <div className="flex flex-col gap-4">
      <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900]">
        Eye Emergencies Can&apos;t Wait for a Routine Appointment
      </h2>
      <hr className="w-20 h-1 bg-combination-100" />
      <p className="text-neutral-500 text-base md:text-lg">
        At 360 Eyecare, our optometrists at both the{" "}
        <Link href="/toronto-rosedale-optometrist" className={linkClass}>
          Yorkville clinic
        </Link>{" "}
        on Bloor Street West and the{" "}
        <Link href="/toronto-beaches-optometrist" className={linkClass}>
          Beaches clinic
        </Link>{" "}
        on Queen Street East are licensed to diagnose and manage urgent eye
        conditions, including foreign body removal, corneal abrasions, acute
        infections, pink eye, and early flashes and floaters assessment. We see
        emergency appointments same-day when available.
      </p>
      <p className="text-neutral-500 text-base md:text-lg">
        Calling first is always the right move; we can assess the urgency of
        your situation over the phone and direct you to the most appropriate
        level of care immediately.
      </p>
    </div>
    <div className="flex flex-col gap-4">
      <Image
        src={findeyedoctorImage}
        alt="Optometrist examining a patient's eye at the slit lamp"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        className="w-full h-auto aspect-[16/9] object-cover rounded-lg shadow-sm"
      />
      <p className="text-combination-200 font-bold text-lg">
        If you&apos;re experiencing an eye emergency, call us now:
      </p>
      <CallButtons />
    </div>
    <div className="md:col-span-2">
      <ErWarning>
        If it&apos;s outside clinic hours or you have a penetrating eye injury,
        severe chemical burn, or sudden complete vision loss, go directly to
        your nearest emergency room or call 911.
      </ErWarning>
    </div>
  </div>
);

// Triage bullet: bold condition, then the detail when there is one
const TriageItem = ({ item }: { item: { head: string; para?: string } }) => (
  <li>
    <strong className="text-neutral-800">
      {item.head}
      {item.para ? ":" : ""}
    </strong>
    {item.para && <> {item.para}</>}
  </li>
);

const TriageSection = () => (
  <div className={sectionClass}>
    <h2 className={h2Class}>What We Treat vs. What Needs the Emergency Room</h2>
    <hr className="w-20 h-1 bg-combination-100 mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-combination-100">
        <h3 className="text-combination-200 text-lg sm:text-xl font-bold mb-4">
          Come to 360 Eyecare — call ahead first
        </h3>
        <ul className={`${listClass} text-neutral-600 text-base`}>
          {eyeEmergencyTriage.clinic.map((item) => (
            <TriageItem key={item.head} item={item} />
          ))}
        </ul>
      </div>
      <div className="bg-red-50 rounded-lg p-6 border-t-4 border-red-600">
        <h3 className="text-red-700 text-lg sm:text-xl font-bold mb-4">
          Go directly to a hospital emergency room or call 911
        </h3>
        <ul className="list-disc pl-5 marker:text-red-600 space-y-2 text-neutral-700 text-base">
          {eyeEmergencyTriage.er.map((item) => (
            <TriageItem key={item.head} item={item} />
          ))}
        </ul>
      </div>
    </div>
    <div className="mt-6 bg-combination-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
      <div className="text-white">
        <p className="text-xl font-bold mb-2">
          Not sure which applies to your situation? Call us.
        </p>
        <p className="text-white/80 text-base">
          Our team can assess the urgency of your situation over the phone and
          direct you appropriately, including telling you immediately if you
          need to go to the ER rather than coming to us.
        </p>
      </div>
      <CallButtons />
    </div>
  </div>
);

type Condition = (typeof eyeEmergencyConditions)[number] & {
  notes?: Lead[];
  action?: { label: string; text: string };
};

// The action as a white box, matching the list boxes
const ActionBox = ({
  action,
}: {
  action: NonNullable<Condition["action"]>;
}) => (
  <div className="bg-white rounded-lg p-5 border-l-4 border-combination-100">
    <p className="text-combination-200 font-bold mb-3">{action.label}:</p>
    <p className="text-neutral-600 text-[15px] leading-relaxed">
      {action.text}
    </p>
  </div>
);

// With a single list, the action sits beside it; with two lists, it goes
// full width underneath so the columns stay balanced.
const ConditionCard = ({ condition }: { condition: Condition }) => {
  const actionInline =
    Boolean(condition.action) && condition.lists.length === 1;
  const twoColumns = condition.lists.length > 1 || actionInline;

  return (
    <article
      id={condition.id}
      className="scroll-mt-32 bg-gray-50 rounded-lg p-6 md:p-8 border-l-4 border-combination-100"
    >
      <h3 className="text-combination-200 text-xl sm:text-2xl font-bold mb-4">
        {condition.title}
      </h3>
      {(condition.paragraphs as Lead[]).map((item) => (
        <LeadParagraph
          key={typeof item === "string" ? item : item.head}
          item={item}
          className={paraClass}
        />
      ))}
      <div
        className={`grid grid-cols-1 gap-6 ${twoColumns ? "md:grid-cols-2" : ""}`}
      >
        {condition.lists.map((list) => (
          <div key={list.heading} className="bg-white rounded-lg p-5">
            <p className="text-combination-200 font-bold mb-3">
              {list.heading}:
            </p>
            <ul className={`${listClass} text-neutral-600 text-[15px]`}>
              {list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        {actionInline && condition.action && (
          <ActionBox action={condition.action} />
        )}
      </div>
      {condition.notes?.map((item) => (
        <LeadParagraph
          key={typeof item === "string" ? item : item.head}
          item={item}
          className="text-neutral-500 text-base mt-6"
        />
      ))}
      {!actionInline && condition.action && (
        <div className="mt-6">
          <ActionBox action={condition.action} />
        </div>
      )}
    </article>
  );
};

const ConditionsSection = () => (
  <div className={sectionClass}>
    <h2 className={h2Class}>
      Common Eye Emergencies — Symptoms and Immediate Actions
    </h2>
    <hr className="w-20 h-1 bg-combination-100 mb-6" />
    {/* Jump links so patients can go straight to their symptom */}
    <nav aria-label="Eye emergencies on this page" className="mb-8">
      <ul className="flex flex-wrap gap-2">
        {eyeEmergencyConditions.map((condition) => (
          <li key={condition.id}>
            <a
              href={`#${condition.id}`}
              className="inline-block bg-white border border-combination-100 text-combination-200 hover:bg-combination-100 hover:text-white rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
            >
              {condition.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex flex-col gap-6">
      {eyeEmergencyConditions.map((condition) => (
        <ConditionCard key={condition.id} condition={condition as Condition} />
      ))}
    </div>
  </div>
);

const ExpectSection = () => (
  <div className={sectionClass}>
    <h2 className={h2Class}>What to Expect at an Emergency Eye Appointment</h2>
    <hr className="w-20 h-1 bg-combination-100 mb-4" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-6">
      <div>
        <p className={paraClass}>
          If you&apos;re calling 360 Eyecare about an eye emergency, here&apos;s
          what to expect:
        </p>
        <p className={paraClass}>
          <strong className="text-combination-200">When you call</strong>, tell
          us your main symptom, when it started, and whether your vision is
          affected. This allows us to assess urgency immediately and either book
          you for a same-day appointment or direct you to the emergency room if
          the situation requires it.
        </p>
        <p className={paraClass}>
          <strong className="text-combination-200">At your appointment</strong>,
          your optometrist will take a brief history, examine the affected eye
          including slit lamp examination of the anterior segment, intraocular
          pressure measurement where relevant, and posterior segment assessment
          if indicated, and provide immediate treatment where appropriate or
          arrange urgent referral if the situation requires hospital-level care.
        </p>
      </div>
      <Image
        src={DigitalStainImage}
        alt="Optometrist examining a patient at the slit lamp during an emergency eye appointment"
        sizes="(min-width: 768px) 50vw, 100vw"
        className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-combination-100">
        <h3 className="text-combination-200 text-lg sm:text-xl font-bold mb-4">
          What to bring
        </h3>
        <ul className={`${listClass} text-neutral-600 text-base`}>
          {eyeEmergencyBring.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 rounded-lg p-6 border-t-4 border-red-600">
        <h3 className="text-red-700 text-lg sm:text-xl font-bold mb-4">
          What not to do before your appointment
        </h3>
        <ul className="list-disc pl-5 marker:text-red-600 space-y-2 text-neutral-700 text-base">
          {eyeEmergencyAvoid.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
      <SubHeader text="Emergency Eye Care in Toronto — Yorkville & The Beaches" />
      <IntroSection />
      <TriageSection />
      <ConditionsSection />
      <ExpectSection />

      {/* FAQs */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Eye Emergency FAQs</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <Faqs faqData={eyeEmergencyFaqs} />
      </div>

      {/* Contact */}
      <div className={sectionClass}>
        <h2 className={h2Class}>Eye Emergency? Contact 360 Eyecare Now</h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className={paraClass}>
          Don&apos;t wait. Call the clinic nearest to you. We&apos;ll assess
          your situation immediately and either book you for a same-day
          appointment or direct you to the appropriate level of care.
        </p>
        <p className={paraClass}>
          If it is a life-threatening emergency or you have a penetrating eye
          injury, call 911 or go directly to your nearest emergency room.
        </p>
        <ClinicBookingCards callNow />
      </div>
    </main>
  );
};

export default page;
