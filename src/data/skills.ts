export type SkillIconName = 'cplusplus' | 'javascript' | 'php' | 'python' | 'typescript' | 'nextjs' | 'react' | 'expo' | 'express' | 'html5' | 'css3' | 'tailwind' | 'git' | 'github' | 'mysql' | 'mongodb' | 'supabase' | 'appwrite' | 'api'

export interface SkillData {
  name: string
  icon: SkillIconName
}

export interface SkillCategoryData {
  title: string
  skills: SkillData[]
}

export const skillCategories: SkillCategoryData[] = [
  { title: 'Languages', skills: [{ name: 'C++', icon: 'cplusplus' }, { name: 'JavaScript', icon: 'javascript' }, { name: 'PHP', icon: 'php' }, { name: 'Python', icon: 'python' }, { name: 'TypeScript', icon: 'typescript' }] },
  { title: 'Frameworks & Mobile', skills: [{ name: 'Next.js', icon: 'nextjs' }, { name: 'React', icon: 'react' }, { name: 'React Native', icon: 'react' }, { name: 'Expo', icon: 'expo' }, { name: 'Express.js', icon: 'express' }] },
  { title: 'Web & Styling', skills: [{ name: 'HTML', icon: 'html5' }, { name: 'CSS', icon: 'css3' }, { name: 'Tailwind CSS', icon: 'tailwind' }] },
  { title: 'Backend, Data & Tools', skills: [{ name: 'MySQL', icon: 'mysql' }, { name: 'MongoDB', icon: 'mongodb' }, { name: 'Supabase', icon: 'supabase' }, { name: 'Appwrite', icon: 'appwrite' }, { name: 'REST APIs', icon: 'api' }, { name: 'Git', icon: 'git' }, { name: 'GitHub', icon: 'github' }] },
]
