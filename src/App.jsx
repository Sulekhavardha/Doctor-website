import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

// Route-level code splitting for instant initial load
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage'));
const HospitalPage = lazy(() => import('./pages/HospitalPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
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
