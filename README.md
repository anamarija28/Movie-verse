# MovieVerse

MovieVerse is a movie and actor discovery website built with Next.js. Browse top-rated movies, filter the catalog by genre, year, rating and duration, watch trailers, find where a movie is streaming, and explore actor profiles.

## Features

- **Home page** with a hero banner, a slider of the top 10 highest-rated movies and a slider of featured actors.
- **Movie catalog** (`/movies`) with filters for title, genre, year, rating and duration, plus pagination (9 movies per page).
- **Movie details** (`/movies/[slug]`) with poster, embedded YouTube trailer, description, director, writer, main stars, similar movies (same genre) and links to streaming platforms (Netflix, HBO Max, Apple TV, Prime Video).
- **Actor catalog** (`/actors`) with pagination.
- **Actor profiles** (`/actors/[slug]`) with photo (or initials fallback), specialty, biography, birth date and the movies they appear in.
- **Search** (`/search?q=...`) by movie title or main star, available from the header on every page.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- TypeScript 5
- Tailwind CSS 4 (via PostCSS) and custom CSS in `app/globals.css`
- ESLint 9

There is no database or external API. All data is stored in `lib/data.tsx`.

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone <your-repository-url>
cd movie-verse
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the development server        |
| `npm run build` | Create a production build           |
| `npm run start` | Run the production build            |
| `npm run lint`  | Lint the project with ESLint        |

## Project Structure

```
movie-verse/
├── app/
│   ├── layout.tsx            # Root layout (Header, Footer, background glow)
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   ├── movies/
│   │   ├── page.tsx          # Movie catalog
│   │   └── [slug]/page.tsx   # Movie details
│   ├── actors/
│   │   ├── page.tsx          # Actor catalog
│   │   └── [slug]/page.tsx   # Actor profile
│   ├── search/page.tsx       # Search results
│   └── api/courses/route.ts  # Leftover API route (see Known Issues)
├── components/
│   ├── Header.tsx            # Logo, navigation, search form
│   ├── Footer.tsx
│   ├── MovieCard.tsx
│   ├── ActorCard.tsx
│   ├── MoviesCatalogClient.tsx  # Filters + pagination for movies
│   ├── ActorsCatalogClient.tsx  # Pagination for actors
│   ├── Pagination.tsx        # URL-based pagination (?page=)
│   ├── Badge.tsx
│   └── SectionTitle.tsx
└── lib/
    └── data.tsx              # Types, movie and actor data, helper functions
```

## Data Model

Defined in `lib/data.tsx`:

- **Movie**: `id`, `slug`, `title`, `shortDescription`, `description`, `genre`, `releaseYear`, `rating` (1-10), `duration`, `durationMinutes`, `director`, `writer`, `mainStars`, `castSlugs`, `posterUrl?`, `trailerUrl?`, `watchProviders?`
- **Actor**: `id`, `slug`, `name`, `specialty`, `shortBio`, `bio`, `birthDate`, `imageUrl`

Helper functions: `getAllMovies`, `getMovieBySlug`, `getAllActors`, `getActorBySlug`, `getMoviesByActor`, `getActorsForMovie`, `getMovieGenres`, `getMovieYears`, `getMovieRatings`, `getMovieDurations`, `getTotalPages`, `searchMovies`.

### Adding a movie or an actor

1. Add a new object to the `movies` or `actors` array in `lib/data.tsx` with a unique `id` and `slug`.
2. For movies, list the slugs of the actors in `castSlugs`. Each slug must match an existing actor.
3. The new entry appears automatically in the catalog, search and detail pages.


This project is for educational purposes.
