import React from "react";
import ClinicBookingCards from "./ClinicBookingCards";

const diagnosticTools = [
  {
    head: "Autorefraction and cycloplegic refraction:",
    para: "Measures the full refractive error of the eye with the accommodation system relaxed, providing the most accurate prescription measurement and the best baseline for tracking progression over time. Cycloplegic refraction is the gold standard for myopia measurement in children.",
  },
  {
    head: "Ocular biometry — axial length measurement:",
    para: "The most direct measure of myopia progression. A non-contact instrument measures the front-to-back length of the eyeball with precision to hundredths of a millimetre. Axial length measurements taken at each monitoring visit allow your optometrist to track structural progression independently of prescription changes, detecting progression earlier and assessing treatment response more precisely.",
  },
  {
    head: "Corneal topography:",
    para: "Particularly important for Ortho-K patients, it maps the shape of the corneal surface to confirm appropriate lens-induced reshaping and identify any fitting adjustments needed. Also used at baseline for all contact lens candidates.",
  },
  {
    head: "Slit lamp examination:",
    para: "Examines the anterior segment of the eye to assess overall ocular health and, for contact lens wearers, to check for any lens-related complications.",
  },
];

const visitFrequency = [
  {
    head: "Every 3 months",
    para: "for children in the initial stages of a new treatment, younger children with rapidly progressing myopia, or those whose most recent assessment showed progression despite current treatment",
  },
  {
    head: "Every 6 months",
    para: "for children whose treatment is producing stable, well-controlled progression",
  },
  {
    head: "Annually",
    para: "for children whose myopia has stabilised and who are in a maintenance phase",
  },
];

const followUpItems = [
  "Visual acuity and refractive error measurement",
  "Axial length measurement to assess structural progression",
  "Assessment of treatment compliance and any side effects or tolerability issues",
  "Review of Ortho-K lens fit or contact lens wearing patterns where applicable",
  "Discussion of findings and any recommended adjustments to the treatment plan",
  "Updated prescription where needed",
];

const listClass = "list-disc list-outside pl-8 mb-6 space-y-3 text-neutral-500";

export default function MyopiaControlPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 ">
      <section className="mb-12">
        <h2 className="text-3xl font-extrabold text-combination-200 mb-4">
          Monitoring and Follow-Up
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-2">
          Myopia control is not a set-and-forget treatment. It&apos;s an ongoing
          program that requires regular assessment to confirm the chosen
          approach is working, identify when adjustments are needed, and track
          the structural progression of the condition over time. At 360
          Eyecare, monitoring is built into every myopia control program from
          the start.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold text-combination-200 mb-4">
          Why Regular Follow-Ups Matter
        </h3>
        <p className="text-neutral-500 text-base mb-2">
          Myopia progression varies significantly between children. Two
          children of the same age with the same starting prescription can
          progress at very different rates depending on genetics, visual
          environment, outdoor time, and treatment response. Regular follow-up
          allows your optometrist to detect when a treatment approach is no
          longer keeping pace with progression and intervene before significant
          additional elongation occurs.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          The key insight is that prescription changes alone don&apos;t tell the
          full story. A child&apos;s glasses prescription can remain relatively
          stable while axial length continues to elongate, meaning the
          structural progression of myopia is outpacing what the prescription
          measurement captures. At 360 Eyecare, we measure axial length at
          monitoring visits alongside refractive error, giving a more sensitive
          and clinically meaningful picture of treatment response than
          prescription changes alone.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold text-combination-200 mb-4">
          Diagnostic Tools Used at Monitoring Appointments
        </h3>
        <ul className={listClass}>
          {diagnosticTools.map((tool) => (
            <li key={tool.head}>
              <span className="font-bold text-neutral-500">{tool.head}</span>{" "}
              {tool.para}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold text-combination-200 mb-4">
          Frequency of Follow-Up Visits
        </h3>
        <ul className={listClass}>
          {visitFrequency.map((item) => (
            <li key={item.head}>
              <span className="font-bold text-neutral-500">{item.head}</span> —{" "}
              {item.para}
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 text-base mb-2">
          Your optometrist will recommend the appropriate monitoring frequency
          at each visit based on current findings.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-bold text-combination-200 mb-4">
          What Happens at Follow-Up Appointments
        </h3>
        <ul className={listClass}>
          {followUpItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-combination-200 mb-4">
          Protect Your Child&apos;s Vision — Book a Myopia Control Consultation
          in Toronto
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-2">
          Myopia that progresses unchecked through the development years is
          harder to manage and carries greater long-term health consequences
          than myopia caught and treated early. If your child has been
          diagnosed with myopia, or if you&apos;re concerned about their
          distance vision, the right starting point is a dedicated myopia
          control assessment.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          At 360 Eyecare&apos;s Yorkville and Beaches clinics, myopia control
          assessments include axial length measurement, cycloplegic refraction,
          corneal topography where indicated, and a full treatment discussion
          based on your child&apos;s specific clinical picture. We offer all
          four evidence-based myopia control modalities (spectacle lenses,
          Ortho-K, MiSight, and atropine) and will recommend the approach most
          appropriate for your child rather than defaulting to a single
          preferred treatment.
        </p>
        <p className="text-neutral-500 text-base mb-4 font-semibold">
          No referral required. New patients welcome at both locations.
        </p>
        <ClinicBookingCards bookLabel="Book a Myopia Control Consultation" />
      </section>
    </div>
  );
}
