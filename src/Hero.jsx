import React from "react";
import banner from "./assets/banner2.PNG";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-7xl">
        <div
  className="
   min-h-90
  md:min-h-[550px]  // Full screen height on mobile, minimum height on desktop
    flex 
    flex-col 
    justify-center 
    bg-contain md:bg-cover  // Contain on mobile, cover on desktop
    bg-center 
    bg-no-repeat
    px-5
  "
  style={{ backgroundImage: `url(${banner})` }}
>

          {/* Text Section */}
          <div className="text-left max-w-lg text-white mb-6">
            {/* Mobile View */}
            <h1 className="text-xl font-bold mb-4 md:hidden">
              Welcome to Burger King
            </h1>
            <p className="text-lg md:hidden">
              Best burgers in Pakistan
            </p>

            {/* Tablet View */}
            <h1 className="hidden md:text-3xl md:block lg:hidden font-bold mb-4">
              Welcome to Burger King
            </h1>
            <p className="hidden  md:text-xl md:block lg:hidden">
              Best burgers in pakistan
            </p>

            {/* Desktop View */}
            <h1 className="hidden lg:text-4xl lg:block font-bold mb-4">
              Welcome to Burger King 
            </h1>
            <p className="hidden   lg:text-2xl lg:block">
              Best burgers in pakistan
            </p>
          </div>

          {/* Button Section */}
          <div className="w-full pl-0 md:pl-30 flex md:block justify-center md:justify-start">
            <button className="bg-linear-to-r from-amber-600 to-yellow-300 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:scale-105 transition transform duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;