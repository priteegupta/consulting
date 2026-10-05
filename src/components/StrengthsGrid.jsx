import React from 'react';
import { 
  Users, 
  Cpu, 
  Package, 
  Hammer, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { STRENGTHS } from '../data/servicesData';

const STRENGTH_ICONS = {
  personnel: Users,
  technical: Cpu,
  resources: Package,
  construction: Hammer,
  flexibility: Layers,
  execution: ShieldCheck
};

export default function StrengthsGrid() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="why-us-heading">
      <div className="site-container">
        <SectionHeading 
          id="why-us-heading"
          eyebrow="WHY CONSULTING 4REZULTS"
          title="Built Around What Productions Actually Need."
          description="We eliminate production bottlenecks by combining experienced crew, structural build capabilities, and technical support under one dependable operational partner."
          centered={true}
        />

        <div className="strengths-grid-6">
          {STRENGTHS.map((strength) => {
            const Icon = STRENGTH_ICONS[strength.id] || ShieldCheck;
            return (
              <div key={strength.id} className="strength-item">
                <div className="strength-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3 className="strength-title">{strength.title}</h3>
                <p className="strength-desc">{strength.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
