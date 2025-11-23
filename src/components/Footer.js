import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3>Cropcraft</h3>
          <p>
            Premium agricultural commodities from trusted sources to global markets. 
            Strategically positioned in Dubai, UAE for excellence in international trade.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {/* <li>
              <Link to="/certificates">Certificates</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/products#coconut">Semi-Husked Coconuts</Link>
            </li>
            <li>
              <Link to="/products#rice">Rice</Link>
            </li>
            <li>
              <Link to="/products#onion">Red Onions</Link>
            </li>
            <li>
              <Link to="/products#pomegranate">Pomegranates</Link>
            </li>
            <li>
              <Link to="/products#avocado">Avocados</Link>
            </li>
            <li>
              <Link to="/products#banana">Bananas</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <a href="https://maps.app.goo.gl/mEukvbqcrTHMWFnS7" target="_blank" rel="noopener noreferrer">
                  Property Investment Office 4, F1 316, 1st Floor, 
                  Dubai Investment Park First, Dubai, UAE
                </a>
              </p>
            </li>
            <li>
              <i className="fas fa-phone"></i> 
              <a href="tel:+971522029135">+971 52 202 9135</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i> 
              <a href="mailto:info@cropcraft.ae">info@cropcraft.ae</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Cropcraft Goods Wholesalers LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
