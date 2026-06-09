import {useEffect, useState } from "react"
import "./App.css"
import SearchBar from "./Searchbar"
import FavouriteList from "./FavouriteList"
import MovieGrid from "./Moviegrid"
import MovieDetails from "./MovieDetails"
import Navbar from "./Navbar"
import HeroBanner from "./HeroBanner"
import {Routes, Route } from "react-router-dom"

function App() {

  const [search,setSearch] = useState("")
  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState("batman")
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favorites, setFavorites] = useState([])

  useEffect(
    () => {
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
    .catch(() => {
      setMovies([])
      setError("Something went wrong")
      setLoading(false)
    })
    }, [query])

  const filteredMovies = movies
  
  return(
    <div className="container">
        <Navbar />

        <Routes>

          <Route path="/" element={
            <>
              <HeroBanner />

              <SearchBar search={search} setSearch={setSearch} setQuery={setQuery} query={query} setLoading={setLoading} />

              {loading && <h2>Loading...</h2>}

              {error && <h2>{error}</h2>}

              <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />

              <MovieGrid movies={filteredMovies} setSelectedMovie={setSelectedMovie} favorites={favorites} setFavorites={setFavorites}/>
            </>
           }
          />
          <Route
            path="/my-list"
            element={<FavouriteList favorites={favorites} setFavorites={setFavorites}/>}
          />
        </Routes>    

    </div>
  )
}
export default App
