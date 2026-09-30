import React from 'react';

export default function BrandLogo({ variant = 'dark', size = 'default', className = '' }) {
  const isLight = variant === 'light'; // For dark backgrounds (like footer or dark banner)

  const sizeStyles = {
    small: {
      img: 'h-8 sm:h-9 w-auto',
      title: 'text-xs sm:text-sm font-bold',
      tagline: 'text-[7.5px] sm:text-[8.5px] tracking-normal sm:tracking-wide',
      gap: 'gap-2',
    },
    default: {
      img: 'h-9 sm:h-11 w-auto',
      title: 'text-xs sm:text-[13px] md:text-sm lg:text-[15px] font-bold',
      tagline: 'text-[8px] sm:text-[9px] md:text-[10px] tracking-normal sm:tracking-wide',
      gap: 'gap-2 sm:gap-2.5',
    },
    large: {
      img: 'h-12 sm:h-14 w-auto',
      title: 'text-base sm:text-lg font-bold',
      tagline: 'text-[9.5px] sm:text-xs tracking-wide',
      gap: 'gap-3',
    },
  }[size] || {
    img: 'h-9 sm:h-11 w-auto',
    title: 'text-xs sm:text-sm md:text-base font-bold',
    tagline: 'text-[8px] sm:text-[9.5px] tracking-wide',
    gap: 'gap-2 sm:gap-2.5',
  };

  return (
    <div className={`flex items-center ${sizeStyles.gap} select-none ${className}`}>
      {/* Official MK Logo from /mk_logo.png */}
      <div className={`relative shrink-0 flex items-center justify-center ${isLight ? 'bg-white rounded-lg p-0.5 shadow-sm' : ''}`}>
        <img
          src="/mk_logo.png"
          alt="SHRI MK EMBEDDED SOLUTIONS"
          className={`${sizeStyles.img} object-contain transition-transform duration-300 group-hover:scale-105`}
          loading="eager"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1">
          <span
            className={`font-heading tracking-tight ${sizeStyles.title} ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            SHRI MK <span className="text-[#0D5C3A] dark:text-emerald-400 font-extrabold">EMBEDDED SOLUTIONS</span>
          </span>
        </div>
        <span
          className={`font-medium italic ${sizeStyles.tagline} ${
            isLight ? 'text-emerald-400/90' : 'text-[#0D5C3A]'
          }`}
        >
          where life made easier
        </span>
      </div>
    </div>
  );
}

