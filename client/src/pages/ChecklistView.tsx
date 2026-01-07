import { CheckSquare, Sparkles } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ChecklistView() {
  const { checklist, toggleChecklistItem, checklistProgress } = useApp();

  return (
    <div className="p-6 pb-24 min-h-full bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-foreground mb-2 font-serif">打包清單</h2>
        <p className="text-muted-foreground text-sm">準備好行李，開啟美好旅程</p>
      </motion.div>
      
      {/* Progress Card */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 rounded-2xl mb-8 relative overflow-hidden"
      >
        <div className="flex justify-between items-end mb-4 relative z-10">
          <div>
            <div className="text-4xl font-bold text-primary font-mono">{checklistProgress}%</div>
            <div className="text-xs text-muted-foreground mt-1">完成進度</div>
          </div>
          {checklistProgress === 100 && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center"
            >
              <Sparkles size={12} className="mr-1" /> 準備就緒！
            </motion.div>
          )}
        </div>
        
        <div className="bg-secondary/50 rounded-full h-3 overflow-hidden relative z-10">
          <motion.div 
            className="bg-primary h-3 rounded-full" 
            initial={{ width: 0 }}
            animate={{ width: `${checklistProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Decorative background elements */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
      </motion.div>

      <div className="space-y-3">
        <AnimatePresence>
          {checklist.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.2 }}
              onClick={() => toggleChecklistItem(item.id)}
              className={cn(
                "flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 group relative overflow-hidden",
                item.checked 
                  ? 'bg-secondary/30 border-transparent' 
                  : 'bg-card border-border shadow-sm hover:shadow-md hover:border-primary/30'
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-lg border-2 flex items-center justify-center mr-4 transition-all duration-300 relative z-10",
                item.checked 
                  ? 'bg-primary border-primary scale-110' 
                  : 'border-muted-foreground/30 group-hover:border-primary'
              )}>
                <AnimatePresence>
                  {item.checked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckSquare size={14} className="text-primary-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="flex-1 relative z-10">
                <div className={cn(
                  "font-medium transition-colors duration-300",
                  item.checked ? 'text-muted-foreground line-through decoration-primary/30' : 'text-foreground'
                )}>
                  {item.text}
                </div>
                {/* @ts-ignore - important property might not exist on all items */}
                {item.important && !item.checked && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] text-destructive font-bold mt-1 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mr-1 animate-pulse" />
                    必備物品！
                  </motion.div>
                )}
              </div>

              {/* Ripple effect on click could be added here */}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
