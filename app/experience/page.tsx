import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Experience from '@/components/Experience'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience at Restb.ai, Canva, Globant, and Google across production AI products, React platforms, real-time collaboration, enterprise applications, and data visualization.',
  alternates: { canonical: '/experience' },
}

export default function ExperiencePage() {
  return (
    <main id="main-content" className="min-h-screen relative overflow-hidden">
      <PageBackground variant="experience" />
      <div className="relative z-[1]">
        <Navigation />
        <Experience />
        <Footer />
      </div>
    </main>
  )
}
