import React from 'react';
import './UAEAdvantage.css';

const UAEAdvantage = () => {
  const advantages = [
    {
      icon: "fas fa-globe-asia",
      stat: "2.5B+",
      label: "Consumers Accessible",
      description: "Within 4-hour flight to Asia, Africa, and Europe markets"
    },
    {
      icon: "fas fa-ship",
      stat: "#9",
      label: "Jebel Ali Port",
      description: "World's 9th busiest container port with advanced facilities"
    },
    {
      icon: "fas fa-clock",
      stat: "24/7",
      label: "Efficient Logistics",
      description: "Streamlined customs clearance and shipping operations"
    },
    {
      icon: "fas fa-chart-line",
      stat: "Lower",
      label: "Shipping Costs",
      description: "Reduced transportation expenses and delivery times"
    }
  ];

  return (
    <section className="uae-advantage section">
      <div className="container">
        <h2 className="section-title">Strategically Positioned in Dubai</h2>
        <p className="section-intro">
          Cropcraft leverages the UAE's position as a global trade hub to provide 
          competitive pricing, faster delivery, and seamless re-export capabilities 
          to international markets.
        </p>
        
        <div className="advantages-grid">
          {advantages.map((adv, index) => (
            <div className="advantage-card" key={index}>
              <div className="advantage-icon">
                <i className={adv.icon}></i>
              </div>
              <div className="advantage-stat">{adv.stat}</div>
              <h3>{adv.label}</h3>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>

        <div className="uae-benefits">
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Access to world-class ports and airports</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Strategic location at crossroads of international trade</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Business-friendly environment with tax advantages</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Advanced infrastructure for efficient supply chain management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEAdvantage;
