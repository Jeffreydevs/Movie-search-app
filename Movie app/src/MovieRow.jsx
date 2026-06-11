import MovieCard from "./MovieCard"

function MovieRow({ title, movies, setSelectedMovie, favorites, setFavorites }) {
  if (movies.length === 0) return null

  return (
    <section className="movie-row">
      <h2>{title}</h2>

      <div className="movie-row-posters">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    </section>
  )
}

export default MovieRow
