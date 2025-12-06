// src/components/Filters.tsx
import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "TV Movie",
  "War",
  "Western",
];

const languages = ["English", "Spanish", "German", "French"];

const sortOptions = [
  "Relevance",
  "Highest Rated",
  "Title A-Z",
  "Newest",
  "Lowest Rated",
  "Title Z-A",
  "Oldest",
  "Popularity",
  "Most Watched",
];

export default function Filters() {
  const navigate = useNavigate();

  const [selectedSort, setSelectedSort] = React.useState<string>();
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);
  const [selectedDecade, setSelectedDecade] = React.useState<number | null>(
    null,
  ); // Default is Any
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>();

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedGenres.length > 0) {
      params.set(
        "genres",
        selectedGenres.map((g) => g.toLowerCase()).join(","),
      );
    }

    // Only include decade if it is set
    if (selectedDecade !== null) {
      params.set("decade", selectedDecade.toString());
    }

    if (selectedLanguage) {
      params.set("lang", selectedLanguage.toLowerCase());
    }

    if (selectedSort) {
      params.set("sort", selectedSort.toLowerCase());
    }

    navigate(`/films?${params.toString()}`);
  };

  const cancelFilters = () => {
    navigate("/films");
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-28 pb-20">
      {/* HERO */}
      <header className="flex w-full flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <h1 className="mb-6 text-6xl font-black tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
          Filter Your Films
        </h1>
        <p className="max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
          Choose genres, sort options, and decade to find your films.
        </p>
      </header>

      {/* FILTER BODY */}
      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-3xl flex-col gap-12 px-6">
          {/* Sort */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-lg font-semibold">Sort By</p>
            <Select onValueChange={setSelectedSort}>
              <SelectTrigger className="w-full bg-white text-gray-900">
                <SelectValue placeholder="Choose a Sort Option" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                <SelectGroup>
                  <SelectLabel>Sort Options</SelectLabel>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase()}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Decade */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-lg font-semibold">Decade (Optional)</p>
            <div className="mb-2 font-semibold">
              {selectedDecade !== null ? `${selectedDecade}s` : "Any"}
            </div>
            <Slider
              value={[selectedDecade ?? 2000]} // Slider starts at 2000 if null
              min={1920}
              max={2020}
              step={10}
              onValueChange={(v) => setSelectedDecade(v[0])}
              className="w-full"
            />
            <button
              className="mt-2 text-sm text-gray-500 underline hover:text-gray-700"
              onClick={() => setSelectedDecade(null)}
            >
              Clear Year Filter
            </button>
          </div>

          {/* Genres */}
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-center">Select Genres</h2>
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {genres.map((genre) => (
                <label
                  key={genre}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-blue-50 ${
                    selectedGenres.includes(genre)
                      ? "border-blue-400 bg-blue-100"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <Checkbox
                    checked={selectedGenres.includes(genre)}
                    onCheckedChange={() => toggleGenre(genre)}
                  />
                  <span>{genre}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-lg font-semibold">Language</p>
            <Select onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full bg-white text-gray-900">
                <SelectValue placeholder="Choose a Language" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  {languages.map((lang) => (
                    <SelectItem key={lang} value={lang.toLowerCase()}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Apply + Cancel */}
          <div className="flex justify-center gap-4">
            <button
              className="btn-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
            <button
              className="btn-primary border border-blue-600 bg-white px-8 py-4 text-lg text-blue-600 shadow-lg hover:shadow-xl"
              onClick={cancelFilters}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
