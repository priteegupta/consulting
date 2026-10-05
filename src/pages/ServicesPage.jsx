import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import CTASection from '../components/CTASection';
import { SERVICES } from '../data/servicesData';

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Production Services | CONSULTING 4REZULTS INC';
  }, []);

  // Handle hash scrolling on direct navigation or anchor click
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="page-services">
      {/* ====================================================================
          SERVICES HERO
          ==================================================================== */}
      <section className="page-hero" aria-labelledby="services-page-title">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/images/hero-production.webp" type="image/webp" />
            <img src="/images/hero-production.jpg" alt="Production background" />
          </picture>
        </div>
        <div className="page-hero-overlay" />

        <div className="site-container page-hero-content">
          <span className="eyebrow">OUR SERVICES</span>
          <h1 id="services-page-title" className="hero-headline">
            Comprehensive Production Services.
          </h1>
          <p className="hero-lead">
            From construction and staffing to technical support and consulting, we provide the people and resources required to support professional productions.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STICKY JUMP NAVIGATION
          ==================================================================== */}
      <nav className="services-nav-strip" aria-label="Jump to service">
        <div className="site-container">
          <div className="services-nav-list">
            {SERVICES.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`} 
                className={`service-jump-pill ${location.hash === `#${s.id}` ? 'active' : ''}`}
              >
                {s.num} {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ====================================================================
          DETAILED SECTIONS FOR ALL 8 SERVICES
          ==================================================================== */}
      <section className="site-container" aria-label="Detailed service specifications">
        {SERVICES.map((service, index) => {
          const isReverse = index % 2 === 1;
          return (
            <article 
              key={service.id} 
              id={service.id} 
              className="service-detail-block"
              aria-labelledby={`heading-${service.id}`}
            >
              <div className={`service-detail-grid ${isReverse ? 'reverse' : ''}`}>
                <div className="service-detail-media">
                  <picture>
                    <source srcSet={service.image} type="image/webp" />
                    <img 
                      src={service.image.replace('.webp', '.jpg')} 
                      alt={service.imageAlt} 
                      loading="lazy"
                    />
                  </picture>
                </div>

                <div className="service-detail-copy">
                  <div className="service-detail-num">{service.num}</div>
                  <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
                    SPECIALIZED CAPABILITY
                  </span>
                  <h2 id={`heading-${service.id}`} className="service-detail-title">
                    {service.title}
                  </h2>
                  <p className="service-detail-desc">
                    {service.shortDesc}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                    {service.fullDesc}
                  </p>

                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-light)', marginBottom: '0.85rem' }}>
                      Key Production Deliverables
                    </h4>
                    <ul className="service-capabilities-list">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="capability-item">
                          <span className="capability-bullet">
                            <Check size={16} />
                          </span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <Link to="/contact" className="btn btn-outline-gold btn-sm">
                      <span>Inquire About {service.title}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ====================================================================
          SERVICES FINAL CTA
          ==================================================================== */}
      <CTASection 
        headline="Need Support for Your Next Production?"
        text="Whether you require stage fabrication, technical systems, or complete on-set staffing, our Florida-based team is ready to execute."
        primaryBtnText="START A PROJECT"
        secondaryBtnText="SPEAK WITH OUR TEAM"
      />
    </div>
  );
}
