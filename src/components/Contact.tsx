import { useState, type FormEvent } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, MapPin, Phone, Send, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'demondchonte@gmail.com', href: 'dkloft4@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+254 713 905 761', href: 'tel:+254 713 905 761' },
  { icon: MapPin, label: 'Location', value: 'Nairobi,Kenya', href: '#' },
];

export default function Contact() {
  const { ref, isVisible } = useInView();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-electric text-sm font-semibold tracking-widest uppercase">Let's Connect</span>
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric to-neon-purple mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <h3 className="font-[family-name:var(--font-family-heading)] text-2xl font-bold text-white">
              Let's talk about your next project
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm always excited to work on new and challenging projects. Whether you need a complete web application
              or want to improve an existing one, I'm here to help bring your vision to life.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center gap-4 group p-4 glass-card rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                    <Icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider">{label}</span>
                    <p className="text-white font-medium group-hover:text-electric transition-colors">{value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 ml-auto group-hover:text-electric transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Your Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-xl text-white text-sm focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Your Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-xl text-white text-sm focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-gray-600"
                    placeholder="john@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={e => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-xl text-white text-sm focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-gray-600"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Message</label>
                <textarea
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-xl text-white text-sm focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-electric to-neon-blue text-dark-900 hover:shadow-xl hover:shadow-electric/25 hover:-translate-y-0.5'
                }`}
              >
                {submitted ? (
                  '✓ Message Sent Successfully!'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
