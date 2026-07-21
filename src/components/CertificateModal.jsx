function CertificateModal({ certificate, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{certificate.title}</h2>

        <div className="gallery">
          {certificate.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${certificate.title} ${index + 1}`}
              className="certificate-preview"
            />
          ))}
        </div>

        <h3>Issuer</h3>
        <p>{certificate.issuer}</p>

        <h3>Year</h3>
        <p>{certificate.year}</p>

        <h3>Description</h3>
        <p>{certificate.description}</p>
      </div>
    </div>
  );
}

export default CertificateModal;