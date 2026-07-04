'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BookingProvider, useBooking } from '@/context/BookingContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';

import Hero from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import Fleet from '@/components/sections/Fleet';
import { PopularRoutes } from '@/components/sections/PopularRoutes';
import { TourPackages } from '@/components/sections/TourPackages';
import Testimonials from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

function HomeContent() {
  const booking = useBooking();

  const bookingTab = booking.heroActiveTab;
  const setBookingTab = (tab: any) => {
    booking.setHeroActiveTab(tab);
  };

  const form = {
    name: '',
    phone: booking.heroMobile,
    pickup: (booking.heroActiveTab === 'local' || booking.heroActiveTab === 'airport' || booking.heroActiveTab === 'corporate') 
      ? booking.heroPickupLocation 
      : booking.heroPickupCity,
    dropoff: booking.heroDestinationCity,
    date: booking.heroDate,
    time: booking.heroActiveTab === 'roundtrip' ? booking.heroReturnDate : booking.heroTime,
    vehicle: booking.heroVehicle,
    package: booking.heroPackage,
    airportTripType: booking.heroAirportPickupType === 'Airport Drop' ? 'drop' : 'pickup',
    corporateCompany: booking.heroCompanyName,
  };

  const setForm: React.Dispatch<React.SetStateAction<any>> = (valueOrFn) => {
    const nextForm = typeof valueOrFn === 'function' ? valueOrFn(form) : valueOrFn;
    
    if (nextForm.phone !== undefined && nextForm.phone !== booking.heroMobile) {
      booking.setHeroMobile(nextForm.phone);
    }
    
    if (nextForm.pickup !== undefined) {
      if (booking.heroActiveTab === 'local' || booking.heroActiveTab === 'airport' || booking.heroActiveTab === 'corporate') {
        if (nextForm.pickup !== booking.heroPickupLocation) {
          booking.setHeroPickupLocation(nextForm.pickup);
        }
      } else {
        if (nextForm.pickup !== booking.heroPickupCity) {
          booking.setHeroPickupCity(nextForm.pickup);
        }
      }
    }
    
    if (nextForm.dropoff !== undefined && nextForm.dropoff !== booking.heroDestinationCity) {
      booking.setHeroDestinationCity(nextForm.dropoff);
    }
    
    if (nextForm.date !== undefined && nextForm.date !== booking.heroDate) {
      booking.setHeroDate(nextForm.date);
    }
    
    if (nextForm.time !== undefined) {
      if (booking.heroActiveTab === 'roundtrip') {
        if (nextForm.time !== booking.heroReturnDate) {
          booking.setHeroReturnDate(nextForm.time);
        }
      } else {
        if (nextForm.time !== booking.heroTime) {
          booking.setHeroTime(nextForm.time);
        }
      }
    }
    
    if (nextForm.vehicle !== undefined && nextForm.vehicle !== booking.heroVehicle) {
      booking.setHeroVehicle(nextForm.vehicle);
    }
    
    if (nextForm.package !== undefined && nextForm.package !== booking.heroPackage) {
      booking.setHeroPackage(nextForm.package);
    }
    
    if (nextForm.airportTripType !== undefined) {
      const mappedAirportType = nextForm.airportTripType === 'drop' ? 'Airport Drop' : 'Airport Pickup';
      if (mappedAirportType !== booking.heroAirportPickupType) {
        booking.setHeroAirportPickupType(mappedAirportType);
      }
    }
    
    if (nextForm.corporateCompany !== undefined && nextForm.corporateCompany !== booking.heroCompanyName) {
      booking.setHeroCompanyName(nextForm.corporateCompany);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    booking.handleHeroSubmit(e);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#151517] relative">
      
      {/* Modular Navigation Bar */}
      <Header onOpenBooking={(carType) => booking.triggerQuickBook(carType)} />

      {/* Page Sections */}
      <main>
        <Hero 
          bookingTab={bookingTab}
          setBookingTab={setBookingTab}
          form={form}
          setForm={setForm}
          onSubmit={onSubmit}
        />
        <Services />
        <WhyChooseUs />
        <Fleet onVehiclePreselect={(vehicleId) => booking.triggerQuickBook(vehicleId)} />
        <PopularRoutes />
        <TourPackages />
        <Testimonials />
        <FAQ />
        {false && <CTA onOpenBooking={(carType) => booking.triggerQuickBook(carType)} />}
      </main>

      {/* Modular Footer */}
      <Footer />

      {/* Interactive Floating Action Portals (WhatsApp, Phone, Back-To-Top) */}
      <FloatingButtons />

    </div>
  );
}

export default function Home() {
  return (
    <BookingProvider>
      <HomeContent />
    </BookingProvider>
  );
}
