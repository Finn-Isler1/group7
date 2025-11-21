// Home.tsx - letterboxd-style home using vanilla css (add to src/index.css or inline)
export default function Home() {
  // letterboxd-style home: hero, stats, recent watches
  return (
    <div className="home-container">
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
