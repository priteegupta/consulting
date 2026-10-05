import React from 'react';
import SectionHeading from './SectionHeading';
import { PROCESS_STEPS } from '../data/servicesData';

export default function ProcessTimeline() {
  return (
    <section className="section-padding process-section" aria-labelledby="process-heading">
      <div className="site-container">
        <SectionHeading 
          id="process-heading"
          eyebrow="OUR WORKFLOW"
          title="From Concept to Completion."
          description="A proven, phased operational methodology built to minimize friction, mitigate production risk, and deliver seamless execution on every stage."
          centered={true}
        />

        {/* Desktop Horizontal Timeline */}
        <div className="process-timeline-desktop" role="list">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="process-step-item" role="listitem">
              <div className="process-step-badge">
                {step.num}
              </div>
              <h3 className="process-step-title">{step.name}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="process-timeline-mobile" role="list">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="process-step-mobile-item" role="listitem">
              <div className="process-step-mobile-marker">
                {step.num}
              </div>
              <h3 className="process-step-title">{step.name}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
