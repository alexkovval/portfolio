import { Gallery } from '../components/Gallery'
import { Reveal } from '../components/Reveal'
import { projects, type Project } from '../data/projects'
import { Showcase } from './Showcase'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project">
      <div className="project-head">
        <Reveal className="project-num">{String(index + 1).padStart(2, '0')}</Reveal>
        <Reveal delay={0.1}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2} className="project-links">
          {project.link && (
            <a className="btn btn-fill" href={project.link.href} target="_blank" rel="noopener noreferrer">
              {project.link.label} <i className="ti ti-arrow-up-right" />
            </a>
          )}
          {project.badge && (
            <span className="btn btn-static">
              <i className={`ti ${project.badge.icon}`} />
              {project.badge.label}
            </span>
          )}
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <Gallery galleries={project.galleries} projectId={project.id} />
      </Reveal>
    </article>
  )
}

export function Projects() {
  return (
    <section id="work" className="section section-top">
      <Reveal as="p" className="label">02 — Selected work</Reveal>
      <Showcase />
      <Reveal as="h2" className="section-title">
        Pet <span className="serif">projects</span>
      </Reveal>
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </section>
  )
}
