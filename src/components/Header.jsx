import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-name">
          Yomna A.Mohaimen
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link
            to="/#work"
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Work
          </Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
