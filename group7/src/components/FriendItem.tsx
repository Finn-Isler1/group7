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
      <Link
      to={`/friends/${user.id}`}
      className="flex gap-3 items-center p-2 hover:bg-gray-100 rounded"
    >
      <div className="w-10 h-10 rounded-full bg-gray-300" />
      <p>{user.username}</p>
    </Link>
    </>
  );
}
