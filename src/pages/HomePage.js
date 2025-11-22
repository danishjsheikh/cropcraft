import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import UAEAdvantage from "../components/UAEAdvantage";
import MorrisProfile from "../components/MorrisProfile";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Semi-Husked Coconuts",
      description: `<p>Premium quality semi-husked coconuts from Pollachi, Tamil Nadu. Rich in coconut water with thick, firm white meat.</p>`,
      image: ["/assets/products/coconuts/coconut.jpg"],
      category: "coconut",
      origin: "India"
    },
    {
      id: 2,
      name: "Matti Rice",
      description: `<p>Unpolished red rice from Karnataka and Kerala with rich nutritional value and earthy flavor.</p>`,
      image: ["/assets/products/rice/matti_rice.jpg"],
      category: "rice",
      origin: "India"
    },
    {
      id: 3,
      name: "Red Onions",
      description: `<p>Premium red onions from Nashik, Maharashtra - India's onion heartland. Deep color and excellent shelf life.</p>`,
      image: ["/assets/products/onions/onion.jpg"],
      category: "onion",
      origin: "India"
    },
    {
      id: 4,
      name: "Pomegranates",
      description: `<p>Juicy, sweet pomegranates from Nashik with vibrant red arils packed with antioxidants.</p>`,
      image: ["/assets/products/pomegranate/pomegranate.jpg"],
      category: "pomegranate",
      origin: "India"
    },
    {
      id: 5,
      name: "Avocados (Hass & Fuerte)",
      description: `<p>Premium avocados from Kenya and Uganda with rich, creamy texture and high oil content.</p>`,
      image: ["/assets/products/avocados/avocado.jpg"],
      category: "avocado",
      origin: "Kenya"
    },
    {
      id: 6,
      name: "Bananas (Multiple Varieties)",
      description: `<p>Cavendish, Elaichi, and Red bananas from Nashik and Tamil Nadu. Sweet, aromatic, and nutritious.</p>`,
      image: ["/assets/products/bananas/bananas.jpg"],
      category: "banana",
      origin: "India"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Sourcing & Procurement",
      description: "Direct sourcing of premium agricultural products from trusted farms in India and East Africa with stringent quality checks.",
      icon: "fas fa-seedling"
    },
    {
      id: 2,
      title: "Export & Re-Export",
      description: "Seamless export operations from UAE to global markets, leveraging Dubai's strategic position as a trade hub.",
      icon: "fas fa-globe"
    },
    {
      id: 3,
      title: "Logistics & Supply Chain",
      description: "Efficient coordination of transport, freight, and customs clearance through world-class ports and airports.",
      icon: "fas fa-shipping-fast"
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      <UAEAdvantage />

      <section className="featured-products section">
        <div className="container">
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">
            Sourcing the finest agricultural commodities from renowned regions, 
            delivered with uncompromising quality standards.
          </p>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <MorrisProfile />

      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive export solutions powered by experience and strategic positioning
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={index * 150}
              />
            ))}
          </div>
          <div className="view-all">
            <Link to="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Source Premium Commodities?</h2>
            <p>
              Partner with Cropcraft for reliable supply, competitive pricing, 
              and excellence in every shipment.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
