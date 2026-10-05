import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="site-container">
          <div className="header-inner">
            <Link to="/" className="header-logo-link" aria-label="CONSULTING 4REZULTS INC Homepage">
              <BrandLogo height={isScrolled ? 38 : 46} />
            </Link>

            <nav className="header-nav" aria-label="Main Navigation">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </nav>

            <div className="header-actions">
              <Link to="/contact" className="btn btn-gold btn-sm header-cta-btn">
                START A PROJECT
              </Link>
              <button 
                type="button" 
                className="mobile-menu-btn" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-links">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>Home</span>
            <ArrowRight size={18} />
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>About Us</span>
            <ArrowRight size={18} />
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>Services</span>
            <ArrowRight size={18} />
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>Contact</span>
            <ArrowRight size={18} />
          </NavLink>
        </div>

        <div className="mobile-drawer-footer">
          <Link to="/contact" className="btn btn-gold btn-lg" style={{ width: '100%' }}>
            START A PROJECT
          </Link>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Florida, USA • Founded 2020
          </p>
        </div>
      </div>
    </>
  );
}
