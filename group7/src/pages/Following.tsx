import { Link } from "react-router-dom";
import usersDB from "../data/users.json";

export default function Following() {
  const currentUser = usersDB.UsersDB[0];

  const followingList = usersDB.UsersDB.filter(
    (user) => user.id !== currentUser.id
  );

  return (
    <section>
      <h1>Following</h1>

      <ul>
        {followingList.map((user) => (
          <li key={user.id}>
            <Link to={`/friends/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>

      <Link to="/profile">Back to Profile</Link>
    </section>
  );
}
