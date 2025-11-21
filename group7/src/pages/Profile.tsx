import { Link } from "react-router-dom";
import usersDB from "../data/users.json";

interface Friend {
  id: number;
  name: string;
}

export default function Profile() {
  const currentUser = usersDB.UsersDB[2];

 
  const followersCount = 237;
  const followingCount = 35;
  const filmsAllTime = 31;
  const filmsThisYear = 9;


  const friends: Friend[] = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Emma Jones" },
    { id: 3, name: "Jake" },
    { id: 4, name: "Tina" },
    { id: 5, name: "Ricky" },
  ];

  return (
    <section className="profile-page">
      <header className="profile-header">
        <div className="profile-avatar" aria-hidden="true" />

        <div className="profile-main">
          <h1 className="profile-username">
            {currentUser?.username ?? "newaccount123"}
          </h1>

          <div className="profile-stats">
            <div className="profile-stats-column">
              <p>
                Followers: <span>{followersCount}</span>
              </p>
              <p>
                Following:{" "}
                <Link to="/friends?tab=following">
                  <span>{followingCount}</span>
                </Link>
            </p>

            </div>
            <div className="profile-stats-column">
              <p>
                Films Watched (All Time): <span>{filmsAllTime}</span>
              </p>
              <p>
                Films Watched (This Year): <span>{filmsThisYear}</span>
              </p>
            </div>
          </div>

          <div className="profile-actions">
            <button type="button">Share Profile</button>

            <Link to="/settings">
              <button type="button">Settings</button>
            </Link>

            <Link to="/achievements">
              <button type="button">Achievements</button>
            </Link>
          </div>
        </div>
      </header>

      <section className="profile-friends">
  <h2>Your Friends ({friends.length})</h2>

  <ul className="profile-friends-list">
    {friends.map((friend) => (
      <li key={friend.id} className="profile-friend">
        <Link to={`/friends/${friend.id}`} className="profile-friend-link">
          <div className="profile-friend-avatar" aria-hidden="true" />
          <p>{friend.name}</p>
        </Link>
      </li>
    ))}
  </ul>
</section>
    </section>
  );
}
