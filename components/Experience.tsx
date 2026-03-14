const experiences = [
  {
    company: 'Restb.ai',
    role: 'Senior Software Engineer',
    period: 'Feb 2023 – Present',
    location: 'Remote (US)',
    achievements: [
      'Lead frontend development for AI-powered computer vision platforms used by real estate marketplaces to analyze and search large collections of property imagery.',
      'Designed scalable frontend architecture using React, TypeScript, and Next.js to support browsing and analysis of computer-vision-processed image datasets.',
      'Built interactive visualization interfaces displaying object detections, classification labels, and confidence scores across millions of computer-vision-processed images.',
      'Developed advanced search and filtering systems allowing users to explore large image collections using computer vision metadata and scene recognition tags.',
      'Implemented asynchronous data workflows using React Query to efficiently manage high-volume API requests and maintain responsive user interfaces.',
      'Optimized rendering performance for image-heavy browsing interfaces displaying thousands of images, reducing time-to-interactive by ~40% using memoization, progressive loading, and code splitting.',
      'Implemented API caching and request coordination mechanisms to reduce redundant network calls during large dataset exploration sessions.',
      'Integrated monitoring pipelines using Datadog and Sentry to improve frontend observability and accelerate debugging of production issues.',
      'Collaborated with machine learning engineers to translate complex model outputs into intuitive production-ready user interfaces.',
    ],
  },
  {
    company: 'Canva',
    role: 'Senior Frontend Engineer',
    period: 'Aug 2020 – Feb 2023',
    location: 'Remote (US)',
    achievements: [
      'Developed core functionality and performance improvements for Canva’s browser-based design editor, a product used by millions of users worldwide.',
      'Built editor features enabling drag, resize, alignment, and layout operations within Canva’s browser-based editor used by tens of millions of users.',
      'Improved editor rendering pipeline performance for documents containing thousands of visual elements, significantly reducing editing latency.',
      'Developed reusable UI components within Canva’s internal design system to maintain consistent behavior across multiple product surfaces.',
      'Implemented modules supporting real-time collaborative editing workflows and synchronized document updates between distributed users.',
      'Integrated GraphQL APIs supporting asset retrieval, document synchronization, and editor configuration across multiple services.',
      'Maintained complex document state management logic ensuring predictable editor behavior during collaborative editing sessions.',
      'Mentored frontend engineers and reviewed component architecture to maintain consistency across Canva’s design system and editor features.',
    ],
  },
  {
    company: 'Globant',
    role: 'Software Engineer',
    period: 'Mar 2017 – Jul 2020',
    location: 'San Francisco, CA',
    achievements: [
      'Full-stack engineer delivering frontend modernization initiatives and enterprise analytics platforms for large enterprise clients.',
      'Led migration of legacy enterprise web platforms to React-based architecture, coordinating across multiple engineering teams and improving development velocity.',
      'Implemented micro-frontend deployment architecture allowing independent feature delivery across multiple distributed engineering teams.',
      'Built enterprise analytics dashboards enabling business users to explore operational datasets through rich interactive visualizations.',
      'Developed backend services using Node.js and Python supporting REST APIs, data pipelines, and business workflows.',
      'Designed reusable UI component libraries improving interface consistency and reducing duplicated development across enterprise applications.',
    ],
  },
  {
    company: 'Google',
    role: 'Software Engineer',
    period: 'Oct 2015 – Feb 2017',
    location: 'San Jose, CA',
    achievements: [
      'Developed internal engineering tools and monitoring dashboards used to visualize large-scale infrastructure performance metrics.',
      'Built internal dashboards allowing engineering teams to monitor system performance, operational metrics, and infrastructure reliability.',
      'Implemented frontend components capable of rendering large operational datasets used in internal monitoring systems.',
      'Developed backend services using Python supporting internal analytics pipelines and operational reporting workflows.',
      'Designed REST APIs enabling internal applications to retrieve infrastructure telemetry and performance data efficiently.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 relative pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in-down">
          <span className="gradient-text">Professional Experience</span>
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary-500/30 pb-12 last:pb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full ring-4 ring-dark-900 shadow-lg shadow-primary-500/50"></div>
              <div className="glass-strong rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-primary-500/20 hover:border-primary-500/40 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-xl font-semibold gradient-text">
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-primary-300 font-medium text-lg">{exp.period}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-4 mt-6">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 flex items-start group hover:text-gray-100 transition-all duration-200 pl-2"
                    >
                      <div className="flex-shrink-0 mr-4 mt-1.5 relative">
                        <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-200"></div>
                        <div className="relative w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 ring-2 ring-primary-500/30 group-hover:ring-primary-400/50 group-hover:scale-125 transition-all duration-200"></div>
                      </div>
                      <span className="flex-1 leading-relaxed text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
