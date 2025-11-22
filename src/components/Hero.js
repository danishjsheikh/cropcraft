import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const ctaElement = ctaRef.current;

    if (titleElement) titleElement.classList.add('fade-in');
    
    setTimeout(() => {
      if (subtitleElement) subtitleElement.classList.add('fade-in');
    }, 400);
    
    setTimeout(() => {
      if (ctaElement) ctaElement.classList.add('slide-up');
    }, 800);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content container">
        <h1 ref={titleRef}>Premium Agricultural <span>Commodities</span></h1>
        <p ref={subtitleRef}>
          Sourcing excellence from India and East Africa, delivered globally from Dubai. 
          Quality you can trust, logistics you can rely on.
        </p>
        <div className="hero-cta" ref={ctaRef}>
          <Link to="/products" className="btn">Explore Products</Link>
          <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
        </div>
      </div>

      {/* Morris Profile Badge */}
      <div className="morris-intro">
        <h4>Led by Experience</h4>
        <h3>Morris Indru Wadhwani</h3>
        <p>30+ years of dedicated expertise in agricultural export operations</p>
      </div>
    </section>
  );
};

export default Hero;
