'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Car, MapPin } from 'lucide-react';

interface CTAProps {
  onOpenBooking: (carType?: string, destination?: string) => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto my-6">
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-[#FFF8E1] via-[#FFE082] to-[#FFC107] border border-[#FFD54F]/60 rounded-[28px] px-6 py-12 md:py-16 lg:py-20 sm:px-12 md:px-20 shadow-[0_24px_50px_-12px_rgba(255,193,7,0.18)] overflow-hidden"
      >
        
        {/* Thin Grid Pattern across the entire section (subtle brown lines at 8% opacity) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.08]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(120,53,15,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,53,15,0.15) 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>

        {/* Soft yellow radial glow behind the content/heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white/40 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Small glowing particles */}
        <div className="absolute top-12 left-1/4 w-1.5 h-1.5 bg-[#78350F] rounded-full blur-[0.5px] opacity-25 pointer-events-none"></div>
        <div className="absolute bottom-16 right-1/4 w-1 h-1 bg-[#78350F] rounded-full blur-[0.5px] opacity-25 pointer-events-none"></div>
        <div className="absolute top-1/3 right-12 w-2 h-2 bg-[#78350F] rounded-full blur-[0.5px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-10 w-1 h-1 bg-[#78350F] rounded-full blur-[0.5px] opacity-20 pointer-events-none"></div>

        {/* Faint City Skyline Silhouette along the bottom edge (very subtle 5% opacity) */}
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-10 text-[#78350F]/5 pointer-events-none" fill="currentColor">
          <path d="M 0 100 L 0 80 L 15 80 L 15 65 L 35 65 L 35 85 L 50 85 L 50 50 L 75 50 L 75 90 L 90 90 L 90 40 L 115 40 L 115 45 L 130 45 L 130 75 L 150 75 L 150 90 L 170 90 L 170 55 L 195 55 L 195 80 L 210 80 L 210 30 L 240 30 L 240 90 L 260 90 L 260 60 L 290 60 L 290 85 L 310 85 L 310 45 L 335 45 L 335 50 L 350 50 L 350 95 L 370 95 L 370 70 L 390 70 L 390 90 L 410 90 L 410 55 L 440 55 L 440 80 L 460 80 L 460 40 L 490 40 L 490 90 L 515 90 L 515 65 L 540 65 L 540 85 L 560 85 L 560 50 L 590 50 L 590 90 L 610 90 L 610 35 L 635 35 L 635 45 L 655 45 L 655 75 L 675 75 L 675 90 L 695 90 L 695 55 L 720 55 L 720 80 L 740 80 L 740 30 L 770 30 L 770 90 L 790 90 L 790 60 L 820 60 L 820 85 L 840 85 L 840 45 L 865 45 L 865 50 L 880 50 L 880 95 L 900 95 L 900 70 L 920 70 L 920 90 L 940 90 L 940 55 L 970 55 L 970 80 L 990 80 L 990 40 L 1020 40 L 1020 90 L 1045 90 L 1045 65 L 1070 65 L 1070 85 L 1090 85 L 1090 50 L 1120 50 L 1120 90 L 1140 90 L 1140 35 L 1165 35 L 1165 100 Z" />
        </svg>

        {/* Soft road markings or lane graphics blended into the bottom background */}
        <svg viewBox="0 0 1200 120" className="absolute bottom-0 left-0 w-full h-12 text-[#78350F]/4 pointer-events-none" fill="none" stroke="currentColor">
          <line x1="0" y1="120" x2="350" y2="0" strokeWidth="1" />
          <line x1="1200" y1="120" x2="850" y2="0" strokeWidth="1" />
          <line x1="600" y1="120" x2="600" y2="0" strokeWidth="1.5" strokeDasharray="12 16" />
        </svg>

        {/* Winding route line, locations pins, glowing nodes, and dotted road patterns (7% opacity) */}
        <svg className="absolute inset-0 w-full h-full text-[#78350F]/7 pointer-events-none" fill="none" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {/* Main Route Line */}
          <path d="M -50 150 C 300 20, 450 350, 750 180 C 1000 80, 1150 280, 1250 150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" />
          <path d="M -50 150 C 300 20, 450 350, 750 180 C 1000 80, 1150 280, 1250 150" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.4" />
          
          {/* Dotted straight secondary paths */}
          <path d="M 150 310 L 450 310" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.12" />
          <path d="M 800 70 L 1100 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.12" />

          {/* Tiny glowing nodes along route */}
          <circle cx="210" cy="85" r="4" fill="#78350F" opacity="0.7" />
          <circle cx="580" cy="240" r="4" fill="#78350F" opacity="0.7" />
          <circle cx="980" cy="125" r="4" fill="#78350F" opacity="0.7" />

          {/* Location pins placed along the winding route */}
          <g transform="translate(380, 140) scale(0.85)">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#78350F" opacity="0.6" />
            <circle cx="12" cy="22" r="3" fill="#78350F" opacity="0.2" />
          </g>
          <g transform="translate(820, 110) scale(0.85)">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#78350F" opacity="0.6" />
            <circle cx="12" cy="22" r="3" fill="#78350F" opacity="0.2" />
          </g>
        </svg>

        {/* Large Semi-Transparent Luxury Sedan Illustration on the Left Side (7% Opacity) */}
        <div className="absolute -left-12 bottom-2 w-[340px] h-auto pointer-events-none hidden md:block">
          <svg viewBox="0 0 512 180" className="text-[#78350F]/7" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M15,115 C20,95 40,88 95,85 C105,85 130,52 175,45 C220,38 310,38 350,52 C390,66 410,85 440,88 C470,91 485,100 495,115 C500,125 490,132 475,132 C470,118 450,108 430,108 C410,108 392,118 388,132 L152,132 C148,118 130,108 110,108 C90,108 72,118 68,132 L30,132 C20,132 12,125 15,115 Z" />
            <circle cx="110" cy="132" r="22" />
            <circle cx="110" cy="132" r="10" />
            <circle cx="410" cy="132" r="22" />
            <circle cx="410" cy="132" r="10" />
            <line x1="110" y1="110" x2="110" y2="154" />
            <line x1="88" y1="132" x2="132" y2="132" />
            <line x1="410" y1="110" x2="410" y2="154" />
            <line x1="388" y1="132" x2="432" y2="132" />
            <path d="M172,52 L260,52 L260,82 L148,82 Z" />
            <path d="M272,52 L344,55 L386,82 L272,82 Z" />
            <line x1="266" y1="52" x2="266" y2="132" />
            <path d="M148,82 L152,132" />
            <path d="M386,82 L388,132" />
            <rect x="232" y="88" width="16" height="4" rx="2" fill="currentColor" opacity="0.3" />
            <rect x="282" y="88" width="16" height="4" rx="2" fill="currentColor" opacity="0.3" />
            <path d="M16,115 L28,115" strokeWidth="2" />
            <path d="M494,112 L484,112" strokeWidth="2" />
          </svg>
        </div>

        {/* Minimal GPS Navigation Compass / Radar Illustration on the Right Side (7% Opacity) */}
        <div className="absolute -right-8 top-6 w-44 h-44 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 200 200" className="text-[#78350F]/7" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="70" strokeDasharray="4 8" />
            <polygon points="100,60 115,100 100,90" fill="currentColor" opacity="0.4" />
            <polygon points="100,140 85,100 100,90" fill="currentColor" opacity="0.15" />
            <line x1="100" y1="20" x2="100" y2="30" />
            <line x1="100" y1="170" x2="100" y2="180" />
            <line x1="20" y1="100" x2="30" y2="100" />
            <line x1="170" y1="100" x2="180" y2="100" />
            <text x="96" y="16" fill="currentColor" fontSize="10" fontWeight="bold" opacity="0.6">N</text>
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Small icon on top */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-[#111111] text-[#FFC107] rounded-xl flex items-center justify-center mb-5 shadow-md"
          >
            <Car className="w-5 h-5" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight leading-tight mb-4 text-[#111111]">
            Ready for Your Next Journey?
          </h2>
          
          {/* Subtitle (limited max-width, perfectly centered for clean 2-line rendering) */}
          <p className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-neutral-800 leading-relaxed mb-8 max-w-[620px] mx-auto text-center">
            Experience safe, comfortable rides across Chhattisgarh with ANSH TAXI.<br className="hidden sm:inline" />
            Check vehicle availability instantly or call our team to book your journey.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 w-full max-w-[380px] sm:max-w-[400px] mx-auto">
            
            <motion.button 
              onClick={() => onOpenBooking('sedan')}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="flex-1 h-[48px] bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs sm:text-sm md:text-base rounded-[14px] shadow-[0_4px_14px_rgba(17,17,17,0.25)] hover:shadow-[0_6px_20px_rgba(17,17,17,0.35)] transition-all duration-300 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:outline-none"
              id="cta-check-availability"
            >
              Check Availability
            </motion.button>

            <motion.a 
              href="tel:+919644482331" 
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="flex-1 h-[48px] bg-transparent hover:bg-[#111111]/5 text-[#111111] border-[1.5px] border-[#111111] font-bold text-xs sm:text-sm md:text-base rounded-[14px] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:outline-none"
              id="cta-call-now"
            >
              Call Now
            </motion.a>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
