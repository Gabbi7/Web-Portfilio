export interface Project {
  number: string
  title: string
  description: string
  type?: string
  fullTitle?: string
  context?: string
  role?: string
  contribution?: string
  teamStack?: string[]
  features?: string[]
  technologies: string[]
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
    type: 'Web + Mobile Application',
    context: 'FEU Institute of Technology Capstone Project',
    role: 'Team Member / Developer',
    contribution: 'Contribution details to be added',
    description: 'HairLink is a web and mobile hair donation and wig management system developed for Strand Up for Cancer. The platform centralizes hair donation submission, verification, inventory tracking, wig production monitoring, recipient requests, rule-based wig matching, and engagement features, with AR-assisted hairstyle visualization for recipients.',
    teamStack: ['JavaScript', 'Python', 'React', 'Flutter', 'Google ML Kit Face Detection', 'MySQL', 'Firebase', 'Git', 'GitHub', 'Visual Studio Code'],
    features: ['Hair Donation Submission & Tracking', 'Hair Verification', 'Inventory & Stock Management', 'Wig Production Monitoring', 'Wig–Recipient Matching', 'Recipient Request & Distribution Tracking', 'Reports', 'AR-Assisted Hairstyle Visualization', 'Community Support', 'Engagement & Notifications'],
    technologies: [],
    mobileImage: '/hairlink-mobile-home.png',
    mobileImageSize: { width: 448, height: 792 },
    githubUrl: '',
    liveUrl: '',
    year: '2026',
    status: 'CAPSTONE',
  },
]
