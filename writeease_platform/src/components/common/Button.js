import React from 'react';

/**
 * Button component for consistent button styling
 * @param {string} variant - Button variant (primary, secondary, text)
 * @param {string} size - Button size (small, medium, large)
 * @param {function} onClick - Click handler function
 * @param {boolean} disabled - Whether the button is disabled
 * @param {ReactNode} icon - Optional icon to display
 * @param {ReactNode} children - Button content
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  icon,
  children,
  ...props
}) => {
  const classNames = [
    'writeease-btn',
    `btn-${variant}`,
    `btn-${size}`,
    disabled ? 'btn-disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
