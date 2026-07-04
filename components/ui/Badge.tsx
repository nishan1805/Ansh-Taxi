import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'dark' | 'success';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'primary', 
  children, 
  className = '' 
}) => {
  const styles = {
    primary: 'bg-[#FFC107]/10 border border-[#FFC107]/20 text-primary-dark font-semibold',
    dark: 'bg-white/5 border border-white/10 text-gray-300 font-mono font-bold',
    success: 'bg-success/15 border border-success/20 text-success font-semibold'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
