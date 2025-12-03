import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import games from "../data/allGamesData";

const AllGames = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState("All");

  // Generate unique Genre options
  const genres = ["All", ...new Set(games.map((g) => g.genre))];

  // Filtering
  const filteredGames =
    filterGenre === "All"
      ? games
      : games.filter((game) => game.genre === filterGenre);

  // Sorting
  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortOrder === "asc") return a.title.localeCompare(b.title);
    return b.title.localeCompare(a.title);
  });

  return (
    <div className="py-16 lg:px-16 text-white">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-10">
        All Games
      </h1>

      {/* FILTER & SORT PANEL */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-black/50 p-5 rounded border border-yellow-600">
        
        {/* FILTER */}
        <select
          onChange={(e) => setFilterGenre(e.target.value)}
          className="p-3 bg-black border border-yellow-600 rounded-lg w-full md:w-1/3"
        >
          {genres.map((genre, i) => (
            <option key={i}>{genre}</option>
          ))}
        </select>

        {/* SORT */}
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 bg-black border border-yellow-600 rounded w-full md:w-1/3"
        >
          <option value="asc">Sort A → Z</option>
          <option value="desc">Sort Z → A</option>
        </select>
      </div>

      {/* GAME CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedGames.map((game) => (
          <div
            key={game.id}
            className="bg-black/70 border border-yellow-600 rounded-xl shadow-xl flex flex-col h-[380px]"
          >
            <img
              src={game.img}
              className="h-40 w-full object-cover rounded-t-xl"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-yellow-400">{game.title}</h3>
              <p className="text-sm mt-2 opacity-80">{game.short}</p>

              <NavLink
                to={`/game/${game.id}`}
                className="bg-yellow-500 text-black text-center mt-12 py-2 rounded-lg font-bold hover:bg-amber-700 transition"
              >
                See Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
