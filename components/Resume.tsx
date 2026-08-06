const roles = [
  { company: 'Restb.ai', title: 'Senior Software Engineer', period: 'Feb 2023 - Present', location: 'Remote, US', detail: 'Own frontend architecture for AI property intelligence: semantic search, embeddings, vector retrieval, RAG assistants, 100K+ image workflows, streaming UI, Node.js integrations, observability, releases, and mentorship.' },
  { company: 'Canva', title: 'Senior Frontend Engineer', period: 'Aug 2020 - Jan 2023', location: 'Remote, US', detail: 'Advanced React editing experiences, reusable component systems, real-time feedback, GraphQL integration, performance optimization, and automated testing with Jest, React Testing Library, and Playwright.' },
  { company: 'Globant', title: 'Software Engineer', period: 'Mar 2017 - Jul 2020', location: 'San Francisco, CA', detail: 'React and TypeScript modernization, shared UI frameworks, enterprise dashboards, RBAC workflows, REST integration, Node.js and Python services, testing, and accessibility standards.' },
  { company: 'Google', title: 'Software Engineer', period: 'Oct 2015 - Feb 2017', location: 'Mountain View, CA', detail: 'React engineering dashboards, service-health and telemetry visualization, optimized client-side processing, reusable filtering patterns, and internal API integrations.' },
]

const skillGroups = [
  ['Frontend engineering', 'React, TypeScript, Next.js, React Query, Redux, Zustand, Tailwind CSS, Storybook, design systems, SSR, WCAG 2.1'],
  ['Architecture and performance', 'Monorepos, design tokens, state architecture, visualization, virtualization, lazy loading, code splitting, Core Web Vitals, React Profiler'],
  ['AI application engineering', 'OpenAI API, Anthropic Claude, RAG, semantic search, embeddings, vector search, AI assistants, streaming responses, agent workflows'],
  ['Backend and cloud', 'Node.js, Express, NestJS, Python, FastAPI, REST, GraphQL, WebSockets, PostgreSQL, Redis, MongoDB, AWS, Docker, CI/CD'],
  ['Testing and observability', 'Jest, React Testing Library, Playwright, Cypress, Sentry, Datadog, OpenTelemetry, production monitoring'],
]

export default function Resume() {
  return <section className="page-section" aria-labelledby="resume-title"><div className="section-shell">
    <div className="page-intro"><p className="eyebrow">Resume</p><h1 id="resume-title">Steven Chen</h1><p>Senior Software Engineer architecting high-performance web applications, production AI products, and enterprise-scale software platforms.</p></div>
    <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300"><a className="tech-pill hover:text-cyan-200" href="mailto:chenstevens890@gmail.com">chenstevens890@gmail.com</a><a className="tech-pill hover:text-cyan-200" href="tel:+13393991987">+1 (339) 399-1987</a><span className="tech-pill">Vancouver, WA</span><a className="tech-pill hover:text-cyan-200" href="https://stevenchen.life">stevenchen.life</a></div>

    <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="space-y-8">
        <section className="content-card"><p className="eyebrow">Core expertise</p><div className="mt-6 space-y-5">{skillGroups.map(([title, skills]) => <div key={title}><h2 className="text-sm font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{skills}</p></div>)}</div></section>
        <section className="content-card"><p className="eyebrow">Education</p><h2 className="mt-5 font-semibold text-white">Master of Science in Computer Science</h2><p className="mt-2 text-sm text-slate-300">Portland State University</p><p className="mt-1 font-mono text-xs text-slate-500">May 2014 - Sep 2015</p></section>
      </aside>

      <section className="content-card"><p className="eyebrow">Professional experience</p><div className="mt-7 divide-y divide-white/10">{roles.map((role) => <article key={role.company} className="py-7 first:pt-0 last:pb-0"><div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><h2 className="text-xl font-semibold text-white">{role.title}</h2><p className="mt-1 text-cyan-300">{role.company}</p></div><div className="sm:text-right"><p className="font-mono text-xs text-slate-300">{role.period}</p><p className="mt-1 text-xs text-slate-500">{role.location}</p></div></div><p className="mt-4 text-sm leading-6 text-slate-400">{role.detail}</p></article>)}</div></section>
    </div>
  </div></section>
}
