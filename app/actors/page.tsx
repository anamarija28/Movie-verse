import { Suspense } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { getAllActors } from "@/lib/data";
import ActorsCatalogClient from "@/components/ActorsCatalogClient";

export default function ActorsPage() {
  const actorsList = getAllActors();

  return (
    <section className="pad-section">
      <div className="container">
        <div className="stack">
          <SectionTitle
            eyebrow="Cast"
            title="All casts"
            description="Watch the movies from the best actors in the world."
          />

          <Suspense fallback={<div>Loading actors...</div>}>
            <ActorsCatalogClient actors={actorsList} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}