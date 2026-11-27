import React, { Suspense, lazy } from 'react';
import CinematicHeroSection from '../components/CinematicHeroSection';
import DoctorMonographSection from '../components/DoctorMonographSection';

const ComprehensiveServicesSection = lazy(() => import('../components/ComprehensiveServicesSection'));
const MedicalTechnologyShowcase = lazy(() => import('../components/MedicalTechnologyShowcase'));
const TreatmentStorytellingSection = lazy(() => import('../components/TreatmentStorytellingSection'));
const CredentialsEditorialSection = lazy(() => import('../components/CredentialsEditorialSection'));
const ArchitecturalGallerySection = lazy(() => import('../components/ArchitecturalGallerySection'));
const PatientTestimonialsSection = lazy(() => import('../components/PatientTestimonialsSection'));
const AppointmentExperienceSection = lazy(() => import('../components/AppointmentExperienceSection'));

/**
 * HomePage: Flagship Pulse Heart Centre Experience
 * Dedicated 100% to Cardiology, Interventional Excellence & Dr. Prakash Chand Shahi
 */
export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* 1. HERO — Futuristic Hospital Architecture & Dr. Prakash Chand Shahi */}
      <CinematicHeroSection />

      {/* 2. FOUNDING CLINICIAN MONOGRAPH — Dr. Prakash Chand Shahi (DM PGIMER, MD KGMU) */}
      <DoctorMonographSection />

      {/* Below-the-fold sections lazy-loaded for instant initial render & smooth scroll */}
      <Suspense fallback={null}>
        {/* 3. COMPREHENSIVE HEART CARE SERVICES — 6 Hospital Services */}
        <ComprehensiveServicesSection />
        <MedicalTechnologyShowcase />
        <TreatmentStorytellingSection />
        <CredentialsEditorialSection />
        <ArchitecturalGallerySection />
        <PatientTestimonialsSection />
        <AppointmentExperienceSection />
      </Suspense>

    </div>
  );
}
