// src/pages/AllReviews.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

type Review = {
  id: number;
  filmId: number;
  title: string;
  year: number;
  genre: string;
  reviewer: string;
  date: string;
  rating: number; // e.g. 4.5
  text: string;
};

// One or more reviews for each of your four films
const ALL_REVIEWS: Review[] = [
  {
    id: 1,
    filmId: 1,
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    reviewer: "You",
    date: "Oct 2025",
    rating: 4.5,
    text: "A mind-bending exploration of dreams within dreams. Nolan keeps the tension high and the visuals unforgettable.",
  },
  {
    id: 2,
    filmId: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    reviewer: "You",
    date: "Oct 2025",
    rating: 5,
    text: "A masterclass in storytelling and character. Every performance is iconic and every scene feels essential.",
  },
  {
    id: 3,
    filmId: 3,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    reviewer: "You",
    date: "Oct 2025",
    rating: 4,
    text: "A bold, stylish film with unforgettable dialogue and a nonlinear structure that rewards rewatching.",
  },
  {
    id: 4,
    filmId: 4,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: "Romantic Comedy",
    reviewer: "You",
    date: "Oct 2025",
    rating: 5,
    text: "A beautiful, emotional look at love and memory. Equal parts melancholy and hopeful, and totally unique.",
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
          <span key={i} className="text-yellow-500 text-xl">
            ★
          </span>
        ))}
      {half && <span className="text-yellow-500 text-xl">½</span>}
    </>
  );
}

export default function AllReviews() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const filmId = Number(id);
  const reviewsForFilm = ALL_REVIEWS.filter((r) => r.filmId === filmId);

  // If no reviews for this film
  if (!id || reviewsForFilm.length === 0) {
    return (
      <div className="min-h-screen bg-white-color text-black-color pt-20 pb-10 px-4 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-center flex-1">All Reviews</h1>
          <button
            onClick={() => navigate(-1)}
            className="btn-outline px-5 py-2 rounded-lg text-sm font-medium"
          >
            Back
          </button>
        </div>
        <p className="text-center text-gray">
          There are no reviews for this film yet.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white-color text-black-color pt-20 pb-10 px-4 md:px-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-center flex-1">All Reviews</h1>

        <button
          onClick={() => navigate(-1)}
          className="btn-outline px-5 py-2 rounded-lg text-sm font-medium"
        >
          Back
        </button>
      </div>

      {/* Review cards – only for THIS film */}
      <div className="space-y-10">
        {reviewsForFilm.map((review) => (
          <article
            key={review.id}
            className="flex gap-6 rounded-2xl bg-[#e9e7e7] p-6 shadow-sm"
          >
            {/* Fake "poster" that matches your I / T / P / E style */}
            <div className="h-40 w-28 flex-shrink-0 rounded-lg bg-gray-200 flex items-center justify-center text-3xl font-semibold text-black">
              {review.title.charAt(0)}
            </div>

            {/* Right side */}
            <div className="flex-1">
              {/* Title + stars + heart */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-2xl font-bold">
                    {review.title} ({review.year})
                  </h2>
                  <p className="text-xs text-gray mt-1">
                    {review.genre.toUpperCase()}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <button className="rounded-full border border-gray/40 p-2 hover:bg-white">
                  ♡
                </button>
              </div>

              {/* Reviewer line */}
              <p className="text-gray mb-2 flex items-center gap-2">
                <span className="text-lg">👤</span>
                Reviewed by {review.reviewer}, {review.date}
              </p>

              {/* Review text */}
              <p className="text-gray leading-relaxed mb-4">{review.text}</p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="rounded-lg border border-black px-6 py-2 text-sm hover:bg-white">
                  View
                </button>
                <button className="rounded-lg border border-black px-6 py-2 text-sm hover:bg-white">
                  Comment
                </button>
                <button className="rounded-lg border border-black px-6 py-2 text-sm hover:bg-white">
                  View Film
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
