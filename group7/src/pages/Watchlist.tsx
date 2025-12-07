// src/pages/Watchlist.tsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmsDB from "../data/films.json";

interface Film {
  id: number;
  title: string;
  year: number;
  genre: string;
  poster?: string;
}

const WATCHLIST_STORAGE_KEY = "watchlistFilmIds";
const QUEUE_STORAGE_KEY = "queueFilmIds";

const allFilms = FilmsDB.FilmsDB as Film[];

export default function Watchlist() {
  const [watchlistIds, setWatchlistIds] = useState<number[]>([]);
  const [queueIds, setQueueIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const watchlistRaw = localStorage.getItem(WATCHLIST_STORAGE_KEY);
      const queueRaw = localStorage.getItem(QUEUE_STORAGE_KEY);

      setWatchlistIds(watchlistRaw ? JSON.parse(watchlistRaw) : []);
      setQueueIds(queueRaw ? JSON.parse(queueRaw) : []);
    } catch {
      setWatchlistIds([]);
      setQueueIds([]);
    }
  }, []);

  const watchlistFilms = allFilms.filter((film) =>
    watchlistIds.includes(film.id)
  );
  const queueFilms = allFilms.filter((film) => queueIds.includes(film.id));

  const getPosterUrl = (film: Film) =>
    film.poster
      ? new URL(`../assets/${film.poster}`, import.meta.url).href
      : "https://via.placeholder.com/400x600?text=No+Image";

  return (
    <div className="min-h-screen bg-white-color text-black-color pt-20 pb-16 px-4 sm:px-8 lg:px-16">
      {/* PAGE HEADER */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Watchlist & Queue</h1>
        <p className="text-gray-600">
          Movies you’ve saved to watch later or added to your queue.
        </p>
      </header>

      {/* WATCHLIST SECTION */}
      <section className="mb-12">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">Your Watchlist</h2>
        </div>

        {watchlistFilms.length === 0 ? (
          <p className="text-gray-500">
            Your watchlist is empty. Head to the{" "}
            <Link to="/films" className="underline">
              Films
            </Link>{" "}
            page and click <strong>Add to Watchlist</strong> on any film.
          </p>
        ) : (
          <div className="flex flex-wrap gap-6">
            {watchlistFilms.map((film) => (
              <div key={film.id} className="w-32 sm:w-36 md:w-40">
                <img
                  src={getPosterUrl(film)}
                  alt={film.title}
                  className="h-auto w-full rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-sm font-semibold leading-tight">
                  {film.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {film.year} • {film.genre}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* QUEUE SECTION */}
      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">Your Queue</h2>
        </div>

        {queueFilms.length === 0 ? (
          <p className="text-gray-500">
            Your queue is empty. On any film page, press{" "}
            <strong>Add to Queue</strong> to list it here.
          </p>
        ) : (
          <div className="flex flex-wrap gap-6">
            {queueFilms.map((film) => (
              <div key={film.id} className="w-32 sm:w-36 md:w-40">
                <img
                  src={getPosterUrl(film)}
                  alt={film.title}
                  className="h-auto w-full rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-sm font-semibold leading-tight">
                  {film.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {film.year} • {film.genre}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
