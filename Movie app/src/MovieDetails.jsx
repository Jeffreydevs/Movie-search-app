import {useEffect, useState } from "react"

function MovieDetails({ selectedMovie, setSelectedMovie }) {
const [movieInfo, setMovieInfo] = useState(null)
  useEffect(() => {
    if (!selectedMovie) return

    fetch(
      `https://www.omdbapi.com/?apikey=ea1d2efb&i=${selectedMovie.imdbID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMovieInfo(data)
      })
    }, [selectedMovie])

    if (!selectedMovie) { return null}

    if (!movieInfo) { return 
        <div className="movie-modal-backdrop"> 
          <div className="movie-modal">
          <h2>Loading movie details...</h2>
          </div>
        </div>}

return (
  <div className="movie-modal-backdrop" onClick={() => setSelectedMovie(null)}>
    <div className="movie-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={() => setSelectedMovie(null)}> ✕ </button>
        <img
            src={
              movieInfo.Poster !== "N/A"
                ? movieInfo.Poster
                : "https://placehold.co/300x450?text=No+Poster"
            }
            alt={movieInfo.Title}
        />
        <div className="movie-modal-info">
          <h2>{movieInfo.Title}</h2>

          <p><strong>Year:</strong> {movieInfo.Year}</p>

          <p><strong>Genre:</strong> {movieInfo.Genre}</p>

          <p><strong>Director:</strong> {movieInfo.Director}</p>

          <p><strong>IMDb Rating:</strong> {movieInfo.imdbRating}</p>

          <p><strong>Plot:</strong> {movieInfo.Plot}</p>
        </div>
    </div>
  </div>
)
}

export default MovieDetails