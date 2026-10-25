import { Link, useParams } from 'react-router-dom'
import BlockRenderer from '../components/blocks/BlockRenderer'
import CaseStudyOpening from '../components/CaseStudyOpening'
import { getNextProject, getProjectBySlug } from '../data/projects'
import { usePageTitle } from '../usePageTitle'
import NotFoundPage from './NotFoundPage'
import './CaseStudyPage.css'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const nextProject = project ? getNextProject(project.slug) : null

  usePageTitle(
    project ? `${project.title} — Yomna A.Mohaimen` : 'Page not found — Yomna A.Mohaimen',
  )

  if (!project) return <NotFoundPage />

  return (
    // --case-tint lets placeholders and the opening use this project's tint.
    <main className="case-study" style={{ '--case-tint': project.tint }}>
      <CaseStudyOpening project={project} />

      <div className="case-body">
        <BlockRenderer blocks={project.blocks} />

        {project.prototypeUrl || nextProject ? (
          <nav className="case-end" aria-label="Project">
            {project.prototypeUrl ? (
              <a
                className="case-link"
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel ?? 'View the prototype'} <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {nextProject ? (
              <Link className="case-next" to={`/work/${nextProject.slug}`}>
                <span className="case-next-label">Next project</span>
                <span className="case-next-title">
                  {nextProject.title} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </main>
  )
}
