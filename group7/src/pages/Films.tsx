// src/pages/Films.tsx — NOW MATCHES HOME PAGE STYLE PERFECTLY
// src/pages/Films.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import filmsDB from "../data/films.json";

import inceptionPoster from "../assets/MOVEB46211__19379.jpg";
import eternalPoster   from "../assets/s-l1200.jpg";
import godfatherPoster from "../assets/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg";
import pulpPoster      from "../assets/71iQzfnYGeL.jpg";

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
}

const POSTERS: Record<string, string> = {
  "Inception": inceptionPoster,
  "The Godfather": godfatherPoster,
  "Pulp Fiction": pulpPoster,
  "Eternal Sunshine of the Spotless Mind": eternalPoster,
};

export default function Films() {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedFilms, setLikedFilms] = useState<number[]>([]);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedFilms(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const filteredFilms = filmsDB.FilmsDB.filter((film: Film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28">
      {/* HERO */}
      <header className="flex flex-col items-center justify-center px-6 pt-32 pb-48 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 tracking-tight">
          Discover Films
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl leading-relaxed mb-16">
          Explore thousands of films, from timeless classics to hidden gems.
        </p>
        <div className="w-full max-w-3xl mt-20">
          <input
            type="text"
            placeholder="Search by title, director, or genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-12 py-7 bg-white/95 backdrop-blur-md rounded-full text-lg shadow-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all placeholder-gray-500"
          />
        </div>
      </header>

      <div className="h-12 md:h-16" />

      {/* MOVIE GRID — EXACT SAME STYLE AS HOME PAG */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {filteredFilms.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-3xl font-medium text-gray-700">No films found for "{searchQuery}"</p>
            <p className="mt-4 text-lg text-gray-500">Try searching something else!</p>
          </div>
        ) : (
          <div className="movies-grid">
            {filteredFilms.map((film) => {
              const isLiked = likedFilms.includes(film.id);

              return (
                <Link key={film.id} to={`/films/${film.id}`} className="block">
                  <article className="movie-card group">
                    <img
                      src={POSTERS[film.title] || "https://via.placeholder.com/300x450.png?text=No+Image"}
                      alt={film.title}
                      className="movie-poster"
                      loading="lazy"
                    />

                    <div className="movie-content">
                      <h3 className="movie-title">{film.title}</h3>
                      <span className="movie-badge">{film.year} • {film.genre}</span>

                      <div className="movie-rating">
                        <span className="stars">★★★★½</span>
                        <span className="rating-score">4.5/5</span>
                      </div>

                      <p className="review-snippet">
                        Directed by <strong>{film.director}</strong>. A masterpiece in {film.genre.toLowerCase()}.
                      </p>

                      <button
                        onClick={(e) => toggleLike(film.id, e)}
                        className={`btn-like ${isLiked ? "liked" : ""}`}
                        aria-label={isLiked ? "Unlike" : "Like"}
                      >
                        {isLiked ? "❤️" : "♡"}
                      </button>
                    </div>
                  </article>
                </Link>
              );
            })}
    <div className="min-h-screen bg-white-color text-black-color pt-20"> {/* pt-20 for fixed nav */}
      {/* Hero Header */}
      <header className="home-header relative overflow-hidden bg-gradient-to-b from-primary-color/5 via-white-color to-white-color border-b border-gray/30">
        <div className="content-container text-center py-16">
          <h1 className="hero-title">Discover Films</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            Explore thousands of films, from timeless classics to the latest releases.
          </p>

          {/* Integrated Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray">🔍</span>
              <input
                type="text"
                placeholder="Search by title, director, or genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white-color border border-gray rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent transition-all"
              />
            </div>
            {searchQuery && (
              <p className="mt-4 text-sm text-gray">
                {filteredFilms.length} film{filteredFilms.length !== 1 ? "s" : ""} found
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Films Grid */}
      <section className="content-container mt-12">
        {filteredFilms.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray">No films found matching "{searchQuery}"</p>
            <p className="mt-4 text-gray">Try searching for something else!</p>
          </div>
        ) : (
          <div className="movies-grid">
            {filteredFilms.map((film: Film) => (
              <Link
                key={film.id}
                to={`/films/${film.id}`}
                className="movie-card group block" // Link for navigation on click
              >
                <div className="relative">
                  {/* Placeholder for poster - styled as card background */}
                  <div className="movie-poster w-full h-80 bg-gray-200 flex items-center justify-center text-gray text-4xl font-bold rounded-t-2xl">
                    {film.title.substring(0, 1).toUpperCase()}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="movie-title font-bold text-lg mb-1">{film.title}</h3>
                    <p className="movie-badge text-sm opacity-90 mb-2">{film.year} • {film.genre}</p>
                    <p className="text-sm opacity-90">Directed by {film.director}</p>
                  </div>
                  <button className="btn-like absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    ❤️
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}