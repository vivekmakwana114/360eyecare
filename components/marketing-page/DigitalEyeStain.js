import Image from "next/image";
import React from "react";
const digitaleyestaindata = [
  {
    icon: "/common.svg",
    title: "Common Screen Symptoms",
    description:
      "Headaches, blurry vision, and dry eyes are frequent signs of digital eye strain.",
  },
  {
    icon: "/screen.svg",
    title: "Screen Time Impact",
    description:
      "Over 70% of adults using screens 4+ hours daily report eye discomfort.",
  },
  {
    icon: "/drops.svg",
    title: "Drops in Focus",
    description:
      "Untreated strain can reduce focus, increase fatigue, and affect work performance.",
  },
  {
    icon: "/long.svg",
    title: "Long-Term Risks",
    description:
      "Prolonged stress on the eyes may contribute to worsening long-term vision health.",
  },
];

const digitalstaindata2 = [
  {
    icon: "/book.svg",
    title: "Book Online in Seconds",
    description: "Just fill out the short form above.",
  },
  {
    icon: "/meet.svg",
    title: "Meet with a 360 Eyecare Optometrist",
    description: "In-person consultation.",
  },
  {
    icon: "/get.svg",
    title: "Get a Personalized Eye Health Action Plan",
    description: "Tailored tips and professional guidance.",
  },
];

const DigitalEyeStrain = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#28305F] mb-4">
          Why You Shouldn&apos;t Ignore Digital Eye Strain
        </h1>
        <p className="text-[#888888] text-sm sm:text-base max-w-2xl mx-auto">
          Our team specializes in digital eye health for professionals,
          students, and screen-heavy lifestyles.
        </p>
      </div>

      {/* Main Content - Desktop: Side by side, Mobile: Stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
        {/* Left Side - Content */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          {digitaleyestaindata.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border border-[#E1E6EB] p-4 rounded-lg"
            >
              <Image src={item.icon} width={80} height={80} alt="icon" />

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#28305F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#888888] text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <Image
              src="/digital-stain1.webp"
              width={553}
              height={600}
              alt="Eye examination with specialized equipment"
              className="w-full md:h-[600px] h-[300px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - What Happens During Your Free Consultation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start py-6">
        {/* Left Side - Image */}
        <div className="order-1">
          <div className="relative">
            <Image
              width={553}
              height={640}
              src="/digital-stain2.webp"
              alt="Optometrist examining patient's eyes"
              className="w-full md:h-[640px]  h-[300px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="order-2">
          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#28305F] mb-4">
              What Happens During Your Free Consultation?
            </h2>
            <p className="text-[#888888] text-sm sm:text-base">
              During your complimentary consultation, we answer all your
              questions and assess your eye health. It’s the first step toward
              clearer, more comfortable sight. Here’s how to get started.
            </p>
          </div>

          <div className="space-y-6">
            <div className="order-2 lg:order-1">
              {digitalstaindata2.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-4 border border-[#E1E6EB] p-4 rounded-lg">
                    <Image src={item.icon} width={80} height={80} alt="icon" />

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#28305F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#888888] text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index !== digitalstaindata2.length - 1 && (
                    <div className="w-1 h-[48px] ml-8 border-2 border-dashed border-[#E1E6EB]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalEyeStrain;
