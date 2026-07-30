import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import About from '@/components/About'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Steven Chen, a Senior Software Engineer with 10+ years of experience building high-performance AI-powered, real-time, and data-intensive applications.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen relative overflow-hidden">
      <PageBackground variant="about" />
      <div className="relative z-[1]">
        <Navigation />
        <About />
        <Footer />
      </div>
    </main>
  )
}
