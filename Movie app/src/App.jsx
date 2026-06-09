import {useEffect, useState } from "react"
import "./App.css"

function App() {

  const[search,setSearch] = useState("")
  const[movies,setMovies] = useState([])
  const[query, setQuery] = useState("batman")

  useEffect(
    () => {
    fetch(`https://www.omdbapi.com/?apikey=ea1d2efb&s=${query}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)

    if (data.Search) {
    setMovies(data.Search)
    } else {
    setMovies([])
    }        
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

      <div className="movie-grid">
        {
          filteredMovies.length === 0
          ? <h2>No Movies Found</h2>
          : filteredMovies.map((movie) => (
            <div className="movie-card"
                key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                width="150"
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