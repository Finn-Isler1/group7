import FilmItem, { type Film } from "./FilmItem";

interface FilmListProps {
  films: Film[];
  onFilmClick: (film: Film) => void;
}

export const FilmList = ({ films }: FilmListProps) => {
  return (
    <div>
      {films.map((film) => (
        <FilmItem key={film.id} film={film} />
      ))}
    </div>
  );
};
