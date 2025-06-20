import React from "react";
import TorontoBeachesOptometrist from "./TorontoBeachesOptometrist";
export async function generateMetadata() {
  return {
    title: "Optometrist Beaches Toronto | Optometry Clinic | 360 Eyecare",
    description:
      "360 Eyecare Optometrist Beaches Toronto is an optometry clinic providing full scope vision and medical eye care for patients of all ages.",
    openGraph: {
      title: "Optometrist Beaches Toronto | Optometry Clinic | 360 Eyecare",
      description:
        "360 Eyecare Optometrist Beaches Toronto is an optometry clinic providing full scope vision and medical eye care for patients of all ages.",
      url: "https://www.360eyecare.ca/toronto-beaches-optometrist/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/toronto-beaches-optometrist/",
    },
  };
}

const page = () => {
  return <TorontoBeachesOptometrist />;
};

export default page;
