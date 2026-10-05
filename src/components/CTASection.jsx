import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection({
  headline = 'Have a Production in Mind?',
  text = "Let's discuss the people, resources, technical support, and production capabilities your project needs.",
  primaryBtnText = 'START A PROJECT',
  secondaryBtnText = 'CONTACT US'
}) {
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="cta-banner-wrap">
          <div className="cta-banner-bg">
            <img 
              src="/images/cta-production.webp" 
              alt="Cinematic production soundstage with camera crane and amber backlighting" 
              loading="lazy"
            />
          </div>
          <div className="cta-banner-overlay" />
          
          <div className="cta-banner-content">
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>
              LET'S COLLABORATE
            </span>
            <h2 className="cta-banner-title">{headline}</h2>
            <p className="cta-banner-text">{text}</p>
            
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">
                <span>{primaryBtnText}</span>
                <ArrowRight size={18} />
              </Link>
              {secondaryBtnText && (
                <Link to="/contact" className="btn btn-outline btn-lg">
                  <Calendar size={18} />
                  <span>{secondaryBtnText}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
