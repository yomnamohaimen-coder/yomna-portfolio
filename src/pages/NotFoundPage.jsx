import { Link } from 'react-router-dom'
import { usePageTitle } from '../usePageTitle'
import './LegacyPage.css'

export default function NotFoundPage() {
  usePageTitle('Page not found — Yomna Abdel-Mohaimen')

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
