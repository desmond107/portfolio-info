import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Frontend Frameworks',
    color: 'from-electric to-cyan-400',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Vue.js', level: 75 },
      { name: 'Angular', level: 70 },
    ],
  },
  {
    title: 'Languages & Core',
    color: 'from-neon-purple to-violet-400',
    skills: [
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3', level: 98 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    title: 'Styling & UI',
    color: 'from-neon-pink to-rose-400',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'SASS / SCSS', level: 88 },
      { name: 'Styled Components', level: 85 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    title: 'Tools & Ecosystem',
    color: 'from-yellow-400 to-orange-400',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Webpack / Vite', level: 88 },
      { name: 'Jest / Testing Library', level: 82 },
      { name: 'Figma / Design Tools', level: 78 },
    ],
  },
];

const techLogos = [
  { name: 'React', emoji: '⚛️' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'JavaScript', emoji: '🟨' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'Tailwind', emoji: '🎨' },
  { name: 'Node.js', emoji: '🟩' },
  { name: 'Git', emoji: '🔀' },
  { name: 'Figma', emoji: '🎯' },
  { name: 'Redux', emoji: '🔄' },
  { name: 'GraphQL', emoji: '◆' },
  { name: 'REST APIs', emoji: '🔌' },
  { name: 'Docker', emoji: '🐳' },
];

export default function Skills() {
  const { ref, isVisible } = useInView();

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-dark-800/50">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-electric text-sm font-semibold tracking-widest uppercase">What I Do Best</span>
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            My <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Tech marquee */}
        <div className={`mb-16 overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-6 animate-[slide-in-left_30s_linear_infinite] whitespace-nowrap">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div key={i} className="flex-shrink-0 glass-card rounded-xl px-5 py-3 flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default">
                <span className="text-2xl">{tech.emoji}</span>
                <span className="text-white font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + catIdx * 150}ms` }}
            >
              <h3 className="font-[family-name:var(--font-family-heading)] text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-electric text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-900 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${500 + catIdx * 150 + skillIdx * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
