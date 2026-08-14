"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import { usePathname } from "next/navigation";

const RootLayout2 = ({ children }) => {
  const pathname = usePathname();
  const hideLayout =
    pathname === "/shop/" ||
    pathname === "/book-eye-consultation-yorkville" ||
    pathname === "/book-eye-exam-yorkville" ||
    pathname === "/thank-you";

  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default RootLayout2;
