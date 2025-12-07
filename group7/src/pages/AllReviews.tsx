// src/pages/AllReviews.tsx

import { Link, useNavigate, useParams } from "react-router-dom";
import FilmsDB from "../data/films.json";

type Review = {
  id: number;
  filmId: number;
  title: string;
  year: number;
  genre: string;
  reviewer: string;
  date: string;
  rating: number;
  text: string;
};

type Film = {
  id: number;
  title: string;
  poster?: string;
  year: number;
  genre: string;
  director: string;
};

const films: Film[] = (FilmsDB as any).FilmsDB;

const ALL_REVIEWS: Review[] = [
  {
    id: 1,
    filmId: 1,
    title: "12 Angry Men",
    year: 1957,
    genre: "Drama",
    reviewer: "JaneSmith",
    date: "Oct 2025",
    rating: 5,
    text: "A masterful blend of suspense and intellect. The claustrophobic setting amplifies the tension, turning each juror’s argument into a riveting clash of ideals.",
  },
  {
    id: 2,
    filmId: 1,
    title: "12 Angry Men",
    year: 1957,
    genre: "Drama",
    reviewer: "FilmFan42",
    date: "Oct 2025",
    rating: 4.5,
    text: "This movie was extremely impactful. ",
  },
  {
    id: 3,
    filmId: 1,
    title: "12 Angry Men",
    year: 1957,
    genre: "Drama",
    reviewer: "CinemaLover",
    date: "Oct 2025",
    rating: 5,
    text: "Absolutely amazing film! I will be watching this again, I recommend this movie to all families.",
  },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  return (
    <>
      {Array(full)
        .fill(0)
        .map((_, i) => (
          <span key={i} className="text-xl text-yellow-500">
            ★
          </span>
        ))}
      {half && <span className="text-xl text-yellow-500">½</span>}
    </>
  );
}

function getImageUrl(filename: string | undefined) {
  if (!filename) return "";
  try {
    return new URL(`../assets/${filename}`, import.meta.url).href;
  } catch {
    return "";
  }
}

export default function AllReviews() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const filmId = Number(id);
  const film = films.find((f) => f.id === filmId);
  const posterUrl = getImageUrl(film?.poster);

  const reviewsForFilm = ALL_REVIEWS.slice(0, 3);

  return (
    <div className="bg-white-color text-black-color min-h-screen px-4 pt-20 pb-10 md:px-10">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="flex-1 text-center text-3xl font-bold">All Reviews</h1>
        <button
          onClick={() => navigate(-1)}
          className="btn-outline rounded-lg px-5 py-2 text-sm font-medium"
        >
          Back
        </button>
      </div>

      {/* REVIEW LIST */}
      <div>
        {reviewsForFilm.map((review) => (
          <article
            key={review.id}
            className="bg-white-color mb-16 flex gap-6 rounded-xl p-6 shadow-sm"
          >
            {/* POSTER */}
            <div className="shrink-0">
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={film?.title}
                  className="h-44 w-32 rounded-lg object-cover shadow-md"
                />
              ) : (
                <div className="flex h-44 w-32 items-center justify-center rounded-lg bg-gray-300 text-3xl font-semibold text-black">
                  {review.title.charAt(0)}
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {film?.title} ({film?.year})
                  </h2>
                  <p className="mt-1 text-xs text-gray-600">
                    {film?.genre.toUpperCase()}
                  </p>
                  <div className="mt-1 flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <button className="rounded-full border border-gray-400 p-2 hover:bg-white">
                  ♡
                </button>
              </div>

              <p className="mt-1 text-sm text-gray-700">
                <span className="mr-1">👤</span>
                Reviewed by {review.reviewer}, {review.date}
              </p>

              <p className="mt-3 text-base">{review.text}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-lg border border-black px-6 py-2 text-sm hover:bg-gray-100">
                  View
                </button>
                <button className="rounded-lg border border-black px-6 py-2 text-sm hover:bg-gray-100">
                  Comment
                </button>
                <Link
                  to={`/films/${filmId}`}
                  className="rounded-lg border border-black px-6 py-2 text-sm hover:bg-gray-100"
                >
                  View Film
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
