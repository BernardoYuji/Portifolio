import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";


export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-red-400 mb-4">
          Project not found
        </h2>
        <Link to="/projects" className="text-blue-400 hover:text-blue-300">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {project.title}
        </h1>

        <p className="text-gray-300 mb-6">{project.description}</p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {project.tech.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          View on GitHub
        </a>

        <div className="mt-8">
          <Link to="/projects" className="text-gray-400 hover:text-purple-400">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
