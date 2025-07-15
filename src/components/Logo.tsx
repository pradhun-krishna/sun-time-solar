import React from "react";
import SunTimeSolarLogo from "./Sun time solar square logo.svg";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <img
          src={SunTimeSolarLogo}
          alt="Sun Time Solar Logo"
          className="w-full h-full object-contain"
        />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-solar-800 rounded-full border-2 border-white dark:border-gray-800"></div>
      </div>
      <div className="text-sun-400 text-2xl sm:text-3xl font-bold">
        <span className="text-white">Sun</span>Time Solar
      </div>
    </div>
  );
};

export default Logo;
