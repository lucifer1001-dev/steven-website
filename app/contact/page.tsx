import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Steven Blake Chen, a Senior Frontend Engineer in Vancouver, WA, about React, frontend platform, and AI product engineering opportunities.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen relative overflow-hidden">
      <PageBackground variant="contact" />
      <div className="relative z-[1]">
        <Navigation />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
