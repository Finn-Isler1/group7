import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import usersDB from "../data/users.json";

import TerryPic from "../assets/users/terry_lewis.png";
import JohnPic from "../assets/users/john_smith.png";
import EmmaPic from "../assets/users/emma_jones.png";
import JoePic from "../assets/users/joe_johnson.png";
import AvaPic from "../assets/users/ava_martinez.png";
import LucasPic from "../assets/users/lucas_brown.png";
import SophiaPic from "../assets/users/sophia_clark.png";
import MichaelPic from "../assets/users/michael_green.png";
import DavidPic from "../assets/users/david_kim.png";
import SarahPic from "../assets/users/sarah_lee.png";

export default function Friends() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") ?? "friends";
  const [tab, setTab] = useState(defaultTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [sentRequests, setSentRequests] = useState<number[]>([]);

  const pictures: Record<number, string> = {
    1: TerryPic,
    2: JohnPic,
    3: EmmaPic,
    4: JoePic,
    5: AvaPic,
    6: LucasPic,
    7: SophiaPic,
    8: MichaelPic,
    9: DavidPic,
    10: SarahPic,
  };

  const user = usersDB.UsersDB[0]; // Logged-in user

  const friends = user.friends ?? [];
  const followers = user.followers ?? [];
  const following = user.following ?? [];

  // Users you can send requests to (not yourself and not already friends)
  const requests = usersDB.UsersDB.filter(
    (u) => u.id !== user.id && !friends.some((f) => f.id === u.id),
  );

  const getUserById = (id: number) => usersDB.UsersDB.find((u) => u.id === id);

  const getList = () => {
    if (tab === "followers") return followers;
    if (tab === "following") return following;
    if (tab === "requests") return requests;
    return friends;
  };

  const filteredList = getList().filter((p) => {
    const full = getUserById(p.id);
    if (!full) return false;
    const fullName = `${full.first_name} ${full.last_name}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleAddRequest = (id: number) => {
    if (!sentRequests.includes(id)) setSentRequests([...sentRequests, id]);
  };

  return (
    <div className="pb-20">
      {/* HERO */}
      <header className="flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <h1 className="mb-6 text-5xl font-black tracking-tight">Connections</h1>
        <input
          type="text"
          placeholder="Search for People..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-4 w-full max-w-xl rounded-full border border-gray-200 bg-white px-8 py-4 text-lg placeholder-gray-500 shadow-lg focus:ring-4 focus:ring-blue-400/30 focus:outline-none"
        />
      </header>

      {/* TABS */}
      <div className="mb-10 flex justify-center gap-6 text-lg font-medium">
        {["friends", "requests", "followers", "following"].map((t) => (
          <button
            key={t}
            className={tab === t ? "font-bold underline" : ""}
            onClick={() => setTab(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* LIST */}
      <section className="flex justify-center">
        <ul className="w-full max-w-3xl space-y-6">
          {filteredList.map((person) => {
            const full = getUserById(person.id);
            if (!full) return null;

            const isRequested = sentRequests.includes(full.id);

            return (
              <li
                key={full.id}
                className="flex w-full flex-col gap-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                {/* REQUEST ICON */}
                {tab === "requests" && (
                  <button
                    onClick={() => handleAddRequest(full.id)}
                    className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full border text-xl font-bold ${
                      isRequested
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-gray-300 bg-white text-blue-500 hover:bg-blue-50"
                    } sm:mr-0`}
                  >
                    {isRequested ? "✔" : "+"}
                  </button>
                )}

                {/* PIC */}
                <div className="flex items-center justify-center sm:justify-start">
                  <img
                    src={pictures[full.id]}
                    alt={full.username}
                    className="h-20 w-20 rounded-full border object-cover"
                  />
                </div>

                {/* USERNAME + MEMBER */}
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <Link
                    to={`/friends/${full.id}`}
                    className="text-xl font-semibold hover:underline"
                  >
                    @{full.username}
                  </Link>
                  <p className="text-sm text-gray-500">
                    Member since {full.member_since}
                  </p>
                </div>

                {/* FOLLOWERS BOX */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 text-xl font-bold">
                    {full.followers?.length ?? 0}
                  </div>
                  <span className="mt-2 text-sm text-gray-600">Followers</span>
                </div>

                {/* FOLLOWING BOX */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 text-xl font-bold">
                    {full.following?.length ?? 0}
                  </div>
                  <span className="mt-2 text-sm text-gray-600">Following</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
