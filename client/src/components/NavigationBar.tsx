import { Home, Calendar, CheckSquare } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

export function NavigationBar() {
  const { activeTab, setActiveTab, itinerary } = useApp();

  if (!itinerary) return null;

  const navItems = [
    { id: 'home', icon: Home, label: '首頁' },
    // Dynamically generate day tabs
    ...Object.keys(itinerary.days).sort().map((dayId, index) => ({
      id: dayId,
      icon: Calendar,
      label: `Day ${index + 1}`
    })),
    { id: 'checklist', icon: CheckSquare, label: '清單' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-6 pt-2 pointer-events-none">
      <div className="glass rounded-2xl shadow-lg border border-white/40 flex justify-around py-3 pointer-events-auto max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex flex-col items-center transition-all duration-300 relative group",
                isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-primary/70"
              )}
            >
              <div className={cn(
                "absolute -top-10 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md opacity-0 transition-all duration-300 transform translate-y-2 pointer-events-none",
                isActive && "opacity-0" // Hide tooltip when active, or show if desired
              )}>
                {item.label}
              </div>
              
              <div className="relative">
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
              </div>
              <span className={cn(
                "text-[10px] mt-1 font-medium transition-all",
                isActive ? "font-bold" : ""
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
