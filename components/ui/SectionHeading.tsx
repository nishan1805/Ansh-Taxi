import React from 'react';

interface SectionHeadingProps {
  tag: string;
  title: string;
  description: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`text-center mb-16 max-w-3xl mx-auto flex flex-col items-center ${className}`}>
      {/* EYEBROW */}
      <span className={`inline-flex items-center justify-center h-7 px-3.5 rounded-full text-[10px] font-mono tracking-widest font-extrabold uppercase mb-4 border transition-colors ${
        isDark 
          ? 'bg-white/5 border-white/10 text-[#FFC107]' 
          : 'bg-[#FFFFFF] border-[#FFC107] text-[#111111]'
      }`}>
        {tag}
      </span>
      
      {/* TITLE */}
      <h2 className={`text-3xl sm:text-4xl font-heading font-black tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-[#151517]'
      }`}>
        {title}
      </h2>
      
      {/* ACCENT LINE */}
      <div className="w-16 h-1 bg-[#FFC107] mt-4 rounded-full"></div>
      
      {/* DESCRIPTION */}
      <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mt-5 ${
        isDark ? 'text-neutral-400 opacity-90' : 'text-neutral-600'
      }`}>
        {description}
      </p>
    </div>
  );
};
