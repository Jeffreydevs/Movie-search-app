import {useEffect, useState } from "react"
import "./App.css"
import SearchBar from "./Searchbar"
import FavouriteList from "./FavouriteList"
import MovieDetails from "./MovieDetails"
import Navbar from "./Navbar"
import HeroBanner from "./HeroBanner"
import {Routes, Route } from "react-router-dom"
import MovieRow from "./MovieRow"

function App() {

  const [search,setSearch] = useState("")
  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState("batman")
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favorites, setFavorites] = useState(() => { const savedFavorites = localStorage.getItem("favorites") 
  return savedFavorites ? JSON.parse(savedFavorites) : []
  })
  const [trendingMovies, setTrendingMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [fantasyMovies, setFantasyMovies] = useState([])

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
     setError(data.Error || "No Movies Found")
    }
     setLoading(false)        
    })
    .catch(() => {
      setMovies([])
      setError("Something went wrong")
      setLoading(false)
    })
    }, [query])

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=ea1d2efb&s=batman`)
  .then((res) => res.json())
  .then((data) => {
    if (data.Search) setTrendingMovies(data.Search)
  })
  }, [])

  useEffect(() => {
  fetch(`https://www.omdbapi.com/?apikey=ea1d2efb&s=marvel`)
  .then((res) => res.json())
  .then((data) => {
    if (data.Search) setActionMovies(data.Search)
  })
  }, [])

  useEffect(() => {
  fetch(`https://www.omdbapi.com/?apikey=ea1d2efb&s=harry potter`)
  .then((res) => res.json())
  .then((data) => {
    if (data.Search) setFantasyMovies(data.Search)
  })
  }, [])


  useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])
  
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

              <MovieDetails
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
                favorites={favorites}
                setFavorites={setFavorites}
              />

              <MovieRow title="Search Results" movies={movies} setSelectedMovie={setSelectedMovie} favorites={favorites} setFavorites={setFavorites} />

              <MovieRow title="Trending Now" movies={trendingMovies} setSelectedMovie={setSelectedMovie} favorites={favorites} setFavorites={setFavorites} />

              <MovieRow title="Action Movies" movies={actionMovies} setSelectedMovie={setSelectedMovie} favorites={favorites} setFavorites={setFavorites} />

              <MovieRow title="Fantasy Movies" movies={fantasyMovies} setSelectedMovie={setSelectedMovie} favorites={favorites} setFavorites={setFavorites} />
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
