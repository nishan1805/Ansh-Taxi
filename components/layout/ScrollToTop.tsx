'use client';

import React from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScrollToTopProps {
  show: boolean;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FFC107] text-[#0F0F10] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-[#0F0F10]/10 focus:outline-none"
          aria-label="Scroll back to top"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
