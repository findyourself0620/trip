import { TripData } from '@/lib/types';

export const nanzhuang_202508: TripData = {
    id: "nanzhuang_202508",
    title: "南庄小旅行",
    subtitle: "2天1夜 · 客家風情",
    description: "走進南庄老街的桂花巷，感受客家山城的質樸與熱情，探訪神仙谷的壯麗瀑布，享受兩天一夜的慢活時光。",
    heroImage: "images/nanzhuang_hero.webp",
    cardIcon: "Mountain",
    cardColor: "bg-orange-500",
    location: "苗栗 - 南庄",
    dateRange: "2025/8/23 ~ 2025/8/24",
    config: {
        albumUrl: "https://drive.google.com/drive/folders/1Mn-cw6l5ogV7HHk9yPew61aCeQIE3AeP"
    },
    summary: [
        "南庄老街 (桂花巷)",
        "神仙谷瀑布",
        "窯烤麵包"
    ],
    highlights: [
        {
            title: "客家美食",
            desc: "品嚐道地客家小炒、桂花釀湯圓，滿足味蕾饗宴。",
            icon: "Utensils",
            color: "red"
        },
        {
            title: "自然秘境",
            desc: "探訪神仙谷瀑布、向天湖，吸收山林芬多精。",
            icon: "Mountain",
            color: "green"
        }
    ],
    checklist: [
        { id: "1", text: "換洗衣物 (2天1夜)", category: "衣物", important: false, checked: false },
        { id: "2", text: "暈車藥", category: "用品", important: true, checked: false },
        { id: "3", text: "行動電源 & 充電線", category: "電子", important: false, checked: false },
        { id: "4", text: "輕便雨具/遮陽傘", category: "用品", important: false, checked: false },
        { id: "5", text: "防蚊液", category: "用品", important: false, checked: false },
        { id: "6", text: "個人保養品/盥洗用具", category: "用品", important: false, checked: false },
    ],
    days: {
        day1: {
            id: "day1",
            title: "Day 1：老街巡禮與山林秘境",
            date: "2025/08/23",
            themeColor: "text-orange-600",
            routeColor: "border-orange-300",
            items: [
                {
                    startTime: "11:00",
                    endTime: "11:30",
                    type: "transport",
                    icon: "Car",
                    title: "竹南火車站集合/租車",
                    desc: "📍租車順財機車行",
                    location: "苗栗縣竹南鎮中山路166號",
                    mapUrl: "https://maps.app.goo.gl/DHK65Bx3PbZsC5o18",
                    image: "images/nanzhuang_zhunan_station.webp",
                    tags: ["集合", "租車"]
                },
                {
                    startTime: "11:30",
                    endTime: "12:20",
                    type: "transport",
                    icon: "Car",
                    title: "百合山莊",
                    desc: "Check in 放行李",
                    location: "苗栗縣南庄鄉福南17鄰50號353",
                    mapUrl: "https://maps.app.goo.gl/df13BBJtDnfVr6nq9",
                    image: "images/nanzhuang_lilyvillage.jpg",
                    tags: ["住宿"]
                },
                {
                    startTime: "12:30",
                    endTime: "13:10",
                    type: "food",
                    icon: "Utensils",
                    title: "椿也外省麵",
                    desc: "南庄老街吃午餐",
                    location: "353苗栗縣南庄鄉中正路1巷6號",
                    mapUrl: "https://maps.app.goo.gl/YiaXyD4vY1GiYDZQ8",
                    image: "images/nanzhuang_day1_launch.webp",
                    tags: ["#客家美食", "#在地小吃"]
                },
                {
                    startTime: "13:10",
                    endTime: "14:30",
                    type: "spot",
                    icon: "Droplets",
                    title: "南庄老街桂花巷",
                    desc: "逛老街、吃點心、買桂花釀<br>江記花蜜桂花巷花茶湯圓",
                    location: "苗栗縣南庄鄉文化路15號",
                    mapUrl: "https://maps.app.goo.gl/Rf6r6tbJ2xWyJw4k7",
                    image: "images/nanzhuang_old_street.webp",
                    tags: ["#桂花釀", "#老街"]
                },
                {
                    startTime: "15:00",
                    endTime: "16:40",
                    type: "spot",
                    icon: "Mountain",
                    title: "神仙谷瀑布",
                    desc: "電影《賽德克·巴萊》拍攝場景，壯麗峽谷地形。",
                    location: "苗栗縣南庄鄉東江路73號",
                    mapUrl: "https://maps.app.goo.gl/3oDVCvgMNYA6q4z58",
                    image: "images/nanzhuang_shensian_valley.jpg",
                    tags: ["#電影場景", "#瀑布"]
                },
                {
                    startTime: "17:00",
                    endTime: "17:30",
                    type: "spot",
                    icon: "Droplets",
                    title: "瓦祿產業文化館",
                    desc: "日式老派出所改建，感受歷史風華。",
                    location: "苗栗縣南庄鄉東河村5鄰78號",
                    mapUrl: "https://maps.app.goo.gl/U6JUsy7DU397vDmB8",
                    image: "images/nanzhuang_walohouse.webp",
                    tags: ["#歷史建築", "#在地文化"]
                },
                {
                    startTime: "17:40",
                    endTime: "19:00",
                    type: "food",
                    icon: "Utensils",
                    title: "南庄老金龍飯店",
                    desc: "在地飄香50年老店，經典客家菜。",
                    location: "苗栗縣南庄鄉民族街1-1號",
                    mapUrl: "https://maps.app.goo.gl/aoy5eJ1JsnB56RWC8",
                    image: "images/nanzhuang_gdragon.jpg",
                    tags: ["#老店", "#客家菜"]
                },
                {
                    startTime: "19:00",
                    endTime: "19:10",
                    type: "stay",
                    icon: "Home",
                    title: "回民宿休息",
                    desc: "品嘗阿凱師咖啡。",
                    location: "苗栗縣南庄鄉福南17鄰50號353",
                    mapUrl: "https://maps.app.goo.gl/df13BBJtDnfVr6nq9",
                    image: "images/nanzhuang_lilyvillage.jpg",
                    tags: ["#休息", "#咖啡"]
                }
            ]
        },
        day2: {
            id: "day2",
            title: "Day 2：山林松境 · 窯烤飄香",
            date: "2025/08/24",
            themeColor: "text-green-700",
            routeColor: "border-green-300",
            items: [
                {
                    startTime: "09:00",
                    endTime: "10:00",
                    type: "food",
                    icon: "Coffee",
                    title: "民宿早餐",
                    desc: "享受民宿提供的豐盛早餐，補充一天活力。",
                    location: "苗栗縣南庄鄉福南17鄰50號",
                    mapUrl: "https://maps.app.goo.gl/df13BBJtDnfVr6nq9",
                    image: "images/nanzhuang_lilyvillage.jpg",
                    tags: ["#活力早餐"]
                },
                {
                    startTime: "10:00",
                    endTime: "12:00",
                    type: "spot",
                    icon: "Mountain",
                    title: "民宿附近晃晃",
                    desc: "庭園、後山小河<br>恩哥水漂王",
                    location: "苗栗縣南庄鄉福南17鄰50號353",
                    mapUrl: "https://maps.app.goo.gl/df13BBJtDnfVr6nq9",
                    image: "images/nanzhuang_lilyvillage_garden.jpg",
                    tags: ["#散步", "#自然"]
                },
                {
                    startTime: "12:20",
                    endTime: "14:20",
                    type: "food",
                    icon: "Utensils",
                    title: "杉林松境休閒農場",
                    desc: "吃午餐、吃完在農場後山散步拍照",
                    location: "苗栗縣南庄鄉東河村橫屏背12鄰26號",
                    mapUrl: "https://maps.app.goo.gl/cgRRZskpxfjPPbdx5",
                    image: "images/nanzhuang_day2_launch.jpg",
                    tags: ["#景觀餐廳", "#簡餐"]
                },
                {
                    startTime: "14:30",
                    endTime: "15:30",
                    type: "food",
                    icon: "Coffee",
                    title: "黃金傳說窯烤麵包",
                    desc: "好吃的麵包，買完可以到後面步道散散步",
                    location: "苗栗縣南庄鄉中山路77號",
                    mapUrl: "https://maps.app.goo.gl/vmdtEpELReZscZWFA",
                    image: "images/nanzhuang_gl_bakery.webp",
                    tags: ["#窯烤麵包", "#下午茶"]
                },
                {
                    startTime: "15:30",
                    endTime: "16:00",
                    type: "transport",
                    icon: "Car",
                    title: "返程",
                    desc: "返回竹南車站，還車&搭火車回家~",
                    location: "苗栗縣竹南鎮中山路166號",
                    mapUrl: "https://maps.app.goo.gl/DHK65Bx3PbZsC5o18",
                    image: "images/nanzhuang_zhunan_station.webp",
                    tags: []
                }
            ]
        }
    }
};
