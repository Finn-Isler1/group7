// src/pages/FilmDetails.tsx

import FilmsDB from "../data/films.json";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogFilmModal from "../components/ui/LogFilmModal";

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
  poster?: string;
}

export default function FilmDetails() {
  const { id } = useParams<{ id: string }>();
  const film = FilmsDB.FilmsDB.find((f: Film) => f.id === Number(id));

  const [dominantColor, setDominantColor] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  if (!film) {
    return (
      <div className="FilmDetailsNotFound">
        <div className="FilmDetailsNotFound-inner">
          <h1>Film Not Found</h1>
          <Link to="/films" className="BackButton">
            ← Back to Films
          </Link>
        </div>
      </div>
    );
  }

  const getImageUrl = (filename: string | undefined) => {
    if (!filename) return "https://via.placeholder.com/500x750?text=No+Image";
    try {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    } catch {
      return "https://via.placeholder.com/500x750?text=No+Image";
    }
  };

  const poster = getImageUrl(film.poster);

  // Use Canvas to get average color
  const getAverageColor = (imageUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imageUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve("#0fae3d"); // fallback

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        let r = 0, g = 0, b = 0;
        const total = imageData.data.length / 4;

        for (let i = 0; i < imageData.data.length; i += 4) {
          r += imageData.data[i];
          g += imageData.data[i + 1];
          b += imageData.data[i + 2];
        }

        r = Math.round(r / total);
        g = Math.round(g / total);
        b = Math.round(b / total);

        resolve(`rgb(${r}, ${g}, ${b})`);
      };
      img.onerror = () => resolve("#0fae3d"); // fallback
    });
  };

  useEffect(() => {
    getAverageColor(poster).then((color) => setDominantColor(color));
  }, [poster]);

  // ⭐ NEW STATES
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isInQueue, setIsInQueue] = useState(false);

  return (
    <div className="FilmDetailsPage">
      {/* Sticky Top Nav */}
      <div className="FilmDetailsTopBar">
        <Link to="/films" className="BackButton">
          ← Back to Films
        </Link>
      </div>

      {/* HERO SECTION */}
      <header
        className="FilmDetailsHero"
        style={{
          background: dominantColor
            ? `linear-gradient(to bottom, rgba(0,0,0,0.8), ${dominantColor}88)`
            : undefined,
        }}
      >
        <div className="HeroBg">
          <img src={poster} className="HeroBgImg" />
          <div className="HeroOverlay" />
        </div>

        <div className="HeroContent">
          <img src={poster} className="HeroPoster" />

          <div className="HeroText">
            <h1>{film.title}</h1>

            <div className="HeroTags">
              <span>{film.year}</span>
              <span>{film.genre}</span>
              <span>Directed by <strong>{film.director}</strong></span>

            </div>

            <p className="HeroDescription">
              {film.title} stands as a defining piece of modern cinema. With its
              masterful direction, gripping themes, and unforgettable visual
              language, it remains one of the most influential{" "}
              {film.genre.toLowerCase()} films ever created.
            </p>

            <div className="HeroButtons">
              <button
                className="BtnPrimary"
                onClick={() => setShowModal(true)}
                style={{
                  background: dominantColor
                    ? `linear-gradient(135deg, ${dominantColor}, ${dominantColor}aa)`
                    : undefined,
                }}
              >
                ★ Rate / Review
              </button>

              {/* ⭐ WATCHLIST BUTTON */}
              <button
                className={`btn-outline border-2 px-8 py-4 text-lg shadow-sm hover:shadow-md ${
                  isInWatchlist ? "bg-black-color text-white-color" : ""
                }`}
                onClick={() => setIsInWatchlist((prev) => !prev)}
              >
                {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
              </button>

              {/* ⭐ QUEUE BUTTON */}
              <button
                className={`btn-outline border-2 px-8 py-4 text-lg shadow-sm hover:shadow-md ${
                  isInQueue ? "bg-black-color text-white-color" : ""
                }`}
                onClick={() => setIsInQueue((prev) => !prev)}
              >
                {isInQueue ? "In Queue" : "Add to Queue"}
              </button>

              {/* GREEN PILL — WATCHLIST */}
              {isInWatchlist && (
                <span className="ml-2 rounded-full border border-emerald-500 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
                  Added to Watchlist
                </span>
              )}

              {/* BLUE PILL — QUEUE */}
              {isInQueue && (
                <span className="ml-2 rounded-full border border-blue-500 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                  Added to Queue
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* DETAILS GRID */}
      <section className="DetailsSection">
        <div className="DetailsGrid">

          <div className="DetailsCard">
            <h3>Film Info</h3>
            <p>
              <strong>Director:</strong> {film.director} <br />
              <strong>Genre:</strong> {film.genre} <br />
              <strong>Year:</strong> {film.year}
            </p>
          </div>

          <div className="DetailsCard">
            <h3>Overview</h3>
            <p>
              A film widely recognized for its complexity, artistry, and emotional
              weight. It blends brilliant direction with layered storytelling to
              deliver a cinematic experience that resonates far beyond its runtime.
            </p>
          </div>

          <div className="DetailsCard LargeCard">
            <h3>Why Watch?</h3>
            <ul>
              <li>Rich, atmospheric storytelling</li>
              <li>Iconic performances & unforgettable scenes</li>
              <li>Masterful genre-defining direction</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="FilmFooter">
        © 2025 filmApp — All rights reserved.
      </footer>

      {showModal && <LogFilmModal film={film} onClose={() => setShowModal(false)} />}

      {/* FULL PAGE CINEMATIC CSS — INLINE + PERFECTLY SYNCED */}
      <style>{`
        /* ---------------------------------------------------------- */
        /* GLOBAL RESET */
        /* ---------------------------------------------------------- */
        * {
          transition: 150ms ease;
        }

        /* ---------------------------------------------------------- */
        /* PAGE WRAPPER */
        /* ---------------------------------------------------------- */
        .FilmDetailsPage {
          background: #f3f3f3;
          color: #111;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        /* ---------------------------------------------------------- */
        /* NOT FOUND */
        /* ---------------------------------------------------------- */
        .FilmDetailsNotFound {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #eee;
        }

        .FilmDetailsNotFound-inner {
          text-align: center;
        }

        .FilmDetailsNotFound-inner h1 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        /* ---------------------------------------------------------- */
        /* TOP BAR */
        /* ---------------------------------------------------------- */
        .FilmDetailsTopBar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.75);
          padding: 18px 32px;
          border-bottom: 1px solid #ccc;
        }

        .BackButton {
          padding: 10px 24px;
          border-radius: 12px;
          border: 1px solid #aaa;
          background: white;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .BackButton:hover {
          background: #ececec;
        }

        /* ---------------------------------------------------------- */
        /* HERO SECTION */
        /* ---------------------------------------------------------- */
        .FilmDetailsHero {
          position: relative;
          width: 100%;
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .HeroBg {
          position: absolute;
          inset: 0;
        }

        .HeroBgImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(35px);
          opacity: 0.35;
        }

        .HeroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.65), rgba(243,243,243,0.4));
        }

        .HeroContent {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: auto;
          padding: 64px 32px;
          display: flex;
          gap: 70px;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .HeroContent {
            flex-direction: row;
          }
        }

        .HeroPoster {
          width: 340px;
          border-radius: 22px;
          box-shadow: 0 20px 45px rgba(0,0,0,0.45);
          border: 1px solid rgba(255,255,255,0.3);
        }

        .HeroPoster:hover {
          transform: scale(1.03);
        }

        .HeroText {
          flex: 1;
          color: white;
        }

        .HeroText h1 {
          font-size: 64px;
          font-weight: 900;
          line-height: 1.1;
          text-shadow: 0 4px 14px rgba(0,0,0,0.35);
        }

        .HeroTags {
          display: flex;
          gap: 14px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .HeroTags span {
          padding: 10px 22px;
          border-radius: 18px;
          background: rgba(255,255,255,0.22);
          backdrop-filter: blur(12px);
          font-weight: 600;
        }

        .HeroDescription {
          margin-top: 20px;
          max-width: 650px;
          font-size: 18px;
          opacity: 0.95;
          line-height: 1.55;
        }

        .HeroButtons {
          display: flex;
          gap: 20px;
          margin-top: 26px;
        }

        .BtnPrimary {
          padding: 14px 44px;
          font-size: 18px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0fae3d, #0c7c2c);
          color: white;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .BtnPrimary:hover {
          transform: translateY(-3px);
          filter: brightness(1.08);
        }

        .BtnOutline {
          padding: 14px 44px;
          font-size: 18px;
          border-radius: 14px;
          border: 2px solid rgba(255,255,255,0.75);
          color: white;
          backdrop-filter: blur(8px);
        }

        .BtnOutline:hover {
          background: rgba(255,255,255,0.18);
        }

        /* ---------------------------------------------------------- */
        /* DETAILS GRID */
        /* ---------------------------------------------------------- */
        .DetailsSection {
          max-width: 1300px;
          margin: auto;
          padding: 100px 32px;
        }

        .DetailsGrid {
          display: grid;
          gap: 40px;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }

        .DetailsCard {
          background: white;
          border-radius: 22px;
          padding: 36px;
          border: 1px solid #ddd;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .DetailsCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px rgba(0,0,0,0.15);
        }

        .DetailsCard h3 {
          font-size: 26px;
          margin-bottom: 18px;
          font-weight: 700;
        }

        .DetailsCard p {
          font-size: 17px;
          line-height: 1.6;
        }

        .DetailsCard ul {
          padding-left: 20px;
          font-size: 18px;
          line-height: 1.6;
        }

        .LargeCard {
          grid-column: span 2;
        }

        /* ---------------------------------------------------------- */
        /* FOOTERR */
        /* ---------------------------------------------------------- */
        .FilmFooter {
          padding: 40px;
          text-align: center;
          border-top: 1px solid #ccc;
          color: #555;
        }
      `}</style>
    </div>
  );
}
