import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import image1 from "../assets/image.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import img from "../assets/img.jpeg";
import Ludo from "../assets/ludo.jpeg";
import Slider from "react-slick";
const sliderData = [
    { id: 1, title: 'PUBG', imgSrc: image1 },
    { id: 2, title: 'Minecraft', imgSrc: image2 },
    { id: 3, title: 'Roblox', imgSrc: image3 },
]
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
const popularGames = [
    { id: 1, title: "PUBG MOBILE", cover: image1 , rating: 4.5, genre: "Battle Royale" },
    { id: 2, title: "FREE FIRE", cover: img, rating: 4.4, genre: "Battle Royale" },
    { id: 3, title: "LUDO KING", cover: Ludo , rating: 4.2, genre: "Board Game" },
];


const Home = () => {
    const handleSubscribe = (e) => {
        e.preventDefault(); 
        alert("Thank you for subscribing! We will send updates soon."); 
    };
    return(
        <div className="py-10 lg:px-30 ">
            <div className="lg:px-35">
                <section className="mb-20">
               <div className="rounded-xl border border-yellow-600 shadow-2xl shadow-black relative z-10 ">
                <Slider {...sliderSettings} className="h-[400px] rounded-xl overflow-hidden">{sliderData.map(slide => (
                    <div key={slide.id} className="h-[400px] w-auto">
                        <div className="relative h-full">
                            <img 
                            src={slide.imgSrc} 
                            alt={slide.title} 
                            className="w-full h-full" 
                            />
                        </div>
                    </div>
                        ))}
                </Slider>
                </div>
                
            </section>
            </div>
            
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-white text-center" >POPULAR GAMES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {popularGames.map(game => (
                        <NavLink 
                            key={game.id} 
                            to={`/game/${game.id}`}
                            className="block rounded-xl overflow-hidden shadow-2xl bg-black/60 border border-yellow-600 hover:shadow-lime-500/50 transition duration-300 transform hover:scale-[1.02]"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={game.cover} 
                                    alt={game.title} 
                                    className="w-full h-full" 
                                />
                            </div>
                            <div className="p-4 text-white">
                                <h3 className="text-xl font-bold text-yellow-600">{game.title}</h3>
                                <p className="text-sm mt-1 opacity-100">{game.genre}</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-md font-semibold">Rating: {game.rating} ⭐</span>
                                    <button className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-amber-800 transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>

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
