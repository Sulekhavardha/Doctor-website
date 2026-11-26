import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, MapPin, ShieldCheck, Heart, Sparkles, CheckCircle2, AlertCircle, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PULSE_DATA } from '../data/pulseData';
import { pulseAudio } from '../utils/soundEffects';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import SectionCinematicVideo from './SectionCinematicVideo';
import { useLanguage } from '../context/LanguageContext';

/**
 * AppointmentExperienceSection
 * Visual & Motion Identity: Priority Triage Pavilion & Live Digital Boarding Pass
 * Color Palette: Royal Midnight Purple, Emerald Verification & Luminous Pearl
 * Motion Features:
 * - Floating royal purple & emerald ambient glow orbs
 * - Live real-time consultation boarding pass slip generation
 * - Confetti celebration upon confirmed submission
 * - Shimmer button hover animation
 */
export default function AppointmentExperienceSection({ variant = 'home-appointment' }) {
  const { clinic, doctor } = PULSE_DATA;
  const { t } = useLanguage();

  const [triageCategory, setTriageCategory] = useState('angiogram-review');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('2026-11-23');
  const [preferredSlot, setPreferredSlot] = useState('11:30 AM');
  const [isBooked, setIsBooked] = useState(false);

  const triageOptions = [
    {
      id: 'angiogram-review',
      label: t('Angiogram & Stent Review', 'एंजियोग्राम एंड स्टेंट रिव्यू'),
      sub: t('Second opinion or post-revascularization check', 'सेकंड ओपिनियन ऑर पोस्ट-रीवास्कुलराइजेशन चेक'),
      badge: t('HIGH PRIORITY', 'हाई प्रायोरिटी'),
    },
    {
      id: 'routine-evaluation',
      label: t('Comprehensive Cardiac OPD', 'कॉम्प्रिहेंसिव कार्डियक ओपीडी'),
      sub: t('Hypertension, lipid control, breathlessness', 'हाइपरटेंशन, लिपिड कंट्रोल, ब्रेथलेसनेस'),
      badge: t('CONSULTATION', 'कंसल्टेशन'),
    },
    {
      id: 'chest-pain',
      label: t('Chest Tightness / ECG Check', 'चेस्ट टाइटनेस / ईसीजी चेक'),
      sub: t('Same-day evaluation for exertional discomfort', 'सेम-डे इवैल्यूएशन फॉर एग्जर्शनल डिस्कम्फर्ट'),
      badge: t('CLINICAL TRIAGE', 'क्लिनिकल ट्राइएज'),
    },
    {
      id: 'pacemaker-check',
      label: t('Pacemaker Follow-up', 'पेसमेकर फॉलो-अप'),
      sub: t('Telemetry check & pacing optimization', 'टेलीमेट्री चेक एंड पेसिंग ऑप्टिमाइजेशन'),
      badge: t('ELECTROPHYSIOLOGY', 'इलेक्ट्रोफिजियोलॉजी'),
    },
  ];

  const timeSlots = [
    '10:30 AM', '11:30 AM', '12:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    setIsBooked(true);
    pulseAudio.playSuccess();

    // Trigger celebratory confetti in prestigious rose, coral and peach
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#BE123C', '#E11D48', '#FB923C', '#FED7AA', '#FDA4AF']
    });
  };

  return (
    <section id="appointment-experience" className="relative py-20 lg:py-28 overflow-hidden select-none bg-[#FAF9F6] text-slate-900 border-t border-slate-200">
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200 text-xs font-mono font-bold text-[#BE123C] shadow-xs">
            <Calendar className="w-4 h-4 text-[#BE123C]" />
            <span className="uppercase tracking-[0.2em]">{t('Priority Consultation & Direct Triage', 'प्रायोरिटी कंसल्टेशन एंड डायरेक्ट ट्राइएज')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.08]">
            {t('Direct Consultation with', 'सीधा परामर्श')} <br />
            <span className="font-serif italic font-normal text-[#BE123C]">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही के साथ')}</span>
          </h2>

          <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-white border-2 border-rose-200 shadow-sm text-slate-900 text-xs font-medium">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#BE123C] to-[#FB923C] border border-rose-200 flex items-center justify-center text-white shrink-0">
              <Stethoscope className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div className="text-left">
              <span className="font-bold block text-slate-900">{t('Dr. Prakash Chand Shahi • OPD Room 101', 'डॉ. प्रकाश चंद शाही • ओपीडी रूम 101')}</span>
              <span className="text-[10px] text-[#C2410C] font-mono font-bold">{t('DM Cardiology (PGIMER) • Mon–Sat, 10 AM – 8 PM', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • मंडे–सैटरडे, 10 एएम – 8 पीएम')}</span>
            </div>
          </div>
        </div>

        {/* Master Appointment Composition: Interactive Booking Engine (Left) + Live Digital Pass Slip (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column (7 cols): Interactive Concierge Scheduling Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-white/95 backdrop-blur-xl p-6 sm:p-10 text-left space-y-8 border-2 border-slate-200/90 shadow-layered transition-all duration-400 hover:shadow-2xl">

              {/* Step 1: Clinical Triage Reason */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-[#C2410C] flex items-center justify-center text-[10px]">1</span>
                    {t('Select Consultation Domain', 'कंसल्टेशन का कारण चुनें')}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">{t('Step 1 of 3', 'स्टेप 1 / 3')}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {triageOptions.map((opt) => {
                    const isSelected = triageCategory === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setTriageCategory(opt.id)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${isSelected
                          ? 'bg-[#FFF7ED] border-[#EA580C] shadow-md ring-2 ring-[#FB923C]/25 scale-102'
                          : 'bg-white hover:bg-orange-50/50 border-slate-200'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono font-bold text-[#C2410C] uppercase bg-[#FFF7ED] border border-orange-200 px-2 py-0.5 rounded-full">
                            {opt.badge}
                          </span>
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#EA580C] bg-[#EA580C]' : 'border-slate-300'
                            }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-950 tracking-tight">
                          {opt.label}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                          {opt.sub}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Slot Selection */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#FFF7ED] border border-orange-200 text-[#C2410C] flex items-center justify-center text-[10px]">2</span>
                    {t('Select Consultation Slot', 'कंसल्टेशन स्लॉट चुनें')}
                  </span>
                  <span className="text-[10px] font-mono text-[#EA580C] font-bold">
                    {t('Mon – Sat (10 AM – 8 PM)', 'सोम – शनि (सुबह 10 – रात 8 बजे)')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      {t('Preferred Date', 'पसंदीदा तारीख')}
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      {t('Available OPD Slots', 'उपलब्ध ओपीडी स्लॉट्स')}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setPreferredSlot(slot)}
                          className={`py-2 px-1 rounded-xl text-[11px] font-mono font-bold transition-all duration-200 ${preferredSlot === slot
                            ? 'bg-gradient-to-r from-[#BE123C] via-[#EA580C] to-[#FB923C] text-white shadow-md shadow-orange-500/25 scale-105'
                            : 'bg-white hover:bg-[#FFF7ED] text-slate-700 border border-slate-200'
                            }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Patient Information Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FFF7ED] border border-orange-200 text-[#C2410C] flex items-center justify-center text-[10px]">3</span>
                  {t('Patient Identification', 'मरीज़ की जानकारी')}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      {t('Patient Full Name *', 'मरीज़ का पूरा नाम *')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('e.g. Ramesh Kumar', 'जैसे रमेश कुमार')}
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C] font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-700 font-bold block mb-1">
                      {t('Phone Number (WhatsApp Active) *', 'फोन नंबर (व्हाट्सएप एक्टिव) *')}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C] font-medium"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#BE123C] via-[#EA580C] to-[#FB923C] hover:from-[#9F1239] hover:to-[#EA580C] text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-102"
                  >
                    <Calendar className="w-4 h-4 text-amber-200" />
                    <span>{t('Confirm Priority Consultation Request', 'प्रायोरिटी कंसल्टेशन रिक्वेस्ट कन्फर्म करें')}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white ml-1" />
                  </button>
                </div>
              </form>

            </div>
          </div>

          {/* Right Column (5 cols): Live Digital Consultation Pass Preview (Boarding Pass Design) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Live Triage & Priority Booking Video */}
            <SectionCinematicVideo
              type="appointment-suite"
              videoUrl="/videos/appointment-suite.mp4"
              styleVariant="video-card"
              posterImage="/images/hospital-helpdesk.jpg"
              title={t('Priority OPD Consultation', 'प्रायोरिटी ओपीडी कंसल्टेशन')}
              subtitle={t('Direct Appointment with Dr. Shahi', 'डायरेक्ट अपॉइंटमेंट विद डॉ. शाही')}
              specs={t('Pulse Heart Centre • Betiahata, Gorakhpur', 'पल्स हार्ट सेंटर • बेतियाहाता, गोरखपुर')}
              aspectRatio="aspect-[16/8]"
            />

            {/* Real-Time Consultation Pass */}
            <div className="relative rounded-2xl bg-white text-slate-900 shadow-lg border border-slate-200 p-6 sm:p-8 text-left space-y-6 overflow-hidden">

              {/* Pass Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <img src="/images/p.webp" alt="Pulse Logo" className="w-6 h-6 object-contain rounded-md bg-white p-0.5 border border-slate-200" />
                  <div>
                    <span className="font-bold text-sm tracking-widest uppercase block leading-none text-[#0A1128]">
                      {t('PULSE', 'पल्स')}
                    </span>
                    <span className="text-[9px] font-mono text-[#BE123C] tracking-wider uppercase block mt-0.5 font-bold">
                      {t('Consultation Pass', 'कंसल्टेशन पास')}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200 text-[10px] font-mono font-bold">
                  {t('OPD TOKEN', 'ओपीडी टोकन')}
                </span>
              </div>

              {/* Physician & Clinic Identity */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <img
                  src="/images/doctor-portrait.jpg"
                  alt={doctor.name}
                  className="w-12 h-12 rounded-xl object-cover object-[50%_20%] border border-slate-300 shrink-0"
                />
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#BE123C] font-bold block">
                    {t('ATTENDING CARDIOLOGIST', 'अटेंडिंग कार्डियोलॉजिस्ट')}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#0A1128] tracking-tight leading-tight">
                    {t(doctor.name, 'डॉ. प्रकाश चंद शाही')}
                  </h4>
                  <p className="text-[10px] font-mono text-slate-600 font-semibold">
                    {t('DM Cardiology (PGIMER) • MD (KGMU Lucknow)', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • एमडी (केजीएमयू लखनऊ)')}
                  </p>
                </div>
              </div>

              {/* Patient Dynamic Ticket Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">{t('Patient:', 'पेशेंट:')}</span>
                  <span className="font-semibold text-[#0A1128] font-mono">
                    {patientName || t('Patient Name', 'पेशेंट नेम')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">{t('Date & Slot:', 'डेट एंड स्लॉट:')}</span>
                  <span className="font-bold text-[#BE123C] font-mono">
                    {preferredDate} • {preferredSlot}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">{t('Category:', 'कैटेगरी:')}</span>
                  <span className="font-bold text-[#0A1128] font-mono uppercase text-[10px]">
                    {triageOptions.find((o) => o.id === triageCategory)?.label || triageCategory.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">{t('Location:', 'लोकेशन:')}</span>
                  <span className="font-bold text-slate-800 font-mono text-[10px]">
                    {t('Pulse Heart Centre, Betiahata', 'पल्स हार्ट सेंटर, बेतियाहाता')}
                  </span>
                </div>
              </div>

              {/* Verification */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">{t('PASS-ID: PHC-2026-9812', 'पास-आईडी: पीएचसी-2026-9812')}</span>
                <span className="text-[#BE123C] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('OPD PRIORITY PASS', 'ओपीडी प्रायोरिटी पास')}</span>
                </span>
              </div>

            </div>

            {/* Direct Helpline Banner */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="space-y-0.5 text-left">
                <span className="text-xs font-bold text-[#0A1128] block">
                  {t('Need Immediate Guidance?', 'नीड इमीडिएट गाइडेंस?')}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">
                  {t('OPD Desk: +91 98765 43210', 'ओपीडी डेस्क: +91 98765 43210')}
                </span>
              </div>
              <a
                href="tel:+919876543210"
                className="px-4 py-2 rounded-xl bg-rose-50 text-[#BE123C] text-xs font-bold hover:bg-rose-100 transition-colors border border-rose-200"
              >
                {t('Call OPD', 'कॉल ओपीडी')}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
