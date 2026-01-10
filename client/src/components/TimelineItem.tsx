import { Navigation, AlertCircle, MapPin, Utensils, Home, Mountain, Droplets, Car } from 'lucide-react';
import { ItineraryItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import { useApp } from '@/contexts/AppContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TimelineItemProps {
  item: ItineraryItem;
  isLast: boolean;
  routeColor: string;
  index: number;
  day: string;
}

const iconMap: Record<string, any> = {
  Utensils,
  Home,
  Mountain,
  Droplets,
  Car,
  Navigation, // Fallback or used elsewhere
  MapPin
};

export function TimelineItem({ item, isLast, routeColor, index, day }: TimelineItemProps) {
  const { itinerary } = useApp();
  const IconComponent = iconMap[item.icon] || MapPin;
  const [isMapOpen, setIsMapOpen] = useState(false);

  const openGoogleMaps = () => {
    // Strictly use the explicit mapUrl from data.ts
    if (item.mapUrl) {
      window.open(item.mapUrl, '_blank');
    } else {
      toast.error("無法開啟地圖連結");
    }
    setIsMapOpen(false);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'food': return 'bg-chart-1 text-white';
      case 'spot': return 'bg-chart-2 text-white';
      case 'stay': return 'bg-chart-3 text-white';
      case 'transport': return 'bg-chart-4 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex relative group"
    >
      {/* Time Column */}
      <div className="w-16 flex-shrink-0 flex flex-col items-center pt-1">
        <span className="font-bold text-muted-foreground text-sm font-mono">{item.startTime}</span>
        <span className="text-muted-foreground/50 text-xs my-0.5">|</span>
        <span className="text-muted-foreground text-xs font-mono">{item.endTime}</span>
      </div>

      {/* Line & Icon */}
      <div className="flex flex-col items-center mr-4 relative">
        <div className={cn(
          "w-10 h-10 rounded-2xl flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110",
          getTypeColor(item.type)
        )}>
          <IconComponent size={20} />
        </div>
        {!isLast && (
          <div className={cn(
            "w-0.5 flex-1 border-l-2 border-dashed my-2 opacity-50",
            routeColor
          )}></div>
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-8">
        <div className="glass-card p-5 rounded-2xl relative overflow-hidden group-hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary/50">

          <div className="flex justify-between items-start mb-2 relative z-10">
            <h3 className="font-bold text-lg text-foreground leading-tight">{item.title}</h3>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-shrink-0 ml-2">
              {/* Map Button with Dialog */}
              <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
                <DialogTrigger asChild>
                  <button
                    className="text-primary bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    title="查看地圖"
                  >
                    <Navigation size={16} />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      {item.title}
                    </DialogTitle>
                    <DialogDescription>
                      {item.location}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4 py-4">
                    {item.image && (
                      <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="bg-muted/50 p-4 rounded-lg text-sm">
                      <p className="font-medium mb-1">景點介紹：</p>
                      <p className="text-muted-foreground">
                        {item.desc?.split(/<br\s*\/?>|\n/gi).map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < (item.desc?.split(/<br\s*\/?>|\n/gi).length || 0) - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsMapOpen(false)}>
                      取消
                    </Button>
                    <Button onClick={openGoogleMaps} className="gap-2">
                      <Navigation size={16} />
                      開啟 Google Maps 導航
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
            {item.desc?.split(/<br\s*\/?>|\n/gi).map((line, i) => (
              <span key={i}>
                {line}
                {i < (item.desc?.split(/<br\s*\/?>|\n/gi).length || 0) - 1 && <br />}
              </span>
            ))}
          </p>

          {item.highlight && (
            <div className="bg-destructive/5 text-destructive text-sm px-3 py-2 rounded-lg mb-3 flex items-start border border-destructive/10">
              <AlertCircle size={16} className="mt-0.5 mr-2 flex-shrink-0" />
              <span className="font-medium">{item.highlight}</span>
            </div>
          )}

          {item.alert && (
            <div className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 text-sm px-3 py-2 rounded-lg mb-3 flex items-start border border-yellow-500/20">
              <AlertCircle size={16} className="mt-0.5 mr-2 flex-shrink-0" />
              <span>{item.alert}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-1">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] px-2 py-1 bg-secondary text-secondary-foreground rounded-full font-medium tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
