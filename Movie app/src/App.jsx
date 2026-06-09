import { useState } from "react"

function App() {

  const[search,setSearch] = useState("")
  
  const movies = [
    "Prisoners",
    "The Prestige",
    "Predestination",
    "Interstellar",
    "Inception"
  ]

  return(
    <>
    <h1>Movie App</h1>
    <input placeholder="Search Movie..." onChange={(event)=>setSearch(event.target.value)}/>
    <h2>You Searched for {search}</h2>
    </>
  )
}
export default App