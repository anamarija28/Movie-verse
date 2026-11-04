import { Suspense } from "react";
import MoviesCatalogClient from "@/components/MoviesCatalogClient";
import { getAllMovies, getMovieGenres, getMovieYears, getMovieRatings, getMovieDurations } from "@/lib/data";
import { SectionTitle } from "@/components/SectionTitle";

export default function MoviesPage() {
    const movies = getAllMovies();
    const genres = getMovieGenres();
    const years = getMovieYears();
    const ratings = getMovieRatings();
    const durations = getMovieDurations();

    return (
        <section className="pad-section">
            <div className="container">
                <div className="stack">
                    <SectionTitle
                        eyebrow="Catalog"
                        title="All Movies"
                        description="Discover movies across all genres."
                    />

                    <Suspense fallback={<div>Loading catalog...</div>}>
                        <MoviesCatalogClient 
                            movies={movies}
                            genres={genres}
                            years={years}
                            ratings={ratings}
                            durations={durations}
                        />
                    </Suspense>
                </div>
            </div>
        </section>

        
    );
}