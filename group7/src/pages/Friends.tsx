import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import usersDB from "../data/users.json";
import { SearchBar } from "../components/SearchBar.tsx";
import { FriendList } from "../components/FriendList.tsx";

export default function Friends() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") ?? "friends";

  const [tab, setTab] = useState(defaultTab);
    
  const [searchQuery, setSearchQuery] = useState("");

  const user = usersDB.UsersDB[0];

  const friends = user.friends ?? [];
  const followers = user.followers ?? [];
  const following = user.following ?? [];

  const getList = () => {
    if (tab === "followers") return followers;
    if (tab === "following") return following;
    return friends;
  };

  const list = getList();

  return (
    <section className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Connections</h1>

      {/* Tabs */}
      <div className="flex gap-4 text-sm">
        <button
          className={tab === "friends" ? "underline font-semibold" : ""}
          onClick={() => setTab("friends")}
        >
          Friends
        </button>

        <button
          className={tab === "followers" ? "underline font-semibold" : ""}
          onClick={() => setTab("followers")}
        >
          Followers
        </button>

        <button
          className={tab === "following" ? "underline font-semibold" : ""}
          onClick={() => setTab("following")}
        >
          Following
        </button>
      </div>
      
      <SearchBar
        onSearch={setSearchQuery}
        placeholder="Search for a friend..."
      />
      
      {/* List */}
      <ul className="space-y-3">
        {list.map((person: any) => (
          <li key={person.id} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />

            <Link to={`/friends/${person.id}`} className="hover:underline">
              {person.username}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
