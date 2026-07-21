function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>{project.title}</h2>

        <div className="gallery">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={project.title}
            />
          ))}
        </div>

        <h3> Deskripsi</h3>

        <p>{project.description}</p>

        <h3> Teknologi</h3>

        <div className="tech-list">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="tech-badge"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;