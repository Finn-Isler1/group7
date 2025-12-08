import { useState } from "react";
import { Link } from "react-router-dom";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "Watch 10 Films",
    description: "You have watched 10 films!",
    date: "September 7, 2025",
    icon: "🎥",
  },
  {
    id: 2,
    title: "Review 10 Films",
    description: "You have reviewed 10 films!",
    date: "September 15, 2025",
    icon: "📝",
  },
  {
    id: 3,
    title: "1 Week Streak",
    description: "Logged in for 7 consecutive days.",
    date: "September 21, 2025",
    icon: "🎬",
  },
  {
    id: 4,
    title: "1 Month Streak",
    description: "Logged in for 30 consecutive days!",
    date: "October 1, 2025",
    icon: "🎬",
  },
  {
    id: 5,
    title: "Watch 100 Films",
    description: "You watched 100 films — legend status!",
    date: "October 10, 2025",
    icon: "🎥",
  },
];

const streakData = [true, true, true, true, false, false, false];

export default function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <div className="mx-auto max-w-7xl p-10">
      <div className="FilmDetailsTopBar mb-12 w-full">
        <Link to="/profile" className="BackButton">
          ← Back to Profile
        </Link>
      </div>
      <h1 className="mb-10 text-center text-4xl font-bold">Achievements</h1>

      {/* FULL WIREFRAME LAYOUT */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* LEFT: MILESTONES */}
        <div className="flex flex-col">
          <h2 className="mb-4 text-3xl font-semibold">Milestones</h2>

          {/* Outer white box container */}
          <div className="space-y-4 rounded-lg border bg-white p-6 shadow-lg">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                onClick={() => setSelected(ach)}
                className="flex cursor-pointer items-center gap-4 rounded-lg border bg-gray-50 p-5 transition hover:bg-gray-100"
              >
                {/* Icon */}
                <span className="text-4xl">{ach.icon}</span>

                {/* Title */}
                <span className="text-lg font-medium">{ach.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: DAILY STREAK + CALENDAR */}
        <div className="flex flex-col">
          {/* DAILY STREAK */}
          <div className="mb-14 flex flex-col items-center">
            <h2 className="mb-4 text-center text-2xl font-semibold">
              Daily Streak
            </h2>

            <div className="flex flex-row flex-nowrap justify-center gap-6">
              {streakData.map((active, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded border text-2xl ${
                      active ? "bg-black text-white" : "bg-gray-200"
                    }`}
                  >
                    🎬
                  </div>
                  <span className="mt-1 text-sm">Day {i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CALENDAR */}
          <div className="w-full rounded-lg border bg-white shadow-lg">
            <div className="rounded-t-lg border-b bg-gray-100 py-3 text-center text-xl font-semibold">
              Calendar
            </div>

            {/* Calendar Days Header */}
            <div className="grid grid-cols-7 gap-2 p-4 text-center font-medium text-gray-600">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-3 p-4 text-center">
              {Array.from({ length: 30 }).map((_, i) => {
                const showMovie = [2, 5, 7, 11, 19, 21].includes(i);
                const showReview = [3, 12, 20].includes(i);

                return (
                  <div
                    key={i}
                    className="flex h-20 flex-col items-center justify-center rounded border bg-gray-50"
                  >
                    {showMovie && <span className="text-xl">🎬</span>}
                    {showReview && <span className="text-xl">📝</span>}
                    <span className="mt-1 text-xs">{i + 1}</span>
                  </div>
                );
              })}
            </div>

            <div className="px-5 pb-4 text-sm">
              <p>
                <span className="mr-2">🎬</span>Logged In
              </p>
              <p>
                <span className="mr-2">📝</span>Left a Review
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* POP-UP MODAL — LARGE */}
      {selected && (
        <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-3xl rounded-xl border bg-white p-10 text-center shadow-2xl">
            <div className="mb-6 text-6xl">{selected.icon}</div>
            <h3 className="mb-4 text-4xl font-bold">{selected.title}</h3>
            <p className="mb-4 text-lg">{selected.description}</p>
            <p className="mb-8 text-sm text-gray-600">
              Earned on: <strong>{selected.date}</strong>
            </p>

            <button
              onClick={() => setSelected(null)}
              className="rounded-lg bg-black px-8 py-3 text-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
