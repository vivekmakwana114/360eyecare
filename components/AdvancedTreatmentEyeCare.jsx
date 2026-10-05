import React from "react";
import Card from "./Card";

const AdvancedTreatmentEyeCare = () => {
  const treatments = [
    {
      title: "IPL Treatment",
      subtitle: null, // No subtitle for this usage
      description:
        "Intense Pulsed Light therapy targets the abnormal blood vessels around the eyelid margins that sustain chronic meibomian gland inflammation. Broad-spectrum light pulses heat the glands, liquefy thickened meibum, and reduce the inflammatory load that keeps the dysfunction cycle running. Highly effective for evaporative dry eye driven by MGD, particularly in patients with concurrent rosacea or lid margin telangiectasia. Typically delivered as a four-session course spaced two to four weeks apart, with maintenance sessions every six to twelve months.",
      logoSrc: null, // No logo for this usage
      catalogLink: null, // No link for this card
    },
    {
      title: "RF Treatment",
      description:
        "Radiofrequency therapy uses controlled electromagnetic heat delivered directly to the eyelid tissue to liquefy inspissated meibum and stimulate collagen production in the periocular structures that support meibomian gland function. Effective across all skin tones, making it the appropriate advanced treatment for patients who aren't suitable IPL candidates. Often combined with IPL for a more comprehensive approach to moderate to severe MGD. Results improve progressively over several weeks as collagen remodelling continues after each session.",
      isHighlighted: true, // This card will be highlighted
    },
    {
      title: "Punctal Plugs",
      description:
        "Tears drain from the ocular surface through tiny openings at the inner corners of the upper and lower eyelids called puncta. Punctal plugs are small, biocompatible inserts placed into these openings to slow tear drainage, extending the time tears remain on the ocular surface and improving lubrication. They're most appropriate for aqueous deficient dry eye and are typically considered after topical treatments have proven inadequate. Plugs can be temporary (dissolving collagen) or semi-permanent (silicone), and their insertion is a quick, painless in-office procedure.",
    },
    {
      title: "Scleral Lenses",
      description:
        "Scleral lenses are large-diameter rigid gas-permeable contact lenses that vault over the corneal surface entirely, resting on the less sensitive scleral tissue at the outer edge of the eye. The space between the back surface of the lens and the cornea is filled with preservative-free saline solution, creating a continuous fluid reservoir that keeps the corneal surface permanently bathed in moisture throughout the wearing period. For patients with severe, refractory dry eye, particularly those with significant corneal surface damage, irregular corneal topography, or conditions like Sjögren's syndrome where aqueous production is severely compromised, scleral lenses can provide a level of comfort and visual stability that no other intervention matches. They're a management tool rather than a cure, but for the right patient they're life-changing.",
    },
  ];
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[37px] font-bold text-combination-200 text-center mb-2 font-poppins">
          Advanced Treatments for Dry Eye
        </h2>
        <div className="w-24 h-1 bg-combination-100 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 mb-4">
          For patients who haven&apos;t found adequate relief with drops,
          lifestyle changes, or prescription medications, in-office procedures
          offer a different class of intervention; one that addresses the
          structural and mechanical drivers of dry eye rather than managing
          surface symptoms. These treatments are typically recommended after a
          comprehensive dry eye assessment confirms the type and severity of the
          condition and identifies which underlying mechanisms are most active.
        </p>
        <p className="text-center text-gray-600 mb-12">
          At 360 Eyecare&apos;s Yorkville and Beaches clinics, advanced dry eye
          treatments are integrated into a managed care approach. They&apos;re
          recommended as part of a treatment plan with objective follow-up, not
          offered as standalone procedures in isolation. The Keratograph 5M and
          i-PEN give us baseline data before treatment and measurable outcomes
          after it, so both you and your optometrist have a clear picture of
          what&apos;s working and what needs adjusting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              title={treatment.title}
              subtitle={treatment.subtitle}
              description={treatment.description}
              logoSrc={treatment.logoSrc}
              catalogLink={treatment.catalogLink}
              isHighlighted={treatment.isHighlighted}
            />
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6">
          Advanced treatments like these are typically recommended after more
          conservative approaches have been tried and their limitations
          assessed. Your optometrist will discuss candidacy, realistic
          expectations, and the sequencing of treatments during your dry eye
          consultation. There&apos;s no single pathway that fits every patient,
          and the right combination depends entirely on what your diagnostic
          assessment reveals.
        </p>
      </div>
    </div>
  );
};

export default AdvancedTreatmentEyeCare;
