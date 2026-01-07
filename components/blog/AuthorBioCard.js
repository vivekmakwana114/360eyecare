import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaUser } from "react-icons/fa";

const AuthorBioCard = ({
  name = "Dr. John Smith",
  title = "Optometrist, 360 Eye Care- Beaches",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image,
  socials = {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
}) => {
  console.log("AuthorBioCard Image Prop:", image);
  return (
    <div className="w-full bg-[#EFEFEF] rounded-md p-6 sm:p-8 flex flex-col gap-6 font-outfit border border-[#E1E6EB]">
      {/* Header */}
      <h3 className="text-[#28305F] text-[20px] font-bold leading-[28px]">
        Author
      </h3>

      {/* Profile Section */}
      <div className="flex flex-row items-center gap-4">
        <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-100">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={60}
              height={60}
              className="w-full h-full object-cover"
            />
          ) : (
            // <FaUser className="w-10 h-10 text-white" />
            <Image
              src="/Icons/authorfallback.svg"
              alt="author-fallback"
              width={60}
              height={60}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col">
          <h4 className="text-[#111111] text-[14x] lg:text-[24px] font-bold leading-tight pb-2">
            {name}
          </h4>
          <p className="text-[#666666] text-[12px] lg:text-[16px] font-normal">
            {title}
          </p>
        </div>
      </div>

      {/* Bio Text */}
      <p className="text-[#666666] text-[16px] leading-[26px] font-normal">
        {description}
      </p>

      {/* Footer Section */}
      <div className="flex flex-row justify-between items-center  border-t border-transparent">
        <span className="text-[#888888] text-md font-medium">
          Follow {name}
        </span>

        <div className="flex flex-row gap-4">
          {socials?.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#28305F] flex items-center justify-center text-[#28305F] hover:bg-[#28305F] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          )}
          {socials?.facebook && (
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#28305F] flex items-center justify-center text-[#28305F] hover:bg-[#28305F] hover:text-white transition-all duration-300"
            >
              <FaFacebookF size={18} />
            </a>
          )}
          {socials?.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#28305F] flex items-center justify-center text-[#28305F] hover:bg-[#28305F] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorBioCard;
