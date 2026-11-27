import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Activity,
  Stethoscope,
  Quote,
  Clock,
  Layers,
  Compass
} from 'lucide-react';
import DoctorPlaceholder from './DoctorPlaceholder';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal from './ScrollReveal';
import { PULSE_DATA } from '../data/pulseData';
import { useLanguage } from '../context/LanguageContext';

/**
 * DoctorMonographSection
 * Visual & Motion Identity: Ultra-Luxury Clinician Dossier & Monograph
 * Color Palette: Deep Midnight Navy, Crimson Ruby & Warm Platinum
 * Layout: Clean, un-cramped side-by-side architecture with authentic editorial hierarchy
 */
export default function DoctorMonographSection() {
  const { t } = useLanguage();
  const doctor = PULSE_DATA?.doctor || {
    name: "Dr. Prakash Chand Shahi",
    experienceYears: "22+",
    qualifications: [
      { degree: "DM — Cardiology", institution: "PGIMER Chandigarh" },
      { degree: "MD — Medicine", institution: "KGMU Lucknow" }
    ]
  };

  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'transradial',
      num: '01',
      tabLabel: t('Wrist Care', 'रिस्ट केयर'),
      title: t('Gentle Care Through the Wrist', 'कलाई के रास्ते आसान और सुरक्षित इलाज'),
      subtitle: t('Safe Wrist Heart Procedure', 'सेफ रिस्ट हार्ट प्रोसीजर'),
      image: '/images/wrist-heart-care.jpg',
      desc: t(
        'Over 98% of heart checks and stent procedures are done safely through the wrist instead of the leg, avoiding pain and letting you walk the same day.',
        '98% से ज़्यादा हार्ट चेकअप और स्टेंट प्रोसीजर पैर के बजाय कलाई के रास्ते किए जाते हैं, जिससे दर्द नहीं होता और आप उसी दिन चल सकते हैं।'
      ),
      badge: t('99.4% Smooth Flow', '99.4% स्मूथ फ्लो'),
      metric: t('Walk in 2 Hours', '2 घंटे में चलें')
    },
    {
      id: 'evidence',
      num: '02',
      tabLabel: t('Honest Advice', 'ईमानदार सलाह'),
      title: t('Honest Treatment Advice', 'ईमानदार ट्रीटमेंट सलाह'),
      subtitle: t('Trusted Global Heart Guidelines', 'ग्लोबल हार्ट गाइडलाइंस पर आधारित'),
      image: '/images/doctor-patient-consult.jpg',
      desc: t(
        'Stents are advised only when truly needed to protect your heart. Every heart scan is checked carefully so you never get unnecessary treatment.',
        'स्टेंट की सलाह तभी दी जाती है जब आपके हार्ट के लिए वास्तव में ज़रूरी हो। हर हार्ट स्कैन को ध्यान से देखा जाता है ताकि कोई गैर-ज़रूरी ट्रीटमेंट न हो।'
      ),
      badge: t('Zero Unnecessary Stents', 'कोई गैर-ज़रूरी स्टेंट नहीं'),
      metric: t('100% Honest Care', '100% ईमानदार केयर')
    },
    {
      id: 'bedside',
      num: '03',
      tabLabel: t('Clear Talk', 'साफ बातचीत'),
      title: t('Clear Family Talk', 'परिवार से साफ बातचीत'),
      subtitle: t('Watch Your Heart Scan Together', 'अपना हार्ट स्कैन साथ देखें'),
      image: '/images/doctor-angiogram-explain.jpg',
      desc: t(
        'Dr. Shahi personally sits with patients and families to show the heart scan video and explain every blockage and treatment choice in simple words.',
        'डॉ. शाही खुद मरीज़ और परिवार के साथ बैठकर हार्ट स्कैन वीडियो दिखाते हैं और हर ब्लॉकेज व ट्रीटमेंट के विकल्प को आसान शब्दों में समझाते हैं।'
      ),
      badge: t('Clear & Open Care', 'साफ और पारदर्शी केयर'),
      metric: t('22+ Yrs Trust', '22+ साल का भरोसा')
    }
  ];

  return (
    <section className="relative pt-6 pb-6 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-8 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">

      {/* Layered flowing curves, abstract wave shapes & warm ivory-pink gradients */}
      <SectionBackgroundMotion variant="home-monograph" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Master Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column (5 Cols): Offset Architectural Square Portrait Frame (Unique to Monograph) */}
          <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
            {/* Offset Midnight Navy Architectural Shadow Card */}
            <div className="absolute -bottom-4 -right-4 inset-0 rounded-3xl bg-[#0A1128] -z-10" />

            <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 border border-slate-200 shadow-xl">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/images/d3.jpeg"
                  alt="Dr. Prakash Chand Shahi"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Clean Executive Verification Strip Inside Frame */}
              <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div className="text-left">
                  <h4 className="text-xs font-extrabold text-[#0A1128] leading-tight">
                    {t('Clinical Director', 'क्लिनिकल डायरेक्टर')}
                  </h4>
                  <p className="text-[11px] text-[#BE123C] font-semibold mt-0.5">
                    {t('Pulse Heart Centre • Betiahata', 'पल्स हार्ट सेंटर • बेतियाहाता')}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-[#BE123C] text-[10px] font-mono font-bold border border-rose-200 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('Reg. 47395', 'पंजीकरण 47395')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Editorial Clinical Pedigree & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >

            {/* Authoritative Category Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-xs font-mono font-bold shadow-xs border border-rose-300/40">
                <Sparkles className="w-3.5 h-3.5 text-rose-200" />
                <span className="uppercase tracking-[0.18em]">{t('Senior Interventional Cardiologist', 'वरिष्ठ इंटरवेंशनल कार्डियोलॉजिस्ट')}</span>
              </div>
              <span className="text-xs font-mono font-semibold text-[#0A1128] bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                {t('Betiahata, Gorakhpur', 'बेतियाहाता, गोरखपुर')}
              </span>
            </div>

            {/* Primary Typographic Header */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-[1.12]">
                {t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#BE123C]">
                {t('Honest Heart Care Guided by Experience & Trust', 'अनुभव और भरोसे पर आधारित ईमानदार हार्ट केयर')}
              </p>
            </div>

            {/* Academic Credentials Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-bold text-[#0A1128] shadow-xs hover:border-rose-300 transition-colors">
                <GraduationCap className="w-4 h-4 text-[#BE123C]" />
                <span>{t('DM Cardiology • PGIMER Chandigarh', 'डीएम कार्डियोलॉजी • पीजीआईएमईआर चंडीगढ़')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-bold text-[#0A1128] shadow-xs hover:border-rose-300 transition-colors">
                <GraduationCap className="w-4 h-4 text-[#BE123C]" />
                <span>{t('MD Medicine • KGMU Lucknow', 'एमडी मेडिसिन • केजीएमयू लखनऊ')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-[#BE123C] shadow-xs">
                <Award className="w-4 h-4 text-[#BE123C]" />
                <span>{t('22+ Years Clinical Excellence', '22+ साल का क्लिनिकल अनुभव')}</span>
              </div>
            </div>

            {/* Direct Clinical Ethics Philosophy Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200 text-left space-y-2 shadow-xs card-hover-elevate">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#BE123C] uppercase tracking-wider">
                <Quote className="w-4 h-4 text-[#BE123C]" />
                <span>{t('Our Promise & Patient Trust', 'हमारा वादा और मरीज़ों का भरोसा')}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed">
                {t(
                  '"Every heart checkup represents a human life. We recommend a stent only when it is truly needed to protect your heart, and we personally explain every test report and CD clearly to your family."',
                  '"हर हार्ट चेकअप एक इंसान की ज़िंदगी से जुड़ा होता है। हम स्टेंट की सलाह तभी देते हैं जब आपके हार्ट की सुरक्षा के लिए यह सच में ज़रूरी हो, और हम खुद आपके परिवार को हर टेस्ट रिपोर्ट और सीडी साफ शब्दों में समझाते हैं।"'
                )}
              </p>
            </div>

            {/* Interactive Clinical Excellence Pillars */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#BE123C] animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1128]">
                    {t('How We Care For You', 'हम आपकी देखभाल कैसे करते हैं')}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  {t('Tap to View', 'देखने के लिए टैप करें')}
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-2">
                {pillars.map((p, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePillar(idx)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all duration-300 text-left ${isActive
                        ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md border border-rose-300/40 scale-102'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                    >
                      <span className="font-mono text-[9px] block opacity-75">{t('STEP', 'स्टेप')} {p.num}</span>
                      <span className="truncate block mt-0.5">{p.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Pillar Content Card with Visual Doctor Interaction Photo */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-36 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-slate-900">
                    <img
                      src={pillars[activePillar].image}
                      alt={pillars[activePillar].title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-extrabold text-[#0A1128]">
                          {pillars[activePillar].title}
                        </h4>
                        <span className="text-[11px] font-medium text-[#BE123C]">
                          {pillars[activePillar].subtitle}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-[#BE123C] text-[10px] font-mono font-bold shrink-0">
                        {pillars[activePillar].metric}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {pillars[activePillar].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/book-appointment"
                className="luxury-btn-primary group"
              >
                <span>{t('Consult Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही से परामर्श लें')}</span>
                <ArrowRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="luxury-btn-secondary group"
              >
                <Compass className="w-4 h-4 text-[#BE123C] group-hover:rotate-45 transition-transform" />
                <span>{t('About Dr. Shahi', 'डॉ. शाही के बारे में')}</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
