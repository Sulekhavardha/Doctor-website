import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Zap,
  ShieldAlert,
  Users,
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle2,
  X,
  Sparkles,
  Clock,
  ShieldCheck,
  Building2,
  Award,
  Eye,
  Camera,
  MapPin
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';
import Interactive3DTilt from '../components/Interactive3DTilt';

export default function ServicesPage() {
  const { t, isHindi } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    HeartPulse: HeartPulse,
    Activity: Activity,
    Stethoscope: Stethoscope,
    Zap: Zap,
    ShieldAlert: ShieldAlert,
    Users: Users,
  };

  // Hero Campus Visual - Real Pulse Heart Centre Photo
  const activeStage = {
    id: 'campus',
    title: t('Pulse Heart Centre Betiahata Campus', 'पल्स हार्ट सेंटर बेतियाहाता कैंपस'),
    specs: t('Central Gorakhpur • 10 Min from Railway Station', 'सेंट्रल गोरखपुर • रेलवे स्टेशन से 10 मिनट'),
    image: '/images/ppp.webp',
    badge: t('Main Hospital Building', 'मुख्य हॉस्पिटल बिल्डिंग'),
  };

  // Real Pulse Heart Centre image mapping for all 6 core services
  const serviceImageMap = {
    'interventional-cardiology': {
      image: '/images/av.webp',
      aspect: 'aspect-[16/10]',
      objectPos: 'object-center',
      leadTag: t('Pulse Cath Lab Suite', 'पल्स कैथ लैब सूट'),
    },
    'diagnostic-cardiology': {
      image: '/images/d.avif',
      aspect: 'aspect-[16/10]',
      objectPos: 'object-center',
      leadTag: t('Pulse Precision Diagnostics', 'पल्स प्रेसिजन जांच'),
    },
    'hdu-general-ward': {
      image: '/images/ppp.webp',
      aspect: 'aspect-[16/10]',
      objectPos: 'object-center',
      leadTag: t('Pulse Betiahata Campus & HDU', 'पल्स बेतियाहाता कैंपस व एचडीयू'),
    },
    'electrophysiology': {
      image: '/images/f.webp',
      aspect: 'aspect-[16/10]',
      objectPos: 'object-center',
      leadTag: t('Pulse Pacemaker Suite', 'पल्स पेसमेकर सूट'),
    },
    'emergency-services': {
      image: '/images/E.webp',
      aspect: 'aspect-[16/10]',
      objectPos: 'object-center',
      leadTag: t('24/7 Pulse Emergency', '24/7 पल्स इमरजेंसी'),
    },
    'preventive-cardiology': {
      image: '/images/pp.webp',
      aspect: 'aspect-[16/10]',
      objectPos: 'object-center',
      leadTag: t('Pulse Wellness & Clinic', 'पल्स वेलनेस व क्लिनिक'),
    },
  };

  const rawServices = PULSE_DATA.comprehensiveServices || [];
  const services = rawServices.map((srv) => ({
    ...srv,
    ...(serviceImageMap[srv.id] || {
      image: '/images/ppp.webp',
      aspect: 'aspect-[16/10]',
      objectPos: 'object-center',
      leadTag: srv.badge,
    }),
  }));

  return (
    <div className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">

      {/* =========================================================================
          1. SERVICES PAGE MASTER HERO (100vh Viewport • Visual Split Architecture)
             Strong Pulse Heart Centre Visual Showcase
         ========================================================================= */}
      <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100dvh-5rem)] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden py-8 sm:py-10">
        <SectionBackgroundMotion variant="treatments-hero" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column (7 cols): Editorial Typography & Direct Clinical Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <ScrollReveal animation="fade-down">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-[10px] sm:text-xs font-mono font-bold shadow-md shadow-navy/20 border border-rose-300/30">
                  <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                  <span className="uppercase tracking-[0.2em]">{t('Pulse Heart Centre • 6 Core Clinical Departments', 'पल्स हार्ट सेंटर • 6 प्रमुख क्लिनिकल विभाग')}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.08}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] tracking-tight leading-[1.14]">
                  {t('Specialized Heart Care', 'विशेषज्ञ हृदय सेवाएं')} <br />
                  <span className="font-serif italic font-normal text-[#BE123C]">{t('Designed Around Outcomes.', 'बेहतर परिणाम और त्वरित देखभाल।')}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.14}>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                  {t(
                    'At Pulse Heart Centre Betiahata, every step of the cardiac journey is directed personally by Dr. Prakash Chand Shahi — from precision diagnostics to advanced Cath Lab interventions.',
                    'पल्स हार्ट सेंटर बेतियाहाता में कार्डियक केयर का हर चरण डॉ. प्रकाश चंद शाही की सीधी देखरेख में संचालित होता है — सटीक जांच से लेकर आधुनिक कैथ लैब प्रोसीजर्स तक।'
                  )}
                </p>
              </ScrollReveal>

              {/* Quick Clinical Metrics */}
              <ScrollReveal animation="fade-up" delay={0.18}>
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] font-bold">
                  <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-2xs">
                    {t('Betiahata Campus', 'बेतियाहाता कैंपस')}
                  </span>
                  <span className="bg-white text-[#0A1128] px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    {t('Cath Lab Active', 'कैथ लैब सक्रिय')}
                  </span>
                  <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-2xs">
                    {t('Painless Wrist Access', 'कलाई के रास्ते जांच')}
                  </span>
                  <span className="bg-white text-[#0A1128] px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    {t('Door-To-Balloon < 60 Min', 'डोर-टू-बैलून < 60 मिनट')}
                  </span>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal animation="fade-up" delay={0.22}>
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

              {/* Trust Strip */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#BE123C]" />
                  <span>{t('Pulse Heart Centre • Betiahata, Gorakhpur', 'पल्स हार्ट सेंटर • बेतियाहाता, गोरखपुर')}</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 text-rose-800 font-mono font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
                  <span>{t('Mon–Sat, 10 AM – 8 PM', 'सोम–शनि, सुबह 10 – रात 8')}</span>
                </span>
              </div>
            </div>

            {/* Right Column (5 cols): Real Pulse Heart Centre Image Stage with Interactive Switcher */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-up" delay={0.15}>
                <Interactive3DTilt maxTilt={5} scale={1.01}>
                  <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden text-left">
                    {/* Top Label: Campus Only */}
                    <div className="p-2 bg-slate-100/80 border-b border-slate-200 flex items-center text-[11px] font-mono font-bold">
                      <span className="w-full text-center py-1.5 px-3 rounded-xl bg-[#0A1128] text-white shadow-xs">
                        {t('Campus', 'कैंपस')}
                      </span>
                    </div>

                    {/* Featured Stage Photo (Real Pulse Heart Centre Asset) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <img
                        src={activeStage.image}
                        alt={activeStage.title}
                        className="w-full h-full object-cover object-[50%_68%] transition-all duration-500" loading="lazy" decoding="async" />

                      {/* Overlaid Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[#0A1128]/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20">
                          {activeStage.badge}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/95 text-white text-[10px] font-mono font-bold shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>{t('Live Facility', 'लाइव फैसिलिटी')}</span>
                        </span>
                      </div>
                    </div>

                    {/* Clean Info Strip Below Photo */}
                    <div className="px-4 py-3 bg-[#0A1128] text-white flex items-center justify-between gap-3 text-left">
                      <div className="min-w-0">
                        <span className="text-xs font-bold block truncate">
                          {activeStage.title}
                        </span>
                        <span className="text-[10px] text-slate-300 font-mono block truncate mt-0.5">
                          {activeStage.specs}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono bg-rose-600 px-2.5 py-0.5 rounded-full text-white shrink-0">
                        {t('Betiahata', 'बेतियाहाता')}
                      </span>
                    </div>

                    {/* Doctor Supervision Footer */}
                    <div className="p-3.5 sm:p-4 bg-white flex items-center justify-between gap-3 border-t border-slate-100">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src="/images/d1.jpeg"
                          alt="Dr. Prakash Chand Shahi"
                          className="w-10 h-10 rounded-xl object-cover object-top border border-rose-200 shrink-0" loading="lazy" decoding="async" />
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-[#0A1128] block truncate">
                            {t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono block truncate">
                            {t('Director & Interventional Cardiologist', 'डायरेक्टर एंड चीफ कार्डियोलॉजिस्ट')}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-50 text-[#BE123C] border border-rose-200 shrink-0">
                        {t('22+ Yrs Exp', '22+ साल अनुभव')}
                      </span>
                    </div>
                  </div>
                </Interactive3DTilt>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE 6 OFFICIAL HOSPITAL SERVICES: REAL PULSE CENTRE IMAGES
             ("texxt se jada image se show kro" & "pulse center ko jada shocase kro")
         ========================================================================= */}
      <section className="relative pt-4 pb-8 sm:pt-6 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section Header */}
        <ScrollReveal animation="fade-down" className="mb-8 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200 text-xs font-mono font-bold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>{t('Pulse Heart Centre • Official Services', 'पल्स हार्ट सेंटर • आधिकारिक सेवाएं')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight">
            {t('Comprehensive Heart Care Services', 'संपूर्ण हृदय चिकित्सा सेवाएं')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {t(
              'Real visual showcase of our Betiahata campus, modern Cath Lab suites, diagnostics, and patient care departments.',
              'हमारे बेतियाहाता कैंपस, मॉडर्न कैथ लैब सूट्स, डायग्नोस्टिक लैब्स और पेशेंट केयर विंग्स की रियल तस्वीरें।'
            )}
          </p>
        </ScrollReveal>

        {/* 6 Real Pulse Centre Clinical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || HeartPulse;
            return (
              <ScrollReveal
                key={service.id}
                animation="fade-up"
                delay={0.07 * idx}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedService(service)}
                  className="group relative h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1.5 cursor-pointer text-left overflow-hidden"
                >
                  {/* 1. DOMINANT REAL PULSE CENTRE IMAGE */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={isHindi ? service.titleHi : service.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover ${service.objectPos} group-hover:scale-108 transition-transform duration-700 filter brightness-95`}
                    />
                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-[#0A1128]/20 to-transparent" />

                    {/* Top Floating Badge & Icon */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#0A1128]/80 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                        {isHindi ? service.badgeHi : service.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#0284C7] group-hover:text-[#BE123C] flex items-center justify-center shadow-md transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Image Caption Bar */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="text-[11px] font-mono font-bold bg-rose-600/90 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                        {service.leadTag}
                      </span>
                      <span className="text-[10px] font-mono text-white/80 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{t('View Photo & Specs', 'फोटो व विवरण')}</span>
                      </span>
                    </div>
                  </div>

                  {/* 2. CARD CONTENT: Crisp & Impactful */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0A1128] tracking-tight group-hover:text-[#0284C7] transition-colors">
                        {isHindi ? service.titleHi : service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2">
                        {isHindi ? service.descriptionHi : service.description}
                      </p>
                    </div>

                    {/* Visual Highlights Chips */}
                    {service.highlights && (
                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        {(isHindi && service.highlightsHi ? service.highlightsHi : service.highlights).slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 3. CARD ACTION FOOTER */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284C7] group-hover:text-[#BE123C] transition-colors cursor-pointer"
                      >
                        <span>{t('Learn more', 'और जानें')}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>

                      <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                        {t('Pulse Heart Centre', 'पल्स हार्ट सेंटर')}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* 24/7 Helpline & OPD Pass Bar */}
        <ScrollReveal animation="fade-up" delay={0.3} className="mt-8 sm:mt-10">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#BE123C] flex items-center justify-center shrink-0 border border-rose-200">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                  {t('24/7 Cardiac Emergency Helpline', '24/7 कार्डियक इमरजेंसी हेल्पलाइन')}
                </span>
                <a
                  href="tel:+919455899378"
                  className="text-base sm:text-lg font-extrabold text-[#0A1128] hover:text-[#BE123C] transition-colors"
                >
                  +91 94558 99378
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                to="/treatments"
                className="luxury-btn-secondary !text-xs !py-2.5 !px-4"
              >
                <span>{t('View Treatments', 'ट्रीटमेंट्स देखें')}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#BE123C]" />
              </Link>
              <Link
                to="/contact"
                className="luxury-btn-primary !text-xs !py-2.5 !px-4"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>{t('Book Consultation', 'कंसल्टेशन बुक करें')}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================================
          3. PULSE HEART CENTRE CAMPUS VISUAL TOUR
             (Showcasing Real Campus Assets: pu.png, moder.png, reception.png)
         ========================================================================= */}
      <section className="relative pt-4 pb-6 sm:pt-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#BE123C] text-[10px] font-mono font-bold uppercase tracking-wider border border-rose-200">
            <Camera className="w-3.5 h-3.5" />
            <span>{t('Campus Tour', 'कैंपस टूर')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128]">
            {t('Inside Pulse Heart Centre, Betiahata', 'पल्स हार्ट सेंटर, बेतियाहाता के अंदर')}
          </h3>
          <p className="text-xs text-slate-500">
            {t(
              'Centrally located in Gorakhpur with emergency access, advanced Cath Lab and modern consultation suites.',
              'गोरखपुर के केंद्र बेतियाहाता में स्थित — 24/7 इमरजेंसी, एडवांस्ड कैथ लैब और आधुनिक ओपीडी सुविधाएं।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {/* Pulse Photo 1: Betiahata Campus */}
          <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src="/images/ppp.webp"
                alt="Pulse Heart Centre Betiahata Campus"
                className="w-full h-full object-cover object-[50%_68%] group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <span className="text-[10px] font-mono font-bold text-rose-300 uppercase block">
                  {t('Main Hospital Campus', 'मुख्य हॉस्पिटल कैंपस')}
                </span>
                <span className="text-xs font-bold block truncate">
                  {t('Pulse Heart Centre, Betiahata', 'पल्स हार्ट सेंटर, बेतियाहाता')}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#BE123C] uppercase flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{t('Central Gorakhpur', 'सेंट्रल गोरखपुर')}</span>
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('Easy drive-in access, 10 minutes from Gorakhpur Railway Station with dedicated patient parking.', 'रेलवे स्टेशन से सिर्फ 10 मिनट की दूरी पर सुविधाजनक स्थान और सुरक्षित पार्किंग।')}
              </p>
            </div>
          </div>

          {/* Pulse Photo 2: Modern Cath Lab */}
          <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src="/images/fff.webp"
                alt="Pulse Heart Centre Cath Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <span className="text-[10px] font-mono font-bold text-rose-300 uppercase block">
                  {t('Modern Intervention Suite', 'मॉडर्न कैथ लैब सूट')}
                </span>
                <span className="text-xs font-bold block truncate">
                  {t('Siemens Flat-Panel Cath Lab', 'सीमेंस फ्लैट-पैनल कैथ लैब')}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#BE123C] uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>{t('Class-100 Cleanroom', 'क्लास-100 क्लीनरूम')}</span>
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('Sub-millimeter fluoroscopic imaging for painless radial wrist angioplasty and pacemaker implants.', 'कलाई के रास्ते दर्द रहित एंजियोप्लास्टी और पेसमेकर के लिए अल्ट्रा-हाई प्रेसिजन इमेजिंग।')}
              </p>
            </div>
          </div>

          {/* Pulse Photo 3: OPD Reception Lounge */}
          <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src="/images/reception.webp"
                alt="Pulse Heart Centre OPD Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <span className="text-[10px] font-mono font-bold text-rose-300 uppercase block">
                  {t('Patient Care & Consultation', 'पेशेंट केयर व कंसल्टेशन')}
                </span>
                <span className="text-xs font-bold block truncate">
                  {t('OPD Reception & Waiting Lounge', 'ओपीडी रिसेप्शन व वेटिंग लाउंज')}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#BE123C] uppercase flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{t('Mon–Sat, 10 AM – 8 PM', 'सोम–शनि, 10 AM – 8 PM')}</span>
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('Calm, hygienic reception lounge with digital consultation tokens and same-day report checkups.', 'शांत, स्वच्छ वेटिंग लाउंज, डिजिटल ओपीडी टोकन और सेम-डे रिपोर्ट व सीडी जांच की सुविधा।')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE SERVICE DETAIL MODAL (Visual-First with High-Res Image)
         ========================================================================= */}
      <AnimatePresence>
        {selectedService && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-[#0A1128]/75 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-left my-auto"
            >
              {/* Modal Visual Header Image (Larger Image Area) */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedService.image}
                  alt={isHindi ? selectedService.titleHi : selectedService.title}
                  className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/20 to-transparent" />

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-300 block">
                    {isHindi ? selectedService.badgeHi : selectedService.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold !text-white text-white tracking-tight">
                    {isHindi ? selectedService.titleHi : selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Compact Modal Body */}
              <div className="p-4 sm:p-5 space-y-3">
                <p className="text-xs text-slate-600 font-normal leading-snug">
                  {isHindi ? selectedService.descriptionHi : selectedService.description}
                </p>

                {selectedService.highlights && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-slate-800 uppercase tracking-wider block">
                      {t('Key Clinical Capabilities:', 'प्रमुख क्लिनिकल सुविधाएं:')}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {(isHindi && selectedService.highlightsHi ? selectedService.highlightsHi : selectedService.highlights).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/d1.jpeg"
                      alt="Dr. Prakash Chand Shahi"
                      className="w-8 h-8 rounded-lg object-cover object-top border border-slate-300 shrink-0" loading="lazy" decoding="async" />
                    <div>
                      <span className="font-bold text-[#0A1128] block leading-tight">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</span>
                      <span className="text-[10px] text-slate-500">{t('Director & Cardiologist', 'डायरेक्टर एंड कार्डियोलॉजिस्ट')}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#BE123C] shrink-0">
                    {t('Betiahata Campus', 'बेतियाहाता कैंपस')}
                  </span>
                </div>

                <div className="pt-1 flex items-center justify-end gap-2.5">
                  <Link
                    to="/treatments"
                    onClick={() => setSelectedService(null)}
                    className="luxury-btn-secondary !text-[11px] !py-2 !px-3.5"
                  >
                    <span>{t('View Treatments', 'ट्रीटमेंट्स देखें')}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#BE123C]" />
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedService(null)}
                    className="luxury-btn-primary !text-[11px] !py-2 !px-3.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>{t('Book OPD Pass', 'ओपीडी पास बुक करें')}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
