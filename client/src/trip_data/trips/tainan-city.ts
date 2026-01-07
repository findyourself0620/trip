import { TripData } from '@/lib/types';

export const tainanCity: TripData = {
  id: "202601_tainan-city",
  title: "台南古蹟巡禮",
  subtitle: "1日遊 · 文化探索",
  description: "穿梭巷弄尋找百年故事，品嚐國華街必比登美食。",
  heroImage: "https://images.unsplash.com/photo-1552993873-0dd1110e025f?q=80&w=1000&auto=format&fit=crop",
  cardIcon: "Building2",
  cardColor: "bg-red-500",
  dateRange: "待定",
  config: {},
  highlights: [
    {
      title: "古蹟巡禮",
      desc: "赤崁樓、孔廟，感受百年府城風華。",
      icon: "Building2",
      color: "red"
    },
    {
      title: "在地美食",
      desc: "國華街、保安路，品嚐必比登推薦小吃。",
      icon: "Utensils",
      color: "orange"
    }
  ],
  checklist: [
    { id: "1", text: "好走的鞋 (需大量步行)", category: "衣物", important: true, checked: false },
    { id: "2", text: "防曬用品", category: "用品", important: false, checked: false },
    { id: "3", text: "環保餐具", category: "用品", important: false, checked: false },
  ],
  days: {
    day1: {
      id: "day1",
      title: "Day 1：府城文化與美食",
      date: "待定",
      themeColor: "text-red-600",
      routeColor: "border-red-300",
      items: [
        {
          startTime: "10:00",
          endTime: "12:00",
          type: "spot",
          icon: "Building2",
          title: "赤崁樓",
          desc: "國家一級古蹟，荷蘭人所建的普羅民遮城。",
          location: "赤崁樓",
          mapUrl: "https://maps.app.goo.gl/example",
          image: "https://images.unsplash.com/photo-1552993873-0dd1110e025f?q=80&w=1000&auto=format&fit=crop",
          tags: ["#古蹟", "#歷史"]
        }
      ]
    }
  }
};
