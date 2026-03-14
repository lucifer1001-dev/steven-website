import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import HomeSummary from '@/components/HomeSummary'
import PageBackground from '@/components/PageBackground'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <PageBackground variant="experience" />
      <div className="relative z-[1]">
        <Navigation />
        <HeroSection />
        <HomeSummary />
        <Footer />
      </div>
    </main>
  )
}
