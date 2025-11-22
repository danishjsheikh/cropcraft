import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and partnerships</p>
        </div>
      </div>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-content-wrapper">
            <div className="contact-info-card">
              <h2>Get in Touch</h2>

              <div className="info-blocks-wrapper">
                <div className="info-block">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>Dubai Office</h3>
                    <p>
                      <a href="https://maps.app.goo.gl" target="_blank" rel="noopener noreferrer">
                        Property Investment Office 4<br />
                        F1 316, 1st Floor<br />
                        Dubai Investment Park First<br />
                        Dubai, UAE
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-details-grid">
                  <div className="info-block contact-detail-item">
                    <div className="info-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info-content">
                      <h3>Phone</h3>
                      <p>
                        <a href="tel:+971522029135">+971 52 202 9135</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-block contact-detail-item">
                    <div className="info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:info@cropcraft.ae">
                          info@cropcraft.ae
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="info-block contact-detail-item">
                    <div className="info-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="info-content">
                      <h3>Working Hours</h3>
                      <p>Sun – Thu: 9:00 AM – 6:00 PM</p>
                      <p>Sat: 10:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section">
        <div className="container">
          <div className="about-summary-card">
            <h2>About Cropcraft Goods Wholesalers LLC</h2>
            <div className="about-summary-content">
              <p className="company-intro">
                Cropcraft Goods Wholesalers LLC is a Dubai-based agricultural
                commodities trading company specializing in import, export, and
                re-export operations. We source premium products from India and
                East Africa, delivering quality and reliability to global markets.
              </p>

              <div className="info-boxes-container">
                <div className="company-mission">
                  <h3>Our Mission</h3>
                  <p>
                    To connect premium agricultural commodities with global markets
                    while maintaining the highest standards of quality, building
                    sustainable relationships with farmers and clients worldwide.
                  </p>
                </div>

                <div className="company-vision">
                  <h3>Our Vision</h3>
                  <p>
                    To become a leading agricultural export company known for
                    excellence, leveraging Dubai's strategic position to serve
                    markets across Asia, Africa, and Europe.
                  </p>
                </div>

                <div className="company-expertise">
                  <h3>Our Expertise</h3>
                  <p>
                    With deep knowledge in quality control, international logistics,
                    and regulatory compliance, we handle every aspect from sourcing
                    to delivery with precision and care.
                  </p>
                </div>
              </div>

              <div className="value-tags">
                <span>Quality Excellence</span>
                <span>Strategic Positioning</span>
                <span>Trusted Partnerships</span>
                <span>Global Reach</span>
                <span>Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
