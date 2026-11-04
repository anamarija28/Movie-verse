"use client";

import {type Movie, actors, MovieRatingLevel, MovieDuration} from "@/lib/data";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation"; // 1. Додадено за читање на ?page=
import { MovieCard } from "./MovieCard";
import Pagination from "./Pagination";


function actorNameForMovie(movie: Movie): string {
    return (
        actors.find(
            (a) => a.slug === movie.slug) 
                ?.name ?? "Unknown actor"
    )
}

export default function MoviesCatalogClient({
    movies, // Овие се props (влезни аргументи) што оваа компонента ги прима од својата родител-компонента
    genres,
    years,
    ratings,
    durations

}: {
    movies: Movie[];
    genres: string[];
    years: number[];
    ratings: MovieRatingLevel[];
    durations: MovieDuration[];
}) {

    const [query, setQuery] = useState<string>("");
    const [genre, setGenre] = useState<string>("all");
    const [year, setYear] = useState<string>("all");
    const [rating, setRating] = useState<string>("all");
    const [duration, setDuration] = useState<string>("all");


    // 1. Логика за пагинација од URL
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const MOVIES_PER_PAGE = 9;


    // 1. Филтрирање на филмовите според сите 5 критериуми
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        return movies.filter((movie) => {

            //1. Пребарување по наслов или краток опис (пребарувањето да можи да биди и по актер)
            const matchesQuery = 
                q === "" ||
                movie.title.toLowerCase().includes(q) ||
                movie.shortDescription.toLowerCase().includes(q);

            // 2. Жанр
            const matchesGenre = 
                genre === "all" || movie.genre === genre;

            // 3. Година (со конверзија во број)
            const matchesYear = 
                year === "all" || movie.releaseYear === Number(year);

            // 4. Оцена (Споредба според: "8+", "7+", "6+", ...)
            const matchesRating =
                rating === "all" || rating === "All" || 
                (rating === "9+" && movie.rating >= 9) ||
                (rating === "8+" && movie.rating >= 8) ||
                (rating === "7+" && movie.rating >= 7) ||
                (rating === "6+" && movie.rating >= 6);

            // 5. Времетрање во минути
            const matchesDuration = 
                duration === "all" || duration === "All" || 
                (duration === "<90" && movie.durationMinutes < 90) ||
                (duration === "<120" && movie.durationMinutes < 120) ||
                (duration === "<180" && movie.durationMinutes < 180) ||
                (duration === "180+" && movie.durationMinutes >= 180);


            // Сите услови мора да бидат точни за филмот да се прикажи
            return (
                matchesQuery &&
                matchesGenre &&
                matchesYear &&
                matchesRating &&
                matchesDuration
            );
        });
    }, [movies, query, genre, year, rating, duration]);


    // 2. Потоа пресметај вкупни страници според тоа колку филмови се исфилтрирани во моментот
    const totalPages = Math.ceil(filtered.length / MOVIES_PER_PAGE);


        // 3. Сечење на исфилтрираната низа за тековната страница
        const indexOfLastMovie = currentPage * MOVIES_PER_PAGE;
        const indexOfFirstMovie = indexOfLastMovie - MOVIES_PER_PAGE;
        const paginatedMovies = filtered.slice(indexOfFirstMovie, indexOfLastMovie);


    

        // Функција за ресетирање на сите 5 стејта во почетна состојба
        const resetFilters = () => {
            setQuery("");
            setGenre("all");
            setYear("all");
            setRating("all")
            setDuration("all");
        };

        // Се проверува дали барем еден филтер е активен за да се прикажи копчето "Reset Filtes"
        const isFiltering  = 
            query !== "" ||
            genre !== "all" ||
            year !== "all" ||
            rating !== "all" ||
            duration !== "all";
    
    


    return (

    <div className="stack-md">

        <div className="panel">
            <div className="grid-filters">
                <div className="field">
                    <label htmlFor="movie-search" className="field-label">
                        Search by movie title
                    </label>
                    <input // SEARCH - input
                        id="movie-search"
                        type="text" 
                        className="input"
                        placeholder="e.g. Inception"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        />
                </div>

                <div className="field">
                    <label htmlFor="movie-genre" className="field-label">
                        Movie Genre
                    </label>
                    <select // DROPDOWN - genre
                        id="movie-genre"
                        className="select"
                        onChange={(e) => setGenre(e.target.value)}
                        value={genre}
                        
                        >
                        <option value="all">All</option>
                        {genres.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}

                    </select>
                </div>

                <div className="field">
                    <label htmlFor="movie-year" className="field-label">
                        Year 
                    </label>
                    <select // DROPDOWN - year
                        id="movie-year" 
                        className="select"
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                        >

                            <option value="all">All</option>

                            {years.map((l) => (
                                <option value={l} key={l}>
                                    {l}
                                </option>
                            ))}

                    </select>
                </div>


                <div className="field">
                    <label htmlFor="movie-rating" className="field-label">
                            Rating
                    </label>

                    <select // DROPDOWN - rating
                        id="movie-rating" 
                        className="select"
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        >

                            {/* <option value="all">All</option> */}

                            {ratings.map((l) => (
                                <option value={l} key={l}>
                                    {l}
                                </option>
                            ))}

                    </select>
                </div>


                <div className="field">
                    <label htmlFor="movie-duration" className="field-label">
                            Duration
                    </label>

                    <select // DROPDOWN - duration
                        id="movie-duration" 
                        className="select"
                        onChange={(e) => setDuration(e.target.value)}
                        value={duration}
                        >

                            {/* <option value="all">All</option> */}

                            {durations.map((l) => (
                                <option value={l} key={l}>
                                    {l}
                                </option>
                            ))}

                    </select>
                </div>





            </div>  
                            <div className="filter-bar">
                                {isFiltering ? (
                                    <button className="btn-link" onClick={resetFilters}>Reset filter</button>
                                ) : null}
                            </div>
        </div>



        {/* 4. Тука се мапира `paginatedMovies` наместо `filtered` */}
        <div className="grid-cards">
            {paginatedMovies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    movie={movie} 
                    actorName={actorNameForMovie(movie)}
                />

            ))}

        </div>


        {/* Ovde treba da bidat paginations */}
        {totalPages > 1 && <Pagination totalPages={totalPages} />}

            
    </div>


    )
}