'use client';

import React from 'react';
import Image from 'next/image';
import { TOUR_PACKAGES } from '@/data/tourPackages';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_PHONE } from '@/lib/constants';

export const TourPackages: React.FC = () => {
  return (
    <section 
      id="tour-packages"
      className="py-16 md:py-20 lg:py-24 bg-white border-t border-gray-100"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Bastar Tourism"
          title="Tour Packages"
          description="Explore the mystical landscapes, cascading waterfalls, and rich tribal heritage of Bastar with our custom-tailored taxi tour packages."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="tours-grid">
          {TOUR_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className="group bg-white rounded-card border border-[#EBEBEF] shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden h-full hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image 
                  src={pkg.image} 
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Tour Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-white text-[#151517] text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#151517] mb-4 line-clamp-1">
                    {pkg.name}
                  </h3>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-[11px] text-[#151517] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-[#EBEBEF] flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-gray-400 uppercase leading-none mb-1">Starting From</p>
                    <p className="text-sm font-extrabold text-[#151517]">{pkg.price}</p>
                  </div>
                  
                  <a 
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=Hello%20Ansh%20Taxi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white hover:bg-[#FFC107] border border-[#EBEBEF] hover:border-[#FFC107] text-[#151517] hover:text-black font-medium text-[11px] px-4.5 py-2.5 rounded-btn shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Book Tour
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
