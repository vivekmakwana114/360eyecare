import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BeachImage, YorkVilleRosedale } from "../../../constants/Images";

/**
 * LocationSection component displaying Beaches and Yorkville offices side-by-side.
 * Used at the bottom of guide pages to provide contact and booking information.
 */
const LocationSection = () => {
  const locations = [
    {
      name: "360 Eyecare - The Beaches",
      address: "2199 Queen Street East, Toronto, ON M4E 1E5",
      phone: "416-698-3937",
      image: BeachImage,
      bookingLink: "/book-eye-exam/#book-appointment", // Links to Beaches booking section
      websiteLink: "/toronto-beaches-optometrist/",
    },
    {
      name: "360 Eyecare - Yorkville Rosedale",
      address: "55 Bloor St W Suite 03, Toronto, ON M4W 1A5",
      phone: "416-901-2725",
      image: YorkVilleRosedale,
      bookingLink: "https://360rosedale.mypatientsportal.com/select-location",
      websiteLink: "/toronto-rosedale-optometrist/",
    },
  ];

  return (
    <section id="locations" className="max-w-6xl mx-auto my-12 sm:my-20 px-4 sm:px-0">
      <div className="text-center mb-12">
        <h2 className="text-primary text-3xl sm:text-[37px] font-[900] mb-4">
          Visit One of Our Locations
        </h2>
        <div className="flex justify-center">
          <hr className="w-20 h-1 bg-secondary" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {locations.map((loc, index) => (
          <div key={index} className="flex flex-col gap-6 group">
            {/* Location Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:shadow-xl">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Location Details */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-primary">
                {loc.name}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {loc.address}
              </p>
              <div className="mt-2 flex flex-wrap gap-4">
                <Link
                  href={loc.bookingLink}
                  target={loc.bookingLink.startsWith("http") ? "_blank" : "_self"}
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-bold rounded-md hover:bg-primary transition-colors duration-200 min-w-[160px]"
                >
                  Book Online
                </Link>
                <Link
                  href={`tel:${loc.phone.replace(/-/g, "")}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-secondary text-secondary font-bold rounded-md hover:bg-secondary hover:text-white transition-colors duration-200 min-w-[160px]"
                >
                  Call: {loc.phone}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
