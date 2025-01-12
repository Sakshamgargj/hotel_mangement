"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [imgChange, setImgChange] = useState("/images/heroSection/img.png")
  const [videoChange, setVideoChange] = useState("/videos/hotel.mp4")
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideo, setIsVideo] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    {
      label: "ALL HOTELS\n&  RESORTS",
      icon: "🏨",
      log: "/images/heroSection/hotel1.png"
    },
    {
      label: "RESIDENCES",
      icon: "🏠",
      log: "/images/heroSection/img.png"

    },
    {
      label: "DINING",
      icon: "🍴",
      log: "/images/heroSection/dinner1.png"
    },
    {
      label: "PRIVATE RETREATS",
      icon: "🌴",
      log: "/images/heroSection/retreats.png"
    },

    // { 
    //   label: "SHOP", 
    //   icon: "🛍️",
    // },
  ];

  const handleMouseEnter = (i) => {
    setIsVideo(false);
    if(menuItems[i].log == "/images/heroSection/hotel1.png"){
      setIsVideo(true);
    }
    setImgChange(menuItems[i].log);
    // console.log(menuItems[i].log);
  };

  return (
    <div className="relative  h-[600px] md:h-[700px] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            src={videoChange}
            autoPlay
            muted
            loop
            className="w-full h-screen object-cover"
          />
        ) : (
          <Image
            src={imgChange}
            alt="Luxury Living"
            fill
            priority
            className="object-cover transition-transform duration-1000"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/10 to-black/10" ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full  bg-gradient-to-r from-black/80 via-black/20 to-black/5">
        <div className="absolute top-1/2 md:top-1/4  transform -translate-y-1/2 px-6 md:px-16 
                      w-full md:max-w-2xl">
          <div className="font-serif md:text-left">
            <span className="block text-2xl md:text-4xl text-white tracking-wide mb-1 md:mb-2 duration-1000 transform hover:scale-105">
              THE DEFINITION OF
            </span>
            <span className="block text-2xl md:text-4xl text-white  tracking-wide mb-1 md:mb-2 duration-1000 transform hover:scale-105">
              LUXURY &
            </span>
            <span className="block text-2xl md:text-4xl text-white tracking-wide duration-1000 transform hover:scale-105">
              MODERN LIVING
            </span>
          </div>

          {/* Search Bar */}
          <div className={`mt-8 md:mt-12 relative transition-all duration-300 ${isSearchFocused ? "scale-[1.02]" : "scale-100"
            }`}>
            <input
              type="text"
              placeholder="Find a  Residence"
              className="w-full rounded-full py-2 font-sans text-lg md:py-4 px-4 md:px-6 bg-white/90 backdrop-blur-sm
                       text-black placeholder-gray-500 italic md:text-base
                       focus:outline-none focus:ring-1 focus:ring-white/50
                       transition-all duration-300"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="container mx-auto px-4 md:px-8 py-6 md:py-20">
            {/* Mobile Navigation */}
            <div className="md:hidden grid grid-cols-4 gap-4 mb-4">
              {menuItems.slice(0, 4).map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-6 mx-auto mb-1 opacity-70 group-hover:opacity-100 
                                transition-opacity duration-300">
                    {item.icon}
                  </div>
                  <span className="text-white/80 text-[10px] font-light tracking-wider
                                group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="md:hidden grid grid-cols-3 gap-4">
              {menuItems.slice(4).map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-6 mx-auto mb-1 opacity-70 group-hover:opacity-100 
                                transition-opacity duration-300">
                    {item.icon}
                  </div>
                  <span className="text-white/80 text-[10px] font-light tracking-wider
                                group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:grid grid-cols-7 gap-4">
              {menuItems.map((item, index) => (
                <div key={index} onMouseEnter={() => { handleMouseEnter(index) }}
                  className="text-center group cursor-pointer transform transition-transform duration-1000 hover:scale-110 "
                >
                  <hr className="mb-2 border-t-4 border-white w-full mx-auto transition-all hover:border-t-4 hover:border-gray-500" />
                  <div className="w-8 mx-auto mb-1 opacity-70 group-hover:opacity-100 transition-opacity transform group-hover:scale-110"
                  >
                    {item.icon}
                  </div>
                  <span className="text-white/90 text-[10px] font-semibold tracking-wider whitespace-pre-line group-hover:text-yellow-200 transition-colors duration-300"
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;