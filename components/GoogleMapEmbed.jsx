"use client";

const GoogleMapEmbed = ({
  src,
  className = "h-[500px]",
  title = "Google Map",
}) => {
  return (
    <div className="relative w-full h-full font-sans flex-1 flex flex-col">
      {/* Google Maps iFrame */}
      <iframe
        src={src}
        title={title}
        className={`w-full border-0 flex-1 ${className}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
