export const metadata = {
  title: "Book an Eye Exam in The Beaches, Toronto | 360 Eyecare",
  description:
    "Book your eye exam at 360 Eyecare The Beaches. Get comprehensive eye care and explore quality prescription eyewear at our convenient Queen St E location.",
  openGraph: {
    title: "Book an Eye Exam in The Beaches, Toronto | 360 Eyecare",
    description:
      "Book your eye exam at 360 Eyecare The Beaches. Get comprehensive eye care and explore quality prescription eyewear at our convenient Queen St E location.",
    siteName: "360 Eyecare",
    type: "website",
    url: "https://360eyecare.ca/book-eye-exam-the-beaches",
  },
  alternates: {
    canonical: "https://360eyecare.ca/book-eye-exam-the-beaches",
  },
};

export default function BookEyeExamTheBeachesLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "360 Eyecare - The Beaches",
    "image": "https://360eyecare.ca/logo.png",
    "telephone": "416-698-3937",
    "email": "beaches@360eyecare.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2199 Queen St E",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M4E 1E5",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.67063,
      "longitude": -79.29683
    },
    "url": "https://360eyecare.ca/book-eye-exam-the-beaches"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
