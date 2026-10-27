import CvButtons from '../components/CvButtons'
import { usePageTitle } from '../usePageTitle'
import './LegacyPage.css'

const skills = [
  'Product design',
  'User research',
  'Prototyping',
  'Usability testing',
  'Figma',
  'Amplitude',
]

export default function AboutPage() {
  usePageTitle('About — Yomna Abdel-Mohaimen')

  return (
    <main className="page">
      <h1>About</h1>
      <p>
        Placeholder bio. Yomna is a product designer in Cairo who works with teams remotely.
        This paragraph will later tell your story, how you work, and what you care about.
      </p>
      <h2>Skills and tools</h2>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <CvButtons />
    </main>
  )
}
