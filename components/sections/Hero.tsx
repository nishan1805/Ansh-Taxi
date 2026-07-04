'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Compass, 
  Navigation, 
  Calendar, 
  Shield, 
  Clock, 
  ChevronDown, 
  ChevronRight, 
  Car, 
  Phone,
  PlaneTakeoff,
  ArrowRight,
  CalendarDays,
  Map,
  BriefcaseBusiness
} from 'lucide-react';

interface HeroProps {
  bookingTab: 'local' | 'airport' | 'oneway' | 'roundtrip' | 'outstation' | 'corporate';
  setBookingTab: (tab: 'local' | 'airport' | 'oneway' | 'roundtrip' | 'outstation' | 'corporate') => void;
  form: {
    name: string;
    phone: string;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    vehicle: string;
    package: string;
    airportTripType: string;
    corporateCompany: string;
  };
  setForm: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    vehicle: string;
    package: string;
    airportTripType: string;
    corporateCompany: string;
  }>>;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Hero({ bookingTab, setBookingTab, form, setForm, onSubmit }: HeroProps) {
  return (
    <section 
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center bg-[#0F0F10] overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Soft yellow radial glows and ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large, soft radial yellow glow centered behind the booking card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(255,193,7,0.05)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFC107]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#FFC107]/[0.02] rounded-full blur-3xl" />
        
        {/* Dotted grid background with full coverage */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFC107" strokeWidth="1" strokeDasharray="2 2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>
      
      {/* Centered Content Container */}
      <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center justify-center text-center relative">
        
        {/* Small Label */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#161618]/80 backdrop-blur-md border border-[#FFC107]/30 shadow-[0_0_15px_rgba(255,193,7,0.15)] px-4 py-1.5 rounded-full mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] shadow-[0_0_8px_#FFC107] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#FFC107]">PREMIUM TAXI SERVICE</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.1] text-white mb-5"
        >
          Your Trusted <span className="text-[#FFC107]">Taxi Partner</span><br />
          for Every Journey
        </motion.h1>

        {/* Short Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-neutral-300 max-w-2xl mb-12 leading-relaxed"
        >
          Reliable local, airport, outstation and corporate taxi services with professional drivers and 24×7 availability.
        </motion.p>

        {/* Premium Glassmorphism Booking Card */}
        <motion.div 
          id="booking-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-5xl bg-[#161618]/60 backdrop-blur-xl px-8 py-6 sm:py-8 rounded-[24px] border border-white/10 hover:border-[#FFC107]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 text-left relative overflow-hidden"
        >
          {/* Subtle warm center illumination inside the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFC107]/[0.02] rounded-full blur-3xl pointer-events-none" />

          {/* Horizontal Booking Tabs */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5 w-full gap-2 flex-wrap md:flex-nowrap px-0 mx-0 relative z-10">
            {[
              { id: 'local', name: 'Local Taxi', icon: MapPin },
              { id: 'airport', name: 'Airport', icon: PlaneTakeoff },
              { id: 'oneway', name: 'One Way', icon: ArrowRight },
              { id: 'roundtrip', name: 'Round Trip', icon: CalendarDays },
              { id: 'outstation', name: 'Outstation', icon: Map },
              { id: 'corporate', name: 'Corporate', icon: BriefcaseBusiness },
            ].map((tab) => {
              const IconComp = tab.icon;
              const isActive = bookingTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setBookingTab(tab.id as any)}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs lg:text-sm whitespace-nowrap transition-all duration-300 focus:outline-none cursor-pointer w-auto ${
                    isActive
                      ? 'bg-[#FFC107] text-black font-semibold shadow-[0_0_20px_rgba(255,193,7,0.35)]'
                      : 'text-white hover:text-white hover:bg-white/5 bg-transparent'
                  }`}
                >
                  <IconComp className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-[#FFC107]'}`} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Booking Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            {/* === LOCAL TAXI === */}
            {bookingTab === 'local' && (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-local-pickup" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Location</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-local-pickup"
                        type="text"
                        required
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="Raipur City / Address"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-local-package" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Package</label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-local-package"
                        value={form.package}
                        onChange={(e) => setForm({ ...form, package: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="4 hrs / 40 km" className="bg-[#111111] text-white">4 Hrs / 40 Km</option>
                        <option value="8 hrs / 80 km" className="bg-[#111111] text-white">8 Hrs / 80 Km</option>
                        <option value="12 hrs / 120 km" className="bg-[#111111] text-white">12 Hrs / 120 Km</option>
                        <option value="Full Day" className="bg-[#111111] text-white">Full Day / custom</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-local-date" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-local-date"
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-local-time" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Time</label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-local-time"
                        type="time"
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-local-vehicle" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Vehicle Class</label>
                    <div className="relative flex items-center">
                      <Car className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-local-vehicle"
                        value={form.vehicle}
                        onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="sedan" className="bg-[#111111] text-white">Sedan (Dzire / Etios)</option>
                        <option value="suv" className="bg-[#111111] text-white">SUV (Ertiga / Marazzo)</option>
                        <option value="innova" className="bg-[#111111] text-white">Premium SUV (Innova Crysta)</option>
                        <option value="hatchback" className="bg-[#111111] text-white">Hatchback (Swift / i10)</option>
                        <option value="tempo" className="bg-[#111111] text-white">Tempo Traveller (12-Seater)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-local-phone" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Mobile Number</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-local-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-end col-span-1 md:col-span-2">
                    <button
                      type="submit"
                      className="w-full h-[46px] bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-semibold text-sm tracking-wide uppercase rounded-[14px] shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Check Availability</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* === AIRPORT TAB === */}
            {bookingTab === 'airport' && (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-airport-trip-type" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup / Drop</label>
                    <div className="relative flex items-center">
                      <Compass className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-airport-trip-type"
                        value={form.airportTripType}
                        onChange={(e) => setForm({ ...form, airportTripType: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="drop" className="bg-[#111111] text-white">Airport Drop</option>
                        <option value="pickup" className="bg-[#111111] text-white">Airport Pickup</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-airport-pickup" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Location</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-airport-pickup"
                        type="text"
                        required
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="Raipur City / Airport"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-airport-date" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-airport-date"
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-airport-time" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Time</label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-airport-time"
                        type="time"
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-airport-vehicle" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Vehicle Class</label>
                    <div className="relative flex items-center">
                      <Car className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-airport-vehicle"
                        value={form.vehicle}
                        onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="sedan" className="bg-[#111111] text-white">Sedan (Dzire / Etios)</option>
                        <option value="suv" className="bg-[#111111] text-white">SUV (Ertiga / Marazzo)</option>
                        <option value="innova" className="bg-[#111111] text-white">Premium SUV (Innova Crysta)</option>
                        <option value="hatchback" className="bg-[#111111] text-white">Hatchback (Swift / i10)</option>
                        <option value="tempo" className="bg-[#111111] text-white">Tempo Traveller (12-Seater)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-airport-phone" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Mobile Number</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-airport-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-end col-span-1 md:col-span-2">
                    <button
                      type="submit"
                      className="w-full h-[46px] bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-semibold text-sm tracking-wide uppercase rounded-[14px] shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Check Availability</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* === ONE WAY === */}
            {bookingTab === 'oneway' && (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-oneway-pickup" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Location</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-oneway-pickup"
                        type="text"
                        required
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="Enter Pickup Location"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-oneway-drop" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Destination</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-oneway-drop"
                        type="text"
                        required
                        value={form.dropoff}
                        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
                        placeholder="Enter Destination"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-oneway-date" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-oneway-date"
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-oneway-time" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Time</label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-oneway-time"
                        type="time"
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-oneway-vehicle" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Vehicle Class</label>
                    <div className="relative flex items-center">
                      <Car className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-oneway-vehicle"
                        value={form.vehicle}
                        onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="sedan" className="bg-[#111111] text-white">Sedan (Dzire / Etios)</option>
                        <option value="suv" className="bg-[#111111] text-white">SUV (Ertiga / Marazzo)</option>
                        <option value="innova" className="bg-[#111111] text-white">Premium SUV (Innova Crysta)</option>
                        <option value="hatchback" className="bg-[#111111] text-white">Hatchback (Swift / i10)</option>
                        <option value="tempo" className="bg-[#111111] text-white">Tempo Traveller (12-Seater)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-oneway-phone" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Mobile Number</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-oneway-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-end col-span-1 md:col-span-2">
                    <button
                      type="submit"
                      className="w-full h-[46px] bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-semibold text-sm tracking-wide uppercase rounded-[14px] shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Check Availability</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* === ROUND TRIP === */}
            {bookingTab === 'roundtrip' && (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-roundtrip-pickup" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Location</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-roundtrip-pickup"
                        type="text"
                        required
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="Enter Pickup Location"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-roundtrip-drop" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Destination</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-roundtrip-drop"
                        type="text"
                        required
                        value={form.dropoff}
                        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
                        placeholder="Enter Destination"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-roundtrip-date" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Departure Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-roundtrip-date"
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-roundtrip-time" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Return Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-roundtrip-time"
                        type="date"
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-roundtrip-vehicle" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Vehicle Class</label>
                    <div className="relative flex items-center">
                      <Car className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-roundtrip-vehicle"
                        value={form.vehicle}
                        onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="sedan" className="bg-[#111111] text-white">Sedan (Dzire / Etios)</option>
                        <option value="suv" className="bg-[#111111] text-white">SUV (Ertiga / Marazzo)</option>
                        <option value="innova" className="bg-[#111111] text-white">Premium SUV (Innova Crysta)</option>
                        <option value="hatchback" className="bg-[#111111] text-white">Hatchback (Swift / i10)</option>
                        <option value="tempo" className="bg-[#111111] text-white">Tempo Traveller (12-Seater)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-roundtrip-phone" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Mobile Number</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-roundtrip-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-end col-span-1 md:col-span-2">
                    <button
                      type="submit"
                      className="w-full h-[46px] bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-semibold text-sm tracking-wide uppercase rounded-[14px] shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Check Availability</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* === OUTSTATION === */}
            {bookingTab === 'outstation' && (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-outstation-pickup" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Location</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-outstation-pickup"
                        type="text"
                        required
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="Enter Pickup Location"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-outstation-drop" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Destination</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-outstation-drop"
                        type="text"
                        required
                        value={form.dropoff}
                        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
                        placeholder="Enter Destination"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-outstation-date" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-outstation-date"
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-outstation-time" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Time</label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-outstation-time"
                        type="time"
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-outstation-vehicle" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Vehicle Class</label>
                    <div className="relative flex items-center">
                      <Car className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-outstation-vehicle"
                        value={form.vehicle}
                        onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="sedan" className="bg-[#111111] text-white">Sedan (Dzire / Etios)</option>
                        <option value="suv" className="bg-[#111111] text-white">SUV (Ertiga / Marazzo)</option>
                        <option value="innova" className="bg-[#111111] text-white">Premium SUV (Innova Crysta)</option>
                        <option value="hatchback" className="bg-[#111111] text-white">Hatchback (Swift / i10)</option>
                        <option value="tempo" className="bg-[#111111] text-white">Tempo Traveller (12-Seater)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-outstation-phone" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Mobile Number</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-outstation-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-end col-span-1 md:col-span-2">
                    <button
                      type="submit"
                      className="w-full h-[46px] bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-semibold text-sm tracking-wide uppercase rounded-[14px] shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Check Availability</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* === CORPORATE === */}
            {bookingTab === 'corporate' && (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-corporate-company" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Company Name</label>
                    <div className="relative flex items-center">
                      <Shield className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-corporate-company"
                        type="text"
                        required
                        value={form.corporateCompany}
                        onChange={(e) => setForm({ ...form, corporateCompany: e.target.value })}
                        placeholder="Enter Company Name"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-corporate-pickup" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Location</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-corporate-pickup"
                        type="text"
                        required
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="Enter Pickup Location"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-corporate-drop" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Destination</label>
                    <div className="relative flex items-center">
                      <MapPin className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-corporate-drop"
                        type="text"
                        required
                        value={form.dropoff}
                        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
                        placeholder="Enter Destination"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-corporate-date" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-corporate-date"
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-corporate-time" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Pickup Time</label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-3.5 w-4 h-4 text-[#FFC107] pointer-events-none" />
                      <input
                        id="hero-corporate-time"
                        type="time"
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        onClick={(e) => { try { e.currentTarget.showPicker(); } catch (err) {} }}
                        className="relative w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all cursor-pointer scheme-dark [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-corporate-vehicle" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Vehicle Class</label>
                    <div className="relative flex items-center">
                      <Car className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <select
                        id="hero-corporate-vehicle"
                        value={form.vehicle}
                        onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      >
                        <option value="sedan" className="bg-[#111111] text-white">Sedan (Dzire / Etios)</option>
                        <option value="suv" className="bg-[#111111] text-white">SUV (Ertiga / Marazzo)</option>
                        <option value="innova" className="bg-[#111111] text-white">Premium SUV (Innova Crysta)</option>
                        <option value="hatchback" className="bg-[#111111] text-white">Hatchback (Swift / i10)</option>
                        <option value="tempo" className="bg-[#111111] text-white">Tempo Traveller (12-Seater)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-corporate-phone" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pl-1">Mobile Number</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 w-4 h-4 text-[#FFC107]" />
                      <input
                        id="hero-corporate-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full h-[46px] bg-[#1A1A1C]/80 border border-white/5 rounded-[14px] py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-taxi-yellow/50 focus:ring-1 focus:ring-taxi-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-end">
                    <button
                      type="submit"
                      className="w-full h-[46px] bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-semibold text-sm tracking-wide uppercase rounded-[14px] shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Check Availability</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
