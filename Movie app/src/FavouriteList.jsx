import { jsx } from "react/jsx-runtime";

function FavouriteList({favorites, setFavorites}) {
    return(
        <div>
            <h2>⭐ My Favourite List</h2>
            {favorites.length === 0 ? (
        <   p>No favorites yet</p>
            )  : (
            favorites.map((movie) => (
            <div key={movie.imdbID}>
                <h3> {movie.Title}</h3>
                <button onClick={() => setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID))}>
                Remove
                </button>
            </div>   
        ))
      )}
        </div>
    )
}
export default FavouriteList