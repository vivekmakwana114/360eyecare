"use client";
import Image from "next/image";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

const AuthorBio = ({ author }) => {
  // If no author data, don't render
  if (!author) return null;

  // Extract author details
  const authorName = author.name || "Unknown Author";
  const authorDescription = author.description || "";
  const authorAvatar = author.avatar_urls?.["96"] || "/default-avatar.png";
  const authorRole = author.acf?.role || "Optometrist, 360 Eye Care - Beaches"; // ACF custom field or fallback

  // Social links (if using ACF or custom fields)
  const socialLinks = {
    linkedin: author.acf?.linkedin || "",
    facebook: author.acf?.facebook || "",
    instagram: author.acf?.instagram || "",
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-10">
      <h3 className="text-[#28305F] font-bold text-[24px] md:text-[28px] mb-6">
        Author
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-[#28305F] flex items-center justify-center">
            {authorAvatar && authorAvatar !== "/default-avatar.png" ? (
              <Image
                src={authorAvatar}
                alt={authorName}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-white text-3xl font-bold">
                {authorName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h4 className="text-[#28305F] font-semibold text-[20px] md:text-[22px] mb-1">
            {authorName}
          </h4>
          <p className="text-gray-600 text-[14px] md:text-[15px] mb-4">
            {authorRole}
          </p>

          {authorDescription && (
            <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed mb-4">
              {authorDescription}
            </p>
          )}

          {/* Social Links */}
          {(socialLinks.linkedin ||
            socialLinks.facebook ||
            socialLinks.instagram) && (
            <div className="flex items-center gap-3">
              <p className="text-gray-600 text-[14px] font-medium">
                Follow {authorName.split(" ")[0]}
              </p>
              <div className="flex gap-2">
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all"
                  >
                    <FaLinkedin size={16} />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
                  >
                    <FaFacebookF size={16} />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all"
                  >
                    <FaInstagram size={16} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
