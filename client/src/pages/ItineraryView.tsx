import { Sun, Moon, Coffee } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { TimelineItem } from '@/components/TimelineItem';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ItineraryItem } from '@/lib/types';

interface ItineraryViewProps {
  dayId: string;
}

export function ItineraryView({ dayId }: ItineraryViewProps) {
  const { itinerary } = useApp();

  if (!itinerary) return null;

  const dayData = itinerary.days[dayId];

  if (!dayData) return null;

  const getIcon = () => {
    const iconClass = cn("mr-2 w-5 h-5", dayData.themeColor);
    // Simple logic to alternate icons or pick based on day number
    if (dayId === 'day1') return <Sun className={iconClass} />;
    return <Coffee className={iconClass} />;
  };

  const getTimeRange = () => {
    if (dayData.items.length === 0) return "No items";
    const start = dayData.items[0].startTime;
    const end = dayData.items[dayData.items.length - 1].endTime;
    return `${start} - ${end}`;
  };

  return (
    <div className="min-h-full bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-md z-20 px-6 py-4 border-b border-border/50 shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          key={dayId}
        >
          <div className="flex items-center justify-between mb-1">
            <span className={cn("text-xs font-bold px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground")}>
              {dayData.date}
            </span>
            <span className="text-xs text-muted-foreground font-mono flex items-center">
              {getIcon()} {getTimeRange()}
            </span>
          </div>
          <h2 className={cn("text-2xl font-bold font-serif", dayData.themeColor)}>{dayData.title}</h2>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="p-4 pb-24 pt-6">
        <div className="space-y-0">
          {dayData.items.map((item: ItineraryItem, index: number) => (
            <TimelineItem
              key={`${dayId}-${index}`}
              item={item}
              isLast={index === dayData.items.length - 1}
              routeColor={dayData.routeColor}
              index={index}
              day={dayId}
              themeColor={dayData.themeColor}
            />
          ))}
        </div>

        {/* End of Day Marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-8 mb-4"
        >
          <div className="flex items-center text-muted-foreground text-xs tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-border mr-2"></span>
            <Moon size={12} className="mr-2" />
            End of {dayData.date}
            <span className="w-8 h-[1px] bg-border ml-2"></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
