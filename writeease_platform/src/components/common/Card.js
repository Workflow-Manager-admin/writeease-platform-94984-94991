import React from 'react';

/**
 * Card component for displaying content in a card layout
 * @param {string} title - Optional card title
 * @param {ReactNode} actions - Optional card actions
 * @param {ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 */
const Card = ({ title, actions, children, className = '' }) => {
  return (
    <div className={`writeease-card ${className}`}>
      {(title || actions) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {actions && <div className="card-actions">{actions}</div>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
