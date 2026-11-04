import Link from "next/link";
import { type Actor } from "@/lib/data";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function ActorCard({ actor }: { actor: Actor }) {
  return (
    <Link href={`/actors/${actor.slug}`} className="card-link">
      {/* Слика или иницијали */}
      {actor.imageUrl ? (
        <img
          src={actor.imageUrl}
          alt={actor.name}
          className="avatar-img"
        />
      ) : (
        <div className="avatar">{initials(actor.name)}</div>
      )}

      {/* Наслов и категорија/специјалност */}
      <h3 className="card-link-title" style={{ marginTop: "0.75rem" }}>
        {actor.name}
      </h3>

      {actor.specialty && (
        <p className="eyebrow">{actor.specialty}</p>
      )}

      {/* Опис */}
      <p className="card-link-body">{actor.shortBio}</p>

      {/* Футер со линк */}
      <div className="card-footer" style={{ marginTop: "auto" }}>
        <span className="card-footer-cta">View Profile</span>
      </div>
    </Link>
  );
}