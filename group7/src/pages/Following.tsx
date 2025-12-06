import usersDB from "../data/users.json";
import { Link } from "react-router-dom";

export default function Following() {
  const user = usersDB.UsersDB[0];
  const following = user.following ?? [];

  return (
    <section className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Following</h1>

      <ul className="space-y-3">
        {following.map((person: any) => (
          <li key={person.id} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <Link to={`/friends/${person.id}`} className="hover:underline">
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
