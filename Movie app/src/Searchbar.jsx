function SearchBar({search,setSearch,setQuery,query,setLoading}){
    return(
      <div>
         <input 
         placeholder="Search Movie..." 
         onChange={(event)=>setSearch(event.target.value)}
         />

         <button onClick={() => {
          if (search && search !== query) {
            setLoading(true)
            setQuery(search)
          }
         }}>Search</button>
      </div>  
    )
}
export default SearchBar
