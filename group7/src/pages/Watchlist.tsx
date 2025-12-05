// src/pages/Watchlist.tsx
import React from "react";

type Movie = {
  title: string;
  year: string;
  genre: string;
  poster: string;
};

const WATCHLIST_MOVIES: Movie[] = [
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
    poster: "https://via.placeholder.com/400x600/4b6cb7/ffffff?text=Dune+Part+Two",
  },
  {
    title: "Poor Things",
    year: "2023",
    genre: "FANTASY",
    poster: "https://via.placeholder.com/400x600/bb86fc/ffffff?text=Poor+Things",
  },
];

const QUEUE_MOVIES: Movie[] = [
  WATCHLIST_MOVIES[2], 
  WATCHLIST_MOVIES[0], 
  WATCHLIST_MOVIES[3], 
  WATCHLIST_MOVIES[1], 
];


export default function Watchlist() {
  return (
   
    <div className="min-h-screen bg-white-color text-black-color pt-20 pb-10 px-4 sm:px-8 lg:px-16">
      {/* Your Queue */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <h1 className="text-3xl font-bold">Your Queue</h1>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-xl leading-none">
            +
          </button>
        </div>
        <br>
        </br>

        <div className="flex flex-wrap gap-6">
          {QUEUE_MOVIES.map((movie) => (
            <div key={movie.title} className="w-32 sm:w-36 md:w-40">
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-auto w-full rounded-lg shadow-md"
              />
              <h3 className="mt-2 text-sm font-semibold leading-tight">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-500">
                {movie.year} • {movie.genre}
              </p>
            </div>
          ))}
        </div>
      </section>

      <br>
        </br>
        <br>
        </br>
      {/* Your Watchlist */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-3xl font-bold">Your Watchlist</h2>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-xl leading-none">
            +
          </button>
        </div>

        <br>
        </br>

        <div className="flex flex-wrap gap-6">
          {WATCHLIST_MOVIES.map((movie) => (
            <div key={movie.title} className="w-32 sm:w-36 md:w-40">
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-auto w-full rounded-lg shadow-md"
              />
              <h3 className="mt-2 text-sm font-semibold leading-tight">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-500">
                {movie.year} • {movie.genre}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
