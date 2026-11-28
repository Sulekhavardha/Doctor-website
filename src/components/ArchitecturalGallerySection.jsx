import React, { useState } from 'react';
import { Eye, X, Building2, ShieldCheck, MapPin } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import { useLanguage } from '../context/LanguageContext';

/**
 * ArchitecturalGallerySection
 * Clean, realistic Hospital Campus & Clinical Suites showcase:
 * - Unified Deep Midnight Navy, Crimson Ruby & Warm Platinum palette
 * - Real photography of hospital entrance, cath lab, Doctor consultations, and recovery ICU
 */
export default function ArchitecturalGallerySection() {
  const { t } = useLanguage();
  const { hospitalTour: rawTour } = PULSE_DATA;
  const tourTranslations = {
    'tour-1': {
      title: t('Grand Architectural Atrium & Reception', 'ग्रैंड आर्किटेक्चरल एट्रियम और रिसेप्शन'),
      category: t('Patient Welcome & Triage', 'पेशेंट वेलकम और ट्राइएज'),
      description: t('Designed with generous natural light, acoustic dampening, and streamlined digital registration kiosks for zero-wait patient admission.', 'बिना किसी इंतज़ार के आसान एडमिशन के लिए प्राकृतिक रोशनी, शांत माहौल और डिजिटल रजिस्ट्रेशन की सुविधा के साथ डिज़ाइन किया गया।'),
    },
    'tour-2': {
      title: t('Siemens Artis Zee Flat-Panel Digital Cath Lab', 'सीमेंस आर्टिस जी फ्लैट-पैनल डिजिटल कैथ लैब'),
      category: t('Vascular Interventions', 'वैस्कुलर इंटरवेंशंस'),
      description: t('State-of-the-art sterile catheterization theater with Dr. Prakash Chand Shahi performing radial angioplasty and real-time hemodynamic monitoring.', 'अत्याधुनिक स्टराइल कैथेटराइजेशन थिएटर जहां डॉ. प्रकाश चंद शाही रेडियल एंजियोप्लास्टी और रियल-टाइम मॉनिटरिंग करते हैं।'),
    },
    'tour-3': {
      title: t('Executive Outpatient Consultation Suites', 'एग्जीक्यूटिव ओपीडी कंसल्टेशन सूट्स'),
      category: t('Clinical Consultations', 'क्लिनिकल कंसल्टेशंस'),
      description: t('Calm, private consultation rooms where Dr. Shahi personally explains ECG and heart scan reports with families.', 'शांत और प्राइवेट कंसल्टेशन रूम्स जहां डॉ. शाही खुद परिवारों को ईसीजी और हार्ट स्कैन रिपोर्ट्स समझाते हैं।'),
    },
    'tour-4': {
      title: t('Class-100 Laminar Flow Modular OT & Pacing Suite', 'क्लास-100 लैमिनार फ्लो मॉड्यूलर ओटी और पेसिंग सूट'),
      category: t('Surgical Care', 'सर्जिकल केयर'),
      description: t('Ultra-clean cardiac & pacing theatres with positive-pressure HEPA filtration and continuous hemodynamic telemetry.', 'पॉजिटिव-प्रेशर हेपा फिल्ट्रेशन और लगातार हेमोडायनामिक टेलीमेट्री के साथ अल्ट्रा-क्लीन कार्डियक और पेसिंग थिएटर।'),
    },
    'tour-5': {
      title: t('Post-Procedure Cardiac Recovery & ICU Rounds', 'पोस्ट-प्रोसीजर कार्डियक रिकवरी और आईसीयू राउंड्स'),
      category: t('Bedside Recovery', 'बेडसाइड रिकवरी'),
      description: t('Daily bedside follow-up rounds by Dr. Shahi ensuring rapid ambulation and safe recovery after stenting.', 'स्टेंटिंग के बाद तेज़ और सुरक्षित रिकवरी सुनिश्चित करने के लिए डॉ. शाही के डेली बेडसाइड फॉलो-अप राउंड्स।'),
    },
  };
  const hospitalTour = rawTour.map((item) => ({
    ...item,
    ...(tourTranslations[item.id] || {}),
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const current = hospitalTour[activeIndex] || hospitalTour[0];

  return (
    <section id="gallery" className="relative pt-6 pb-6 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-8 overflow-hidden bg-[#FAF9F6] text-slate-900 border-y border-slate-200">
      <SectionBackgroundMotion variant="home-gallery" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-7 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#BE123C]">
              <Building2 className="w-4 h-4" />
              <span>{t('Campus & Clinical Suites', 'कैंपस एंड क्लिनिकल सूट्स')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
              {t('Inside Pulse Heart Centre', 'इनसाइड पल्स हार्ट सेंटर')}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <MapPin className="w-4 h-4 text-[#BE123C]" />
            <span>{t('Betiahata Medical Hub • Gorakhpur, UP', 'बेतियाहाता मेडिकल हब • गोरखपुर, यूपी')}</span>
          </div>
        </div>

        {/* Main Panoramic Facility Stage */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <div className="relative aspect-[16/10] sm:aspect-[21/10] bg-[#0A1128] overflow-hidden">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" decoding="async" />

            <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/20 to-transparent pointer-events-none" />

            {/* Top Action Controls */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 z-20">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#0A1128]/80 hover:bg-[#0A1128] text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 border border-white/20 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{t('Expand Photo', 'एक्सपैंड फोटो')}</span>
              </button>
            </div>

            {/* Desktop/Tablet Overlay Caption */}
            <div className="hidden sm:block absolute bottom-5 left-5 right-5 z-20 text-left text-white max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-300 block">
                0{activeIndex + 1} / 0{hospitalTour.length} • {current.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>

          {/* Mobile Clean Caption Below Image (Zero Overlap) */}
          <div className="sm:hidden p-4 bg-white text-left border-t border-slate-100">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
              0{activeIndex + 1} / 0{hospitalTour.length} • {current.category}
            </span>
            <h3 className="text-base font-extrabold text-[#0A1128] mt-1 leading-snug">
              {current.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Clean Thumbnail Strip Navigator */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {hospitalTour.map((item, idx) => {
            const active = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group rounded-xl overflow-hidden border text-left transition-all ${
                  active
                    ? 'border-[#BE123C] ring-2 ring-[#BE123C]/20 bg-white shadow-md'
                    : 'border-slate-200 bg-white/80 hover:border-slate-300 opacity-85 hover:opacity-100'
                }`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5">
                  <span className={`text-[10px] font-mono font-bold block ${active ? 'text-[#BE123C]' : 'text-slate-500'}`}>
                    0{idx + 1} • {item.category.split('&')[0]}
                  </span>
                  <span className="text-xs font-bold text-[#0A1128] block truncate mt-0.5">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean Architectural Specs Strip */}
        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] block">14,000+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#BE123C] block mt-0.5">{t('Sq. Ft. Campus', 'स्क्वायर फीट कैंपस')}</span>
            <span className="text-xs text-slate-500 block mt-0.5">{t('NABH clinical layout', 'एनएबीएच क्लिनिकल लेआउट')}</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#BE123C] block">{t('Class-100', 'क्लास-100')}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128] block mt-0.5">{t('Sterile Suites', 'स्टराइल सूट्स')}</span>
            <span className="text-xs text-slate-500 block mt-0.5">{t('Laminar airflow cath & OT', 'लैमिनार एयरफ्लो कैथ एंड ओटी')}</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] block">{t('HEPA-14', 'हेपा-14')}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#BE123C] block mt-0.5">{t('Air Filtration', 'एयर फिल्ट्रेशन')}</span>
            <span className="text-xs text-slate-500 block mt-0.5">{t('35 sterile exchanges/hr', '35 स्टराइल एक्सचेंजेस/आवर')}</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#BE123C] block">24/7</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128] block mt-0.5">{t('Emergency ICU', 'इमरजेंसी आईसीयू')}</span>
            <span className="text-xs text-slate-500 block mt-0.5">{t('Redundant power & O2', 'रिडंडेंट पावर एंड ओ2')}</span>
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-5xl bg-[#0A1128] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <div className="relative aspect-[16/9]">
              <img src={current.image} alt={current.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300">
                  {current.category}
                </span>
                <h3 className="text-xl font-bold text-white">{current.title}</h3>
                <p className="text-xs text-slate-300 max-w-2xl">{current.description}</p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#BE123C] hover:bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider shrink-0"
              >
                {t('Close', 'क्लोज')}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
