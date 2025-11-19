import FilmsDB from "../data/films.json";
import { useParams, Link } from "react-router-dom";

export default function FilmDetails() {
  const { id } = useParams<{ id: string }>();
  const film = FilmsDB.FilmsDB.find((f) => f.id === Number(id));

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <>
      <h1>{film.title}</h1>
      <p>Director: {film.director}</p>
      <p>Year: {film.year}</p>
      <Link to="/films">Back to Films</Link>
    </>
  );
}
