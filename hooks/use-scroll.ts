'use client';

import { useState, useEffect } from 'react';

export function useScroll(threshold = 80, scrollTopThreshold = 600) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
      setShowScrollTop(window.scrollY > scrollTopThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, scrollTopThreshold]);

  return { isScrolled, showScrollTop };
}
