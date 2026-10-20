import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (!target) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <Header />
      <Outlet />
      {pathname !== '/' && <Footer />}
    </>
  )
}
