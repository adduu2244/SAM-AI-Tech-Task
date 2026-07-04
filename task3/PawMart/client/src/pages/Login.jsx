import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log(response.data);
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        setSuccess('🎉 Login successful! Welcome back.');
        setTimeout(() => {
          navigate('/'); // Redirect to homepage safely
          window.location.reload(); // Refreshes page to let Navbar detect token changes
        }, 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || '❌ Invalid email or password. Please try again.');
    }
  };

  // Glassmorphic & Premium Page Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vh',
    padding: '2rem',
    backgroundColor: '#FDFBF9',
  };

  const glassCardStyle = {
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(230, 222, 215, 0.6)',
    borderRadius: '24px',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 8px 32px 0 rgba(163, 106, 66, 0.06)',
    textAlign: 'center',
  };

  const inputGroupStyle = {
    marginBottom: '1.25rem',
    textAlign: 'left',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#70655A',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    border: '1px solid #E6DED7',
    fontSize: '0.95rem',
    color: '#2B2520',
    backgroundColor: 'rgba(252, 250, 247, 0.8)',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.85rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: isBtnHovered ? '#544333' : '#6A5643',
    color: '#FFFFFF',
    marginTop: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={glassCardStyle}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🐾</div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#2B2520', marginBottom: '0.5rem' }}>
          Welcome Back
        </h2>
        <p style={{ color: '#70655A', fontSize: '0.95rem', marginBottom: '2rem' }}>
          Log in to access your pet's custom marketplace dashboard.
        </p>

        {error && <div style={{ color: '#D9383A', backgroundColor: '#FDF2F2', padding: '0.75rem', borderRadius: '12px', marginBottom: '1.25rem', fontSize: '0.9rem', fontWeight: '600' }}>{error}</div>}
        {success && <div style={{ color: '#1B7A43', backgroundColor: '#F2FAF5', padding: '0.75rem', borderRadius: '12px', marginBottom: '1.25rem', fontSize: '0.9rem', fontWeight: '600' }}>{success}</div>}

        <form onSubmit={handleLogin}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required 
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required 
            />
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
          >
            Sign In 🐾
          </button>
        </form>

        <p style={{ color: '#70655A', fontSize: '0.9rem', marginTop: '1.5rem' }}>
          New to PawMart?{' '}
          <Link to="/register" style={{ color: '#E06A3B', fontWeight: '700', textDecoration: 'none' }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;