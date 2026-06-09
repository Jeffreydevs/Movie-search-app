function SearchBar({search,setSearch,setQuery}){
    return(
      <div>
         <input 
         placeholder="Search Movie..." 
         onChange={(event)=>setSearch(event.target.value)}
         />

         <button onClick={() => setQuery(search)}>Search</button>
      </div>  
    )
}
export default SearchBar
