import { FaCode } from 'react-icons/fa6'
import { SiAppwrite, SiCplusplus, SiCss, SiExpo, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPython, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'
import type { IconType } from 'react-icons'
import type { SkillData, SkillIconName } from '@/src/data/skills'

const icons: Record<SkillIconName, IconType> = {
  cplusplus: SiCplusplus,
  javascript: SiJavascript,
  php: SiPhp,
  python: SiPython,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  react: SiReact,
  expo: SiExpo,
  express: SiExpress,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  git: SiGit,
  github: SiGithub,
  mysql: SiMysql,
  mongodb: SiMongodb,
  supabase: SiSupabase,
  appwrite: SiAppwrite,
  api: FaCode,
}

const colors: Record<SkillIconName, string> = {
  cplusplus: '#00599C', javascript: '#F7DF1E', php: '#777BB4', python: '#3776AB', typescript: '#3178C6',
  nextjs: '#102630', react: '#61DAFB', expo: '#102630', express: '#102630', html5: '#E34F26', css3: '#1572B6',
  tailwind: '#06B6D4', git: '#F05032', github: '#181717', mysql: '#4479A1', mongodb: '#47A248', supabase: '#3ECF8E', appwrite: '#FD366E', api: '#209AC8',
}

export function SkillChip({ skill }: { skill: SkillData }) {
  const Icon = icons[skill.icon]
  return <li className="skill-chip inline-flex max-w-full items-center gap-2 border border-[#CFE1E8] bg-[#F4FAFC] px-3 py-2.5 font-mono text-sm leading-5 text-[#102630] motion-safe:transition-colors motion-safe:duration-200 hover:border-[#209AC8] hover:text-[#16769A]"><Icon className="skill-icon size-4 shrink-0" style={{ color: colors[skill.icon] }} aria-hidden="true" /><span className="break-words">{skill.name}</span><span className="skill-arrow" aria-hidden="true">↗</span></li>
}
