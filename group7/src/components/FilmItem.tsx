import { Link } from "react-router-dom";

export interface Film {
  id: number;
  title: string;
  director: string;
  year: number;
}

interface FilmItemProps {
  film: Film;
}

export default function FilmItem({ film }: FilmItemProps) {
  return (
    <>
      <Link to={`/films/${film.id}`}>
        <h3>{film.title}</h3>
        <p>{film.year}</p>
        <p className="director">{film.director}</p>
      </Link>
    </>
  );
}
