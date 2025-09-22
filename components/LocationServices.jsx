import React from "react";
import Image from "next/image";

const LocationServices = ({
  mainTitle ="",
  majorStreetsTitle = "",
  landmarksTitle = "",
  accessTitle = "",
  majorStreets = [],
  landmarks = [],
  accessPoints = [],
  disclaimerText = "",
  searchText = "",
}) => {

  const displayMajorStreets =
    majorStreets.length > 0 ? majorStreets : defaultMajorStreets;
  const displayLandmarks = landmarks.length > 0 ? landmarks : defaultLandmarks;
  const displayAccessPoints =
    accessPoints.length > 0 ? accessPoints : defaultAccessPoints;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8">
      {/* Main Title */}
      <div className="text-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#28305F] mb-2">
          {mainTitle}
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Major Streets */}
        <div className="bg-[#F3F3F3] rounded-lg p-6 md:p-8 border border-[#E1E6EB]">
          <h3 className="text-xl md:text-2xl font-semibold text-[#28305F] mb-4">
            {majorStreetsTitle}
          </h3>
          <div className="space-y-4">
            {displayMajorStreets.map((street, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image
                  src="/public/location2.svg"
                  alt="location"
                  width={20}
                  height={20}
                />

                <div className="">
                  <span className="font-semibold text-[#28305F]">
                    {street.name}:
                  </span>
                  <span className="text-sm md:text-base text-[#666666] ml-1">
                    {street.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Landmarks */}
        <div className="bg-[#F3F3F3] rounded-lg p-6 md:p-8 border border-[#E1E6EB] max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-[#28305F] mb-4">
            {landmarksTitle}
          </h3>
          <div className="space-y-4">
            {displayLandmarks.map((landmark, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image
                  src="/public/location2.svg"
                  alt="location"
                  width={20}
                  height={20}
                />

                <div className="">
                  <span className="font-semibold text-[#28305F]">
                    {landmark.name}:
                  </span>
                  <span className="text-sm md:text-base text-[#666666]  ml-1">
                    {landmark.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer Text */}
      {disclaimerText && (
        <div className="text-start">
          <p className="text-sm text-gray-500 italic max-w-4xl">
            {disclaimerText}
          </p>
        </div>
      )}

      <div className="mt-12 md:max-w-6xl max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#28305F] mb-2">
          {accessTitle}
        </h2>

        <div className="bg-[#F3F3F3] rounded-lg   border border-[#E1E6EB] mt-12">
          <div className="bg-[#F3F3F3] rounded-lg p-4 md:p-6">
            <div className="space-y-6">
              {displayAccessPoints.map((access, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src="/public/location2.svg"
                    alt="location"
                    width={20}
                    height={20}
                  />
                  <div>
                    <span className="text-sm md:text-base font-semibold text-[#28305F]">
                      {access.name}:
                    </span>
                    <span className="text-sm md:text-base text-[#666666] ml-1">
                      {access.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Text */}
          {searchText && (
            <div className="text-start mb-6">
              <p className="text-sm text-gray-500 italic max-w-5xl mx-auto">
                {searchText}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationServices;
