"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import { usePathname } from "next/navigation";

const RootLayout2 = ({ children }) => {
  const pathname = usePathname();
  const cleanPath = pathname ? pathname.replace(/\/$/, "") : "";

  const hiddenRoutes = [
    "/shop",
    "/book-eye-consultation-yorkville",
    "/book-eye-exam-yorkville",
    "/thank-you",
  ];

  const hideLayout = hiddenRoutes.includes(cleanPath);

  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default RootLayout2;
