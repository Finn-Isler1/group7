// src/pages/FilmDetails.tsx
import FilmsDB from "../data/films.json";
import { useParams, Link } from "react-router-dom";

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
}

export default function FilmDetails() {
  const { id } = useParams<{ id: string }>();
  const film = FilmsDB.FilmsDB.find((f: Film) => f.id === Number(id));

  if (!film) {
    return (
      <div className="min-h-screen bg-white-color text-black-color flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="hero-title text-3xl font-bold mb-4 text-gray">Film Not Found</h1>
          <Link to="/films" className="btn-primary inline-block px-6 py-3 rounded-lg shadow-md">
            ← Back to Films
          </Link>
        </div>
      </div>
    );
  }

  // Real movie-themed Unsplash images
  const getPosterUrl = (film: Film) => {
    switch (film.title) {
      case "Inception":
        return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center";
      case "The Godfather":
        return "https://images.unsplash.com/photo-1571133918265-65e89a5b0e3f?w=400&h=600&fit=crop&crop=center";
      case "Pulp Fiction":
        return "https://images.unsplash.com/photo-1489599501215-4b4ca2e8f83d?w=400&h=600&fit=crop&crop=center";
      default:
        return "https://images.unsplash.com/photo-1489599501215-4b4ca2e8f83d?w=400&h=600&fit=crop&crop=center";
    }
  };

  return (
    <div className="min-h-screen bg-white-color text-black-color">
      {/* Back Button - Sticky Top */}
      <div className="sticky top-0 z-50 bg-white-color/95 backdrop-blur-sm border-b border-gray/30 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/films" className="btn-outline flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            ← Back to Films
          </Link>
        </div>
      </div>

      {/* Hero Section - Full Bleed with Container */}
      <header className="relative min-h-[70vh] bg-gradient-to-br from-primary-color/10 to-white-color flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getPosterUrl(film)}
            alt={`${film.title} background`}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="content-container relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 py-16">
          {/* Poster - Prominent */}
          <img
            src={getPosterUrl(film)}
            alt={film.title}
            className="movie-poster w-full max-w-sm h-[500px] object-cover rounded-2xl shadow-2xl flex-shrink-0 border border-gray/20"
          />
          {/* Details - Clean & Spaced */}
          <div className="flex-1 space-y-6">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold text-shadow-sm">{film.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-lg text-gray">
              <span className="px-4 py-2 bg-white-color/80 rounded-full shadow-sm">{film.year}</span>
              <span className="px-4 py-2 bg-white-color/80 rounded-full shadow-sm">{film.genre}</span>
              <p className="font-medium">Directed by <span className="text-black-color">{film.director}</span></p>
            </div>
            <p className="text-xl text-gray leading-relaxed max-w-2xl opacity-90">
              {film.title} is a groundbreaking {film.genre.toLowerCase()} film that redefined the genre. Directed by the visionary {film.director}, it features unforgettable storytelling and iconic performances that continue to influence cinema today.
            </p>
            <div className="hero-buttons flex gap-4 flex-wrap">
              <button className="btn-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl">Log This Film</button>
              <button className="btn-outline px-8 py-4 text-lg border-2 shadow-sm hover:shadow-md">Add to Watchlist</button>
            </div>
          </div>
        </div>
      </header>

      {/* Details Section - Balanced Grid */}
      <section className="content-container py-16 -mt-8 lg:mt-0"> {/* Negative margin to overlap hero slightly */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4 p-6 bg-white-color rounded-2xl shadow-md">
            <h3 className="section-title font-bold text-2xl">Cast & Crew</h3>
            <p className="text-gray"><strong>Director:</strong> <span className="font-medium">{film.director}</span></p>
            <p className="text-gray"><strong>Genre:</strong> <span className="font-medium">{film.genre}</span></p>
            <p className="text-gray"><strong>Year:</strong> <span className="font-medium">{film.year}</span></p>
          </div>
          <div className="space-y-4 p-6 bg-white-color rounded-2xl shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="section-title font-bold text-2xl">Overview</h3>
            <p className="text-gray leading-relaxed">
              {film.title} is a groundbreaking film that redefined {film.genre.toLowerCase()}. Directed by the visionary {film.director}, it features unforgettable storytelling and iconic performances.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-white-color rounded-2xl shadow-md md:col-span-2 lg:col-span-3">
            <h3 className="section-title font-bold text-2xl">Why Watch?</h3>
            <ul className="text-gray space-y-2 list-disc list-inside">
              <li>Revolutionary {film.genre.toLowerCase()} narrative structure</li>
              <li>Iconic direction by {film.director}</li>
              <li>Timeless themes that resonate today</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer border-t border-gray/30 py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray text-sm">&copy; 2025 MovieApp. All rights reserved.</p>
      </footer>
    </div>
  );
}