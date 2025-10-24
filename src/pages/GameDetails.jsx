import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import gamesData from '../gamedata/GameData.json'; 

const GameDetails = () => {
    const { id } = useParams();
    const game = gamesData.find(game => game.id === id);
    if (!game) {
        return <h1 className="text-white text-3xl text-center py-20">404 - Game Not Found!</h1>;
    }
    return (
        <div className="min-h-screen text-white p-4 md:p-10">
            <div className="max-w-4xl mx-auto bg-black/60 rounded-lg shadow-xl overflow-hidden">
                <img 
                    src={game.coverPhoto} 
                    alt={game.pic} 
                    className="w-full h-96 " 
                />
                <div className="p-6 md:p-10">
                    <h1 className="text-2xl font-bold text-yellow-400 mb-6 lg:text-4xl">{game.title}</h1>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-lg  ">
                        <span className="bg-yellow-600 text-black px-3 py-1 rounded-full font-semibold">
                            {game.developer}
                        </span>
                        <span className="bg-green-700 px-3 py-1 rounded-full font-bold">
                            Rating: {game.ratings}
                        </span>
                    </div>

                    <p className="text-gray-300 text-xl leading-relaxed mb-8 border-t border-gray-700 pt-6">
                        {game.description}
                    </p>
                    <a 
                        href={game.downloadLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 inline-block"
                    >
                        Install
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;