import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Mail, Download, ExternalLink } from 'lucide-react';

const slides = [
  {
    bg: '/images/hero-bg-1.jpg',
    tagline: 'Creative Frontend Developer',
    heading: 'Building Digital\nExperiences That Matter',
    description: 'I craft pixel-perfect, responsive web applications with modern frameworks, turning complex ideas into elegant user interfaces.',
  },
  {
    bg: '/images/hero-bg-2.jpg',
    tagline: 'React & TypeScript Expert',
    heading: 'Code That Scales,\nDesign That Inspires',
    description: 'Specializing in React ecosystems, component architecture, and performance optimization for enterprise-grade applications.',
  },
  {
    bg: '/images/hero-bg-3.jpg',
    tagline: 'UI/UX Enthusiast',
    heading: 'Where Technology\nMeets Artistry',
    description: 'Passionate about creating seamless user experiences with attention to detail, accessibility, and modern design principles.',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0, transform: current === i ? 'scale(1)' : 'scale(1.1)' }}
        >
          <img
            src={slide.bg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
        </div>
      ))}

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text content */}
          <div className="space-y-6 md:space-y-8">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${current === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
                style={{ display: current === i ? 'block' : 'none' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                  <span className="text-electric text-sm font-medium">{slide.tagline}</span>
                </div>
                <h1 className="font-[family-name:var(--font-family-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line">
                  {slide.heading.split('\n').map((line, j) => (
                    <span key={j}>
                      {j === 1 ? <span className="gradient-text">{line}</span> : line}
                      {j === 0 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-lg mt-4 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            ))}

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-electric to-neon-blue text-dark-900 font-semibold text-sm flex items-center gap-2 hover:shadow-xl hover:shadow-electric/25 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl border border-electric/30 text-electric font-semibold text-sm hover:bg-electric/10 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-500 text-sm">Follow me</span>
              <div className="w-12 h-px bg-gray-700" />
              {[
                { icon: ExternalLink, href: '#', label: 'GitHub' },
                { icon: ExternalLink, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-dark-700/80 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric/50 hover:bg-electric/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute -inset-8 rounded-full border border-electric/20 animate-pulse" />
              <div className="absolute -inset-16 rounded-full border border-electric/10" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-electric/20 via-neon-purple/20 to-neon-pink/20 blur-2xl" />
              
              {/* Main image */}
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-electric/30 animate-glow-pulse">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-electric/10 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass-card animate-float">
                <span className="text-electric font-bold text-lg">5+</span>
                <span className="text-gray-400 text-xs block">Years Exp.</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass-card animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-neon-pink font-bold text-lg">50+</span>
                <span className="text-gray-400 text-xs block">Projects</span>
              </div>
              <div className="absolute top-1/2 -right-12 px-4 py-2 rounded-xl glass-card animate-float" style={{ animationDelay: '4s' }}>
                <span className="text-neon-purple font-bold text-lg">30+</span>
                <span className="text-gray-400 text-xs block">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-500 rounded-full ${
                  current === i ? 'w-10 h-3 bg-electric' : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric/50 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
