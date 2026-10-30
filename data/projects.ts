export interface Project {
  number: string
  title: string
  description: string
  problem?: string
  solution?: string
  type?: string
  technologies: string[]
  image: string
  mobileImage?: string
  githubUrl: string
  liveUrl: string
  year: string
  status: string
}

// Replace these clearly marked records with Gavin's real projects.
export const projects: Project[] = [
  { number: '01', title: 'BuildSphere', description: 'BuildSphere is a web and mobile project management platform designed to help construction teams manage projects, track progress, and organize project information in one place.', technologies: [], image: '/construction-dashboard.png', mobileImage: '/buildsphere-mobile-home.png', githubUrl: '', liveUrl: 'https://buildsphere.cityscapebuildersinc.com/login', year: 'TBD', status: 'LIVE' },
  { number: '02', title: 'CoCoir PH', type: 'E-Commerce / Web Application', description: 'CoCoir PH is a modern e-commerce website focused on showcasing and selling natural coconut coir products for construction, gardening, and everyday use.', problem: 'Customers need a simple way to discover, explore, and purchase sustainable coconut coir products online.', solution: 'CoCoir PH provides a focused online shopping experience where customers can browse products, learn about their uses, and access the store from a modern web interface.', technologies: [], image: '/cocoir-ph-home.png', githubUrl: '', liveUrl: '', year: 'TBD', status: 'LIVE' },
]
