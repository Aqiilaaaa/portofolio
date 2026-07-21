import { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <div className="tech-list">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <p>{project.description}</p>

              <button
                className="detail-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;