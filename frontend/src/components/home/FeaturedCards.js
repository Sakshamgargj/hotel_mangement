'use client';

import React, { useState } from 'react';
import Cards from './Cards'; // Ensure this is correctly linked

const cardItems = [
  {
    title: "FORT LAUDERDALE",
    image: "/images/heroSection/hotel1.png",
    description:
      "Perfect for every kind of island adventures, our white-sand Resort epitomises the spirit of India.",
    link: "/fort-lauderdale",
  },
  {
    title: "HUALALAI",
    image: "/images/heroSection/hotel1.png",
    description:
      "Perfect for every kind of island adventures, our white-sand Resort epitomises the spirit of India.",
    link: "/hualalai",
  },
  {
    title: "LANAI",
    image: "/images/heroSection/hotel1.png",
    description:
      "Perfect for every kind of island adventures, our white-sand Resort epitomises the spirit of India.",
    link: "/lanai",
  },
];

export default function FeaturedCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cardItems.length) % cardItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardItems.length);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-20 pointer-events-none"></div>

      {/* Title */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Explore Our Properties
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mt-2">
          Discover your dream destination today.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="flex items-center justify-center relative z-10 w-full max-w-6xl px-4">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 bg-gray-800/60 text-white p-3 rounded-full hover:bg-gray-800 transition z-20"
        >
          ⟵
        </button>

        {/* Cards */}
        <div className="flex gap-6 items-center  w-full justify-center">
          {cardItems.map((item, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + cardItems.length) % cardItems.length;
            const isNext = index === (activeIndex + 1) % cardItems.length;

            return (
              <Cards
                key={index}
                item={item}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
              />
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 bg-gray-800/60 text-white p-3 rounded-full hover:bg-gray-800 transition z-20"
        >
          ⟶
        </button>
      </div>
    </div>
  );
}
