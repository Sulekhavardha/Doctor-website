import React from 'react';
import { Building2, MapPin, Clock, Calendar, CheckCircle2, Navigation, ArrowRight, ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import Interactive3DTilt from './Interactive3DTilt';
import { useLanguage } from '../context/LanguageContext';

export default function PulseCentreSection({ onBookClick }) {
  const { clinic, doctor } = PULSE_DATA;
  const { t } = useLanguage();

  return (
    <section id="centre" className="relative py-6 sm:py-8 my-4 sm:my-6 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] rounded-[2.5rem] sm:rounded-[3rem] border border-slate-200/90 shadow-xl">

      {/* Ambient Blueprint and Grid */}
      <SectionBackgroundMotion variant="hospital-pulse-centre" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Master Facility Split Banner */}
        <div className="rounded-[2.5rem] bg-white/95 backdrop-blur-xl text-slate-900 p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

            {/* Left Column (7 cols): Clinical Information & Priorities */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-[#BE123C] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
                <span>{t('Pulse Heart Centre • Betiahata Campus', 'पल्स हार्ट सेंटर • बेतियाहाता कैंपस')}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] leading-[1.08] tracking-tight">
                {t('Modern Heart Clinic & OPD Facility', 'मॉडर्न हार्ट क्लिनिक और ओपीडी सेंटर')}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl">
                {t(
                  'Led personally by Dr. Prakash Chand Shahi (Director & Chief Cardiologist). Conveniently located in central Gorakhpur for same-day ECG, Echo heart scans, CD reviews, and specialized heart consultations.',
                  'डॉ. प्रकाश चंद शाही (चीफ कार्डियोलॉजिस्ट) की सीधी देखरेख में। गोरखपुर के केंद्र बेतियाहाता में स्थित — जहां आप आसानी से ईसीजी, 2डी इको स्कैन, रिपोर्ट व सीडी चेकअप और रेगुलर ओपीडी परामर्श प्राप्त कर सकते हैं।'
                )}
              </p>

              {/* Status Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] font-bold">
                <span className="bg-white text-[#0A1128] px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                  {t('10 Min from Railway Station', 'रेलवे स्टेशन से 10 मिनट')}
                </span>
                <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-2xs">
                  {t('Mon–Sat, 10 AM – 8 PM', 'सोम–शनि, 10 AM – 8 PM')}
                </span>
                <span className="bg-white text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                  {t('Same-Day Report Check', 'सेम-डे रिपोर्ट जांच')}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="luxury-btn-primary"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>{t('Book OPD Appointment', 'ओपीडी अपॉइंटमेंट बुक करें')}</span>
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

            {/* Right Column (5 cols): Architectural Exterior Campus Photo */}
            <div className="lg:col-span-5">
              <Interactive3DTilt maxTilt={5} scale={1.01}>
                <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <img
                      src="/images/ppp.webp"
                      alt="Pulse Heart Centre Betiahata Campus"
                      className="w-full h-full object-cover object-[50%_68%] group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#0A1128]/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20">
                        {t('Main Hospital Campus', 'मुख्य हॉस्पिटल कैंपस')}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-[#0A1128] text-white text-left">
                    <span className="text-xs sm:text-sm font-extrabold block truncate">
                      {t('Pulse Heart Centre, Betiahata', 'पल्स हार्ट सेंटर, बेतियाहाता')}
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono block truncate mt-0.5">
                      {t('Centrally Located in Gorakhpur • Dedicated Patient Parking', 'सेंट्रल गोरखपुर • सुविधाजनक पार्किंग')}
                    </span>
                  </div>
                </div>
              </Interactive3DTilt>
            </div>

          </div>
        </div>

        {/* 3 Distinct Feature Cards (Location, OPD Timings, Diagnostics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">

          {/* Box 1: Clinic Location & Landmark (OPD Reception Lounge Photo) */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#BE123C] flex items-center justify-center border border-rose-200 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#BE123C] font-bold">
                  {t('Clinic Location', 'क्लिनिक लोकेशन')}
                </span>
              </div>

              <div className="h-32 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-900">
                <img
                  src="/images/reception.webp"
                  alt="Pulse Heart Centre Reception Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white">{t('Patient Care & Reception Wing', 'पेशेंट केयर व रिसेप्शन विंग')}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {t('Pulse Multispeciality Hospital & Heart Centre, Betiahata, Gorakhpur, UP (PIN 273001).', 'पल्स मल्टीस्पेशियलिटी हॉस्पिटल एंड हार्ट सेंटर, बेतियाहाता, गोरखपुर, उत्तर प्रदेश (पिन 273001)।')}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono flex items-center justify-between">
              <span>{t('Gorakhpur Central Access', 'गोरखपुर सेंट्रल एक्सेस')}</span>
              <span className="font-bold text-[#BE123C]">{t('10 Min from Station', 'स्टेशन से 10 मिनट')}</span>
            </div>
          </div>

          {/* Box 2: Consultation Schedule & Lead Doctor */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-[#0A1128] flex items-center justify-center border border-slate-200 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0A1128] font-bold">
                  {t('OPD Timings', 'ओपीडी टाइमिंग्स')}
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                <img
                  src="/images/d1.jpeg"
                  alt="Dr. Prakash Chand Shahi"
                  className="w-10 h-10 rounded-xl object-cover object-top border border-rose-200 shrink-0" loading="lazy" decoding="async" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#0A1128] block truncate">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</span>
                  <span className="text-[10px] text-slate-500 font-mono block truncate">{t('DM Cardiology (PGIMER)', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर)')}</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">{t('Monday — Saturday', 'सोमवार — शनिवार')}</span>
                  <span className="text-[#0A1128] font-bold font-mono">{t('10:00 AM – 8:00 PM', '10:00 AM – 8:00 PM')}</span>
                </div>
                <div className="flex justify-between py-1 text-slate-500">
                  <span>{t('Emergency / ICU', 'इमरजेंसी / आईसीयू')}</span>
                  <span className="text-[#BE123C] font-bold font-mono">{t('24/7 Active', '24/7 सक्रिय')}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600 font-medium flex items-center justify-between">
              <span>{t('Walk-In & Scheduled Visits', 'वॉक-इन व शेड्यूल्ड विज़िट्स')}</span>
              <span className="text-emerald-700 font-bold font-mono text-[10px]">{t('Direct Triage', 'डायरेक्ट परामर्श')}</span>
            </div>
          </div>

          {/* Box 3: Heart Tests Available (2D Echo Diagnostic Photo) */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#BE123C] flex items-center justify-center border border-rose-200 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#BE123C] font-bold">
                  {t('Cardiac Diagnostics', 'कार्डियक डायग्नोस्टिक्स')}
                </span>
              </div>

              <div className="h-32 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-900">
                <img
                  src="/images/echo-machine-suite.jpg"
                  alt="Echo Machine Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white">{t('High-Resolution 2D Echo', 'हाई-रेसोल्यूशन 2डी इको')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-bold bg-slate-100 text-[#0A1128] px-2.5 py-1 rounded-full border border-slate-200">{t('Digital ECG', 'डिजिटल ईसीजी')}</span>
                <span className="text-[10px] font-bold bg-slate-100 text-[#0A1128] px-2.5 py-1 rounded-full border border-slate-200">{t('2D Color Echo', '2डी कलर इको')}</span>
                <span className="text-[10px] font-bold bg-rose-50 text-[#BE123C] px-2.5 py-1 rounded-full border border-rose-200">{t('TMT & Holter', 'टीएमटी व होल्टर')}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono flex items-center justify-between">
              <span>{t('Fast & Accurate Testing', 'सटीक व त्वरित जांच')}</span>
              <span className="font-bold text-[#0A1128]">{t('Same-Day CD', 'सेम-डे सीडी')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
