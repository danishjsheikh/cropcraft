import React from 'react';
import './MorrisProfile.css';

const MorrisProfile = () => {
  return (
    <section className="morris-profile section">
      <div className="container">
        <div className="profile-content profile-no-image">
          <div className="profile-text">
            <h2>Led by Expertise</h2>
            <h3>Morris Indru Wadhwani</h3>
            <p className="profile-title">Managing Partner</p>
            
            <div className="profile-badge-alt">
              <i className="fas fa-award"></i>
              <span>30+ Years Experience</span>
            </div>
            
            <p className="profile-bio">
              Cropcraft Goods Wholesalers LLC is headed by Morris Wadhwani, a dedicated 
              professional with over 30 years of comprehensive experience across all 
              facets of the agricultural export business. His expertise spans quality 
              control, international logistics, regulatory compliance, and building 
              lasting relationships with suppliers and clients worldwide.
            </p>

            <div className="expertise-tags">
              <span><i className="fas fa-check"></i> Export Operations</span>
              <span><i className="fas fa-check"></i> Quality Assurance</span>
              <span><i className="fas fa-check"></i> Supply Chain Management</span>
              <span><i className="fas fa-check"></i> International Trade</span>
              <span><i className="fas fa-check"></i> Regulatory Compliance</span>
            </div>

            <div className="profile-contact">
              <a href="tel:+971522029135" className="contact-link">
                <i className="fas fa-phone"></i>
                +971 52 202 9135
              </a>
              <a href="mailto:morris@cropcraft.ae" className="contact-link">
                <i className="fas fa-envelope"></i>
                morris@cropcraft.ae
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorrisProfile;
