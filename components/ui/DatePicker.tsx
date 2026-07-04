import React from 'react';
import { Calendar } from 'lucide-react';

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className = '',
  onClick,
  ...props
}) => {
  const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    try {
      e.currentTarget.showPicker();
    } catch (err) {}
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC107] pointer-events-none">
        <Calendar className="w-5 h-5" />
      </div>
      <input
        type="date"
        onClick={handleOnClick}
        className={`relative w-full h-14 bg-black/40 hover:bg-black/50 border border-white/10 rounded-[16px] py-3 text-sm text-white focus:ring-2 focus:ring-[#FFC107]/50 focus:border-[#FFC107]/50 focus:outline-none focus:bg-black/70 shadow-[0_0_15px_rgba(255,193,7,0.1)] transition-all duration-300 pl-12 pr-4 cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer ${className}`}
        {...props}
      />
    </div>
  );
};
