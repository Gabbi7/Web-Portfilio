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
  { number: '01', title: 'Construction', description: 'Add a short description of a real project here.', problem: 'What problem did this project solve?', solution: 'How did the project solve it?', technologies: ['TECHNOLOGIES_TBD'], image: '/construction-dashboard.png', githubUrl: '', liveUrl: '', year: 'YEAR_TBD', status: 'DRAFT' },
  { number: '02', title: 'Project placeholder', description: 'Add a short description of a real project here.', problem: 'What problem did this project solve?', solution: 'How did the project solve it?', technologies: ['TECHNOLOGIES_TBD'], image: '/project-placeholder.svg', githubUrl: '', liveUrl: '', year: 'YEAR_TBD', status: 'DRAFT' },
  { number: '03', title: 'Project placeholder', description: 'Add a short description of a real project here.', problem: 'What problem did this project solve?', solution: 'How did the project solve it?', technologies: ['TECHNOLOGIES_TBD'], image: '/project-placeholder.svg', githubUrl: '', liveUrl: '', year: 'YEAR_TBD', status: 'DRAFT' },
]
