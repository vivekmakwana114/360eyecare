"use client";
import { useState } from "react";
import { HoyaImage, ZeissImage } from "../constants/Images";
import Image from "next/image";
import Link from "next/link";

const linkClass = "text-combination-200 hover:text-combination-100";
const subHeadingClass = "text-xl font-bold text-combination-200 mt-6 mb-3";
const bulletListClass =
  "list-disc list-outside pl-5 space-y-2 text-neutral-500";

// Label + body bullet used throughout the lens / drop breakdowns
const LabelledItem = ({ label, children }) => (
  <li>
    <strong className="text-gray-500">{label}</strong>{" "}
    <span className="text-neutral-600">{children}</span>
  </li>
);

const SimpleList = ({ items }) => (
  <ul className={bulletListClass}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const treatments = [
  {
    label: "Spectacle Therapy",
    icon: "/homeIcons/eyetest.png",
    title: "Spectacle Therapy for Myopia Control",
    description:
      "Specially designed lenses including MiyoSmart (Hoya) and MyoCare (Zeiss) that use peripheral defocus technology to slow axial elongation while providing full distance correction. The lowest-barrier option for younger children or those not ready for contact lenses.",
    content: (
      <div>
        <p className="text-neutral-500 mb-4">
          Specialised myopia control spectacle lenses are the most accessible
          and lowest-barrier treatment option. They look and function like
          regular glasses, require no contact lens handling, and are appropriate
          for children as young as six. For families whose children aren&apos;t
          ready for contact lenses, or who prefer to start with a non-contact
          approach, spectacle therapy is typically the first-line
          recommendation at 360 Eyecare.
        </p>
        <p className="text-neutral-500 mb-8">
          Both lenses we offer (MiyoSmart by Hoya and MyoCare by Zeiss) work
          through peripheral defocus technology, creating a central zone of
          clear, sharp vision alongside a peripheral zone of controlled blur
          that signals the eye to reduce its axial elongation. The mechanism is
          distinct from standard single-vision lenses, which correct central
          vision but leave peripheral defocus in a pattern that may actually
          encourage axial growth.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/5">
            <div className="bg-neutral-100 rounded-lg p-4 h-full flex items-center justify-center">
              <Image
                src={HoyaImage}
                alt="MiyoSmart myopia control lens by Hoya"
                width={446}
                height={409}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <section className="text-base text-neutral-700">
              <h3 className="text-3xl font-bold mb-6 text-combination-200">
                MiyoSmart Lenses by Hoya
              </h3>
              <ul className="space-y-6 list-disc list-outside pl-5">
                <LabelledItem label="Technology:">
                  <Link
                    href="/miyosmart"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MiyoSmart lenses
                  </Link>{" "}
                  incorporate Hoya&apos;s Defocus Incorporated Multiple
                  Segments (D.I.M.S.) technology, a honeycomb array of 396
                  small defocus segments surrounding a central clear zone. The
                  segments create simultaneous peripheral blur that signals the
                  retina to inhibit axial elongation, while the central zone
                  provides full distance correction.
                </LabelledItem>
                <LabelledItem label="Clinical evidence:">
                  A two-year randomised clinical trial involving 183 children
                  aged 8 to 13 with myopia between -1.00D and -5.00D found that
                  MiyoSmart lenses produced a 59% reduction in myopia
                  progression measured by cycloplegic spherical equivalent
                  refraction and a 60% reduction in axial length elongation
                  compared to standard single-vision lenses. A subsequent
                  three-year study confirmed sustained efficacy, with no rebound
                  effect observed when treatment was discontinued.
                </LabelledItem>
                <LabelledItem label="Best suited for:">
                  Children aged 6 and older who prefer glasses over contact
                  lenses; younger children not yet ready for contact lens
                  handling; families looking for a straightforward,
                  high-compliance starting point for myopia control.
                </LabelledItem>
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-3/5 order-2 md:order-1">
              <section className="text-base text-neutral-700">
                <h3 className="text-3xl font-bold mb-6 text-combination-200">
                  MyoCare Lenses by Zeiss
                </h3>
                <ul className="space-y-6 list-disc list-outside pl-5">
                  <LabelledItem label="Technology:">
                    MyoCare lenses use Zeiss DualZone technology, a central
                    clear zone for sharp distance vision surrounded by a
                    peripheral treatment zone incorporating multiple defocus
                    elements. Similar in principle to D.I.M.S. but with a
                    distinct optical design and segment configuration.
                  </LabelledItem>
                  <LabelledItem label="Clinical evidence:">
                    A 12-month multicentre trial involving 240 children aged 6
                    to 13 with myopia between -0.75D and -5.00D found that
                    MyoCare lenses slowed myopia progression by an average of
                    0.31D and reduced axial elongation by 0.13mm compared to
                    single-vision lenses, a relative efficacy of approximately
                    48% and 41% respectively.
                    .
                  </LabelledItem>
                  <LabelledItem label="Best suited for:">
                    Children preferring glasses; those for whom MiyoSmart lenses
                    are not the optimal optical fit; patients whose optometrist
                    determines the Zeiss optical design better matches their
                    visual requirements.
                  </LabelledItem>
                </ul>
              </section>
            </div>
            <div className="md:w-2/5 order-1 md:order-2">
              <div className="bg-neutral-100 rounded-lg p-4 h-full flex items-center justify-center">
                <Image
                  src={ZeissImage}
                  alt="MyoCare myopia control lens by Zeiss"
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 className={subHeadingClass}>Choosing Between MiyoSmart and MyoCare</h3>
        <p className="text-neutral-500 mb-4">
          Both lenses are clinically validated and represent a significant
          improvement over standard single-vision correction for myopia
          progression. The choice between them depends on optical fitting
          considerations, the child&apos;s prescription profile, and in some
          cases frame compatibility. Your optometrist at 360 Eyecare will
          recommend the most appropriate option based on your child&apos;s full
          assessment findings rather than brand preference.
        </p>
        <p className="text-neutral-500">
          The most important factor for either lens is consistent wear.
          Children who remove their glasses for sports, leave them at school,
          or wear them inconsistently will get substantially less benefit.
          Compliance is a clinical input worth discussing honestly at the
          assessment appointment.
        </p>
      </div>
    ),
  },
  {
    label: "Orthokeratology (Ortho-K)",
    icon: "/homeIcons/ortho1.png",
    title: "Orthokeratology (Ortho-K) — Overnight Vision Correction and Myopia Control",
    description:
      "Custom gas-permeable contact lenses worn overnight that gently reshape the cornea during sleep, providing clear unaided vision through the day while simultaneously slowing myopia progression through peripheral defocus signalling. Approved by Health Canada. Particularly well-suited to active children and teenagers who prefer not to wear glasses or daytime lenses.",
    content: (
      <div>
        <p className="text-neutral-500 mb-4">
          <Link href="/orthokeratology-treatment" className={linkClass}>
            Orthokeratology
          </Link>
          , commonly called Ortho-K, uses custom-designed rigid gas-permeable
          contact lenses worn overnight to gently reshape the cornea during
          sleep. By morning, the lenses are removed, and the reshaped cornea
          provides clear unaided vision throughout the day. The reshaping
          effect is temporary and reversible; the cornea returns to its
          original shape if lenses are discontinued, making Ortho-K a fully
          reversible treatment.
        </p>
        <p className="text-neutral-500 mb-4">
          Ortho-K is approved by Health Canada and has one of the strongest
          evidence bases of any myopia control modality. It works through two
          mechanisms simultaneously: it provides functional clear daytime
          vision, and the peripheral optical profile created by the reshaped
          cornea generates the defocus signal that inhibits axial elongation.
        </p>

        <h3 className={subHeadingClass}>Clinical Evidence</h3>
        <p className="text-neutral-500 mb-4">
          Studies consistently show Ortho-K slows axial elongation by 40 to 60
          percent compared to standard single-vision correction, placing it
          among the most effective optical myopia control options available. A
          2019 meta-analysis of multiple randomised controlled trials confirmed
          significant reduction in axial elongation in Ortho-K wearers versus
          control groups across diverse populations. Combination therapy
          (Ortho-K alongside low-dose atropine) has demonstrated enhanced
          efficacy in children with rapidly progressing myopia in several
          published trials.
        </p>

        <h3 className={subHeadingClass}>What to Expect</h3>
        <p className="text-neutral-500 mb-4">
          Custom lenses are designed based on precise corneal topography
          measurements taken at your child&apos;s assessment appointment.
          Initial fitting involves a series of follow-up visits to assess the
          reshaping response and refine lens parameters, typically three to
          four visits in the first month. Once the fit is optimised, follow-up
          appointments are scheduled every three to six months.
        </p>
        <p className="text-neutral-500 mb-4">
          Lens insertion and removal is performed at home each night. Children
          typically adapt to the routine within one to two weeks. The lenses
          must be cleaned and stored properly between wearings. Your
          optometrist will provide detailed care instructions and ensure your
          child and the family are comfortable with the process before lenses
          are dispensed.
        </p>
        <p className="text-neutral-500 mb-4">
          Ortho-K typically requires a minimum prescription of -0.75D to be
          clinically appropriate, and works best for prescriptions up to
          approximately -5.00D to -6.00D, depending on corneal anatomy.
          Astigmatism up to certain levels can be simultaneously managed with
          Ortho-K lens design.
        </p>

        <h3 className={subHeadingClass}>Who Is Ortho-K Best Suited For?</h3>
        <SimpleList
          items={[
            "Children and teenagers aged 8 and older who can reliably handle lens insertion and removal",
            "Active children who prefer not to wear glasses or daytime lenses during sports and activities",
            "Children whose prescriptions fall within the appropriate range for corneal reshaping",
            "Families whose children have rapidly progressing myopia and want an effective control option",
            "Children interested in the convenience of clear unaided daytime vision",
          ]}
        />
      </div>
    ),
  },
  {
    label: "Soft Contact Lenses",
    icon: "/homeIcons/contactlens.png",
    title: "Soft Contact Lenses for Myopia Control — MiSight 1 Day",
    description:
      "Daily disposable lenses including MiSight 1 Day (CooperVision), the first soft contact lens approved specifically for myopia control, using dual-focus optics to simultaneously correct vision and reduce the peripheral hyperopic defocus that drives axial elongation.",
    content: (
      <div>
        <p className="text-neutral-500 mb-4">
          MiSight 1 Day by CooperVision is the first and currently only soft
          contact lens approved specifically for myopia control by Health
          Canada and the FDA. Unlike standard soft contact lenses that correct
          vision only, MiSight uses ActivControl dual-focus optics to
          simultaneously correct distance vision and generate the peripheral
          defocus signal that inhibits axial elongation.
        </p>
        <p className="text-neutral-500 mb-4">
          As a daily disposable lens, MiSight eliminates the lens care and
          cleaning routine required with reusable lenses; each day begins with
          a fresh lens, reducing the risk of deposits, infections, and the
          compliance issues associated with cleaning regimens. This makes
          MiSight one of the most practical soft lens options for children.
        </p>

        <h3 className={subHeadingClass}>Clinical Evidence</h3>
        <p className="text-neutral-500 mb-4">
          A three-year randomised clinical trial (the longest prospective
          myopia control study conducted with a soft contact lens at the time
          of publication) demonstrated that MiSight lenses slowed myopia
          progression by an average of 59% and reduced axial elongation by 52%
          compared to standard contact lenses. Importantly, the study also
          showed no significant rebound in progression rate after
          discontinuation, which has been a concern with some other myopia
          control modalities.
        </p>

        <h3 className={subHeadingClass}>What to Expect</h3>
        <p className="text-neutral-500 mb-4">
          MiSight lenses are typically introduced from age 8 to 10 onwards,
          once a child demonstrates sufficient maturity and dexterity to handle
          daily disposable lens insertion and removal. A contact lens fitting
          appointment establishes the correct lens parameters, and an initial
          training session ensures your child and the family are comfortable
          with the insertion, removal, and handling process before lenses are
          dispensed.
        </p>
        <p className="text-neutral-500 mb-4">
          Follow-up appointments are typically scheduled every six months, with
          axial length and refractive measurements taken at each visit to
          monitor treatment response.
        </p>

        <h3 className={subHeadingClass}>Who Is MiSight Best Suited For?</h3>
        <SimpleList
          items={[
            "Children aged 8 and older ready for contact lens wear",
            "Children who prefer contact lenses over glasses for aesthetic or lifestyle reasons",
            "Active children for whom glasses are impractical during sports or activities",
            "Children who find Ortho-K insertion uncomfortable or who aren't suitable candidates for corneal reshaping",
            "Families wanting a Health Canada and FDA-approved dedicated myopia control contact lens",
          ]}
        />
      </div>
    ),
  },
  {
    label: "Atropine Therapy",
    icon: "/homeIcons/atro.png",
    title: "Low-Dose Atropine Therapy for Myopia Control",
    description:
      "Daily eye drops at concentrations of 0.01% to 0.05% that slow myopia progression through a retinal mechanism distinct from optical defocus. Not available commercially. Must be prescribed by an optometrist and compounded by a specialised pharmacy. Effective as a standalone treatment and as a combination therapy alongside optical modalities for rapid progressors.",
    content: (
      <div>
        <p className="text-neutral-500 mb-4">
          Low-dose atropine eye drops have one of the longest and most
          thoroughly researched evidence bases of any myopia control treatment,
          with major clinical trials spanning over two decades. Atropine works
          through a retinal mechanism that is distinct from the peripheral
          defocus approach used by optical myopia control modalities, making it
          uniquely valuable as both a standalone treatment and as a combination
          therapy that can be layered with Ortho-K or MiSight for enhanced
          efficacy in children with rapidly progressing myopia.
        </p>
        <p className="text-neutral-500 mb-4">
          Atropine at myopia control concentrations is not available
          commercially. It must be prescribed by an optometrist and compounded
          by a specialised pharmacy to the appropriate concentration, typically
          0.01% to 0.05%.
        </p>

        <h3 className={subHeadingClass}>How It Works</h3>
        <p className="text-neutral-500 mb-4">
          The precise mechanism by which atropine slows myopia progression is
          not fully established, but the evidence consistently points to a
          retinal rather than a purely accommodative pathway. Early theories
          focused on atropine&apos;s ability to relax the ciliary muscle.
          Still, the concentrations used for myopia control (0.01% to 0.05%)
          have minimal effect on accommodation, yet still produce meaningful
          slowing of progression. Current research suggests atropine acts
          directly on retinal receptors involved in the signalling cascade that
          drives axial elongation.
        </p>

        <h3 className={subHeadingClass}>Concentration and Efficacy</h3>
        <p className="text-neutral-500 mb-4">
          Concentration selection is a clinical judgment based on the
          child&apos;s progression rate, age, tolerance, and whether atropine is
          being used as a standalone or combination treatment:
        </p>
        <ul className={`${bulletListClass} mb-4`}>
          <LabelledItem label="0.01% atropine —">
            the lowest effective concentration, producing minimal side effects
            including negligible pupil dilation, no meaningful blur at near, and
            no light sensitivity in most patients. The ATOM2 trial demonstrated
            approximately 50% reduction in myopia progression at this
            concentration over two years, with minimal side effects.
          </LabelledItem>
          <LabelledItem label="0.05% atropine —">
            the concentration with the strongest evidence base for efficacy. The
            LAMP study demonstrated that 0.05% atropine produced greater slowing
            of both myopia progression and axial elongation than 0.025% or
            0.01%, while remaining well-tolerated in the majority of patients.
            Side effects are mild — slight pupil dilation and minimal light
            sensitivity in some patients — and typically don&apos;t require
            photochromic lenses or reading glasses.
          </LabelledItem>
        </ul>
        <p className="text-neutral-500 mb-4">
          Higher concentrations (0.1%, 0.5%, 1.0%) produce stronger short-term
          suppression but are associated with significant side effects and a
          well-documented rebound effect on discontinuation. They are not used
          in current myopia control practice.
        </p>

        <h3 className={subHeadingClass}>What to Expect</h3>
        <p className="text-neutral-500 mb-4">
          Atropine drops are applied once daily at bedtime, one drop per eye.
          The bedtime timing minimises any pupillary dilation effects during
          waking hours. Most children tolerate the drops well, with minimal
          awareness of side effects at 0.01% to 0.05% concentrations.
        </p>
        <p className="text-neutral-500 mb-4">
          Follow-up appointments are scheduled every three to six months to
          monitor axial length and refractive progression and assess treatment
          response. Concentration may be adjusted based on response. Children
          who progress despite 0.01% atropine may be stepped up to 0.05%, or
          combination therapy with an optical modality may be introduced.
        </p>
        <p className="text-neutral-500 mb-4">
          Treatment is typically continued until myopia stabilises, usually in
          the late teenage years with a gradual tapering protocol rather than
          abrupt discontinuation to minimise rebound risk.
        </p>

        <h3 className={subHeadingClass}>Who Is Atropine Best Suited For?</h3>
        <SimpleList
          items={[
            "Children of any age whose myopia is progressing: atropine can be used from as young as four to five years in appropriate cases",
            "Younger children not yet ready for contact lens handling who need more than spectacle therapy alone",
            "Children with rapidly progressing myopia as an add-on to optical modalities for enhanced efficacy",
            "Children for whom contact lens options are not appropriate or tolerated",
            "Patients transitioning off other myopia control treatments who need bridging therapy",
          ]}
        />
      </div>
    ),
  },
];

const MyopiaControl = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full py-8 md:py-16 bg-[#F9F9F9]">
      {/* Same container as the page's other sections so paragraph widths line up */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-combination-200 mb-3 text-center">
          Myopia Control Treatment Methods
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="w-full text-neutral-500 text-base font-normal mb-3">
          There is no single best myopia control treatment. The right option
          depends on your child&apos;s age, prescription, rate of progression,
          corneal anatomy, and willingness to handle contact lenses or comply
          with daily drops. What the evidence does clearly support is that all
          four established treatment modalities (specialised spectacle lenses,
          orthokeratology, soft contact lenses, and low-dose atropine) produce
          meaningful slowing of myopia progression compared to standard
          single-vision correction, and that combination approaches can enhance
          outcomes further.
        </p>
        <p className="w-full text-neutral-500 text-base font-normal mb-3">
          At 360 Eyecare, treatment recommendations are based on a
          comprehensive assessment rather than a single preferred modality. Our
          optometrists at both the Yorkville and Beaches clinics are experienced
          with all four approaches and will recommend the option or combination
          most appropriate for your child&apos;s specific clinical picture.
          Select a treatment below for details.
        </p>
        <h3 className="w-full text-combination-200 text-xl sm:text-2xl md:text-[30px] font-[900] mt-4">
          The four evidence-based myopia control treatments we offer:
        </h3>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-0">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {treatments.map((treatment, index) => {
            const isActive = selected === index;
            return (
              <div key={treatment.label} className="mb-4">
                <button
                  onClick={() => setSelected(isActive ? -1 : index)}
                  className={`w-full p-4 rounded-lg text-center cursor-pointer transition-all duration-200 flex items-center justify-center mb-1 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-combination-200 hover:bg-gray-100"
                  }`}
                >
                  <img
                    src={treatment.icon}
                    alt={treatment.label}
                    className={`h-8 w-auto mr-3 ${
                      isActive
                        ? "filter brightness-0 invert text-combination-100"
                        : ""
                    }`}
                  />
                  <span className="font-semibold text-sm">
                    {treatment.label}
                  </span>
                </button>
                {isActive && (
                  <div className="bg-gray-50 rounded-lg px-4 py-6 mb-4">
                    <p className="text-neutral-600 text-sm mb-6">
                      {treatment.description}
                    </p>
                    {treatment.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block bg-white">
          <div className="flex flex-wrap justify-around gap-4 mb-10 py-6 px-4">
            {treatments.map((treatment, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={treatment.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center w-auto p-4 text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-combination-200 hover:bg-gray-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-combination-100" />
                  )}
                  <div className="flex items-start flex-col md:justify-center ">
                    <div className="flex justify-center items-center ">
                      <img
                        src={treatment.icon}
                        alt={treatment.label}
                        className={`mx-auto mb-2 w-[40px] h-[40px] items-start ${
                          isActive ? "filter brightness-0 invert" : ""
                        }`}
                      />
                    </div>
                    <div className="font-semibold text-sm lg:text-base text-nowrap">
                      {treatment.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop Content Area: every panel is rendered (inactive ones
              hidden with CSS) so all treatment copy is in the server HTML
              for search engines, not just the default tab. */}
          {treatments.map((treatment, index) => (
            <div
              key={treatment.label}
              className={`relative rounded-lg p-8 min-h-[500px] shadow-sm bg-[#F9F9F9] ${
                selected === index ? "" : "hidden"
              }`}
            >
              <h2 className="text-2xl font-bold text-combination-200 mb-3">
                {treatment.title}
              </h2>
              <p className="text-neutral-600 text-base mb-6">
                {treatment.description}
              </p>
              {treatment.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyopiaControl;
