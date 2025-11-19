import { Link } from "react-router-dom";

export interface User {
  id: number;
  username: string;
  email: string;
}

interface FriendItemProps {
  user: User;
  onFriendClick: (user: User) => void;
}

export default function FriendItem({ user }: FriendItemProps) {
  return (
    <>
      <Link to={`/friends/${user.id}`}>
        <img alt="***profile pic"></img>
        <p className="username">{user.username}</p>
      </Link>
    </>
  );
}
