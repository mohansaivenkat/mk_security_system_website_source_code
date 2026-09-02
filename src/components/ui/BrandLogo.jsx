import React from 'react';

export default function BrandLogo({ variant = 'dark', size = 'default', className = '' }) {
  const isLight = variant === 'light'; // For dark backgrounds (like footer or dark banner)

  const sizeStyles = {
    small: {
      badge: 'w-7 h-7 text-xs',
      title: 'text-xs sm:text-sm font-bold',
      subtitle: 'text-[8px] sm:text-[9px] tracking-wider',
      gap: 'gap-1.5 sm:gap-2',
    },
    default: {
      badge: 'w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base',
      title: 'text-sm sm:text-base font-bold',
      subtitle: 'text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest',
      gap: 'gap-2 sm:gap-2.5',
    },
    large: {
      badge: 'w-10 h-10 sm:w-12 sm:h-12 text-base sm:text-lg',
      title: 'text-base sm:text-lg font-bold',
      subtitle: 'text-[10px] sm:text-xs tracking-widest',
      gap: 'gap-2.5 sm:gap-3',
    },
  }[size] || {
    badge: 'w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base',
    title: 'text-sm sm:text-base font-bold',
    subtitle: 'text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest',
    gap: 'gap-2 sm:gap-2.5',
  };

  return (
    <div className={`flex items-center ${sizeStyles.gap} select-none ${className}`}>
      {/* Engineered MK Hex/Shield Monogram Badge */}
      <div
        className={`relative flex items-center justify-center ${sizeStyles.badge} rounded-lg sm:rounded-xl font-heading font-black tracking-tighter shrink-0 shadow-sm sm:shadow-md transition-transform duration-300 group-hover:scale-105`}
        style={{
          background: 'linear-gradient(135deg, #0D5C3A 0%, #062819 100%)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          boxShadow: '0 2px 8px rgba(13, 92, 58, 0.2)',
        }}
      >
        {/* Letters MK */}
        <span className="relative z-10 text-white font-extrabold tracking-tight">
          MK
        </span>

        {/* Status indicator dot */}
        
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1">
          <span
            className={`font-heading tracking-tight ${sizeStyles.title} ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            MK SECURITY
          </span>
          <span className="text-emerald-600 font-heading font-bold text-[10px] sm:text-xs">
            SYSTEMS
          </span>
        </div>
        <span
          className={`font-mono font-medium uppercase ${sizeStyles.subtitle} ${
            isLight ? 'text-emerald-400/90' : 'text-emerald-800'
          }`}
        >
          <span className="hidden sm:inline">Smart Automation & Embedded Solutions</span>
          <span className="sm:hidden">Automation & Security</span>
        </span>
      </div>
    </div>
  );
}
