import {useEffect, useState } from "react"
import "./App.css"

function App() {

  const[search,setSearch] = useState("")
  const[movies,setMovies] = useState([])
  const[query, setQuery] = useState("batman")
  const[loading, setLoading] = useState(false)
  const[error,setError] = useState("")

  useEffect(
    () => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=ea1d2efb&s=${query}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)

    if (data.Search) {
    setMovies(data.Search)
    setError("")
    } else {
    setMovies([])
    setError("No Movies Found")
    }
    setLoading(false)        
    })
    }, [query])

  const filteredMovies = movies
  
  return(
    <div className="container">
      <h1>Movie App</h1>

      <h3>Total Movies: {movies.length}</h3>

      <input 
      placeholder="Search Movie..." 
      onChange={(event)=>setSearch(event.target.value)}
      />

      <button onClick={() => setQuery(search)}>Search</button>  

      <h2>You Searched for {search}</h2>

      <h3>Found {filteredMovies.length} movies</h3>

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      <div className="movie-grid">
        {
            filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
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
          ))
        }
      </div>
   </div>
  )
}
export default App