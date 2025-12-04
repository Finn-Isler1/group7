export interface FilmLog {
  filmId: number;
  title: string;
  rating: number;
  review: string;
  date: string;
}

const STORAGE_KEY = "filmLogs";

// Get all logs
export function getFilmLogs(): FilmLog[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Save a new log
export function saveFilmLog(log: FilmLog) {
  const logs = getFilmLogs();
  logs.push(log);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
}
