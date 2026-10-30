export interface Project {
  number: string
  title: string
  description: string
  type?: string
  fullTitle?: string
  context?: string
  role?: string
  technologies?: string[]
  image?: string
  mobileImage?: string
  mobileImageSize?: { width: number; height: number }
  githubUrl: string
  liveUrl: string
  year: string
  status: string
}

// Replace these clearly marked records with Gavin's real projects.
export const projects: Project[] = [
  { number: '01', title: 'BuildSphere', description: 'BuildSphere is a web and mobile project management platform designed to help construction teams manage projects, track progress, and organize project information in one place.', technologies: [], image: '/construction-dashboard.png', mobileImage: '/buildsphere-mobile-home.png', githubUrl: '', liveUrl: 'https://buildsphere.cityscapebuildersinc.com/login', year: 'TBD', status: 'LIVE' },
  { number: '02', title: 'CoCoir PH', type: 'E-Commerce / Web Application', description: 'CoCoir PH is a modern e-commerce website focused on showcasing and selling natural coconut coir products for construction, gardening, and everyday use.', technologies: [], image: '/cocoir-ph-home.png', githubUrl: '', liveUrl: '', year: 'TBD', status: 'LIVE' },
  {
    number: '03',
    title: 'HairLink',
    fullTitle: 'HairLink: A Hair Donation and Wig Management System with Rule-Based Wig–Recipient Matching and AR-Assisted Hairstyle Visualization for Strand Up for Cancer',
    type: 'Mobile Application',
    context: 'FEU Institute of Technology Capstone Project',
    role: 'Team Member / Developer',
    description: 'HairLink is a mobile hair donation and wig management application developed as a team project for Strand Up for Cancer. It supports hair donation, wig management, recipient requests, and AR-assisted hairstyle visualization.',
    mobileImage: '/hairlink-mobile-home.png',
    mobileImageSize: { width: 448, height: 792 },
    githubUrl: '',
    liveUrl: '',
    year: '2026',
    status: 'CAPSTONE',
  },
]
