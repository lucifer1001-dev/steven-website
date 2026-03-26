import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills in frontend architecture, LLM-integrated UX, RAG-style search, agent workflows, rendering performance, observability tooling, APIs, and infrastructure.',
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <PageBackground variant="skills" />
      <div className="relative z-[1]">
        <Navigation />
        <Skills />
        <Footer />
      </div>
    </main>
  )
}
