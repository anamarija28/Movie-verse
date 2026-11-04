import Link from "next/link";
import { Badge } from "./Badge";
import type { Movie } from "@/lib/data";

export function MovieCard({
  movie,
  actorName,
}: {
  movie: Movie;
  actorName?: string;
}) {
  return (
    <Link href={`/movies/${movie.slug}`} className="card-link">
      {/* Приказ на сликата доколку постои posterUrl */}
      {movie.posterUrl && (
        <div className="card-media">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="card-image"
          />
        </div>
      )}

      <div className="card-content">
        <div className="badge-row">
          <Badge variant="neutral">{movie.genre}</Badge>
          <Badge>{movie.releaseYear}</Badge>
        </div>

        <h3 className="card-link-title">{movie.title}</h3>
        <p className="card-link-body">{movie.shortDescription}</p>

        <dl className="card-meta">
          <div>
            <dt>Rating</dt>
            <dd>★{movie.rating}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{movie.duration}</dd>
          </div>
        </dl>

        <div className="card-footer">
          <span>By {movie.director}</span>
          <span className="card-footer-cta">View Movie</span>
        </div>
      </div>
    </Link>
  );
}