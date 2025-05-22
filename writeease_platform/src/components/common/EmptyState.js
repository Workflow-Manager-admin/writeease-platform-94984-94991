import React from 'react';

/**
 * EmptyState component for displaying when there's no content
 * @param {string} title - The title for the empty state
 * @param {string} message - The message to display
 * @param {ReactNode} icon - Optional icon to display
 * @param {ReactNode} action - Optional action button or element
 */
const EmptyState = ({ title, message, icon, action }) => {
  return (
    <div className="empty-state">
      {icon && <div className="empty-state-icon">{icon}</div>}
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-message">{message}</p>
      {action && <div className="empty-state-action">{action}</div>}
    </div>
  );
};

export default EmptyState;
