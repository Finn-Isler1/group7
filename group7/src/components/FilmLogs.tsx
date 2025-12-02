import { useEffect, useState } from "react";
import { getFilmLogs, type FilmLog } from "../utils/film-logs.ts";

export default function ProfileLogs() {
  const [logs, setLogs] = useState<FilmLog[]>([]);

  useEffect(() => {
    const savedLogs = getFilmLogs();
    setLogs(savedLogs);
  }, []);

  if (logs.length === 0) return <p>No films logged yet.</p>;

  return (
    <div className="space-y-4">
      {logs.map((log, index) => (
        <div key={index} className="rounded-md border p-4">
          <h3 className="font-bold">{log.title}</h3>
          <p>Rating: {log.rating} ⭐</p>
          <p>{log.review}</p>
          <small>{new Date(log.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
