import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center py-20 min-h-[50vh] p-6 text-white text-center">
            <h1 className="text-5xl font-extrabold text-amber-200 mb-6">
                About GameHub - A Game Library
            </h1>
            <p className="max-w-3xl text-lg text-white mb-8">
                GameHub is dedicated to providing the best mobile gaming experience by offering a massive library of action, strategy and casual games. Our mission is to connect gamers with their next favorite adventure.
            </p>
            <p className="max-w-3xl text-lg text-white">
                Founded in 2025, we believe in seamless access to quality games like PUBG, Free Fire, and Ludo King. Enjoy gaming without limits!
            </p>
        </div>
    );
};

export default About;