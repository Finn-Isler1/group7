// Profile.tsx - enhanced Letterboxd-style profile with improved responsive layout
import { Link } from "react-router-dom";
import usersDB from "../data/users.json";
import FilmLogs from "@/components/FilmLogs";

// Import images
import PulpFictionImg from "../assets/71iQzfnYGeL.jpg";
import EternalSunshineImg from "../assets/s-l1200.jpg";
import NoCountryImg from "../assets/ncfom.jpg";
import ParasiteImg from "../assets/parasite.jpg";

export default function Profile() {
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
                <span className="badge pro">Pro Member</span>
                <span className="badge followers">1K Followers</span>
                <span className="badge following">Following 89</span>
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
            <button className="btn-link">See Full List</button>
          </div>

          <div className="movies-grid">
            {/* --- Pulp Fiction --- */}
            <article className="movie-card">
              <img
                src={PulpFictionImg}
                alt="Pulp Fiction"
                className="movie-poster"
              />
              <div className="movie-content">
                <h3 className="movie-title">Pulp Fiction</h3>
                <span className="movie-badge">1994 • Crime</span>
                <div className="movie-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-score">5/5</span>
                </div>
                <p className="review-snippet">
                  Tarantino's nonlinear masterpiece—dialogue that lingers.
                </p>
                <button className="btn-like">❤️</button>
              </div>
            </article>

            {/* --- Eternal Sunshine --- */}
            <article className="movie-card">
              <img
                src={EternalSunshineImg}
                alt="Eternal Sunshine of the Spotless Mind"
                className="movie-poster"
              />
              <div className="movie-content">
                <h3 className="movie-title">
                  Eternal Sunshine of the Spotless Mind
                </h3>
                <span className="movie-badge">2004 • Sci-Fi</span>
                <div className="movie-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-score">5/5</span>
                </div>
                <p className="review-snippet">
                  Heartbreakingly inventive—love's messy persistence.
                </p>
                <button className="btn-like">❤️</button>
              </div>
            </article>

            {/* --- No Country for Old Men --- */}
            <article className="movie-card">
              <img
                src={NoCountryImg}
                alt="No Country for Old Men"
                className="movie-poster"
              />
              <div className="movie-content">
                <h3 className="movie-title">No Country for Old Men</h3>
                <span className="movie-badge">2007 • Thriller</span>
                <div className="movie-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating-score">4/5</span>
                </div>
                <p className="review-snippet">
                  Coens' tense philosophy—fate's coin flip.
                </p>
                <button className="btn-like">❤️</button>
              </div>
            </article>

            {/* --- Parasite --- */}
            <article className="movie-card">
              <img src={ParasiteImg} alt="Parasite" className="movie-poster" />
              <div className="movie-content">
                <h3 className="movie-title">Parasite</h3>
                <span className="movie-badge">2019 • Drama</span>
                <div className="movie-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-score">5/5</span>
                </div>
                <p className="review-snippet">
                  Bong's razor-sharp class satire—unforgettable twists.
                </p>
                <button className="btn-like">❤️</button>
              </div>
            </article>
          </div>
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
