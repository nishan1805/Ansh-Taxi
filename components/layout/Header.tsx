'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface HeaderProps {
  onOpenBooking: (carType?: string, destination?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['services', 'fleet', 'routes', 'tour-packages'];
      const scrollPosition = window.scrollY + 150;

      let currentSection = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F0F10]/85 backdrop-blur-lg border-b border-white/5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Premium Refined Logo */}
        <a href="#hero" className="flex items-center gap-2 group focus:outline-none" id="logo-link">
          <Image
            src="/images/logo/logo-header.png"
            alt="ANSH TAXI"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium" id="desktop-nav">
          {[
            { name: 'Services', href: '#services', id: 'services' },
            { name: 'Fleet', href: '#fleet', id: 'fleet' },
            { name: 'Routes', href: '#routes', id: 'routes' },
            { name: 'Tour Packages', href: '#tour-packages', id: 'tour-packages' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name}
                href={item.href} 
                className={`transition-colors duration-300 relative py-1.5 group/nav font-semibold text-[15px] ${
                  isActive 
                    ? 'text-[#FFC107]' 
                    : 'text-white/85 hover:text-[#FFC107]'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#FFC107] transition-all duration-300 rounded-full ${
                  isActive ? 'w-full' : 'w-0 group-hover/nav:w-full'
                }`} />
              </a>
            );
          })}
        </nav>

        {/* Right: Primary Yellow CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => onOpenBooking('sedan')}
            className="bg-[#FFC107] hover:bg-[#FFC107]/90 text-black px-7 py-3 rounded-[14px] font-extrabold text-sm tracking-wide shadow-[0_4px_20px_rgba(255,193,7,0.35)] hover:shadow-[0_4px_25px_rgba(255,193,7,0.55)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none active:scale-95"
            id="nav-book-btn"
          >
            Check Availability
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden p-2 text-neutral-300 hover:text-taxi-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:outline-none rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0F0F10] border-t border-white/5 overflow-hidden shadow-2xl"
            id="mobile-nav-drawer"
          >
            <div className="px-6 pt-4 pb-8 space-y-1.5 flex flex-col">
              {[
                { name: 'Services', href: '#services', id: 'services' },
                { name: 'Fleet', href: '#fleet', id: 'fleet' },
                { name: 'Routes', href: '#routes', id: 'routes' },
                { name: 'Tour Packages', href: '#tour-packages', id: 'tour-packages' },
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className={`px-4 py-3 rounded-lg text-base font-semibold focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:outline-none transition-all duration-200 ${
                      isActive
                        ? 'bg-neutral-900 text-[#FFC107]'
                        : 'text-white/85 hover:bg-neutral-900 hover:text-[#FFC107]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              
              <hr className="border-white/5 my-4" />
              
              <div className="flex flex-col gap-3 pt-2 px-4">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('sedan');
                  }}
                  className="flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFC107]/90 text-taxi-black py-4 rounded-[14px] font-bold text-sm shadow-lg shadow-taxi-yellow/10 focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:outline-none transition-all"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
