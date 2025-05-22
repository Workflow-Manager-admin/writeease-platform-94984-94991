import React from 'react';

/**
 * LoadingSpinner component for displaying loading states
 * @param {string} size - Size of the spinner (small, medium, large)
 * @param {string} message - Optional message to display
 */
const LoadingSpinner = ({ size = 'medium', message }) => {
  const sizeClass = `spinner-${size}`;
  
  return (
    <div className="loading-spinner-container">
      <div className={`loading-spinner ${sizeClass}`}>
        <div className="spinner-inner"></div>
      </div>
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
