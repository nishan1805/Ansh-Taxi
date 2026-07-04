'use client';

import React from 'react';
import { useBooking } from '@/hooks/use-booking';
import { motion } from 'motion/react';
import { MapPin, Plane, ArrowRight, Calendar, Map, Briefcase } from 'lucide-react';

export const BookingTabs: React.FC = () => {
  const { heroActiveTab, setHeroActiveTab } = useBooking();

  const tabs = [
    { id: 'local', label: 'Local Taxi', icon: MapPin },
    { id: 'airport', label: 'Airport', icon: Plane },
    { id: 'oneway', label: 'One Way', icon: ArrowRight },
    { id: 'roundtrip', label: 'Round Trip', icon: Calendar },
    { id: 'outstation', label: 'Outstation', icon: Map },
    { id: 'corporate', label: 'Corporate', icon: Briefcase }
  ] as const;

  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-white/5 pb-4 mb-6 whitespace-nowrap">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = heroActiveTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setHeroActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-bold rounded-[14px] transition-all cursor-pointer group shrink-0 focus:outline-none ${
              active ? 'text-black font-extrabold' : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {active && (
              <motion.div
                layoutId="activeHeroTabIndicator"
                className="absolute inset-0 bg-[#FFC107] rounded-[14px]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <Icon className={`w-4 h-4 relative z-10 ${active ? 'text-black' : 'text-gray-400 group-hover:text-white'}`} />
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
