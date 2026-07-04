import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="section-wrapper">
      <h2 className="section-main-heading">All Marketplace Products</h2>
      <div className="products-layout-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;