import { Map, ArrowRight, Sparkles, Leaf, Image, ChevronLeft, Building2, Utensils, Palmtree, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '@/contexts/AppContext';
import { toast } from 'sonner';
import { Link } from 'wouter';

const iconMap: Record<string, any> = {
  Sparkles,
  Leaf,
  Building2,
  Utensils,
  Palmtree,
  Sun
};

const colorMap: Record<string, string> = {
  orange: "bg-orange-50/80 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30 text-orange-600 dark:text-orange-400",
  green: "bg-green-50/80 dark:bg-green-900/20 border-green-100 dark:border-green-800/30 text-green-600 dark:text-green-400",
  red: "bg-red-50/80 dark:bg-red-900/20 border-red-100 dark:border-red-800/30 text-red-600 dark:text-red-400",
  blue: "bg-blue-50/80 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400",
  yellow: "bg-yellow-50/80 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800/30 text-yellow-600 dark:text-yellow-400",
};

export function HomeView() {
  const { setActiveTab, itinerary } = useApp();

  if (!itinerary) return null;

  const openAlbum = () => {
    if (itinerary?.config?.albumUrl) {
      window.open(itinerary.config.albumUrl, '_blank');
    } else {
      toast.error("相簿連結不可用");
    }
  };

  return (
    <div className="h-full bg-background flex flex-col relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[45vh] overflow-hidden">
        {/* Back Button */}
        <Link href="/">
          <button className="absolute top-4 left-4 z-50 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors border border-white/20">
            <ChevronLeft size={24} />
          </button>
        </Link>

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img 
            src={itinerary.heroImage}
            alt={itinerary.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background flex flex-col justify-end p-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full mb-3 border border-white/30">
              {itinerary.subtitle}
            </span>
            <h1 className="text-white text-4xl font-bold mb-2 drop-shadow-lg tracking-wide font-serif">{itinerary.title}</h1>
            <p className="text-white/90 text-sm flex items-center font-light tracking-wider">
              <Map size={16} className="mr-2 opacity-80" /> 台南
            </p>
          </motion.div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="flex-1 px-6 relative -mt-8 pb-24 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-6 shadow-xl border-t border-white/50"
        >
          <div className="grid grid-cols-2 gap-4 mb-8">
            {itinerary.highlights.map((highlight, idx) => {
              const Icon = iconMap[highlight.icon] || Sparkles;
              const colorClass = colorMap[highlight.color] || colorMap.orange;
              
              return (
                <div key={idx} className={`p-5 rounded-2xl border ${colorClass.split(' ').slice(0, 3).join(' ')}`}>
                  <div className={`font-bold mb-2 flex items-center ${colorClass.split(' ').slice(3).join(' ')}`}>
                    <Icon size={18} className="mr-2" /> {highlight.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{highlight.desc}</div>
                </div>
              );
            })}
          </div>

          <h3 className="font-bold text-lg mb-4 pl-1 border-l-4 border-primary">行程亮點</h3>
          <ul className="space-y-4 mb-8">
            {/* Generate highlights from itinerary items if not explicitly provided, 
                or use a generic list. For now, let's extract some key items from day 1 */}
            {itinerary.days.day1.items.slice(1, 4).map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center text-muted-foreground text-sm"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                {item.title}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setActiveTab('day1')}
              className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                開始旅程 <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
            </button>

            {itinerary.config.albumUrl && (
              <button 
                onClick={openAlbum}
                className="w-full bg-white/80 backdrop-blur border border-white/50 text-primary font-bold py-3 rounded-xl shadow-sm active:scale-[0.98] transition-all flex items-center justify-center group"
              >
                <Image size={18} className="mr-2" /> 查看旅程相簿
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
