import React from 'react';

/**
 * BrandLogo component for CONSULTING 4REZULTS INC.
 * Displays the supplied brand mark and typography with sharp rendering,
 * exact aspect ratio preservation, and accessibility labels.
 */
export default function BrandLogo({ 
  variant = 'full', 
  className = '', 
  height = 44,
  onClick
}) {
  if (variant === 'mark') {
    return (
      <div 
        className={`brand-logo-mark-wrap ${className}`}
        onClick={onClick}
        role="img"
        aria-label="CONSULTING 4REZULTS INC Brand Mark"
      >
        <img 
          src="/logo-emblem.png" 
          alt="4Rezults Emblem" 
          className="brand-logo-mark-img"
          style={{ height: `${height}px`, width: 'auto' }}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div 
      className={`brand-logo-wrap ${className}`}
      onClick={onClick}
      role="img"
      aria-label="CONSULTING 4REZULTS INC Logo"
    >
      <img 
        src="/logo-full.png" 
        alt="CONSULTING 4REZULTS INC" 
        className="brand-logo-img"
        style={{ height: `${height}px`, width: 'auto', objectFit: 'contain' }}
        loading="eager"
      />
    </div>
  );
}
