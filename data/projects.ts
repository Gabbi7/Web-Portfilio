export interface Project {
  number: string
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl: string
  year: string
  status: string
}

// Replace these clearly marked records with Gavin's real projects.
export const projects: Project[] = [
  { number: '01', title: 'BuildSphere', description: 'BuildSphere is a web-based project management platform designed to help construction teams manage projects, track progress, and organize project information in one place.', problem: 'Managing construction projects can involve multiple tasks, updates, and pieces of information that need to stay organized.', solution: 'BuildSphere provides a centralized web application for organizing project information, monitoring progress, and keeping important project activities in one place.', technologies: [], image: '/construction-dashboard.png', githubUrl: '', liveUrl: 'https://buildsphere.cityscapebuildersinc.com/login', year: 'TBD', status: 'LIVE' },
  { number: '02', title: 'Project placeholder', description: 'Add a short description of a real project here.', problem: 'What problem did this project solve?', solution: 'How did the project solve it?', technologies: ['TECHNOLOGIES_TBD'], image: '/project-placeholder.svg', githubUrl: '', liveUrl: '', year: 'YEAR_TBD', status: 'DRAFT' },
  { number: '03', title: 'Project placeholder', description: 'Add a short description of a real project here.', problem: 'What problem did this project solve?', solution: 'How did the project solve it?', technologies: ['TECHNOLOGIES_TBD'], image: '/project-placeholder.svg', githubUrl: '', liveUrl: '', year: 'YEAR_TBD', status: 'DRAFT' },
]
