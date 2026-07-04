'use client';

import React from 'react';

interface AnimatedBackgroundProps {
  opacity?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ opacity = 0.1 }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity }}>
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[#FFC107]/10 rounded-full blur-[110px]" />
      <div className="absolute bottom-[30%] right-[5%] w-[350px] h-[350px] bg-[#FFC107]/5 rounded-full blur-[90px]" />
    </div>
  );
};
