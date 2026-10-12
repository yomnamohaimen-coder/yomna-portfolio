import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <img src={project.coverImage} alt="" />
      <h3>{project.title}</h3>
      <p>{project.tagline}</p>
    </Link>
  )
}
