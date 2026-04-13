import { useInView } from '../hooks/useInView';
import { Zap, Target, Users, Award } from 'lucide-react';

const stats = [
  { icon: Zap, label: 'Years Experience', value: '5+', color: 'text-electric' },
  { icon: Target, label: 'Projects Completed', value: '50+', color: 'text-neon-purple' },
  { icon: Users, label: 'Happy Clients', value: '30+', color: 'text-neon-pink' },
  { icon: Award, label: 'Awards Won', value: '8', color: 'text-yellow-400' },
];

export default function About() {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-electric text-sm font-semibold tracking-widest uppercase">Get To Know Me</span>
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image & decorative */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-electric/20 to-neon-purple/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-electric/20">
                <img
                  src="/images/profile.jpg"
                  alt="About me"
                  className="w-full h-[450px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 text-center">
                <span className="font-[family-name:var(--font-family-heading)] text-4xl font-bold gradient-text">5+</span>
                <p className="text-gray-400 text-sm mt-1">Years of<br />Experience</p>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <h3 className="font-[family-name:var(--font-family-heading)] text-2xl md:text-3xl font-bold text-white">
              A Passionate Frontend Developer Based in Nairobi Kenya
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a creative frontend developer with over 5 years of experience building modern, 
              responsive web applications. I specialize in React, TypeScript, and modern CSS frameworks, 
              with a keen eye for design and user experience.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in web development started with a curiosity for how things work on the internet. 
              Today, I transform complex business requirements into intuitive, performant digital 
              experiences. I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers. I'm always open to new challenges and 
              opportunities to create something amazing.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map(({ icon: Icon, label, value, color }, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center group hover:-translate-y-1 transition-all duration-300">
                  <Icon className={`w-6 h-6 ${color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <span className="font-[family-name:var(--font-family-heading)] text-2xl font-bold text-white block">{value}</span>
                  <span className="text-gray-500 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
