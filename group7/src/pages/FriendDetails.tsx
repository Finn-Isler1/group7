import { useParams, Link } from "react-router-dom";
import usersDB from "../data/users.json";

export default function FriendDetails() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const user = usersDB.UsersDB.find((u: any) => u.id === numericId);

  if (!user) {
    return <p className="p-4">User not found</p>;
  }

  return (
    <section className="p-4 space-y-4">
      <Link to="/friends" className="text-blue-500 hover:underline">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold">{user.username}</h1>

      <p className="text-sm">Email: {user.email}</p>

      <p className="text-sm text-gray-700">
        This is the user detail page. More info can be wired up later.
      </p>
    </section>
  );
}
