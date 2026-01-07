import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider, useApp } from "@/contexts/AppContext";
import { NavigationBar } from "@/components/NavigationBar";
import { HomeView } from "@/pages/HomeView";
import { ItineraryView } from "@/pages/ItineraryView";
import { ChecklistView } from "@/pages/ChecklistView";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useEffect, useRef } from "react";
import { Link } from "wouter";

function TripContent() {
  const { activeTab, itinerary, tripId } = useApp();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  if (!tripId) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">載入中...</h1>
        </div>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-muted-foreground mb-4">找不到此行程</p>
          <Link href="/">
            <button className="px-4 py-2 bg-primary text-white rounded-lg">返回首頁</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-100 dark:bg-gray-900 font-sans text-foreground flex justify-center overflow-hidden z-50">
      <div className="w-full max-w-md bg-background h-full relative shadow-2xl overflow-hidden flex flex-col">
        
        {/* Content Area */}
        <div ref={contentRef} className="flex-1 overflow-y-auto no-scrollbar scroll-smooth relative">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <HomeView />
              </motion.div>
            )}

            {(activeTab === 'day1' || activeTab === 'day2') && (
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ItineraryView dayId={activeTab} />
              </motion.div>
            )}
            
            {activeTab === 'checklist' && (
              <motion.div 
                key="checklist"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ChecklistView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Bar */}
        <NavigationBar />

      </div>
    </div>
  );
}

export function TripApp() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <AppProvider>
          <TripContent />
          <Toaster />
        </AppProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
