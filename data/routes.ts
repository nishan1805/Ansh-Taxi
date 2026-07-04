import { Route } from '@/types';

export const POPULAR_ROUTES: Route[] = [
  {
    id: 'r1',
    from: 'Raipur',
    to: 'Bilaspur',
    distance: 120,
    time: '2.5 Hours',
    oneWayFare: 2200,
    roundTripFare: 4200
  },
  {
    id: 'r2',
    from: 'Raipur',
    to: 'Durg',
    distance: 40,
    time: '1 Hour',
    oneWayFare: 1100,
    roundTripFare: 2000
  },
  {
    id: 'r3',
    from: 'Raipur',
    to: 'Bhilai',
    distance: 35,
    time: '45 Minutes',
    oneWayFare: 900,
    roundTripFare: 1700
  },
  {
    id: 'r4',
    from: 'Raipur',
    to: 'Jagdalpur',
    distance: 300,
    time: '6.5 Hours',
    oneWayFare: 5500,
    roundTripFare: 10500
  },
  {
    id: 'r5',
    from: 'Raipur',
    to: 'Airport',
    distance: 15,
    time: '30 Minutes',
    oneWayFare: 600,
    roundTripFare: 1100
  },
  {
    id: 'r6',
    from: 'Raipur',
    to: 'Nagpur',
    distance: 280,
    time: '6 Hours',
    oneWayFare: 5000,
    roundTripFare: 9500
  }
];
