 import Script from "next/script";

export const metadata = {
  title: "Optometrist in The Beaches - 360 Eyecare",
  description:
    "Comprehensive eye exams, contact lenses, and eyewear at 360 Eyecare Beaches in Toronto.",
};

export default function BeachesLayout({ children }) {
  // Schema for the Beaches location page
  const optometristSchema = {
    "@context": "https://schema.org",
    "@type": "Optometrist",
    "@id": "https://www.360eyecare.ca/toronto-beaches-optometrist/#optometrist",
    name: "360 Eyecare Beaches",
    url: "https://www.360eyecare.ca/toronto-beaches-optometrist",
    telephone: "+1-416-698-3937",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2199 Queen Street East",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M4E 1E5",
      addressCountry: "CA",
    },
    areaServed: [
      "The Beaches, Toronto, ON, Canada",
      "Leslieville, Toronto, ON, Canada",
      "Upper Beaches, Toronto, ON, Canada",
    ],
    geo: { "@type": "GeoCoordinates", latitude: 43.67063, longitude: -79.29683 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
    ],
    sameAs: [
      "https://www.facebook.com/360eyecare.Beaches/",
      "https://www.instagram.com/360eyecare/",
      "https://x.com/360eyecare",
      "https://www.linkedin.com/company/360-eyecare/",
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "315", bestRating: "5" },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Josi Margesson" },
        reviewBody:
          "The kindness and patience shown me by the Staff was amazing, and I can't thank them enough for putting up with me and my indecision over the frames! My eye exam by Dr. Baraam was thorough and the results clearly explained to me. She took great pains to make sure she understood what I was trying to tell her, and has assured me that 'All is well....",
        name: "Quick Eye Exam!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sandie Orlando" },
        reviewBody:
          "Dr. Baram always takes the time to ensure my contacts work for my eyes and for my lifestyle. He is generous with his time and willing to keep trying until we find a workable solution. His team in the store are always efficient and welcoming. A pleasure doing business with them.",
        name: "Excellent Eye Exam Service",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should I schedule eye exams for my family?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Children & Teens: Annual exams (OHIP covered until age 20) - especially important for active beach kids, Adults (20-64): Every 1-2 years, annually if you have risk factors or wear contacts, Seniors 65+: Annual comprehensive exams (OHIP covered), Active individuals: More frequent assessments for sports vision and UV protection needs",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide emergency eye care in the Beaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We handle urgent eye issues including beach-related injuries, sand irritation, foreign objects, infections, and sudden vision changes. Call 416-698-3937 immediately for same-day emergency appointments. Our location on Queen Street East makes us easily accessible for urgent care needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer walk-in eye exams in the Beaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we welcome walk-in appointments when possible! However, to ensure minimal wait times and guaranteed service, we recommend booking online or calling 416-698-3937. We offer extended hours including evenings and Saturdays to accommodate busy Beaches residents and visitors.",
        },
      },
    ],
  };

  return (
    <>
      {/* Optometrist Schema */}
      <Script id="beaches-schema-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(optometristSchema)}
      </Script>

      {/* FAQ Schema */}
      <Script id="beaches-faq-schema-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>

      {children}
    </>
  );
}
