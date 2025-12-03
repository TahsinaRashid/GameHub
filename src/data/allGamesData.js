import pubg from "../assets/g.jpg";
import mine from "../assets/minecraft.jpg";
import rob from "../assets/rob.jpg";
import dls from "../assets/dls.jpg";
import img from "../assets/ludo-king.webp";
import f from "../assets/f.webp";
import call from "../assets/call.webp";
import d from "../assets/3d.webp";
import sub from "../assets/sub.webp";
import t from "../assets/t.webp";


const game = [
    {
        id: 1,
        title: "PUBG Mobile",
        img: pubg,
        genre: "Battle Royale",
        short: "An intense online battle royale game.",
        desc: "PUBG Mobile is an iconic battle royale game offering intense last-man-standing survival gameplay with realistic graphics and huge maps.",
        
        rating: 4.8,
        downloads: "2.3M+",
        rank: "1.5M+",
        developer: "Tencent Games", 
        os_support: "Windows, Android, iOS",
        
        features: [
            "100 Player Battles", 
            "Realistic Graphics", 
            "Squad-based Combat", 
            "Huge Diverse Maps"
        ],
        requirements: {
            os: "Android 5.1.1 / iOS 9.0+",
            processor: "Snapdragon 675 / A9 Chip",
            ram: "3GB",
            storage: "4GB Free Space",
        },
        updated: "2025-01-12",
        version: "v3.4.2",
    },
    {
        id: 2,
        title: "Minecraft",
        img: mine,
        genre: "Sandbox", 
        short: "Open-world sandbox building and survival.",
        desc: "Minecraft allows you to explore infinite worlds, craft tools, build anything from simple homes to grand castles, and survive dangerous mobs.",
        
        rating: 4.6,
        downloads: "350M+",
        rank: "Global Top 5",
        developer: "Mojang Studios",
        os_support: "Multi-platform",
        
        features: [
            "Infinite Block Worlds", 
            "Creative & Survival Modes", 
            "Multiplayer Servers", 
            "Modding Support"
        ],
        requirements: {
            os: "Windows 7 / macOS 10.14+",
            processor: "Intel Core i3-3210 / AMD A8-7600",
            ram: "4GB",
            storage: "1GB Free Space",
        },
        updated: "2024-11-01",
        version: "v1.20.51",
    },
    
    {
        id: 3,
        title: "Roblox",
        img: rob,
        genre: "Online Platform", 
        short: "Millions of user-generated games in one place.",
        desc: "Roblox is a universe of experiences allowing players to play games created by developers worldwide. It's a massive social gaming platform.",
        
        rating: 4.5,
        downloads: "500M+",
        rank: "Global Top 3",
        developer: "Roblox Corporation",
        os_support: "Android, iOS, PC, Xbox",
        
        features: [
            "Millions of Games", 
            "Cross-Platform Play", 
            "In-game Currency (Robux)", 
            "Development Tools"
        ],
        requirements: {
            os: "Windows 10 / Android 4.4+",
            processor: "1.6 GHz Dual Core",
            ram: "1GB",
            storage: "500MB Free Space",
        },
        updated: "2024-12-01",
        version: "Latest",
    },
    {
        id: 4,
        title: "Dream League Soccer",
        img: dls,
        genre: "Sports",
        short: "Build your dream team.",
        desc: "DLS lets you sign top players, build stadiums, and compete globally in football tournaments with stunning 3D motion-captured player moves.",
        
        rating: 4.4,
        downloads: "150M+",
        rank: "Top 5 Sports",
        developer: "First Touch Games Ltd.",
        os_support: "Android, iOS",
        
        features: [
            "Build & Customize Team", 
            "8 Divisions of Gameplay", 
            "3D Motion Capture", 
            "Global Competition"
        ],
        requirements: {
            os: "Android 6.0 / iOS 13.0+",
            processor: "1.8 GHz Octa-core",
            ram: "2GB",
            storage: "1.5GB Free Space",
        },
        updated: "2024-10-25",
        version: "v11.0",
    },
    {
        id: 5,
        title: "Ludo King",
        img: img,
        genre: "Board Game",
        short: "Classic ludo game with multiplayer.",
        desc: "Ludo King is a digital version of the popular board game allowing multiplayer gameplay, voice chat, and fun animated graphics.",
        
        rating: 4.3,
        downloads: "750M+",
        rank: "Top 1 Board Game",
        developer: "Gamotronix",
        os_support: "Android, iOS, Windows 10",
        
        features: [
            "Online Multiplayer", 
            "Voice Chat", 
            "7 different Themes", 
            "Play Offline (Local)"
        ],
        requirements: {
            os: "Android 4.4 / iOS 9.0+",
            processor: "Any Dual-Core",
            ram: "512MB",
            storage: "200MB Free Space",
        },
        updated: "2024-09-15",
        version: "v8.0.0",
    },
    {
        id: 6,
        title: "Call of Duty Mobile",
        img: call,
        genre: "Action",
        short: "Fast-paced shooting battles.",
        desc: "COD Mobile offers intense multiplayer and battle royale modes with HD graphics, customizable loadouts, and famous maps.",
        
        rating: 4.7,
        downloads: "300M+",
        rank: "Top 1 Action Shooter",
        developer: "TiMi Studio Group",
        os_support: "Android, iOS",
        
        features: [
            "Iconic Maps (Nuketown, etc.)", 
            "Scorestreaks & Operator Skills", 
            "Competitive Ranks", 
            "Zombies Mode"
        ],
        requirements: {
            os: "Android 5.1.1 / iOS 9.0+",
            processor: "Snapdragon 730 / A10 Fusion",
            ram: "4GB",
            storage: "10GB Free Space",
        },
        updated: "2025-01-01",
        version: "Season 11",
    },
    {
        id: 7,
        title: "Free Fire",
        img: f,
        genre: "Battle Royale",
        short: "Quick survival matches with 50 players.",
        desc: "Garena Free Fire is known for fast-paced matches, smooth gameplay, and unique character abilities, optimized for mid-range phones.",
        
        rating: 4.2,
        downloads: "1B+",
        rank: "Top 2 Battle Royale",
        developer: "Garena",
        os_support: "Android, iOS",
        
        features: [
            "Quick 10-minute Matches", 
            "Character Skills", 
            "Dynamic Safe Zone", 
            "Pet System"
        ],
        requirements: {
            os: "Android 4.1 / iOS 9.0+",
            processor: "Quad-core 1.2 GHz",
            ram: "1GB",
            storage: "1GB Free Space",
        },
        updated: "2024-12-15",
        version: "OB43",
    },
    {
        id: 8,
        title: "Car Racing 3D",
        img: d,
        genre: "Racing",
        short: "High-speed racing with stunning tracks.",
        desc: "Car Racing 3D brings drifting, challenges, and realistic car physics. Customize your ride and dominate the street circuits.",
        
        rating: 4.1,
        downloads: "50M+",
        rank: "Top 10 Racing",
        developer: "Racing Masters Inc.",
        os_support: "Android, iOS",
        
        features: [
            "Realistic Physics", 
            "Car Customization", 
            "Multiple Game Modes", 
            "Stunning 3D Tracks"
        ],
        requirements: {
            os: "Android 5.0 / iOS 11.0+",
            processor: "Snapdragon 450",
            ram: "2GB",
            storage: "500MB Free Space",
        },
        updated: "2024-08-10",
        version: "v2.1",
    },
    {
        id: 9,
        title: "Subway Surfers",
        img: sub,
        genre: "Arcade",
        short: "Endless runner adventure.",
        desc: "Subway Surfers is an endless running game where you dodge trains, collect coins, and escape the grumpy inspector and his dog.",
        
        rating: 4.6,
        downloads: "2B+",
        rank: "All-time Popular",
        developer: "SYBO Games",
        os_support: "Android, iOS, Kindle",
        
        features: [
            "Daily Challenges", 
            "Hoverboards", 
            "World Tour", 
            "Unlock Characters"
        ],
        requirements: {
            os: "Android 4.4 / iOS 9.0+",
            processor: "Any Dual-Core",
            ram: "1GB",
            storage: "300MB Free Space",
        },
        updated: "2024-11-20",
        version: "v3.23",
        
    },
    {
        id: 10,
        title: "Temple Run 2",
        img: t,
        genre: "Arcade",
        short: "Escape from the monster!",
        desc: "Temple Run 2 is an addictive endless running game with new obstacles, power-ups, and more gorgeous environments than its predecessor.",
        
        rating: 4.5,
        downloads: "500M+",
        rank: "Top 2 Endless Runner",
        developer: "Imangi Studios",
        os_support: "Android, iOS",
        
        features: [
            "New Environments", 
            "Unique Obstacles", 
            "Better Graphics", 
            "Special Powers"
        ],
        requirements: {
            os: "Android 4.1 / iOS 8.0+",
            processor: "Any Dual-Core",
            ram: "1GB",
            storage: "250MB Free Space",
        },
        updated: "2024-10-05",
        version: "v1.98",

    },
];

export default game;