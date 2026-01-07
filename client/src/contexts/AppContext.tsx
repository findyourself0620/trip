import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ChecklistItem, TripData, TRIPS_DATA } from '@/trip_data';
import { useRoute } from 'wouter';

interface AppContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  checklist: ChecklistItem[];
  toggleChecklistItem: (id: string) => void;
  checklistProgress: number;
  itinerary: TripData | null;
  tripId: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [match, params] = useRoute("/:tripId");
  const tripId = match && params ? params.tripId : null;
  
  const [itinerary, setItinerary] = useState<TripData | null>(null);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);

  // Load itinerary when tripId changes
  useEffect(() => {
    if (tripId && TRIPS_DATA[tripId]) {
      const data = TRIPS_DATA[tripId];
      setItinerary(data);
      
      // Load checklist from localStorage specific to this trip or use initial
      const storageKey = `travel_checklist_${tripId}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setChecklist(JSON.parse(saved));
      } else {
        setChecklist(data.checklist);
      }
      
      // Reset active tab to home when switching trips
      setActiveTab('home');
    } else {
      setItinerary(null);
    }
  }, [tripId]);

  // Save checklist to localStorage whenever it changes
  useEffect(() => {
    if (tripId && checklist.length > 0) {
      const storageKey = `travel_checklist_${tripId}`;
      localStorage.setItem(storageKey, JSON.stringify(checklist));
    }
  }, [checklist, tripId]);

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const checklistProgress = checklist.length > 0 
    ? Math.round((checklist.filter(i => i.checked).length / checklist.length) * 100)
    : 0;

  return (
    <AppContext.Provider value={{ 
      activeTab, 
      setActiveTab, 
      checklist, 
      toggleChecklistItem,
      checklistProgress,
      itinerary,
      tripId
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
