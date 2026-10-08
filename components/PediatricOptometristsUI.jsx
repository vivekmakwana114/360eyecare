"use client";
import Image from "next/image";
import {
  PediatricEyeCareImage,
  PediatricImage,
  pediatriceyeexam,
} from "../constants/Images";
import { TfiBriefcase } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { useEffect, useState } from "react";
import Link from "next/link";

const PediatricOptometristsUI = () => {
  const [experience, setExperience] = useState(0);
  const [exams, setExams] = useState(0);
  const statsData = [
    {
      icon: <TfiBriefcase size={40} />,
      number: `${experience}+`,
      title: "Years of Experience",
    },
    {
      icon: <TfiUser size={40} />,
      number: `${exams}+`,
      title: "Pediatric Eye Exams",
    },
  ];

  // Improved counter implementation with useCallback
  useEffect(() => {
    const animateCounter = (setter, maxValue, increment, duration) => {
      const steps = Math.ceil(maxValue / increment);
      const intervalTime = duration / steps;

      let count = 0;
      const interval = setInterval(() => {
        count += increment;
        if (count >= maxValue) {
          setter(maxValue);
          clearInterval(interval);
        } else {
          setter(count);
        }
      }, intervalTime);

      return interval;
    };

    const expInterval = animateCounter(setExperience, 10, 1, 1000);
    const examInterval = animateCounter(setExams, 1000, 50, 1000);

    return () => {
      clearInterval(expInterval);
      clearInterval(examInterval);
    };
  }, []);

  // "Why Children's Eye Exams Matter" copy, rendered under the image gallery
  const whyItMatters = [
    "Comprehensive pediatric eye exams do more than check whether your child needs glasses. They assess the full visual system, how each eye focuses individually, how the eyes work together as a team, how the brain processes what the eyes send it, and the structural health of every part of the eye. That complete picture is what allows early detection of conditions that, if caught and treated during the developmental window, respond far better than they would if left until the problem becomes obvious.",
    "The developmental window matters enormously for certain conditions. Amblyopia can be effectively treated with patching, optical correction, or vision therapy when caught before age seven or eight. After that window, the neural pathways that determine visual acuity become increasingly fixed, and treatment becomes progressively less effective. The same applies to strabismus, accommodative esotropia, and several binocular vision disorders.",
    "At 360 Eyecare, we see children as young as six months old at both our Yorkville and Beaches locations. An infant doesn't need to read a letter chart for us to assess their visual health; we use objective testing techniques specifically designed for pre-verbal patients.",
  ];
  const imageClass = "w-full h-auto aspect-[3/2] object-cover rounded-lg";

  return (
    <section className="bg-white">
      {/* Same container as the page's other sections so edges line up */}
      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-combination-200 mb-4">
          Why Children&apos;s Eye Exams Matter
        </h2>
        <div className="w-24 h-1 bg-combination-100 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <Image
              src={pediatriceyeexam}
              alt="Child having eye examination"
              className={imageClass}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
            <p className="text-gray-600 text-base">
              Vision is involved in roughly 80 percent of what children learn
              in their early years. Reading, writing, hand-eye coordination,
              spatial awareness, and the ability to copy from a board all depend
              on a visual system that&apos;s developing correctly. When that
              system has an undetected problem, the learning difficulty it
              creates is often attributed to everything except the eyes.
            </p>
            <p className="text-gray-600 text-base">
              Children rarely complain about their vision. Studies consistently
              show that children adapt to and compensate for vision problems in
              ways that mask the condition from parents and teachers, often for
              years. A child with amblyopia typically has no awareness of it
              whatsoever. A child with convergence insufficiency may be labelled
              an inattentive reader before anyone checks their binocular vision.
              A myopic child may simply stop participating in activities that
              involve distance vision without being able to articulate why.
            </p>
            <Link
              href="/book-eye-exam"
              className="bg-combination-100 text-white hover:text-combination-100 px-6 py-3 rounded-full hover:bg-white hover:border hover:border-combination-100 transition duration-300 w-max"
              aria-label="Book Your Pediatric Eye Examination"
            >
              Book Your Pediatric Eye Examination
            </Link>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-12 mt-4">
              {statsData.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3 items-center mb-2">
                    <div className="text-combination-100">{item.icon}</div>
                    <p className="text-combination-200 text-3xl lg:text-4xl font-bold">
                      {item.number}
                    </p>
                  </div>
                  <p className="text-neutral-500 text-lg">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Image Gallery: two side by side from sm up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src={PediatricEyeCareImage}
                alt="Optometrist fitting a trial frame on a child"
                className={imageClass}
                sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <Image
                src={PediatricImage}
                alt="Child wearing a trial frame during an eye exam"
                className={imageClass}
                sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>

            {whyItMatters.map((para) => (
              <p key={para} className="text-gray-600 text-base">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PediatricOptometristsUI;
