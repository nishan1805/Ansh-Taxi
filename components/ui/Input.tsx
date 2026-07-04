import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ 
  icon, 
  className = '', 
  type,
  onClick,
  ...props 
}) => {
  const isPicker = type === 'date' || type === 'time';

  const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (isPicker) {
      try {
        e.currentTarget.showPicker();
      } catch (err) {}
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC107] pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        onClick={handleOnClick}
        className={`w-full h-14 bg-black/40 hover:bg-black/50 border border-white/10 rounded-[16px] py-3 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FFC107]/50 focus:border-[#FFC107]/50 focus:outline-none focus:bg-black/70 shadow-[0_0_15px_rgba(255,193,7,0.1)] transition-all duration-300 ${
          icon ? 'pl-12' : 'px-4'
        } ${isPicker ? 'relative cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer' : ''} ${className}`}
        {...props}
      />
    </div>
  );
};
