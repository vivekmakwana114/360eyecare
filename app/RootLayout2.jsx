"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import { usePathname } from "next/navigation";

const RootLayout2 = ({ children }) => {
  const hideLayout =
    usePathname() === "/shop/" ||
    usePathname() === "/book-eye-consultation-yorkville" ||
    usePathname() === "/thank-you";

  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default RootLayout2;
