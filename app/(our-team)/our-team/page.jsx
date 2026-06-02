import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: "Meet Our Team | 360 Eyecare Toronto",
    description:
      "Meet the dedicated and highly skilled eye care professionals, opticians, and staff at 360 Eyecare Yorkville and Beaches.",
    keywords:
      "optometrists Toronto, opticians, eye care team, 360 Eyecare, Beaches optometrist, Yorkville optometrist, eye care clinic staff",
    openGraph: {
      type: "website",
      url: "https://www.360eyecare.ca/our-team/",
      title: "Meet Our Team | 360 Eyecare Toronto",
      description:
        "Meet the dedicated and highly skilled eye care professionals, opticians, and staff at 360 Eyecare Yorkville and Beaches.",
      siteName: "360 Eyecare",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/our-team/",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const teamMembers = [
  {
    name: "Dr. Sam Baraam",
    role: "Optometrist",
    image: "/ourteam/Dr Sam Baraam, Optometrist.webp",
  },
  {
    name: "Dr. Anita Sritharan",
    role: "Optometrist",
    image: "/ourteam/Dr Anita Sritharan, Optometrist.webp",
  },
  {
    name: "Dr. Alina Shahid",
    role: "Optometrist",
    image: "/ourteam/Dr Alina Shahid, Optometrist.webp",
  },
  {
    name: "Brandon",
    role: "Optician",
    image: "/ourteam/Brandon, Optician.webp",
  },
  {
    name: "Lucel",
    role: "Optician",
    image: "/ourteam/Lucel, Optician.webp",
  },
  {
    name: "Hannah",
    role: "Administrative Lead",
    image: "/ourteam/Hannah, Administrative Lead.webp",
  },
  {
    name: "Lily",
    role: "Administrative Lead",
    image: "/ourteam/Lily, Administrative Lead.webp",
  },
  {
    name: "Mia",
    role: "Ophthalmic Technician",
    image: "/ourteam/Mia, Ophthalmic Technician.webp",
  },
  {
    name: "Vanessa",
    role: "Ophthalmic Technician",
    image: "/ourteam/Vanessa, Ophthalmic Technician.webp",
  },
  {
    name: "Julia",
    role: "Optometric Assistant",
    image: "/ourteam/Julia, Optometric Assistant.webp",
  },
  {
    name: "Melanie",
    role: "Optometric Assistant",
    image: "/ourteam/Melanie, Optometric Assistant.webp",
  },
];

const SectionDivider = () => (
  <div className="w-16 h-[2px] bg-combination-100 mb-6"></div>
);

export default function OurTeamPage() {
  return (
    <main className="pt-[110px] bg-white">
      <SubHeader text="Our Team" />

      {/* Main Grid Section */}
      <section className="w-full bg-[#F6F7F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="font-poppins font-bold text-3xl sm:text-[40px] text-[#28305F] mb-4">
              Meet Our Care Team
            </h2>
            <SectionDivider />
            <p className="text-sm md:text-base font-normal text-neutral-500 max-w-2xl leading-relaxed">
              At 360 Eyecare, our dedicated team of optometrists, opticians, and clinical support staff work together to provide you and your family with the ultimate eye care and eyewear experience.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-50">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    priority={index < 4}
                  />
                  {/* Subtle color highlight bar on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#41BBC8] transform translate-y-full transition-transform duration-350 ease-in-out group-hover:translate-y-0" />
                </div>

                {/* Info Container */}
                <div className="p-5 flex flex-col justify-center items-center text-center">
                  <h3 className="font-poppins font-bold text-lg text-[#28305F] tracking-wide mb-1">
                    {member.name}
                  </h3>
                  <span className="font-medium text-[#41BBC8] text-xs uppercase tracking-widest font-poppins">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA Section similar to location pages */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-poppins font-bold text-2xl sm:text-[32px] text-[#28305F]">
            Ready to experience the best in eye care?
          </h2>
          <p className="text-neutral-500 max-w-xl text-sm sm:text-base leading-relaxed">
            Our expert team is here to help you see clearly and live comfortably. Schedule a comprehensive eye exam or custom lens consultation today.
          </p>
          <Link
            href="/book-eye-exam"
            className="mt-2 inline-flex items-center justify-center py-4 px-8 bg-[#28305F] text-white hover:bg-[#41BBC8] rounded-full font-bold text-sm sm:text-base transition-colors duration-200 shadow-md"
          >
            Book An Eye Exam
          </Link>
        </div>
      </section>
    </main>
  );
}
