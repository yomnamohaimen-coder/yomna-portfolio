import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { usePageTitle } from '../usePageTitle'

export default function HomePage() {
  usePageTitle('Yomna A.Mohaimen')

  return (
    <main>
      <section className="hero">
        <img src="/images/portrait.svg" alt="Yomna A.Mohaimen" />
        <p>Hello, I'm Yomna, a product designer based in Cairo, working remotely.</p>
      </section>

      <section id="work" className="work">
        <h2>Work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
