import { TripData } from '@/lib/types';
import { guanziling } from './trips/guanziling';
import { tainanCity } from './trips/tainan-city';
import { coastal } from './trips/coastal';

export const TRIPS_DATA: Record<string, TripData> = {
  [guanziling.id]: guanziling,
  [tainanCity.id]: tainanCity,
  [coastal.id]: coastal,
};

export * from '@/lib/types';
