import { Link } from "react-router-dom";

function Navbar() {
    return(
      <nav className="navbar">
        <h1>NOT NETFLIX</h1>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/my-list">MY LIST</Link>
        </div>
      </nav>
    )
}
export default Navbar