import { getMovieBySlug, getActorBySlug, movies } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import Link from "next/link";

export default async function MoviesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const movie = getMovieBySlug(slug);
  if (!movie) notFound();

  const actor = getActorBySlug(movie.slug);

  const similarMovies = movies.filter(
    (m) => 
      m.genre === movie.genre && m.id !== movie.id
  );

  return (
    <section className="pad-section">
      <div className="container">
        <nav className="back-nav">
          <Link href="/movies">Back to Movies</Link>
        </nav>

        {/* 1. Најгоре Наслов */}
        <h1 className="title-display">{movie.title}</h1>

        {/* 2. Лево Badges, Десно Рејтинг (во иста линија) */}
        <div className="sub-header-row">
          <div className="badge-row">
            <Badge>{movie.releaseYear}</Badge>
            <Badge variant="success">{movie.duration}</Badge>
          </div>

          <div className="rating-inline">
            <span className="star-icon">★</span>
            <span className="score-num">{movie.rating}</span>
            <span className="score-max">/10</span>
          </div>
        </div>

        {/* 3. Медиум дел: Постер + Видео */}
        <div className="movie-media-grid">
          <div className="poster-container">
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

          <div className="trailer-container">
            {movie.trailerUrl ? (
              <iframe
                src={movie.trailerUrl}
                title={`${movie.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="movie-trailer-iframe"
              />
            ) : (
              <div className="media-placeholder">No Trailer Available</div>
            )}
          </div>
        </div>

        {/* 4. Под видеото: Жанрови (Badges) */}
        <div className="badge-row mb-lg">
          <Badge variant="neutral">{movie.genre}</Badge>
          <Badge>Action</Badge>
          <Badge>Drama</Badge>
          <Badge>Adventure</Badge>
        </div>

        {/* 5. Долен дел: Опис, Director, Writer, Stars + Sidebar */}
        <div className="movie-layout">
          <div>
            <p className="movie-full-description">{movie.description}</p>

            {/* IMDb Инфо Линии за Director, Writer, Stars */}
            <div className="imdb-info-list">
              <div className="info-row">
                <span className="info-label">Director</span>
                <span className="info-value">{movie.director || "N/A"}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Writer</span>
                <span className="info-value">{movie.writer || "N/A"}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Stars</span>
                <span className="info-value">
                  {movie.mainStars ? movie.mainStars.join(" · ") : "N/A"}
                </span>
              </div>
            </div>

            {/* Similar Movies секција */}
            <div className="lesson-block mt-xl">
              <h2 className="title-section">Similar Movies</h2>

              {similarMovies.length === 0 ? (
                <p className="text-muted-sm py-2">No similar movies found.</p>
              ) : (
                <div className="imdb-info-list">
                  {similarMovies.map((simMovie) => (
                    <Link
                      key={simMovie.id}
                      href={`/movies/${simMovie.slug}`}
                      className="info-row-link"
                    >
                      <div className="flex items-center gap-2">
                        <span className="info-value font-medium">
                          {simMovie.title}
                        </span>
                        <span className="text-xs text-muted-sm">
                          ({simMovie.releaseYear})
                        </span>
                      </div>

                      <span className="link-brand">
                        View Movie
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

            <aside className="course-aside">
              <div className="sidebar-card">
                <p className="sidebar-label">Streaming Platforms</p>

                {movie.watchProviders && movie.watchProviders.length > 0 ? (
                  <div className="badge-row mt-sm">
                    {movie.watchProviders.map((provider) => (
                      <a
                        key={provider.name}
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge badge--neutral"
                      >
                        {provider.name} &#8599;
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-sm mt-sm">Not available for streaming.</p>
                )}
              </div>

              {actor ? (
                <div className="sidebar-card">
                  <p className="sidebar-label">Actors</p>
                  <p className="sidebar-instructor-name">{actor.name}</p>
                  <p className="sidebar-instructor-role">{actor.specialty}</p>
                  <p className="text-muted-sm mt-sm">{actor.shortBio}</p>
                  <Link
                    href={`/actors/${actor.slug}`}
                    className="link-brand is-blocked"
                  >
                    View Profile
                  </Link>
                </div>
              ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}