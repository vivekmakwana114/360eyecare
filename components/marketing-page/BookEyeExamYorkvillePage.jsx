"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import {
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Calendar,
  ShieldCheck,
  Star,
  Award,
  Users,
  Stethoscope,
  Sparkles,
  ArrowRight,
  Eye,
} from "lucide-react";
import GoogleMapEmbed from "../GoogleMapEmbed";

const BookEyeExamYorkvillePage = () => {
  const router = useRouter();
  const recaptchaRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    lookingFor: "Eye Exam + New Glasses",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 12:00 PM)",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [status, setStatus] = useState({
    submitting: false,
    error: null,
  });

  // Handle auto-scroll to lead form
  const scrollToForm = () => {
    const element = document.getElementById("lead-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: false, error: null });

    if (!captchaToken) {
      setStatus({
        submitting: false,
        error: "Please verify that you are not a robot.",
      });
      return;
    }

    try {
      setStatus({ submitting: true, error: null });

      const response = await fetch("/api/book-eye-exam-yorkville", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: captchaToken,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit booking request.");
      }

      // Success -> Redirect to Thank You page
      router.push("/thank-you");
    } catch (err) {
      setStatus({
        submitting: false,
        error: err.message || "Something went wrong. Please try again.",
      });
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setCaptchaToken(null);
      }
    }
  };

  const lookingForOptions = [
    "Eye Exam + New Glasses",
    "Eye Exam Only",
    "Contact Lenses",
    "I'm Not Sure",
  ];

  const timeOptions = [
    "Morning (9:00 AM - 12:00 PM)",
    "Afternoon (12:00 PM - 4:00 PM)",
    "Evening (4:00 PM - 7:00 PM)",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Header / Branding Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="360 Eyecare Logo"
              width={160}
              height={45}
              priority
              className="h-auto w-36 sm:w-44 object-contain"
            />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:416-901-2725"
              className="hidden sm:flex items-center gap-2 text-[#034D76] font-semibold hover:text-[#40BCC8] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#40BCC8]" />
              416-901-2725
            </a>
            <button
              onClick={scrollToForm}
              className="bg-[#204060] hover:bg-[#034D76] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              BOOK MY EYE EXAM
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#28305F] via-[#204060] to-[#034D76] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#40BCC8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-sm font-medium text-[#40BCC8]">
              <Eye className="w-4 h-4" />
              <span>360 Eyecare Yorkville Toronto</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-poppins">
              Book Your Eye Exam & Find Your Perfect Eyewear
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Complete eye care and eyewear in one convenient Yorkville location
              — get a comprehensive eye exam with an experienced optometrist and
              explore prescription glasses tailored to your vision, lifestyle, and
              personal style.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              {[
                "Comprehensive Eye Exam",
                "Advanced Diagnostic Technology",
                "Quality Eyewear & Glasses",
                "Convenient Yorkville Location",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#40BCC8] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="bg-[#40BCC8] hover:bg-[#34a4b0] text-[#28305F] text-base font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                BOOK MY EYE EXAM
              </button>
              <a
                href="tel:416-901-2725"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-base font-semibold px-6 py-4 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5 text-[#40BCC8]" />
                Call 416-901-2725
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/optometry-yorkville.jpg"
                alt="360 Eyecare Yorkville Clinic"
                width={600}
                height={450}
                className="object-cover w-full h-[420px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28305F]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 shadow-lg">
                <p className="font-bold text-sm text-[#034D76]">
                  Dr. Sam Baraam & Optometry Team
                </p>
                <p className="text-xs text-slate-600">
                  55 Bloor St W (Manulife Centre), Yorkville, Toronto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOOKING FORM SECTION */}
      <section id="lead-form" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 scroll-mt-24">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#28305F] font-poppins">
              Book Your Eye Exam
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Take the first step toward clearer vision and better eye health.
              Fill out the form below and book your appointment at 360 Eyecare Yorkville.
            </p>
          </div>

          {status.error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium">
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#40BCC8] focus:ring-2 focus:ring-[#40BCC8]/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 416-901-2725"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#40BCC8] focus:ring-2 focus:ring-[#40BCC8]/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#40BCC8] focus:ring-2 focus:ring-[#40BCC8]/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                What are you looking for?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {lookingForOptions.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.lookingFor === option
                        ? "border-[#40BCC8] bg-[#40BCC8]/10 text-[#034D76] font-semibold"
                        : "border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="lookingFor"
                      value={option}
                      checked={formData.lookingFor === option}
                      onChange={handleInputChange}
                      className="accent-[#40BCC8] w-4 h-4"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Preferred Appointment Date*
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#40BCC8] focus:ring-2 focus:ring-[#40BCC8]/20 outline-none transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Preferred Time*
                </label>
                <select
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#40BCC8] focus:ring-2 focus:ring-[#40BCC8]/20 outline-none transition-all text-slate-900 bg-white"
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center pt-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Ld7e00qAAAAAJ1N5i2797v904v2-e565985"}
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-[#204060] hover:bg-[#034D76] text-white text-base font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            >
              {status.submitting ? "SUBMITTING..." : "BOOK MY EYE EXAM"}
            </button>

            <div className="pt-2 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#40BCC8]" />
                <span>
                  Your information is secure and will only be used to help schedule and confirm your appointment.
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600">
                Prefer to speak with us?{" "}
                <a
                  href="tel:416-901-2725"
                  className="text-[#034D76] font-bold underline hover:text-[#40BCC8]"
                >
                  Call 416-901-2725
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#28305F] font-poppins">
            Your Eye Exam Is More Than a Vision Check
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At 360 Eyecare Yorkville, we look beyond your prescription. Our comprehensive
            eye exams assess your vision and overall eye health using modern diagnostic technology.
            Once your exam is complete, our team can also help you explore eyewear options that suit your
            prescription, lifestyle and personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Stethoscope,
              title: "Comprehensive Eye Care",
              description:
                "Get a complete assessment of your vision and eye health with personalized recommendations.",
            },
            {
              icon: Sparkles,
              title: "Modern Diagnostic Technology",
              description:
                "Our Yorkville clinic uses advanced technology, including digital retinal imaging and OCT scanning, to provide a more detailed assessment of your eyes.",
            },
            {
              icon: Eye,
              title: "Personalized Vision Solutions",
              description:
                "Whether you need glasses, contact lenses or simply want to understand your eye health better, we'll help you understand your options.",
            },
            {
              icon: Award,
              title: "Eyewear in One Convenient Location",
              description:
                "After your exam, explore quality glasses and designer eyewear without having to visit another location. The Yorkville clinic offers designer eyewear and glasses as part of its services.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#40BCC8]/15 text-[#034D76] flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#28305F] mb-3 font-poppins">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EYE EXAM + EYEWEAR JOURNEY */}
      <section className="py-16 sm:py-24 bg-[#28305F] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              From Eye Exam to Your New Glasses
            </h2>
            <p className="text-slate-300 text-base">
              Five simple steps to exceptional vision and personalized eyewear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              {
                step: "1",
                title: "Book Your Eye Exam",
                desc: "Choose a convenient appointment at our Yorkville clinic.",
              },
              {
                step: "2",
                title: "Get Your Vision Checked",
                desc: "Our optometrist will assess your vision and eye health and determine your prescription.",
              },
              {
                step: "3",
                title: "Explore Your Eyewear Options",
                desc: "If you need glasses, browse eyewear options that complement your prescription, lifestyle and personal style.",
              },
              {
                step: "4",
                title: "Choose Your Lenses & Frames",
                desc: "Our team can help you find the right combination of lenses and frames for your needs.",
              },
              {
                step: "5",
                title: "See Clearly. Look Great.",
                desc: "Leave your visit knowing you've taken care of both your vision and your eyewear needs.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#40BCC8] text-[#28305F] font-bold text-lg flex items-center justify-center mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-lg text-white mb-2 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-[#40BCC8] hover:bg-[#34a4b0] text-[#28305F] font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              BOOK MY EYE EXAM
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY 360 EYECARE YORKVILLE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#28305F] font-poppins">
            Eye Care You Can Trust in Yorkville
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            At 360 Eyecare, our goal is to provide personalized eye care in a welcoming,
            professional environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Award,
              title: "10+ Years of Experience",
              desc: "Dr. Sam Baraam brings over 10 years of optometric experience to 360 Eyecare Yorkville.",
            },
            {
              icon: Users,
              title: "10,000+ Satisfied Patients",
              desc: "Thousands of patients have trusted 360 Eyecare with their vision care.",
            },
            {
              icon: Stethoscope,
              title: "Experienced Team",
              desc: "Our skilled optometrists and staff are committed to providing personalized care for patients of all ages.",
            },
            {
              icon: Sparkles,
              title: "Advanced Technology",
              desc: "Modern diagnostic tools help our team assess your vision and identify potential eye-health concerns.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#034D76]/10 text-[#034D76] flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#28305F] mb-3 font-poppins">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INSURANCE / OHIP */}
      <section className="py-16 sm:py-20 bg-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-extrabold text-[#28305F] font-poppins">
              Your Eye Exam May Be Covered
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Depending on your age, medical circumstances and insurance plan, you may be eligible for coverage.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              <strong>360 Eyecare Yorkville offers direct billing</strong> for many major insurance providers,
              including Sun Life, Manulife, GreenShield, Blue Cross, Desjardins and Great-West Life.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              <strong>OHIP coverage</strong> may also be available for eligible patients, including children under 20,
              adults 65+ and certain patients with specific medical conditions.
            </p>
            <p className="text-xs text-slate-500 italic">
              Coverage varies by individual plan and eligibility. Please confirm your coverage with your insurance provider or our clinic.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToForm}
                className="bg-[#204060] hover:bg-[#034D76] text-white font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all"
              >
                BOOK MY EYE EXAM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PATIENT REVIEWS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#28305F] font-poppins">
            Trusted by Patients Across Toronto
          </h2>
          <div className="flex items-center justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
            <span className="ml-2 text-sm font-semibold text-slate-700">
              4.9 / 5.0 Rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Happy I found this clinic! Everyone was welcoming. I appreciate Dr. Sam Baraam taking the time to listen to and explain everything clearly. For the comprehensive care and pricing they offer, I highly recommend this clinic. As someone with higher prescription , I value the thoroughness.",
              author: "Swathi Bojja",
            },
            {
              quote:
                "Just had my first appointment with 360 Eye Care and nothing but good things to say. The staff was super friendly, knowledgeable, and they have all the updated technology to get you in, and out of your appointment on time. Will be using them from now on and reccomend that YOU do too!",
              author: "Daniel Racioppa",
            },
            {
              quote:
                "I had a fantastic experience at this optometrist’s office from start to finish. The staff were welcoming, patient, and incredibly knowledgeable. The eye exam was thorough and clearly explained, and I never felt rushed or pressured at any point. I left feeling confident in my prescription and really happy with my glasses. Highly recommend to anyone looking for excellent eye care and great service.",
              author: "K. Conto",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "{review.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6">
                <p className="font-bold text-[#034D76] text-sm">{review.author}</p>
                <p className="text-xs text-slate-400">Verified Google Patient</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. LOCATION */}
      <section className="py-16 sm:py-24 bg-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#28305F] font-poppins">
              Conveniently Located in Yorkville
            </h2>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#40BCC8] shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-bold text-lg text-[#28305F]">
                    360 Eyecare Yorkville
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    55 Bloor St W<br />
                    Concourse Level, Suite 03<br />
                    Manulife Centre<br />
                    Toronto, ON M4W 1A5
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                Located at Bloor & Bay, our Yorkville clinic is easily accessible from
                Bloor-Yonge Station, Bay Station and the surrounding downtown Toronto neighbourhoods.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps?q=360+Eyecare+-+Yorkville+Rosedale,+55+Bloor+St+W,+Toronto,+ON+M4W+1A5,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#204060] hover:bg-[#034D76] text-white font-bold px-6 py-3.5 rounded-xl shadow transition-all text-sm"
              >
                <MapPin className="w-4 h-4 text-[#40BCC8]" />
                GET DIRECTIONS
              </a>
              <a
                href="tel:416-901-2725"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#034D76] font-bold px-6 py-3.5 rounded-xl shadow-sm transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-[#40BCC8]" />
                CALL 416-901-2725
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <GoogleMapEmbed
              src="https://www.google.com/maps?q=360+Eyecare+-+Yorkville+Rosedale,+55+Bloor+St+W,+Toronto,+ON+M4W+1A5,+Canada&output=embed"
              title="360 Eyecare Yorkville Location"
            />
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#28305F] to-[#034D76] text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            Ready to Take Care of Your Vision?
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Book your eye exam at 360 Eyecare Yorkville and take the next step toward clearer vision and eyewear you'll love. Whether you're due for a routine eye exam, need an updated prescription or are ready to explore new glasses, our team is here to help.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="bg-[#40BCC8] hover:bg-[#34a4b0] text-[#28305F] font-bold text-lg px-9 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              BOOK MY EYE EXAM
            </button>
          </div>
          <p className="text-sm text-slate-300 pt-2">
            Prefer to speak with us?{" "}
            <a href="tel:416-901-2725" className="text-[#40BCC8] font-bold underline">
              416-901-2725
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e2447] text-slate-400 py-8 text-center text-xs px-4">
        <p>© {new Date().getFullYear()} 360 Eyecare Yorkville. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BookEyeExamYorkvillePage;
