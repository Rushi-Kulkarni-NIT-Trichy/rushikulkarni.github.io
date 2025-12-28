
import React, { useEffect, useState } from 'react';
import { Mail, Phone, Github, Linkedin, ArrowRight, MapPin, Send, Plus } from 'lucide-react';
import { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, AWARDS, SKILLS } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Small threshold to make the transition feel natural
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      {/* Navigation - Improved transition to prevent "bold" line snap */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'bg-black/70 backdrop-blur-xl py-4 border-b border-white/[0.05]' 
          : 'bg-transparent py-8 border-b border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tighter">
            RK<span className="text-indigo-500">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
            <button onClick={() => scrollTo('impact')} className="hover:text-white transition-colors">Impact</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Career</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">About</button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5 border-r border-white/5 pr-6">
              <a href={`mailto:${PROFILE.email}`} title="Email" className="text-zinc-500 hover:text-white transition-all"><Mail size={16} /></a>
              <a href="https://linkedin.com/in/rushikesh-kulkarni-apm" target="_blank" className="text-zinc-500 hover:text-white transition-all"><Linkedin size={16} /></a>
            </div>
            <button onClick={() => scrollTo('contact')} className="px-5 py-2 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-64 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
              Rushikesh <br />
              <span className="text-zinc-700">Kulkarni</span>
              <span className="block text-2xl md:text-4xl text-zinc-800 mt-6 font-medium tracking-tight">Associate Product Manager @ Purplle</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-16 max-w-2xl">
              {PROFILE.bio}
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <button 
                onClick={() => scrollTo('impact')} 
                className="px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-indigo-600 hover:text-white transition-all group"
              >
                Explore Impact <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                <MapPin size={14} className="text-indigo-500/50" /> {PROFILE.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Impact Section - Using Zinc for softer borders */}
      <section id="impact" className="py-32 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Impact Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group p-8 md:p-12 bg-zinc-900/10 border border-zinc-900 rounded-[2.5rem] hover:border-indigo-500/30 transition-all flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-indigo-500/50 font-mono text-xs tracking-widest">PROJECT_0{idx + 1}</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 text-[9px] uppercase font-bold tracking-tighter text-zinc-500 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-indigo-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-base leading-relaxed mb-12 flex-grow font-light">
                  {project.description}
                </p>
                <div className="space-y-4 pt-8 border-t border-zinc-900">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40"></div>
                      <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors italic">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section - Seamless borders */}
      <section id="experience" className="py-32 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Career Journey</h2>
          </div>
          <div className="space-y-2">
            {EXPERIENCE.map((exp, idx) => (
              <div 
                key={idx} 
                className="group relative border-b border-zinc-900 py-10 first:pt-0 hover:bg-zinc-900/20 transition-all px-6 rounded-3xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-center">
                  <div className="md:col-span-3">
                    <p className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.25em]">{exp.period}</p>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">{exp.company}</h3>
                  </div>
                  <div className="md:col-span-4 flex justify-between items-center">
                    <p className="text-zinc-400 font-medium text-lg italic">{exp.role}</p>
                    <Plus size={20} className="text-zinc-700 group-hover:rotate-45 group-hover:text-indigo-500 transition-all" />
                  </div>
                </div>

                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[600px] group-hover:opacity-100 group-hover:pt-10 transition-all duration-700 ease-in-out">
                  <div className="md:pl-[25%] lg:pl-[25%] max-w-3xl">
                    <ul className="space-y-5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-zinc-500 text-lg leading-relaxed flex gap-5">
                          <span className="text-indigo-500/30 font-bold select-none">—</span>
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

      {/* About Section - Subtler dividers */}
      <section id="skills" className="py-32 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
              <h2 className="text-[10px] font-bold mb-12 uppercase tracking-[0.3em] text-zinc-600">Core Expertise</h2>
              <div className="flex flex-wrap gap-4">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-6 py-4 bg-zinc-900/40 border border-zinc-900 rounded-2xl text-xs font-bold uppercase tracking-widest hover:border-indigo-500/40 hover:bg-zinc-900 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-32">
                <h3 className="text-[10px] font-bold mb-12 uppercase tracking-[0.3em] text-zinc-600">Education</h3>
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="group">
                    <p className="text-3xl font-bold mb-3 group-hover:text-indigo-500 transition-colors leading-tight">{edu.institution}</p>
                    <p className="text-zinc-400 text-xl font-light italic">{edu.degree}</p>
                    <div className="flex gap-6 mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                      <span className="text-indigo-500/60">{edu.grade}</span>
                      <span className="text-zinc-800">|</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold mb-12 uppercase tracking-[0.3em] text-zinc-600">Recognition</h2>
              <div className="space-y-20">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="group border-l-2 border-zinc-900 pl-10 py-2 hover:border-indigo-500 transition-all duration-500">
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.25em] mb-4 block">{award.year}</span>
                    <h4 className="text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors tracking-tight">{award.title}</h4>
                    <p className="text-zinc-500 leading-relaxed text-lg font-light italic">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-60 px-6 border-t border-zinc-900 text-center relative overflow-hidden bg-zinc-950/20">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter leading-tight">
            Ready to <br />
            <span className="text-zinc-800 italic font-light">ship things faster?</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-20">
            <a href={`mailto:${PROFILE.email}`} className="px-14 py-7 bg-white text-black rounded-full font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-4">
              <Send size={22} /> Say Hello
            </a>
            <a href={`tel:${PROFILE.phone}`} className="px-14 py-7 border border-zinc-800 text-zinc-400 rounded-full font-bold text-lg hover:bg-zinc-900 hover:text-white transition-all">
              +91 {PROFILE.phone}
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-12 mt-24">
            <a href="https://linkedin.com/in/rushikesh-kulkarni-apm" target="_blank" className="text-zinc-600 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.25em] text-[10px]">LinkedIn</a>
            <a href="https://github.com/rushik" target="_blank" className="text-zinc-600 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.25em] text-[10px]">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-900 text-center text-zinc-800 text-[9px] font-bold uppercase tracking-[0.5em]">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} {PROFILE.name} — BUILDING FOR THE NEXT BILLION</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
