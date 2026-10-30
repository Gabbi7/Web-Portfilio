import type { SkillCategoryData } from '@/src/data/skills'
import { SkillChip } from './skill-chip'

export function SkillCategory({ category, index }: { category: SkillCategoryData; index: number }) {
  return (
    <div className="min-h-[220px] min-w-0 bg-[#F4FAFC] p-6 md:p-8">
      <h3 className="mb-6 flex items-baseline gap-3 font-mono text-sm leading-6 text-[#102630]">
        <span className="text-[#16769A]">{String(index + 1).padStart(2, '0')} —</span>
        {category.title}
      </h3>
      <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0" aria-label={category.title}>
        {category.skills.map((skill) => <SkillChip key={skill.name} skill={skill} />)}
      </ul>
    </div>
  )
}
