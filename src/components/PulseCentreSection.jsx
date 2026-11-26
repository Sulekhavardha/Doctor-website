import React from 'react';
import { Building2, MapPin, Clock, Calendar, CheckCircle, Navigation, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import { useLanguage } from '../context/LanguageContext';

export default function PulseCentreSection({ onBookClick }) {
  const { clinic, doctor } = PULSE_DATA;
  const { t } = useLanguage();

  return (
    <section id="centre" className="relative py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FFF8F5] via-[#FAF5F0] to-[#FFF3EE] rounded-[3rem] border border-orange-200/60 shadow-lg my-12">

      {/* Bespoke Betiahata Medical Quarter Blueprint & Asymmetrical Planar Cards */}
      <SectionBackgroundMotion variant="hospital-pulse-centre" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Master Facility Banner */}
        <div className="space-y-8">

          {/* Schematic Banner */}
          <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-xl text-slate-900 p-8 sm:p-12 shadow-2xl border-2 border-orange-200/90 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">

              <div className="space-y-4 max-w-xl text-left">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-orange-200 text-xs font-mono font-medium text-[#C2410C] shadow-xs">
                  <img src="/images/p.webp" alt="Pulse Logo" className="w-5 h-5 object-contain rounded-md bg-white p-0.5 border border-orange-200" />
                  <span className="font-bold">{t('Pulse Heart Centre • Betiahata, Gorakhpur', 'पल्स हार्ट सेंटर • बेतियाहाता, गोरखपुर')}</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-semibold text-slate-950 leading-tight tracking-tight">
                  {t('Modern Heart Clinic & OPD Care', 'मॉडर्न हार्ट क्लिनिक और ओपीडी केयर')}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  {t('Led by', 'लीड बाय')} <strong className="text-[#BE123C] font-bold">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</strong> {t('(Heart Specialist). Here you can easily get your ECG, Echo heart scan, report checkup, and regular follow-up care.', '(हार्ट स्पेशलिस्ट)। यहां आप आसानी से अपना ईसीजी, इको हार्ट स्कैन, रिपोर्ट चेकअप और रेगुलर फॉलो-अप केयर करवा सकते हैं।')}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#FB923C] hover:from-[#9F1239] hover:to-[#BE123C] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-rose-600/20 hover:shadow-xl transition-all"
                  >
                    <span>{t('Book OPD Appointment', 'ओपीडी अपॉइंटमेंट बुक करें')}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-orange-50 text-[#BE123C] border-2 border-orange-200 text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{t('Call +91 98765 43210', 'कॉल करें +91 98765 43210')}</span>
                  </a>
                </div>
              </div>

              {/* Real Architectural Hospital Video Presentation */}
              <div className="w-full lg:w-[420px] rounded-2xl overflow-hidden shrink-0">
                <SectionCinematicVideo
                  type="about-hospital"
                  videoUrl="/videos/about-hospital.mp4"
                  styleVariant="video-card"
                  posterImage="/images/hospital-facility.jpg"
                  title={t('Pulse Heart Centre Campus', 'पल्स हार्ट सेंटर कैंपस')}
                  subtitle={t('Betiahata, Gorakhpur', 'बेतियाहाता, गोरखपुर')}
                  specs={t('OPD Clinic • Heart Care Wing', 'ओपीडी क्लिनिक • हार्ट केयर विंग')}
                  aspectRatio="aspect-[16/11]"
                />
              </div>

            </div>
          </div>

          {/* Overlapping Modular Cards with Rich Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Box 1: Clinic Location & Landmark */}
            <div className="p-7 rounded-[2rem] bg-white/85 backdrop-blur-xl border-2 border-orange-200/90 shadow-layered hover:shadow-layered-hover hover:border-orange-400 hover:bg-white/95 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#EA580C] border border-orange-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                    {t('Clinic Location', 'क्लिनिक लोकेशन')}
                  </span>
                </div>
                <div className="h-28 rounded-2xl overflow-hidden mb-3 border border-orange-200/80 relative">
                  <img src="/images/hospital-opd-lounge.jpg" alt="Pulse Heart Centre Betiahata" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white">{t('Easy to Reach in Betiahata', 'बेतियाहाता में पहुंचना आसान')}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {t(`${clinic.name}, ${clinic.address}`, 'पल्स मल्टीस्पेशियलिटी हॉस्पिटल एंड हार्ट सेंटर, बेतियाहाता, गोरखपुर, उत्तर प्रदेश, भारत')}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-200/60 text-xs text-slate-900 font-bold flex items-center justify-between">
                <span>{t('Gorakhpur Central Access', 'गोरखपुर सेंट्रल एक्सेस')}</span>
                <span className="font-mono text-[#EA580C]">{t('PIN 273001', 'पिन 273001')}</span>
              </div>
            </div>

            {/* Box 2: Consultation Schedule Table & Lead Clinician */}
            <div className="p-7 rounded-[2rem] bg-white/85 backdrop-blur-xl border-2 border-orange-200/90 shadow-layered hover:shadow-layered-hover hover:border-orange-400 hover:bg-white/95 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#EA580C] border border-orange-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                    {t('OPD Timings', 'ओपीडी टाइमिंग्स')}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/90 border border-orange-200 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BE123C] to-[#FB923C] border border-rose-200 flex items-center justify-center text-white shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</span>
                    <span className="text-[10px] text-[#C2410C] font-semibold block">{t('Mon–Sat • 10 AM – 8 PM', 'सोम–शनि • 10 एएम – 8 पीएम')}</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-orange-200/60">
                    <span className="text-slate-600 font-medium">{t('Mon — Sat', 'सोम — शनि')}</span>
                    <span className="text-slate-900 font-bold font-mono">{t('10:00 AM – 8:00 PM', '10:00 एएम – 8:00 पीएम')}</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-500">
                    <span>{t('Sunday', 'रविवार')}</span>
                    <span className="text-[#EA580C] font-bold font-mono">{t('Emergencies Prioritized', 'इमरजेंसी प्राथमिकता')}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-200/60 text-xs text-slate-900 font-bold">
                {t('Walk-In & Scheduled Visits', 'वॉक-इन और शेड्यूल्ड विज़िट्स')}
              </div>
            </div>

            {/* Box 3: Heart Tests Available */}
            <div className="p-7 rounded-[2rem] bg-white/85 backdrop-blur-xl border-2 border-orange-200/90 shadow-layered hover:shadow-layered-hover hover:border-orange-400 hover:bg-white/95 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between text-left group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#EA580C] border border-orange-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                    {t('Heart Tests Available', 'उपलब्ध हार्ट टेस्ट्स')}
                  </span>
                </div>
                <div className="h-28 rounded-2xl overflow-hidden mb-3 border border-orange-200/80 relative">
                  <img src="/images/echo-machine-suite.jpg" alt="2D Echo Machine Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white">{t('2D Echo & Report Check', '2डी इको और रिपोर्ट चेक')}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] font-bold bg-orange-50 text-[#C2410C] px-2 py-0.5 rounded border border-orange-200">{t('ECG Heart Test', 'ईसीजी हार्ट टेस्ट')}</span>
                  <span className="text-[10px] font-bold bg-orange-50 text-[#C2410C] px-2 py-0.5 rounded border border-orange-200">{t('2D Echo Scan', '2डी इको स्कैन')}</span>
                  <span className="text-[10px] font-bold bg-orange-50 text-[#C2410C] px-2 py-0.5 rounded border border-orange-200">{t('Report & CD Check', 'रिपोर्ट और सीडी चेक')}</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-200/60 text-xs text-slate-900 font-bold">
                {t('Fast & Accurate Heart Tests', 'तेज़ और सटीक हार्ट टेस्ट्स')}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
