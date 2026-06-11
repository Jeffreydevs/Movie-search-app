function SearchBar({ search, setSearch, setQuery, query, setLoading }) {
  const submitSearch = () => {
    if (search && search !== query) {
      setLoading(true)
      setQuery(search)
    }
  }

  return (
    <div className="search-container">
      <input
        placeholder="Search Movie..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") submitSearch()
        }}
      />

      <button onClick={submitSearch}>Search</button>
    </div>
  )
}

export default SearchBar
