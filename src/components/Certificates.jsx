import { Award } from "lucide-react";
import { useState } from "react";

import certificates from "../data/certificates";
import CertificateModal from "./CertificateModal";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div
            className="certificate-card"
            key={certificate.id}
          >
            <div className="certificate-icon">
              <Award size={60} />
            </div>

            <div className="certificate-content">
              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <span>{certificate.year}</span>

              <button
                className="detail-btn"
                onClick={() => setSelectedCertificate(certificate)}
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}

export default Certificates;