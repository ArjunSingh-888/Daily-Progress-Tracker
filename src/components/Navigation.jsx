import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Settings } from 'lucide-react';

/**
 * Bottom navigation bar component
 */
const Navigation = () => {
  return (
    <nav className="bottom-nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <Home size={24} />
        <span>Dashboard</span>
      </NavLink>
      
      <NavLink 
        to="/history" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <Calendar size={24} />
        <span>History</span>
      </NavLink>
      
      <NavLink 
        to="/settings" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <Settings size={24} />
        <span>Settings</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
