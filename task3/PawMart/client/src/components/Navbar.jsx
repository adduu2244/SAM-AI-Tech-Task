import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, searchTerm, setSearchTerm, activeTab, setActiveTab, onOpenCart }) => {
  return (
    <nav className="navbar-container">
      <div className="nav-brand" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
        🐾 PawMart
      </div>

      <ul className="nav-links-group">
        <li>
          <button className={`nav-link-btn ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
            Home
          </button>
        </li>
        <li>
          <button className={`nav-link-btn ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>
            Products
          </button>
        </li>
      </ul>

      {/* PROPERLY PROPORTIONED SEARCH BAR */}
      <div className="search-input-wrapper">
        <svg className="search-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          placeholder="Search products here..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
     <div className="nav-right-actions">
  <button
    className="cart-icon-trigger"
    onClick={onOpenCart}
    style={{ fontSize: '1.4rem' }}
  >
    🛒
    {cartCount > 0 && (
      <span className="cart-badge-count">{cartCount}</span>
    )}
  </button>

  {localStorage.getItem('token') ? (
  <button
    className="btn-login-header"
    onClick={() => {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }}
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    className="btn-login-header"
    style={{ textDecoration: 'none' }}
  >
    Login/Register
  </Link>
)}
    
      

</div>
    </nav>
  );
};

export default Navbar;