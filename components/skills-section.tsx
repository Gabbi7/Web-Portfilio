import { skillCategories } from '@/src/data/skills'
import { SkillCategory } from './skill-category'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section container">
      <div className="flex items-center gap-3.5 font-mono text-xs leading-5">
        <span className="text-[#16769A]">03 —</span>
        <h2 id="skills-heading" className="m-0 text-xs font-normal text-[#102630]">Skills</h2>
        <span aria-hidden="true" className="ml-2.5 h-px flex-1 bg-[#CFE1E8]" />
      </div>
      <div className="mb-8 mt-11 flex flex-col gap-6 md:mb-12 md:mt-16 md:flex-row md:items-end md:justify-between md:gap-12">
        <p className="m-0 text-[clamp(36px,5vw,58px)] font-medium leading-none tracking-[-0.08em] text-[#102630]">
          Tools for making<br /><span className="text-[#209AC8]">useful things.</span>
        </p>
        <p className="m-0 max-w-72 text-sm leading-7 text-[#5F7480]">Technologies and tools I use to build web and mobile applications.</p>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-px overflow-hidden border border-[#CFE1E8] bg-[#CFE1E8] md:grid-cols-2">
        {skillCategories.map((category, index) => <SkillCategory key={category.title} category={category} index={index} />)}
      </div>
    </section>
  )
}
