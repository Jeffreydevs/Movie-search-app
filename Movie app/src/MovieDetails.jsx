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

    if (!selectedMovie) {
        return null
    }
        if (!movieInfo) {
        return <h2>Loading movie details...</h2>
    }

return (
  <div className="movie-details">
    <button onClick={() => setSelectedMovie(null)}>Close</button>
    <img
        src={
          movieInfo.Poster !== "N/A"
            ? movieInfo.Poster
            : "https://placehold.co/300x450?text=No+Poster"
        }
        alt={movieInfo.Title}
        width="180"
    />
    <h2>{movieInfo.Title}</h2>

    <p>Year: {movieInfo.Year}</p>

    <p>Genre: {movieInfo.Genre}</p>

    <p>Director: {movieInfo.Director}</p>

    <p>IMDb Rating: {movieInfo.imdbRating}</p>

    <p>Plot: {movieInfo.Plot}</p>
  </div>
)
}

export default MovieDetails