// Home.tsx - Enhanced Letterboxd-style home with improved responsive layout
// Assumes shared CSS (updated below)

import React from "react";
import { Link } from "react-router-dom"; // Import for navigation

// Home.tsx - letterboxd-style home using vanilla css (add to src/index.css or inline)
export default function Home() {
  // letterboxd-style home: hero, stats, recent watches
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="home-header">
        <div className="hero-content">
          <h1 className="hero-title">Welcome Back, Cinephile</h1>
          <p className="hero-subtitle">Discover, log, and share your film journey with friends</p>
          <div className="hero-buttons">
            <button className="btn-primary" aria-label="Log a new film">
              <span>Log a Film</span>
            </button>
            <Link to="/films" className="btn-outline no-underline inline-block" style={{ textDecoration: 'none' }} aria-label="Explore trending films"> {/* Inline style to force no underline */}
              <span>Explore Now</span>
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-bg"></div>
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

      {/* Recent Watches Section */}
      <section className="recent-section">
        <div className="section-header">
          <h2 className="section-title">Recent Watches</h2>
          <button className="btn-link" aria-label="View all recent watches">See All</button>
        </div>
        <div className="movies-grid">
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/ff6b6b/ffffff?text=Oppenheimer" alt="Oppenheimer (2023)" className="movie-poster" loading="lazy" />
      <header className="home-header">
        <h1 className="hero-title">Welcome Back, Cinephile</h1>
        <p className="hero-subtitle">Discover, log, and share your film journey</p>
        <div className="hero-buttons">
          <button className="btn-primary">Log a Film</button>
          <button className="btn-outline">Explore Now</button>
        </div>
      </header>

      <section className="stats-section">
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
      </section>

      <section className="recent-section">
        <h2 className="section-title">Recent Watches</h2>
        <div className="movies-grid">
          <div className="movie-card">
            <img src="https://via.placeholder.com/200x300?text=Oppenheimer" alt="Oppenheimer" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Oppenheimer</h3>
              <span className="movie-badge">2023 • Drama</span>
              <div className="movie-rating">
                <span className="stars" aria-label="4 out of 5 stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">A mind-bending atomic epic that questions creation and destruction.</p>
              <button className="btn-like" aria-label="Like this review">❤️</button>
            </div>
          </article>
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/ff8e53/ffffff?text=Barbie" alt="Barbie (2023)" className="movie-poster" loading="lazy" />
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">A mind-bending atomic epic</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="https://via.placeholder.com/200x300?text=Barbie" alt="Barbie" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Barbie</h3>
              <span className="movie-badge">2023 • Comedy</span>
              <div className="movie-rating">
                <span className="stars" aria-label="3 out of 5 stars">★★★☆☆</span>
                <span className="rating-score">3/5</span>
              </div>
              <p className="review-snippet">Pink power with a punch—subverts expectations beautifully.</p>
              <button className="btn-like" aria-label="Like this review">❤️</button>
            </div>
          </article>
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/4ecdc4/ffffff?text=Dune+Part+Two" alt="Dune: Part Two (2024)" className="movie-poster" loading="lazy" />
                <span className="stars">★★★☆☆</span>
                <span className="rating-score">3/5</span>
              </div>
              <p className="review-snippet">Pink power with a punch</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="https://via.placeholder.com/200x300?text=Dune+Part+Two" alt="Dune Part Two" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Dune: Part Two</h3>
              <span className="movie-badge">2024 • Sci-Fi</span>
              <div className="movie-rating">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <span className="rating-score">5/5</span>
              </div>
              <p className="review-snippet">Epic sands and spice—Villeneuve elevates the saga.</p>
              <button className="btn-like" aria-label="Like this review">❤️</button>
            </div>
          </article>
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/45b7d1/ffffff?text=Poor+Things" alt="Poor Things (2023)" className="movie-poster" loading="lazy" />
                <span className="stars">★★★★★</span>
                <span className="rating-score">5/5</span>
              </div>
              <p className="review-snippet">Epic sands and spice</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="https://via.placeholder.com/200x300?text=Poor+Things" alt="Poor Things" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Poor Things</h3>
              <span className="movie-badge">2023 • Fantasy</span>
              <div className="movie-rating">
                <span className="stars" aria-label="4 out of 5 stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">Mad science and whimsy—Emma Stone shines in Lanthimos' world.</p>
              <button className="btn-like" aria-label="Like this review">❤️</button>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2025 Letterboxd-Inspired App. Share your story on the silver screen.</p>
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">Mad science and whimsy</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>Powered by Letterboxd • Share your story on the silver screen</p>
      </footer>
    </div>
  );
}