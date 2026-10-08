"use client";
import { laservisionService } from "../constants/Constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// One procedure. On desktop the image floats left so the copy wraps around
// and under it, whatever its length (no empty column beside it).
const ServicePanel = ({ service }) => (
  <div className="flow-root text-neutral-600 text-[15px] leading-relaxed">
    <Image
      src={service.image}
      alt={service.title}
      sizes="(min-width: 768px) 45vw, 100vw"
      className="w-full h-auto aspect-[3/2] object-cover rounded-lg mb-6 md:float-left md:w-[45%] md:mr-8 md:mb-4"
    />
    <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-4">
      {service.title}
    </h3>
    {service.paragraphs.map((para) => (
      <p key={para} className="mb-4">
        {para}
      </p>
    ))}
    <p className="mb-4">
      <strong className="text-combination-200">Recovery:</strong>{" "}
      {service.recovery}
    </p>
    <p className="mb-4">
      <strong className="text-combination-200">Best suited for:</strong>{" "}
      {service.bestFor}
    </p>
  </div>
);

const LaserVisionSlider = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full py-8 md:py-16 bg-[#F9F9F9]">
      <div className="flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 text-center">
          Types of Laser Vision Correction
        </h2>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base font-normal text-center max-w-3xl">
          Three primary laser vision correction procedures are performed at
          surgical centres in Toronto. Your co-managing optometrist at 360
          Eyecare will discuss which is most appropriate for your prescription,
          corneal anatomy, and lifestyle — or whether any of them is
          appropriate at all.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {laservisionService.map((service, index) => {
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
          <div className="flex flex-nowrap justify-center gap-4 py-6 px-4">
            {laservisionService.map((service, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={service.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center flex-1 max-w-[332px] p-4 rounded-t-lg text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-combination-200 hover:bg-gray-100 hover:text-combination-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-combination-100" />
                  )}
                  <Image
                    src={service.icon}
                    alt=""
                    width={36}
                    height={36}
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
          <div className="px-6 pb-4 pt-4">
            {laservisionService.map((service, index) => {
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

export default LaserVisionSlider;
