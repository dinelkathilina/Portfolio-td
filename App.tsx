import React, { useState } from 'react';
import { NeoBox, NeoButton, NeoInput, NeoTextArea, NeoBadge } from './components/NeoComponents';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, SOCIAL_LINKS } from './constants';
import { Project } from './types';

// Icons
const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neo-bg text-neo-black p-4 sm:p-8 font-sans selection:bg-neo-pink selection:text-black">
      
      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-12 sm:mb-20 sticky top-4 z-50">
        <NeoBox className="bg-white px-4 py-2 font-bold text-xl tracking-tighter flex items-center gap-2">
           <div className="w-4 h-4 bg-neo-green border-2 border-black"></div>
           TD.dev
        </NeoBox>
        <div className="hidden sm:flex gap-4">
          <NeoButton variant="secondary" onClick={() => handleScrollTo('projects')}>Projects</NeoButton>
          <NeoButton onClick={() => handleScrollTo('contact')}>Contact Me</NeoButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        {/* Left: Intro Text */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <NeoBox className="p-8 sm:p-12 bg-white relative overflow-visible mb-8">
            <div className="absolute -top-4 -right-4 bg-neo-yellow px-4 py-2 border-2 border-black font-bold shadow-neo-sm transform rotate-2">
              Open for Work
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-none">
              HELLO,<br />
              I'M <span className="text-stroke-black text-transparent bg-clip-text bg-gradient-to-r from-neo-pink to-neo-blue underline decoration-4 decoration-black decoration-skip-ink">THILINA</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold mb-6 bg-neo-green inline-block border-2 border-black px-2 py-1">
              {PERSONAL_INFO.role.toUpperCase()}
            </h2>
            <p className="text-lg sm:text-xl font-mono leading-relaxed mb-8 border-l-4 border-black pl-4">
              {PERSONAL_INFO.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                   <NeoButton variant="secondary" className="flex items-center gap-2">
                     {link.name} <ExternalLinkIcon />
                   </NeoButton>
                </a>
              ))}
            </div>
          </NeoBox>
        </div>

        {/* Right: Image & Quick Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <NeoBox className="bg-neo-blue p-2 aspect-square sm:aspect-auto sm:h-full relative group">
            {/* Placeholder for user image - using a style that matches the request */}
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Thilina Dinelka" 
              className="w-full h-full object-cover border-2 border-black filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 right-6 bg-white border-2 border-black p-3 shadow-neo font-bold">
              📍 {PERSONAL_INFO.location}
            </div>
          </NeoBox>
        </div>
      </section>

      {/* Skills Terminal */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-4xl font-bold bg-white border-2 border-black px-4 py-2 shadow-neo inline-block">
            TECH_STACK
          </h2>
          <div className="h-1 bg-black flex-grow border-y-2 border-black bg-stripes"></div>
        </div>
        
        <NeoBox variant="terminal">
          <div className="font-mono text-sm sm:text-base">
            <div className="mb-6">
              <span className="text-neo-pink">user@thilina:~$</span> cat skills.json
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h3 className="text-neo-yellow font-bold mb-4 text-lg border-b border-gray-700 pb-2">{'{'} "Frontend" : [</h3>
                  <div className="pl-4 flex flex-wrap gap-3 mb-2">
                    {SKILLS.frontend.map(skill => (
                      <span key={skill} className="text-neo-blue hover:text-white cursor-default">"{skill}",</span>
                    ))}
                  </div>
                  <h3 className="text-neo-yellow font-bold text-lg">],</h3>
               </div>

               <div>
                  <h3 className="text-neo-yellow font-bold mb-4 text-lg border-b border-gray-700 pb-2">"Backend" : [</h3>
                  <div className="pl-4 flex flex-wrap gap-3 mb-2">
                    {SKILLS.backend.map(skill => (
                      <span key={skill} className="text-neo-pink hover:text-white cursor-default">"{skill}",</span>
                    ))}
                  </div>
                  <h3 className="text-neo-yellow font-bold text-lg">],</h3>
               </div>

               <div>
                  <h3 className="text-neo-yellow font-bold mb-4 text-lg border-b border-gray-700 pb-2">"Database" : [</h3>
                  <div className="pl-4 flex flex-wrap gap-3 mb-2">
                    {SKILLS.database.map(skill => (
                      <span key={skill} className="text-green-400 hover:text-white cursor-default">"{skill}",</span>
                    ))}
                  </div>
                  <h3 className="text-neo-yellow font-bold text-lg">],</h3>
               </div>

               <div>
                  <h3 className="text-neo-yellow font-bold mb-4 text-lg border-b border-gray-700 pb-2">"DevOps" : [</h3>
                  <div className="pl-4 flex flex-wrap gap-3 mb-2">
                    {SKILLS.tools.map(skill => (
                      <span key={skill} className="text-purple-400 hover:text-white cursor-default">"{skill}"</span>
                    ))}
                  </div>
                  <h3 className="text-neo-yellow font-bold text-lg">] {'}'}</h3>
               </div>
            </div>
             <div className="mt-6 animate-pulse">
              <span className="text-neo-pink">user@thilina:~$</span> <span className="w-3 h-5 bg-neo-green inline-block align-middle"></span>
            </div>
          </div>
        </NeoBox>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-7xl mx-auto mb-24">
         <div className="flex items-center gap-4 mb-8 flex-row-reverse">
          <h2 className="text-4xl font-bold bg-white border-2 border-black px-4 py-2 shadow-neo inline-block">
            EXPERIENCE
          </h2>
          <div className="h-1 bg-black flex-grow border-y-2 border-black"></div>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <NeoBox key={index} className="bg-white p-6 sm:p-8 relative">
              <div className="absolute -top-3 -left-3 bg-neo-purple border-2 border-black px-3 py-1 font-bold text-sm shadow-neo-sm">
                {exp.period}
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 border-b-2 border-black pb-4 border-dashed">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">{exp.company}</h3>
                  <p className="text-lg font-mono text-gray-600">{exp.role}</p>
                </div>
                <div className="text-3xl hidden sm:block">💼</div>
              </div>
              <ul className="list-none space-y-3 font-mono text-sm sm:text-base">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-neo-pink font-bold text-xl">»</span>
                    {point}
                  </li>
                ))}
              </ul>
            </NeoBox>
          ))}
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section id="projects" className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-black text-center bg-neo-yellow border-2 border-black px-6 py-2 shadow-neo mb-4">
            FEATURED_WORK
          </h2>
          <p className="font-mono text-center max-w-md">
            A selection of projects focusing on performance, scalability, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {PROJECTS.map((project, idx) => (
            <NeoBox 
              key={idx} 
              className={`p-6 flex flex-col justify-between h-full ${project.color} ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-black text-white px-3 py-1 font-mono text-xs font-bold border border-white">
                    0{idx + 1}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white border-2 border-black hover:bg-black hover:text-white transition-colors rounded-full">
                    <ExternalLinkIcon />
                  </a>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">{project.title}</h3>
                <p className="font-mono text-sm sm:text-base mb-6 bg-white/50 p-2 border border-black inline-block w-full">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <NeoBadge key={t} color="bg-white">{t}</NeoBadge>
                ))}
              </div>
            </NeoBox>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto mb-20">
        <NeoBox className="bg-neo-pink p-8 sm:p-12 text-center border-4">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase bg-white inline-block px-4 py-2 border-2 border-black shadow-neo transform -rotate-2">
            Let's Connect!
          </h2>
          <p className="font-mono text-lg mb-8 bg-white/80 p-4 border-2 border-black">
            Interested in working together? I'm currently open for new opportunities.
          </p>

          <form className="space-y-4 text-left bg-white p-6 border-2 border-black shadow-neo-lg" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block font-bold mb-2 font-mono text-sm uppercase">Your Name</label>
              <NeoInput 
                type="text" 
                placeholder="John Doe" 
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block font-bold mb-2 font-mono text-sm uppercase">Email Address</label>
              <NeoInput 
                type="email" 
                placeholder="john@example.com"
                value={formData.email} 
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block font-bold mb-2 font-mono text-sm uppercase">Message</label>
              <NeoTextArea 
                rows={4} 
                placeholder="Tell me about your project..."
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <NeoButton className="w-full text-lg" type="submit">
              SEND MESSAGE 🚀
            </NeoButton>
          </form>
        </NeoBox>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4 pb-8 font-mono text-sm">
        <div className="bg-black text-white px-4 py-1">
          &copy; 2025 Thilina Dinelka
        </div>
        <div className="flex gap-6 font-bold">
          {SOCIAL_LINKS.map(link => (
             <a key={link.name} href={link.url} className="hover:underline hover:bg-neo-yellow px-1">
               {link.name}
             </a>
          ))}
        </div>
      </footer>

    </div>
  );
};

export default App;