import React from 'react';

interface TabsProps {
  value: string;
  onValueChange: (val: any) => void;
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ 
  value, 
  onValueChange, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<TabTriggerProps>(child)) {
          return React.cloneElement(child, {
            activeValue: value,
            onClick: () => onValueChange(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
};

interface TabTriggerProps {
  value: string;
  children: React.ReactNode;
  activeValue?: string;
  onClick?: () => void;
  className?: string;
}

export const TabTrigger: React.FC<TabTriggerProps> = ({ 
  value, 
  children, 
  activeValue, 
  onClick, 
  className = '' 
}) => {
  const isActive = activeValue === value;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-5 py-3 text-xs md:text-sm font-bold rounded-[14px] transition-all cursor-pointer group shrink-0 ${
        isActive ? 'text-black font-extrabold bg-[#FFC107]' : 'text-gray-300 hover:text-white hover:bg-white/5'
      } ${className}`}
    >
      {children}
    </button>
  );
};
