import CvButtons from '../components/CvButtons'
import { usePageTitle } from '../usePageTitle'
import './AboutPage.css'

const skillGroups = [
  { label: 'Design', skills: ['Product design', 'UI design', 'Prototyping', 'Figma', 'Framer'] },
  { label: 'Analytics', skills: ['Amplitude'] },
  { label: 'Build with AI', skills: ['Cursor', 'Claude', 'Claude Code'] },
]

export default function AboutPage() {
  usePageTitle('About — Yomna Abdel-Mohaimen')

  return (
    <main className="about">
      <div className="about-inner">
        <h1>About</h1>
        <div className="about-content">
          <p className="about-lead">
            I'm a product designer based in Cairo, working with teams remotely. I started in
            textile engineering and visual design, and it still shapes how I work: I care about
            structure, detail, and things that feel calm and well made.
          </p>
          <div className="about-bio">
            <p>
              At Sary, a B2B e-commerce platform, I moved from creating content to designing the
              product, and learned to use usage data to see where people struggle. Today I also
              design and build my own products, including Sensa, an AI analytics tool I made with
              AI tools.
            </p>
            <p>I'm looking for a product design role on a remote team that cares about craft.</p>
          </div>
          <h2 className="about-label">Skills and tools</h2>
          <dl className="about-skills">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.skills.join(' · ')}</dd>
              </div>
            ))}
          </dl>
          <CvButtons />
        </div>
      </div>
    </main>
  )
}
