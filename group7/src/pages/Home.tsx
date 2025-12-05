// Home.tsx
import React from "react";
import { Link } from "react-router-dom";

// ✅ Import your images correctly
import OppenheimerImg from "../assets/oppenheimer.jpg";
import BarbieImg from "../assets/barbie.jpg";
import Dune2Img from "../assets/dune2.jpg";
import PoorThingsImg from "../assets/poorthings.jpg";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="home-header">
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: "#000" }}>
            Welcome Back, Cinephile
          </h1>
          <p className="hero-subtitle">
            Discover, log, and share your film journey with friends
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Log a Film</button>
            <Link
              to="/films"
              className="btn-outline no-underline inline-block"
              aria-label="Explore trending films"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-title">Films Watched</h3>
            <div className="stat-value amber">127</div>
            <p className="stat-desc">This Year</p>
          </div>

          <div className="stat-card">
            <h3 className="stat-title">Average Rating</h3>
            <div className="stat-value green">3.8</div>
            <p className="stat-desc">Out of 5</p>
          </div>

          <div className="stat-card">
            <h3 className="stat-title">Friends Online</h3>
            <div className="stat-value blue">14</div>
            <p className="stat-desc">Active Now</p>
          </div>
        </div>
      </section>

      {/* Watchlist */}
      <section className="recent-section">
        <div className="section-header">
          <h2 className="section-title">Recent Watches</h2>
          <button className="btn-link">See All</button>
        </div>

        <div className="movies-grid">
          {/* Movie 1 */}
          <article className="movie-card">
            <img src={OppenheimerImg} alt="Oppenheimer" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Oppenheimer</h3>
              <span className="movie-badge">2023 • Drama</span>
              <div className="movie-rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">
                A mind-bending atomic epic that questions creation and destruction.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>

          {/* Movie 2 */}
          <article className="movie-card">
            <img src={BarbieImg} alt="Barbie" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Barbie</h3>
              <span className="movie-badge">2023 • Comedy</span>
              <div className="movie-rating">
                <span className="stars">★★★☆☆</span>
                <span className="rating-score">3/5</span>
              </div>
              <p className="review-snippet">
                Pink power with a punch—subverts expectations beautifully.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>

          {/* Movie 3 */}
          <article className="movie-card">
            <img src={Dune2Img} alt="Dune Part Two" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Dune: Part Two</h3>
              <span className="movie-badge">2024 • Sci-Fi</span>
              <div className="movie-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-score">5/5</span>
              </div>
              <p className="review-snippet">
                Epic sands and spice—Villeneuve elevates the saga.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>

          {/* Movie 4 */}
          <article className="movie-card">
            <img src={PoorThingsImg} alt="Poor Things" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Poor Things</h3>
              <span className="movie-badge">2023 • Fantasy</span>
              <div className="movie-rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">
                Mad science and whimsy—Emma Stone shines in Lanthimos'
                world.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2025 Letterboxd-Inspired App. Share your story.</p>
      </footer>
    </div>
  );
}
