'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = ['home', 'about', 'projects', 'skills', 'journey', 'contact']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActive(visible.target.id) }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <header className="nav-shell"><a href="#home" className="brand" aria-label="Gavin home"><span className="brand-mark">&gt;_</span> gavin.dev</a><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map((link) => <a key={link} href={`#${link}`} aria-current={active === link ? 'location' : undefined} className={active === link ? 'active' : ''} onClick={() => setMenuOpen(false)}>{link === 'home' ? 'Home' : link.slice(0, 1).toUpperCase() + link.slice(1)}</a>)}</nav><div className="nav-actions"><button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button></div></header>
}
