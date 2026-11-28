import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, Calendar, ArrowRight, CheckCircle2, Stethoscope, Compass, Play } from 'lucide-react';
import AnatomicalSpecialtyShowcase from '../components/AnatomicalSpecialtyShowcase';
import TreatmentStorytellingSection from '../components/TreatmentStorytellingSection';
import MedicalTechnologyShowcase from '../components/MedicalTechnologyShowcase';
import InteractiveCardiacExplorer from '../components/InteractiveCardiacExplorer';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';
import Interactive3DTilt from '../components/Interactive3DTilt';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function TreatmentsPage() {
  const { t } = useLanguage();
  return (
    <div className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">

      {/* =========================================================================
          1. MASTER EDITORIAL HEADER & FLUOROSCOPY VIDEO STAGE
         ========================================================================= */}
      <section className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Bespoke Interventional Catheterization Theater & Fluoroscopic Rayfield */}
        <SectionBackgroundMotion variant="treatments-hero" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-xs font-mono font-medium shadow-md shadow-navy/20 border border-rose-300/30">
              <Activity className="w-4 h-4 text-rose-300 animate-pulse" />
              <span className="uppercase tracking-[0.2em]">{t('Heart & Artery Treatments', 'हार्ट एंड आर्टरी ट्रीटमेंट्स')}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#0A1128] tracking-tight leading-[1.08]">
              {t('Simple, Safe & Modern', 'आसान, सुरक्षित और मॉडर्न')} <br />
              <span className="font-serif italic font-normal text-[#BE123C]">{t('Heart Treatments', 'हार्ट ट्रीटमेंट्स')}</span>
            </h1>
          </ScrollReveal>

          {/* Lead Operator Portrait Spotlight Badge (Unique to Treatments Page) */}
          <ScrollReveal animation="fade-up" delay={0.15}>
            <div className="pt-1 flex items-center justify-center gap-3">
              <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-md">
                <img
                  src="/images/d4.jpeg"
                  alt="Dr. Prakash Chand Shahi"
                  className="w-12 h-12 rounded-xl object-cover object-top border border-rose-200 shrink-0" loading="lazy" decoding="async" />
                <div className="text-left">
                  <span className="text-xs font-extrabold text-[#0A1128] block">
                    {t('Lead Interventionalist: Dr. Prakash Chand Shahi', 'लीड इंटरवेंशनलिस्ट: डॉ. प्रकाश चंद शाही')}
                  </span>
                  <span className="text-[10px] font-mono text-[#BE123C] font-bold block">
                    {t('DM Cardiology (PGIMER) • MD (KGMU Lucknow) • 15,000+ Procedures', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • एमडी (केजीएमयू लखनऊ) • 15,000+ प्रोसीजर्स')}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t(
                'Painless heart stenting through the wrist, heart blockage check (angiogram), and pacemaker care with clear live imaging.',
                'कलाई के रास्ते बिना दर्द हार्ट स्टेंटिंग, हार्ट ब्लॉकेज जांच (एंजियोग्राम) और साफ लाइव इमेजिंग के साथ पेसमेकर केयर।'
              )}
            </p>
          </ScrollReveal>

          {/* Interactive Vascular Intervention Visual Console (Unobstructed Image + Clean Caption Bar) */}
          <ScrollReveal animation="scale-up" delay={0.25} className="pt-6 max-w-5xl mx-auto">
            <Interactive3DTilt maxTilt={5} scale={1.01}>
              <div className="rounded-3xl sm:rounded-[2.5rem] p-2.5 sm:p-4 bg-white/95 border-2 border-slate-200/90 shadow-2xl overflow-hidden">
                <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-[2rem] overflow-hidden bg-slate-100">
                  <img
                    src="/images/mm.webp"
                    alt={t('Heart Blockage Check & Stent Care', 'हार्ट ब्लॉकेज चेक एंड स्टेंट केयर')}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-2.5 sm:mt-3 px-3 sm:px-4 py-2.5 rounded-2xl bg-[#0A1128] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold block leading-snug">
                      {t('Heart Blockage Check & Stent Care', 'हार्ट ब्लॉकेज चेक एंड स्टेंट केयर')}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium block">
                      {t('Gentle Wrist Procedure • Quick Recovery', 'जेंटल रिस्ट प्रोसीजर • क्विक रिकवरी')}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-rose-200 bg-white/10 px-3 py-1 rounded-full border border-white/15 self-start sm:self-auto shrink-0">
                    {t('Clear Live Heart Imaging', 'क्लियर लाइव हार्ट इमेजिंग')}
                  </span>
                </div>
              </div>
            </Interactive3DTilt>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          2. ANATOMICAL SPECIALTY SHOWCASE (TREATMENTS BESPOKE 3D HEMODYNAMIC VARIANT)
         ========================================================================= */}
      <AnatomicalSpecialtyShowcase variant="treatments-specialties" />

      {/* =========================================================================
          3. VISUAL STORYTELLING PROCEDURAL SUITE (CARE ODYSSEY VARIANT)
         ========================================================================= */}
      <TreatmentStorytellingSection variant="treatments-storytelling" />

      {/* =========================================================================
          4. MEDICAL TECHNOLOGY SHOWCASE (SCHEMATIC RETICLE VARIANT)
         ========================================================================= */}
      <MedicalTechnologyShowcase variant="treatments-technology" />

      {/* =========================================================================
          5. INTERACTIVE DIAGNOSTIC LIGHTBOX (BACKLIT MATRIX VARIANT)
         ========================================================================= */}
      <section className="relative py-4 sm:py-6 px-2 sm:px-6 lg:px-8 my-3 sm:my-4 overflow-hidden rounded-3xl sm:rounded-[3rem] border-2 border-slate-200/90 shadow-2xl backdrop-blur-xl">
        {/* Bespoke Backlit Radiographic Lightbox & Perfusion Grid Matrix */}
        <SectionBackgroundMotion variant="treatments-explorer" />

        <div className="max-w-7xl mx-auto relative z-10">
          <InteractiveCardiacExplorer />
        </div>
      </section>

      {/* =========================================================================
          6. DIRECT SECOND OPINION CONSULTATION CALLOUT (ATELIER SEAL VARIANT)
         ========================================================================= */}
      <section className="relative py-6 sm:py-8 px-4 my-3 sm:my-4 overflow-hidden text-center">
        {/* Bespoke Atelier Second Opinion Chamber & Compassionate Medical Seal */}
        <SectionBackgroundMotion variant="treatments-cta" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up">
            <Interactive3DTilt maxTilt={4} scale={1.01}>
              <div className="p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-white text-slate-900 shadow-2xl border-2 border-slate-200/90 space-y-5 backdrop-blur-xl">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BE123C] font-bold block">
                  {t('Honest Second Opinion • Betiahata, Gorakhpur', 'सही सलाह और दूसरी राय • बेतियाहाता, गोरखपुर')}
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
                  {t('Bring Your Heart Report or CD for a', 'जांच के लिए अपनी हार्ट रिपोर्ट या सीडी')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Doctor Review', 'डॉक्टर को दिखाएं')}</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
                  {t(
                    'Get clear, honest advice from Dr. Shahi on whether simple medicines or a stent is best for your heart.',
                    'डॉ. शाही से सही और आसान सलाह लें कि आपके दिल के लिए सिर्फ दवाइयां ठीक हैं या स्टेंट की जरूरत है।'
                  )}
                </p>
                <div className="pt-2 flex items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="luxury-btn-primary"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{t('Schedule Second Opinion Session', 'डॉक्टर से सलाह बुक करें')}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </Interactive3DTilt>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
