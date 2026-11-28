import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar, Phone, MapPin, Clock, Navigation, Mail, Sparkles, Play,
  Stethoscope, ShieldCheck, HeartPulse, CheckCircle2, ArrowRight, Building2
} from 'lucide-react';
import AppointmentExperienceSection from '../components/AppointmentExperienceSection';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import DoctorPlaceholder from '../components/DoctorPlaceholder';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';
import Interactive3DTilt from '../components/Interactive3DTilt';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { clinic, doctor } = PULSE_DATA;
  const { t } = useLanguage();

  const infoCards = [
    {
      icon: Navigation,
      color: 'bg-rose-50 text-[#BE123C] border-rose-200',
      title: t('How to Reach Us', 'हम तक कैसे पहुंचें'),
      text: t(
        'In central Betiahata, Gorakhpur — just 10 minutes from Gorakhpur Railway Station and Golghar.',
        'सेंट्रल बेतियाहाता, गोरखपुर में — गोरखपुर रेलवे स्टेशन और गोलघर से सिर्फ 10 मिनट की दूरी पर।'
      ),
    },
    {
      icon: Clock,
      color: 'bg-slate-100 text-[#0A1128] border-slate-200',
      title: t('When You Arrive', 'जब आप आएं'),
      text: t(
        'Please arrive 15 minutes before your appointment time. Bring your old ECG, Echo reports, and heart CDs if available.',
        'कृपया अपने अपॉइंटमेंट टाइम से 15 मिनट पहले आएं। अगर उपलब्ध हो तो अपनी पुरानी ईसीजी, इको रिपोर्ट्स और हार्ट सीडी साथ लाएं।'
      ),
    },
    {
      icon: Phone,
      color: 'bg-rose-50 text-[#E11D48] border-rose-200',
      title: t('24/7 Heart Emergency', '24/7 हार्ट इमरजेंसी'),
      text: t(
        'Patients with sudden chest pain, heavy sweating, or fainting are seen immediately without any waiting.',
        'अचानक सीने में दर्द, तेज़ पसीना या चक्कर आने वाले मरीज़ों को बिना किसी इंतज़ार के तुरंत देखा जाता है।'
      ),
    },
  ];

  return (
    <div className="relative bg-[#FAF9F6] overflow-hidden pt-16 sm:pt-20 pb-6 sm:pb-8">

      {/* =========================================================================
          COMPACT CONTACT US HEADER & 3 DIRECT CONTACT CARDS
         ========================================================================= */}
      <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[100dvh] flex flex-col justify-start pt-8 sm:pt-12 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200/80">

        <SectionBackgroundMotion variant="contact-hero" />

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
          {/* Compact Centered Contact Header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-[10px] sm:text-xs font-mono font-bold shadow-md shadow-navy/20 border border-rose-300/30">
                <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                <span className="uppercase tracking-[0.2em]">{t('Contact & Appointments • Betiahata, Gorakhpur', 'संपर्क और अपॉइंटमेंट • बेतियाहाता, गोरखपुर')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] tracking-tight leading-[1.06]">
                {t('Get in Touch', 'संपर्क करें')} <br />
                <span className="font-serif italic font-normal text-[#BE123C]">{t('With Pulse Heart Centre.', 'पल्स हार्ट सेंटर के साथ।')}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
                <p className="pt-5 sm:pt-7 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
                  {t(
                    'Have a question, need clinic directions, or want to book an OPD visit with Dr. Prakash Chand Shahi? Call us directly or schedule your visit below.',
                    'कोई सवाल हो, क्लिनिक का रास्ता जानना हो, या डॉ. प्रकाश चंद शाही से मिलने के लिए ओपीडी बुक करनी हो — सीधे कॉल करें या नीचे अपॉइंटमेंट बुक करें।'
                  )}
                </p>
            </div>
          </ScrollReveal>

          {/* 3 Instant Contact Cards (Call, Address, OPD Timings) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {/* Card 1: Phone & 24/7 Helpline */}
            <ScrollReveal animation="fade-up" delay={0.05}>
              <a
                href="tel:+919455899378"
                className="group h-full p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-rose-300 transition-all flex flex-col justify-between gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#BE123C] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200">
                    {t('24/7 Helpline', '24/7 हेल्पलाइन')}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t('Call for Appointment / Emergency', 'अपॉइंटमेंट / इमरजेंसी कॉल')}
                  </p>
                  <p className="text-xl font-extrabold text-[#0A1128] group-hover:text-[#BE123C] transition-colors">
                    +91 94558 99378
                  </p>
                  <p className="text-xs text-slate-600">
                    {t('Tap to call our reception or emergency desk directly.', 'रिसेप्शन या इमरजेंसी डेस्क पर सीधे कॉल करने के लिए टैप करें।')}
                  </p>
                </div>
              </a>
            </ScrollReveal>

            {/* Card 2: Clinic Location */}
            <ScrollReveal animation="fade-up" delay={0.1}>
              <a
                href={clinic?.mapUrl || 'https://maps.google.com/?q=Pulse+Heart+Centre+Betiahata+Gorakhpur'}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0A1128] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#0A1128] border border-slate-200">
                    {t('Google Maps', 'गूगल मैप्स')}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t('Clinic Address', 'क्लिनिक का पता')}
                  </p>
                  <p className="text-base font-extrabold text-[#0A1128] group-hover:text-[#BE123C] transition-colors leading-snug">
                    {t('Pulse Heart Centre, Betiahata, Gorakhpur', 'पल्स हार्ट सेंटर, बेतियाहाता, गोरखपुर')}
                  </p>
                  <p className="text-xs text-slate-600">
                    {t('Uttar Pradesh 273001 • 10 min from Railway Station', 'उत्तर प्रदेश 273001 • रेलवे स्टेशन से 10 मिनट')}
                  </p>
                </div>
              </a>
            </ScrollReveal>

            {/* Card 3: OPD Timings & Doctor */}
            <ScrollReveal animation="fade-up" delay={0.15}>
              <div className="h-full p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/d2.jpeg"
                      alt="Dr. Prakash Chand Shahi"
                      className="w-11 h-11 rounded-2xl object-cover object-top border border-rose-200 shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-[#0A1128] truncate">
                        {t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}
                      </p>
                      <p className="text-[11px] font-semibold text-[#BE123C] truncate">
                        {t('Room 101 • Reg. 47395', 'रूम 101 • रजि. 47395')}
                      </p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#BE123C] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t('OPD Timings', 'ओपीडी समय')}
                  </p>
                  <p className="text-lg font-extrabold text-[#0A1128]">
                    {t('Mon – Sat: 10:00 AM – 8:00 PM', 'सोम – शनि: सुबह 10 – रात 8')}
                  </p>
                  <p className="text-xs text-slate-600">
                    {t('Sunday: Emergency Care Only', 'रविवार: केवल इमरजेंसी सेवा')}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================================================================
          APPOINTMENT SECTION
         =================================================================== */}
      <div id="appointment" className="relative">
        <AppointmentExperienceSection variant="contact-appointment" />
      </div>

      {/* ===================================================================
          VISIT GUIDE & DIRECT CLINIC ACTION FOOTER BANNER
         =================================================================== */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden border-t border-slate-200/80">
        <SectionBackgroundMotion variant="contact-protocol" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-10">

          {/* Editorial Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-rose-200 text-[#BE123C] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-xs">
                  <Navigation className="w-3.5 h-3.5 text-[#BE123C]" />
                  <span>{t('Visit & Arrival Guide', 'आने से पहले जानकारी')}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                  {t('Everything You Need', 'आपके विज़िट के लिए')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Before You Visit', 'ज़रूरी जानकारी')}</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed text-left md:text-right">
                {t(
                  'Simple directions, what reports to bring, and immediate emergency support at Pulse Heart Centre, Betiahata.',
                  'आसान रास्ता, कौन सी रिपोर्ट्स साथ लाएं, और पल्स हार्ट सेंटर, बेतियाहाता में तुरंत इमरजेंसी सहायता।'
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* 3-Card Clean Editorial Visit Guide Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 0.08}>
                <div className="group h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0A1128] via-[#BE123C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className={`w-11 h-11 rounded-2xl border ${card.color} flex items-center justify-center shadow-2xs`}>
                        <card.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0A1128] group-hover:text-[#BE123C] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Matching Midnight Navy Direct Location & Emergency Action Card */}
          <ScrollReveal animation="fade-up" delay={0.15}>
            <div className="relative rounded-[2.25rem] bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#0A1128] text-white p-7 sm:p-10 shadow-2xl border border-rose-300/20 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#BE123C]/20 blur-3xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-left">

                <div className="lg:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-rose-200">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
                    <span>{t('Pulse Heart Centre • Betiahata, Gorakhpur', 'पल्स हार्ट सेंटर • बेतियाहाता, गोरखपुर')}</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold !text-white text-white tracking-tight leading-snug">
                    {t('Need Immediate Help or Directions?', 'तुरंत मदद या क्लिनिक का रास्ता चाहिए?')}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t('Betiahata, Gorakhpur, Uttar Pradesh 273001', 'बेतियाहाता, गोरखपुर, उत्तर प्रदेश 273001')}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{t('Mon – Sat: 10:00 AM – 8:00 PM (Sun: Emergency)', 'सोम – शनि: सुबह 10 – रात 8 (रवि: इमरजेंसी)')}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
                  <a
                    href="tel:+919455899378"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#BE123C] hover:bg-[#E11D48] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:-translate-y-0.5 text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t('Call +91 94558 99378', 'कॉल +91 94558 99378')}</span>
                  </a>
                  <a
                    href={clinic?.mapUrl || 'https://maps.google.com/?q=Pulse+Heart+Centre+Betiahata+Gorakhpur'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all hover:-translate-y-0.5 text-center"
                  >
                    <Navigation className="w-4 h-4 text-rose-300" />
                    <span>{t('Get Directions', 'मैप देखें')}</span>
                  </a>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
