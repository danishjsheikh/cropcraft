import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Semi-Husked Coconuts",
      description: `
      <p>Semi-husked coconuts are mature coconuts with the outer green husk partially removed, leaving the hard shell intact while retaining some of the fibrous coir. 
      These coconuts are naturally rich in coconut water and have thick, firm white meat, making them ideal for various culinary and industrial purposes.</p>
      
      <p><strong>Origin:</strong> Pollachi, Tamil Nadu, India</p>
      <p><strong>Uses:</strong> Consumption, Cooking, Rituals, Cosmetics, Processing, Export</p>
      
      <p><strong>Standard Export Packing:</strong></p>
      <ul>
        <li><strong>PP Bags:</strong> 25 coconuts per bag (~13-14 kg)</li>
        <li><strong>Gunny Bags:</strong> 25 coconuts per bag, eco-friendly</li>
        <li><strong>Container:</strong> 40-foot reefer (~1,000 bags, 25,000 kg)</li>
      </ul>`,
      image: [
        "/assets/products/coconuts/coconut.jpg",
        "/assets/products/coconuts/coconut_1.jpg",
        "/assets/products/coconuts/coconut_2.jpg"
      ],
      category: "coconut",
      origin: "India"
    },
    {
      id: 2,
      name: "Matti Rice",
      description: `
      <p>Matti rice is distinguished by its reddish hue from the nutrient-rich bran layer. It has a slightly chewy texture and nutty, earthy flavor.</p>
      
      <p><strong>Origin:</strong> Karnataka and Kerala, India</p>
      <p><strong>Uses:</strong> Healthy alternative to white rice, pilafs, grain bowls, side dishes</p>
      <p><strong>Benefits:</strong> Rich in fiber, iron, zinc, and antioxidants. Better blood sugar control than white rice.</p>
      
      <p><strong>Packing Options:</strong> PP Bags, BOPP Laminated Bags, Jute Bags (10kg, 15kg, 25kg)</p>
      <p><strong>Container Load:</strong> 20-foot container (~25 MT)</p>`,
      image: ["/assets/products/rice/matti_rice.jpg"],
      category: "rice",
      origin: "India"
    },
    {
      id: 3,
      name: "Red Onions",
      description: `
      <p>Export-quality red onions from Nashik, Maharashtra - India's onion heartland. Known for deep red/purplish color, firm texture, and excellent shelf life.</p>
      
      <p><strong>Origin:</strong> Nashik, Maharashtra, India</p>
      <p><strong>Characteristics:</strong> High dry matter content, multiple intact outer layers, balance of sweetness and pungency</p>
      <p><strong>Uses:</strong> Fresh consumption in salads, cooking, curries, pickles</p>
      <p><strong>Benefits:</strong> Rich in quercetin and anthocyanins for heart health</p>
      
      <p><strong>Packing:</strong> Mesh bags (6kg, 10kg, 20kg), palletized options available</p>
      <p><strong>Container Load:</strong> Reefer containers at 45-55°F (12.5-13 MT in 20ft, 28 MT in 40ft)</p>`,
      image: [
        "/assets/products/onions/onion.jpg",
        "/assets/products/onions/onion_1.jpg"
      ],
      category: "onion",
      origin: "India"
    },
    {
      id: 4,
      name: "Pomegranates",
      description: `
      <p>High-quality pomegranates from Nashik with deep red arils that are juicy, sweet, and tangy.</p>
      
      <p><strong>Origin:</strong> Nashik, Maharashtra, India</p>
      <p><strong>Characteristics:</strong> Firm fruit with glossy, vibrant skin and sweet-tangy flavor profile</p>
      <p><strong>Uses:</strong> Fresh fruit, salads, juices, desserts, garnish</p>
      <p><strong>Benefits:</strong> Superfood packed with antioxidants, vitamins C and K, fiber. Supports heart health.</p>`,
      image: ["/assets/products/pomegranate/pomegranate.jpg"],
      category: "pomegranate",
      origin: "India"
    },
    {
      id: 5,
      name: "Avocados (Hass & Fuerte)",
      description: `
      <p>Premium avocados from East Africa, known for rich, creamy texture and high oil content.</p>
      
      <p><strong>Origin:</strong> Kenya and Uganda</p>
      <p><strong>Varieties:</strong> Hass and Fuerte</p>
      <p><strong>Characteristics:</strong> Rich, creamy texture with distinct flavor</p>
      <p><strong>Uses:</strong> Salads, sandwiches, guacamole, toast, smoothies</p>
      <p><strong>Benefits:</strong> High in healthy monounsaturated fats, fiber, essential vitamins and minerals</p>`,
      image: ["/assets/products/avocados/avocado.jpg"],
      category: "avocado",
      origin: "Kenya"
    },
    {
      id: 6,
      name: "Bananas (Cavendish, Elaichi, Red)",
      description: `
      <p>Multiple varieties of premium bananas from India's top growing regions.</p>
      
      <p><strong>Origin:</strong> Nashik, Maharashtra and Tamil Nadu, India</p>
      <p><strong>Varieties:</strong></p>
      <ul>
        <li><strong>Cavendish:</strong> Sweet flavor, creamy texture when ripe</li>
        <li><strong>Elaichi:</strong> Smaller, sweeter, highly aromatic "cardamom" bananas</li>
        <li><strong>Red Bananas:</strong> Reddish-purple skin, sweeter with raspberry hints</li>
      </ul>
      <p><strong>Uses:</strong> Fresh fruit, smoothies, desserts, baking</p>
      <p><strong>Benefits:</strong> Excellent source of potassium, vitamin B6, fiber</p>`,
      image: ["/assets/products/bananas/bananas.jpg"],
      category: "banana",
      origin: "India"
    }
  ];

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Premium agricultural commodities from trusted sources</p>
        </div>
      </div>

      <section className="products-section section">
        <div className="container">
          <div className="category-filter">
            <button
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => setActiveCategory("all")}
            >
              All Products
            </button>
            <button
              className={activeCategory === "coconut" ? "active" : ""}
              onClick={() => setActiveCategory("coconut")}
            >
              Coconuts
            </button>
            <button
              className={activeCategory === "rice" ? "active" : ""}
              onClick={() => setActiveCategory("rice")}
            >
              Rice
            </button>
            <button
              className={activeCategory === "onion" ? "active" : ""}
              onClick={() => setActiveCategory("onion")}
            >
              Onions
            </button>
            <button
              className={activeCategory === "pomegranate" ? "active" : ""}
              onClick={() => setActiveCategory("pomegranate")}
            >
              Pomegranates
            </button>
            <button
              className={activeCategory === "avocado" ? "active" : ""}
              onClick={() => setActiveCategory("avocado")}
            >
              Avocados
            </button>
            <button
              className={activeCategory === "banana" ? "active" : ""}
              onClick={() => setActiveCategory("banana")}
            >
              Bananas
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bulk-inquiry">
        <div className="container">
          <div className="bulk-inquiry-content">
            <h2>Bulk Orders & Custom Requirements</h2>
            <p>
              Looking for specific quantities or customized packaging? 
              We cater to bulk orders and can accommodate special requirements.
            </p>
            <Link to="/contact" className="btn">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
