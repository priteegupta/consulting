import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { SERVICES } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" aria-label="CONSULTING 4REZULTS INC Homepage">
              <BrandLogo height={42} />
            </Link>
            <p className="footer-bio">
              Production, technical, staffing, construction, and consulting support for media, entertainment, advertising, and events.
            </p>
            <div className="footer-location-tag">
              <MapPin size={16} />
              <span>Florida, USA • Founded 2020</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-link-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Have an upcoming production, event, or build? Let's discuss your requirements.
            </p>
            <Link to="/contact" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
              START A PROJECT
              <ArrowUpRight size={16} />
            </Link>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--gold-primary)' }} />
              <span>Licensed &amp; Insured Production Support</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 CONSULTING 4REZULTS INC. All Rights Reserved.
          </div>
          <div className="footer-meta-pill">
            CONSULTING4R.COM • FLORIDA, USA
          </div>
        </div>
      </div>
    </footer>
  );
}
