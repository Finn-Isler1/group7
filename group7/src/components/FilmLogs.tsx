import { useEffect, useState } from "react";
import { getFilmLogs, type FilmLog } from "../utils/film-logs.ts";

export default function ProfileLogs() {
  const [logs, setLogs] = useState<FilmLog[]>([]);

  useEffect(() => {
    const savedLogs = getFilmLogs();
    setLogs(savedLogs);
  }, []);

  if (logs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-lg text-gray-500">No films logged yet.</p>
        <p className="mt-2 text-sm text-gray-400">
          Start logging your favorite films!
        </p>
      </div>
    );
  }

  // Helper function to render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl ${
              star <= rating ? "text-orange-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      {logs.map((log, index) => (
        <article
          key={index}
          className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all"
        >
          {/* Card Header */}
          <div className="from-blue-50 to-purple-50 p-6">
            <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
              {log.title}
            </h3>
            {renderStars(log.rating)}
          </div>

          {/* Card Body */}
          <div className="p-6">
            <p className="mb-4 text-gray-700">
              {log.review || "No review written."}
            </p>

            <div className="flex items-center border-t border-gray-100 pt-4">
              <small className="text-xs text-gray-500">
                {new Date(log.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </small>

              <p></p>

              <small className="text-xs font-medium text-gray-600">
                {new Date(log.date).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </small>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
