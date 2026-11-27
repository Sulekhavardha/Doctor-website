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
  MapPin
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function ComprehensiveServicesSection() {
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

  const services = PULSE_DATA.comprehensiveServices || [];

  return (
    <section 
      id="services" 
      className="relative pt-6 pb-6 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-8 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#F8FAFC] border-b border-slate-200"
    >
      {/* Soft Ambient Radiance */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none -z-10 blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full pointer-events-none -z-10 blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(190, 18, 60, 0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================================================
            1. SECTION HEADER (Exact Match to Official pulseheartcentre.in/#services)
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-xs font-mono font-bold shadow-md border border-rose-300/30">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              <span className="uppercase tracking-[0.2em]">{t('Comprehensive Heart Care', 'कंप्रिहेंसिव हार्ट केयर')}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
              {t('COMPREHENSIVE HEART CARE', 'संपूर्ण हृदय चिकित्सा')}
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.15}>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {t(
                'From the first ECG to the final follow-up, every step of the cardiac journey is designed around outcomes, dignity and speed.',
                'पहली ईसीजी से लेकर फाइनल फॉलो-अप तक, कार्डियक केयर का हर कदम बेहतर परिणाम, सम्मान और त्वरित इलाज के लिए समर्पित है।'
              )}
            </p>
          </ScrollReveal>
        </div>

        {/* =========================================================================
            2. SERVICES 6-CARD GRID (Exact Visual Replica with Sky-Glow & Precision Icons)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || HeartPulse;
            return (
              <ScrollReveal 
                key={service.id} 
                animation="fade-up" 
                delay={0.08 * idx}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedService(service)}
                  className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-white to-sky-50/70 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer text-left overflow-hidden"
                >
                  {/* Subtle Corner Glow matching screenshot */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-sky-200/40 via-sky-100/20 to-transparent rounded-bl-full pointer-events-none -z-0 opacity-70 group-hover:scale-125 transition-transform duration-500" />

                  <div className="space-y-4 relative z-10">
                    {/* Top Row: Circular Icon Badge & Department Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 text-[#0284C7] flex items-center justify-center shadow-xs group-hover:bg-[#0284C7] group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                        <IconComponent className="w-6 h-6 transition-transform duration-300" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white/80 px-2.5 py-1 rounded-full border border-slate-200">
                        {isHindi ? service.badgeHi : service.badge}
                      </span>
                    </div>

                    {/* Service Title */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0A1128] tracking-tight group-hover:text-[#0284C7] transition-colors">
                        {isHindi ? service.titleHi : service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2 line-clamp-3">
                        {isHindi ? service.descriptionHi : service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Learn More Link */}
                  <div className="pt-6 relative z-10">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284C7] group-hover:text-[#BE123C] transition-colors cursor-pointer"
                    >
                      <span>{t('Learn more', 'और जानें')}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* =========================================================================
            3. QUICK CALL-TO-ACTION BAR (Helpline & Direct OPD Pass)
           ========================================================================= */}
        <ScrollReveal animation="fade-up" delay={0.3} className="mt-6 sm:mt-8">
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
                <span>{t('All Treatments', 'सभी ट्रीटमेंट्स')}</span>
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

      </div>

      {/* =========================================================================
          4. INTERACTIVE SERVICE DETAIL MODAL
         ========================================================================= */}
      <AnimatePresence>
        {selectedService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1128]/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-left p-6 sm:p-8 space-y-5"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Service Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-200">
                  {React.createElement(iconMap[selectedService.icon] || HeartPulse, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C]">
                    {isHindi ? selectedService.badgeHi : selectedService.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0A1128] tracking-tight">
                    {isHindi ? selectedService.titleHi : selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {isHindi ? selectedService.descriptionHi : selectedService.description}
              </p>

              {/* Highlights */}
              {selectedService.highlights && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider block">
                    {t('Key Clinical Capabilities:', 'प्रमुख क्लिनिकल सुविधाएं:')}
                  </span>
                  <div className="space-y-1.5">
                    {selectedService.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Doctor Stewardship Stamp */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="/images/d1.jpeg" 
                    alt="Dr. Prakash Chand Shahi" 
                    className="w-9 h-9 rounded-lg object-cover object-top border border-slate-300"
                  />
                  <div>
                    <span className="font-bold text-[#0A1128] block">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</span>
                    <span className="text-[10px] text-slate-500">{t('Director & Chief Interventional Cardiologist', 'डायरेक्टर एंड चीफ कार्डियोलॉजिस्ट')}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#BE123C]">
                  {t('Betiahata Campus', 'बेतियाहाता कैंपस')}
                </span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <Link
                  to={selectedService.link || '/treatments'}
                  onClick={() => setSelectedService(null)}
                  className="luxury-btn-secondary !text-xs !py-2.5 !px-4"
                >
                  <span>{t('View Details', 'विस्तार से देखें')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BE123C]" />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setSelectedService(null)}
                  className="luxury-btn-primary !text-xs !py-2.5 !px-4"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>{t('Book OPD Pass', 'ओपीडी पास बुक करें')}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
