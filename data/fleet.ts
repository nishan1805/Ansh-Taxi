import { Vehicle } from '@/types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Sedan',
    type: 'Dzire, Ciaz, Aura',
    capacity: 4,
    luggage: 3,
    ac: true,
    fuel: 'Petrol / Diesel',
    bestFor: 'Airport transfers & comfortable family trips',
    baseRatePerKm: 12,
    svgPath: 'M 10 36 C 10 36, 15 22, 28 20 C 40 18, 52 18, 56 25 C 60 22, 78 22, 84 27 C 90 32, 94 36, 94 44 C 94 48, 91 50, 87 50 C 83 50, 79 45, 75 45 C 71 45, 67 50, 45 50 C 23 50, 19 45, 15 45 C 11 45, 10 41, 10 36 Z'
  },
  {
    id: 'suv',
    name: 'SUV / MUV',
    type: 'Ertiga, Scorpio, Rumion',
    capacity: 6,
    luggage: 4,
    ac: true,
    fuel: 'Diesel / CNG',
    bestFor: 'Medium groups, family getaways & outstations',
    baseRatePerKm: 15,
    svgPath: 'M 8 38 C 8 38, 12 18, 26 16 C 40 14, 62 14, 68 22 C 74 19, 86 20, 91 26 C 96 32, 96 38, 96 46 C 96 50, 92 52, 88 52 C 84 52, 80 46, 76 46 C 72 46, 68 52, 44 52 C 20 52, 16 46, 12 46 C 8 46, 8 42, 8 38 Z'
  },
  {
    id: 'premium',
    name: 'Premium',
    type: 'Innova Crysta, Kia Carens',
    capacity: 7,
    luggage: 5,
    ac: true,
    fuel: 'Diesel',
    bestFor: 'Premium executive travel & ultimate luxury journeys',
    baseRatePerKm: 19,
    svgPath: 'M 6 36 C 6 36, 10 16, 25 14 C 40 12, 65 12, 70 20 C 75 17, 88 18, 94 24 C 100 30, 100 36, 100 46 C 100 50, 96 52, 90 52 C 84 52, 80 46, 76 46 C 72 46, 68 52, 44 52 C 20 52, 16 46, 12 46 C 6 46, 6 42, 6 36 Z'
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    type: 'Force Traveller (12-17 Seater)',
    capacity: 15,
    luggage: 12,
    ac: true,
    fuel: 'Diesel',
    bestFor: 'Large groups, wedding parties & corporate tours',
    baseRatePerKm: 24,
    svgPath: 'M 5 30 C 5 30, 8 10, 22 8 C 36 6, 70 6, 76 12 C 82 10, 94 11, 98 18 C 102 25, 102 34, 102 46 C 102 50, 96 52, 90 52 C 84 52, 80 46, 76 46 C 72 46, 68 52, 44 52 C 20 52, 16 46, 12 46 C 5 46, 5 40, 5 30 Z'
  }
];
