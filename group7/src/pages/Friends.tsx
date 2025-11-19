import { useState } from "react";
import { SearchBar } from "../components/SearchBar.tsx";
import { FriendList } from "../components/FriendList.tsx";
import usersDB from "../data/users.json";

export default function Friends() {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <>
      <h1>Friends Page</h1>
      <SearchBar
        onSearch={setSearchQuery}
        placeholder="Search for a friend..."
      />
      <FriendList users={filteredUsers} onFriendClick={handleFriendClick} />
    </>
  );
}
