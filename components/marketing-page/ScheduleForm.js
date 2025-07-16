"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ScheduleForm = () => {
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
          message:
            "Appointment scheduled successfully! We will contact you soon.",
        });
        reset();
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
    <div className="w-full md:w-1/2 items-center justify-center">
      <div className="bg-[#40BCC8] md:rounded-[8px] rounded-none p-[24px] md:p-[32px] w-full max-w-[539px]">
        <h3 className="text-[#28305F] text-center text-[18px] md:text-[20px] font-[600] mb-[20px] md:mb-[24px]">
          Schedule your Appointment
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="text-[28305F] text-sm font-medium block mb-1"
              >
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Your First Name"
                className={`w-full px-4 py-2 bg-white border rounded-lg text-sm outline-none transition-colors ${
                  errors.firstName
                    ? "border-red-500"
                    : "border-gray-200 focus:border-[#28305F]"
                }`}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="text-[28305F] text-sm font-medium block mb-1"
              >
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Your Last Name"
                className={`w-full px-4 py-2 bg-white border rounded-lg text-sm outline-none transition-colors ${
                  errors.lastName
                    ? "border-red-500"
                    : "border-gray-200 focus:border-[#28305F]"
                }`}
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="text-[28305F] text-sm font-medium block mb-1"
              >
                Phone Number *
              </label>
              <input
                id="phoneNumber"
                type="number"
                placeholder="Your Phone"
                className={`w-full px-4 py-2 bg-white border rounded-lg text-sm outline-none transition-colors ${
                  errors.phoneNumber
                    ? "border-red-500"
                    : "border-gray-200 focus:border-[#28305F]"
                }`}
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+\-\s()]{10,}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-[28305F] text-sm font-medium block mb-1"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-2 bg-white border rounded-lg text-sm outline-none transition-colors ${
                  errors.email
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
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#28305F] text-white py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#1a1f3d]"
              }`}
            >
              {isSubmitting ? "Scheduling..." : "Schedule your Appointment"}
            </button>

            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`mt-2 p-3 rounded-lg text-sm ${
                  submitStatus.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
