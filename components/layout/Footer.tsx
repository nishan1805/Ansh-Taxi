'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import { 
  SOCIAL_FACEBOOK, 
  SOCIAL_INSTAGRAM, 
  SOCIAL_LINKEDIN 
} from '@/lib/constants';
import { useBooking } from '@/hooks/use-booking';

export default function Footer() {
  const { setHeroActiveTab, setHeroPickupCity, setHeroDestinationCity, scrollToSection } = useBooking();

  const handleLocationClick = (e: React.MouseEvent, from: string, to: string) => {
    e.preventDefault();
    setHeroActiveTab('oneway');
    setHeroPickupCity(from);
    setHeroDestinationCity(to);
    scrollToSection('hero');
  };

  return (
    <footer id="footer" className="bg-black text-neutral-400 pt-24 pb-12 border-t border-neutral-900 relative">
      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8 xl:gap-12 pb-16 border-b border-white/10 items-start">
          
          {/* Column 1: Logo, Description & Social Icons */}
          <div id="footer-column-logo" className="flex flex-col items-start">
            <a href="#hero" className="inline-flex items-center gap-1.5 group focus:outline-none mb-5">
              <Image
                src="/images/logo/logo-footer.png"
                alt="ANSH TAXI"
                width={260}
                height={72}
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-[13px] text-neutral-400 leading-relaxed font-medium max-w-[260px] mb-6">
              Premium taxi service across Raipur and Chhattisgarh offering local, airport, outstation, and corporate rides with professional drivers.
            </p>
            
            <h4 className="text-white font-heading font-extrabold text-[13px] uppercase tracking-[0.15em] mb-4">
              SOCIAL MEDIA
            </h4>
            
            {/* Social Media Row */}
            <div className="flex flex-row flex-nowrap items-center gap-[11px] mb-6">
              {[
                { icon: Facebook, label: 'Facebook', href: SOCIAL_FACEBOOK },
                { icon: Instagram, label: 'Instagram', href: SOCIAL_INSTAGRAM },
                { icon: Linkedin, label: 'LinkedIn', href: SOCIAL_LINKEDIN },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[44px] h-[44px] rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-neutral-400 flex items-center justify-center transition-all duration-[250ms] ease-in-out hover:bg-[#252525] hover:border-[#FFC107] hover:text-[#FFC107] hover:-translate-y-[2px] shadow-sm"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                );
              })}
            </div>

            <p className="text-[11px] text-neutral-600 font-medium">
              ISO 9001:2015 Certified Commutes
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-column-quick-links" className="space-y-5">
            <h4 className="text-white font-heading font-extrabold text-[13px] uppercase tracking-[0.15em] relative w-fit">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-[13px] font-medium">
              {[
                { name: 'Home', href: '#' },
                { name: 'Our Services', href: '#services' },
                { name: 'Why Choose Us', href: '#why-choose-us' },
                { name: 'Our Vehicles', href: '#fleet' },
                { name: 'Tour Packages', href: '#tour-packages' },
                { name: 'FAQs', href: '#faqs' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-white hover:text-[#FFC107] transition-all duration-300 hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div id="footer-column-services" className="space-y-5">
            <h4 className="text-white font-heading font-extrabold text-[13px] uppercase tracking-[0.15em] relative w-fit">
              Services
              <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-[13px] font-medium">
              {[
                { name: 'Local Commutes' },
                { name: 'Airport Transfers' },
                { name: 'One-Way Drops' },
                { name: 'Round-Trip Outstation' },
                { name: 'Corporate Chauffeurs' },
                { name: 'Bastar Custom Tours' }
              ].map((svc, idx) => (
                <li key={idx}>
                  <a href="#services" className="text-white hover:text-[#FFC107] transition-all duration-300 hover:translate-x-1 inline-block">
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Routes */}
          <div id="footer-column-routes" className="space-y-5">
            <h4 className="text-white font-heading font-extrabold text-[13px] uppercase tracking-[0.15em] relative w-fit">
              Popular Routes
              <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-[13px] font-medium">
              {[
                { name: 'Raipur to Bilaspur' },
                { name: 'Raipur to Jagdalpur' },
                { name: 'Raipur to Durg & Bhilai' },
                { name: 'Raipur to Korba' },
                { name: 'Raipur to Rajnandgaon' }
              ].map((route, idx) => (
                <li key={idx}>
                  <a href="#routes" className="text-white hover:text-[#FFC107] transition-all duration-300 hover:translate-x-1 inline-block">
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div id="footer-column-contact" className="space-y-5">
            <h4 className="text-white font-heading font-extrabold text-[13px] uppercase tracking-[0.15em] relative w-fit">
              Contact
              <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
            </h4>
            <ul className="space-y-3.5 text-[13px] font-medium">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                <a href="tel:+919644482331" className="text-white hover:text-[#FFC107] transition-colors block">
                  +91 96444 82331
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                <a href="https://wa.me/919644482331" className="text-white hover:text-[#FFC107] transition-colors block">
                  +91 96444 82331
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white">
                <MapPin className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                <span className="leading-relaxed whitespace-normal break-normal break-words">
                  Face 2 I, RDA Colony Block 201, Indraprasth, Sarona, Raipur, Chhattisgarh – 492099
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Footer */}
        <div className="py-14 border-b border-white/10">
          {/* Section Heading */}
          <div className="mb-10 text-left">
            <h3 className="text-white font-heading font-black text-base md:text-lg mb-3">
              Popular Taxi Searches & Service Areas
            </h3>
            <p className="text-[13px] text-neutral-400 leading-relaxed font-medium max-w-4xl">
              &quot;We proudly provide reliable taxi, airport transfer, outstation, one-way and corporate cab services across Raipur, Bastar and nearby cities of Chhattisgarh.&quot;
            </p>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Popular Taxi Searches */}
            <div className="space-y-5">
              <h4 className="text-white font-heading font-semibold text-[13px] uppercase tracking-[0.15em] relative w-fit mb-5">
                Popular Taxi Searches
                <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
              </h4>
              <ul className="space-y-2.5 text-[13px] font-medium text-neutral-500">
                <li>Taxi Service in Raipur</li>
                <li>Cab Booking Raipur</li>
                <li>Outstation Taxi Raipur</li>
                <li>One Way Cab Raipur</li>
                <li>Best Cab Service in Raipur</li>
                <li>Taxi Service Near Me</li>
                <li>Cab Service Near Me</li>
                <li>Car Rental Near Me</li>
                <li>Raipur to Jagdalpur Taxi</li>
                <li>Jagdalpur to Raipur Taxi</li>
              </ul>
            </div>

            {/* Column 2: Our Service Locations */}
            <div className="space-y-5">
              <h4 className="text-white font-heading font-semibold text-[13px] uppercase tracking-[0.15em] relative w-fit mb-5">
                Our Service Locations
                <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
              </h4>
              <ul className="space-y-2.5 text-[13px] font-medium">
                {[
                  { from: 'Raipur', to: 'Jagdalpur' },
                  { from: 'Raipur', to: 'Hyderabad' },
                  { from: 'Raipur', to: 'Chitrakoot' },
                  { from: 'Raipur', to: 'Tirathgarh' },
                  { from: 'Raipur', to: 'Dantewada' },
                  { from: 'Raipur', to: 'Bastar' },
                  { from: 'Raipur', to: 'Bilaspur' },
                  { from: 'Raipur', to: 'Durg' },
                  { from: 'Raipur', to: 'Bhilai' },
                ].map((loc, idx) => (
                  <li key={idx}>
                    <button
                      onClick={(e) => handleLocationClick(e, loc.from, loc.to)}
                      className="text-neutral-400 hover:text-[#FFC107] transition-all duration-300 hover:translate-x-1 inline-block text-left cursor-pointer focus:outline-none"
                    >
                      {loc.from} → {loc.to}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Successfully Running Across */}
            <div className="space-y-5">
              <h4 className="text-white font-heading font-semibold text-[13px] uppercase tracking-[0.15em] relative w-fit mb-5">
                Successfully Running Across
                <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
              </h4>
              <ul className="space-y-2.5 text-[13px] font-medium text-neutral-500">
                <li>Taxi Service Avanti Vihar</li>
                <li>Taxi Jagdalpur</li>
                <li>Car Rental Samta Colony</li>
                <li>Best Taxi in Saddu</li>
                <li>Taxi in VIP Chowk</li>
                <li>Cab Booking Kachana</li>
                <li>Cab in DDU Nagar</li>
                <li>Taxi in Kota Raipur</li>
                <li>Travel Agency Nayapara</li>
                <li>Cab in Devendra Nagar</li>
              </ul>
            </div>

            {/* Column 4: Outstation Destinations */}
            <div className="space-y-5">
              <h4 className="text-white font-heading font-semibold text-[13px] uppercase tracking-[0.15em] relative w-fit mb-5">
                Outstation Destinations
                <span className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-[#FFC107] rounded-full"></span>
              </h4>
              <ul className="space-y-2.5 text-[13px] font-medium text-neutral-500">
                <li>Taxi from Bastar to Raipur</li>
                <li>Raipur to Visakhapatnam</li>
                <li>Raipur to Chitrakote</li>
                <li>Raipur to Hyderabad</li>
                <li>Raipur to Tirathgarh</li>
                <li>Raipur to Dantewada</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright and Legal Segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-neutral-600">
          <p>© 2026 ANSH TAXI. All Rights Reserved. Crafted for premium journeys.</p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-[#FFC107] transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-[#FFC107] transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-500 hover:text-[#FFC107] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
