import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MapPin, Clock, ArrowUp, Calendar, Heart, Facebook, Instagram, ShieldCheck, Stethoscope, Phone } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { clinic, doctor, socials } = PULSE_DATA;
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0A1128] via-[#070D1F] to-[#040813] text-white overflow-hidden border-t-2 border-rose-900/50">

      {/* High-Impact Deep Midnight Navy & Crimson Ruby Animated Telemetry Background */}
      <SectionBackgroundMotion variant="footer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-12 pb-8 sm:pb-10 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">

          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-rose-300/40 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src="/images/p.png"
                  alt="Pulse Heart Centre Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-xl tracking-[0.2em] text-white uppercase leading-none">
                  {t('PULSE', 'पल्स')}
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#E11D48] font-mono mt-0.5">
                  {t('Heart Centre', 'हार्ट सेंटर')}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm text-left">
              {t(
                'Safe and caring heart treatment led by Dr. Prakash Chand Shahi in Gorakhpur.',
                'गोरखपुर में डॉ. प्रकाश चंद शाही के नेतृत्व में सुरक्षित और भरोसेमंद हार्ट ट्रीटमेंट।'
              )}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-left p-2.5 rounded-2xl bg-white/5 border border-rose-300/30 w-fit max-w-full">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#BE123C] border border-rose-300/50 flex items-center justify-center text-white shrink-0">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="font-bold text-white block text-sm">
                  {t(doctor.name, 'डॉ. प्रकाश चंद शाही')}
                </span>
                <span className="text-rose-300 block font-mono text-[10px]">
                  {t('DM Cardiology (PGIMER) • MD (KGMU) • 22+ Yrs', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • एमडी (केजीएमयू) • 22+ साल')}
                </span>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-3 text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-rose-300 block mb-2 font-bold">
                {t('Connect With Dr. Shahi', 'डॉ. शाही से जुड़ें')}
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={socials?.facebook || "https://www.facebook.com/share/1EHVta9Gk8/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white text-xs font-medium border border-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Facebook className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  <span>{t('Facebook', 'फेसबुक')}</span>
                </a>

                <a
                  href={socials?.instagram || "https://www.instagram.com/prakashchandshahi763?lqvp=MWdyN2Q0YTM1NmJxMA=="}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] text-white text-xs font-medium border border-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:text-white" />
                  <span>{t('Instagram', 'इंस्टाग्राम')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links to Separate Pages */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <span className="text-xs uppercase tracking-wider text-rose-300 font-bold block font-mono">
              {t('Pages', 'पेजेस')}
            </span>
            <ul className="space-y-2.5 text-xs font-light text-slate-300">
              <li>
                <Link to="/" className="hover:text-rose-300 transition-colors">{t('Home', 'होम')}</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-rose-300 transition-colors font-medium text-rose-300">{t('Comprehensive Heart Care', 'कंप्रिहेंसिव हार्ट केयर')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-rose-300 transition-colors">{t('About Dr. P. C. Shahi', 'अबाउट डॉ. पी. सी. शाही')}</Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-rose-300 transition-colors">{t('Heart Treatments', 'हार्ट ट्रीटमेंट्स')}</Link>
              </li>
              <li>
                <Link to="/hospital" className="hover:text-rose-300 transition-colors">{t('Pulse Heart Centre, Betiahata', 'पल्स हार्ट सेंटर, बेतियाहाता')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-300 transition-colors">{t('Book Appointment', 'बुक अपॉइंटमेंट')}</Link>
              </li>
            </ul>
          </div>

          {/* Clinic Information */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <span className="text-xs uppercase tracking-wider text-rose-300 font-bold block font-mono">
              {t('Pulse Heart Centre', 'पल्स हार्ट सेंटर')}
            </span>

            <div className="space-y-2.5 text-xs text-slate-300 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{t(`${clinic.name}, ${clinic.address}`, 'पल्स मल्टीस्पेशियलिटी हॉस्पिटल एंड हार्ट सेंटर, बेतियाहाता, गोरखपुर, उत्तर प्रदेश, इंडिया')}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t(`${clinic.hours} (${clinic.sunday})`, 'मंडे – सैटरडे: 08:30 एएम – 08:30 पीएम (संडे: इमरजेंसी एंड इनपेशेंट सर्विसेस ओपन 24/7)')}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href="tel:+919455899378" className="hover:text-rose-300 transition-colors font-mono font-bold text-white">+91 94558 99378</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{t('Gorakhpur, Uttar Pradesh — PIN 273001', 'गोरखपुर, उत्तर प्रदेश — पिन 273001')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <p>© {new Date().getFullYear()} {t('Pulse Heart Centre, Gorakhpur. Trusted Heart Care.', 'पल्स हार्ट सेंटर, गोरखपुर। ट्रस्टेड हार्ट केयर।')}</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1EHVta9Gk8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="Dr. Prakash Chand Shahi on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/prakashchandshahi763?lqvp=MWdyN2Q0YTM1NmJxMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="Dr. Prakash Chand Shahi on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
