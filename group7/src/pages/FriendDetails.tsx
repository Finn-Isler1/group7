import usersDB from "../data/users.json";
import { useParams, Link } from "react-router-dom";

export default function FriendDetails() {
  const { id } = useParams<{ id: string }>();
  const user = usersDB.UsersDB.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="error-message">
        <p>Friend not found</p>
        <Link to="/friends">Back to Friends</Link>
      </div>
    );
  }

  return (
    <div className="friend-details">
      <h2>{user.username}</h2>
      <p>Email: {user.email}</p>
      <Link to="/friends">Back to Friends</Link>
    </div>
  );
}
