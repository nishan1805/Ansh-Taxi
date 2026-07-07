'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Users, Briefcase, Wind, Info, ArrowRight, Fuel } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface FleetProps {
  onVehiclePreselect: (vehicleId: string) => void;
}

export default function Fleet({ onVehiclePreselect }: FleetProps) {
  return (
    <section id="fleet" className="py-16 md:py-20 lg:py-24 bg-white text-neutral-850">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            tag="Our Premium Fleet"
            title="Choose Your Perfect Commute"
            description="Select from our meticulously maintained fleet of modern vehicles, tailored for every passenger group size and journey preference."
            theme="light"
          />
        </motion.div>

        {/* Premium Vehicle Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              id: 'sedan',
              category: 'Sedan',
              models: 'Dzire • Ciaz • Aura',
              image: '/images/fleet/sedan.jpg',
              passengers: '4 Passengers',
              luggage: '2 Bags',
              ac: 'AC',
              fuel: 'Petrol / CNG',
              bestFor: 'Best for city rides, airport transfers and business travel.',
            },
            {
              id: 'suv',
              category: 'SUV / MUV',
              models: 'Ertiga • Rumion • Scorpio',
              image: '/images/fleet/suv-muv.jpg',
              passengers: '6–7 Passengers',
              luggage: '4–5 Bags',
              ac: 'AC',
              fuel: 'Diesel/CNG',
              bestFor: 'Best for family trips and outstation travel.',
            },
            {
              id: 'innova',
              category: 'Premium',
              models: 'Innova Crysta • Kia Carens',
              image: '/images/fleet/premium.jpg',
              passengers: '6–7 Passengers',
              luggage: '5 Bags',
              ac: 'Premium AC',
              fuel: 'Diesel',
              bestFor: 'Best for executive travel and premium comfort.',
            },
            {
              id: 'tempo',
              category: 'Tempo Traveller',
              models: 'Standard • Luxury Comfort',
              image: '/images/fleet/tempo-traveller.jpg',
              passengers: '12–17 Passengers',
              luggage: 'Large Luggage Space',
              ac: 'AC',
              fuel: 'Diesel',
              bestFor: 'Best for group tours, weddings and corporate travel.',
            }
          ].map((category, index) => (
            <motion.div 
              key={category.id}
              onClick={() => onVehiclePreselect(category.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-[20px] border border-[#ECECEC] p-6 flex flex-col justify-between hover:border-[#FFC107] hover:shadow-[0_20px_40px_rgba(255,193,7,0.06)] transition-all duration-300 cursor-pointer text-left relative overflow-hidden group"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative w-full aspect-[16/10] bg-neutral-50 rounded-xl overflow-hidden mb-5">
                  <Image 
                    src={category.image} 
                    alt={category.category}
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title and Models */}
                <div className="mb-5">
                  <h3 className="text-[20px] font-semibold text-neutral-900 leading-snug">
                    {category.category}
                  </h3>
                  <p className="text-[13px] text-neutral-600 font-semibold mt-1">
                    Includes: {category.models}
                  </p>
                </div>

                {/* Vehicle Specs Grid */}
                <div className="space-y-3.5 border-t border-[#ECECEC] pt-4">
                  
                  {/* Passengers */}
                  <div className="flex items-center gap-3">
                    <Users className="w-[18px] h-[18px] text-[#FFC107] shrink-0" strokeWidth={1.5} />
                    <span className="text-[14px] text-neutral-600 font-normal">{category.passengers}</span>
                  </div>

                  {/* Luggage Capacity */}
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-[18px] h-[18px] text-[#FFC107] shrink-0" strokeWidth={1.5} />
                    <span className="text-[14px] text-neutral-600 font-normal">{category.luggage}</span>
                  </div>

                  {/* Air Conditioning */}
                  <div className="flex items-center gap-3">
                    <Wind className="w-[18px] h-[18px] text-[#FFC107] shrink-0" strokeWidth={1.5} />
                    <span className="text-[14px] text-neutral-600 font-normal">{category.ac}</span>
                  </div>

                  {/* Fuel Specifications */}
                  <div className="flex items-center gap-3">
                    <Fuel className="w-[18px] h-[18px] text-[#FFC107] shrink-0" strokeWidth={1.5} />
                    <span className="text-[14px] text-neutral-600 font-normal">{category.fuel}</span>
                  </div>

                  {/* Best Suited For */}
                  <div className="flex items-start gap-3 mt-1 pt-1">
                    <Info className="w-[18px] h-[18px] text-[#FFC107] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-[14px] text-neutral-600 font-medium leading-relaxed">{category.bestFor}</span>
                  </div>

                </div>
              </div>

              {/* Full-width CTA Button */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onVehiclePreselect(category.id);
                  }}
                  className="w-full h-[46px] bg-white border border-[#D9D9D9] text-black text-[15px] font-semibold rounded-[12px] flex items-center justify-center gap-2 hover:bg-[#FFC107] hover:border-[#FFC107] hover:text-black active:bg-[#E0A800] transition-all duration-300 cursor-pointer"
                >
                  <span>Select Vehicle</span>
                  <ArrowRight className="w-4 h-4 text-black" strokeWidth={2} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
