import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import gamesData from "../data/allGamesData"; 
import { FaStar, FaDownload, FaDesktop, FaLayerGroup } from 'react-icons/fa'; 
const getGameById = (id) => {
  return gamesData.find((g) => g.id == id);
};

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [game, setGame] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const data = getGameById(id);
    setGame(data);
  }, [id]);
  if (!game) {
    const gameExists = getGameById(id);
    if (!gameExists) {
      return (
        <div className="text-center text-xl mt-20 text-red-500">
          ❌ Game Not Found!
        </div>
      );
    }
    return (
      <div className="text-center text-xl mt-20 text-white">
        Loading...
      </div>
    );
  }

  const canInstall = user !== null;

  const handleInstall = () => {
    if (!canInstall) return navigate("/login");
    setInstalled(true);
    alert(`${game.title} Installed Successfully!`);
  };

  const handleUninstall = () => {
    setInstalled(false);
    alert(`${game.title} Uninstalled!`);
  };
  
  // Destructure for cleaner access
  const {
      title, genre, img, short, desc, rating, downloads, rank, developer, 
      os_support, features, requirements, screenshots, updated, version
  } = game;



  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-10  text-white"
    >
        
      {/* 1. 🖼️ Banner & Title Section */}
      <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
          <h1 className="text-4xl font-extrabold text-yellow-400">{title}</h1>
          <p className="text-lg opacity-100 mt-1">{genre} | Developed by {developer || 'Unknown'}</p>
          <div className="mt-4">
            {installed ? (
              <button onClick={handleUninstall} className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-red-700 transition">
                Uninstall
              </button>
            ) : (
              <button onClick={handleInstall} className="bg-green-600 text-black px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-green-700 transition disabled:bg-gray-500" disabled={!canInstall}>
                {canInstall ? 'Install Now' : 'Login to Install'}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN (Details & Features) */}
        <div className="lg:col-span-2 space-y-10">

          {/* 2. 📊 Key Stats */}
          <section className="bg-black/40 p-6 rounded-xl shadow-lg border border-yellow-600/50">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Key Stats & Ranking</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <StatCard icon={<FaStar />} value={rating || 'N/A'} label="Rating" />
              <StatCard icon={<FaDownload />} value={downloads || 'N/A'} label="Downloads" />
              <StatCard icon={<FaLayerGroup />} value={rank || 'N/A'} label="Global Rank" />
              <StatCard icon={<FaDesktop />} value={os_support || 'N/A'} label="OS Support" />
            </div>
          </section>

          {/* 3. 📝 Overview & Short Description */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{desc}</p>
            <p className="text-yellow-300 italic">"{short}"</p>
          </section>

          {/* 4. ✨ Features & Highlights */}
          {features && features.length > 0 && (
            <section className="bg-gray-900/50 p-6 rounded-xl shadow-inner">
              <h2 className="text-2xl font-bold mb-3 text-green-400">Features & Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc ml-6 text-gray-300 space-y-2">
                  {features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

        </div>
        
        {/* RIGHT COLUMN (Sidebar Info) */}
        <div className="lg:col-span-1 space-y-10">

          {/* 6. 💻 System Requirements */}
          {requirements && (
            <section className="bg-gray-800/70 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold mb-4 flex items-center"><FaDesktop className="mr-2 text-blue-400" /> System Requirements</h2>
              <RequirementItem label="OS" value={requirements.os} />
              <RequirementItem label="Processor" value={requirements.processor} />
              <RequirementItem label="RAM" value={requirements.ram} />
              <RequirementItem label="Storage" value={requirements.storage} />
            </section>
          )}

          {/* 7. ℹ️ Additional Information */}
          <section className="bg-gray-800/70 p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
            <h2 className="text-xl font-bold mb-4">Additional Information</h2>
            <InfoItem label="Developer" value={developer || 'N/A'} />
            <InfoItem label="Last Updated" value={updated || 'N/A'} />
            <InfoItem label="Version" value={version || 'N/A'} />
            <InfoItem label="Genre" value={genre || 'N/A'} />
          </section>

        </div>
      </div>
      
       {/* Note */}
      <div className="mt-10 pt-4 border-t border-gray-500">
        <p className="text-gray-200 italic text-center">
            Note: You must be logged in to install this game.
        </p>
      </div>
    </motion.div>
  );
};

// Helper Components for clean code

const StatCard = ({ icon, value, label }) => (
    <div className="bg-black/60 p-3 rounded-lg flex flex-col justify-center items-center">
        <div className="text-3xl text-yellow-500 mb-1">{icon}</div>
        <p className="text-lg font-bold">{value}</p>
        <p className="text-xs text-gray-400 uppercase">{label}</p>
    </div>
);

const RequirementItem = ({ label, value }) => (
    <div className="flex justify-between py-1 border-b border-gray-700 last:border-b-0">
        <span className="font-medium text-gray-300">{label}:</span>
        <span className="text-yellow-400">{value || 'N/A'}</span>
    </div>
);

const InfoItem = ({ label, value }) => (
    <div className="flex justify-between py-1 border-b border-gray-700 last:border-b-0">
        <span className="text-gray-400">{label}:</span>
        <span className="font-medium">{value || 'N/A'}</span>
    </div>
);


export default Details;