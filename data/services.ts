import { MapPin, Plane, ArrowRight, Calendar, Map, Briefcase } from 'lucide-react';
import { Service } from '@/types';

export const SERVICES: Service[] = [
  {
    tabId: 'local',
    title: 'Local Taxi (Chauffeur-Driven)',
    description: 'Ideal for shopping, business appointments, city travel, or running daily errands. Flexible hourly rentals with packages (e.g. 6 Hours / 60 Kms) are available.',
    icon: MapPin,
    iconColor: 'bg-indigo-50 text-indigo-600',
    tag: 'City Rides'
  },
  {
    tabId: 'airport',
    title: 'Airport Transfer (RPR Pickup / Drop)',
    description: 'Punctual airport pick-up and drop-off services at Raipur Swami Vivekananda Airport. Flight timing tracking handles delays, so you never wait.',
    icon: Plane,
    iconColor: 'bg-amber-50 text-amber-600',
    tag: 'Airport Service'
  },
  {
    tabId: 'oneway',
    title: 'One-Way Intercity Rides',
    description: 'Travel from one city to another without paying for the return journey. Ideal for flat-rate comfortable point-to-point drop-offs.',
    icon: ArrowRight,
    iconColor: 'bg-emerald-50 text-emerald-600',
    tag: 'Flat Rate Drop'
  },
  {
    tabId: 'roundtrip',
    title: 'Round Trip Outstation Journeys',
    description: 'Planning a weekend getaway or business conference? Our round-trip services keep the vehicle at your disposal throughout your itinerary.',
    icon: Calendar,
    iconColor: 'bg-pink-50 text-pink-600',
    tag: 'Multi-Day Travel'
  },
  {
    tabId: 'outstation',
    title: 'Outstation Escapes',
    description: 'Ready to visit tourist hotspots or surrounding cities with friends or family? Enjoy clean vehicles, polite chauffeurs, and customized tour routing.',
    icon: Map,
    iconColor: 'bg-sky-50 text-sky-600',
    tag: 'Explore Outstations'
  },
  {
    tabId: 'corporate',
    title: 'Corporate Mobility Packages',
    description: 'Dedicated corporate solutions. Offers reliable, sanitized premium sedans/MPVs with custom GST invoicing, neat logs, and veteran chauffeurs.',
    icon: Briefcase,
    iconColor: 'bg-violet-50 text-violet-600',
    tag: 'For Organizations'
  }
];
