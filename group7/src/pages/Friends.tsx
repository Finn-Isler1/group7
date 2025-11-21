import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar.tsx";
import { FriendList } from "../components/FriendList.tsx";
import usersDB from "../data/users.json";

type FriendsTab = "friends" | "requests" | "following";

interface FollowingUser {
  id: number;
  username: string;
  memberSince: string;
  followers: number;
  following: number;
}

export default function Friends() {
  const [searchParams] = useSearchParams();

  const tabFromUrl = searchParams.get("tab");
  const initialTab: FriendsTab =
    tabFromUrl === "friends" ||
    tabFromUrl === "requests" ||
    tabFromUrl === "following"
      ? tabFromUrl
      : "friends";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FriendsTab>(initialTab);

  const filteredUsers = usersDB.UsersDB.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFriendClick = (user: {
    id: number;
    username: string;
    email: string;
  }) => {
    console.log("Friend clicked:", user);
  };

  const followingUsers: FollowingUser[] = usersDB.UsersDB.map((user, index) => ({
    id: user.id,
    username: user.username,
    memberSince: index === 0 ? "2023-01-15" : "2024-03-22",
    followers: index === 0 ? 223 : 864,
    following: index === 0 ? 34 : 68,
  }));

  const filteredFollowingUsers = followingUsers.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1>Friends</h1>

      <SearchBar onSearch={setSearchQuery} placeholder="Search for People" />

      
      <div className="friends-tabs">
        <button
          type="button"
          className={activeTab === "friends" ? "tab tab-active" : "tab"}
          onClick={() => setActiveTab("friends")}
        >
          Friends
        </button>
        <button
          type="button"
          className={activeTab === "requests" ? "tab tab-active" : "tab"}
          onClick={() => setActiveTab("requests")}
        >
          Requests
        </button>
        <button
          type="button"
          className={activeTab === "following" ? "tab tab-active" : "tab"}
          onClick={() => setActiveTab("following")}
        >
          Following
        </button>
      </div>

    
      {activeTab === "friends" && (
        <FriendList users={filteredUsers} onFriendClick={handleFriendClick} />
      )}

      {activeTab === "requests" && <p>No friend requests right now.</p>}

      {activeTab === "following" && (
        <div className="following-list">
          {filteredFollowingUsers.map((user) => (
            <div key={user.id} className="following-item">
              <div className="following-main">
                <Link to={`/friends/${user.id}`}>
                  <div className="following-avatar" aria-hidden="true" />
                </Link>

                <div className="following-text">
                  <Link
                    to={`/friends/${user.id}`}
                    className="following-username"
                  >
                    @{user.username}
                  </Link>
                  <p className="following-member-since">
                    Member Since: {user.memberSince}
                  </p>
                </div>
              </div>

              <div className="following-stats">
                <div className="stat-box">
                  <p className="stat-label">Followers</p>
                  <p className="stat-value">{user.followers}</p>
                </div>
                <div className="stat-box">
                  <p className="stat-label">Following</p>
                  <p className="stat-value">{user.following}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
