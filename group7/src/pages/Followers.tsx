import { Link } from "react-router-dom";
import { useState } from "react";
import usersDB from "../data/users.json";
import { SearchBar } from "../components/SearchBar.tsx";

export default function Followers() {
  const user = usersDB.UsersDB[0];

  // Make followers ALWAYS an array
  const rawFollowers = user.followers;
  const followers = Array.isArray(rawFollowers)
    ? rawFollowers
    : rawFollowers
    ? [rawFollowers]
    : [];

  // Safe lookup
  const lookupUser = (entry: any) => {
    if (!entry) return null;

    if (typeof entry === "number") {
      return usersDB.UsersDB.find((u) => u.id === entry) ?? null;
    }

    if (typeof entry === "object" && "id" in entry) return entry;

    return null;
  };

  let list = followers.map(lookupUser).filter(Boolean);

  // Search
  const [searchQuery, setSearchQuery] = useState("");

  if (searchQuery.trim().length > 0) {
    list = list.filter((person: any) => {
      const displayName = person.name ?? person.username ?? "";
      return displayName.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  return (
    <section className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Followers</h1>

      {/* Navigation */}
      <div className="flex gap-4 text-sm">
        <Link to="/friends" className="hover:underline">Friends</Link>
        <Link to="/followers" className="underline font-semibold">Followers</Link>
        <Link to="/following" className="hover:underline">Following</Link>
      </div>

      <SearchBar
        onSearch={setSearchQuery}
        placeholder="Search followers..."
      />

      <ul className="space-y-3">
        {list.length === 0 && <p>No followers found.</p>}

        {list.map((person: any) => (
          <li key={person.id} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <Link to={`/friends/${person.id}`} className="hover:underline">
              {person.name ?? person.username ?? "Unknown User"}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
