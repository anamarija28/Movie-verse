"use client";

import { type Actor } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { ActorCard } from "./ActorCard";
import Pagination from "./Pagination";

export default function ActorsCatalogClient({ actors }: { actors: Actor[] }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const ACTORS_PER_PAGE = 9; // Можеш да ставиш 6 или 8 по страна

  // Пресметка за пагинација
  const totalPages = Math.ceil(actors.length / ACTORS_PER_PAGE);
  const indexOfLastActor = currentPage * ACTORS_PER_PAGE;
  const indexOfFirstActor = indexOfLastActor - ACTORS_PER_PAGE;
  const paginatedActors = actors.slice(indexOfFirstActor, indexOfLastActor);

  return (
    <div className="stack-md">
      <div className="grid-cards">
        {paginatedActors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>

      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}