
import React, { useEffect, useState } from 'react';
import { Mail, Phone, Github, Linkedin, ArrowRight, MapPin, Send, Plus } from 'lucide-react';
import { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, AWARDS, SKILLS } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight">
            RK<span className="text-indigo-500">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <button onClick={() => scrollTo('impact')} className="hover:text-white transition-colors">Impact</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Career</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">About</button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5 border-r border-white/10 pr-6">
              <a href={`mailto:${PROFILE.email}`} title="Email" className="text-zinc-500 hover:text-white transition-all"><Mail size={18} /></a>
              <a href={`tel:${PROFILE.phone}`} title="Call" className="text-zinc-500 hover:text-white transition-all"><Phone size={18} /></a>
              <a href="https://linkedin.com/in/rushikesh-kulkarni-apm" target="_blank" className="text-zinc-500 hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
            <button onClick={() => scrollTo('contact')} className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-56 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-12">
              Rushikesh <br />
              <span className="text-zinc-600">Kulkarni</span>
              <span className="block text-3xl md:text-5xl text-zinc-800 mt-4 font-medium tracking-tight">Associate Product Manager</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-16 max-w-2xl">
              {PROFILE.bio}
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <button 
                onClick={() => scrollTo('impact')} 
                className="px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-indigo-600 hover:text-white transition-all group"
              >
                View Impact <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600">
                <MapPin size={16} /> {PROFILE.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Impact Section */}
      <section id="impact" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Product Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group p-8 md:p-10 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-indigo-500/40 transition-all flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-indigo-500 font-mono text-xs tracking-widest">0{idx + 1}</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 text-[9px] uppercase font-bold tracking-tighter text-zinc-500 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 shadow-[0_0_8px_rgba(99,102,241,0.4)]"></div>
                      <span className="text-xs font-semibold text-zinc-400 group-hover:text-zinc-200 transition-colors">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section - Hover to Reveal Details */}
      <section id="experience" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Career</h2>
          </div>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => (
              <div 
                key={idx} 
                className="group relative border-b border-white/5 py-8 first:pt-0 hover:bg-white/[0.01] transition-all px-4 rounded-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                  <div className="md:col-span-3">
                    <p className="text-zinc-600 font-bold text-xs uppercase tracking-[0.2em]">{exp.period}</p>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">{exp.company}</h3>
                  </div>
                  <div className="md:col-span-4 flex justify-between items-center">
                    <p className="text-zinc-400 font-medium">{exp.role}</p>
                    <Plus size={20} className="text-zinc-700 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                {/* Details revealed on hover */}
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:pt-8 transition-all duration-500 ease-in-out">
                  <div className="md:pl-[25%] lg:pl-[25%] max-w-3xl">
                    <ul className="space-y-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-zinc-500 text-lg leading-relaxed flex gap-4">
                          <span className="text-indigo-500/40 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="skills" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Capabilities</h2>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-24">
                <h3 className="text-3xl font-bold mb-10 tracking-tight">Education</h3>
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="group">
                    <p className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">{edu.institution}</p>
                    <p className="text-zinc-400 text-lg">{edu.degree}</p>
                    <div className="flex gap-4 mt-2 text-xs font-bold uppercase tracking-widest text-zinc-600">
                      <span>{edu.grade}</span>
                      <span>|</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-12 tracking-tight text-zinc-500">Recognition</h2>
              <div className="space-y-16">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="group border-l border-zinc-800 pl-8 py-2 hover:border-indigo-500 transition-colors">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 block">{award.year}</span>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors tracking-tight">{award.title}</h4>
                    <p className="text-zinc-500 leading-relaxed text-lg font-light">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Contact Section */}
      <section id="contact" className="py-60 px-6 border-t border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
            Let's connect and <br />
            <span className="italic text-zinc-600 font-light">build what matters.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 mb-16 font-light max-w-2xl mx-auto">
            Always open to discussing product growth, data-driven experiments, or the next 0→1 journey.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
            <a href={`mailto:${PROFILE.email}`} className="px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-4">
              <Send size={24} /> Get in Touch
            </a>
            <a href={`tel:${PROFILE.phone}`} className="px-12 py-6 border border-white/20 text-white rounded-full font-bold text-xl hover:bg-white/5 transition-all">
              +91 {PROFILE.phone}
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-12 text-zinc-600">
            <a href="https://linkedin.com/in/rushikesh-kulkarni-apm" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]"><Linkedin size={20} /> LinkedIn</a>
            <a href="https://github.com/rushik" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]"><Github size={20} /> GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-zinc-800 text-[10px] font-bold uppercase tracking-[0.4em]">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} {PROFILE.name} | PRODUCT LEADERSHIP</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
