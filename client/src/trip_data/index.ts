import { TripData } from '@/lib/types';
import { guanziling } from './trips/guanziling';

export const TRIPS_DATA: Record<string, TripData> = {
  [guanziling.id]: guanziling,
};

export * from '@/lib/types';
