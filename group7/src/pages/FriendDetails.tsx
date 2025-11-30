// src/pages/FriendDetails.tsx
import usersDB from "../data/users.json";
import { useParams, Link } from "react-router-dom";
import usersDB from "../data/users.json";

interface User {
  id: number;
  username: string;
  email: string;
}

export default function FriendDetails() {
  const { id } = useParams<{ id: string }>();
  const user = usersDB.UsersDB.find((u: User) => u.id === Number(id));

  if (!user) {
    return (
      <div className="min-h-screen bg-white-color text-black-color flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="hero-title text-3xl font-bold mb-4 text-gray">Friend Not Found</h1>
          <Link to="/friends" className="btn-primary inline-block px-6 py-3 rounded-lg shadow-md">
            ← Back to Friends
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white-color text-black-color pt-20">
      {/* Back Button - Sticky Top */}
      <div className="sticky top-0 z-50 bg-white-color/95 backdrop-blur-sm border-b border-gray/30 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/friends" className="btn-outline flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            ← Back to Friends
          </Link>
        </div>
      </div>

      {/* Hero Section - Avatar & Basic Info */}
      <header className="relative min-h-[60vh] bg-gradient-to-br from-primary-color/10 to-white-color flex items-center">
        <div className="content-container flex flex-col lg:flex-row items-center gap-8 py-16">
          {/* Avatar */}
          <img
            src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face`} // Generic portrait
            alt={`${user.username}'s profile picture`}
            className="w-48 h-48 object-cover rounded-full shadow-2xl flex-shrink-0 border-4 border-white-color"
            loading="lazy"
          />
          {/* Details */}
          <div className="flex-1 space-y-6 text-left">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold">{user.username}</h1>
            <p className="text-xl text-gray leading-relaxed max-w-2xl">
              A fellow cinephile sharing film recommendations and reviews.
            </p>
            <div className="hero-buttons flex gap-4 flex-wrap">
              <button className="btn-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl">
                Send Message
              </button>
              <button className="btn-outline px-8 py-4 text-lg border-2 shadow-sm hover:shadow-md">
                View Shared Films
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Details Section - Clean Grid */}
      <section className="content-container py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 p-6 bg-white-color rounded-2xl shadow-md">
            <h3 className="section-title font-bold text-2xl">Contact Info</h3>
            <p className="text-gray"><strong>Email:</strong> <span className="font-medium block mt-1">{user.email}</span></p>
          </div>
          <div className="space-y-4 p-6 bg-white-color rounded-2xl shadow-md">
            <h3 className="section-title font-bold text-2xl">About</h3>
            <p className="text-gray leading-relaxed">
              {user.username} is passionate about cinema, with a collection of {Math.floor(Math.random() * 500 + 100)} watched films and a keen eye for indie gems.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer border-t border-gray/30 py-8">
        <p className="text-center text-gray text-sm">&copy; 2025 MovieApp. Connect with friends.</p>
      </footer>
    </div>
  const numericId = Number(id);

  const user = usersDB.UsersDB.find((u: any) => u.id === numericId);

  if (!user) {
    return <p className="p-4">User not found</p>;
  }

  return (
    <section className="p-4 space-y-4">
      <Link to="/friends" className="text-blue-500 hover:underline">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold">{user.username}</h1>

      <p className="text-sm">Email: {user.email}</p>

      <p className="text-sm text-gray-700">
        This is the user detail page. More info can be wired up later.
      </p>
    </section>
  );
}