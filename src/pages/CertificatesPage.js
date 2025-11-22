import React from "react";
import CertificateCard from "../components/CertificateCard";
import "./CertificatesPage.css";

const CertificatesPage = () => {
  const certificates = [
    {
      id: 1,
      name: "Trade License",
      description:
        "Official trade license issued by Dubai authorities for import, export, and re-export operations.",
      icon: "/certificates/cropcraft_license.pdf",
    },
    {
      id: 2,
      name: "GST Certificate",
      description:
        "Goods and Services Tax registration certificate enabling compliant business operations.",
      icon: "/certificates/cropcraft_gst.pdf",
    },
    {
      id: 3,
      name: "IEC Certificate",
      description:
        "Importer Exporter Code (IEC) authorization for international trade operations.",
      icon: "/certificates/cropcraft_iec.pdf",
    },
  ];

  return (
    <div className="certificates-page">
      <div className="certificates-hero">
        <div className="container">
          <h1>Our Certifications</h1>
          <p>Quality assurance through recognized certifications and compliance</p>
        </div>
      </div>

      <section className="certificates-section section">
        <div className="container">
          <h2 className="section-title">Official Documentation</h2>
          <p className="section-intro">
            Cropcraft maintains all necessary certifications and licenses to ensure
            smooth, compliant international trade operations.
          </p>
          <div className="certificates-grid">
            {certificates.map((certificate, index) => {
              return (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  delay={index * 100}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="quality-commitment section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <h2>Our Commitment to Excellence</h2>
              <p>
                At Cropcraft, we're dedicated to providing only the highest
                quality agricultural commodities. Our certifications represent
                our ongoing commitment to excellence, compliance, and ethical
                business practices.
              </p>
              <p>
                We work closely with farmers and suppliers who share our vision
                for quality and sustainability. Every step of our supply chain
                is carefully monitored to ensure our high standards are
                consistently met.
              </p>
              <p>
                Our quality control team regularly conducts inspections and
                verifies that all products meet stringent international
                requirements and our own internal quality benchmarks.
              </p>
              <div className="quality-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>International Quality Standards</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Full Regulatory Compliance</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Transparent Supply Chain</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Regular Quality Audits</span>
                </div>
              </div>
            </div>
            <div className="quality-image">
              <img src="/assets/quality_inspection.png" alt="Quality inspection" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificatesPage;
