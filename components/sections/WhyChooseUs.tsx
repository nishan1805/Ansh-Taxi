'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Clock, 
  Award, 
  IndianRupee, 
  Timer, 
  Sparkles, 
  Map, 
  ShieldCheck, 
  Headphones 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const bentoCards = [
    {
      title: '24/7 Availability',
      description: 'Day or night, our booking systems and drivers are always ready. Secure your ride anytime without delay.',
      icon: Clock,
      label: 'ALWAYS ONLINE'
    },
    {
      title: 'Professional Drivers',
      description: 'Highly trained, background-checked, and polite chauffeurs who know local geography like the back of their hand.',
      icon: Award,
      label: 'CERTIFIED CHAUFFEURS'
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent, competitive rates with absolutely no hidden charges. GST invoicing and receipts provided.',
      icon: IndianRupee,
      label: 'TRANSPARENT FARES'
    },
    {
      title: 'On-Time Pickup',
      description: 'Punctuality is our promise. Your assigned taxi will arrive at your destination 10 minutes prior to pickup.',
      icon: Timer,
      label: '0 MINS DELAY'
    },
    {
      title: 'Clean & Sanitized',
      description: 'Vehicles are thoroughly cleaned, deodorized, and sanitized before every trip to ensure fresh environments.',
      icon: Sparkles,
      label: 'HYGIENE CERTIFIED'
    },
    {
      title: 'Live GPS Tracking',
      description: 'Track your vehicle live on map and share trip location details with family or colleagues for full safety reassurance.',
      icon: Map,
      label: 'SAFETY FIRST'
    },
    {
      title: '100% Safe Journey',
      description: 'Speed limits enforced, well-maintained vehicles with airbags, emergency contact assistance triggers integrated.',
      icon: ShieldCheck,
      label: 'SECURED TRANSIT'
    },
    {
      title: 'Customer Support',
      description: 'A dedicated premium customer care desk is active 24/7 to assist with active trips, bookings, and receipts.',
      icon: Headphones,
      label: 'REAL HUMAN DESK'
    }
  ];

  return (
    <section 
      id="why-choose-us"
      className="py-16 md:py-20 lg:py-24 bg-[#0F0F10] text-white relative overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{__html: `
        .glass-panel {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-panel-hover:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 193, 7, 0.25);
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
      `}} />

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#FFC107]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-[#FFC107]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="The Ansh Difference"
          title="Why Choose Ansh Taxi?"
          description="We leverage premium, high-integrity service values, modern vehicles, and safe driving protocols to deliver unmatched customer satisfaction."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="why-choose-grid">
          {bentoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover p-8 rounded-card flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFC107]/15 text-[#FFC107] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#FFC107]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4 w-fit px-3 py-1 rounded bg-white/5 font-mono text-[10px] text-gray-400">
                  {card.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
