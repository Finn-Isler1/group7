import React, { useState } from "react";

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
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Achievements</h1>

      {/* FULL WIREFRAME LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT: MILESTONES */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">Milestones</h2>

          {/* Outer white box container */}
          <div className="border rounded-lg bg-white shadow-lg p-6 space-y-4">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                onClick={() => setSelected(ach)}
                className="flex items-center gap-4 p-5 bg-gray-50 border rounded-lg hover:bg-gray-100 cursor-pointer transition"
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
          <div className="flex flex-col items-center mb-14">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Daily Streak
            </h2>

            <div className="flex flex-row gap-6 justify-center flex-nowrap">
              {streakData.map((active, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 border rounded flex items-center justify-center text-2xl ${
                      active ? "bg-black text-white" : "bg-gray-200"
                    }`}
                  >
                    🎬
                  </div>
                  <span className="text-sm mt-1">Day {i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CALENDAR */}
          <div className="border rounded-lg bg-white shadow-lg w-full">
            <div className="bg-gray-100 py-3 text-center text-xl font-semibold border-b rounded-t-lg">
              Calendar
            </div>

            {/* Calendar Days Header */}
            <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-600 p-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-3 text-center p-4">
              {Array.from({ length: 30 }).map((_, i) => {
                const showMovie = [2, 5, 7, 11, 19, 21].includes(i);
                const showReview = [3, 12, 20].includes(i);

                return (
                  <div
                    key={i}
                    className="border h-20 flex flex-col items-center justify-center rounded bg-gray-50"
                  >
                    {showMovie && <span className="text-xl">🎬</span>}
                    {showReview && <span className="text-xl">📝</span>}
                    <span className="text-xs mt-1">{i + 1}</span>
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-3xl text-center border">
            <div className="text-6xl mb-6">{selected.icon}</div>
            <h3 className="text-4xl font-bold mb-4">{selected.title}</h3>
            <p className="text-lg mb-4">{selected.description}</p>
            <p className="text-sm text-gray-600 mb-8">
              Earned on: <strong>{selected.date}</strong>
            </p>

            <button
              onClick={() => setSelected(null)}
              className="px-8 py-3 bg-black text-white rounded-lg text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
