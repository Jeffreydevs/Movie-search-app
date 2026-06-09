function HeroBanner() {
    return(
     <div className = "hero-banner"
          style={{backgroundImage:"url('https://image.tmdb.org/t/p/original/your-image.jpg')",}}>
        
         <h1>The Batman</h1>
         <p>Action • Crime • Drama</p>
         <button>▶ Play</button>
         <button>More Info</button>
     </div>
    )
}
export default HeroBanner