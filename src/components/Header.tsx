import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Big Trading JP Logo" className="logo" />
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Trucks</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <div className="cart">
        <a href="#" className="cart-icon">
          <span className="cart-count">0</span>
        </a>
      </div>
    </header>
  );
};

export default Header;