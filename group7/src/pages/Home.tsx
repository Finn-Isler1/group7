// Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import images
import OppenheimerImg from "../assets/oppenheimer.jpg";
import BarbieImg from "../assets/barbie.jpg";
import Dune2Img from "../assets/dune2.jpg";
import PoorThingsImg from "../assets/poorthings.jpg";
import DriveImg from "../assets/drive.png";

export default function Home() {

  const navigate = useNavigate();
  
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
          
            <button
              className="btn-primary"
              onClick={() => navigate("/films")}
            >
              Log a Film
            </button>

            <Link
              to="/films"
              className="btn-outline inline-block no-underline"
              aria-label="Explore trending films"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Film Section */}
      <section className="mx-auto mt-10 mb-16 max-w-6xl px-4">
        <h2 className="mb-4 text-2xl font-bold">Featured Film</h2>

        <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-white p-4 shadow-md md:grid-cols-3">
          <img
            src={DriveImg}
            alt="Featured Film"
            className="h-full w-full rounded-xl object-cover"
          />

          <div className="flex flex-col justify-center gap-4 md:col-span-2">
            <h3 className="text-center text-xl font-semibold md:text-left">
              Drive
            </h3>
            <p className="max-h-[32rem] overflow-hidden text-center text-gray-600 md:text-left">
              Driver is a skilled Hollywood stuntman who moonlights as a getaway
              driver for criminals. Though he projects an icy exterior, lately
              he’s been warming up to a pretty neighbor named Irene and her
              young son, Benicio. When Irene’s husband gets out of jail, he
              enlists Driver’s help in a million-dollar heist. The job goes
              horribly wrong, and Driver must risk his life to protect Irene and
              Benicio from the vengeful masterminds behind the robbery.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link to="/films/23" className="btn-primary w-fit">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

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
          <h2 className="section-title">Watchlist</h2>
          <Link to="/watchlist" className="btn-link no-underline">
            See All
          </Link>
        </div>

        <div className="movies-grid">
          {/* Movie 1 */}
          <article className="movie-card">
            <img
              src={OppenheimerImg}
              alt="Oppenheimer"
              className="movie-poster"
            />
            <div className="movie-content">
              <h3 className="movie-title">Oppenheimer</h3>
              <span className="movie-badge">2023 • Drama</span>
              <div className="movie-rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">
                A mind-bending atomic epic that questions creation and
                destruction.
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
            <img
              src={PoorThingsImg}
              alt="Poor Things"
              className="movie-poster"
            />
            <div className="movie-content">
              <h3 className="movie-title">Poor Things</h3>
              <span className="movie-badge">2023 • Fantasy</span>
              <div className="movie-rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">
                Mad science and whimsy—Emma Stone shines in Lanthimos' world.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>
        </div>
      </section>
    </div>



  );
}
