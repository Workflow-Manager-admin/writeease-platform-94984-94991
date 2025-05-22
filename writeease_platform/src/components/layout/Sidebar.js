import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar component for the WriteEase platform
 * Provides navigation to various sections of the application
 */
const Sidebar = () => {
  return (
    <aside className="writeease-sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="icon">📊</span>
              <span className="label">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="icon">📝</span>
              <span className="label">My Posts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/editor/new" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="icon">✨</span>
              <span className="label">Create New</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="icon">🏷️</span>
              <span className="label">Categories</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="icon">📈</span>
              <span className="label">Analytics</span>
            </NavLink>
          </li>
          <li className="separator"></li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="icon">⚙️</span>
              <span className="label">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="storage-info">
          <div className="storage-label">Storage</div>
          <div className="storage-bar">
            <div className="storage-used" style={{ width: '35%' }}></div>
          </div>
          <div className="storage-text">35% of 10GB used</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
