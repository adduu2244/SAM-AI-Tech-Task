import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Exact styling for the pill button from your original design & screenshots
  const buttonStyle = {
    padding: '0.5rem 1.2rem',
    borderRadius: '50px',
    border: '1px solid #E6DED7',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    // Dynamic background and text colors for the smooth brown hover effect
    backgroundColor: isHovered ? '#6A5643' : '#FDFBF9', 
    color: isHovered ? '#FFFFFF' : '#6A5643',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* Fixed image styling: strictly contains the photo safely without layout breakage */}
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-rating">
          ★ <span>{product.rating}</span>
        </div>
        <div className="product-footer">
          <span className="product-price">₹{product.price}</span>
          <button 
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart 🐾
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;