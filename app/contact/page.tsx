import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Steven Chen, Staff Software Engineer in Vancouver, WA, via email, phone, or stevenchen.life.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <PageBackground variant="contact" />
      <div className="relative z-[1]">
        <Navigation />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
