// import React from "react";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { NavLink } from 'react-router-dom';
// import image1 from "../assets/image.jpeg"
// import image2 from "../assets/image2.jpeg"
// import image3 from "../assets/image3.jpeg"
// import img from "../assets/img.jpeg";
// import Ludo from "../assets/ludo.jpeg";
// import Slider from "react-slick";
// const sliderData = [
//     { id: 1, title: 'PUBG', imgSrc: image1 },
//     { id: 2, title: 'Minecraft', imgSrc: image2 },
//     { id: 3, title: 'Roblox', imgSrc: image3 },
// ]
// const sliderSettings = {
//     dots: true,              
//     infinite: true,          
//     speed: 700,              
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,         
//     arrows: true,          
//     fade: true,            
//     cssEase: "ease-in-out"
// };
// const popularGames = [
//     { id: 1, title: "PUBG MOBILE", cover: image1 , rating: 4.5, genre: "Battle Royale" },
//     { id: 2, title: "FREE FIRE", cover: img, rating: 4.4, genre: "Battle Royale" },
//     { id: 3, title: "LUDO KING", cover: Ludo , rating: 4.2, genre: "Board Game" },
// ];


// const Home = () => {
//     const handleSubscribe = (e) => {
//         e.preventDefault(); 
//         alert("Thank you for subscribing! We will send updates soon."); 
//     };
//     return(
//         <div className="py-10 lg:px-10 ">
//             <div className="lg:px-35">
//                 <section className="mb-20">
//                <div className="rounded-xl border border-yellow-600 shadow-2xl shadow-black relative z-10 ">
//                 <Slider {...sliderSettings} className="h-[400px] rounded-xl overflow-hidden">{sliderData.map(slide => (
//                     <div key={slide.id} className="h-[400px] w-auto">
//                         <div className="relative h-full">
//                             <img 
//                             src={slide.imgSrc} 
//                             alt={slide.title} 
//                             className="w-full h-full" 
//                             />
//                         </div>
//                     </div>
//                         ))}
//                 </Slider>
//                 </div>
                
//             </section>
//             </div>
            
//             <section className="mb-16">
//                 <h2 className="text-3xl font-bold mb-8 text-white text-center" >POPULAR GAMES</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {popularGames.map(game => (
//                         <NavLink 
//                             key={game.id} 
//                             to={`/game/${game.id}`}
//                             className="block rounded-xl overflow-hidden shadow-2xl bg-black/60 border border-yellow-600 hover:shadow-lime-500/50 transition duration-300 transform hover:scale-[1.02]"
//                         >
//                             <div className="h-48 overflow-hidden">
//                                 <img 
//                                     src={game.cover} 
//                                     alt={game.title} 
//                                     className="w-full h-full" 
//                                 />
//                             </div>
//                             <div className="p-4 text-white">
//                                 <h3 className="text-xl font-bold text-yellow-600">{game.title}</h3>
//                                 <p className="text-sm mt-1 opacity-100">{game.genre}</p>
//                                 <div className="mt-3 flex items-center justify-between">
//                                     <span className="text-md font-semibold">Rating: {game.rating} ⭐</span>
//                                     {/* <button className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-amber-800 transition">
//                                         View Details
//                                     </button> */}
//                                 </div>
//                             </div>
//                         </NavLink>
//                     ))}
//                 </div>
//             </section>

//             <section className="py-5 bg-black/70 rounded-xl border-2 border-yellow-600 text-white text-center">
//                 <h2 className="text-3xl font-bold text-yellow-500 mb-2">Join the Action!</h2>
//                 <p className="mb-6 opacity-80">
//                     Subscribe to our newsletter for exclusive game updates, early access details and pro tips straight to your inbox.
//                 </p>
                
//                 <div className="max-w-md mx-auto flex">
//                     <input 
//                         type="email" 
//                         placeholder="Enter your email address..."
//                         className="w-full p-3 rounded-l-lg border-2 border-yellow-500 bg-black text-yellow-500 placeholder-gray-500 focus:outline-none focus:border-yellow-500"
//                     />
//                     <button onClick={handleSubscribe} className="bg-yellow-500 text-black px-6 py-3 rounded-r-lg font-bold hover:bg-amber-800 transition duration-200">
//                         Subscribe
//                     </button>
//                 </div>
//                 <p className="mt-3 text-xs opacity-60">
//                     We hate spam as much as lag. Unsubscribe anytime.
//                 </p>
//             </section>

//         </div>
//     );
// };

// export default Home;
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
    { id: 2, title: "DLS24", cover: dls, rating: 4.4, genre: "Soccer" },
    { id: 3, title: "LUDO KING", cover: img , rating: 4.2, genre: "Board Game" },
];

/* ---------------- REVIEWS DATA ---------------- */
const reviews = [
    { name: "Ismail", stars: 5 , text: "Best gaming site ever! Super smooth UI." },
    { name: "Aysha", text: "Love the design and easy navigation!", stars: 4 },
    { name: "Afiya", text: "Very professional and updated content.", stars: 5 },
];

/* ---------------- CATEGORY ---------------- */
const categories = [
    { title: "Action Games", img: pubg },
    { title: "Adventure Games", img: mine },
    { title: "Board Games", img: img },
    { title: "Survival Games", img: rob },
];

const Home = () => {
    const handleSubscribe = (e) => {
        e.preventDefault(); 
        alert("Thank you for subscribing! We will send updates soon."); 
    };

    return(
        <div className="bg-red-950 py-10 lg:px-10">

            {/* ---------------------------------------------------------------- */}
            {/* HERO / SLIDER SECTION */}
            {/* ---------------------------------------------------------------- */}
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


            {/* ---------------------------------------------------------------- */}
            {/* POPULAR GAMES */}
            {/* ---------------------------------------------------------------- */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">POPULAR GAMES</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {popularGames.map(game => (
                        <NavLink 
                            key={game.id} 
                            to={`/game/${game.id}`}
                            className="block rounded-xl overflow-hidden shadow-2xl bg-black/60 border border-yellow-600 hover:shadow-yellow-500/50 transition duration-300"
                        >
                            <img src={game.cover} className="h-48 w-full" />

                            <div className="p-4 text-white">
                                <h3 className="text-xl font-bold text-yellow-600">{game.title}</h3>
                                <p className="text-sm mt-1 opacity-80">{game.genre}</p>
                                <p className="mt-3 font-semibold">⭐ {game.rating}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>


            {/* ---------------------------------------------------------------- */}
            {/* CATEGORY SECTION */}
            {/* ---------------------------------------------------------------- */}
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


            {/* ---------------------------------------------------------------- */}
            {/* REVIEWS SECTION (Non-clickable + floating effect) */}
            {/* ---------------------------------------------------------------- */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center text-white mb-10">WHAT PEOPLE SAY</h2>

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


            {/* ---------------------------------------------------------------- */}
            {/* WHY CHOOSE US */}
            {/* ---------------------------------------------------------------- */}
            <section className="mb-24 border border-yellow-600 bg-black/60 p-10 rounded-xl">
                <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">WHY CHOOSE US</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">

                    <div className="bg-black/70 p-6 rounded-xl border border-yellow-600 hover:scale-[1.03] transition">
                        <h3 className="text-xl font-bold text-yellow-400">⚡ Fast Updates</h3>
                        <p className="opacity-80 mt-2">All game info and content updated daily.</p>
                    </div>

                    <div className="bg-black/70 p-6 rounded-xl border border-yellow-600 hover:scale-[1.03] transition">
                        <h3 className="text-xl font-bold text-yellow-400">🎮 Best UI Experience</h3>
                        <p className="opacity-80 mt-2">Smooth interface for all devices.</p>
                    </div>

                    <div className="bg-black/70 p-6 rounded-xl border border-yellow-600 hover:scale-[1.03] transition">
                        <h3 className="text-xl font-bold text-yellow-400">🔒 Secure Platform</h3>
                        <p className="opacity-80 mt-2">Your data and interactions are fully protected.</p>
                    </div>

                </div>
            </section>



            {/* ---------------------------------------------------------------- */}
            {/* NEWSLETTER SECTION */}
            {/* ---------------------------------------------------------------- */}
           <section className="py-5 bg-black/70 rounded-xl border-2 border-yellow-600 text-white text-center">
                <h2 className="text-3xl font-bold text-yellow-500 mb-2">Join the Action!</h2>
                <p className="mb-6 opacity-80">
                    Subscribe to our newsletter for exclusive game updates, early access details and pro tips straight to your inbox.
                </p>
                
                <div className="max-w-md mx-auto flex">
                    <input 
                        type="email" 
                        placeholder="Enter your email address..."
                        className="w-full p-3 rounded-l-lg border-2 border-yellow-500 bg-black text-yellow-500 placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                    />
                    <button onClick={handleSubscribe} className="bg-yellow-500 text-black px-6 py-3 rounded-r-lg font-bold hover:bg-amber-800 transition duration-200">
                        Subscribe
                    </button>
                </div>
                <p className="mt-3 text-xs opacity-60">
                    We hate spam as much as lag. Unsubscribe anytime.
                </p>
            </section>
        </div>
    );
};

export default Home;
