import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills in React architecture, TypeScript, real-time data, AI product integration, frontend performance, testing, APIs, and cloud infrastructure.',
  alternates: { canonical: '/skills' },
}

export default function SkillsPage() {
  return (
    <main id="main-content" className="min-h-screen relative overflow-hidden">
      <PageBackground variant="skills" />
      <div className="relative z-[1]">
        <Navigation />
        <Skills />
        <Footer />
      </div>
    </main>
  )
}
