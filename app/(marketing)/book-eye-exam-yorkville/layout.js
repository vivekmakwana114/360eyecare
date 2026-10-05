import Script from "next/script";

export const metadata = {
  title: "Book an Eye Exam in Yorkville, Toronto | 360 Eyecare",
  description:
    "Book your eye exam at 360 Eyecare Yorkville. Get comprehensive eye care and explore quality prescription eyewear at our convenient Bloor & Bay location.",
  openGraph: {
    title: "Book an Eye Exam in Yorkville, Toronto | 360 Eyecare",
    description:
      "Book your eye exam at 360 Eyecare Yorkville. Get comprehensive eye care and explore quality prescription eyewear at our convenient Bloor & Bay location.",
    siteName: "360 Eyecare",
    type: "website",
    url: "https://360eyecare.ca/book-eye-exam-yorkville",
  },
  alternates: {
    canonical: "https://360eyecare.ca/book-eye-exam-yorkville",
  },
};

export default function BookEyeExamYorkvilleLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "360 Eyecare - Yorkville Rosedale",
    "image": "https://360eyecare.ca/logo.png",
    "telephone": "416-901-2725",
    "email": "yorkville@360eyecare.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "55 Bloor St W, Concourse Level, Suite 03, Manulife Centre",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M4W 1A5",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6698,
      "longitude": -79.3887
    },
    "url": "https://360eyecare.ca/book-eye-exam-yorkville"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      {children}
    </>
  );
}
