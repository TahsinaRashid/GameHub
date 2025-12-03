import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import pubg from "../assets/g.jpg";
import img from "../assets/ludo-king.webp";
import mine from "../assets/minecraft.jpg";
import rob from "../assets/rob.jpg";
import dls from "../assets/dls.jpg";
import Slider from "react-slick";

/* ---------------- SLIDER ---------------- */
const sliderData = [
    { id: 1, title: 'PUBG', imgSrc: pubg },
    { id: 2, title: 'Minecraft', imgSrc: mine },
    { id: 3, title: 'Roblox', imgSrc: rob },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out"
};

/* ---------------- POPULAR GAMES ---------------- */
const popularGames = [
    { id: 1, title: "PUBG MOBILE", cover: pubg , rating: 4.5, genre: "Battle Royale" },
    { id: 2, title: "DLS24", cover: dls, rating: 4.4, genre: "Sport" },
    { id: 3, title: "LUDO KING", cover: img , rating: 4.2, genre: "Board Game" },
];

/* ---------------- REVIEWS DATA ---------------- */
const reviews = [
    { name: "Md.Ismail", stars: 5 , text: "Best gaming site ever! Super smooth UI." },
    { name: "Aysha Akter", text: "Love the design and easy navigation!", stars: 4 },
    { name: "Afiya Tabassum", text: "Very professional and updated content.", stars: 5 },
];

/* ---------------- CATEGORY ---------------- */
const categories = [
    { title: "Action Games", img: pubg },
    { title: "Adventure Games", img: mine },
    { title: "Board Games", img: img },
    { title: "Survival Games", img: rob },
];

/* ---------------- ALL ITEMS DATA ---------------- */
const allItems = [
    {
        id: 1,
        title: "PUBG MOBILE",
        img: pubg,
        short: "PUBG is an online battle royale game.",
        description:
            "PUBG Mobile is an intense battle royale game with massive maps, strategic combat, and realistic graphics."
    },
    {
        id: 2,
        title: "Minecraft",
        img: mine,
        short: "Open-world survival and creativity game.",
        description:
            "Minecraft lets players explore infinite worlds and create anything using blocks in survival or creative mode."
    },
    {
        id: 3,
        title: "Roblox",
        img: rob,
        short: "A universe of user-generated 3D experiences.",
        description:
            "Roblox is a global platform where players can enjoy games created by other developers and build their own."
    },
    {
        id: 4,
        title: "Dream League Soccer",
        img: dls,
        short: "Build your dream football team.",
        description:
            "DLS lets you create your own football club, sign players, and compete in global tournaments."
    },
];

const Home = () => {
    const handleSubscribe = (e) => {
        e.preventDefault(); 
        alert("Thank you for subscribing! We will send updates soon."); 
    };

    return(
        <div className="py-10 lg:px-10">

            {/* ---------------- SLIDER SECTION ---------------- */}
            <section className="mb-20">
                <div className="rounded-xl border border-yellow-600 shadow-2xl shadow-black relative z-10">
                    <Slider {...sliderSettings} className="h-[60vh] rounded-xl overflow-hidden">
                        {sliderData.map(slide => (
                            <div key={slide.id} className="h-[60vh]">
                                <img src={slide.imgSrc} className="h-full w-full object-cover" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

           {/* ---------------- ALL ITEMS SECTION ---------------- */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center text-yellow-500">POPULAR GAMES</h2>
                <h4 className="text-xl font-bold text-center text-yellow-500 mb-10">Explore more games <a className="underline text-blue-400" href="/allgames"> All Games</a></h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {allItems.map(item => (
                        <div 
                            key={item.id} 
                            className="bg-black/70 border border-yellow-600 rounded-xl shadow-xl flex flex-col h-[380px]"
                        >
                            <img src={item.img} className="h-40 w-full object-cover rounded-t-xl" />

                            <div className="p-4 text-white flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-yellow-400">{item.title}</h3>
                                <p className="text-sm mt-2 opacity-80 flex-grow">{item.short}</p>

                                <NavLink 
                                    to={`/game/${item.id}`}
                                    className="bg-yellow-500 text-black text-center mt-4 py-2 rounded-lg font-bold hover:bg-amber-700 transition"
                                >
                                    See More
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- CATEGORY SECTION ---------------- */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">GAME CATEGORIES</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((c, i) => (
                        <div key={i} className="relative group rounded-xl overflow-hidden border border-yellow-600 shadow-xl cursor-pointer">

                            <img src={c.img} className="h-40 w-full object-cover group-hover:scale-110 transition duration-300" />

                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <p className="text-lg font-bold text-yellow-400">{c.title}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- REVIEWS SECTION ---------------- */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">WHAT PEOPLE SAY</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div 
                            key={i}
                            className="p-6 rounded-xl bg-black/70 border border-yellow-600 text-white shadow-xl 
                            hover:shadow-yellow-500/40 transition transform hover:-translate-y-2"
                        >
                            <p className="mt-4 font-bold text-yellow-400">{r.name}</p>
                            <p className="italic opacity-90">“{r.text}”</p>
                            <p>⭐ {r.stars}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- WHY CHOOSE US ---------------- */}
            <section className="mb-24 border border-yellow-600 bg-black/60 p-10 rounded-xl">
                <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">WHY CHOOSE US</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">

                    <div className="bg-black/70 p-6 rounded-xl border border-yellow-600 hover:scale-[1.03] transition">
                        <h3 className="text-xl font-bold text-yellow-400">⚡ Fast Updates</h3>
                        <p className="opacity-80 mt-2">All game info updated daily.</p>
                    </div>

                    <div className="bg-black/70 p-6 rounded-xl border border-yellow-600 hover:scale-[1.03] transition">
                        <h3 className="text-xl font-bold text-yellow-400">🎮 Best UI Experience</h3>
                        <p className="opacity-80 mt-2">Smooth interface for all devices.</p>
                    </div>

                    <div className="bg-black/70 p-6 rounded-xl border border-yellow-600 hover:scale-[1.03] transition">
                        <h3 className="text-xl font-bold text-yellow-400">🔒 Secure Platform</h3>
                        <p className="opacity-80 mt-2">Your data is protected.</p>
                    </div>

                </div>
            </section>

            

            {/* ---------------- NEWSLETTER SECTION ---------------- */}
            <section className="py-5 bg-black/70 rounded-xl border-2 border-yellow-600 text-white text-center">
                <h2 className="text-3xl font-bold text-yellow-500 mb-2">Join the Action!</h2>
                <p className="mb-6 opacity-80">
                    Subscribe to our journey for exclusive updates.
                </p>
                
                <div className="max-w-md mx-auto flex">
                    <input 
                        type="email" 
                        placeholder="Enter your email address..."
                        className="w-full p-3 rounded-l-lg border-2 border-yellow-500 bg-black text-yellow-500 placeholder-gray-500 focus:outline-none"
                    />
                    <button onClick={handleSubscribe} className="bg-yellow-500 text-black px-6 py-3 rounded-r-lg font-bold hover:bg-amber-800 transition duration-200">
                        Subscribe
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Home;
