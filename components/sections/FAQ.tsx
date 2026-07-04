'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/faq';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';

export const FAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section 
      id="faqs"
      className="py-16 md:py-20 lg:py-24 bg-white text-[#151517] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-[#FFC107]/20 rounded-full blur-[110px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-[#FFC107]/10 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Got Questions?"
          title="Frequently Asked Questions"
          description="Got pre-booking queries? Read our answered list or contact our dedicated helpdesk teams instantly."
          theme="light"
        />

        <div className="space-y-4 max-w-4xl mx-auto" id="faq-accordion">
          {FAQS.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
