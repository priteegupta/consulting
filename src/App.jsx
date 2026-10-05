import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip to Content Link for Accessibility */}
      <a 
        href="#main-content" 
        style={{
          position: 'absolute',
          top: '-100px',
          left: '16px',
          zIndex: 9999,
          padding: '8px 16px',
          background: 'var(--gold-primary)',
          color: '#0c0d0e',
          fontWeight: 700,
          borderRadius: '4px',
          transition: 'top 0.2s ease'
        }}
        onFocus={(e) => { e.currentTarget.style.top = '16px'; }}
        onBlur={(e) => { e.currentTarget.style.top = '-100px'; }}
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
