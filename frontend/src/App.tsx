import React, { useState } from 'react';
import { Terminal, Code, User, Send, ChevronRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Chat } from './components/Chat';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Wanderlust",
      tech: "Node.js, Express, MongoDB, EJS",
      desc: "Full-stack hotel listing application with user authentication and dynamic pricing.",
      link: "https://majorprojectwanderlust-uu9y.onrender.com/listings"
    },
    {
      title: "CineLock",
      tech: "React, Tailwind, Framer Motion",
      desc: "A premium movie ticket booking UI with seat selection and real-time previews.",
      link: "https://cinelockz.netlify.app/"
    },
    {
      title: "Simon Game",
      tech: "JavaScript, HTML5, CSS3",
      desc: "Classic memory game with responsive design and sound effects.",
      link: "https://simon-game-sujay.netlify.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30">
     <nav className="fixed top-0 w-full z-50 glass">
  <div className="w-full px-8 py-4 flex justify-between items-center">
    <span className="font-bold text-primary tracking-tight">
      SUJAY_M_MUNDARAGI
    </span>

    <div className="hidden md:flex items-center gap-10 text-sm font-medium text-secondary">
      <a href="#home" className="hover:text-primary transition">Home</a>
      <a href="#about" className="hover:text-primary transition">About</a>
      <a href="#skills" className="hover:text-primary transition">Skills</a>
      <a href="#projects" className="hover:text-primary transition">Projects</a>
      <a href="#chat" className="hover:text-primary transition">AI Assistant</a>
    </div>
  </div>
</nav>
      {/* Hero Section */}
<section id="home" className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
  <div className="flex flex-col md:flex-row items-center justify-between gap-16">

    {/* Left Content */}
    <div className="flex-1 space-y-6">
      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
        Full Stack Developer
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
        Building <span className="text-primary">Scalable</span> Digital Experiences.
      </h1>

      <div className="flex gap-4 items-center">
        <a
          href="#chat"
          className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition flex items-center gap-2"
        >
          Ask My AI <ChevronRight size={20} />
        </a>

        <div className="flex gap-2">
          <a
            href="https://github.com/sujay-707"
            target="_blank"
            className="p-3 rounded-xl glass hover:text-primary transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/sujay-mundaragi707"
            target="_blank"
            className="p-3 rounded-xl glass hover:text-primary transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>

    {/* Right Image + Text */}
    <div className="flex flex-col items-center">

      {/* Profile Image */}
      <div className="w-64 h-64 md:w-80 md:h-80 relative group">
        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>

        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
          <img
            src="/profile.jpg"
            alt="Sujay"
            className="w-full h-full object-fit object-top grayscale group-hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>

      {/* Text Below Image */}
      <p className="mt-6 text-sm md:text-base text-secondary font-medium tracking-wide">
        MCA Student | Seeking Opportunities
      </p>

    </div>

  </div>
</section>


<section id="about" className="py-10 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-8">About</h2>
  <p className="text-secondary leading-relaxed max-w-3xl">
    I am currently pursuing Master of Computer Applications (MCA) at 
    New Horizon College of Engineering, Bangalore with a CGPA of 9.23 
    <br></br> 
    I completed my BCA from KLE PC Jabin Science College, Hubli with First Class with Distinction. 
    I am interested in full-stack development and building practical web applications.
  </p>
</section>
<section id="skills" className="py-12 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-12">Skills</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="glass p-6 rounded-xl">
      <h3 className="font-bold text-primary mb-3">Programming</h3>
      <p>Java, JavaScript, HTML5, CSS3</p>
    </div>
    <div className="glass p-6 rounded-xl">
      <h3 className="font-bold text-primary mb-3">Frameworks</h3>
      <p>React.js, Express.js, Node.js</p>
    </div>
    <div className="glass p-6 rounded-xl">
      <h3 className="font-bold text-primary mb-3">Database & Tools</h3>
      <p>MongoDB, Git, GitHub, Postman</p>
    </div>
  </div>
</section>
      {/* Projects */}
      <section id="projects" className="py-13 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <Code className="text-primary" /> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="glass p-8 rounded-2xl group hover:border-primary/50 transition duration-300">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{p.title}</h3>
              <p className="text-sm text-secondary mb-4 line-clamp-2">{p.desc}</p>
              <div className="text-xs font-mono text-primary/70 mb-6 uppercase tracking-wider">{p.tech}</div>
              <a href={p.link} target="_blank" className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                Live Preview <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="chat" className="py-12 px-6 max-w-7xl mx-auto">
        <div className="glass rounded-3xl overflow-hidden shadow-3xl border border-white/5">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">AI Assistant</h2>
              <p className="text-secondary text-sm">Ask me about my skills, projects, or experience</p>
            </div>
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <User size={24} />
            </div>
          </div>
          <Chat />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-secondary text-sm">
        <p>© 2026 Sujay M Mundaragi. Made with React & Passion.</p>
      </footer>
    </div>
  );
}

export default App;
