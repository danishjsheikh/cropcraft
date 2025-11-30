import React from "react";
import ServiceCard from "../components/ServiceCard";
import "./ServicesPage.css";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Sourcing & Procurement",
      description:
        "Direct sourcing of premium agricultural products from trusted farms in India and other global destinations. Our team conducts rigorous quality checks and maintains close relationships with farmers to ensure consistent supply of the finest commodities.",
      icon: "fas fa-seedling",
    },
    {
      id: 2,
      title: "Export Operations",
      description:
        "Comprehensive export services from India and other global destinations to global markets. We handle all aspects of international trade including documentation, compliance, and regulatory requirements with expertise and precision.",
      icon: "fas fa-plane-departure",
    },
    {
      id: 3,
      title: "Re-Export from UAE",
      description:
        "Leveraging Dubai's strategic position as a global trade hub, we offer efficient re-export services to Middle Eastern, African, and European markets with reduced costs and faster delivery times.",
      icon: "fas fa-globe",
    },
    {
      id: 4,
      title: "Logistics & Supply Chain",
      description:
        "End-to-end logistics management including freight coordination, warehousing, and distribution. Access to world-class ports like Jebel Ali ensures reliable and cost-effective shipping solutions.",
      icon: "fas fa-shipping-fast",
    },
    // {
    //   id: 5,
    //   title: "Documentation & Compliance",
    //   description:
    //     "Complete management of export/import documentation, customs clearance, and regulatory compliance. We ensure all shipments meet international standards and destination country requirements.",
    //   icon: "fas fa-file-contract",
    // },
    {
      id: 6,
      title: "Quality Assurance",
      description:
        "Stringent quality control at every stage from farm to destination. Our inspection protocols ensure products meet the highest international standards for freshness, grade, and packaging.",
      icon: "fas fa-certificate",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive agricultural export solutions backed by expertise</p>
        </div>
      </div>

      <section className="services-main section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-intro">
            From sourcing to delivery, we provide complete export solutions that
            combine strategic positioning in Dubai with deep agricultural expertise
            and commitment to quality.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose section">
        <div className="container">
          <h2 className="section-title">Why Choose Cropcraft</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Experienced Leadership</h3>
              <p>
                Led by Morris Wadhwani with 30+ years of dedicated expertise in
                all facets of the export business.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Strategic Location</h3>
              <p>
                Based in Dubai, UAE - a central trade hub with access to 2.5
                billion consumers and world-class logistics infrastructure.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Trusted Partnerships</h3>
              <p>
                Strong farmer networks in India and other Global Destinations ensure
                consistent supply of premium quality products.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-check-double"></i>
              </div>
              <h3>Quality First</h3>
              <p>
                Rigorous quality control processes at every stage ensure you
                receive only the finest agricultural commodities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Let's discuss how Cropcraft can meet your agricultural commodity
              needs with excellence and reliability.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
