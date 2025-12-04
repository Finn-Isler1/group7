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
  Inception: inceptionPoster,
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
    setLikedFilms((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
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

      {/* MOVIE GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {filteredFilms.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-3xl font-medium text-gray-700">
              No films found for "{searchQuery}"
            </p>
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
                      <span className="movie-badge">
                        {film.year} • {film.genre}
                      </span>

                      <div className="movie-rating">
                        <span className="stars">4.5 stars</span>
                        <span className="rating-score">4.5/5</span>
                      </div>

                      <p className="review-snippet">
                        Directed by <strong>{film.director}</strong>.
                      </p>

                      <button
                        onClick={(e) => toggleLike(film.id, e)}
                        className={`btn-like ${isLiked ? "liked" : ""}`}
                        aria-label={isLiked ? "Unlike" : "Like"}
                      >
                        {isLiked ? "Red Heart" : "Empty Heart"}
                      </button>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}