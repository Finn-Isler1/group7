// Profile.tsx - enhanced Letterboxd-style profile with improved responsive layout
import { Link } from "react-router-dom";
import usersDB from "../data/users.json";

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

  return (
    <div className="profile-container">
      {/* Header Section */}
      <header className="profile-header">
        <div className="user-avatar-section">
          <img
            src="https://via.placeholder.com/150x150/6c5ce7/ffffff?text=CP"
            alt="Cameron Bentley Avatar"
            className="user-avatar"
            loading="lazy"
          />
          <div className="user-info">
            <h1 className="user-name">Terry Lewis</h1>
            <p className="user-bio">Cinephile, indie film enthusiast, and occasional director. "Films are my escape hatch from reality."</p>
            <div className="user-badges">
              <span className="badge pro">Pro Member</span>
              <span className="badge followers">1K Followers</span>
              <span className="badge following">Following 89</span>
            </div>
          </div>
        </div>
        <div className="profile-buttons">
          <button className="btn-primary" aria-label="Edit profile details">
            <span>Edit Profile</span>
          </button>
          <button className="btn-outline" aria-label="Follow this user">
            <span>Follow</span>
          </button>
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

      {/* Favorites Section */}
      <section className="favorites-section">
        <div className="section-header">
          <h2 className="section-title">Favorite Films</h2>
          <button className="btn-link" aria-label="View all favorites">See Full List</button>
        </div>
        <div className="movies-grid">
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/ffeaa7/000000?text=Pulp+Fiction" alt="Pulp Fiction (1994)" className="movie-poster" loading="lazy" />
            <div className="movie-content">
              <h3 className="movie-title">Pulp Fiction</h3>
              <span className="movie-badge">1994 • Crime</span>
              <div className="movie-rating">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <span className="rating-score">5/5</span>
              </div>
              <p className="review-snippet">Tarantino's nonlinear masterpiece—dialogue that lingers.</p>
              <button className="btn-like" aria-label="Like this film">❤️</button>
            </div>
          </article>
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/d63031/ffffff?text=Eternal+Sunshine" alt="Eternal Sunshine of the Spotless Mind (2004)" className="movie-poster" loading="lazy" />
            <div className="movie-content">
              <h3 className="movie-title">Eternal Sunshine of the Spotless Mind</h3>
              <span className="movie-badge">2004 • Sci-Fi</span>
              <div className="movie-rating">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <span className="rating-score">5/5</span>
              </div>
              <p className="review-snippet">Heartbreakingly inventive—love's messy persistence.</p>
              <button className="btn-like" aria-label="Like this film">❤️</button>
            </div>
          </article>
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/98d8c8/000000?text=No+Country" alt="No Country for Old Men (2007)" className="movie-poster" loading="lazy" />
            <div className="movie-content">
              <h3 className="movie-title">No Country for Old Men</h3>
              <span className="movie-badge">2007 • Thriller</span>
              <div className="movie-rating">
                <span className="stars" aria-label="4 out of 5 stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">Coens' tense philosophy—fate's coin flip.</p>
              <button className="btn-like" aria-label="Like this film">❤️</button>
            </div>
          </article>
          <article className="movie-card">
            <img src="https://via.placeholder.com/200x300/a8e6cf/000000?text=Parasite" alt="Parasite (2019)" className="movie-poster" loading="lazy" />
            <div className="movie-content">
              <h3 className="movie-title">Parasite</h3>
              <span className="movie-badge">2019 • Drama</span>
              <div className="movie-rating">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <span className="rating-score">5/5</span>
              </div>
              <p className="review-snippet">Bong's razor-sharp class satire—unforgettable twists.</p>
              <button className="btn-like" aria-label="Like this film">❤️</button>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="activity-section">
        <div className="section-header">
          <h2 className="section-title">Recent Activity</h2>
          <button className="btn-link" aria-label="View full activity feed">View All</button>
        </div>
        <div className="activity-feed">
          <article className="activity-item">
            <img src="https://via.placeholder.com/60x90/4ecdc4/ffffff?text=Dune" alt="Dune: Part Two thumbnail" className="activity-poster" loading="lazy" />
            <div className="activity-content">
              <p className="activity-action">
                Rated <strong>Dune: Part Two</strong> <span className="stars" aria-label="4 out of 5 stars">★★★★☆</span>
                <span className="activity-time">• 2 hours ago</span>
              </p>
              <p className="activity-desc">"Spice must flow—epic sequel delivers on every front."</p>
            </div>
          </article>
          <article className="activity-item">
            <img src="https://via.placeholder.com/60x90/ff6b6b/ffffff?text=Her" alt="Her thumbnail" className="activity-poster" loading="lazy" />
            <div className="activity-content">
              <p className="activity-action">
                Added <strong>Her</strong> to "AI Rom-Coms" list
                <span className="activity-time">• 1 day ago</span>
              </p>
              <p className="activity-desc">Spike Jonze's poignant take on future love—timeless.</p>
            </div>
          </article>
          <article className="activity-item">
            <img src="https://via.placeholder.com/60x90/5352ed/ffffff?text=The+Matrix" alt="The Matrix thumbnail" className="activity-poster" loading="lazy" />
            <div className="activity-content">
              <p className="activity-action">
                Reviewed <strong>The Matrix</strong>
                <span className="activity-time">• 3 days ago</span>
              </p>
              <p className="activity-desc">"Red pill reality—still revolutionary after all these years."</p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="profile-footer">
        <p>&copy; 2025 Letterboxd-Inspired App. Connect with fellow film lovers worldwide.</p>
      </footer>
    </div>
    <section className="p-4 space-y-6">
      <header className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gray-300" />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{currentUser.username}</h1>

          <div className="flex gap-6">
            <Link to="/friends?tab=followers">
              <p className="text-sm hover:underline cursor-pointer">
                Followers: {followersCount}
              </p>
            </Link>

            <Link to="/friends?tab=following">
              <p className="text-sm hover:underline cursor-pointer">
                Following: {followingCount}
              </p>
            </Link>
          </div>

          <div className="flex gap-6 text-sm">
            <p>Films Watched (All Time): {filmsAllTime}</p>
            <p>Films Watched (This Year): {filmsThisYear}</p>
          </div>

          <div className="flex gap-3 mt-2">
            <button className="px-3 py-1 bg-gray-200 rounded">Share Profile</button>

            <Link to="/settings">
              <button className="px-3 py-1 bg-gray-200 rounded">Settings</button>
            </Link>

            <Link to="/achievements">
              <button className="px-3 py-1 bg-gray-200 rounded">Achievements</button>
            </Link>
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          Your Friends ({friends.length})
        </h2>

        <ul className="space-y-3">
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <Link
                to={`/friends/${friend.id}`}
                className="hover:underline"
              >
                {friend.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}