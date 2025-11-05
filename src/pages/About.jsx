import {RevealOnScroll} from '../components/RevealOnScroll'

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TailwindCSS", "HTML", "CSS"];
  const backendSkills = ["Python", "C"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-white-400 mb-6">
            Software Engineering student passionate about technology and development.
            I’m constantly seeking to learn and improve my programming skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Front-End */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Front-End</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Back-End */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back-End</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 translate-all">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>    
                <ul className="list-disc list-inside text-white-400 space-y-2">
                    <li>
                        <strong>Studying Software Enginner</strong> - FIAP (2025-?)
                    </li>

                    <li>
                        Relevant Coursework: Web Development, Edge Computing & Computer Systems, Computational Thinking with Python
                    </li>
                </ul> 
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 translate-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                <div className="space-y-4 text-white-400">
                    <div>
                        <h4 className="font-semi-bold">Looking for oportunities.</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
