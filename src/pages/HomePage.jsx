import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clapperboard, MapPin, Calendar, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProcessTimeline from '../components/ProcessTimeline';
import ProductionTypes from '../components/ProductionTypes';
import StrengthsGrid from '../components/StrengthsGrid';
import CTASection from '../components/CTASection';
import { SERVICES } from '../data/servicesData';

export default function HomePage() {
  useEffect(() => {
    document.title = 'CONSULTING 4REZULTS INC | Production & Technical Support';
  }, []);

  return (
    <div className="page-home">
      {/* ====================================================================
          SECTION 1 — HERO
          ==================================================================== */}
      <section className="hero-wrap" aria-labelledby="hero-title">
        <div className="hero-bg">
          <picture>
            <source srcSet="/images/hero-production.webp" type="image/webp" />
            <img 
              src="/images/hero-production.jpg" 
              alt="Cinematic movie soundstage production set with ARRI camera on track" 
              className="hero-bg-img"
              loading="eager"
            />
          </picture>
        </div>
        <div className="hero-overlay" />
        <div className="hero-radial-glow ambient-glow" />

        <div className="site-container hero-content">
          <span className="eyebrow">
            CONSULTING 4REZULTS INC.
          </span>
          <h1 id="hero-title" className="hero-headline">
            Production Support That Brings Ideas to Life.
          </h1>
          <p className="hero-lead">
            From stage construction and staffing to technical support, advertising, film, and live events, we provide the expertise and resources to move productions from concept to completion.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-gold btn-lg">
              <span>START A PROJECT</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              <span>EXPLORE OUR SERVICES</span>
            </Link>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Florida, USA</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Founded 2020</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Full-Service Production Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2 — INTRODUCTION
          ==================================================================== */}
      <section className="section-padding" aria-labelledby="intro-heading">
        <div className="site-container">
          <div className="split-intro-grid">
            <div className="intro-text-col">
              <span className="eyebrow">WHO WE ARE</span>
              <h2 id="intro-heading" className="section-title">
                More Than Production Support. A Partner in Execution.
              </h2>
              <p className="body-large" style={{ color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                Successful productions require more than a great idea. They require planning, skilled people, technical expertise, production resources, and reliable execution.
              </p>
              <p>
                CONSULTING 4REZULTS INC works closely with clients to understand their objectives and provide the practical support needed throughout the production process.
              </p>

              <div className="intro-pillars">
                <div className="pillar-item">
                  <div className="pillar-name">
                    <span className="pillar-bullet">&#9670;</span>
                    <span>Precision Planning</span>
                  </div>
                  <p className="pillar-desc">Clear technical schematics, schedules, and structural coordination.</p>
                </div>
                <div className="pillar-item">
                  <div className="pillar-name">
                    <span className="pillar-bullet">&#9670;</span>
                    <span>Turnkey Execution</span>
                  </div>
                  <p className="pillar-desc">On-site technical support, stage builds, and verified personnel.</p>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/about" className="btn btn-outline-gold">
                  <span>Learn About Our Story</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="intro-image-wrap">
              <picture>
                <source srcSet="/images/intro-partner.webp" type="image/webp" />
                <img 
                  src="/images/intro-partner.jpg" 
                  alt="Production supervisor and technical gaffer reviewing stage blueprints on set" 
                  loading="lazy"
                />
              </picture>
              <div className="intro-badge-overlay">
                <div className="intro-badge-title">Behind the Scenes</div>
                <div className="intro-badge-sub">Field-Tested On-Set Coordination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3 — SERVICES PREVIEW (8-CARD GRID)
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="services-preview-heading">
        <div className="site-container">
          <SectionHeading 
            id="services-preview-heading"
            eyebrow="OUR SERVICES"
            title="Full-Service Production Support."
            description="We provide comprehensive solutions for media, entertainment, advertising, and event productions."
            centered={true}
          />

          <div className="services-grid-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn btn-outline-gold btn-lg">
              <span>View All 8 Detailed Service Capabilities</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — FROM CONCEPT TO COMPLETION
          ==================================================================== */}
      <ProcessTimeline />

      {/* ====================================================================
          SECTION 5 — PRODUCTION TYPES
          ==================================================================== */}
      <ProductionTypes />

      {/* ====================================================================
          SECTION 6 — WHY CONSULTING 4REZULTS
          ==================================================================== */}
      <StrengthsGrid />

      {/* ====================================================================
          SECTION 7 — FINAL CTA
          ==================================================================== */}
      <CTASection 
        headline="Have a Production in Mind?"
        text="Let's discuss the people, resources, technical support, and production capabilities your project needs."
        primaryBtnText="START A PROJECT"
        secondaryBtnText="CONTACT US"
      />
    </div>
  );
}
