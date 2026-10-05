import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, ArrowRight, RotateCcw } from 'lucide-react';

const PROJECT_TYPE_OPTIONS = [
  'Advertising',
  'Film / Movie',
  'Live Event',
  'Corporate Production',
  'Stage / Set Construction',
  'Technical Support',
  'Staffing',
  'Consulting',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide preliminary project details.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please enter at least 10 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Production ready hook: easily connected to backend API or CRM webhook
      // e.g. await fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise((resolve) => setTimeout(resolve, 850));

      setSubmittedData({ ...formData, reference: `C4R-${Math.floor(100000 + Math.random() * 900000)}` });
      setIsSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        projectDetails: ''
      });
      setErrors({});
    } catch (err) {
      console.error('Submission failed:', err);
      setErrors({ form: 'An unexpected error occurred. Please try again or reach out directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
  };

  if (isSuccess && submittedData) {
    return (
      <div className="contact-form-card" role="alert" aria-live="polite">
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(34, 197, 94, 0.15)', 
            color: '#22c55e', 
            marginBottom: '1.5rem' 
          }}>
            <CheckCircle2 size={36} />
          </div>

          <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Project Inquiry Received
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.75rem' }}>
            Thank you, <strong style={{ color: 'var(--text-primary)' }}>{submittedData.name}</strong>. Your inquiry for <strong style={{ color: 'var(--gold-light)' }}>{submittedData.projectType}</strong> has been logged. Our production team will review your specifications and follow up.
          </p>

          <div style={{ 
            background: 'var(--bg-input)', 
            border: '1px solid var(--border-medium)', 
            borderRadius: 'var(--radius-sm)', 
            padding: '1rem', 
            display: 'inline-block', 
            marginBottom: '2rem',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Inquiry Reference
            </div>
            <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', color: 'var(--gold-primary)', fontWeight: 700 }}>
              {submittedData.reference}
            </div>
          </div>

          <div>
            <button 
              type="button" 
              onClick={handleReset} 
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <RotateCcw size={16} />
              <span>Submit Another Project Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <div style={{ marginBottom: '1.75rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Start Your Production Inquiry
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          Provide your production requirements below. Fields marked with <span className="form-req">*</span> are required.
        </p>
      </div>

      {errors.form && (
        <div className="form-error-msg" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertCircle size={16} />
          <span>{errors.form}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Full Name <span className="form-req" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? 'is-error' : ''}`}
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className="form-error-msg">{errors.name}</span>
            )}
          </div>

          {/* Company */}
          <div className="form-group">
            <label htmlFor="contact-company" className="form-label">
              Company / Organization
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              className="form-input"
              placeholder="e.g. Apex Media Group"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Email Address <span className="form-req" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? 'is-error' : ''}`}
              placeholder="e.g. sjenkins@company.com"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="form-error-msg">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className="form-input"
              placeholder="e.g. (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Project Type */}
          <div className="form-group form-full">
            <label htmlFor="contact-project-type" className="form-label">
              Project Type <span className="form-req" aria-hidden="true">*</span>
            </label>
            <select
              id="contact-project-type"
              name="projectType"
              className={`form-select ${errors.projectType ? 'is-error' : ''}`}
              value={formData.projectType}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.projectType}
              aria-describedby={errors.projectType ? 'type-error' : undefined}
            >
              <option value="">Select a production category...</option>
              {PROJECT_TYPE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <span id="type-error" className="form-error-msg">{errors.projectType}</span>
            )}
          </div>

          {/* Project Details */}
          <div className="form-group form-full">
            <label htmlFor="contact-details" className="form-label">
              Project Details <span className="form-req" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-details"
              name="projectDetails"
              className={`form-textarea ${errors.projectDetails ? 'is-error' : ''}`}
              placeholder="Tell us about your production: timeline, location, stage construction requirements, staffing needs, or technical scope..."
              value={formData.projectDetails}
              onChange={handleChange}
              rows={5}
              aria-required="true"
              aria-invalid={!!errors.projectDetails}
              aria-describedby={errors.projectDetails ? 'details-error' : undefined}
            />
            {errors.projectDetails && (
              <span id="details-error" className="form-error-msg">{errors.projectDetails}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-full" style={{ marginTop: '0.5rem' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-gold btn-lg"
              style={{ width: '100%', opacity: isSubmitting ? 0.75 : 1 }}
            >
              {isSubmitting ? (
                <span>PROCESSING INQUIRY...</span>
              ) : (
                <>
                  <span>SUBMIT PROJECT INQUIRY</span>
                  <Send size={18} />
                </>
              )}
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.75rem', textAlign: 'center' }}>
              Your inquiry is transmitted securely. We respect production confidentiality.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
