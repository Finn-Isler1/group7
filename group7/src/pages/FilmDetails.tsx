// src/pages/FilmDetails.tsx
import FilmsDB from "../data/films.json";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

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
    }
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white-color text-black-color min-h-screen">
      {/* Back Button - Sticky Top */}
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

      {/* Hero Section - Full Bleed with Container */}
      <header className="from-primary-color/10 to-white-color relative flex min-h-[70vh] items-center overflow-hidden bg-linear-to-br">
        <div className="absolute inset-0">
          <img
            src={getPosterUrl(film)}
            alt={`${film.title} background`}
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="content-container relative z-10 flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center">
          {/* Poster - Prominent */}
          <img
            src={getPosterUrl(film)}
            alt={film.title}
            className="film-poster border-gray/20 h-[500px] w-full max-w-sm shrink-0 rounded-2xl border object-cover shadow-2xl"
          />
          {/* Details - Clean & Spaced */}
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
                Directed by{" "}
                <span className="text-black-color">{film.director}</span>
              </p>
            </div>
            <p className="text-gray max-w-2xl text-xl leading-relaxed opacity-90">
              {film.title} is a groundbreaking {film.genre.toLowerCase()} film
              that redefined the genre. Directed by the visionary{" "}
              {film.director}, it features unforgettable storytelling and iconic
              performances that continue to influence cinema today.
            </p>
            <div className="hero-buttons flex flex-wrap gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="btn-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl"
              >
                Log This Film
              </button>
              <button className="btn-outline border-2 px-8 py-4 text-lg shadow-sm hover:shadow-md">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Details Section - Balanced Grid */}
      <section className="content-container -mt-8 py-16 lg:mt-0">
        {" "}
        {/* Negative margin to overlap hero slightly */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md">
            <h3 className="section-title text-2xl font-bold">Cast & Crew</h3>
            <p className="text-gray">
              <strong>Director:</strong>{" "}
              <span className="font-medium">{film.director}</span>
            </p>
            <p className="text-gray">
              <strong>Genre:</strong>{" "}
              <span className="font-medium">{film.genre}</span>
            </p>
            <p className="text-gray">
              <strong>Year:</strong>{" "}
              <span className="font-medium">{film.year}</span>
            </p>
          </div>
          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="section-title text-2xl font-bold">Overview</h3>
            <p className="text-gray leading-relaxed">
              {film.title} is a groundbreaking film that redefined{" "}
              {film.genre.toLowerCase()}. Directed by the visionary{" "}
              {film.director}, it features unforgettable storytelling and iconic
              performances.
            </p>
          </div>
          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md md:col-span-2 lg:col-span-3">
            <h3 className="section-title text-2xl font-bold">Why Watch?</h3>
            <ul className="text-gray list-inside list-disc space-y-2">
              <li>
                Revolutionary {film.genre.toLowerCase()} narrative structure
              </li>
              <li>Iconic direction by {film.director}</li>
              <li>Timeless themes that resonate today</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
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