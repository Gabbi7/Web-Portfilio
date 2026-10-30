import Image from 'next/image'
import { Code2, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project project-${index % 2 === 0 ? 'cyan' : 'blue'} project-copy-left`}>
      <div className="project-copy">
        <div className="project-meta"><span>PROJECT_{project.number}</span><span>{project.type ?? project.status}</span></div>
        <h3>{project.title}</h3>
        {project.fullTitle && <p className="project-full-title">{project.fullTitle}</p>}
        {project.context && <p className="project-context">{project.context} <span>·</span> {project.role}</p>}
        <p>{project.description}</p>
        {project.contribution && <div className="project-contribution"><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div>}
        {project.teamStack ? (
          <div className="project-detail-group"><span>TEAM STACK</span><div className="stack">{project.teamStack.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
        ) : (
          <div className="stack">{project.technologies.length > 0
            ? project.technologies.map((technology) => <span key={technology}>{technology}</span>)
            : <span className="project-tech-placeholder">Technologies: To be provided</span>}</div>
        )}
        {project.features && <div className="project-detail-group"><span>PROJECT FEATURES</span><div className="project-feature-list">{project.features.map((feature) => <span key={feature}>{feature}</span>)}</div></div>}
        <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink /></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Code2 /></a>}
        </div>
      </div>
      <div className={project.mobileImage && project.image ? 'project-preview project-preview-dual' : project.mobileImage ? 'project-preview project-preview-mobile-only' : 'project-preview'}>
        <div className="preview-top"><span><i /><i /><i /></span><span>preview / project-{project.number}</span></div>
        <div className="project-preview-media">
          {project.image && <figure className="project-web-preview">
            {project.mobileImage && <figcaption>WEB APP</figcaption>}
            <div className="preview-image">
                <Image
                  src={project.image}
                  alt={`${project.title} web app screenshot`}
                  fill
                  sizes="(max-width: 800px) 100vw, 55vw"
                  style={{ objectFit: 'contain' }}
                />
            </div>
          </figure>}
          {project.mobileImage && (
            <figure className="project-mobile-preview">
              <figcaption>MOBILE APP</figcaption>
              <div className="project-mobile-screen">
                <Image src={project.mobileImage} alt={`${project.title} mobile Home screen`} width={project.mobileImageSize?.width ?? 1179} height={project.mobileImageSize?.height ?? 2556} sizes="(max-width: 800px) 240px, 145px" />
              </div>
            </figure>
          )}
        </div>
        <div className="preview-info"><span>STATUS: {project.status}</span><span>YEAR: {project.year}</span></div>
      </div>
    </article>
  )
}
