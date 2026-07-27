import Link from 'next/link'

const outcomes = [
  { value: '10+', label: 'years building at scale' },
  { value: '4', label: 'product domains at scale' },
  { value: 'Performance', label: 'focused engineering' },
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center pt-24" aria-labelledby="hero-title">
      <div className="section-shell grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <div className="eyebrow mb-6">
            <span className="status-dot" aria-hidden="true" />
            Vancouver, WA · Senior Frontend Engineer
          </div>

          <h1 id="hero-title" className="max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            I build frontend systems that stay fast when products get complex.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Senior Software Engineer specializing in React, TypeScript, frontend architecture,
            real-time applications, and AI-powered product experiences. I build scalable user
            experiences for complex products and data-intensive platforms.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#projects" className="button-primary">
              Explore selected projects
              <span aria-hidden="true">↘</span>
            </Link>
            <Link href="/experience" className="button-secondary">
              View experience
            </Link>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome.label}>
                <dt className="text-sm text-slate-400">{outcome.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">{outcome.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="system-card" aria-label="Engineering profile">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Engineering profile</p>
              <p className="mt-1 text-sm text-slate-400">Frontend Architecture · AI Products · Performance</p>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Available</span>
          </div>

          <div className="space-y-7 py-7">
            <ProfileRow index="01" title="Frontend architecture" description="Scalable React platforms, design systems, performance optimization, and accessible product foundations." />
            <ProfileRow index="02" title="Real-time and AI interfaces" description="Collaborative applications, semantic search experiences, streaming AI responses, and intelligent workflows." />
            <ProfileRow index="03" title="Product engineering perspective" description="Frontend systems informed by APIs, cloud platforms, backend services, and observability." />
          </div>

          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
            {['React', 'TypeScript', 'Next.js', 'React Query', 'GraphQL', 'Node.js', 'AI APIs'].map((skill) => <span key={skill} className="tech-pill">{skill}</span>)}
          </div>
        </aside>
      </div>
    </section>
  )
}

function ProfileRow({ index, title, description }: { index: string; title: string; description: string }) {
  return <div className="grid grid-cols-[auto_1fr] gap-4"><span className="font-mono text-xs text-cyan-400/70">{index}</span><div><h2 className="font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{description}</p></div></div>
}
