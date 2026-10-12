import { Link, useParams } from 'react-router-dom'
import ContentBlocks from '../components/ContentBlocks'
import { sectionHasContent } from '../sectionContent'
import { getNextProject, getProjectBySlug } from '../data/projects'
import { usePageTitle } from '../usePageTitle'
import NotFoundPage from './NotFoundPage'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const nextProject = project ? getNextProject(project.slug) : null

  usePageTitle(
    project ? `${project.title} — Yomna A.Mohaimen` : 'Page not found — Yomna A.Mohaimen',
  )

  if (!project) return <NotFoundPage />

  const visibleSections = project.sections.filter(sectionHasContent)

  return (
    <main className="case-study">
      <header className="case-header">
        <h1>{project.title}</h1>
        <p className="tagline">{project.tagline}</p>
        <dl className="info-row">
          {project.role ? (
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
          ) : null}
          {project.timeline ? (
            <div>
              <dt>Timeline</dt>
              <dd>{project.timeline}</dd>
            </div>
          ) : null}
          {project.tools?.length ? (
            <div>
              <dt>Tools</dt>
              <dd>{project.tools.join(', ')}</dd>
            </div>
          ) : null}
        </dl>
      </header>

      {visibleSections.map((section) => (
        <section key={section.heading} className="case-section">
          <h2>{section.heading}</h2>
          <ContentBlocks blocks={section.blocks} />
        </section>
      ))}

      <nav className="case-nav" aria-label="Project">
        <Link to="/#work">Back to work</Link>
        {nextProject ? (
          <Link to={`/work/${nextProject.slug}`}>Next project: {nextProject.title}</Link>
        ) : null}
      </nav>
    </main>
  )
}
