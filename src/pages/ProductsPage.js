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
      <p>Semi-Husked Coconuts are mature coconuts with the outer green husk partially removed, leaving the hard shell intact while retaining a portion of the natural coir. These coconuts have high water content and thick, firm white meat, making them ideal for culinary, ritual, and industrial applications.</p>

      <p><strong>Origin:</strong> Pollachi, Tamil Nadu, India</p>

      <p><strong>Characteristics:</strong> Naturally sweet water, thick kernel, mature & premium-grade fruit</p>

      <p><strong>Uses:</strong> Consumption, Cooking, Rituals, Cosmetics, Processing, Export</p>

      <p><strong>Benefits:</strong> Rich in electrolytes, healthy fats, antimicrobial properties, widely used in food & wellness industries</p>

      <p>🧺 <strong>Packing Options</strong><br>
      <strong>1. PP Bags:</strong> 25 coconuts per bag (~13–14 kg)<br>
      <strong>2. Gunny Bags:</strong> 25 coconuts per eco-friendly jute bag<br>
      <strong>3. Custom Packing:</strong> As per buyer requirements</p>

      <p>📦 <strong>Container Loading Capacity</strong><br>
      <strong>40-foot Reefer Container:</strong> Approx. 1,000 bags (~25,000 kg)</p>
      `,
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
      name: "Red Onions",
     description: `
      <p>Export-quality Red Onions sourced from Nashik, Maharashtra — India's leading onion belt. Known for their deep red color, firm layers, superior shelf life, and balanced pungency, they are widely preferred in global markets.</p>

      <p><strong>Origin:</strong> Nashik, Maharashtra, India</p>

      <p><strong>Characteristics:</strong> High dry matter content, multi-layered skin, deep red color, excellent storage ability</p>

      <p><strong>Uses:</strong> Salads, Cooking, Curries, Pickles, Retail Supply, Export</p>

      <p><strong>Benefits:</strong> Rich in antioxidants like quercetin and anthocyanins; supports heart health</p>

      <p>🧺 <strong>Packing Options</strong><br>
      <strong>1. Mesh Bags:</strong> 6 kg / 10 kg / 20 kg<br>
      <strong>2. Palletized Packing:</strong> Available on request<br>
      <strong>3. Custom Branding:</strong> BOPP printed bags available</p>

      <p>📦 <strong>Container Loading Conditions</strong><br>
      Reefer temperature: 45–55°F<br>
      <strong>20-foot Reefer:</strong> ~12.5–13 MT<br>
      <strong>40-foot Reefer:</strong> ~28 MT</p>
      `,
      image: [
        "/assets/products/onions/onion.jpg",
        "/assets/products/onions/onion_1.jpg"
      ],
      category: "onion",
      origin: "India"
    },
    {
      id: 3,
      name: "Pomegranates",
      description: `
      <p>Premium Pomegranates from Nashik with deep red, juicy arils and excellent sweetness-acidity balance. The fruits have glossy skin, firm structure, and are suitable for global fresh-market exports.</p>

      <p><strong>Origin:</strong> Nashik, Maharashtra, India</p>

      <p><strong>Characteristics:</strong> Vibrant red arils, firm skin, high juice content, naturally sweet-tangy flavor</p>

      <p><strong>Uses:</strong> Fresh Fruit, Salads, Juices, Desserts, Culinary Garnish</p>

      <p><strong>Benefits:</strong> Rich in antioxidants, Vitamins C & K, fiber; supports immunity and heart health</p>

      <p>🧺 <strong>Packing Options</strong><br>
      <strong>1. 2.5 kg & 3 kg Cartons</strong><br>
      <strong>2. 5 kg Corrugated Boxes</strong><br>
      <strong>3. Customized Export Branding:</strong> Available</p>

      <p>📦 <strong>Container Loading Capacity</strong><br>
      <strong>40-foot Reefer Container:</strong> Approx. 14–16 MT</p>
      ` ,
      image: [
        "/assets/products/pomegranates/pomegranate.jpg",
        "/assets/products/pomegranates/pomegranate_1.jpg"
      ],
      category: "pomegranate",
      origin: "India"
    },
    {
      id: 4,
      name: "Avocados (Hass & Fuerte)",
      description: `
      <p>High-quality Avocados sourced from Kenya and Uganda, known for their rich, creamy texture and high oil content. Popular varieties include Hass and Fuerte, suitable for export and retail markets.</p>

      <p><strong>Origin:</strong> Kenya & Uganda</p>

      <p><strong>Varieties:</strong> Hass, Fuerte</p>

      <p><strong>Characteristics:</strong> Creamy flesh, superior taste, ideal ripening profile for long-distance transport</p>

      <p><strong>Uses:</strong> Salads, Guacamole, Sandwiches, Smoothies, Retail & Export</p>

      <p><strong>Benefits:</strong> Rich in healthy monounsaturated fats, dietary fiber, and essential vitamins</p>

      <p>🧺 <strong>Packing Options</strong><br>
      <strong>1. 4 kg & 10 kg Cartons</strong><br>
      <strong>2. Ventilated Export Boxes</strong><br>
      <strong>3. Branding & Private Label:</strong> Available</p>

      <p>📦 <strong>Container Loading Capacity</strong><br>
      <strong>40-foot Reefer:</strong> Approx. 20–22 MT</p>
      `
      ,
      image: [
        "/assets/products/avocados/avocado.jpg",
        "/assets/products/avocados/avocado_1.jpg"
      ],
      category: "avocado",
      origin: "Kenya"
    },
    {
      id: 5,
      name: "Bananas (Cavendish, Elaichi, Red)",
     description: `
    <p>Premium export-grade Bananas sourced from the best growing regions of Maharashtra and Tamil Nadu. Available in multiple varieties including Cavendish, Elaichi (Yelakki), and Red Bananas to suit diverse international markets.</p>

    <p><strong>Origin:</strong> Nashik, Maharashtra & Tamil Nadu, India</p>

    <p><strong>Varieties:</strong></p>
      <strong>1. Cavendish:</strong> Sweet flavor, creamy texture, global export standard</br>
      <strong>2. Elaichi (Yelakki):</strong> Small, sweet, aromatic, high demand premium variety</br>
      <strong>3. Red Bananas:</strong> Distinct reddish skin, sweeter taste with berry undertones</br>

    <p><strong>Uses:</strong> Fresh Fruit, Smoothies, Desserts, Baking, Retail & Export</p>

    <p><strong>Benefits:</strong> Rich in potassium, vitamin B6, fiber; supports energy and digestion</p>

    <p>🧺 <strong>Packing Options</strong><br>
    <strong>1. 13 kg / 18 kg Cartons</strong><br>
    <strong>2. Cluster & Hand Packing</strong><br>
    <strong>3. Air Freight & Sea Freight Packing:</strong> Available</p>

    <p>📦 <strong>Container Loading Capacity</strong><br>
    <strong>40-foot Reefer:</strong> Approx. 1,080–1,200 cartons</p>
    `,
      image: [
        "/assets/products/bananas/banana.jpg",
        "/assets/products/bananas/banana_1.jpg",
        "/assets/products/bananas/banana_1.jpg",
      ],
      category: "banana",
      origin: "India"
    },
 {
      id: 6,
      name: "Basmati Rice",
      description: `
      <p>Grown primarily in the northwestern regions of India — Punjab, Haryana, and Uttar Pradesh — 1121 Basmati Rice (White, Steam, Sella/Parboiled) is globally prized for its distinctive aroma, exceptional grain length, and elongation upon cooking. 
      It is ideal for culinary excellence in biryanis and other premium rice dishes.</p>

      <p><strong>Uses</strong>: Cooking, Export, Retail, Horeca, Catering, Gourmet</p>

      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Durable and economical packaging, suitable for bulk transport.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Premium printed packaging with high moisture resistance and a polished appearance, ideal for branding and retail.
      </br>
      <strong>3. Jute Bags</strong><br>
      Eco-friendly and breathable, offering traditional appeal and sustainable packaging solutions.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Custom sizes available as per buyer requirement)</p>

      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,

      image: ["/assets/products/rice/basmati_rice.png"],
      category: "rice",
      origin: "India"
    },
    {
      id: 7,
      name: "IR64 Parboiled Rice",
      description: `
      <p>IR64 is one of the most exported varieties of parboiled rice from India. Cultivated primarily in Andhra Pradesh, Tamil Nadu, and Karnataka, it is known for its high yield, affordability, and non-sticky texture when cooked. It is widely used for everyday meals across several global markets.</p>
      
      <p><strong>Uses</strong>: Cooking, Export, Retail, Horeca, Bulk Supply</p>
      
      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Durable and cost-effective packaging, ideal for bulk shipments.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Attractive and moisture-proof, ideal for shelf display and retail branding.
      </br>
      <strong>3. Jute Bags</strong><br>
      Biodegradable and breathable packaging, environmentally sustainable.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Customizable as per buyer needs)</p>
      
      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,      

      image: ["/assets/products/rice/ir64_rice.jpg"],
      category: "rice",
      origin: "India"
    },
    {
      id: 8,
      name: "IR36 Parboiled Rice",
      description: `
      <p>IR36 Parboiled Rice is a medium-grain rice variety known for its quick cooking properties and economic value. It is largely grown in Chhattisgarh and Odisha and serves as a staple in institutional kitchens, mid-day meals, and food relief programs.</p>
      
      <p><strong>Uses</strong>: Institutional, Bulk Cooking, Export, Retail, Government Supply</p>

      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Cost-efficient and widely used for mass packaging and export.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Improves shelf life and presents better aesthetics for retail display.
      </br>
      <strong>3. Jute Bags</strong><br>
      Eco-conscious and traditional in style, preferred in certain markets.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Custom orders accepted)</p>
      
      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,      
      image: ["/assets/products/rice/ir36_rice.jpg"],
      category: "rice",
      origin: "India"
    },
    {
      id: 9,
      name: "Sona Masoori Rice",
      description: `
      <p>Sona Masoori Parboiled Rice is a lightweight, aromatic, and less starchy rice variety cultivated mostly in Karnataka, Andhra Pradesh, and Telangana. It is preferred for daily consumption in South Indian cuisine and is ideal for dishes like pongal, lemon rice, and tamarind rice.</p>
     
      <p><strong>Uses</strong>: Cooking, South Indian Cuisine, Retail, Export, Horeca</p>
      
      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Strong and durable, ideal for bulk exports.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Visually appealing, moisture-proof, and retail-ready packaging.
      </br>
      <strong>3. Jute Bags</strong><br>
      Sustainable and breathable, ideal for eco-conscious consumers.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Customizable)</p>

      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,
          
      image: ["/assets/products/rice/sona_masuri_rice.png"],
      category: "rice",
      origin: "India"
    },
    {
      id: 10,
      name: "Matta Rice",
      description: `

      <p>Matta Rice, also known as Kerala Red Rice, is a nutrient-rich parboiled rice cultivated in the Palakkad district of Kerala. It retains the outer bran layer and has a distinct earthy flavor, making it a staple in Kerala cuisine. It's valued for its high fiber and mineral content.</p>
      
      <p><strong>Uses</strong>: Cooking, Kerala Cuisine, Health Food, Retail, Export</p>
      
      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Strong and widely accepted packaging for bulk distribution.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Premium look and excellent shelf-life for branded retail sale.
      </br>
      <strong>3. Jute Bags</strong><br>
      Eco-conscious packaging, ideal for organic and natural product stores.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Buyer-specific sizes available)</p>
      
      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,      

      image: ["/assets/products/rice/matta_rice.png"],
      category: "rice",
      origin: "India"
    },
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
              <button
              className={activeCategory === "rice" ? "active" : ""}
              onClick={() => setActiveCategory("rice")}
            >
              Rice
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
                  {filteredProducts.length > 0 && (
          <div className="products-future-msg">
            <i className="fas fa-info-circle"></i> More products will be added in the future as our portfolio grows.
          </div>
        )}
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
