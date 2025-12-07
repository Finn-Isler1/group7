// src/pages/Films.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import filmsDB from "../data/films.json";

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
  language: string;
  rating?: number;
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

// get stars from filmdb
const renderStars = (rating: number | undefined) => {
  if (!rating) return "☆☆☆☆☆";
  const fullStars = Math.floor(rating);
  return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
};

export default function Films() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const FAVORITES_STORAGE_KEY = "profileFavorites";

  const [likedFilms, setLikedFilms] = useState<number[]>(() => {
    const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [filteredFilms, setFilteredFilms] = useState<Film[]>(filmsDB.FilmsDB);

  // saves favories to local storage
  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(likedFilms));
  }, [likedFilms]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const genreFilter = params.get("genres"); // comma-separated, lowercase
    const decadeFilter = params.get("decade");
    const languageFilter = params.get("lang");
    const sortFilter = params.get("sort");

    let films = filmsDB.FilmsDB;

    // Filter by genres
    if (genreFilter) {
      const genresArray = genreFilter.split(",").map((g) => g.toLowerCase());
      films = films.filter((film) =>
        genresArray.includes(film.genre.toLowerCase()),
      );
    }

    // Filter by language
    if (languageFilter) {
      films = films.filter(
        (film) => film.language.toLowerCase() === languageFilter.toLowerCase(),
      );
    }

    // Filter by decade (optional)
    if (decadeFilter) {
      const decadeNum = parseInt(decadeFilter);
      films = films.filter(
        (film) => Math.floor(film.year / 10) * 10 === decadeNum,
      );
    }

    // Sort
    if (sortFilter) {
      switch (sortFilter) {
        case "title a-z":
          films = films.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title z-a":
          films = films.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "newest":
          films = films.sort((a, b) => b.year - a.year);
          break;
        case "oldest":
          films = films.sort((a, b) => a.year - b.year);
          break;
        // Add more sort logic if you have rating/popularity
      }
    }

    // Apply search bar filtering (case-insensitive)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      films = films.filter(
        (film) =>
          film.title.toLowerCase().includes(query) ||
          film.director.toLowerCase().includes(query) ||
          film.genre.toLowerCase().includes(query),
      );
    }

    setFilteredFilms(films);
  }, [location.search, searchQuery]);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedFilms((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      return updated;
    });
  };

  return (
    <div className="min-h-screen pt-28">
      {/* HERO */}
      <header className="flex flex-col items-center justify-center px-6 pt-32 pb-48 text-center">
        <h1 className="mb-6 text-6xl font-black tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
          Discover Films
        </h1>
        <p className="mb-8 max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
          Explore thousands of films, from timeless classics to hidden gems.
        </p>

        <div className="mt-6 flex w-full max-w-3xl items-center gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by title, director, or genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 rounded-full border border-gray-200 bg-white/95 px-12 py-7 text-lg placeholder-gray-500 shadow-2xl backdrop-blur-md transition-all focus:ring-4 focus:ring-blue-400/30 focus:outline-none"
          />

          {/* Advanced Filters Button */}
          <Link
            to="/filters"
            className="btn-outline border-2 px-8 py-7 text-lg shadow-sm hover:shadow-md"
            style={{ height: "32px", minHeight: "0" }}
          >
            Advanced
          </Link>
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

                      {/* STARS */}
                      <div className="movie-rating">
                        <span className="stars">
                          {renderStars(film.rating)}
                        </span>
                        <span className="rating-score">
                          {film.rating ?? "N/A"}/5
                        </span>
                      </div>

                      <p className="review-snippet">
                        Directed by <strong>{film.director}</strong>. A
                        masterpiece in {film.genre.toLowerCase()}.
                      </p>

                      {/* HEART ICONS */}
                      <button
                        onClick={(e) => toggleLike(film.id, e)}
                        className={`btn-like ${isLiked ? "liked" : ""}`}
                        aria-label={isLiked ? "Unlike" : "Like"}
                      >
                        <span aria-hidden="true">{isLiked ? "❤️" : "🤍"}</span>
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
