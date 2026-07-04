import { LucideIcon } from 'lucide-react';

export type ActiveTabType = 'local' | 'airport' | 'oneway' | 'roundtrip' | 'outstation' | 'corporate';

export interface Service {
  tabId: ActiveTabType;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  tag: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: number;
  luggage: number;
  ac: boolean;
  fuel: string;
  bestFor: string;
  baseRatePerKm: number;
  svgPath: string;
}

export interface Route {
  id: string;
  from: string;
  to: string;
  distance: number;
  time: string;
  oneWayFare: number;
  roundTripFare: number;
}

export interface TourPackage {
  id: string;
  name: string;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BookingFormData {
  activeTab: ActiveTabType;
  pickupLocation: string;
  packageName: string;
  date: string;
  time: string;
  vehicle: string;
  mobile: string;
  airportPickupType: 'Airport Pickup' | 'Airport Drop';
  pickupCity: string;
  destinationCity: string;
  returnDate: string;
  passengers: string;
  companyName: string;
}
