import React from "react";

const About = () => {
  return (
    <div className="relative bg-red-950 text-white py-24 ">

      {/* Glow Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-25 bg-[radial-gradient(circle_at_center,rgba(255,200,80,0.3),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-6xl font-extrabold text-amber-300 drop-shadow-lg mb-6">
          About GameHub
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          A modern gaming ecosystem crafted for the next generation of players.  
          Built with speed, simplicity and premium gameplay experience in mind.
        </p>

        {/* Mission */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To revolutionize mobile gaming by offering seamless access to
            top-rated games, smarter discovery and a platform that evolves
            with players. GameHub is designed to make gaming effortless,
            engaging and beautifully simple anytime, anywhere.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-amber-200 mb-6">
            Why Gamers Choose GameHub
          </h2>

          <div className="flex flex-col gap-8 text-left">

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-300 transition">
              <h3 className="text-xl font-semibold text-amber-300 mb-2">
                🎮 Curated Game Library
              </h3>
              <p className="text-gray-300">Access top-rated action, strategy, casual and trending mobile games.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-300 transition">
              <h3 className="text-xl font-semibold text-amber-300 mb-2">
                ⚡ Lightning-Fast Experience
              </h3>
              <p className="text-gray-300">Optimized loading, smooth browsing and a performance-first design.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-300 transition">
              <h3 className="text-xl font-semibold text-amber-300 mb-2">
                🔒 100% Safe & Secure
              </h3>
              <p className="text-gray-300">Your data, activity and gaming preferences are always protected.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-300 transition">
              <h3 className="text-xl font-semibold text-amber-300 mb-2">
                🌍 Global Gaming Community
              </h3>
              <p className="text-gray-300">Join a growing network of gamers from around the world.</p>
            </div>

          </div>
        </div>

        {/* Final Note */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-20 leading-relaxed">
          Founded in 2025, GameHub continues to expand with a mission to bring
          premium mobile gaming to everyone. With a modern design, bold vision
          and a gamer-first mindset- your next adventure starts here.
        </p>
      </div>
    </div>
  );
};

export default About;
