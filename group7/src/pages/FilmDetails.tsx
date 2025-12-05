// src/pages/FilmDetails.tsx

import FilmsDB from "../data/films.json";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import LogFilmModal from "../components/ui/LogFilmModal";

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
}

export default function FilmDetails() {
  const { id } = useParams<{ id: string }>();
  const film = FilmsDB.FilmsDB.find((f: Film) => f.id === Number(id));

  if (!film) {
    return (
      <div className="bg-white-color text-black-color flex min-h-screen items-center justify-center py-20">
        <div className="max-w-md px-4 text-center">
          <h1 className="hero-title text-gray mb-4 text-3xl font-bold">
            Film Not Found
          </h1>
          <Link
            to="/films"
            className="btn-primary inline-block rounded-lg px-6 py-3 shadow-md"
          >
            ← Back to Films
          </Link>
        </div>
      </div>
    );
  }

<<<<<<< Updated upstream
  // Real film-themed Unsplash images
  const getPosterUrl = (film: Film) => {
    switch (film.title) {
      case "Inception":
        return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center";
      case "The Godfather":
        return "https://images.unsplash.com/photo-1571133918265-65e89a5b0e3f?w=400&h=600&fit=crop&crop=center";
      case "Pulp Fiction":
        return "https://images.unsplash.com/photo-1489599501215-4b4ca2e8f83d?w=400&h=600&fit=crop&crop=center";
      default:
        return "https://images.unsplash.com/photo-1489599501215-4b4ca2e8f83d?w=400&h=600&fit=crop&crop=center";
=======
  const getImageUrl = (filename: string | undefined) => {
    if (!filename) {
      return "https://via.placeholder.com/300x450.png?text=No+Image";
    }
    try {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    } catch {
      return "https://via.placeholder.com/300x450.png?text=No+Image";
>>>>>>> Stashed changes
    }
  };

  const [showModal, setShowModal] = useState(false);

  // ⭐ NEW STATES
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isInQueue, setIsInQueue] = useState(false);

  return (
    <div className="bg-white-color text-black-color min-h-screen">
      {/* Back Button */}
      <div className="bg-white-color/95 border-gray/30 sticky top-0 z-50 border-b px-4 py-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/films"
            className="btn-outline flex items-center gap-2 rounded-lg px-4 py-2 shadow-sm transition-shadow hover:shadow-md"
          >
            ← Back to Films
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="from-primary-color/10 to-white-color relative overflow-hidden bg-gradient-to-br">
        <div className="absolute inset-0">
          <img
<<<<<<< Updated upstream
            src={getPosterUrl(film)}
            alt={`${film.title} background`}
            className="h-full w-full object-cover opacity-20"
=======
            src={getImageUrl(film.poster)}
            alt={film.title}
            className="h-full w-full object-cover opacity-20 blur-sm"
>>>>>>> Stashed changes
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="content-container relative z-10 flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center">
          {/* POSTER */}
          <img
            src={getPosterUrl(film)}
            alt={film.title}
            className="film-poster border-gray/20 h-[500px] w-full max-w-sm shrink-0 rounded-2xl border object-cover shadow-2xl"
          />

          {/* INFO */}
          <div className="flex-1 space-y-6">
            <h1 className="hero-title text-5xl font-bold text-shadow-sm lg:text-6xl">
              {film.title}
            </h1>

            <div className="text-gray flex flex-wrap items-center gap-6 text-lg">
              <span className="bg-white-color/80 rounded-full px-4 py-2 shadow-sm">
                {film.year}
              </span>
              <span className="bg-white-color/80 rounded-full px-4 py-2 shadow-sm">
                {film.genre}
              </span>
              <p className="font-medium">
                Directed by <span className="text-black-color">{film.director}</span>
              </p>
            </div>

            <p className="text-gray max-w-2xl text-xl leading-relaxed opacity-90">
              {film.title} is a groundbreaking {film.genre.toLowerCase()} film that
              redefined the genre. Directed by the visionary {film.director}, it
              features unforgettable storytelling and iconic performances.
            </p>

            {/* ⭐ BUTTONS */}
            <div className="hero-buttons flex flex-wrap items-center gap-4">

              {/* RATE / REVIEW */}
              <button
                onClick={() => setShowModal(true)}
                className="btn-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl"
              >
                Rate/Review
              </button>

              {/* ⭐ WATCHLIST BUTTON */}
              <button
                className={`btn-outline border-2 px-8 py-4 text-lg shadow-sm hover:shadow-md ${
                  isInWatchlist ? "bg-black-color text-white-color" : ""
                }`}
                onClick={() => setIsInWatchlist((prev) => !prev)}
              >
                {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
              </button>

              {/* ⭐ QUEUE BUTTON */}
              <button
                className={`btn-outline border-2 px-8 py-4 text-lg shadow-sm hover:shadow-md ${
                  isInQueue ? "bg-black-color text-white-color" : ""
                }`}
                onClick={() => setIsInQueue((prev) => !prev)}
              >
                {isInQueue ? "In Queue" : "Add to Queue"}
              </button>

              {/* GREEN PILL — WATCHLIST */}
              {isInWatchlist && (
                <span className="ml-2 rounded-full border border-emerald-500 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
                  Added to Watchlist
                </span>
              )}

              {/* BLUE PILL — QUEUE */}
              {isInQueue && (
                <span className="ml-2 rounded-full border border-blue-500 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                  Added to Queue
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* DETAILS SECTION */}
      <section className="content-container -mt-8 py-16 lg:mt-0">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md">
            <h3 className="section-title text-2xl font-bold">Cast &amp; Crew</h3>
            <p className="text-gray"><strong>Director:</strong> {film.director}</p>
            <p className="text-gray"><strong>Genre:</strong> {film.genre}</p>
            <p className="text-gray"><strong>Year:</strong> {film.year}</p>
          </div>

          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md">
            <h3 className="section-title text-2xl font-bold">Story & Themes</h3>
            <p className="text-gray leading-relaxed">
              {film.title} explores complex themes of reality, identity, and memory.
            </p>
          </div>

          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md">
            <h3 className="section-title text-2xl font-bold">Film Stats</h3>
            <p className="text-gray"><strong>Average Rating:</strong> 4.5/5</p>
            <p className="text-gray"><strong>Runtime:</strong> 2h 28m</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="bg-white-color rounded-2xl p-6 shadow-md lg:col-span-2">
            <h3 className="section-title text-2xl font-bold">Overview</h3>
            <p className="text-gray leading-relaxed">
              {film.title} remains a favorite among audiences and critics.
            </p>
          </div>

          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md">
            <h3 className="section-title text-2xl font-bold">Your Activity</h3>
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary w-full rounded-full px-4 py-3 text-center"
            >
              Log This Film
            </button>
          </div>
        </div>
      </section>

      <footer className="home-footer border-gray/30 border-t px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-gray text-center text-sm">
          &copy; 2025 filmApp. All rights reserved.
        </p>
      </footer>

      {showModal && (
        <LogFilmModal film={film} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
