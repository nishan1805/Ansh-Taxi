'use client';

import React from 'react';
import { useBooking } from '@/hooks/use-booking';
import { POPULAR_ROUTES } from '@/data/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight, Info } from 'lucide-react';

export const PopularRoutes: React.FC = () => {
  const { triggerQuickBook } = useBooking();

  return (
    <section 
      id="routes"
      className="py-16 md:py-20 lg:py-24 bg-[#0F0F10] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[#FFC107]/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-[30%] right-[5%] w-[350px] h-[350px] bg-[#FFC107]/5 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Local & Intercity Paths"
          title="Popular Taxi Routes"
          description="Frequently traveled highways and local routes across Chhattisgarh. Enjoy flat, all-inclusive rates for onetime pickup & round trips."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="routes-grid">
          {POPULAR_ROUTES.map((route) => (
            <div 
              key={route.id}
              onClick={() => triggerQuickBook('sedan', route.id)}
              className="group cursor-pointer bg-[#151517] rounded-card border border-white/5 p-8 hover:border-[#FFC107]/20 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1"
            >
              <div>
                {/* Route Indicator Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium uppercase text-gray-400 tracking-wider">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-[#FFC107] animate-pulse shrink-0" />
                  <span className="text-lg font-bold text-white">{route.to}</span>
                </div>

                {/* Route statistics */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4 mb-6">
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Distance</p>
                    <p className="text-base font-bold text-white">{route.distance} Kms</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Estimated Time</p>
                    <p className="text-base font-bold text-white">{route.time}</p>
                  </div>
                </div>

                {/* Fare information */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>One-Way starting fare:</span>
                    <span className="font-mono text-lg font-bold text-[#FFC107]">₹{route.oneWayFare.toLocaleString('en-IN')}*</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Round-Trip starting fare:</span>
                    <span className="font-mono text-base font-bold text-white">₹{route.roundTripFare.toLocaleString('en-IN')}*</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); triggerQuickBook('sedan', route.id); }}
                className="w-full bg-white/5 hover:bg-[#FFC107] border border-white/10 hover:border-[#FFC107] text-white hover:text-black font-extrabold py-3.5 rounded-btn transition-all duration-300 active:scale-98 cursor-pointer text-center text-sm"
              >
                Book Route Cab
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-white/5 border border-white/10 p-4 rounded-2xl max-w-2xl mx-auto flex items-center justify-center gap-3">
          <Info className="w-5 h-5 text-[#FFC107] shrink-0" />
          <p className="text-xs text-gray-400 text-left">
            *Toll taxes, state entry taxes, and parking fees are extra as applicable. Dynamic pricing rules apply based on actual peak hour traffic.
          </p>
        </div>
      </div>
    </section>
  );
};
