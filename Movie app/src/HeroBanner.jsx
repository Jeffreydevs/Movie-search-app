import batmanImage from "./batman.jpg"

function HeroBanner() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${batmanImage})` }}
    >
      <div className="hero-content">
        <h1>The Batman</h1>
        <p>Action | Crime | Drama</p>
        <div className="hero-actions">
          <button className="play-button">Play</button>
          <button className="info-button">More Info</button>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
