import React from "react";
import { InModeIPLDryImage, symptomsDryImage } from "../constants/Images";
import { BOOK_BEACHES_URL, BOOK_YORKVILLE_URL } from "../constants/Constants";
import Image from "next/image";
import Link from "next/link";

const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center py-3 px-8 rounded-md w-full sm:w-auto";
const linkClass = "text-combination-200 hover:text-combination-100";
const subHeadingClass =
  "text-combination-200 text-xl md:text-[30px] font-bold mt-8 mb-4";

const clinicContacts = [
  {
    name: "360 Eyecare Yorkville",
    shortName: "Yorkville",
    address: "55 Bloor St W, Manulife Centre",
    phone: "416-901-2725",
    pageHref: "/toronto-rosedale-optometrist",
    bookHref: BOOK_YORKVILLE_URL,
  },
  {
    name: "360 Eyecare Beaches",
    shortName: "The Beaches",
    address: "2199 Queen St E",
    phone: "416-698-3937",
    pageHref: "/toronto-beaches-optometrist",
    bookHref: BOOK_BEACHES_URL,
  },
];

// Reusable components to reduce repetition
const SectionTitle = ({ children, size = "lg" }) => {
  const sizeClasses = {
    lg: "text-3xl md:text-4xl",
    md: "text-2xl md:text-3xl",
    sm: "text-xl md:text-2xl",
  };

  return (
    <>
      <h2
        className={`${sizeClasses[size]} font-bold text-combination-200 mb-4`}
      >
        {children}
      </h2>
      <div className="w-16 h-0.5 bg-combination-100 mt-2" />
    </>
  );
};

// `text` may be a single paragraph or an array of paragraphs
const ListItem = ({ heading, text, headingClass = "text-neutral-500" }) => (
  <li className="ml-4">
    <strong className={`text-base font-bold mb-8 ${headingClass}`}>
      {heading}
    </strong>
    {[].concat(text).map((para, index) => (
      <p key={index} className={`text-neutral-500 ${index > 0 ? "mt-4" : ""}`}>
        {para}
      </p>
    ))}
  </li>
);

// Plain bullet list for short items without headings
const BulletList = ({ items }) => (
  <ul className="list-disc list-inside space-y-2 text-neutral-500 mt-4 ml-4">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

// Booking buttons for both clinics, e.g. "Book an IPL Consultation — Yorkville"
const BookingButtons = ({ label, withPhone = false }) => (
  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-6">
    {clinicContacts.map((clinic) => (
      <Link key={clinic.name} href={clinic.bookHref} className={bookButtonClass}>
        {label} — {clinic.shortName}
        {withPhone && `: ${clinic.phone}`}
      </Link>
    ))}
  </div>
);

// Clinic addresses + phone numbers followed by per-clinic booking buttons
const ClinicBookingCTA = ({ label }) => (
  <div className="mt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-500">
      {clinicContacts.map((clinic) => (
        <p key={clinic.name}>
          <Link href={clinic.pageHref} className={`${linkClass} font-bold`}>
            {clinic.name}
          </Link>{" "}
          — {clinic.address}
          <br />
          <a href={`tel:+1-${clinic.phone}`} className={linkClass}>
            📞 {clinic.phone}
          </a>
        </p>
      ))}
    </div>
    <BookingButtons label={label} />
  </div>
);

const symptomsData = [
  {
    head: "The Burn:",
    para: "A persistent burning or stinging sensation is the classic dry eye presentation. It typically worsens throughout the day as the tear film repeatedly destabilises and the ocular surface accumulates microtrauma with each blink. Patients often describe it as similar to having soap or chlorine in their eyes; an apt comparison, since the surface inflammation driving the burn has a similar mechanism to chemical irritation.",
  },
  {
    head: "The Itch:",
    para: "Dry eye itch tends to concentrate at the inner and outer corners of the eye and along the lash line, and it worsens noticeably during extended screen sessions or by late afternoon. It's easily confused with allergic conjunctivitis. The key distinction is that allergy-driven itch typically comes with watery eyes and is seasonal, whereas dry eye itch is accompanied by grittiness and persists year-round. In Toronto, where airborne allergens and dry winter air overlap significantly from February through April, the two conditions frequently coexist and amplify each other.",
  },
  {
    head: "Redness:",
    para: "Surface inflammation causes visible redness in the whites of the eyes. In dry eyes, this tends to be diffuse rather than localised. Persistent redness that doesn't resolve with lubricating drops is a signal that inflammation is the primary driver and needs to be addressed directly rather than masked.",
  },
  {
    head: "Blurry or Fluctuating Vision:",
    para: "The tear film functions as the first refractive surface of the eye. When the tear film is unstable, that refractive surface becomes irregular, and vision blurs. The characteristic pattern is vision that deteriorates over several seconds after a blink, then briefly clears when you blink again as a fresh tear film is laid down. If you've noticed your vision going in and out of focus during reading or screen work, this cycle is likely what you're experiencing.",
  },
  {
    head: "Light Sensitivity:",
    para: "An inflamed, poorly lubricated ocular surface becomes hypersensitive to light, particularly bright overhead lighting, oncoming headlights at night, and reflected glare from screens. Patients who find themselves squinting indoors or avoiding well-lit environments often assume they need a new glasses prescription. Light sensitivity driven by dry eye doesn't improve with a prescription change; it improves when the underlying surface condition is treated.",
  },
  {
    head: "Eye Fatigue:",
    para: "Maintaining visual focus requires constant blink-by-blink tear film renewal. When that renewal is compromised, the visual system works harder to maintain clarity, producing a fatigue that feels similar to the tiredness of sustained concentration but is actually driven by surface instability. For patients working long hours on screens, eye fatigue driven by dry eye is frequently the symptom that finally prompts them to book an appointment.",
  },
  {
    head: "Excessive Tearing:",
    para: "Counterintuitive but common. When the ocular surface becomes sufficiently irritated, the lacrimal glands produce a flood of reflex tears as a protective response. These tears are aqueous-heavy and oil-poor. They wash across the surface but don't stabilise the tear film, so they provide brief relief before evaporating rapidly and leaving the surface more exposed than before. Patients who describe their eyes as constantly watering, particularly outdoors in wind or cold, are frequently experiencing dry eye rather than excess tear production.",
  },
];

const keratographMeasures = [
  {
    head: "Non-invasive tear breakup time (NIKBUT):",
    para: "Tracks exactly how long the tear film remains stable after a blink without the need for dye or eye drops, giving a true, undisturbed measurement of tear film stability.",
  },
  {
    head: "Tear meniscus height:",
    para: "Measures the volume of the aqueous tear layer sitting along the lower lid margin, helping distinguish aqueous deficient dry eye from evaporative dry eye.",
  },
  {
    head: "Meibography:",
    para: "Infrared imaging of the meibomian glands in both upper and lower lids, allowing direct visualisation of gland structure, dropout patterns, and atrophy. This is the only way to see what's actually happening inside the glands rather than inferring it from surface symptoms.",
  },
  {
    head: "Lipid layer assessment:",
    para: "Evaluates the thickness and quality of the oily outer tear film layer, identifying instability before it produces noticeable symptoms.",
  },
  {
    head: "Bulbar redness grading:",
    para: "Objective, standardised measurement of ocular surface redness that removes the subjectivity of visual assessment.",
  },
  {
    head: "Pupillometry:",
    para: "Measures pupil response in natural lighting conditions as part of the broader ocular health picture.",
  },
];

const diagnosisData = [
  {
    head: "Meibography:",
    para: "Already described in the Keratograph 5M section above, meibography deserves emphasis as a standalone diagnostic step. Infrared imaging of the meibomian glands is the only reliable way to assess gland structure directly, to see how much secretory tissue remains intact, where dropout has occurred, and whether the pattern of dysfunction is consistent with blockage, atrophy, or inflammatory damage. This information directly determines which treatments are appropriate and which are likely to be ineffective.",
  },
  {
    head: "Schirmer Tear Test:",
    para: "A straightforward assessment of aqueous tear production. A small strip of absorbent paper is placed beneath the lower eyelid for five minutes, and the length of paper wetted by tear production is measured. Low Schirmer values confirm aqueous deficient dry eye and help identify candidates for treatments aimed at increasing tear production rather than improving tear quality.",
  },
  {
    head: "Tear Breakup Time (TBUT):",
    para: "A drop of fluorescein dye is applied to the eye, and the time between a complete blink and the first break in the stained tear film is measured under a slit lamp. A short breakup time, typically under ten seconds, confirms tear film instability. Used alongside NIKBUT from the Keratograph 5M, TBUT provides both dye-assisted and non-invasive measurements of the same parameter, giving a more complete picture than either test alone.",
  },
  {
    head: "Ocular Surface Staining:",
    para: "Fluorescein and lissamine green dyes are used to highlight damage to the corneal and conjunctival epithelium caused by dry eye. Areas of staining indicate where the surface has been compromised by repeated desiccation and inflammation, providing both a severity assessment and a baseline for monitoring healing during treatment.",
  },
];

const treatmentSections = [
  {
    title: "Over-the-Counter Solutions:",
    intro:
      "First-line management for mild to moderate dry eye, appropriate for patients whose symptoms are intermittent and whose gland structure remains relatively intact.",
    items: [
      {
        head: "Artificial Tears:",
        paras: [
          "Lubricating eye drops are the most widely used dry eye intervention and the most widely misused. They provide symptomatic relief by temporarily supplementing the aqueous layer of the tear film, but they don't address the underlying cause of instability, and they wear off quickly. For patients with evaporative dry eye driven by MGD, artificial tears are particularly limited because they don't replace the missing oily layer.",
          "If you're using artificial tears, the formulation matters. Preservative-free options in individual vials are significantly better tolerated with frequent use. The preservatives in multi-dose bottles, particularly benzalkonium chloride (BAK), can damage the corneal epithelium over time and paradoxically worsen surface inflammation in chronic dry eye. Drops containing lipid components or hyaluronic acid tend to provide longer-lasting relief than basic saline-based formulations.",
        ],
      },
      {
        head: "Lubricating Ointments:",
        paras: [
          "Thicker than drops and not suitable for use while awake because they blur vision significantly. These ointments are most useful applied at bedtime for patients whose eyes dry out overnight or who wake with significant morning stiffness and irritation. Patients who sleep with their eyes partially open (nocturnal lagophthalmos) often find ointments transformative for morning comfort even when daytime symptoms are relatively mild.",
        ],
      },
    ],
  },
  {
    title: "Prescription Medications:",
    intro:
      "For patients with moderate dry eye where inflammation is a significant driver, or where aqueous production is genuinely insufficient.",
    items: [
      {
        head: "Cyclosporine Eye Drops (Restasis, Cequa):",
        paras: [
          "Cyclosporine is an immunomodulatory agent that reduces the T-cell mediated inflammation driving chronic dry eye disease. It doesn't provide immediate symptomatic relief. Most patients need three to six months of consistent use before experiencing meaningful improvement, but it addresses the inflammatory cycle at the source rather than masking surface symptoms. It's particularly effective for aqueous deficient dry eye associated with autoimmune conditions.",
        ],
      },
      {
        head: "Topical Corticosteroids:",
        paras: [
          "Short courses of mild topical steroids are sometimes prescribed to break the acute inflammatory cycle in patients presenting with significant surface inflammation. They work faster than cyclosporine but aren't appropriate for long-term use due to the risk of elevated intraocular pressure and cataract formation with extended treatment.",
        ],
      },
      {
        head: "Oral Antibiotics:",
        paras: [
          "Doxycycline and azithromycin have well-established anti-inflammatory effects on the meibomian glands that are distinct from their antibiotic properties. Low-dose oral doxycycline in particular is frequently used as an adjunct in moderate to severe MGD to reduce lid margin inflammation and improve meibum quality. It works slowly (expect eight to twelve weeks before assessing response) but can produce meaningful improvement in gland function in patients who haven't responded adequately to warm compresses and eyelid hygiene alone.",
        ],
      },
    ],
  },
  {
    title: "Lifestyle and Environmental Changes:",
    intro:
      "Often underestimated, lifestyle modifications can produce meaningful symptom improvement, particularly for patients whose dry eye is driven or worsened by environmental exposure and screen habits.",
    items: [
      {
        head: "Manage Your Screen Environment:",
        paras: [
          "Prolonged screen use reduces blink rate from a normal fifteen to twenty blinks per minute to as few as five or six, and incomplete blinks, where the eyelids don't fully close, are even more damaging to tear film stability than reduced blink frequency. The 20-20-20 rule helps, but conscious blinking practice is more directly effective. Make a deliberate effort to blink fully and completely during screen sessions, not just frequently.",
        ],
      },
      {
        head: "Address Your Indoor Air:",
        paras: [
          "Dry indoor air is one of the most significant and most overlooked environmental drivers of dry eye, particularly in Toronto where forced-air heating runs from October through April and reduces indoor humidity to levels that accelerate tear evaporation significantly. A humidifier set to maintain indoor humidity between 40 and 60 percent can meaningfully reduce dry eye symptoms during winter months. Positioning air vents, fans, and car air conditioning outlets away from direct eye exposure reduces evaporative stress during the hours you're most symptomatic.",
        ],
      },
      {
        head: "Protect Your Eyes Outdoors:",
        paras: [
          "Wind is a significant tear film disruptor, particularly relevant for patients at our Beaches clinic who spend time near the waterfront. Wraparound frames or moisture-chamber glasses create a protected micro-environment around the eyes that substantially reduces wind-driven tear evaporation. UV exposure also contributes to ocular surface inflammation, making sunglasses a functional rather than purely aesthetic choice for dry eye patients.",
        ],
      },
      {
        head: "Nutrition:",
        paras: [
          "Omega-3 fatty acids have the strongest evidence base among nutritional interventions for dry eye. They work by improving the fatty acid composition of meibum, reducing its viscosity and making it less likely to solidify and block gland orifices. Adequate hydration supports overall tear production, though the relationship between systemic hydration and dry eye is less direct than commonly assumed.",
        ],
      },
    ],
  },
];

const iplSessions = [
  {
    head: "Session 1:",
    para: "Initial treatment; many patients notice some reduction in symptoms within the first week, though significant improvement typically requires multiple sessions.",
  },
  {
    head: "Sessions 2 and 3:",
    para: "Progressive improvement in gland function and tear film stability; most patients report meaningful symptom reduction by the third session.",
  },
  {
    head: "Session 4:",
    para: "Consolidation treatment; the majority of clinical improvement occurs across the full four-session course.",
  },
];

const iplCandidates = [
  "Evaporative dry eye driven by MGD",
  "Rosacea or rosacea-associated eyelid inflammation",
  "Chronic lid margin telangiectasia",
  "Demodex infestation contributing to gland dysfunction",
  "Dry eye that hasn't responded adequately to drops, warm compresses, and eyelid hygiene",
];

const rfMechanisms = [
  {
    head: "Meibum Liquefaction:",
    para: "The meibomian glands in the upper and lower eyelids are targeted directly by the RF handpiece. The controlled heat softens and liquefies thickened or solidified meibum. As the meibum becomes fluid again, gland expression becomes possible and effective, clearing blockages that have been restricting oil flow to the tear film. Following RF treatment, your optometrist performs meibomian gland expression to clear the softened contents — the same combination approach used after IPL.",
  },
  {
    head: "Collagen Stimulation and Eyelid Structural Support:",
    para: "RF energy stimulates fibroblast activity in the periocular skin and connective tissue, triggering new collagen synthesis. As we age, collagen production in the eyelid tissues naturally declines — the delicate skin around the eyes thins, the structures that support the meibomian glands weaken, and gland function deteriorates partly as a consequence of that structural degradation. RF-stimulated collagen production rebuilds that structural matrix, creating firmer, better-supported eyelid tissue that maintains gland position and function more effectively. The collagen remodelling process continues for several weeks to months after each treatment session, which is part of why improvement is progressive rather than immediate.",
  },
];

const rfProtocol = [
  {
    head: "The Treatment Session:",
    para: [
      "Each RF session takes approximately 15 to 20 minutes. The RF handpiece is moved across the eyelids and surrounding tissue in a controlled pattern, delivering heat to the target tissue while maintaining surface temperature within a safe and comfortable range. Most patients describe the sensation as a warm massage. The treatment is well-tolerated without anaesthesia, though a topical numbing agent can be applied if preferred.",
      "Following the RF application, meibomian gland expression is performed to clear the softened meibum from the treated glands. Your optometrist may also apply a cooling gel to the periocular skin following treatment.",
    ],
  },
  {
    head: "Recovery and Downtime:",
    para: "None required. Patients return to normal activities immediately. The skin around the eyes may appear mildly flushed for a few hours, and some patients experience a temporary increase in eye watering as the freshly expressed glands begin secreting more normally. This is a positive sign that the treatment is working, not a cause for concern.",
  },
  {
    head: "Treatment Course:",
    para: "A standard course involves three to four sessions spaced two to four weeks apart, though the precise protocol is tailored to each patient based on their diagnostic findings and response to treatment. Maintenance sessions every six to twelve months are typically recommended to sustain results, particularly in patients with significant gland atrophy where ongoing structural support is important.",
  },
];

const rfVsIpl = [
  {
    head: "IPL:",
    para: "Targets the abnormal blood vessels around the eyelid margins that drive inflammatory MGD. It's the primary treatment for rosacea-associated dry eye and for patients with significant lid margin telangiectasia. It also reduces demodex load and provides thermal stimulation to the glands through light energy.",
  },
  {
    head: "RF:",
    para: "Targets the meibomian glands directly through resistive heating and stimulates structural collagen in the eyelid tissue. It's effective across all skin tones, works on the structural dimension of gland dysfunction, and adds collagen remodelling benefits that IPL doesn't provide.",
  },
  {
    head: "Combined IPL + RF:",
    para: "Addresses both the vascular inflammatory drivers and the structural thermal dimension simultaneously, producing more comprehensive treatment of MGD than either modality alone. For patients with moderate to severe MGD, combination therapy is the approach most likely to produce durable improvement.",
  },
];

const rfCandidates = [
  "Evaporative dry eye driven by MGD — particularly where meibum is significantly thickened or solidified",
  "Dry eye that hasn't responded adequately to warm compresses, drops, or eyelid hygiene alone",
  "Skin types that preclude IPL treatment",
  "Patients seeking combination therapy for moderate to severe MGD",
  "Age-related eyelid structural changes contributing to gland dysfunction",
];

const Symptoms = () => {
  // Reusable list rendering function
  const renderList = (items, headingClass = "text-neutral-500") => (
    <ul className="list-disc list-inside space-y-8 md:mt-8 mt-4">
      {items.map((item, index) => (
        <ListItem
          key={index}
          heading={item.head}
          text={item.para}
          headingClass={headingClass}
        />
      ))}
    </ul>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8 md:my-16">
      <section>
        <SectionTitle>Symptoms of Dry Eye</SectionTitle>
        <p className="text-neutral-500 mt-4">
          Dry eye symptoms don&apos;t always look the way people expect. The
          condition gets its name from the sensation of dryness. But for many
          patients, the most prominent symptom is actually excessive tearing.
          Others present primarily with blurry vision, headaches from eye
          strain, or an inexplicable sensitivity to light that they&apos;ve been
          attributing to migraines or screen fatigue for years. Dry eye is a
          condition that disguises itself well, which is one reason it so often
          goes undiagnosed for so long.
        </p>
        <p className="text-neutral-500 mt-4">
          What makes it more complicated is that symptom severity doesn&apos;t
          always reflect disease severity. Some patients with significant
          meibomian gland dropout report only mild discomfort, while others
          with relatively intact gland structure experience debilitating
          symptoms. This disconnect between how bad things feel and how bad
          they actually are is why a proper diagnostic assessment is the only
          reliable way to understand what&apos;s happening and what to do about
          it.
        </p>
        <p className="text-neutral-500 mt-4">
          The most common symptoms of dry eye include:
        </p>
      </section>

      {renderList(symptomsData)}

      {/* Infographic sits after the list as a visual summary of it */}
      <div className="flex justify-center items-center mt-10 md:mt-20">
        <Image
          src={symptomsDryImage}
          alt="Dry eye symptoms"
          width={847}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <section className="mt-8 md:mt-12">
        <SectionTitle size="md">Diagnosis of Dry Eye</SectionTitle>
        <p className="text-neutral-500 mt-4">
          Dry eye is one of those conditions where what you feel and what&apos;s
          actually happening don&apos;t always align. Symptoms can be severe
          while structural damage is relatively mild, or gland atrophy can be
          well advanced while daily discomfort remains manageable. Treating
          based on symptoms alone (which is what most over-the-counter dry eye
          management amounts to) misses the underlying pathology and produces
          inconsistent results.
        </p>
        <p className="text-neutral-500 mt-4">
          A proper dry eye diagnosis starts with understanding the type,
          severity, and root cause of the condition before a single treatment
          decision is made. At 360 Eyecare, that means a structured diagnostic
          assessment using clinical tools that go well beyond what most Toronto
          optometry clinics carry.
        </p>

        <h3 className="text-xl font-bold text-combination-200 mt-6 mb-2">
          Our Diagnostic Technology
        </h3>

        <h4 className="text-lg font-bold text-combination-200 mt-6 mb-2">
          OCULUS Keratograph 5M
        </h4>
        <p className="text-neutral-500 mt-4">
          The Keratograph 5M is the most advanced corneal topographer and dry
          eye imaging system available in community optometry. At 360 Eyecare,
          it&apos;s the centrepiece of our dry eye diagnostic process, and one
          of the primary reasons patients come to our Yorkville and Beaches
          clinics specifically for dry eye care after being managed elsewhere
          without resolution.
        </p>
        <p className="text-neutral-500 mt-4">Here&apos;s what it measures:</p>
        {renderList(keratographMeasures)}
        <p className="text-neutral-500 mt-8">
          The Keratograph 5M produces a comprehensive, documented baseline that
          allows your optometrist to track structural changes over time and
          measure treatment response objectively.
        </p>

        <h4 className="text-lg font-bold text-combination-200 mt-6 mb-2">
          i-PEN Osmolarity System
        </h4>
        <p className="text-neutral-500 mt-4">
          Tear osmolarity (the concentration of salts and proteins in the tear
          fluid) is currently the most sensitive and specific single biomarker
          for dry eye disease. Elevated osmolarity indicates tear film
          instability and ocular surface stress, and the degree of elevation
          correlates with disease severity. It&apos;s also one of the best
          available objective measures of treatment response: as dry eye
          improves with therapy, osmolarity values normalise.
        </p>
        <p className="text-neutral-500 mt-4">
          The i-PEN measures tear osmolarity in seconds with a brief, painless
          touch of a sterile sensor tip to the lower eyelid margin. No drops, no
          dye, no discomfort. Results are immediate and quantified, giving your
          optometrist a precise, objective data point to anchor the diagnosis
          and track progress at follow-up appointments.
        </p>
        <p className="text-neutral-500 mt-4">
          In clinical practice, osmolarity testing is particularly valuable for
          patients who question whether their symptoms are really dry eyes, or
          whose symptoms have fluctuated enough to make pattern recognition
          difficult. The number doesn&apos;t lie.
        </p>

        {renderList(diagnosisData)}
      </section>

      <section className="mt-8 md:mt-12">
        <SectionTitle size="md">
          Why a Professional Dry Eye Diagnosis Matters
        </SectionTitle>
        <p className="text-neutral-500 mt-4">
          Dry eye symptoms overlap with several other conditions: allergic
          conjunctivitis, blepharitis, contact lens intolerance, anterior
          uveitis, and even refractive error can all produce similar
          presentations. Treating dry eye without ruling out these alternatives
          can delay appropriate care and, in some cases, make things worse.
        </p>
        <p className="text-neutral-500 mt-4">
          A comprehensive assessment at 360 Eyecare&apos;s Yorkville or Beaches
          clinic identifies the type, quantifies the severity, documents the
          structural health of the glands, and rules out coexisting conditions.
          That complete picture is what allows us to build a treatment plan
          with a realistic prognosis rather than a trial-and-error approach.
        </p>
        <p className="text-neutral-500 mt-4">
          Dry eye also has a well-established relationship with systemic
          health. Autoimmune conditions, thyroid disease, hormonal changes, and
          certain medications are all common contributors, and identifying that
          link can be relevant to a patient&apos;s broader healthcare picture,
          not just their ocular comfort.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <SectionTitle size="md">
          Not Sure If You Have Dry Eye? Start With a Diagnosis.
        </SectionTitle>
        <p className="text-neutral-500 mt-4">
          Most patients who come to 360 Eyecare for dry eye care have already
          spent months (sometimes years) managing symptoms with drops that help
          a little but never fully resolve the problem. A proper diagnostic
          assessment tells you exactly what type of dry eye you have, how severe
          it is, and which treatments are most likely to work for your specific
          situation.
        </p>
        <p className="text-neutral-500 mt-4">
          Both our Yorkville and Beaches clinics offer comprehensive dry eye
          assessments using the OCULUS Keratograph 5M and i-PEN osmolarity
          testing. New patients are welcome.
        </p>
        <ClinicBookingCTA label="Book a Dry Eye Assessment" />
      </section>

      <section className="mt-8 md:mt-12">
        <h2 className="text-2xl md:text-[37px] font-bold text-combination-200 mb-4">
          Treatment Options for Dry Eye
        </h2>
        <div className="w-16 h-0.5 bg-combination-100 mt-2" />
        <p className="text-neutral-500 mt-4">
          Dry eye treatment isn&apos;t one-size-fits-all, and at 360 Eyecare, we
          don&apos;t approach it that way. The right treatment depends on which
          type of dry eye you have, how severe it is, what&apos;s driving it,
          and how your glands and ocular surface have responded to anything
          you&apos;ve already tried. What follows is an overview of the full
          treatment spectrum, from first-line options you can start at home to
          advanced in-office procedures for chronic or refractory cases.
        </p>
        <p className="text-neutral-500 mt-4">
          For most patients, treatment is staged, beginning with the least
          invasive approaches and escalating where needed. Some patients achieve
          lasting relief with lifestyle changes and prescription drops alone.
          Others need in-office procedures to address structural gland
          dysfunction that no amount of drops can fix. The diagnostic
          assessment determines which category you fall into, which is why
          starting there matters.
        </p>

        {/* Treatment sections */}
        {treatmentSections.map((section) => (
          <div key={section.title} className="mt-4">
            <h3 className="text-xl font-bold text-combination-200 mt-6 mb-2">
              {section.title}
            </h3>
            <p className="text-neutral-500 mb-4">{section.intro}</p>
            <ul className="list-disc list-inside space-y-4 text-neutral-500 ml-4">
              {section.items.map((item) => (
                <li key={item.head}>
                  <strong className="font-bold mb-4 ">{item.head}</strong>
                  {item.paras.map((para) => (
                    <p key={para} className="text-neutral-500 mt-4">
                      {para}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="flex justify-center mt-8">
        <BookingButtons label="Book a Dry Eye Consultation" withPhone />
      </div>

      <section className="md:mt-10 mt-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="md:w-[49%]">
            <h2 className="text-combination-200 text-2xl md:text-[37px] font-bold mb-4">
              InMode IPL for Dry Eye Relief
            </h2>
            <hr className="w-20 h-1 bg-combination-100 mb-4" />
            <p className="text-neutral-500">
              Intense Pulsed Light therapy has been used in dermatology for
              decades, primarily for rosacea, hyperpigmentation, and skin
              rejuvenation. Its application to dry eye treatment came from an
              observation that patients receiving facial IPL for rosacea were
              also reporting significant improvement in their dry eye symptoms.
              That observation led to dedicated research into IPL as a targeted
              dry eye therapy, and the evidence base has grown substantially
              over the past decade.
            </p>
            <p className="text-neutral-500 mt-4">
              At 360 Eyecare, we use the InMode IPL system (one of the most
              clinically validated platforms for dry eye treatment) at both our
              Yorkville and Beaches clinics. It&apos;s currently one of the most
              effective treatments available for evaporative dry eye driven by
              meibomian gland dysfunction, and for patients who&apos;ve cycled
              through drops and warm compresses without lasting relief, it
              frequently produces results that those approaches simply
              can&apos;t.
            </p>
            <h3 className={subHeadingClass}>How IPL Works for Dry Eye</h3>
            <p className="text-neutral-500">
              IPL delivers controlled pulses of broad-spectrum light to the skin
              around the eyes, typically the lower eyelids, upper cheeks, and
              temples. The light energy is absorbed by the abnormal blood
              vessels (telangiectasia) that develop around the eyelid margins in
              patients with chronic MGD and rosacea-associated dry eye. Those
              vessels are a primary driver of the inflammatory cycle that keeps
              meibomian glands blocked and dysfunctional; eliminating them
              reduces the chronic inflammatory load on the glands significantly.
            </p>
            <p className="text-neutral-500 mt-4">
              Simultaneously, the light energy heats the meibomian glands
              through the skin, liquefying thickened or solidified meibum and
              improving gland secretion. Following each IPL session, your
              optometrist will perform meibomian gland expression to manually
              clear the softened gland contents.
            </p>
            <p className="text-neutral-500 mt-4">
              IPL also has a direct effect on demodex mites — microscopic
              organisms that colonise the eyelash follicles and meibomian glands
              in a significant proportion of dry eye patients, particularly
              those over 50. The light pulses reduce demodex load, which removes
              another driver of lid margin inflammation and gland dysfunction.
            </p>
          </div>
          <div className="md:w-[49%]">
            <Image
              src={InModeIPLDryImage}
              alt="Dry eye symptoms"
              width={585}
              height={780}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className={subHeadingClass}>What to Expect: The Treatment Protocol</h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          IPL for dry eye is not a single-session fix. The standard protocol at
          360 Eyecare involves four treatment sessions, typically spaced two to
          four weeks apart. This spacing allows the inflammatory response to
          resolve between sessions and gives the glands time to begin
          functioning more normally before the next treatment.
        </p>
        <p className="text-neutral-500 mt-4">Session by session:</p>
        {renderList(iplSessions)}
        <p className="text-neutral-500 mt-8">
          Each session takes approximately 15 to 20 minutes. There is no
          recovery time; patients return to normal activities immediately. The
          skin around the eyes may appear slightly flushed for a few hours
          following treatment, which resolves on its own.
        </p>
        <p className="text-neutral-500 mt-4">
          <strong>Maintenance:</strong> Most patients benefit from maintenance
          sessions every six to twelve months following the initial course,
          depending on the severity of their MGD and the durability of their
          response. Your optometrist will recommend a maintenance schedule based
          on your Keratograph follow-up assessments.
        </p>

        <h3 className={subHeadingClass}>Clinical Results</h3>
        <p className="text-neutral-500">
          Studies on IPL for dry eye consistently show meaningful improvement
          across objective measures. Research published in peer-reviewed
          optometry and ophthalmology journals has demonstrated improvements in
          tear breakup time, meibum quality scores, and meibomian gland
          expressibility following a four-session IPL course, with up to 87% of
          patients reporting symptomatic improvement. Objective improvements in
          Keratograph measurements allow 360 Eyecare optometrists to track
          treatment response precisely rather than relying solely on how
          patients feel between appointments.
        </p>

        <h3 className={subHeadingClass}>Is IPL Right for You?</h3>
        <p className="text-neutral-500">IPL is most effective for patients with:</p>
        <BulletList items={iplCandidates} />
        <p className="text-neutral-500 mt-4">
          IPL is not appropriate for all skin tones. The light energy targets
          pigment in blood vessels, and higher Fitzpatrick skin types absorb
          more of the energy into the skin itself, which can cause adverse
          reactions. Your optometrist will assess your suitability at the
          initial dry eye consultation before recommending IPL. Patients who are
          pregnant, taking photosensitising medications, or have active skin
          infections in the treatment area are also not candidates for IPL at
          that time.
        </p>

        <h3 className={subHeadingClass}>
          IPL at 360 Eyecare — Yorkville &amp; The Beaches
        </h3>
        <p className="text-neutral-500">
          Both our Toronto clinics offer InMode IPL as part of our comprehensive
          dry eye treatment program. IPL is typically recommended following a
          full dry eye diagnostic assessment, including Keratograph 5M imaging
          and i-PEN osmolarity testing, so that we have objective baseline data
          to compare against at follow-up and can track your response
          accurately across the treatment course.
        </p>
        <p className="text-neutral-500 mt-4">
          If you&apos;ve been told you have MGD, if your dry eye hasn&apos;t
          responded to conventional management, or if you have rosacea
          alongside persistent dry eye symptoms, IPL may be the most appropriate
          next step.
        </p>
        <ClinicBookingCTA label="Book an IPL Consultation" />
      </section>

      <section className="mt-8">
        <h2 className="text-combination-200 text-2xl md:text-[37px] font-bold mt-4 mb-4">
          InMode RF for Dry Eye Relief
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          Radiofrequency therapy has a long track record in aesthetic medicine.
          It&apos;s been used for skin tightening and collagen stimulation for
          over two decades. Its application to dry eye treatment follows a
          similar logic to IPL: the technology was already proven, the mechanism
          was relevant to eyelid and meibomian gland health, and clinical
          observation confirmed that patients with dry eye were benefiting from
          treatment directed at the periocular tissues.
        </p>
        <p className="text-neutral-500 mt-4">
          At 360 Eyecare, we use the InMode RF system alongside IPL as part of
          our advanced dry eye treatment program at both the Yorkville and
          Beaches clinics. Where IPL primarily targets the vascular inflammation
          driving MGD, RF addresses the structural and thermal dimension —
          liquefying inspissated meibum, improving eyelid tissue health, and
          stimulating the collagen matrix that supports meibomian gland
          function. Used together, they address the condition from
          complementary angles, which is why combination IPL and RF therapy
          tends to produce better outcomes than either treatment alone for
          patients with moderate to severe MGD.
        </p>
      </section>

      <section className="mt-6">
        <h3 className={subHeadingClass}>How RF Works for Dry Eye</h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          Radiofrequency therapy delivers controlled electromagnetic energy to
          the eyelid and periocular tissues. Unlike IPL, which works through
          light absorbed by pigmented blood vessels, RF energy penetrates tissue
          regardless of skin pigmentation, generating heat uniformly through
          resistive heating of the tissue itself. This makes RF appropriate for
          a broader range of skin tones than IPL alone, and for patients who
          aren&apos;t suitable IPL candidates due to Fitzpatrick skin type, RF
          may be offered as a standalone treatment.
        </p>
        <p className="text-neutral-500 mt-4">
          The thermal effects of RF on dry eye work through two primary
          mechanisms:
        </p>
        {renderList(rfMechanisms)}
      </section>

      <section className="mt-6">
        <h3 className={subHeadingClass}>The Treatment Protocol</h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          RF treatment at 360 Eyecare is typically delivered as part of a
          combined IPL and RF protocol, with RF either immediately preceding or
          following the IPL treatment in the same appointment. For patients
          receiving RF as a standalone treatment, the session structure is
          similar to IPL.
        </p>
        {renderList(rfProtocol)}
      </section>

      <section className="mt-6">
        <h3 className={subHeadingClass}>The Difference Between RF and IPL</h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          Patients are often uncertain about the distinction between RF and
          IPL, and whether they need one or both. Here&apos;s the practical
          difference:
        </p>
        {renderList(rfVsIpl)}
        <p className="text-neutral-500 mt-8">
          Your optometrist will recommend the appropriate treatment or
          combination based on your Keratograph findings, i-PEN osmolarity
          results, clinical presentation, and skin type assessment.
        </p>
      </section>

      <section className="mt-6">
        <h3 className={subHeadingClass}>Is RF Right for You?</h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500">RF is appropriate for patients with:</p>
        <BulletList items={rfCandidates} />
        <p className="text-neutral-500 mt-4">
          Unlike IPL, RF has no skin tone contraindications. It&apos;s
          appropriate for all Fitzpatrick skin types. It is not recommended for
          patients with certain metallic implants near the treatment area,
          active eyelid infections, or who are pregnant.
        </p>
      </section>

      <section className="mt-6">
        <h3 className={subHeadingClass}>
          RF at 360 Eyecare — Yorkville &amp; The Beaches
        </h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          InMode RF is available at both our Yorkville clinic on Bloor Street
          West and our Beaches clinic on Queen Street East, as part of our
          full-scope advanced dry eye treatment program. As with IPL, RF
          treatment is recommended following a comprehensive dry eye diagnostic
          assessment so that your optometrist has objective baseline data to
          compare against at follow-up appointments and track your response
          across the treatment course.
        </p>
        <p className="text-neutral-500 mt-4">
          If you&apos;ve been managing dry eye without lasting relief, or if a
          previous optometrist has mentioned that your meibomian glands are
          blocked or showing atrophy, RF — alone or in combination with IPL —
          may be the intervention that finally moves the needle.
        </p>
        <ClinicBookingCTA label="Book an RF Consultation" />
      </section>
    </div>
  );
};

export default Symptoms;
