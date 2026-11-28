import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Calendar, ArrowRight, Stethoscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, isHindi, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 25;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('Home', 'होम'), path: '/' },
    { label: t('About', 'अबाउट'), path: '/about' },
    { label: t('Services', 'सर्विसेज'), path: '/services' },
    { label: t('Treatments', 'ट्रीटमेंट्स'), path: '/treatments' },
    { label: t('Hospital', 'हॉस्पिटल'), path: '/hospital' },
    { label: t('Contact', 'कॉन्टैक्ट'), path: '/contact' },
  ];

  const renderLanguageToggle = (layoutSuffix) => (
    <div
      role="group"
      aria-label="Language switcher"
      className="relative inline-flex items-center p-0.5 rounded-full bg-slate-100/95 border border-slate-200/90 hover:border-rose-300/80 shadow-2xs hover:shadow-sm transition-all duration-300 shrink-0"
    >
      {[
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'हिंदी' },
      ].map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLanguage(opt.code)}
            aria-pressed={isActive}
            className={`relative z-10 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
              isActive
                ? 'text-white'
                : 'text-slate-700 hover:text-[#BE123C]'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`nav-lang-pill-${layoutSuffix}`}
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] shadow-sm -z-10"
              />
            )}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2.5 sm:py-3.5 px-3 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        <nav className={`flex items-center justify-between gap-2 px-3.5 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${scrolled
          ? 'bg-white border border-slate-200 shadow-lg'
          : 'bg-white/95 border border-slate-200/80 shadow-sm'
          }`}>

          {/* Brand Logo: PULSE Hospital */}
          <Link
            to="/"
            className="group flex items-center gap-1.5 sm:gap-2 min-w-0 shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/images/p.webp"
              alt={t('Pulse Heart Centre Logo', 'पल्स हार्ट सेंटर लोगो')}
              className="h-9 sm:h-11 w-auto object-contain rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </Link>

          {/* Lead Doctor Identification Pill (With Stethoscope Crest) */}
          <Link
            to="/about"
            className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-[#0A1128] font-bold hover:border-rose-300 hover:text-[#BE123C] transition-colors shadow-2xs"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0A1128] to-[#BE123C] flex items-center justify-center text-white">
              <Stethoscope className="w-3 h-3" />
            </div>
            <span>{t('Dr. Prakash Chand Shahi • DM (PGIMER)', 'डॉ. प्रकाश चंद शाही • डीएम (पीजीआईएमईआर)')}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 backdrop-blur-md">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `relative px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md shadow-navy/30 scale-102 border border-rose-300/30'
                    : 'text-slate-700 hover:text-[#BE123C] hover:bg-white/80'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Actions: Language Toggle & Prominent Book Appointment CTA */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {renderLanguageToggle('desktop')}
            <Link
              to="/book-appointment"
              className="luxury-btn-primary !px-5 !py-2 !text-xs group"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-200 group-hover:scale-110 transition-transform" />
              <span>{t('Book Appointment', 'बुक अपॉइंटमेंट')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-rose-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Language Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            {renderLanguageToggle('mobile')}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="p-2.5 rounded-full bg-[#0A1128] text-white hover:bg-[#BE123C] active:scale-95 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2.5 p-4 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-2.5 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
            {/* Mobile Lead Doctor Banner */}
            <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-rose-50 border border-rose-200 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#BE123C] flex items-center justify-center text-white shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#0A1128] block leading-tight">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</span>
                <span className="text-[10px] text-[#BE123C] font-mono font-semibold block">{t('DM Cardiology (PGIMER)', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर)')}</span>
              </div>
            </div>

            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0A1128] to-[#BE123C] text-white shadow-md'
                    : 'text-slate-800 hover:bg-rose-50 hover:text-[#BE123C]'
                }`}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <Link
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-navy/20"
              >
                <Calendar className="w-4 h-4 text-rose-200" />
                <span>{t('Book Priority Appointment', 'बुक प्रायोरिटी अपॉइंटमेंट')}</span>
              </Link>

              <a
                href="tel:+919455899378"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-slate-50 hover:bg-rose-50 text-[#0A1128] hover:text-[#BE123C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-[#BE123C] animate-ping" />
                <span>{t('24/7 Helpline: +91 94558 99378', '24/7 हेल्पलाइन: +91 94558 99378')}</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
