import Link from 'next/link'
import Image from 'next/image'

const outcomes = [
  { value: '10+', label: 'years building at scale' },
  { value: '100K+', label: 'AI images rendered efficiently' },
  { value: '~40%', label: 'application performance gain' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24" aria-labelledby="hero-title">
      <div className="section-shell grid items-start gap-14 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <div className="eyebrow mb-6">
            <span className="status-dot" aria-hidden="true" />
            Vancouver, WA · Senior Software Engineer
          </div>

          <h1 id="hero-title" className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.75rem]">
            I build full-stack products where performance and AI feel native.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Senior Software Engineer specializing in React, TypeScript, Node.js, Python, and cloud-native
            architecture. I design scalable applications that combine polished user experiences,
            reliable backend services, semantic search, RAG workflows, and data-intensive systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">
              Explore selected projects
              <span aria-hidden="true">↘</span>
            </a>
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

        <aside className="system-card !p-0" aria-label="Engineering profile">
          <div className="p-6 sm:p-8">
          <div className="grid grid-cols-[172px_1fr] items-center gap-6 border-b border-white/10 pb-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-indigo-950/40">
              <Image
                src="/profile.png"
                alt="Portrait of Steven Chen"
                fill
                priority
                sizes="172px"
                className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-violet-400/[0.05]" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300">Engineering profile</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Full-stack products, applied AI, and performance engineering.</p>
              <span className="mt-3 inline-flex rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-violet-200">10+ years</span>
            </div>
          </div>

          <div className="space-y-5 py-6">
            <ProfileRow index="01" title="Product architecture" description="Scalable React frontends, Node.js and Python services, APIs, state architecture, and cloud integrations." />
            <ProfileRow index="02" title="Applied AI" description="LLM integrations, RAG, semantic retrieval, vector search, streaming responses, and intelligent discovery." />
            <ProfileRow index="03" title="Production ownership" description="System design, performance, testing, observability, delivery, and cross-functional engineering leadership." />
          </div>

          <p className="tech-line border-t border-white/10 pt-5">React / TypeScript / Next.js / Node.js / Python / GraphQL / RAG / AWS</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

function ProfileRow({ index, title, description }: { index: string; title: string; description: string }) {
  return <div className="grid grid-cols-[auto_1fr] gap-4"><span className="font-mono text-xs text-violet-300">{index}</span><div><h2 className="font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{description}</p></div></div>
}
