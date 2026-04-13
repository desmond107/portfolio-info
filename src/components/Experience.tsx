import { useInView } from '../hooks/useInView';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'MIS/Frontend Developer',
    company: 'Skillflow Hospitality',
    location: 'Nairobi, Kenya',
    period: '10/2025-4/2026',
    type: 'Full-time',
    description:
      ' frontend architecture for enterprise SaaS products. Spearheading the migration from legacy jQuery codebase to a modern React/TypeScript stack, resulting in a 40% improvement in performance metrics.',
    achievements: [
      'Architected a micro-frontend system serving 100K+ daily active users',
      'Reduced bundle size by 60% through code splitting and lazy loading',
      'Mentored a team of 5 junior developers and established coding standards',
      'Implemented comprehensive testing strategy achieving 90%+ code coverage',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS'],
  },
  {
    role: 'Operations/Frontend Developer',
    company: 'Mayleen Cooparation',
    location: 'Nairobi, Kenya',
    period: '2023 — 2025',
    type: 'Full-time',
    description:
      'Developed responsive web applications for diverse clients ranging from startups to Fortune 500 companies. Collaborated closely with design teams to deliver pixel-perfect implementations.',
    achievements: [
      'Built 15+ client projects from concept to deployment',
      'Created a reusable component library used across all agency projects',
      'Improved Lighthouse scores to 95+ across all client websites',
      'Integrated third-party APIs including Stripe, Auth0, and various CMS platforms',
    ],
    technologies: ['React', 'Vue.js', 'SASS', 'Redux', 'REST APIs'],
  },
  {
    role: 'IT/Frontend Developer',
    company: 'StartUp Tustock',
    location: 'Nairobi,Kenya',
    period: '2020 — 2021',
    type: 'Full-time',
    description:
      'Contributed to the development of the company\'s flagship product — a real-time collaboration platform. Gained hands-on experience with agile methodologies and modern development practices.',
    achievements: [
      'Developed real-time chat and notification features using WebSockets',
      'Built responsive dashboards with interactive data visualizations',
      'Participated in daily standups, sprint planning, and code reviews',
      'Reduced page load time by 35% through image optimization and caching',
    ],
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Firebase', 'Chart.js'],
  },
  {
    role: 'Frontend Intern',
    company: 'WebWorks Studio',
    location: 'Remote',
    period: '2019 — 2020',
    type: 'Internship',
    description:
      'Started my professional journey building js,html,css themes and simple web applications. Learned the fundamentals of modern web development and version control.',
    achievements: [
      'Developed 10+ custom js,html,cssthemes for small business clients',
      'Learned React fundamentals and built first single-page application',
      'Assisted senior developers in code reviews and debugging sessions',
      'Gained proficiency in Git workflow and collaborative development',
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  },
];

export default function Experience() {
  const { ref, isVisible } = useInView();

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl -translate-x-1/2" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-electric text-sm font-semibold tracking-widest uppercase">My Journey</span>
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-neon-purple to-neon-pink md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-2 md:-translate-x-2 bg-electric rounded-full border-4 border-dark-900 z-10 shadow-lg shadow-electric/30" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
                <div className="glass-card rounded-2xl p-6 md:p-8 group hover:-translate-y-1 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-family-heading)] text-xl font-bold text-white group-hover:text-electric transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-electric font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric border border-electric/20 font-medium">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <Briefcase className="w-3.5 h-3.5 text-electric mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, j) => (
                      <span key={j} className="text-xs px-3 py-1 rounded-full bg-dark-900 text-gray-400 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
