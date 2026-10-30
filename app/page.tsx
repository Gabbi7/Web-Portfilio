import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { CurrentlyBuilding } from '@/components/currently-building'
import { DeveloperStatus } from '@/components/developer-status'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Journey } from '@/components/journey'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { SectionHeading } from '@/components/section-heading'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return <main className="site-shell min-h-screen overflow-hidden bg-[#F4FAFC] text-[#102630]"><div className="ambient-grid" aria-hidden="true" /><Navbar /><Hero /><DeveloperStatus /><About /><section id="projects" className="section container"><SectionHeading number="02" label="projects" /><Projects /></section><SkillsSection /><Journey /><CurrentlyBuilding /><Contact /><Footer /></main>
}
