import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical expertise in React, TypeScript, Node.js, Python, RAG, semantic search, backend APIs, databases, AWS, automated testing, and observability.',
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
