import Link from 'next/link'

const projects = [
  {
    number: '01',
    title: 'AI Search and Exploration Platform',
    summary: 'Built natural-language search, RAG retrieval, and guided AI workflows for enterprise users exploring large-scale real estate image datasets.',
    capabilities: ['React', 'TypeScript', 'RAG Search', 'Agent UX', 'Virtualization'],
  },
  {
    number: '02',
    title: 'Real-time Collaborative Editor',
    summary: 'Improved high-frequency editing interactions, multi-user synchronization, shared state, and GraphQL data fetching for complex collaborative documents.',
    capabilities: ['React', 'GraphQL', 'Real-time Collaboration', 'Design Systems'],
  },
  {
    number: '03',
    title: 'Data-intensive Engineering Platforms',
    summary: 'Modernized enterprise frontends and built analytics and telemetry interfaces that help teams understand high-volume operational data.',
    capabilities: ['React', 'TypeScript', 'Micro-frontends', 'Data Visualization', 'APIs'],
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
              <h2 id="projects-title">Frontend engineering for complex product experiences.</h2>
            </div>
            <p>Selected examples spanning AI-powered interfaces, real-time collaboration, and developer-focused automation.</p>
          </div>

          <div className="mt-12 space-y-5">
            {projects.map((study) => (
              <article key={study.number} className="case-study-card">
                <div className="font-mono text-sm text-cyan-300">{study.number}</div>
                <div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{study.title}</h3>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-300">{study.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${study.title} technologies`}>
                    {study.capabilities.map((capability) => <li key={capability} className="tech-pill">{capability}</li>)}
                  </ul>
                </div>
                <div className="flex items-start border-t border-white/10 pt-5 text-sm text-slate-400 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"><span className="mr-3 text-cyan-300" aria-hidden="true">↗</span>Product interface · Frontend architecture · User experience</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/5 bg-white/[0.02]">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Senior engineering is a leverage role.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Principle title="Start with the system" text="Map constraints, data flow, failure modes, and ownership before selecting implementation details." />
            <Principle title="Make performance visible" text="Use budgets, observability, and user-centered metrics to turn performance into a product capability." />
            <Principle title="Design for change" text="Create clear boundaries and primitives that let teams ship independently without fragmenting the experience." />
            <Principle title="Lead through clarity" text="Write decisions down, surface tradeoffs early, and build alignment across product, design, backend, and ML." />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Let’s build something durable</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Need senior ownership for a complex product or platform?</h2>
            </div>
            <Link href="/contact" className="button-primary">Start a conversation <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Principle({ title, text }: { title: string; text: string }) {
  return <div className="border-l border-cyan-400/30 pl-5"><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>
}
