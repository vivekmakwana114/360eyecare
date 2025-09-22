"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const InsuranceSection = () => {
  const scrollRef = useRef(null);

  const insuranceCompanies = [
    { logo: "/public/sunlife.svg", alt: "Sun Life" },
    { logo: "/public/manulife.svg", alt: "Manulife" },
    { logo: "/public/greenshield.svg", alt: "GreenShield" },
    { logo: "/public/standardlife.svg", alt: "Standard Life" },
    { logo: "/public/chambers.svg", alt: "Chambers" },
    { logo: "/public/bluecross.svg", alt: "Blue Cross" },
    { logo: "/public/desjardins.svg", alt: "Desjardins" },
    { logo: "/public/greatwest.svg", alt: "Great-West Life" },
  ];

  // Auto-scroll effect for mobile only
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

//   if screen is smaller than md only than scroll
    if (window.innerWidth >= 768) return;

    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (!scrollContainer) return;

      scrollAmount += scrollContainer.clientWidth; 
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0; // reset
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#28305F] mb-8">
        Insurance Providers We Accept
      </h2>

      {/* Mobile: auto-scroll carousel */}
      <div
        ref={scrollRef}
        className="flex md:hidden overflow-x-auto scrollbar-hide space-x-4 snap-x snap-mandatory"
      >
        {insuranceCompanies.map((company, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 h-24 w-48 flex items-center justify-center bg-white shadow-md rounded-lg border border-[#E1E6EB] snap-start"
          >
            <Image
              src={company.logo}
              alt={company.alt}
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Desktop: 4-column grid */}
      <div className="hidden md:grid grid-cols-4 gap-6 max-w-4xl mx-auto">
        {insuranceCompanies.map((company, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <Image
              src={company.logo}
              alt={company.alt}
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="text-[#888888] text-center text-sm mt-6">
        <strong className="text-[#111111]">Direct Billing Available:</strong> No
        upfront payment required for covered services
      </p>
    </section>
  );
};

export default InsuranceSection;


