"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const ScheduleForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const response = await fetch("/api/digital-eye-stain-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Appointment scheduled successfully! Redirecting...",
        });
        reset();
        // Redirect to thank you page after a short delay to show success message
        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        throw new Error(result.message || "Failed to schedule appointment");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-[#FFFFFF80] md:rounded-[12px] rounded-none md:p-[40px] p-[24px] w-full max-w-[500px] flex flex-col gap-y-5">
        <div>
          <h3 className="text-[#28305F] text-center text-[20px] md:text-[24px] font-[700] mb-[32px]">
            Book Your FREE Consultation
          </h3>
          <p className="text-black text-center flex justify-center items-center space-x-2">
            <img src="/public/clock.gif" alt="" width={30} height={30} className="inline-block mix-blend-multiply" />
            <span>Only 6 spots left today</span>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[20px]">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="text-[#28305F] text-[16px] font-[500] block mb-[8px]"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder=""
                className={`w-full px-[16px] py-[12px] bg-white border rounded-[6px] text-[14px] outline-none transition-colors ${errors.firstName
                    ? "border-red-500"
                    : "border-gray-200 focus:border-[#28305F]"
                  }`}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="mt-[4px] text-[12px] text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="text-[#28305F] text-[16px] font-[500] block mb-[8px]"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder=""
                className={`w-full px-[16px] py-[12px] bg-white border rounded-[6px] text-[14px] outline-none transition-colors ${errors.lastName
                    ? "border-red-500"
                    : "border-gray-200 focus:border-[#28305F]"
                  }`}
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && (
                <p className="mt-[4px] text-[12px] text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="text-[#28305F] text-[16px] font-[500] block mb-[8px]"
              >
                Phone number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className={`w-full px-[16px] py-[12px] bg-white border rounded-[6px] text-[14px] outline-none transition-colors ${errors.phoneNumber
                    ? "border-red-500"
                    : "border-gray-200 focus:border-[#28305F]"
                  }`}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,}$/,
                    message: "Please enter a valid phone number (numbers only)",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="mt-[4px] text-[12px] text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-[#28305F] text-[16px] font-[500] block mb-[8px]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder=""
                className={`w-full px-[16px] py-[12px] bg-white border rounded-[6px] text-[14px] outline-none transition-colors ${errors.email
                    ? "border-red-500"
                    : "border-gray-200 focus:border-[#28305F]"
                  }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailRegex,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-[4px] text-[12px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#28305F] text-white py-[14px] px-[16px] rounded-[6px] text-[16px] font-[600] transition-colors mt-[12px] ${isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#1a1f3d]"
                }`}
            >
              {isSubmitting ? "Scheduling..." : "GET MY FREE CONSULTATION NOW"}
            </button>

            {/* Status Message */}
            {/* {submitStatus.message && (
              <div
                className={`mt-[8px] p-[12px] rounded-[6px] text-[12px] ${
                  submitStatus.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )} */}
          </div>

          <div className="text-[12px] text-[#28305F] flex flex-col gap-y-2 md:p-4 px-2 py-4 items-center">
            <div className="flex md:gap-x-10 gap-x-5">
              <div className="flex flex-row items-center gap-x-2">
                <img src="/public/no-hidden-fees.png" alt="" className="w-5 h-4 object-contain" />
                <span>No hidden Fees</span>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <img src="/public/no-card-require.png" alt="" className="w-5 h-4 object-contain" />
                <span>No Card require</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-x-2">
              <img src="/public/Call.png" alt="" className="w-4 h-4 object-contain" />
              <span>We'll call you within 2 hours to confirm</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
