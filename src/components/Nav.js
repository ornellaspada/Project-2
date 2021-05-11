import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/form" className="navbar-item">
            Calculate my Footprint
          </Link>
          <Link to="/estimates" className="navbar-item">
            Results and Donate
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav