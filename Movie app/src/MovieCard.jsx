function MovieCard({movie, setSelectedMovie}){
  return(  
        <div className="movie-card" onClick={() => setSelectedMovie(movie)} >
            <img
            src= {movie.Poster !== "N/A"
            ? movie.Poster
            : "https://placehold.co/300x450?text=No+Poster"
            }
            alt={movie.Title}
            onError={(e) => {
            e.target.src = "https://placehold.co/300x450?text=No+Poster"}}
            />
            <h3 >{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
   )
}
export default MovieCard