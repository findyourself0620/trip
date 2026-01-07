import { TripData } from '@/lib/types';

export const guanziling: TripData = {
  id: "202601_guanziling",
  title: "關子嶺漫遊",
  subtitle: "2天1夜 · 深度放鬆之旅",
  description: "世界三大泥漿溫泉之一，結合山林秘境與在地美食的療癒行程。",
  heroImage: "images/hero_onsen.jpg",
  cardIcon: "Mountain",
  cardColor: "bg-orange-500",
  dateRange: "2026/1/3 ~ 2026/1/4",
  config: {
    albumUrl: "https://drive.google.com/drive/folders/1HH8_ZQdgX-msfn5KcCOuAdb74MhgQEI2"
  },
  highlights: [
    {
      title: "泥漿溫泉",
      desc: "世界三大泥漿溫泉之一，養顏美容首選。",
      icon: "Sparkles",
      color: "orange"
    },
    {
      title: "山林秘境",
      desc: "紅葉秘境、天空步道，吸收滿滿芬多精。",
      icon: "Leaf",
      color: "green"
    }
  ],
  checklist: [
    { id: "1", text: "泳衣、泳帽 (景大溫泉必備)", category: "衣物", important: true, checked: false },
    { id: "2", text: "換洗衣物 (2天1夜)", category: "衣物", important: false, checked: false },
    { id: "3", text: "暈車藥 (前往174縣道山路)", category: "用品", important: true, checked: false },
    { id: "4", text: "行動電源 & 充電線", category: "電子", important: false, checked: false },
    { id: "5", text: "輕便雨具/遮陽傘", category: "用品", important: false, checked: false },
    { id: "6", text: "防蚊液 (戶外景點多)", category: "用品", important: false, checked: false },
    { id: "7", text: "個人保養品/盥洗用具", category: "用品", important: false, checked: false },
  ],
  days: {
    day1: {
      id: "day1",
      title: "Day 1：溫泉與古剎巡禮",
      date: "2026/01/04",
      themeColor: "text-orange-600",
      routeColor: "border-orange-300",
      items: [
        {
          startTime: "11:00",
          endTime: "12:00",
          type: "transport",
          icon: "Car",
          title: "台南市區出發",
          desc: "預計行車時間 50分 - 1小時，保持愉快心情出發！",
          location: "台南市",
          mapUrl: "https://maps.app.goo.gl/J5kAy4mE9wNbf4NBA",
          image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000&auto=format&fit=crop",
          tags: []
        },
        {
          startTime: "12:00",
          endTime: "14:00",
          type: "food",
          icon: "Utensils",
          title: "七里香甕仔雞 (白河店)",
          desc: "皮脆肉嫩的甕仔雞，停車方便。",
          location: "七里香甕仔雞白河店",
          mapUrl: "https://maps.app.goo.gl/ovEtKLUkvLBF8JFGA",
          image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop",
          tags: ["#皮脆肉嫩", "#好停車"]
        },
        {
          startTime: "14:15",
          endTime: "14:40",
          type: "spot",
          icon: "Droplets",
          title: "水火同源",
          desc: "觀賞壁崖上水火共存奇景，推薦順手買包蜜漬番茄。",
          location: "水火同源",
          mapUrl: "https://maps.app.goo.gl/L19LHJUCESH3uYmr7",
          image: "https://images.unsplash.com/photo-1544965838-54ef8406f868?q=80&w=1000&auto=format&fit=crop",
          tags: ["#奇景", "#蜜漬番茄"]
        },
        {
          startTime: "15:00",
          endTime: "15:30",
          type: "spot",
          icon: "Mountain",
          title: "火山碧雲寺",
          desc: "百年古剎，俯瞰嘉南平原，有電梯可達觀景台。",
          location: "火山碧雲寺",
          mapUrl: "https://maps.app.goo.gl/YzoE89SFMzMVdBvf7",
          image: "https://images.unsplash.com/photo-1548504769-900b70ed122e?q=80&w=1000&auto=format&fit=crop",
          tags: ["#夕陽", "#百年古剎"]
        },
        {
          startTime: "15:30",
          endTime: "16:00",
          type: "spot",
          icon: "Mountain",
          title: "碧雲火泉步道",
          desc: "關仔嶺碧雲寺-水火同源登山步道，登山初心者推薦",
          location: "碧雲火泉步道",
          mapUrl: "https://maps.app.goo.gl/os35tyQUfmzGWwcw5",
          image: "https://images.unsplash.com/photo-1548504769-900b70ed122e?q=80&w=1000&auto=format&fit=crop",
          tags: ["#芬多精", "#登山步道"]
        },
        {
          startTime: "16:20",
          endTime: "19:00",
          type: "stay",
          icon: "Home",
          title: "景大渡假莊園",
          desc: "先 Check-in ，稍微休息一下後前往體驗大眾池。",
          highlight: "重要：務必攜帶泳衣泳帽！",
          location: "景大渡假莊園",
          mapUrl: "https://maps.app.goo.gl/itCBBFWdduwYiFi18",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
          tags: ["#泥漿溫泉", "#需泳衣"]
        },
        {
          startTime: "19:00",
          endTime: "20:30",
          type: "food",
          icon: "Utensils",
          title: "莊園晚餐",
          desc: "好吃，但有點貴。",
          location: "景大渡假莊園",
          mapUrl: "https://maps.app.goo.gl/itCBBFWdduwYiFi18",
          image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop",
          tags: ["#白斬雞", "#合菜"]
        }
      ]
    },
    day2: {
      id: "day2",
      title: "Day 2：紅葉秘境與網美打卡",
      date: "2026/01/05",
      themeColor: "text-green-700",
      routeColor: "border-green-300",
      items: [
        {
          startTime: "09:30",
          endTime: "10:00",
          type: "food",
          icon: "Coffee",
          title: "莊園早餐",
          desc: "享受莊園提供的豐盛早餐，補充一天活力。",
          location: "景大渡假莊園",
          mapUrl: "https://maps.app.goo.gl/itCBBFWdduwYiFi18",
          image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1000&auto=format&fit=crop",
          tags: ["#自助式", "#景觀餐廳"]
        },
        {
          startTime: "11:20",
          endTime: "12:00",
          type: "spot",
          icon: "Mountain",
          title: "紅葉公園",
          desc: "散步吸收芬多精，欣賞紫斑蝶生態。",
          location: "紅葉公園",
          mapUrl: "https://maps.app.goo.gl/Lb3P7NEDuTaeRs8v5",
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop",
          tags: ["#芬多精", "#紫斑蝶"]
        },
        {
          startTime: "12:40",
          endTime: "14:40",
          type: "food",
          icon: "Utensils",
          title: "174 翼騎士驛站",
          desc: "預約制玻璃天空步道，無敵山景。",
          location: "174翼騎士驛站",
          mapUrl: "https://maps.app.goo.gl/9UQWNXS6mWJ1m4yT7",
          image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop",
          tags: ["#天空步道", "#預約制"],
          alert: "山路蜿蜒，容易暈車者請先服用暈車藥"
        },
        {
          startTime: "14:40",
          endTime: "15:40",
          type: "transport",
          icon: "Car",
          title: "返程",
          desc: "返回台南市區，結束兩天一夜的美好旅程。",
          location: "台南市",
          mapUrl: "https://maps.app.goo.gl/J5kAy4mE9wNbf4NBA",
          image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000&auto=format&fit=crop",
          tags: []
        }
      ]
    }
  }
};
