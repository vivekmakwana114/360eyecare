import { optometrists } from "../../../../constants/Constants.js";
import TeamMember from "./TeamMember";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = optometrists.find((doc) => doc.slug == slug);

  if (!doctor) {
    return {
      title: "Team Member Not Found | Your Clinic",
      description: "We couldn't find this team member.",
    };
  }

  const title = doctor.metaTitle || `${doctor.name} | Optometrist at 360 Eyecare`;
  const description = doctor.metaDescription || doctor.description || "";

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.360eyecare.ca/team-members/${doctor.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.360eyecare.ca/team-members/${doctor.slug}`,
      siteName: "360 Eyecare",
      images: [
        {
          url: doctor.image,
          width: 800,
          height: 600,
          alt: doctor.alt || doctor.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [typeof doctor.image === "string" ? doctor.image : null],
    },
  };
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const doctor = optometrists.find((doc) => doc.slug == slug);

  return <TeamMember doctor={doctor} />;
}
