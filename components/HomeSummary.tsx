import Link from 'next/link'

const projects = [
  {
    number: '01',
    title: 'AI Property Intelligence Platform',
    summary: 'Owned frontend architecture and full-stack feature delivery for enterprise search, analytics, image intelligence, conversational discovery, and semantic retrieval across millions of property images.',
    capabilities: ['React', 'TypeScript', 'Node.js', 'RAG', 'Vector Search', 'Streaming UI'],
    focus: 'Architecture lead · Full-stack delivery',
  },
  {
    number: '02',
    title: 'Collaborative Design Editing Platform',
    summary: 'Developed advanced browser-based editing experiences, reusable frontend utilities, responsive interaction patterns, GraphQL data flows, and real-time collaboration for millions of users.',
    capabilities: ['React', 'TypeScript', 'GraphQL', 'State Architecture', 'Design Systems'],
    focus: 'Frontend engineering · Performance',
  },
  {
    number: '03',
    title: 'Enterprise and Engineering Platforms',
    summary: 'Modernized enterprise applications and built secure, cloud-deployed products spanning React interfaces, Node.js and Python services, operational dashboards, and API integrations.',
    capabilities: ['React', 'Node.js', 'Python', 'RBAC', 'AWS', 'Data Visualization'],
    focus: 'Platform modernization · Product delivery',
  },
]

export default function HomeSummary() {
  return (
    <>
      <section id="projects" className="section-space scroll-mt-24" aria-labelledby="projects-title">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2 id="projects-title">Selected product work across AI, collaboration, and enterprise software.</h2>
            </div>
            <p>Selected examples spanning AI-powered interfaces, real-time collaboration, and developer-focused automation.</p>
          </div>

          <div className="mt-12 space-y-5">
            {projects.map((study) => (
              <article key={study.number} className="case-study-card">
                <div className="font-mono text-sm text-violet-300">{study.number}</div>
                <div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{study.title}</h3>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-300">{study.summary}</p>
                  <p className="tech-line mt-6" aria-label={`${study.title} technologies`}>{study.capabilities.join(' / ')}</p>
                </div>
                <div className="border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">Contribution</p><p className="mt-2 text-sm leading-6 text-slate-300">{study.focus}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/5 bg-indigo-950/20 backdrop-blur-sm">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Working approach</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">How I take on difficult product work.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Principle title="Understand the real constraints" text="I map the user workflow, data flow, failure modes, and team ownership before choosing an implementation." />
            <Principle title="Measure the experience" text="Performance budgets, production signals, and task outcomes keep technical work connected to the product." />
            <Principle title="Build useful boundaries" text="Clear components, APIs, and state ownership let teams move independently without fragmenting the experience." />
            <Principle title="Document the tradeoffs" text="Short design notes and explicit decisions make architecture easier to review, operate, and change." />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have a complex product problem worth discussing?</h2>
            </div>
            <Link href="/contact" className="button-primary">Start a conversation <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Principle({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30"><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>
}
