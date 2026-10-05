import React from "react";

// Top-level prevention topics. `intro` renders beside the bold heading,
// `subItems` render as the nested bullet list, `paras` as follow-up paragraphs.
const preventionTopics = [
  {
    head: "Hydration:",
    intro:
      "The relationship between systemic hydration and tear production is real but modest. Adequate fluid intake supports overall physiological function including lacrimal gland output, but drinking more water won't compensate for structural MGD or significant aqueous deficiency. That said, mild dehydration does measurably reduce tear volume and is an easily correctable contributing factor for patients on the milder end of the dry eye spectrum. Eight glasses of water per day is a reasonable baseline; more if you exercise regularly, work in air-conditioned environments, or consume significant amounts of caffeine or alcohol, both of which have mild diuretic effects that reduce overall hydration.",
  },
  {
    head: "Blink Habits and Screen Management:",
    intro:
      "Consciously managing how you blink during screen use is one of the highest-impact preventive habits for dry eye and one of the least discussed. The issue isn't just blink frequency. It's blink completeness. During sustained screen use, a significant proportion of blinks are incomplete — the upper eyelid descends partway but doesn't make full contact with the lower lid. Incomplete blinks don't spread the tear film fully across the corneal surface and don't adequately stimulate meibomian gland secretion. Over time, habitual incomplete blinking is a significant driver of MGD progression. Practical habits that help:",
    subItems: [
      {
        text: "Blink fully and deliberately during screen sessions — close your eyes completely, pause for a fraction of a second, then reopen.",
      },
      {
        text: "Use the 20-20-20 rule as a minimum — every twenty minutes, look at something twenty feet away for twenty seconds.",
      },
      {
        text: "Reduce screen brightness and increase contrast to reduce the visual effort that drives incomplete blinking.",
      },
      {
        text: "Position screens slightly below eye level. Looking slightly downward reduces the exposed ocular surface area and slows tear evaporation between blinks.",
      },
      {
        text: "Consider taking short screen breaks every 45 to 60 minutes rather than relying solely on the 20-20-20 interval.",
      },
    ],
  },
  {
    head: "Indoor Environment:",
    intro:
      "Managing your indoor environment during Toronto winters is one of the most underutilised dry eye prevention strategies. A few specific adjustments make a meaningful difference:",
    subItems: [
      {
        head: "Humidify your primary spaces:",
        text: "A humidifier that maintains indoor relative humidity between 40 and 60 percent significantly reduces tear evaporation. Most Toronto homes and offices run well below this range during heating season.",
      },
      {
        head: "Redirect air vents and fans:",
        text: "Forced air directed at the face is one of the most immediate tear film disruptors. Repositioning desk fans, adjusting vent direction, and using a car's air conditioning on recirculate rather than direct-to-face modes all reduce evaporative stress.",
      },
      {
        head: "Filter indoor air:",
        text: "HEPA filtration reduces airborne particulates and allergens that contribute to ocular surface inflammation, particularly relevant during spring pollen season when dry eye and allergic conjunctivitis commonly coexist.",
      },
      {
        head: "Lower thermostat settings where possible:",
        text: "Cooler indoor temperatures reduce the demand on forced-air heating systems and help maintain slightly higher indoor humidity.",
      },
    ],
  },
  {
    head: "Outdoor Protection:",
    intro:
      "Wind, UV radiation, and cold dry air all stress the tear film, and Toronto's climate delivers all three for a significant portion of the year. Protective eyewear is a functional dry eye prevention tool, not just an aesthetic one:",
    subItems: [
      {
        head: "Wraparound frames or close-fitting sunglasses:",
        text: "Reduce wind-driven tear evaporation and UV exposure to the ocular surface, particularly important for patients at The Beaches, where lake wind exposure is a year-round factor.",
      },
      {
        head: "Moisture-chamber glasses:",
        text: "Frames with side shields or foam seals create a protected microenvironment around the eyes that can dramatically reduce evaporative stress in patients with severe dry eye or significant outdoor exposure.",
      },
      {
        head: "Sunglasses in winter:",
        text: "UV exposure reflected off snow is often higher than summer sun exposure and contributes to ocular surface inflammation; sunglasses aren't optional in bright winter conditions for dry eye patients.",
      },
    ],
  },
  {
    head: "Nutrition:",
    intro:
      "Omega-3 fatty acids remain the nutritional intervention with the strongest evidence base for dry eye prevention and management. The mechanism is direct: EPA and DHA from marine sources alter the fatty acid composition of meibum, reducing its melting point and viscosity and making it less prone to solidifying and blocking gland orifices. Food sources include fatty fish (salmon, mackerel, sardines) and algae-based supplements for patients who don't consume fish. If supplementing, look for triglyceride-form fish oil rather than ethyl ester formulations, which are better absorbed and produce more consistent serum levels.",
    paras: [
      "Vitamin D deficiency has an emerging evidence base as a dry eye risk factor, relevant in Toronto's context given that significant vitamin D deficiency is common in northern latitudes through the winter months due to reduced UV-B exposure. If you haven't had your vitamin D levels checked recently, it's worth discussing with your family physician alongside your dry eye management.",
      "A diet rich in antioxidants (leafy greens, berries, and colourful vegetables) supports overall ocular surface health by reducing systemic oxidative stress that contributes to tear film inflammation. Reducing alcohol intake and avoiding smoking are also meaningful: alcohol is mildly diuretic and reduces tear volume, while smoking is one of the most significant modifiable risk factors for dry eye disease and significantly worsens MGD.",
    ],
  },
];

const PreventingDryEye = () => {
  return (
    <div className=" bg-brand-blue">
      <div className="mx-auto max-w-7xl text-white p-10 rounded-lg">
        <h2 className="text-[37px] font-extrabold mb-4 text-white">
          Preventing Dry Eye
        </h2>

        <div className="border-t-2 border-cyan-400 w-48 mb-6"></div>

        <p className="mb-4">
          Dry eye is easier to prevent than to reverse — particularly the
          MGD-driven evaporative type, where gland atrophy accumulated over
          years of dysfunction can&apos;t be fully undone even with the best
          available treatments. The habits and environmental adjustments that
          protect meibomian gland health and tear film stability are worth
          establishing early, and worth reinforcing even for patients who are
          already in treatment.
        </p>
        <p className="mb-8">
          For Toronto residents specifically, prevention has a seasonal
          dimension that patients in more temperate climates don&apos;t face to
          the same degree. Forced-air heating from October through April
          creates chronically dry indoor environments. Summer air conditioning
          does the same. Seasonal allergens in spring and fall inflame the
          ocular surface and destabilise the tear film. Wind off Lake Ontario
          accelerates tear evaporation year-round. Understanding how your
          environment interacts with your tear film is the first step in
          managing it proactively.
        </p>

        <ul className="space-y-8">
          {preventionTopics.map((topic) => (
            <li key={topic.head} className="flex flex-col">
              <div className="flex ml-6">
                <span className="text-lg mr-2">•</span>
                <div>
                  <span className="font-bold">{topic.head}</span> {topic.intro}
                </div>
              </div>

              {topic.subItems && (
                <ul className="ml-14 mt-4 space-y-4">
                  {topic.subItems.map((item) => (
                    <li key={item.text} className="flex">
                      <span className="text-lg mr-2">•</span>
                      <div>
                        {item.head && (
                          <span className="font-bold">{item.head}</span>
                        )}{" "}
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {topic.paras?.map((para) => (
                <p key={para} className="ml-10 mt-4">
                  {para}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreventingDryEye;
