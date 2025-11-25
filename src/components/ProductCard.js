import React, { useRef, useEffect, useState } from 'react';
import './ProductCard.css';

const stripHtml = (html = '') =>
  html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const ProductCard = ({ product, delay = 0 }) => {
  const cardRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = product.image && product.image.length > 0 ? product.image : [];

  const handleNextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  // Only short details in card view
  const shortDescription = stripHtml(product.description).slice(0, 100) + (stripHtml(product.description).length > 100 ? '…' : '');

  return (
    <>
      <div className="product-card" ref={cardRef}>
        {/* Origin Badge */}
        {product.origin && (
          <div className={`origin-badge origin-badge ${product.origin.toLowerCase().replace(/ /g, '-')}`}>
            <i className="fas fa-map-marker-alt"></i>
            {product.origin}
          </div>
        )}

        <div className="product-img">
          <img src={images[0] || '/assets/placeholder.jpg'} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="product-description">{shortDescription}</div>
          <button className="btn" onClick={() => setShowModal(true)}>View Details</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            <div className="modal-img-container">
              <img
                src={images[currentImageIndex] || '/assets/placeholder.jpg'}
                alt={product.name}
                className="modal-image"
              />
              {images.length > 1 && (
                <>
                  <button className="prev-btn" onClick={handlePrevImage}>
                    &#8249;
                  </button>
                  <button className="next-btn" onClick={handleNextImage}>
                    &#8250;
                  </button>
                </>
              )}
            </div>
            <div className="modal-header">
              <h2>{product.name}</h2>
              {product.origin && (
                <div className={`modal-origin origin-badge  ${product.origin.toLowerCase().replace(/ /g, '-')}`}>
                  <i className="fas fa-map-marker-alt"></i>
                  Origin: {product.origin}
                </div>
              )}
            </div>
            <div className="modal-description" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
