import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    icon: "/call.svg",
    number: "416-901-2725",
    text: "416-901-2725",
  },
  {
    icon: "/email.svg",
    email: "yorkville@360eyecare.ca",
    text: "yorkville@360eyecare.ca",
  },
];

const socialLinks = [
  {
    icon: "/facebook.svg",
    link: "https://www.facebook.com/360eyecare.yorkville?locale=ms_MY",
  },
  {
    icon: "/instagram.svg",
    link: "https://www.instagram.com/360eyecare_yorkville/?hl=en",
  },
  {
    icon: "/twitter.svg",
    link: "https://x.com/360eyecare",
  },
];

const Footer = () => {
  return (
    <div className="w-full max-w-svh mx-auto bg-[#40BCC8] border-t border-[#E1E6EB] py-[20px] pb-28 md:pb-0">
      <div className="max-w-[1200px] w-full px-4 md:px-0 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[24px] border-b border-[#55D3DF] pb-[20px]">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/eye-care-360.svg"
                alt="Logo"
                width={100}
                height={100}
                className="w-[81px] h-[40px] md:w-[142px] md:h-[70px] object-contain"
              />
            </Link>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[60px]">
            {/* Contact Links */}
            <div className="flex  sm:flex-row items-center gap-[16px] sm:gap-[20px]">
              {links.map((link) => (
                <Link
                  key={link.text}
                  href={
                    link.number
                      ? `tel:${link.number}`
                      : link.email
                      ? `mailto:${link.email}`
                      : "/"
                  }
                >
                  <div className="flex flex-row gap-[4px] items-center">
                    <Image src={link.icon} width={28} height={28} alt="" />
                    <p className="font-[500] text-[14px] text-white">
                      {link.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-row gap-[16px] md:gap-[20px]">
              {socialLinks.map((link) => (
                <Link key={link.link} href={link.link}>
                  <Image src={link.icon} width={28} height={28} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-[20px] text-center md:text-left">
          <p className="text-[12px] font-[400] text-white">
            © 2025 360 Eye Care, All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
