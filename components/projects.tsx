import { projects } from '@/data/projects'
import { ProjectShowcase } from './project-showcase'

export function Projects() {
  return <div className="projects-wrap"><div className="projects-intro"><h2>Selected <span>Work</span></h2><p>Project details will be added here as Gavin&apos;s real work is documented.</p></div><div className="project-list">{projects.map((project, index) => <ProjectShowcase key={project.number} project={project} index={index} />)}</div></div>
}
