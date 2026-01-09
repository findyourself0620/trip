import { TripData } from '@/lib/types';
import { guanziling_202601 } from './trips/202601_guanziling';
import { nanzhuang_202508 } from './trips/202508_nanzhuang';

export const TRIPS_DATA: Record<string, TripData> = {
  [guanziling_202601.id]: guanziling_202601,
  [nanzhuang_202508.id]: nanzhuang_202508,
};

export * from '@/lib/types';
