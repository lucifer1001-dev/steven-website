import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Experience from '@/components/Experience'
import HomeBackgroundEffect from '@/components/HomeBackgroundEffect'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience at Restb.ai, Canva, Globant, and Google building AI-powered computer vision platforms, collaborative design tools, enterprise analytics systems, and large-scale internal tooling.',
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <HomeBackgroundEffect />
      <div className="relative z-[1]">
        <Navigation />
        <Experience />
        <Footer />
      </div>
    </main>
  )
}
