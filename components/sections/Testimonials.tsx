'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Resize listener to change carousel card volume
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-24 bg-[#0B0B0C] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-taxi-yellow/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-taxi-yellow/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            tag="Happy Customers"
            title="What Clients Say About Us"
            description="Don’t just take our word for it—read real feedback from families, corporate travelers, and outstation tourists who ride with us."
            theme="dark"
          />
        </motion.div>

        {/* Testimonial Carousel Section */}
        <div className="relative w-full">
          
          {/* Overflow wrapper */}
          <div className="overflow-hidden -mx-3 sm:-mx-4 px-3 sm:px-4 py-4 -my-4">
            <motion.div 
              animate={{ x: `-${activeTestimonial * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="flex"
            >
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full md:w-1/2 xl:w-1/3 shrink-0 px-3 sm:px-4"
                >
                  {/* Modern Premium Card */}
                  <div 
                    className="bg-[#161618] rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 text-left group min-h-[320px] border border-transparent ring-1 ring-inset ring-neutral-800/80 hover:ring-[#FFC107] hover:shadow-[0_0_20px_rgba(255,193,7,0.12)]"
                  >
                    <div>
                      {/* Rating & Large Quote Icon */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-[18px] h-[18px] fill-[#FFC107] text-[#FFC107]" strokeWidth={1.5} />
                          ))}
                        </div>
                        <span className="text-neutral-800 text-5xl font-serif leading-none select-none -mt-2 group-hover:text-[#FFC107]/20 transition-colors duration-300">
                          “
                        </span>
                      </div>

                      {/* Review text */}
                      <blockquote className="text-[15px] sm:text-[16px] text-neutral-300 italic leading-relaxed font-medium mb-8">
                        &quot;{testimonial.review}&quot;
                      </blockquote>
                    </div>

                    {/* User details aligned at the bottom */}
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-800/40">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-800 shrink-0">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base leading-snug">{testimonial.name}</h4>
                        <span className="text-[11px] font-semibold text-[#FFC107] uppercase tracking-widest block mt-0.5">{testimonial.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots and Navigation Arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-6">
            
            {/* Indicators */}
            <div className="flex gap-2.5">
              {Array.from({ length: TESTIMONIALS.length - visibleCards + 1 }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTestimonial === index ? 'bg-[#FFC107] w-8' : 'bg-neutral-700 w-2 hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  const limit = TESTIMONIALS.length - visibleCards + 1;
                  if (limit > 1) {
                    setActiveTestimonial((prev) => (prev - 1 + limit) % limit);
                  }
                }}
                className="w-11 h-11 rounded-full bg-[#161618] border border-neutral-800 flex items-center justify-center text-white hover:bg-taxi-yellow hover:text-taxi-black hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const limit = TESTIMONIALS.length - visibleCards + 1;
                  if (limit > 1) {
                    setActiveTestimonial((prev) => (prev + 1) % limit);
                  }
                }}
                className="w-11 h-11 rounded-full bg-[#161618] border border-neutral-800 flex items-center justify-center text-white hover:bg-taxi-yellow hover:text-taxi-black hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
