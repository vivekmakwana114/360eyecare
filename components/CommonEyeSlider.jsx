"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { commonEyeServices } from "../constants/Constants";

const listClass = "list-disc pl-5 marker:text-combination-100 space-y-2";

// One section card (Symptoms, Diagnosis, Treatment, ...)
const SectionCard = ({ section, fullWidth }) => (
  <div
    className={`bg-gray-50 rounded-lg p-5 flex flex-col gap-3 ${
      fullWidth ? "md:col-span-2" : ""
    }`}
  >
    <h4 className="text-combination-200 text-lg font-bold">{section.heading}</h4>
    {section.paragraphs?.map((para) => (
      <p key={para}>{para}</p>
    ))}
    {section.list && (
      <ul className={listClass}>
        {section.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
    {section.points && (
      <ul className={listClass}>
        {section.points.map((point) => (
          <li key={point.head}>
            <strong className="text-combination-200">{point.head}:</strong>{" "}
            {point.para}
          </li>
        ))}
      </ul>
    )}
    {section.closing?.map((para) => (
      <p key={para}>{para}</p>
    ))}
  </div>
);

// One condition. On desktop the image fills a left column matching the
// intro's height; the section cards then sit in a two-column grid below.
// Sections marked `half` pair up side by side; the rest span both columns.
const ServicePanel = ({ service }) => (
  <div className="text-neutral-600 text-[15px] leading-relaxed">
    <div className="grid grid-cols-1 md:grid-cols-[45%_1fr] gap-6 md:gap-8 items-stretch">
      {/* fill + absolute positioning: on desktop the image takes the text
          column's height (cropped to fit) without adding height of its own */}
      <div className="relative w-full aspect-[3/2] md:aspect-auto md:min-h-[280px] rounded-lg overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      {/* Text stays in its own column instead of wrapping under the image */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-4">
          {service.title}
        </h3>
        {service.paragraphs.map((para) => (
          <p key={para} className="mb-4">
            {para}
          </p>
        ))}
        {service.link && (
          <Link
            href={service.link.href}
            className="inline-block bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 shadow-md"
          >
            {service.link.label}
          </Link>
        )}
      </div>
    </div>
    {service.sections.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {service.sections.map((section) => (
          <SectionCard
            key={section.heading}
            section={section}
            fullWidth={!section.half}
          />
        ))}
      </div>
    )}
  </div>
);

const CommonEyeSlider = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full py-8 md:py-16 bg-[#F9F9F9]">
      <div className="flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 text-center">
          Common Eye Conditions and Treatments
        </h2>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base font-normal text-center">
          Learn about serious eye conditions like cataracts, glaucoma, and more.
          Discover our effective treatments.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {commonEyeServices.map((service, index) => {
            const isActive = selected === index;
            return (
              <div key={service.label}>
                <button
                  onClick={() => setSelected(isActive ? -1 : index)}
                  className={`w-full p-4 rounded-lg text-center cursor-pointer transition-all duration-200 flex items-center justify-center mb-1 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-white text-combination-200 hover:bg-gray-100"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt=""
                    width={36}
                    height={36}
                    className={`h-8 w-auto mr-3 ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span className="font-semibold text-sm">{service.label}</span>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white rounded-lg px-4 py-6 mb-4">
                        <ServicePanel service={service} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block bg-white rounded-lg">
          <div className="flex flex-nowrap justify-center gap-3 py-6 px-4">
            {commonEyeServices.map((service, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={service.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center flex-1 max-w-[200px] p-4 rounded-t-lg text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-combination-200 hover:bg-gray-100 hover:text-combination-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-combination-100" />
                  )}
                  <Image
                    width={36}
                    height={36}
                    src={service.icon}
                    alt=""
                    className={`mx-auto mb-2 h-8 w-auto ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <div className="font-semibold text-sm lg:text-base">
                    {service.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Every panel is rendered (inactive ones hidden) so all of the
              copy is in the server HTML, not just the first tab's. */}
          <div className="px-6 pb-6 pt-4">
            {commonEyeServices.map((service, index) => {
              const isActive = selected === index;
              return (
                <motion.div
                  key={service.label}
                  initial={false}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={isActive ? "block" : "hidden"}
                >
                  <ServicePanel service={service} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonEyeSlider;
