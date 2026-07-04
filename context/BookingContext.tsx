'use client';

import React, { createContext, useContext, useState } from 'react';
import { ActiveTabType } from '@/types';
import { POPULAR_ROUTES } from '@/data/routes';
import { useScroll } from '@/hooks/use-scroll';
import { useWhatsApp } from '@/hooks/use-whatsapp';

interface BookingContextProps {
  heroActiveTab: ActiveTabType;
  setHeroActiveTab: React.Dispatch<React.SetStateAction<ActiveTabType>>;
  heroPickupLocation: string;
  setHeroPickupLocation: React.Dispatch<React.SetStateAction<string>>;
  heroPackage: string;
  setHeroPackage: React.Dispatch<React.SetStateAction<string>>;
  heroDate: string;
  setHeroDate: React.Dispatch<React.SetStateAction<string>>;
  heroTime: string;
  setHeroTime: React.Dispatch<React.SetStateAction<string>>;
  heroVehicle: string;
  setHeroVehicle: React.Dispatch<React.SetStateAction<string>>;
  heroMobile: string;
  setHeroMobile: React.Dispatch<React.SetStateAction<string>>;
  heroAirportPickupType: 'Airport Pickup' | 'Airport Drop';
  setHeroAirportPickupType: React.Dispatch<React.SetStateAction<'Airport Pickup' | 'Airport Drop'>>;
  heroPickupCity: string;
  setHeroPickupCity: React.Dispatch<React.SetStateAction<string>>;
  heroDestinationCity: string;
  setHeroDestinationCity: React.Dispatch<React.SetStateAction<string>>;
  heroReturnDate: string;
  setHeroReturnDate: React.Dispatch<React.SetStateAction<string>>;
  heroPassengers: string;
  setHeroPassengers: React.Dispatch<React.SetStateAction<string>>;
  heroCompanyName: string;
  setHeroCompanyName: React.Dispatch<React.SetStateAction<string>>;
  isScrolled: boolean;
  showScrollTop: boolean;
  triggerQuickBook: (tabOrVehicle?: string, routeId?: string) => void;
  scrollToSection: (id: string) => void;
  handleHeroSubmit: (e: React.FormEvent) => void;
}

const BookingContext = createContext<BookingContextProps | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isScrolled, showScrollTop } = useScroll();
  const { sendBookingMessage } = useWhatsApp();

  const [heroActiveTab, setHeroActiveTab] = useState<ActiveTabType>('local');
  const [heroPickupLocation, setHeroPickupLocation] = useState('');
  const [heroPackage, setHeroPackage] = useState('60 km / 6 Hours');
  const [heroDate, setHeroDate] = useState('2026-07-12');
  const [heroTime, setHeroTime] = useState('10:00');
  const [heroVehicle, setHeroVehicle] = useState('sedan');
  const [heroMobile, setHeroMobile] = useState('');
  const [heroAirportPickupType, setHeroAirportPickupType] = useState<'Airport Pickup' | 'Airport Drop'>('Airport Pickup');
  const [heroPickupCity, setHeroPickupCity] = useState('Raipur');
  const [heroDestinationCity, setHeroDestinationCity] = useState('Bilaspur');
  const [heroReturnDate, setHeroReturnDate] = useState('2026-07-13');
  const [heroPassengers, setHeroPassengers] = useState('4');
  const [heroCompanyName, setHeroCompanyName] = useState('');

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Trigger Quick Book behavior: Scrolls to Hero and sets options
  const triggerQuickBook = (tabOrVehicle?: string, routeId?: string) => {
    if (tabOrVehicle) {
      const validTabs: ActiveTabType[] = ['local', 'airport', 'oneway', 'roundtrip', 'outstation', 'corporate'];
      if (validTabs.includes(tabOrVehicle as ActiveTabType)) {
        setHeroActiveTab(tabOrVehicle as ActiveTabType);
      } else {
        setHeroVehicle(tabOrVehicle);
      }
    }
    if (routeId) {
      const routeObj = POPULAR_ROUTES.find((r) => r.id === routeId);
      if (routeObj) {
        setHeroActiveTab('oneway');
        setHeroPickupCity(routeObj.from);
        setHeroDestinationCity(routeObj.to);
      }
    }
    scrollToSection('hero');
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendBookingMessage({
      activeTab: heroActiveTab,
      pickupLocation: heroPickupLocation,
      packageName: heroPackage,
      date: heroDate,
      time: heroTime,
      vehicle: heroVehicle,
      mobile: heroMobile,
      airportPickupType: heroAirportPickupType,
      pickupCity: heroPickupCity,
      destinationCity: heroDestinationCity,
      returnDate: heroReturnDate,
      passengers: heroPassengers,
      companyName: heroCompanyName,
    });
  };

  return (
    <BookingContext.Provider
      value={{
        heroActiveTab,
        setHeroActiveTab,
        heroPickupLocation,
        setHeroPickupLocation,
        heroPackage,
        setHeroPackage,
        heroDate,
        setHeroDate,
        heroTime,
        setHeroTime,
        heroVehicle,
        setHeroVehicle,
        heroMobile,
        setHeroMobile,
        heroAirportPickupType,
        setHeroAirportPickupType,
        heroPickupCity,
        setHeroPickupCity,
        heroDestinationCity,
        setHeroDestinationCity,
        heroReturnDate,
        setHeroReturnDate,
        heroPassengers,
        setHeroPassengers,
        heroCompanyName,
        setHeroCompanyName,
        isScrolled,
        showScrollTop,
        triggerQuickBook,
        scrollToSection,
        handleHeroSubmit,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
