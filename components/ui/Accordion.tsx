'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  className = ''
}) => {
  return (
    <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-[#FFC107] ring-1 ring-[#FFC107]/20 shadow-md' : 'border-[#EBEBEF] shadow-sm'
    } ${className}`}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="group w-full flex items-center justify-between p-6 text-left font-bold text-base md:text-lg text-[#151517] hover:bg-gray-50/50 transition-colors focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'rotate-180 bg-[#FFC107] text-black shadow-sm' 
            : 'bg-[#F4F4F5] text-[#151517] group-hover:bg-[#FFC107] group-hover:text-black'
        }`}>
          <ChevronUp className="w-4 h-4" />
        </span>
      </button>

      {/* Answer Area */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-[#EBEBEF] text-gray-500 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
