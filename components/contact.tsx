'use client'
import { profile } from '@/data/profile'
import { ArrowUpRight, Code2, Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { SectionHeading } from './section-heading'

export function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true) }
  return <section id="contact" className="section container contact-section"><SectionHeading number="05" label="Contact" prefix={false} /><div className="contact-grid"><div><h2>Let&apos;s build<br /><span>something.</span></h2><p>Have an idea, opportunity, or interesting problem? I&apos;d love to hear about it.</p><div className="contact-links"><a href={"mailto:" + profile.email} aria-label="Email Gavin"><Mail /> Email <span>{profile.email}</span> <ArrowUpRight /></a><a href={profile.linkedin} aria-label="LinkedIn"><Code2 /> LinkedIn  <ArrowUpRight /></a><a href={profile.github} aria-label="GitHub"><Code2 /> GitHub  <ArrowUpRight /></a></div></div><div className="contact-terminal"><div className="terminal-head"><span>terminal — contact</span><span>● ● ●</span></div><div className="terminal-body"><p><b>$</b> contact --developer</p><p className="terminal-muted">Opening communication channel...</p><p className="terminal-success">CONTACT_CHANNEL_TBD<span className="cursor" /></p>{sent ? <p className="form-success">Message staged. I&apos;ll get back to you soon.</p> : <form className="terminal-form" onSubmit={handleSubmit}><label><span className="sr-only">Name</span><input required name="name" placeholder="your name" /></label><label><span className="sr-only">Email</span><input required name="email" type="email" placeholder="your email" /></label><label><span className="sr-only">Message</span><textarea required name="message" placeholder="your message" rows={3} /></label><button className="button button-primary" type="submit">Send message <ArrowUpRight /></button></form>}</div></div></div></section>
}
