'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled || isOpen ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="Steven Blake Chen, home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-200 transition-colors group-hover:bg-cyan-300/15">SC</span>
          <span><span className="block text-sm font-semibold text-white">Steven Blake Chen</span><span className="block text-xs text-slate-400">Senior Frontend Engineer</span></span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined} className={`nav-link ${active ? 'nav-link-active' : ''}`}>{item.label}</Link>
          })}
        </div>

        <button type="button" className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-slate-200 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d={isOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </button>
      </nav>

      {isOpen && <div id="mobile-navigation" className="section-shell border-t border-white/10 py-3 lg:hidden">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">{item.label}</Link>)}</div>}
    </header>
  )
}
