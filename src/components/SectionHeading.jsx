import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = ''
}) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${centered ? 'eyebrow-centered' : ''}`}>
          {eyebrow}
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
