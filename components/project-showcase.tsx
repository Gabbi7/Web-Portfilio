import Image from 'next/image'
import { Code2, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project project-${index % 2 === 0 ? 'cyan' : 'blue'}`}>
      <div className="project-copy">
        <div className="project-meta"><span>PROJECT_{project.number}</span><span>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.mobileImage && (
          <div className="project-case-notes">
            <p className="problem"><span>THE PROBLEM</span>{project.problem}</p>
            <p className="problem"><span>THE SOLUTION</span>{project.solution}</p>
          </div>
        )}
        <div className="stack">
          {project.technologies.length > 0
            ? project.technologies.map((technology) => <span key={technology}>{technology}</span>)
            : <span className="project-tech-placeholder">Technologies: To be provided</span>}
        </div>
        <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink /></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Code2 /></a>}
        </div>
      </div>
      <div className={project.mobileImage ? 'project-preview project-preview-dual' : 'project-preview'}>
        <div className="preview-top"><span><i /><i /><i /></span><span>preview / project-{project.number}</span></div>
        <div className="project-preview-media">
          <figure className="project-web-preview">
            {project.mobileImage && <figcaption>WEB APP</figcaption>}
            <div className="preview-image">
              <Image
                src={project.image}
                alt={`${project.title} web app screenshot`}
                fill
                sizes="(max-width: 800px) 100vw, 55vw"
                style={{ objectFit: project.image === '/construction-dashboard.png' ? 'contain' : 'cover' }}
              />
            </div>
          </figure>
          {project.mobileImage && (
            <figure className="project-mobile-preview">
              <figcaption>MOBILE APP</figcaption>
              <div className="project-mobile-screen">
                <Image src={project.mobileImage} alt={`${project.title} mobile Home screen`} width={1179} height={2556} sizes="(max-width: 800px) 240px, 145px" />
              </div>
            </figure>
          )}
        </div>
        <div className="preview-info"><span>STATUS: {project.status}</span><span>YEAR: {project.year}</span></div>
      </div>
    </article>
  )
}
