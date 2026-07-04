'use client';

import React from 'react';
import { useBooking } from '@/hooks/use-booking';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/data/services';

export const Services: React.FC = () => {
  const { triggerQuickBook } = useBooking();

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="What We Offer"
          title="Our Taxi Services"
          description="We cater to all your transportation requirements with our modern, comfortable fleet and professional customer-focused driving experience."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card 
                key={idx}
                variant="white"
                className="p-8 hover:-translate-y-2 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#151517] mb-3 group-hover:text-primary-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full py-3.5 text-xs font-extrabold uppercase tracking-widest"
                  onClick={() => triggerQuickBook(service.tabId)}
                >
                  Book Now
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
