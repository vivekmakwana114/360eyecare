import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="border-b border-[#E1E6EB] py-[15px] w-full">
      <div className="flex items-center   md:max-w-[1200px] md:mx-auto  mw-full h-[70px] mx-auto sticky top-0 z-50">
        <Link href="/">
          <Image
            src="/eye-care-360.svg"
            alt="Logo"
            width={100}
            height={100}
            className="md:w-[142px] md:h-[70px] w-[81x] h-[40px] object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
