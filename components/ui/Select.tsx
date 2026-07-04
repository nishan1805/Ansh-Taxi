import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  icon,
  options,
  className = '',
  ...props
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFC107] pointer-events-none">
          {icon}
        </div>
      )}
      <select
        className={`w-full h-14 bg-black/40 hover:bg-black/50 border border-white/10 rounded-[16px] py-3 text-sm text-white focus:ring-2 focus:ring-[#FFC107]/50 focus:border-[#FFC107]/50 focus:outline-none focus:bg-black/70 shadow-[0_0_15px_rgba(255,193,7,0.1)] transition-all duration-300 appearance-none cursor-pointer ${
          icon ? 'pl-12 pr-10' : 'px-4 pr-10'
        } ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#151517] text-white">
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
