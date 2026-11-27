import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

// Route-level code splitting for instant initial load
const loadHome = () => import('./pages/HomePage');
const loadAbout = () => import('./pages/AboutPage');
const loadServices = () => import('./pages/ServicesPage');
const loadTreatments = () => import('./pages/TreatmentsPage');
const loadHospital = () => import('./pages/HospitalPage');
const loadContact = () => import('./pages/ContactPage');

const HomePage = lazy(loadHome);
const AboutPage = lazy(loadAbout);
const ServicesPage = lazy(loadServices);
const TreatmentsPage = lazy(loadTreatments);
const HospitalPage = lazy(loadHospital);
const ContactPage = lazy(loadContact);

export default function App() {
  useEffect(() => {
    const prefetchRoutes = () => {
      loadAbout();
      loadServices();
      loadTreatments();
      loadHospital();
      loadContact();
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetchRoutes, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(prefetchRoutes, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />

      {/* Clean, Realistic Hospital Canvas with Warm Platinum & Silk Wash */}
      <div className="min-h-screen flex flex-col selection:bg-[#BE123C] selection:text-white relative bg-[#FAF9F6] text-[#0F172A] overflow-x-hidden antialiased">

        {/* Floating Minimal Glass Navbar */}
        <Navbar />

        {/* Route Page Container */}
        <main className="flex-grow relative z-10">
          <Suspense
            fallback={
              <div className="min-h-[80vh] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-3 border-rose-200 border-t-[#BE123C] animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/treatments" element={<TreatmentsPage />} />
              <Route path="/hospital" element={<HospitalPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book-appointment" element={<ContactPage />} />
              <Route path="/appointment" element={<ContactPage />} />
              {/* Catch-all redirect to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* High-End Atelier Footer */}
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}
