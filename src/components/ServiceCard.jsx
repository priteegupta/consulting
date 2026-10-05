import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  Tv, 
  Film, 
  Calendar, 
  Users, 
  Sliders, 
  Camera, 
  Compass, 
  ArrowRight 
} from 'lucide-react';

const ICON_MAP = {
  'stage-construction': Hammer,
  'advertising-adverts': Tv,
  'movie-production': Film,
  'events-production': Calendar,
  'staffing': Users,
  'technical-support': Sliders,
  'pr-management': Camera,
  'consulting': Compass
};

export default function ServiceCard({ service }) {
  const IconComponent = ICON_MAP[service.id] || Film;

  return (
    <article className="service-card">
      <div className="service-card-header">
        <span className="service-card-num">{service.num}</span>
        <div className="service-card-icon-wrap" aria-hidden="true">
          <IconComponent size={22} />
        </div>
      </div>

      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDesc}</p>

      <Link 
        to={`/services#${service.id}`} 
        className="service-card-link"
        aria-label={`Learn more about ${service.title}`}
      >
        <span>Explore Service</span>
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
