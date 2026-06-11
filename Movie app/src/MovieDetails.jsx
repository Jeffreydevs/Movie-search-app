import { useEffect, useState } from "react"

function MovieDetails({ selectedMovie, setSelectedMovie, favorites, setFavorites }) {
  const [movieInfo, setMovieInfo] = useState(null)

  useEffect(() => {
    if (!selectedMovie) return

    fetch(`https://www.omdbapi.com/?apikey=ea1d2efb&i=${selectedMovie.imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieInfo(data)
      })
      .catch(() => {
        setMovieInfo({
          ...selectedMovie,
          Plot: "Movie details could not be loaded right now.",
          Genre: "Unavailable",
          Director: "Unavailable",
          Actors: "Unavailable",
          Runtime: "N/A",
          Rated: "N/A",
          imdbRating: "N/A",
        })
      })
  }, [selectedMovie])

  if (!selectedMovie) return null

  if (!movieInfo || movieInfo.imdbID !== selectedMovie.imdbID) {
    return (
      <div className="movie-modal-backdrop">
        <div className="movie-modal loading-modal">
          <h2>Loading movie details...</h2>
        </div>
      </div>
    )
  }

  const isFavorite = favorites.some((movie) => movie.imdbID === movieInfo.imdbID)

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((movie) => movie.imdbID !== movieInfo.imdbID))
      return
    }

    setFavorites([
      ...favorites,
      {
        imdbID: movieInfo.imdbID,
        Title: movieInfo.Title,
        Year: movieInfo.Year,
        Poster: movieInfo.Poster,
      },
    ])
  }

  return (
    <div className="movie-modal-backdrop" onClick={() => setSelectedMovie(null)}>
      <div className="movie-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={() => setSelectedMovie(null)}>
          X
        </button>

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

          <div className="movie-meta">
            <span>{movieInfo.Year}</span>
            <span>{movieInfo.Runtime}</span>
            <span>{movieInfo.Rated}</span>
            <span>IMDb {movieInfo.imdbRating}</span>
          </div>

          <p className="movie-plot">{movieInfo.Plot}</p>

          <div className="modal-actions">
            <button className="play-button">Play</button>
            <button className="info-button" onClick={toggleFavorite}>
              {isFavorite ? "Remove from My List" : "Add to My List"}
            </button>
          </div>

          <p><strong>Genre:</strong> {movieInfo.Genre}</p>
          <p><strong>Director:</strong> {movieInfo.Director}</p>
          <p><strong>Actors:</strong> {movieInfo.Actors}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
