// src/pages/FriendDetails.tsx
import { useParams, Link } from "react-router-dom";
import usersDB from "../data/users.json";

// Import images
import OppenheimerImg from "../assets/oppenheimer.jpg";
import BarbieImg from "../assets/barbie.jpg";
import Dune2Img from "../assets/dune2.jpg";
import PoorThingsImg from "../assets/poorthings.jpg";
import DriveImg from "../assets/drive.png";

import TerryPic from "../assets/users/terry_lewis.png";
import JohnPic from "../assets/users/john_smith.png";
import EmmaPic from "../assets/users/emma_jones.png";
import JoePic from "../assets/users/joe_johnson.png";
import AvaPic from "../assets/users/ava_martinez.png";
import LucasPic from "../assets/users/lucas_brown.png";
import SophiaPic from "../assets/users/sophia_clark.png";
import MichaelPic from "../assets/users/michael_green.png";
import DavidPic from "../assets/users/david_kim.png";
import SarahPic from "../assets/users/sarah_lee.png";

interface User {
  id: number;
  username: string;
  email: string;
}

export default function FriendDetails() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const user = usersDB.UsersDB.find((u: User) => u.id === numericId);

  const pictures: Record<number, string> = {
    1: TerryPic,
    2: JohnPic,
    3: EmmaPic,
    4: JoePic,
    5: AvaPic,
    6: LucasPic,
    7: SophiaPic,
    8: MichaelPic,
    9: DavidPic,
    10: SarahPic,
  };

  if (!user) {
    return (
      <div className="bg-white-color text-black-color flex min-h-screen items-center justify-center py-20">
        <div className="max-w-md px-4 text-center">
          <h1 className="hero-title text-gray mb-4 text-3xl font-bold">
            Friend Not Found
          </h1>
          <Link
            to="/friends"
            className="btn-primary inline-block rounded-lg px-6 py-3 shadow-md"
          >
            ← Back to Friends
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white-color text-black-color min-h-screen pt-20">
      {/* Back Button */}
      <div className="bg-white-color/95 border-gray/30 sticky top-0 z-50 border-b px-4 py-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/friends"
            className="btn-outline flex items-center gap-2 rounded-lg px-4 py-2 shadow-sm transition-shadow hover:shadow-md"
          >
            ← Back to Friends
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <header className="from-primary-color/10 to-white-color relative flex min-h-[60vh] items-center bg-gradient-to-br">
        <div className="content-container flex flex-col items-center gap-8 py-16 lg:flex-row">
          <img
            src={pictures[user.id]}
            alt={`${user.username}'s profile picture`}
            className="border-white-color h-48 w-48 rounded-full border-4 object-cover shadow-2xl"
          />

          <div className="flex-1 space-y-6 text-left">
            <h1 className="hero-title text-5xl font-bold lg:text-6xl">
              {user.username}
            </h1>

            <p className="text-gray max-w-2xl text-xl leading-relaxed">
              A fellow cinephile sharing film recommendations and reviews.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl">
                Send Message
              </button>
              <button className="btn-outline border-2 px-8 py-4 text-lg shadow-sm hover:shadow-md">
                View Shared Films
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Details Section */}
      <section className="content-container py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md">
            <h3 className="section-title text-2xl font-bold">Contact Info</h3>
            <p className="text-gray">
              <strong>Email:</strong>
              <span className="mt-1 block font-medium">{user.email}</span>
            </p>
          </div>

          <div className="bg-white-color space-y-4 rounded-2xl p-6 shadow-md">
            <h3 className="section-title text-2xl font-bold">About</h3>
            <p className="text-gray leading-relaxed">
              {user.username} is passionate about cinema, with a collection of{" "}
              {Math.floor(Math.random() * 500 + 100)} watched films and a keen
              eye for indie gems.
            </p>
          </div>
        </div>
      </section>

      {/* CLEAN SPACER — PERFECT AMOUNT */}
      <div className="h-20 md:h-24 lg:h-28"></div>

      {/* Recently Viewed */}
      <section className="content-container">
        <div className="section-header">
          <h2 className="section-title">{user.username}'s Recently Viewed</h2>
        </div>

        <div className="movies-grid">
          {/* Movie 1  */}
          <article className="movie-card">
            <img
              src={PoorThingsImg}
              alt="Poor Things"
              className="movie-poster"
            />
            <div className="movie-content">
              <h3 className="movie-title">Poor Things</h3>
              <span className="movie-badge">2023 • Fantasy</span>
              <div className="movie-rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">
                Mad science and whimsy—Emma Stone shines in Lanthimos' world.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>
          {/* Movie 2 */}
          <article className="movie-card">
            <img src={Dune2Img} alt="Dune Part Two" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Dune: Part Two</h3>
              <span className="movie-badge">2024 • Sci-Fi</span>
              <div className="movie-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-score">5/5</span>
              </div>
              <p className="review-snippet">
                Epic sands and spice—Villeneuve elevates the saga.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>
          {/* Movie 3 */}
          <article className="movie-card">
            <img src={BarbieImg} alt="Barbie" className="movie-poster" />
            <div className="movie-content">
              <h3 className="movie-title">Barbie</h3>
              <span className="movie-badge">2023 • Comedy</span>
              <div className="movie-rating">
                <span className="stars">★★★☆☆</span>
                <span className="rating-score">3/5</span>
              </div>
              <p className="review-snippet">
                Pink power with a punch—subverts expectations beautifully.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>
          {/* Movie 4 */}
          <article className="movie-card">
            <img
              src={OppenheimerImg}
              alt="Oppenheimer"
              className="movie-poster"
            />
            <div className="movie-content">
              <h3 className="movie-title">Oppenheimer</h3>
              <span className="movie-badge">2023 • Drama</span>
              <div className="movie-rating">
                <span className="stars">★★★★☆</span>
                <span className="rating-score">4/5</span>
              </div>
              <p className="review-snippet">
                A mind-bending atomic epic that questions creation and
                destruction.
              </p>
              <button className="btn-like">❤️</button>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer border-gray/30 border-t py-8"></footer>
    </div>
  );
}
