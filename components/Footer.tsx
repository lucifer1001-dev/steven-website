import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="font-semibold text-white">Steven Chen</p><p className="mt-1 max-w-md text-sm text-slate-400">Senior software engineering for ambitious, data-intensive products.</p></div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          {/* Native navigation avoids an App Router fetch for the homepage hash target. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#projects" className="hover:text-violet-300">Projects</a>
          <Link href="/experience" className="hover:text-violet-300">Experience</Link>
          <Link href="/resume" className="hover:text-violet-300">Resume</Link>
          <Link href="/contact" className="hover:text-violet-300">Contact</Link>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Steven Chen</p>
      </div>
    </footer>
  )
}
