import { Poppins, Roboto, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RootLayout2 from "./RootLayout2";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#28305F",
};

// ✅ JSON-LD Schema Markup
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.360eyecare.ca/#organization",
      name: "360 Eyecare",
      url: "https://www.360eyecare.ca/",
      description:
        "360 Eyecare is a full-scope optometry clinic in Toronto offering comprehensive eye exams, vision care, and eyewear at our Yorkville and Beaches locations.",
      founder: { "@type": "Person", name: "Dr. Sam Baraam" },
      foundingDate: "2013",
      sameAs: [
        "https://www.facebook.com/360eyecare.yorkville/",
        "https://www.facebook.com/360eyecare.Beaches/",
        "https://www.instagram.com/360eyecare/",
        "https://www.instagram.com/360eyecare_yorkville/",
        "https://x.com/360eyecare",
        "https://www.linkedin.com/company/360-eyecare/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-416-901-2725",
          contactType: "customer service",
          areaServed: [
            "Yorkville, Toronto, ON, Canada",
            "Summerhill, Toronto, ON, Canada",
            "Bloor Annex, Toronto, ON, Canada",
            "Cabbagetown, Toronto, ON, Canada",
          ],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-416-698-3937",
          contactType: "customer service",
          areaServed: [
            "The Beaches, Toronto, ON, Canada",
            "Leslieville, Toronto, ON, Canada",
            "Upper Beaches, Toronto, ON, Canada",
          ],
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.360eyecare.ca/#website",
      url: "https://www.360eyecare.ca/",
      name: "360 Eyecare",
      publisher: { "@id": "https://www.360eyecare.ca/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.360eyecare.ca/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness", "Optometrist"],
      "@id": "https://www.360eyecare.ca/#localbusiness",
      name: "360 Eyecare",
      url: "https://www.360eyecare.ca/",
      description:
        "Comprehensive eye exams, contact lenses, and eyewear at Yorkville & Beaches clinics in Toronto.",
      telephone: "+1-416-901-2725",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Concourse level 55 Bloor St W Suite 03",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M4W 1A5",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.66971307,
        longitude: -79.38856498,
      },
      department: [
        {
          "@type": ["LocalBusiness", "MedicalBusiness", "Optometrist"],
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
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.66971307,
            longitude: -79.38856498,
          },
        },
        {
          "@type": ["LocalBusiness", "MedicalBusiness", "Optometrist"],
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
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.67063,
            longitude: -79.29683,
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "310",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Josi Margesson" },
          reviewBody:
            "The kindness and patience shown me by the Staff was amazing, and I can't thank them enough for putting up with me and my indecision over the frames! My eye exam by Dr. Baraam was thorough and the results clearly explained to me.",
          name: "Highly Recommended for Eye Exam",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Kathryn Hernandez" },
          reviewBody:
            "Excellent service as always. Very thorough eye exam and all details explained. A wide variety of glasses to choose from. I am seeing “A whole new world!!”.",
          name: "Excellent Service",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${lora.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ JSON-LD Structured Data for crawlers */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(schemaData)}
        </Script>
      </head>
      <body
        className={`font-sans antialiased ${poppins.className} overflow-x-hidden`}
      >
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-68FLR804EH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-68FLR804EH');
          `}
        </Script>

        <RootLayout2>{children}</RootLayout2>
      </body>
    </html>
  );
}
