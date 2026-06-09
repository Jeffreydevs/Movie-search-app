import {useEffect, useState } from "react"
import "./App.css"
import SearchBar from "./Searchbar"
import MovieGrid from "./Moviegrid"
import MovieDetails from "./MovieDetails"

function App() {

  const [search,setSearch] = useState("")
  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState("batman")
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)

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

      <SearchBar search={search} setSearch={setSearch} setQuery={setQuery} />

      <h2>You Searched for {search}</h2>

      <h3>Found {filteredMovies.length} movies</h3>

      <MovieDetails selectedMovie={selectedMovie} />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      <MovieGrid movies={filteredMovies} setSelectedMovie={setSelectedMovie} />

   </div>
  )
}
export default App