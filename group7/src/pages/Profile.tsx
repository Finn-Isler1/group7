// Profile.tsx - enhanced Letterboxd-style profile with improved responsive layout
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import usersDB from "../data/users.json";
import filmsDB from "../data/films.json";
import FilmLogs from "@/components/FilmLogs";

interface Film {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  language: string;
  rating: number;
  poster?: string;
}

const FAVORITES_STORAGE_KEY = "profileFavorites";

export default function Profile() {
  // gets favorites from localStorage w/ favorites_storage_key
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // awaits storage changes to update favorites across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const currentUser = usersDB.UsersDB[0];

  const followersCount = currentUser.followers?.length ?? 237;
  const followingCount = currentUser.following?.length ?? 35;
  const filmsAllTime = currentUser.filmsAllTime ?? 31;
  const filmsThisYear = currentUser.filmsThisYear ?? 9;

  const friends = currentUser.friends ?? [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Emma Jones" },
    { id: 3, name: "Jake" },
    { id: 4, name: "Tina" },
    { id: 5, name: "Ricky" },
  ];

  // Avatar
  const profilePicUrl =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80";

  // getting favorite films from films.json
  const favoriteFilms = filmsDB.FilmsDB.filter((film) =>
    favorites.includes(film.id),
  );

  const toggleFavorite = (filmId: number) => {
    setFavorites((prev) => {
      const updated = prev.includes(filmId)
        ? prev.filter((id) => id !== filmId)
        : [...prev, filmId];
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  // get star rating dsplay
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
  };

  // get img, if not found uses placeholder
  const getImageUrl = (filename: string | undefined) => {
    try {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    } catch {
      return "https://via.placeholder.com/300x450.png?text=No+Image";
    }
  };

  return (
    <>
      <div className="profile-container">
        {/* Header Section */}
        <header className="profile-header">
          <div className="user-avatar-section">
            <img
              src={profilePicUrl}
              alt="Cameron Bentley Avatar"
              className="user-avatar"
              loading="lazy"
            />
            <div className="user-info">
              <h1 className="hero-title" style={{ color: "#000" }}>
                Terry Lewis
              </h1>
              <p className="user-bio">
                Cinephile, indie film enthusiast, and occasional director.
                "Films are my escape hatch from reality."
              </p>
              <div className="user-badges">
                <Link to="/" className="badge following">
                  Pro Member
                </Link>
                <Link to="/friends" className="badge following">
                  1K Followers
                </Link>
                <Link to="/friends" className="badge following">
                  Following 89
                </Link>
              </div>
            </div>
          </div>

          {/* BUTTONS — Updated with Achievements */}
          <div className="profile-buttons">
            <button className="btn-primary">
              <span>Edit Profile</span>
            </button>

            <button
              className="btn-outline"
              onClick={() => {
                window.location.href = "/settings";
              }}
            >
              <span>Settings</span>
            </button>

            {/* NEW ACHIEVEMENTS BUTTON */}
            <Link to="/achievements">
              <button className="btn-outline">
                <span>Achievements</span>
              </button>
            </Link>
          </div>
        </header>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-title">Films Logged</h3>
              <div className="stat-value amber">1,247</div>
              <p className="stat-desc">Lifetime</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-title">Lists Created</h3>
              <div className="stat-value green">23</div>
              <p className="stat-desc">Public Lists</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-title">Avg Rating</h3>
              <div className="stat-value purple">4.2</div>
              <p className="stat-desc">Out of 5</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-title">Followers</h3>
              <div className="stat-value blue">156</div>
              <p className="stat-desc">Active Community</p>
            </div>
          </div>
        </section>

        {/* Favorite Films */}
        <section className="favorites-section">
          <div className="section-header">
            <h2 className="section-title">Favorite Films</h2>
            {favoriteFilms.length > 0 && (
              <button className="btn-link">See Full List</button>
            )}
          </div>

          {favoriteFilms.length === 0 ? (
            <div
              style={{ padding: "2rem", textAlign: "center", color: "#666" }}
            >
              <p>
                No favorite films yet. Visit the Films page to heart your
                favorites!
              </p>

              <Link to="/films" className="blue mt-4">
                Browse Films
              </Link>
            </div>
          ) : (
            <div className="movies-grid">
              {favoriteFilms.map((film) => (
                <Link key={film.id} to={`/films/${film.id}`} className="block">
                  <article className="movie-card">
                    <img
                      src={getImageUrl(film.poster)}
                      alt={film.title}
                      className="movie-poster"
                    />
                    <div className="movie-content">
                      <h3 className="movie-title">{film.title}</h3>
                      <span className="movie-badge">
                        {film.year} • {film.genre}
                      </span>
                      <div className="movie-rating">
                        <span className="stars">
                          {renderStars(film.rating)}
                        </span>
                        <span className="rating-score">{film.rating}/5</span>
                      </div>
                      <p className="review-snippet">
                        Directed by <strong>{film.director}</strong>.
                      </p>
                      <button
                        className="btn-like"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFavorite(film.id);
                        }}
                        title="Remove from favorites"
                      >
                        ❤️
                      </button>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Activity Section */}
        <section className="activity-section">
          <div className="section-header">
            <h2 className="section-title">Recent Activity</h2>
            <button className="btn-link">View All</button>
          </div>

          <div className="w-full overflow-x-auto">
            <FilmLogs />
          </div>
        </section>
      </div>

      {/* Secondary layout (left as-is, commented out) */}
      <section className="space-y-6 p-4"></section>
    </>
  );
}
