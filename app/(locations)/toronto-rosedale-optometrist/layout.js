import Script from "next/script";

export const metadata = {
  title: "Optometrist in Yorkville - 360 Eyecare",
  description:
    "Comprehensive eye exams, contact lenses, and eyewear at 360 Eyecare Yorkville - Rosedale.",
};

export default function YorkvilleLayout({ children }) {
  //  Schema for the location page - yorkville
  const optometristSchema = {
    "@context": "https://schema.org",
    "@type": "Optometrist",
    "@id":
      "https://www.360eyecare.ca/toronto-rosedale-optometrist/#optometrist",
    name: "360 Eyecare Yorkville",
    url: "https://www.360eyecare.ca/toronto-rosedale-optometrist",
    telephone: "+1-416-901-2725",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Concourse level 55 Bloor St W Suite 03",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M4W 1A5",
      addressCountry: "CA",
    },
    areaServed: [
      "Yorkville, Toronto, ON, Canada",
      "Summerhill, Toronto, ON, Canada",
      "Bloor Annex, Toronto, ON, Canada",
      "Cabbagetown, Toronto, ON, Canada",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.66971307,
      longitude: -79.38856498,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/360eyecare.yorkville/",
      "https://www.instagram.com/360eyecare_yorkville/",
      "https://x.com/360eyecare",
      "https://www.linkedin.com/company/360-eyecare/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "160",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "XM Yan" },
        reviewBody:
          "I initially had a misunderstanding regarding the refund policy when I made my purchase...",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Cathy O'Shea" },
        reviewBody:
          "I highly recommend 360 Eyecare. The patient experience is exceptional...",
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
        name: "Do you offer contact lens fittings in Yorkville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive contact lens fittings including specialty lenses for astigmatism...",
        },
      },
      {
        "@type": "Question",
        name: "What insurance do you accept for eye exams in Toronto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept most major insurance plans including Sun Life, Manulife, Great-West Life...",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day eye exams in Yorkville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 360 Eyecare Yorkville accommodates urgent eye care needs and emergency appointments...",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/*  Location-schema - yorkville rosedale JSON-LD schema */}
        <Script
          id="yorkville-schema-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(optometristSchema)}
        </Script>

        {/*  FAQ schema */}
        <Script
          id="yorkville-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(faqSchema)}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
