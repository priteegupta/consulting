import React from 'react';
import SectionHeading from './SectionHeading';
import { PRODUCTION_TYPES } from '../data/servicesData';

export default function ProductionTypes() {
  return (
    <section className="section-padding" aria-labelledby="production-types-heading">
      <div className="site-container">
        <SectionHeading 
          id="production-types-heading"
          eyebrow="CAPABILITIES & SECTORS"
          title="Built for the Productions That Matter."
          description="Whether deploying specialized rigging for a commercial campaign or engineering arena infrastructure for a live show, our resources scale to your exact requirements."
          centered={true}
        />

        <div className="production-types-grid">
          {PRODUCTION_TYPES.map((type) => (
            <div key={type.id} className="type-card">
              <img 
                src={type.image} 
                alt={`${type.title} production`} 
                className="type-card-img"
                loading="lazy"
              />
              <div className="type-card-overlay" />
              <div className="type-card-content">
                <span className="type-card-eyebrow">{type.eyebrow}</span>
                <h3 className="type-card-title">{type.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
