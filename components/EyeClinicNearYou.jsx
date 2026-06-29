import Link from "next/link";
import React from "react";

const EyeClinicNearYou = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col">
      <h2 className="text-combination-200 text-3xl md:text-[37px] font-extrabold mb-4">
        Eye Clinics Near You – 360 Eyecare Locations in Toronto
      </h2>
      <hr className="w-[65px] h-[2px] bg-combination-100 mb-8" />

      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Beaches Location */}
        <div className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-6 sm:p-8 md:w-1/2 transition-all duration-300">
          <div className="flex-1 flex flex-col">
            <h3 className="text-combination-200 text-xl sm:text-2xl font-extrabold mb-3 leading-snug min-h-[64px] sm:min-h-[80px] md:min-h-[96px] flex items-center">
              360 Eyecare Beaches – Your Local Eye Clinic in The Beaches
            </h3>
            <hr className="w-16 h-1 bg-combination-100 mb-6" />
            <p className="text-neutral-500 text-sm sm:text-base mb-4">
              Located in The Beaches, Toronto, this clinic offers top-quality eye
              care, including:
            </p>
            <ul className="list-none mb-6 pl-0">
              {[
                "Comprehensive eye exams",
                "Prescription glasses & sunglasses",
                "Contact lens fittings",
                "Dry eye treatment",
                "Eye disease management",
              ].map((item, index) => (
                <li key={index} className="ml-0 mb-3 text-neutral-500 text-sm sm:text-base flex items-start">
                  <span className="text-combination-100 mr-2 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-neutral-500 text-sm sm:text-base font-semibold mb-6 mt-auto">
              📍 Visit{" "}
              <Link
                href="/toronto-beaches-optometrist"
                className="text-combination-200 hover:text-combination-100 font-extrabold underline decoration-2 underline-offset-4"
              >
                360 Eyecare Beaches
              </Link>{" "}
              if you're searching for an 'optometrist near The Beaches' or 'eye
              doctor near The Beaches Toronto'.
            </p>
          </div>
          <Link
            href="tel:4166983937"
            className="bg-combination-100 hover:text-combination-100 hover:bg-combination-200 text-white font-extrabold py-3 px-8 rounded-md transition-colors duration-200 shadow-md w-full text-center text-sm sm:text-base mt-2"
          >
            Call: 416-698-3937
          </Link>
        </div>

        {/* Yorkville Location */}
        <div className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-6 sm:p-8 md:w-1/2 transition-all duration-300 mt-8 md:mt-0">
          <div className="flex-1 flex flex-col">
            <h3 className="text-combination-200 text-xl sm:text-2xl font-extrabold mb-3 leading-snug min-h-[64px] sm:min-h-[80px] md:min-h-[96px] flex items-center">
              360 Eyecare Yorkville – Premium Optometry Care
            </h3>
            <hr className="w-16 h-1 bg-combination-100 mb-6" />
            <p className="text-neutral-500 text-sm sm:text-base mb-4">
              Conveniently located in Yorkville. This optometry clinic provides:
            </p>
            <ul className="list-none mb-6 pl-0">
              {[
                "Advanced eye exams & vision testing",
                "Designer eyewear & prescription lenses",
                "Specialty contact lenses",
                "Management of glaucoma, cataracts, and other eye conditions",
                "Dry eye therapy",
              ].map((item, index) => (
                <li key={index} className="ml-0 mb-3 text-neutral-500 text-sm sm:text-base flex items-start">
                  <span className="text-combination-100 mr-2 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-neutral-500 text-sm sm:text-base font-semibold mb-6 mt-auto">
              📍 Looking for an 'eye doctor near Yorkville' or 'optometrist near
              Toronto'? Visit{" "}
              <Link
                href="/toronto-rosedale-optometrist"
                className="text-combination-200 hover:text-combination-100 font-extrabold underline decoration-2 underline-offset-4"
              >
                360 Eyecare Yorkville
              </Link>{" "}
              for expert care.
            </p>
          </div>
          <Link
            href="tel:4169012725"
            className="bg-combination-100 hover:text-combination-100 hover:bg-combination-200 text-white font-extrabold py-3 px-8 rounded-md transition-colors duration-200 shadow-md w-full text-center text-sm sm:text-base mt-2"
          >
            Call: 416-901-2725
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EyeClinicNearYou;
