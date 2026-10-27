import CvButtons from '../components/CvButtons'
import { usePageTitle } from '../usePageTitle'
import './LegacyPage.css'

const skillGroups = [
  { label: 'Design', skills: ['Product design', 'UI design', 'Prototyping', 'Figma', 'Framer'] },
  { label: 'Research and analytics', skills: ['Behavioral analytics', 'Amplitude'] },
  { label: 'Build with AI', skills: ['Cursor', 'Claude'] },
]

export default function AboutPage() {
  usePageTitle('About — Yomna Abdel-Mohaimen')

  return (
    <main className="page about-page">
      <h1>About</h1>
      <p>
        I'm a product designer based in Cairo, working with teams remotely. I started in
        textile engineering and visual design, and it still shapes how I work: I care about
        structure, detail, and things that feel calm and well made.
      </p>
      <p>
        At Sary, a B2B e-commerce platform, I moved from creating content to designing the
        product, and learned to use behavioral data to see where people struggle. Today I also
        design and build my own products, including Sensa, an AI analytics tool I made with AI
        tools.
      </p>
      <p>I'm looking for a product design role on a remote team that cares about craft.</p>
      <h2>Skills and tools</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="skill-group-label">{group.label}</p>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <CvButtons />
    </main>
  )
}
