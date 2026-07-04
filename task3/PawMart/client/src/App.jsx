import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

import { Routes, Route, useLocation ,  Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  
  const location = useLocation();

  const hideNavbar =
  location.pathname === '/login' ||
  location.pathname === '/register';

  const isLoggedIn = localStorage.getItem('token');
  console.log("TOKEN =", isLoggedIn);
  // Clean, high-resolution product catalog dataset pointed to local images (Treats Removed)
  const initialProducts = [
    { 
      id: 1, 
      name: 'Premium Dog Food', 
      price: 1250, 
      rating: 4.8, 
      category: 'Dog Food', 
      imageUrl: '/premium-dog-food.jpg' 
    },
    { 
      id: 2, 
      name: 'Cat Delight Pack', 
      price: 850, 
      rating: 4.7, 
      category: 'Cat Food', 
      imageUrl: '/cat-delight-pack.jpg' 
    },
    { 
      id: 3, 
      name: 'Puppy Toy Set', 
      price: 450, 
      rating: 4.9, 
      category: 'Pet Toys', 
      imageUrl: '/puppy-toy-set.jpg' 
    },
    { 
      id: 4, 
      name: 'Luxury Pet Bed', 
      price: 2400, 
      rating: 4.5, 
      category: 'Pet Beds', 
      imageUrl: '/luxury-pet-bed.jpg' 
    },
    { 
      id: 5, 
      name: 'Adjustable Collar for Dogs', 
      price: 350, 
      rating: 4.6, 
      category: 'Collars & Leashes', 
      imageUrl: '/adjustable-collar-dog.jpg' 
    },
    { 
      id: 6, 
      name: 'Adjustable Collar for Cats', 
      price: 600, 
      rating: 4.9, 
      category: 'Collars & Leashes', 
      imageUrl: '/adjustable-collar-cat.jpg' 
    }
  ];

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const handleCategorySelection = (categoryName) => {
    setActiveCategory(categoryName);
    setActiveTab('products');
    setTimeout(() => {
      const el = document.getElementById('marketplace-products-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Filter computations
  const displayedProducts = initialProducts.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {!hideNavbar && (
  <Navbar
    cartCount={cartItems.length}
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    onOpenCart={() => setIsCartOpen(true)}
  />
)}
      
      <main style={{ minHeight: '80vh' }}>
       <Routes>

  <Route
    path="/"
    element={
      isLoggedIn ? (
        activeTab === 'home' && searchTerm === '' ? (
          <>
            <Home
              onAddToCart={handleAddToCart}
              onCategorySelect={handleCategorySelection}
              featuredProducts={initialProducts}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          </>
        ) : (
          <div id="marketplace-products-section">
            <Products
              products={displayedProducts}
              onAddToCart={handleAddToCart}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          </div>
        )
      ) : (
        <Navigate to="/login" />
      )
    }
  />

  <Route
    path="/login"
    element={
      isLoggedIn ? <Navigate to="/" /> : <Login />
    }
  />

  <Route
    path="/register"
    element={
      isLoggedIn ? <Navigate to="/" /> : <Register />
    }
  />

</Routes> 
   
</main>
      

      {/* MODERN GLASS-MORPHIC SIDEBAR CART OVERLAY */}
      <div className={`cart-modal-backdrop ${isCartOpen ? 'is-visible' : ''}`} onClick={() => setIsCartOpen(false)}>
        <div className="cart-sidebar-panel" onClick={(e) => e.stopPropagation()}>
          <div className="cart-panel-header">
            <h2 style={{ fontSize: '1.3rem', fontWeight: '700' }}>Shopping Cart ({cartItems.length})</h2>
            <button className="btn-close-panel" onClick={() => setIsCartOpen(false)}>✕</button>
          </div>

          <div className="cart-panel-items-list">
            {cartItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#70655A' }}>
                <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🐾</p>
                <p style={{ fontWeight: '600' }}>Your cart feels lightweight!</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-panel-item-row">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="cart-item-preview-img" 
                    style={{ objectFit: 'contain', backgroundColor: '#fbf9f6' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>{item.name}</h4>
                    <p style={{ color: '#A36A42', fontWeight: '700', fontSize: '0.9rem', marginTop: '0.2rem' }}>₹{item.price}</p>
                  </div>
                  <button 
                    onClick={() => handleRemoveFromCart(index)}
                    style={{ background: 'none', border: 'none', color: '#E06A3B', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem' }}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="cart-panel-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '700', fontSize: '1.1rem' }}>
              <span style={{ flex: 1 }}>Subtotal:</span>
              <span>₹{cartItems.reduce((sum, item) => sum + item.price, 0)}</span>
            </div>
            <button className="cart-checkout-action-btn" onClick={() => alert('Order Placed Successfully!')}>
              Proceed to Secure Checkout
            </button>
          </div>
        </div>
      </div>

      {!hideNavbar && <Footer />}
    </div>
  );
};

export default App;