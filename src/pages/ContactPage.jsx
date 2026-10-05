import React, { useEffect } from 'react';
import { MapPin, Clock, Calendar, CheckSquare, ShieldCheck, Film, Building2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us | CONSULTING 4REZULTS INC';
  }, []);

  return (
    <div className="page-contact">
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="page-hero" aria-labelledby="contact-hero-title">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/images/hero-production.webp" type="image/webp" />
            <img src="/images/hero-production.jpg" alt="Production background" />
          </picture>
        </div>
        <div className="page-hero-overlay" />

        <div className="site-container page-hero-content">
          <span className="eyebrow">CONTACT US</span>
          <h1 id="contact-hero-title" className="hero-headline">
            Let's Build the Right Production Plan.
          </h1>
          <p className="hero-lead">
            Tell us what you're working on and what your project needs. We'll help identify the production, technical, staffing, construction, and consulting support required.
          </p>
        </div>
      </section>

      {/* ====================================================================
          CONTACT MAIN SECTION (FORM + VERIFIED INFORMATION)
          ==================================================================== */}
      <section className="section-padding" aria-labelledby="inquiry-form-heading">
        <div className="site-container">
          <div className="contact-layout-grid">
            {/* Form Column */}
            <div>
              <ContactForm />
            </div>

            {/* Information Column (STRICT CLIENT DATA ONLY) */}
            <div className="contact-info-panel">
              {/* Verified Location Card */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-card-icon">
                    <MapPin size={24} />
                  </div>
                  <h3 className="info-card-title">Headquarters</h3>
                </div>
                <div className="info-card-value">Florida, USA</div>
                <p className="info-card-sub">
                  Providing full-service production, stage building, technical consulting, and crew staffing across Florida and nationwide.
                </p>
              </div>

              {/* Company Profile Card */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-card-icon">
                    <Building2 size={24} />
                  </div>
                  <h3 className="info-card-title">Corporate Profile</h3>
                </div>
                <div className="info-card-value">CONSULTING 4REZULTS INC</div>
                <p className="info-card-sub" style={{ marginBottom: '0.85rem' }}>
                  Incorporated in 2020. Specializing in commercial, film, event, and media production infrastructure.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <ShieldCheck size={16} />
                  <span>Licensed &amp; Insured Production Support</span>
                </div>
              </div>

              {/* Inquiry Preparation Guide */}
              <div className="info-card" style={{ borderColor: 'var(--border-gold)' }}>
                <div className="info-card-header">
                  <div className="info-card-icon">
                    <CheckSquare size={24} />
                  </div>
                  <h3 className="info-card-title">What to Have Ready</h3>
                </div>
                <p className="info-card-sub" style={{ marginBottom: '1rem' }}>
                  To expedite scoping and quotes, please include:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    'Target shoot or event dates and location',
                    'Scope of stage or set construction requirements',
                    'Anticipated technical, camera, or audio needs',
                    'Key personnel and crew department sizing'
                  ].map((tip, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--gold-primary)', marginTop: '2px' }}>&#10003;</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Editable placeholder for client-specific direct channels */}
              {/* NOTE: Client can provide specific direct email address or phone line upon server deployment */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
