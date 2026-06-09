function MovieCard({movie, setSelectedMovie, favorites, setFavorites}){
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
            <button
                onClick={(e) => {
                e.stopPropagation()
                if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
                setFavorites([...favorites, movie])
                }
                }}>
                ⭐ Favorite
            </button>
        </div>
   )
}
export default MovieCard