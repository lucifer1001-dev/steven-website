const roles = [
  { company: 'ZestyAI', title: 'Senior Software Engineer', period: 'Feb 2023 - Present', location: 'Remote, USA', detail: 'Frontend architecture for AI-powered property intelligence, semantic search, computer vision insights, risk visualization, and large data and image workflows.' },
  { company: 'Figma', title: 'Senior Full-Stack Engineer', period: 'May 2019 - Jan 2023', location: 'San Francisco, CA', detail: 'Real-time collaborative product experiences, LiveGraph subscriptions, database replication workflows, DBProxy, Code Connect, and reusable React design-system patterns.' },
  { company: 'Thoughtworks', title: 'Software Engineer', period: 'Mar 2017 - Apr 2019', location: 'San Francisco, CA', detail: 'React and TypeScript modernization, component libraries, analytics dashboards, REST APIs, micro-frontends, automated testing, and CI/CD.' },
  { company: 'Facebook', title: 'Software Engineer', period: 'Oct 2015 - Feb 2017', location: 'Menlo Park, CA', detail: 'React-based internal applications, operational dashboards, telemetry visualization, frontend API integration, and performance optimization.' },
]

const skillGroups = [
  ['Frontend', 'React, Next.js, TypeScript, JavaScript, HTML5, CSS3, responsive design, accessibility, design systems, micro-frontends'],
  ['Data and real-time', 'TanStack Query, client and server state, caching, GraphQL, subscriptions, real-time synchronization'],
  ['AI products', 'LLM integration, AI assistants, semantic search, streaming responses, structured AI output, prompt engineering'],
  ['Performance and quality', 'Core Web Vitals, virtualization, code splitting, progressive hydration, Jest, React Testing Library, Playwright, Cypress'],
  ['Platform', 'Node.js, Python, REST APIs, AWS, Docker, CI/CD, Sentry, Datadog'],
]

export default function Resume() {
  return <section className="page-section" aria-labelledby="resume-title"><div className="section-shell">
    <div className="page-intro"><p className="eyebrow">Resume</p><h1 id="resume-title">Steven Blake Chen</h1><p>Senior Frontend Engineer building scalable React applications, real-time interfaces, and AI-powered product experiences.</p></div>
    <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300"><a className="tech-pill hover:text-cyan-200" href="mailto:chensteven890@outlook.com">chensteven890@outlook.com</a><a className="tech-pill hover:text-cyan-200" href="tel:+19177648247">+1 (917) 764-8247</a><span className="tech-pill">Vancouver, WA</span><a className="tech-pill hover:text-cyan-200" href="https://stevenchen.life">stevenchen.life</a></div>

    <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="space-y-8">
        <section className="content-card"><p className="eyebrow">Core expertise</p><div className="mt-6 space-y-5">{skillGroups.map(([title, skills]) => <div key={title}><h2 className="text-sm font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{skills}</p></div>)}</div></section>
        <section className="content-card"><p className="eyebrow">Education</p><h2 className="mt-5 font-semibold text-white">Master of Science in Computer Science</h2><p className="mt-2 text-sm text-slate-300">Portland State University</p><p className="mt-1 font-mono text-xs text-slate-500">2014 - 2015</p></section>
      </aside>

      <section className="content-card"><p className="eyebrow">Professional experience</p><div className="mt-7 divide-y divide-white/10">{roles.map((role) => <article key={role.company} className="py-7 first:pt-0 last:pb-0"><div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><h2 className="text-xl font-semibold text-white">{role.title}</h2><p className="mt-1 text-cyan-300">{role.company}</p></div><div className="sm:text-right"><p className="font-mono text-xs text-slate-300">{role.period}</p><p className="mt-1 text-xs text-slate-500">{role.location}</p></div></div><p className="mt-4 text-sm leading-6 text-slate-400">{role.detail}</p></article>)}</div></section>
    </div>
  </div></section>
}
