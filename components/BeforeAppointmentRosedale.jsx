"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BeforeAppointmentRosedale = () => {
  return (
    <div className="w-full bg-[#28305F] py-12 px-4">
      <div className="max-w-7xl mx-auto md:px-[60px] flex flex-col">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-poppins font-semibold text-white text-2xl md:text-[28px] tracking-wide">
            Do you have any questions before your appointment?
          </h2>
        </div>

        {/* Responsive Grid for Columns */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {/* Let's Talk Section */}
          <div className="border border-combination-100 p-6 flex flex-col gap-6">
            <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
              Let's Talk
            </p>
            {[
              {
                icon: "/call.svg",
                head: "416-901-2725",
                link: "tel:416-901-2725",
              },
              // {
              //   icon: "/fax.svg",
              //   head: "416-901-2727",
              //   link: "tel:416-901-2727",
              // },
              {
                icon: "/email.svg",
                head: "yorkville@360eyecare.ca",
                link: "mailto:yorkville@360eyecare.ca",
              },
            ].map((item) => (
              <div key={item.head} className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 bg-combination-100 rounded-[6px] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="Contact Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <Link href={item.link} className="text-base text-white">
                  {item.head}
                </Link>
              </div>
            ))}
            <div className="text-white leading-relaxed ">
              <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
                Locate Us
              </p>
              <p className="font-semibold mt-4">
                360 Eyecare Yorkville
              </p>
              <p className="flex items-start gap-2 mt-4">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
               55 Bloor St W, Concourse Level, Suite 03, Manulife Centre, Toronto, ON M4W 1A5, Canada
              </p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="border border-combination-100 p-6 flex flex-col gap-6">
            <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
              Business Hours
            </p>

            <div className="grid grid-cols-1 gap-y-3">
              {[
                { head: "Mon : ", para: " 9:00am – 6:00pm" },
                { head: "Tue : ", para: " 9:00am – 6:00pm" },
                { head: "Wed : ", para: " 9:00am – 7:00pm" },
                { head: "Thur : ", para: " 9:00am – 6:00pm" },
                { head: "Fri : ", para: " 9:00am – 6:00pm" },
                { head: "Sat : ", para: "9:00am – 4:00pm" },
                { head: "Sun : ", para: "Closed" },
              ].map((item) => (
                <div
                  key={item.head}
                  className="flex flex-row gap-3 items-center"
                >
                  <Image
                    src={"/clock.svg"}
                    alt="Clock Icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-white">
                    {item.head}
                    <span className="text-white">{item.para}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="border border-combination-100 p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
                Transit & Accessibility
              </p>

              <div className="grid grid-cols-1 gap-y-3">
                {[
                  { id: 1, para: "Bloor-Yonge Station" },
                  { id: 2, para: "Bay Station" },
                  { id: 3, para: "PATH Connected" },
                  { id: 4, para: "Manulife Centre" },
                  { id: 5, para: "TTC Bus Routes" },
                  { id: 6, para: "Street Parking" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row gap-3 items-center"
                  >
                    <Image
                      src={"/leaf.svg"}
                      alt="Clock Icon"
                      width={24}
                      height={24}
                    />
                    <p className="text-base text-white">
                      <span className="text-white">{item.para}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAppointmentRosedale;
