import MovieCard from "./MovieCard"

function MovieGrid({movies,setSelectedMovie,favorites,setFavorites}){
    return(
       <div className="movie-grid">
        {
          movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} setSelectedMovie={setSelectedMovie} favorites={favorites} setFavorites={setFavorites}/>
          ))
        }
      </div>
    )
}
export default MovieGrid