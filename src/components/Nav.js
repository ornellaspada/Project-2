import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/form" className="navbar-item">
            Calculate my Footprint
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav