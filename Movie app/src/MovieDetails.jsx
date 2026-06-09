import {useEffect, useState } from "react"

function MovieDetails({ selectedMovie }) {
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
        return null
    }

return (
  <div className="movie-details">
    <h2>{movieInfo.Title}</h2>

    <p>Year: {movieInfo.Year}</p>

    <p>Genre: {movieInfo.Genre}</p>

    <p>Director: {movieInfo.Director}</p>

    <p>IMDb Rating: {movieInfo.imdbRating}</p>
  </div>
)
}

export default MovieDetails