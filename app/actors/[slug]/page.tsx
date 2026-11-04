import { notFound } from "next/navigation";
import { getActorBySlug, getMoviesByActor } from "@/lib/data";
import Link from "next/link";
import { MovieCard } from "@/components/MovieCard";



function initials(name: string): string {
    return name
            .split(" ")
            .map((part) => part[0])
            .filter(Boolean)
            .slice(0, 2)
            .join("")
            .toUpperCase()
}


export default async function ActorDetailPage({
    params
} : {
    params: Promise<{slug: string}>;
}) {

    const {slug} = await params;
    const actor = getActorBySlug(slug);

    if(!actor) notFound();


    // Ги земаме филмовите во кои глуми овој актер
    const actorMovies = getMoviesByActor(actor.slug);

    return (
        <section className="pad-section">
            <div className="container">
                <nav className="back-nav">
                    <Link href="/actors">  Back to actors</Link>
                </nav>

                <div className="profile-hero">
                    {actor.imageUrl ? (
                        <img
                        src={actor.imageUrl}
                        alt={actor.name}
                        className="avatar-img-lg"
                        />
                    ) : (
                        <div className="avatar avatar-lg">{initials(actor.name)}</div>
                    )}
                    
                    
                    
                    <div className="profile-body">
                       <p className="eyebrow">{actor.specialty}</p>
                       <h1 className="title-display">{actor.name}</h1>
                       <p className="text-muted-sm max-prose">{actor.bio}</p>
                       <p className="text-muted-sm max-prose">{actor.birthDate}</p>

                    </div>
                </div>

                <div className="courses-below">
                    <h2 className="title-section">
                        {/* Од курсевите од тој инструктор, го зема само неговото First Name */}
                        Movies by {actor.name.split(" ") [0]} 
                    </h2>


                    {/* Ги листаме taughtCourses, ако воопшто ги има */}
                    {actorMovies.length === 0 ? (

                       <span>No movies found for this actor.</span> 

                    ) : (

                        <div className="grid-cards mt-sm">
                            {actorMovies.map((movie) => (

                                <MovieCard 
                                    key={movie.id}
                                    movie={movie} 
                                    actorName={actor.name}
                                />
                            ))}
                            
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}