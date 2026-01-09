import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Building2, Palmtree } from 'lucide-react';
import { Link } from 'wouter';
import { TRIPS_DATA } from '@/trip_data';

const iconMap: Record<string, any> = {
  Mountain,
  Building2,
  Palmtree
};

export function LandingPage() {
  const activities = Object.values(TRIPS_DATA);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo.webp" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
            <h1 className="text-xl font-bold text-foreground tracking-tight">Trip。Findurself</h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-md mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">找自己 · 旅程紀錄</h2>
          <p className="text-muted-foreground">每一次的出發，都是為了遇見更好的自己。紀錄我們共同走過的風景與回憶。</p>
        </motion.div>

        {/* Activity List */}
        <div className="space-y-6">
          {activities.map((activity, index) => {
            const Icon = iconMap[activity.cardIcon] || Mountain;

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${activity.id}`} className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 group-hover:-translate-y-1">
                    {/* Image Area */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                      <img
                        src={activity.heroImage}
                        alt={activity.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm ${activity.cardColor}`}>
                          <Icon size={12} className="mr-1" />
                          {activity.subtitle.split(' · ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {activity.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                            <span>{activity.dateRange}</span>
                            <span>·</span>
                            <span>{activity.subtitle.split(' · ')[1]}</span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                          <ArrowRight size={16} />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
