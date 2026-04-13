import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, FolderOpen, Eye } from 'lucide-react';

const filters = ['All', 'React', 'Next.js', 'Vue.js', 'TypeScript'];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart system, payment integration, and real-time inventory tracking.',
    image: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    tags: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    category: 'React',
    stats: { stars: 128, views: '2.4K' },
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, user engagement metrics, and automated reporting for social media managers.',
    image: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma'],
    category: 'Next.js',
    stats: { stars: 96, views: '1.8K' },
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with drag-and-drop, team collaboration features, and real-time updates via WebSockets.',
    image: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    tags: ['Vue.js', 'Vuex', 'Firebase', 'SASS'],
    category: 'Vue.js',
    stats: { stars: 74, views: '1.2K' },
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content creation platform leveraging OpenAI APIs for generating blog posts, social media content, and marketing copy.',
    image: 'linear-gradient(135deg, #10b981, #06b6d4)',
    tags: ['React', 'TypeScript', 'OpenAI', 'Node.js'],
    category: 'React',
    stats: { stars: 156, views: '3.1K' },
  },
  {
    title: 'Portfolio Builder',
    description: 'A drag-and-drop portfolio builder that allows developers to create stunning portfolio websites without any coding knowledge.',
    image: 'linear-gradient(135deg, #ec4899, #f97316)',
    tags: ['Next.js', 'TypeScript', 'MDX', 'Framer Motion'],
    category: 'Next.js',
    stats: { stars: 112, views: '2.0K' },
  },
  {
    title: 'Real-Time Chat App',
    description: 'A modern messaging application with end-to-end encryption, file sharing, group chats, and video calling capabilities.',
    image: 'linear-gradient(135deg, #6366f1, #a855f7)',
    tags: ['React', 'TypeScript', 'Socket.io', 'WebRTC'],
    category: 'TypeScript',
    stats: { stars: 89, views: '1.5K' },
  },
];

export default function Projects() {
  const { ref, isVisible } = useInView();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-dark-800/50">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-electric text-sm font-semibold tracking-widest uppercase">My Portfolio</span>
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-electric text-dark-900 shadow-lg shadow-electric/25'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden" style={{ background: project.image }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderOpen className="w-16 h-16 text-white/20" />
                </div>
                <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/60 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-electric hover:text-dark-900 transition-all">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-electric hover:text-dark-900 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-family-heading)] text-lg font-bold text-white mb-2 group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-electric/10 text-electric border border-electric/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-gray-500 text-sm pt-4 border-t border-gray-800">
                  <span className="flex items-center gap-1">⭐ {project.stats.stars}</span>
                  <span className="flex items-center gap-1">👁 {project.stats.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
