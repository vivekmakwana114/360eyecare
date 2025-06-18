"use client";
import Footer from "components/Footer";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <iframe
          src="https://360eyecare.ottooptics.io/reorder/"
          className="w-full h-full border-0"
          title="360 Eyecare Shop"
          scrolling="yes"
        />
        <Footer />
      </div>
    </>
  );
};

export default Page;
