import React from 'react';

interface GradientGlowProps {
  className?: string;
}

export const GradientGlow: React.FC<GradientGlowProps> = ({ className = '' }) => {
  return (
    <div className={`absolute w-[180px] h-[180px] bg-[#FFC107]/5 rounded-full blur-[30px] pointer-events-none ${className}`} />
  );
};
