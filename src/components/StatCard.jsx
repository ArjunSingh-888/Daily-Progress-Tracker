import React from 'react';

/**
 * Stat card component
 * @param {string} icon - Icon emoji or component
 * @param {string} label - Stat label
 * @param {string|number} value - Stat value
 * @param {string} color - Color theme (optional)
 */
const StatCard = ({ icon, label, value, color = 'primary' }) => {
  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
