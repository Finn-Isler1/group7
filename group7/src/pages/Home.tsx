// src/pages/Home.tsx - FIXED with reliable, verified online posters
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Solid, bold title */}
      <header className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.04]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
            Welcome Back, Cinephile
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Discover, log, and share your film journey on the big screen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-9 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:bg-primary/90 transform hover:scale-105 transition-all duration-300">
              Log a Film
            </button>
            <button className="px-9 py-4 border border-border bg-background/80 backdrop-blur-md font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-300">
              Explore Films
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-card/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <h3 className="text-lg font-medium text-muted-foreground">Films Watched</h3>
              <p className="mt-3 text-6xl font-black text-orange-500 dark:text-orange-400">127</p>
              <p className="mt-2 text-sm text-muted-foreground">This year</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-muted-foreground">Average Rating</h3>
              <p className="mt-3 text-6xl font-black text-emerald-500 dark:text-emerald-400">3.8</p>
              <p className="mt-2 text-sm text-muted-foreground">Out of 5 stars</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-muted-foreground">Friends Online</h3>
              <p className="mt-3 text-6xl font-black text-blue-500 dark:text-blue-400">14</p>
              <p className="mt-2 text-sm text-muted-foreground">Active now</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Watches - FIXED with verified online URLs */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-foreground">Recent Watches</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Oppenheimer - Verified */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <img
              src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
              alt="Oppenheimer"
              className="w-full aspect-[2/3] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold">Oppenheimer</h3>
              <p className="text-sm opacity-90 mt-1">2023 • Biography, Drama</p>
              <div className="mt-2 text-yellow-400 text-2xl">★★★★☆ 4/5</div>
            </div>
          </div>

          {/* Barbie - Verified */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <img
              src="https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              alt="Barbie"
              className="w-full aspect-[2/3] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold">Barbie</h3>
              <p className="text-sm opacity-90 mt-1">2023 • Comedy, Fantasy</p>
              <div className="mt-2 text-yellow-400 text-2xl">★★★☆☆ 3/5</div>
            </div>
          </div>

          {/* Dune: Part Two - Verified official poster */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <img
              src="https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"
              alt="Dune: Part Two"
              className="w-full aspect-[2/3] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold">Dune: Part Two</h3>
              <p className="text-sm opacity-90 mt-1">2024 • Sci-Fi, Adventure</p>
              <div className="mt-2 text-yellow-400 text-2xl">★★★★★ 5/5</div>
            </div>
          </div>

          {/* Poor Things - Verified official poster */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <img
              src="https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPX9zCw4O3OYKz7M.jpg"
              alt="Poor Things"
              className="w-full aspect-[2/3] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold">Poor Things</h3>
              <p className="text-sm opacity-90 mt-1">2023 • Comedy, Sci-Fi</p>
              <div className="mt-2 text-yellow-400 text-2xl">★★★★☆ 4/5</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="text-primary font-bold text-lg hover:underline underline-offset-4">
            See All Activity →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-border/30 bg-background/60 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 text-center text-muted-foreground">
          © 2025 CineLog • Made for film lovers, by film lovers
        </div>
      </footer>
    </div>
  );
}