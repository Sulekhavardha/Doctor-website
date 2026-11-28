import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Clock,
  Phone,
  Sparkles,
  Calendar,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Activity,
  HeartPulse,
  Eye
} from 'lucide-react';
import PulseCentreSection from '../components/PulseCentreSection';
import PatientExperienceSection from '../components/PatientExperienceSection';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';
import Interactive3DTilt from '../components/Interactive3DTilt';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function HospitalPage() {
  const { clinic, doctor } = PULSE_DATA;
  const { t } = useLanguage();
  const [activeFacilityTab, setActiveFacilityTab] = useState('icu');

  const facilityStages = {
    icu: {
      id: 'icu',
      title: t('24/7 Cardiac ICU & Telemetry Suite', '24/7 कार्डियक आईसीयू व टेलीमेट्री सुइट'),
      subtitle: t('Continuous Rhythm Monitoring • Central Oxygen & Nursing', 'निरंतर रिदम मॉनिटरिंग • सेंट्रल ऑक्सीजन व नर्सिंग'),
      badge: t('CRITICAL CARE UNIT', 'क्रिटिकल केयर यूनिट'),
      image: '/images/Aaa.png',
      specs: t('Equipped with advanced multi-parameter monitors for round-the-clock emergency care.', '24 घंटे इमरजेंसी केयर के लिए मल्टी-पैरामीटर मॉनिटर्स से सुसज्जित।'),
    },
    cleanroom: {
      id: 'cleanroom',
      title: t('Sterile Laminar Airflow Operation Suite', 'स्टराइल लैमिनार एयरफ्लो ऑपरेशन सुइट'),
      subtitle: t('Class-100 Cleanroom • HEPA-14 Filtered', 'क्लास-100 क्लीनरूम • हेपा-14 फिल्टर्ड'),
      badge: t('ULTRA-CLEAN ENVIRONMENT', 'अल्ट्रा-क्लीन एनवायरनमेंट'),
      image: '/images/operation-theatre-laminar.jpg',
      specs: t('Zero-infection environment designed for advanced cardiovascular and surgical procedures.', 'कार्डियोवैस्कुलर प्रोसीजर्स के लिए पूर्ण संक्रमण-मुक्त सुरक्षित वातावरण।'),
    },
  };

  const currentStage = facilityStages[activeFacilityTab];

  const facilityGallery = [
    {
      title: t('Modern Cath Lab', 'मॉडर्न कैथ लैब'),
      category: t('HEART PROCEDURE ROOM', 'हार्ट प्रोसीजर रूम'),
      image: '/images/doctor-cathlab-procedure.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      type: 'facilities-walkthrough',
      desc: t(
        'Dr. Shahi opening blocked heart arteries safely through the wrist.',
        'डॉ. शाही कलाई के रास्ते बंद हार्ट आर्टरीज़ को सुरक्षित तरीके से खोलते हुए।'
      ),
    },
    {
      title: t('Heart Scan & Guidance', 'हार्ट स्कैन और गाइडेंस'),
      category: t('FAMILY CONSULTATION', 'फैमिली कंसल्टेशन'),
      image: '/images/doctor-angiogram-explain.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      type: 'cardiac-catheterization',
      desc: t(
        'Clear, calm explanation of heart reports and CD scans with patient family.',
        'मरीज़ के परिवार के साथ हार्ट रिपोर्ट और सीडी स्कैन की साफ और शांत समझाइश।'
      ),
    },
    {
      title: t('Recovery & OPD Care', 'रिकवरी और ओपीडी केयर'),
      category: t('OUTPATIENT CLINIC', 'आउटपेशेंट क्लिनिक'),
      image: '/images/doctor-icu-rounds.jpg',
      videoUrl: '/videos/about-hospital.mp4',
      type: 'about-hospital',
      desc: t(
        'Easy-to-reach centre in Betiahata, Gorakhpur with personal recovery checkups by Dr. Shahi.',
        'बेतियाहाता, गोरखपुर में आसानी से पहुंचने वाला सेंटर, जहां डॉ. शाही खुद रिकवरी चेकअप करते हैं।'
      ),
    },
  ];

  return (
    <div className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">

      {/* Bespoke Campus Masterplan Background: Laminar Airflow Streams & Blueprint Grid */}
      <SectionBackgroundMotion variant="hospital-hero" />

      {/* =====================================================================
          CONTENT
         ===================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================================
            1. MASTER HOSPITAL HERO: ASYMMETRIC SPLIT ARCHITECTURE (NEW DESIGN)
           ===================================================================== */}
        <section className="relative pt-4 sm:pt-6 pb-6 sm:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column (7 cols): Editorial Typography & Direct Clinical Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <ScrollReveal animation="fade-down">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-[10px] sm:text-xs font-mono font-bold shadow-md shadow-navy/20 border border-rose-300/30">
                  <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                  <span className="uppercase tracking-[0.2em]">{t('NABH-Standard Infrastructure • Betiahata', 'एनएबीएच-मानक इन्फ्रास्ट्रक्चर • बेतियाहाता')}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.08}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] tracking-tight leading-[1.06]">
                  {t('Modern Hospital &', 'मॉडर्न हॉस्पिटल और')} <br />
                  <span className="font-serif italic font-normal text-[#BE123C]">{t('Heart Care Facilities.', 'हार्ट केयर फैसिलिटीज़।')}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.14}>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                  {t(
                    'Clean consultation rooms, advanced Siemens flat-panel Cath Lab, and 24/7 Heart ICU directed personally by Dr. Prakash Chand Shahi in Betiahata, Gorakhpur.',
                    'साफ-सुथरे कंसल्टेशन रूम, एडवांस्ड सीमेंस फ्लैट-पैनल कैथ लैब और 24/7 हार्ट आईसीयू — बेतियाहाता, गोरखपुर में डॉ. प्रकाश चंद शाही की सीधी देखरेख में संचालित।'
                  )}
                </p>
              </ScrollReveal>

              {/* 3 Live Clinical Infrastructure Badges */}
              <ScrollReveal animation="fade-up" delay={0.18}>
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] font-bold">
                  <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-2xs">
                    {t('Siemens Flat-Panel Cath Lab', 'सीमेंस फ्लैट-पैनल कैथ लैब')}
                  </span>
                  <span className="bg-white text-[#0A1128] px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    {t('Class-100 Cleanroom', 'क्लास-100 क्लीनरूम')}
                  </span>
                  <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-2xs">
                    {t('24/7 Cardiac ICU', '24/7 कार्डियक आईसीयू')}
                  </span>
                </div>
              </ScrollReveal>

              {/* Director Credential Pill */}
              <ScrollReveal animation="fade-up" delay={0.22}>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-md">
                  <img
                    src="/images/d2.jpeg"
                    alt="Dr. Prakash Chand Shahi"
                    className="w-11 h-11 rounded-xl object-cover object-top border border-rose-200 shrink-0" loading="lazy" decoding="async" />
                  <div className="min-w-0">
                    <span className="text-xs font-extrabold text-[#0A1128] block truncate">
                      {t('Clinical Director: Dr. Prakash Chand Shahi', 'क्लिनिकल डायरेक्टर: डॉ. प्रकाश चंद शाही')}
                    </span>
                    <span className="text-[10px] font-mono text-rose-700 font-bold block truncate">
                      {t('DM Cardiology (PGIMER) • MD (KGMU)', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • एमडी (केजीएमयू)')}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal animation="fade-up" delay={0.25}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="luxury-btn-primary"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{t('Book Consultation Pass', 'कंसल्टेशन पास बुक करें')}</span>
                  </Link>

                  <a
                    href="tel:+919455899378"
                    className="luxury-btn-secondary"
                  >
                    <Phone className="w-4 h-4 text-[#BE123C]" />
                    <span>+91 94558 99378</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column (5 cols): Interactive Clinical Visual Stage Card */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-up" delay={0.15}>
                <Interactive3DTilt maxTilt={5} scale={1.01}>
                  <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden text-left">
                    {/* Facility Switcher Tabs */}
                    <div className="p-2 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between gap-1 text-[11px] font-mono font-bold">
                      <button
                        type="button"
                        onClick={() => setActiveFacilityTab('icu')}
                        className={`flex-1 py-1.5 px-2 rounded-xl transition-all cursor-pointer ${
                          activeFacilityTab === 'icu'
                            ? 'bg-[#0A1128] text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                        }`}
                      >
                        {t('24/7 Heart ICU', '24/7 हार्ट आईसीयू')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveFacilityTab('cleanroom')}
                        className={`flex-1 py-1.5 px-2 rounded-xl transition-all cursor-pointer ${
                          activeFacilityTab === 'cleanroom'
                            ? 'bg-[#0A1128] text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                        }`}
                      >
                        {t('Cleanroom OT', 'क्लीनरूम ओटी')}
                      </button>
                    </div>

                    {/* Featured Stage Photo (Unobstructed) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <img
                        key={currentStage.image}
                        src={currentStage.image}
                        alt={currentStage.title}
                        className="w-full h-full object-cover object-center transition-all duration-500"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Compact Top Corner Badges */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#0A1128]/85 backdrop-blur-md text-white text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20">
                          {currentStage.badge}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/95 text-white text-[9.5px] sm:text-[10px] font-mono font-bold shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>{t('Active Standby', 'सक्रिय स्टैंडबाय')}</span>
                        </span>
                      </div>
                    </div>

                    {/* Facility Details & Specs Below Photo */}
                    <div className="p-4 bg-white space-y-2.5 text-left">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-extrabold text-[#0A1128] leading-snug">
                            {currentStage.title}
                          </h4>
                          <span className="text-[10.5px] text-[#BE123C] font-mono font-semibold block mt-0.5">
                            {currentStage.subtitle}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full text-[#BE123C] whitespace-nowrap shrink-0">
                          {t('NABH Level', 'एनएबीएच स्तर')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {currentStage.specs}
                      </p>
                      <div className="flex items-center justify-between gap-2 text-[10.5px] sm:text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                        <span className="whitespace-nowrap">{t('Director Oversight', 'डॉ. शाही की देखरेख')}</span>
                        <span className="text-rose-700 font-bold whitespace-nowrap">{t('Betiahata, Gorakhpur', 'बेतियाहाता, गोरखपुर')}</span>
                      </div>
                    </div>
                  </div>
                </Interactive3DTilt>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* 2. Facility Architecture & Overlapping Highlights (PulseCentreSection) */}
        <PulseCentreSection />

        {/* 3. Full-Width Clinical Equipment & Facility Gallery */}
        <div className="my-4 sm:my-5 p-4 sm:p-7 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-b from-white/95 via-slate-50/90 to-white/95 border-2 border-slate-200/90 shadow-xl relative overflow-hidden backdrop-blur-xl">
          {/* Bespoke Tri-Suite Cleanroom Isolation & Laminar Airflow Streams */}
          <SectionBackgroundMotion variant="hospital-suites" />

          <div className="relative z-10">
            <ScrollReveal animation="fade-down" className="mb-10 text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BE123C] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200 shadow-xs">
                {t('Clinical Environments', 'क्लिनिकल एनवायरनमेंट्स')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight">
                {t('Advanced Clinical Suites', 'एडवांस्ड क्लिनिकल सूट्स')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {t(
                  'Explore our clean heart care rooms and safe modern medical equipment.',
                  'हमारे साफ हार्ट केयर रूम्स और सुरक्षित मॉडर्न मेडिकल इक्विपमेंट देखें।'
                )}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilityGallery.map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 0.12}>
                  <Interactive3DTilt maxTilt={8} scale={1.02}>
                    <div className="group relative rounded-3xl bg-white/95 backdrop-blur-xl p-3 sm:p-4 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-rose-300 transition-all duration-500 space-y-3.5 text-left">
                      <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="px-1 space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base font-extrabold text-[#0A1128] tracking-tight group-hover:text-[#BE123C] transition-colors">{item.title}</h3>
                          <span className="text-[10px] font-mono font-bold text-[#BE123C] bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 shadow-xs whitespace-nowrap shrink-0">{item.category}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Interactive3DTilt>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Patient Experience & Pre-Visit Checklist */}
        <div>
          <PatientExperienceSection />
        </div>

        {/* 5. Direct OPD Directions & Priority Booking Callout */}
        <ScrollReveal animation="fade-up" className="my-4 sm:my-5">
          <Interactive3DTilt maxTilt={4} scale={1.01} className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-white text-slate-900 shadow-xl border-2 border-slate-200/90 text-center space-y-5 relative overflow-hidden backdrop-blur-xl">
              {/* Bespoke Betiahata Gateway & Radiant Geographic Beacon */}
              <SectionBackgroundMotion variant="hospital-cta" />
              <div className="relative z-10 space-y-5">
                <h3 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
                  {t('Visit Pulse Heart Centre in', 'विज़िट करें पल्स हार्ट सेंटर')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Betiahata, Gorakhpur', 'बेतियाहाता, गोरखपुर में')}</span>
                </h3>
                <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
                  {t(
                    'Conveniently located at Betiahata, Gorakhpur. Outpatient consultations run Monday through Saturday from 10:00 AM to 8:00 PM.',
                    'बेतियाहाता, गोरखपुर में आसान लोकेशन पर स्थित। ओपीडी कंसल्टेशन सोमवार से शनिवार सुबह 10:00 बजे से रात 8:00 बजे तक उपलब्ध है।'
                  )}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="luxury-btn-primary"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{t('Book Consultation Pass', 'कंसल्टेशन पास बुक करें')}</span>
                  </Link>
                  <a
                    href="tel:+919455899378"
                    className="luxury-btn-secondary"
                  >
                    <Phone className="w-4 h-4 text-[#BE123C]" />
                    <span>+91 94558 99378</span>
                  </a>
                </div>
              </div>
            </div>
          </Interactive3DTilt>
        </ScrollReveal>

      </div>
    </div>
  );
}
