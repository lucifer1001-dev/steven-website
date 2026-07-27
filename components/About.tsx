const values = [
  ['Architecture with context', 'The right solution accounts for the product, team, operating model, and expected rate of change—not only the code.'],
  ['Performance as product quality', 'Latency, stability, accessibility, and clarity are part of the user experience and deserve measurable goals.'],
  ['Multiplying the team', 'Strong technical direction creates shared language, reduces repeated decisions, and helps other engineers do their best work.'],
]

export default function About() {
  return (
    <section className="page-section" aria-labelledby="about-title"><div className="section-shell">
      <div className="page-intro"><p className="eyebrow">About</p><h1 id="about-title">I build frontend foundations for ambitious product experiences.</h1><p>For more than a decade, I have built React products across Facebook, Thoughtworks, Figma, and ZestyAI, from operational data visualization and enterprise modernization to real-time collaboration and AI-powered property intelligence.</p></div>
      <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="content-card space-y-6 text-base leading-8 text-slate-300"><p>My strongest work begins with an ambiguous, high-leverage problem: a product that slows down under real data, an AI capability users cannot confidently control, or an architecture that makes every new feature harder to ship.</p><p>I bring structure to those problems. That means modeling the system, defining useful boundaries, measuring the current experience, and aligning product, design, backend, ML, and infrastructure partners around explicit tradeoffs.</p><p>I still care deeply about implementation quality. The goal, however, is larger than elegant code: a system that performs predictably, is observable in production, and leaves the team more capable than before.</p></div>
        <aside className="content-card"><p className="eyebrow">Education</p><h2 className="mt-5 text-xl font-semibold text-white">Portland State University</h2><p className="mt-2 text-slate-300">Master of Science, Computer Science</p><p className="mt-1 font-mono text-xs text-slate-500">2014 — 2015</p><div className="mt-8 border-t border-white/10 pt-7"><p className="text-sm leading-6 text-slate-400">Based in Vancouver, Washington. Experienced partnering with distributed teams across product, design, engineering, and applied ML.</p></div></aside>
      </div>
      <div className="mt-16"><p className="eyebrow">Engineering principles</p><div className="mt-7 grid gap-5 md:grid-cols-3">{values.map(([title, text], index) => <article key={title} className="content-card"><span className="font-mono text-xs text-cyan-300">0{index + 1}</span><h2 className="mt-5 text-lg font-semibold text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}</div></div>
    </div></section>
  )
}
