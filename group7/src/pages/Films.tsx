// src/pages/Films.tsx — REAL HEARTS & STARS (NO MORE TEXT!)
import { useState } from "react";
import { Link } from "react-router-dom";
import filmsDB from "../data/films.json";

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
  poster?: string;
}

// loading the films from the filmDB
const getImageUrl = (filename: string | undefined) => {
  if (!filename) {
    return "https://via.placeholder.com/300x450.png?text=No+Image";
  }
  try {
    return new URL(`../assets/${filename}`, import.meta.url).href;
  } catch {
    return "https://via.placeholder.com/300x450.png?text=No+Image";
  }
};

export default function Films() {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedFilms, setLikedFilms] = useState<number[]>([]);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedFilms((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const filteredFilms = filmsDB.FilmsDB.filter(
    (film: Film) =>
      film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.genre.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-28">
      {/* HERO */}
      <header className="flex flex-col items-center justify-center px-6 pt-32 pb-48 text-center">
        <h1 className="mb-6 text-6xl font-black tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
          Discover Films
        </h1>
        <p className="mb-16 max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
          Explore thousands of films, from timeless classics to hidden gems.
        </p>
        <div className="mt-20 w-full max-w-3xl">
          <input
            type="text"
            placeholder="Search by title, director, or genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white/95 px-12 py-7 text-lg placeholder-gray-500 shadow-2xl backdrop-blur-md transition-all focus:ring-4 focus:ring-blue-400/30 focus:outline-none"
          />
        </div>
      </header>

      <div className="h-12 md:h-16" />

      {/* MOVIE GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        {filteredFilms.length === 0 ? (
          <div className="py-32 text-center">
            <p className="text-3xl font-medium text-gray-700">
              No films found for "{searchQuery}"
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Try searching something else!
            </p>
          </div>
        ) : (
          <div className="movies-grid">
            {filteredFilms.map((film) => {
              const isLiked = likedFilms.includes(film.id);

              return (
                <Link key={film.id} to={`/films/${film.id}`} className="block">
                  <article className="movie-card group">
                    <img
                      src={getImageUrl(film.poster)}
                      alt={film.title}
                      className="movie-poster"
                      loading="lazy"
                    />

                    <div className="movie-content">
                      <h3 className="movie-title">{film.title}</h3>
                      <span className="movie-badge">
                        {film.year} • {film.genre}
                      </span>

                      {/* REAL STARS */}
                      <div className="movie-rating">
                        <span className="stars">★★★★★</span>
                        <span className="rating-score">4.5/5</span>
                      </div>

                      <p className="review-snippet">
                        Directed by <strong>{film.director}</strong>.
                      </p>

                      {/* REAL HEART ICONS */}
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
