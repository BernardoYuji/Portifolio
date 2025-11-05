import { useState } from "react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { projectsData } from "../data/projectsData"

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
           Projects
          </h2>

          {/* 🔍 Barra de busca */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* 🧱 Lista de projetos */}
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-400">
              Nenhum projeto localizado.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
