const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux',
      'React Query',
      'GraphQL',
    ],
  },
  {
    title: 'Architecture & Performance',
    skills: [
      'Frontend architecture',
      'Design systems',
      'Micro-frontends',
      'SPA architecture',
      'Web performance optimization',
      'Rendering optimization',
      'Handling large client-side datasets',
      'Accessibility (WCAG)',
    ],
  },
  {
    title: 'Complex Product Interfaces',
    skills: [
      'Collaborative editors',
      'Analytics dashboards',
      'Data visualization systems',
      'Real-time user interfaces',
      'Interactive image visualization',
    ],
  },
  {
    title: 'AI & Data Applications',
    skills: [
      'Machine learning visualization tools',
      'AI-assisted interfaces',
      'Computer vision datasets',
      'Metadata-driven exploration',
    ],
  },
  {
    title: 'Backend Collaboration',
    skills: [
      'Node.js',
      'Python',
      'FastAPI',
      'Flask',
      'REST APIs',
      'GraphQL APIs',
    ],
  },
  {
    title: 'Infrastructure & Observability',
    skills: [
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'AWS (EC2, S3, Lambda)',
      'Docker',
      'CI/CD pipelines',
      'Datadog',
      'Sentry',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 relative pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-strong rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-500/20 hover:border-primary-500/40 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary-300 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center hover:text-primary-400 transition-all duration-200 group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mr-3 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
