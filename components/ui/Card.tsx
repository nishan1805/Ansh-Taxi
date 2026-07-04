import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'dark' | 'glass';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ 
  variant = 'white', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'rounded-card transition-all duration-300';
  
  const variants = {
    white: 'bg-white border border-border-custom shadow-card',
    dark: 'bg-[#151517] border border-white/5 shadow-lg',
    glass: 'bg-white/[0.04] backdrop-blur-xl border border-white/10'
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};
