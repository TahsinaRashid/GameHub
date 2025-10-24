import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import gameDetailsData from '../gamedata/GameData.json'; 
// const isLoggedIn = false; 
const GameDetails = () => {
  const { gameId } = useParams(); 
  const [game, setGame] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const foundGame = gameDetailsData.find(g => g.id ===gameId);
    setGame(foundGame);
  }, [gameId,isLoggedIn]);
  if (!game) {
    return <div className="text-white text-center py-20">Game Not Found...</div>;
  }
  return (
    <div className="p-8 text-white max-w-4xl mx-auto bg-black/70 rounded-xl shadow-2xl">
      <h1 className="text-5xl font-extrabold text-lime-400 mb-4">{game.title}</h1>
      <p className="text-xl opacity-80 mb-6 border-b border-lime-400/50 pb-3">{game.category} | Rating: {game.ratings} ⭐</p>
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img 
            src={game.coverPhoto} 
            alt={game.title} 
            className="w-full h-auto object-cover rounded-lg border-2 border-lime-400/50 shadow-lime-500/50" 
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold mb-2 text-lime-400">Description</h3>
          <p className="mb-6 opacity-90">{game.description}</p>
          
          <div className="space-y-3">
            <p><strong>Developer:</strong> {game.developer}</p>
            <p><strong>Platform:</strong> {game.platform}</p>
          </div>
          
          <a 
            href={game.downloadLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-lime-500 text-black px-6 py-2 rounded-full font-bold hover:bg-lime-400 transition transform hover:scale-105"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;