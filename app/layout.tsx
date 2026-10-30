import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Gavin Ralph S. Rama — Full-Stack Developer',
  description: 'The personal developer portfolio of Gavin Ralph S. Rama, a full-stack developer based in the Philippines.',
  openGraph: { title: 'Gavin Ralph S. Rama — Full-Stack Developer', description: 'A light Iceberg Developer System portfolio for Gavin Ralph S. Rama.', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#F4FAFC' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body>{children}</body></html>
}
