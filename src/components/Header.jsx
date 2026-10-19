import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="top-nav-logo" aria-label="Yomna A. Mohaimen">
          Y
        </Link>
        <nav className="top-nav-links" aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
