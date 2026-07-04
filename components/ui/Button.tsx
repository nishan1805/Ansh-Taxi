import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-btn transition-all duration-300 focus:outline-none focus:ring-2 cursor-pointer text-center';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-primary-dark hover:shadow-btn active:scale-98 focus:ring-primary',
    secondary: 'bg-[#22C55E] hover:bg-[#1eb053] text-white active:scale-98 focus:ring-[#22C55E]',
    dark: 'bg-primary-dark hover:bg-primary-dark/90 text-white shadow-xl hover:scale-102 active:scale-98 focus:ring-primary-dark',
    outline: 'bg-transparent hover:bg-primary border border-primary-dark/10 hover:border-primary text-brand-text hover:text-primary-dark hover:scale-102 hover:shadow-btn active:scale-98',
    ghost: 'bg-transparent hover:bg-white/10 text-white focus:ring-white/20'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
