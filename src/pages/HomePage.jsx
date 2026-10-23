import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import photo from '../assets/yomna-hero-4x5.jpg'
import { usePageTitle } from '../usePageTitle'
import './HomePage.css'

export default function HomePage() {
  usePageTitle('Yomna A. Mohaimen')

  return (
    <main className="home-main">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <div className="home-hero-text">
              <h1 id="home-hero-title">
                Yomna A. Mohaimen,
                <br className="home-hero-break" /> product designer
              </h1>
              <p>
                Hello, I'm Yomna, a product designer based in Cairo, working remotely. I came
                to digital design through textiles, fashion and graphic design, so I care
                about craft as much as I care about usability.
              </p>
            </div>
          </div>
          <div className="home-hero-portrait">
            <div className="home-hero-photo">
              <img
                src={photo}
                alt="Yomna A. Mohaimen in a denim jacket, with pink bougainvillea behind her"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="home-work" aria-labelledby="home-work-label">
        <div className="home-work-inner">
          <h2 id="home-work-label" className="home-work-label">
            Selected work
          </h2>
          <div className="home-work-grid">
            {projects.map((project) => (
              <Link key={project.slug} className="home-work-card" to={`/work/${project.slug}`}>
                <div className="home-work-cover" style={{ background: project.tint }}>
                  {project.cover ? (
                    <img src={project.cover} alt="" />
                  ) : (
                    <span className="home-work-placeholder" aria-hidden="true">
                      {project.title}
                    </span>
                  )}
                </div>
                <div className="home-work-copy">
                  <h3 className="home-work-title">{project.title}</h3>
                  <p className="home-work-highlight">{project.highlight}</p>
                  <span className="home-work-cta">
                    Read case study
                    <span className="home-work-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
