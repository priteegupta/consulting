import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, MapPin, Users, Cpu, Package, Hammer, Compass } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const WHAT_WE_BRING_ITEMS = [
  {
    title: 'PEOPLE',
    desc: 'Experienced production and event personnel.'
  },
  {
    title: 'EXPERTISE',
    desc: 'Technical and production knowledge.'
  },
  {
    title: 'RESOURCES',
    desc: 'Support for production planning and execution.'
  },
  {
    title: 'CONSTRUCTION',
    desc: 'Stage and set construction capability.'
  },
  {
    title: 'EXECUTION',
    desc: 'Practical on-site and production support.'
  }
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | CONSULTING 4REZULTS INC';
  }, []);

  return (
    <div className="page-about">
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="page-hero" aria-labelledby="about-hero-title">
        <div className="page-hero-bg">
          <picture>
            <source srcSet="/images/about-hero.webp" type="image/webp" />
            <img src="/images/about-hero.jpg" alt="Premier soundstage with lighting grid" />
          </picture>
        </div>
        <div className="page-hero-overlay" />

        <div className="site-container page-hero-content">
          <span className="eyebrow">ABOUT US</span>
          <h1 id="about-hero-title" className="hero-headline">
            Turning Ideas Into Real-World Results.
          </h1>
          <p className="hero-lead">
            CONSULTING 4REZULTS INC is a Florida-based media consulting, production, staffing, and construction company founded in 2020.
          </p>

          <div className="hero-trust-bar" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Founded 2020</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Florida, USA</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Media, Entertainment &amp; Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION — OUR STORY
          ==================================================================== */}
      <section className="section-padding" aria-labelledby="story-heading">
        <div className="site-container">
          <div className="about-story-grid">
            <div>
              <span className="eyebrow">OUR STORY</span>
              <h2 id="story-heading" className="section-title">
                Founded to Solve Real Production Challenges.
              </h2>
              <p className="body-large" style={{ color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                Founded in 2020, CONSULTING 4REZULTS INC provides comprehensive support for media, entertainment, advertising, and event productions.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                In an industry where timelines are rigid and expectations are uncompromising, productions need more than fragmented vendors. They need an integrated operational partner that bridges technical capability, skilled crew, and physical construction.
              </p>
              <p style={{ marginBottom: '1.75rem' }}>
                The company combines:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  'Technical expertise',
                  'Experienced personnel',
                  'Production resources',
                  'Construction capabilities',
                  'Creative problem-solving'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--gold-primary)', display: 'flex' }}>
                      <CheckCircle2 size={18} />
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p>
                Together, these core pillars help clients move projects smoothly from concept to completion.
              </p>
            </div>

            <div className="intro-image-wrap">
              <picture>
                <source srcSet="/images/intro-partner.webp" type="image/webp" />
                <img 
                  src="/images/intro-partner.jpg" 
                  alt="Production crew examining set blueprints on set" 
                  loading="lazy"
                />
              </picture>
              <div className="intro-badge-overlay">
                <div className="intro-badge-title">Florida, USA</div>
                <div className="intro-badge-sub">Established 2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION — OUR APPROACH
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }} aria-labelledby="approach-heading">
        <div className="site-container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-centered">OUR APPROACH</span>
            <h2 id="approach-heading" className="section-title">
              Practical Support. Professional Execution.
            </h2>
            <p className="body-large" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              CONSULTING 4REZULTS INC works closely with clients to understand objectives, requirements, resources, staffing needs, technical requirements, and production coordination.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', fontSize: '1.05rem' }}>
              We believe in proactive communication, rigorous preparation, and dependable on-set discipline. By aligning every technical decision with the project’s creative vision and budgetary framework, we ensure that every stage, camera angle, and crew hour yields maximum production value.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION — WHAT WE BRING
          ==================================================================== */}
      <section className="section-padding" aria-labelledby="what-we-bring-heading">
        <div className="site-container">
          <SectionHeading 
            id="what-we-bring-heading"
            eyebrow="CAPABILITY PILLARS"
            title="What We Bring."
            description="A cohesive infrastructure designed to eliminate gaps in the production supply chain."
            centered={true}
          />

          <div className="about-pillars-grid">
            {WHAT_WE_BRING_ITEMS.map((item, idx) => (
              <div key={idx} className="what-we-bring-card">
                <div className="what-we-bring-title">{item.title}</div>
                <p className="what-we-bring-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION — OUR COMMITMENT
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }} aria-labelledby="commitment-heading">
        <div className="site-container">
          <div className="about-commitment-card">
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>
              OUR COMMITMENT
            </span>
            <h2 id="commitment-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              "At CONSULTING 4REZULTS INC, we understand that successful productions require more than a great idea. They require planning, skilled people, technical expertise, construction capabilities, and reliable execution."
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#c5c9d1', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Whether you are producing an advertisement, movie, short film, live event, or large-scale production, CONSULTING 4REZULTS INC is committed to delivering professional, flexible, and results-driven services.
            </p>
            <div style={{ 
              paddingTop: '1.5rem', 
              borderTop: '1px solid var(--border-gold)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold-light)', margin: 0 }}>
                  "Our goal is simple: to provide the people, expertise, and production support needed to achieve successful results."
                </p>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  CONSULTING 4REZULTS INC &bull; Florida, USA
                </span>
              </div>

              <Link to="/contact" className="btn btn-gold btn-sm">
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        headline="Ready to Discuss Your Next Production?"
        text="Connect with our Florida-based team to coordinate staging, technical engineering, and crew staffing."
        primaryBtnText="START A PROJECT"
        secondaryBtnText="CONTACT OUR TEAM"
      />
    </div>
  );
}
