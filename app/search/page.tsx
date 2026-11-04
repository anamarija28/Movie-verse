import { searchMovies } from "@/lib/data";
import { MovieCard } from "@/components/MovieCard"; // Замени го со точната патека до твојата картичка

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const sp = await searchParams;
  const query = sp.q?.trim() || "";

  const filteredMovies = searchMovies(query);

  return (
    <section className="pad-section">
      <div className="container">
        <div className="stack">
          {/* Порака за пребарувањето */}
          <h3>
            {query
                ? filteredMovies.length > 0
                    ? `Found ${filteredMovies.length} results for "${query}"`
                    : `No results for "${query}"`
                : "All Movies"}
          </h3>

          {/* 1. Ако НЕМА пронајдено филмови */}
          {filteredMovies.length === 0 ? (
            <div className="empty-state">
              <p>No movies or actors matched your search.</p>
            </div>
          ) : (
            /* 2. Ако ИМА пронајдено филмови */
            <div className="grid-cards">
              {filteredMovies.map((movie) => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie}
                     
                    />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}