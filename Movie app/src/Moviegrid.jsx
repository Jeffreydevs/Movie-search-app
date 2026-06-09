import MovieCard from "./MovieCard"

function MovieGrid({movies,setSelectedMovie}){
    return(
       <div className="movie-grid">
        {
          movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} setSelectedMovie={setSelectedMovie} />
          ))
        }
      </div>
    )
}
export default MovieGrid