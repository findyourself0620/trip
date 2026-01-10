import { TripData } from '@/lib/types';

export const coastal: TripData = {
  id: "202601_coastal",
  title: "濱海生態遊",
  subtitle: "1日遊 · 自然體驗",
  description: "七股鹽山、四草綠色隧道，感受台南沿海的獨特風光。",
  heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
  cardIcon: "Palmtree",
  cardColor: "bg-blue-500",
  location: "台南 - 濱海",
  dateRange: "待定",
  config: {},
  summary: [
    "四草綠色隧道",
    "七股鹽山",
    "井仔腳瓦盤鹽田"
  ],
  highlights: [
    {
      title: "生態體驗",
      desc: "四草綠色隧道，台灣袖珍版亞馬遜河。",
      icon: "Palmtree",
      color: "blue"
    },
    {
      title: "鹽田風光",
      desc: "七股鹽山、井仔腳瓦盤鹽田，絕美夕陽。",
      icon: "Sun",
      color: "yellow"
    }
  ],
  checklist: [
    { id: "1", text: "防風外套 (海邊風大)", category: "衣物", important: true, checked: false },
    { id: "2", text: "太陽眼鏡", category: "用品", important: false, checked: false },
  ],
  days: {
    day1: {
      id: "day1",
      title: "Day 1：濱海風光與生態",
      date: "待定",
      themeColor: "text-blue-600",
      routeColor: "border-blue-300",
      items: [
        {
          startTime: "09:00",
          endTime: "11:00",
          type: "spot",
          icon: "Palmtree",
          title: "四草綠色隧道",
          desc: "搭乘竹筏穿梭紅樹林，體驗生態之美。",
          location: "四草綠色隧道",
          mapUrl: "https://maps.app.goo.gl/example",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
          tags: ["#生態", "#紅樹林"]
        }
      ]
    }
  }
};
