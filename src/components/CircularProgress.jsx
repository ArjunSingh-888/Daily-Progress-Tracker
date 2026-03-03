import React from 'react';

/**
 * Circular progress component with percentage display
 * @param {number} percentage - Completion percentage (0-100)
 * @param {number} size - Size in pixels (default: 200)
 * @param {number} strokeWidth - Width of the progress ring (default: 12)
 */
const CircularProgress = ({ percentage = 0, size = 200, strokeWidth = 12 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  // Determine color based on percentage
  const getColor = () => {
    if (percentage === 100) return 'var(--success-color)';
    if (percentage >= 75) return 'var(--primary-color)';
    if (percentage >= 50) return 'var(--warning-color)';
    return 'var(--danger-color)';
  };

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="progress-svg">
        {/* Background circle */}
        <circle
          className="progress-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          className="progress-ring"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ stroke: getColor() }}
        />
      </svg>
      <div className="progress-text">
        <div className="progress-percentage">{percentage}%</div>
        <div className="progress-label">Complete</div>
      </div>
    </div>
  );
};

export default CircularProgress;
