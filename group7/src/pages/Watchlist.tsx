// src/pages/Watchlist.tsx
import React from "react";

export default function Watchlist() {
  const watchlist = [
    {
      title: "Oppenheimer",
      year: "2023",
      genre: "DRAMA",
      poster: "https://via.placeholder.com/400x600?text=Oppenheimer",
    },
    {
      title: "Barbie",
      year: "2023",
      genre: "COMEDY",
      poster: "https://via.placeholder.com/400x600/ff8e53/ffffff?text=Barbie",
    },
    {
      title: "Dune: Part Two",
      year: "2024",
      genre: "SCI-FI",
      poster: "https://via.placeholder.com/400x600/4ecdc4/ffffff?text=Dune+Part+Two",
    },
    {
      title: "Poor Things",
      year: "2023",
      genre: "FANTASY",
      poster: "https://via.placeholder.com/400x600/45b7d1/ffffff?text=Poor+Things",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 px-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">Your Watchlist</h1>

        {/* Plus button */}
        <button className="flex items-center justify-center h-8 w-8 rounded-full bg-sky-400 text-white text-xl hover:bg-sky-500">
          +
        </button>
      </div>

      {/* Movie Posters Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {watchlist.map((movie, index) => (
          <div key={index} className="text-center">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-md mb-3"
            />

            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-500">
              {movie.year} • {movie.genre}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
