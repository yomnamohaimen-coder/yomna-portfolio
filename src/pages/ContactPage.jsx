import CvButtons from '../components/CvButtons'
import { usePageTitle } from '../usePageTitle'

export default function ContactPage() {
  usePageTitle('Contact — Yomna A.Mohaimen')

  return (
    <main className="page">
      <h1>Contact</h1>
      <p>Placeholder line. The best way to reach Yomna is by email or LinkedIn.</p>
      <ul className="contact-list">
        <li>
          <a href="mailto:yomna.mohaimen@gmail.com">yomna.mohaimen@gmail.com</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yomna-abdel-mohaimen-477aa6176/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <CvButtons />
    </main>
  )
}
