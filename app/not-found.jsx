"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins">
      {/* Spacer to exactly match the fixed NavBar height (104px) */}
      <div className="h-[120px] shrink-0 mt-12" />
      
      {/* Centered Content Area */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center py-12 px-6 sm:px-10">
        {/* Animated Magnifying Glass Container */}
        <div className="relative h-48 mb-8 flex items-center justify-center">
          {/* Background circles for depth */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-primary rounded-full"
            style={{ backgroundColor: "#28305F" }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.05 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-secondary rounded-full"
            style={{ backgroundColor: "#40BCC8" }}
          />

          {/* Large 404 Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary relative z-10"
            style={{ color: "#28305F" }}
          >
            404
          </motion.h1>

          {/* Animated Magnifying Glass */}
          <motion.div
            animate={{
              x: [0, 40, -40, 20, -20, 0],
              y: [0, -20, 20, -10, 10, 0],
              rotate: [0, 15, -15, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-20 pointer-events-none"
          >
            <div className="p-4 bg-white rounded-full shadow-xl border-2 border-secondary/20" style={{ borderColor: "rgba(64, 188, 200, 0.2)" }}>
              <Search size={48} className="text-secondary" style={{ color: "#40BCC8" }} />
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 mt-10" style={{ color: "#28305F" }}>
            Oops! Page Not Found.
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            We searched everywhere, but we couldn't find the page you're looking for.
            It might have been moved or doesn't exist anymore.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium shadow-lg hover:shadow-primary/30"
            style={{ backgroundColor: "#28305F" }}
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/book-eye-exam"
            className="flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-3 rounded-md hover:bg-secondary hover:text-white transition-all font-medium"
            style={{ borderColor: "#40BCC8", color: "#40BCC8" }}
          >
            <Calendar size={18} />
            Book an Eye Exam
          </Link>
        </motion.div>

        {/* Subtle Decorative Elements */}
        <div className="mt-16 text-sm italic">
          <p className="text-[#28305F] text-base">"Eyes on the prize, even when the page is lost."</p>
        </div>
      </div>
    </div>
  </div>
);
}
