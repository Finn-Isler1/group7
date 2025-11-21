import { FilmList } from "../components/FilmList.tsx";
import filmsDB from "../data/films.json";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar.tsx";

export default function Films() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFilms = filmsDB.FilmsDB.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1>Films Page</h1>
      <SearchBar onSearch={setSearchQuery} />
      <FilmList
        films={filteredFilms}
        onFilmClick={(film) => console.log("Film clicked:", film)}
      />
    </>
  );
}
