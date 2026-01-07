export interface ItineraryItem {
  startTime: string;
  endTime: string;
  type: 'transport' | 'food' | 'spot' | 'stay';
  icon: string;
  title: string;
  desc: string;
  location: string;
  mapUrl: string;
  tags: string[];
  highlight?: string;
  alert?: string;
  image?: string;
}

export interface DayItinerary {
  id: string;
  title: string;
  date: string;
  themeColor: string;
  routeColor: string;
  items: ItineraryItem[];
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  checked: boolean;
  important?: boolean;
}

export interface TripData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  cardIcon: string;
  cardColor: string;
  dateRange: string;
  days: Record<string, DayItinerary>;
  checklist: ChecklistItem[];
  config: {
    albumUrl?: string;
  };
  highlights: {
    title: string;
    desc: string;
    icon: string;
    color: string;
  }[];
}
