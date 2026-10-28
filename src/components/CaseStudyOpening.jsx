import { Link } from 'react-router-dom'
import CaseImage from './blocks/CaseImage'

const metaLabels = [
  ['type', 'Type'],
  ['role', 'Role'],
  ['year', 'Year'],
  ['tools', 'Tools'],
]

// The top of a case study: a tint block with title, summary and meta row,
// then the large hero image.
export default function CaseStudyOpening({ project }) {
  const { title, summary, meta = {}, heroImage } = project

  return (
    <header className="case-opening">
      <div className="case-opening-tint">
        <div className="case-opening-inner">
          <Link className="case-link case-back" to="/#work">
            <span aria-hidden="true">←</span> Back to work
          </Link>
          <h1>{title}</h1>
          {summary ? <p className="case-summary">{summary}</p> : null}
          <dl className="case-meta">
            {metaLabels.map(([key, label]) => {
              const value = Array.isArray(meta[key]) ? meta[key].join(', ') : meta[key]
              if (!value) return null
              return (
                <div key={key}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
      <div className="case-hero">
        <CaseImage image={heroImage ?? { alt: `${title} final design` }} shape={heroImage?.shape} />
      </div>
    </header>
  )
}
