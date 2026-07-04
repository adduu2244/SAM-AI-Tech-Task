import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ onAddToCart, onCategorySelect, featuredProducts }) => {
  const categories = [
    { title: 'Dog Food', emoji: '🐶', count: 12 },
    { title: 'Cat Food', emoji: '🐱', count: 9 },
    { title: 'Pet Toys', emoji: '🧸', count: 24 },
    { title: 'Collars & Leashes', emoji: '🧣', count: 15 },
    { title: 'Pet Beds', emoji: '🛏️', count: 8 },
    { title: 'Treats & Snacks', emoji: '🍪', count: 19 }
  ];

  const features = [
    { title: 'Fast Delivery', desc: 'Arrives within 24-48 hours across India safely.', icon: '⚡' },
    { title: 'Premium Quality', desc: 'Handpicked verified premium organic pet brands.', icon: '🛡️' },
    { title: 'Affordable Prices', desc: 'Best curated deals direct from core vendors.', icon: '💰' },
    { title: 'Trusted By Owners', desc: 'Over 50k+ active happy tails matching choices.', icon: '❤️' }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <header className="hero-section" style={{ display: 'flex !important', display: 'flex', alignItems: 'center', gap: '2rem', minHeight: 'auto', padding: '4rem 5%', justifyContent: 'space-between' }}>
        <div className="hero-content" style={{ flex: '1', maxWidth: '45%' }}>
          <h1>Everything Your Pet Loves, <br /><span>Delivered with Care</span></h1>
          <p style={{ fontSize: '1.15rem', color: '#70655A', lineHeight: '1.6', margin: '1.5rem 0 2.5rem' }}>
            Premium pet care marketplace e-commerce assets tailored with top shelf nutrients, plush comfort layers, and smart interactive toys.
          </p>
          <div className="hero-cta-group">
            <button className="btn-primary-action" onClick={() => onCategorySelect('All')}>Shop Now</button>
            <button className="btn-secondary-action" onClick={() => onCategorySelect('All')}>Browse Categories</button>
          </div>
        </div>
        
        {/* TWO BROAD IMAGES SIDE-BY-SIDE */}
        <div style={{ flex: '1.4', display: 'flex !important', display: 'flex', gap: '1.5rem', width: '100%', maxWidth: '750px', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
          
          {/* Left Broad Image slot filled with hero-pet-image4.jpg */}
          <div style={{ width: '50%', height: '480px', overflow: 'hidden', borderRadius: '28px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
            <img 
              src="/hero-pet-image4.jpg" 
              alt="Pet Banner Left" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Right Broad Image slot remains perfect with hero-pet-mix3.jpg */}
          <div style={{ width: '50%', height: '480px', overflow: 'hidden', borderRadius: '28px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
            <img 
              src="/hero-pet-mix3.jpg" 
              alt="Pet Banner Right" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

        </div>
      </header>

      {/* CATEGORIES SECTION */}
      <section className="section-wrapper">
        <h2 className="section-main-heading">Categories Section</h2>
        <div className="categories-layout-grid">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="category-interactive-card" 
              onClick={() => onCategorySelect(cat.title)}
            >
              <span className="cat-icon-container">{cat.emoji}</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: '700' }}>{cat.title}</h3>
              <p style={{ color: '#70655A', fontSize: '0.85rem' }}>{cat.count} Items</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="section-wrapper">
        <h2 className="section-main-heading">Featured Products Section</h2>
        <div className="products-layout-grid">
          {featuredProducts.slice(0, 3).map(prod => (
            <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE PAWMART */}
      <section className="section-wrapper">
        <h2 className="section-main-heading">Why Choose PawMart</h2>
        <div className="perks-layout-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="perk-info-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{feat.icon}</span>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: '700' }}>{feat.title}</h3>
              <p style={{ color: '#70655A', fontSize: '0.95rem', lineHeight: '1.5' }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;