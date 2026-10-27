import { useEffect } from 'react'
import CvButtons from '../components/CvButtons'
import photo from '../assets/yomna-hero-4x5.jpg'
import { usePageTitle } from '../usePageTitle'
import './AboutPage.css'

const skillGroups = [
  { label: 'Design', skills: ['Product design', 'UI design', 'Prototyping', 'Figma', 'Framer'] },
  { label: 'Research and analytics', skills: ['Behavioral analytics', 'Amplitude'] },
  { label: 'Build with AI', skills: ['Cursor', 'Claude'] },
]

export default function AboutPage() {
  usePageTitle('About — Yomna Abdel-Mohaimen')

  // About is the dark page: switch the whole site (header and footer too) to
  // the dark theme while it is open.
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('theme-dark')
    return () => root.classList.remove('theme-dark')
  }, [])

  return (
    <main className="about">
      <div className="about-inner">
        <div className="about-portrait">
          <img
            src={photo}
            alt="Yomna Abdel-Mohaimen in a denim jacket, with pink bougainvillea behind her"
          />
        </div>
        <div className="about-copy">
          <h1>About</h1>
          <div className="about-bio">
            <p>
              I'm a product designer based in Cairo, working with teams remotely. I started in
              textile engineering and visual design, and it still shapes how I work: I care
              about structure, detail, and things that feel calm and well made.
            </p>
            <p>
              At Sary, a B2B e-commerce platform, I moved from creating content to designing the
              product, and learned to use behavioral data to see where people struggle. Today I
              also design and build my own products, including Sensa, an AI analytics tool I made
              with AI tools.
            </p>
            <p>I'm looking for a product design role on a remote team that cares about craft.</p>
          </div>
          <h2>Skills and tools</h2>
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
