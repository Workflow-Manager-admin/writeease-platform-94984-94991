import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component for the WriteEase platform
 * Contains navigation and user actions
 */
const Header = () => {
  return (
    <header className="writeease-header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-symbol">✍️</span> WriteEase
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/posts">My Posts</Link></li>
            <li><Link to="/editor/new">Create New</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="btn btn-secondary">Search</button>
          <div className="user-profile">
            <span className="avatar">JD</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
