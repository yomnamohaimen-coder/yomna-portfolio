import { Link } from 'react-router-dom'
import { usePageTitle } from '../usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page not found — Yomna A.Mohaimen')

  return (
    <main className="page">
      <h1>Page not found</h1>
      <p>That page does not exist.</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </main>
  )
}
