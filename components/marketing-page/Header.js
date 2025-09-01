"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathname = usePathname();
  const isBookingPage = pathname === "/book-eye-consultation-yorkville";

  return (
    <div
      className={`w-full py-[15px]  ${
        isBookingPage ? "bg-[#E1E6EB] shadow-sm shadow-[#0D2B64] border-b border-[#CFCFCF]" : "bg-gray-50 border-b border-[#E1E6EB]"
      }`}
    >
      <div className="flex items-center justify-between md:max-w-[1200px] md:mx-auto h-[70px] mx-auto sticky top-0 z-50 px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/eye-care-360.svg"
            alt="Logo"
            width={142}
            height={70}
            className="w-[100px] h-[50px] object-contain md:w-[142px] md:h-[70px]"
          />
        </Link>

        <div className="flex items-center gap-x-2">
        <Image
            src="/phone.png"
            alt="not available"
            width={20}
            height={20}
            className="w-[20px] h-[20px] object-contain"
          />
          <span className="font-bold text-[#28305F] text-[20px]">416-901-2725</span>
        </div>
      </div>
    </div>
  );
};

export default Header;