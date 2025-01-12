import React from "react";
import Link from "next/link";
import Image from "next/image";

const ResortBanner = () => {
  return (
    <div className="bg-black h-[600px] md:h-[700px] p-8 lg:p-24">
      <div className="relative h-full w-auto overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner/banner.png"
            alt="Luxury Living"
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-16 text-left">
            <div className="max-w-2xl">
              {/* Heading and Subtitle */}
              <span className="text-sm lg:text-base uppercase tracking-wide text-gray-300">
                Introducing Our New
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold my-4 text-white">
                Residential
              </h1>
              <p className="text-base lg:text-lg font-light text-gray-300 mb-6">
                Luxurious, just in time for the holidays.
              </p>

              {/* Button */}
              <div className="mt-8">
                <Link href="/shop">
                  <p className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md shadow-md transition
                  hover:bg-black hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    Book Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortBanner;
