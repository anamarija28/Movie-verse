"use client";

import Link from "next/link";
import { useRef } from "react";
import { movies, actors } from "@/lib/data";

export default function Home() {
  // 1. Креирање референци за скролерите
  const movieSliderRef = useRef<HTMLDivElement>(null);
  const actorSliderRef = useRef<HTMLDivElement>(null);

  // Сортирање на филмовите според рејтинг (опаѓачки)
  const topMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  const featuredActors = actors.slice(0, 10);

  // 2. Функција за мазно скролање со клик
  const handleScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <main className="layout-main">
      {/* Декоративни позадински светлински форми (Blobs) */}
      <div className="bg-glow-blob blob-1"></div>
      <div className="bg-glow-blob blob-2"></div>
      <div className="bg-glow-blob blob-3"></div>

      {/* Hero Секција */}
      <section className="container">
        <div className="hero-banner">
          <div className="hero-banner-content">
            <span>Discover movies now</span>
            <h1>Your ultimate guide for movies and tv shows</h1>
            <p>
              Explore top-rated movies, discover famous actors, filter by your
              favorite genres, and build your ultimate personal watchlist all
              in one place.
            </p>
            <Link href="/movies" className="btn btn-primary">
              Browse Movies
            </Link>
          </div>
        </div>
      </section>

      {/* Top Rated Movies Секција */}
      <section className="pad-section">
        <div className="container">
          <div className="slider-header">
            <div>
              <h2 className="title-section">Top Rated Movies</h2>
              <Link href="/movies" className="link-brand text-sm">
                View All Movies
              </Link>
            </div>

            {/* Стрелки за филмови */}
            <div className="slider-controls">
              <button
                type="button"
                className="btn-scroll"
                onClick={() => handleScroll(movieSliderRef, "left")}
                aria-label="Scroll left"
              >
                &#10094;
              </button>
              <button
                type="button"
                className="btn-scroll"
                onClick={() => handleScroll(movieSliderRef, "right")}
                aria-label="Scroll right"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div ref={movieSliderRef} className="slider-container">
            {topMovies.map((movie) => (
              <div key={movie.id} className="sidebar-card slider-card-movie">
                <div>
                  {/* Искористени ги твоите постоечки класи за постер */}
                  <div className="poster-container poster-container-card">
                    {movie.posterUrl ? (
                      <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="movie-poster-img"
                      />
                    ) : (
                      <div className="media-placeholder">No Image</div>
                    )}
                  </div>

                  <div className="badge-row mb-xs">
                    <span className="badge">{movie.genre}</span>
                    <span className="badge badge--neutral">
                      {movie.releaseYear}
                    </span>
                  </div>
                  <h3 className="card-title mt-xs">{movie.title}</h3>
                  <p className="text-muted-sm mt-xs">{movie.shortDescription}</p>
                </div>

                <div className="flex justify-between items-center mt-md pt-xs slider-card-footer">
                  <span className="rating-inline">
                    <span className="star-icon">★</span> {movie.rating}
                  </span>
                  <Link href={`/movies/${movie.slug}`} className="link-brand text-sm">
                    View Movie
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Actors Секција */}
      <section className="pad-section">
        <div className="container">
          <div className="slider-header">
            <div>
              <h2 className="title-section">Featured Actors</h2>
              <Link href="/actors" className="link-brand text-sm">
                View All Actors
              </Link>
            </div>

            {/* Стрелки за актери */}
            <div className="slider-controls">
              <button
                type="button"
                className="btn-scroll"
                onClick={() => handleScroll(actorSliderRef, "left")}
                aria-label="Scroll left"
              >
                &#10094;
              </button>
              <button
                type="button"
                className="btn-scroll"
                onClick={() => handleScroll(actorSliderRef, "right")}
                aria-label="Scroll right"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div ref={actorSliderRef} className="slider-container">
            {featuredActors.map((actor) => (
              <div
                key={actor.id}
                className="sidebar-card text-center slider-card-actor"
              >
                <img
                  src={actor.imageUrl}
                  alt={actor.name}
                  className="actor-avatar-home"
                />
                <h3 className="card-title">{actor.name}</h3>
                <p className="text-muted-sm mt-xs">
                  {actor.specialty}
                </p>
                <Link
                  href={`/actors/${actor.slug}`}
                  className="link-brand text-sm inline-block"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}