"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import { usePathname } from "next/navigation";

const RootLayout2 = ({ children }) => {
  const hideLayout =
    usePathname() === "/shop" ||
    usePathname() === "/landing-digital-eye-stain-checkup";
  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default RootLayout2;
