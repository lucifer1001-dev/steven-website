import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Steven Chen, Senior Software Engineer based in Vancouver, WA, to discuss new opportunities and interesting projects.',
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
