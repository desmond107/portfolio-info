import { Code2, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800">
      {/* Back to top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <a
          href="#home"
          className="w-12 h-12 rounded-xl bg-electric text-dark-900 flex items-center justify-center hover:shadow-lg hover:shadow-electric/30 hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric to-neon-purple flex items-center justify-center">
              <Code2 className="w-5 h-5 text-dark-900" />
            </div>
            <span className="font-[family-name:var(--font-family-heading)] text-xl font-bold text-white">
              Desmond Kinoti<span className="text-electric">.</span>Portfolio
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-500 hover:text-electric text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm text-right flex items-center justify-end gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-neon-pink" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
