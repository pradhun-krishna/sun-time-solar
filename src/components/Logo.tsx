import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label="Sun Time Solar logo"
    >
      {/* Sun icon */}
      <div className="relative h-8 w-8">
        <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD166" />
              <stop offset="100%" stopColor="#F7B801" />
            </radialGradient>
          </defs>
          {/* Rays */}
          <g stroke="#FDBA21" strokeWidth="2" strokeLinecap="round">
            <line x1="24" y1="3" x2="24" y2="9" />
            <line x1="24" y1="39" x2="24" y2="45" />
            <line x1="3" y1="24" x2="9" y2="24" />
            <line x1="39" y1="24" x2="45" y2="24" />
            <line x1="8" y1="8" x2="12" y2="12" />
            <line x1="36" y1="36" x2="40" y2="40" />
            <line x1="8" y1="40" x2="12" y2="36" />
            <line x1="36" y1="12" x2="40" y2="8" />
          </g>
          {/* Core */}
          <circle cx="24" cy="24" r="8" fill="url(#sunGlow)" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="leading-none">
        <span className="text-[18px] sm:text-xl font-extrabold tracking-tight text-sun-500">
          Sun
        </span>
        <span className="text-[18px] sm:text-xl font-extrabold tracking-tight text-gray-900">
          &nbsp;Time&nbsp;
        </span>
        <span className="text-[18px] sm:text-xl font-extrabold tracking-tight text-gray-900">
          Solar
        </span>
      </div>
    </div>
  );
};

export default Logo;
