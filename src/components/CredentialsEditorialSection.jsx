import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import { useLanguage } from '../context/LanguageContext';

/**
 * CredentialsEditorialSection
 * High-Contrast Deep Midnight Navy Editorial Band:
 * - Breaks up light-section monotony with rich #0A1128 architectural contrast
 * - 3 bold credential pillars (PGIMER Chandigarh, KGMU Lucknow, MBBS & 22+ Yrs)
 * - Wide Doctor Stewardship & Ethical Charter strip at the bottom with real portrait
 */
export default function CredentialsEditorialSection() {
  const { doctor } = PULSE_DATA;
  const { t } = useLanguage();

  const credentials = [
    {
      badge: t('HEART SPECIALIST', 'हार्ट स्पेशलिस्ट'),
      degree: t('DM — Cardiology', 'डीएम — कार्डियोलॉजी'),
      institute: t('PGIMER, Chandigarh', 'पीजीआईएमईआर, चंडीगढ़'),
      tag: t('Top National Medical Institute', 'देश का शीर्ष मेडिकल संस्थान'),
      image: '/images/precision.png',
      pos: 'object-center',
      summary: t(
        'Advanced training in painless heart checkups, stenting through the wrist, and pacemaker care.',
        'कलाई के रास्ते बिना दर्द हार्ट चेकअप, स्टेंटिंग और पेसमेकर केयर में एडवांस्ड ट्रेनिंग।'
      ),
    },
    {
      badge: t('POST-GRADUATE', 'पोस्ट-ग्रेजुएट'),
      degree: t('MD — General Medicine', 'एमडी — जनरल मेडिसिन'),
      institute: t("King George's Medical University (KGMU)", "किंग जॉर्ज मेडिकल यूनिवर्सिटी (केजीएमयू)"),
      tag: t('Lucknow • Est. 1905', 'लखनऊ • स्थापित 1905'),
      image: '/images/d.png',
      pos: 'object-center',
      summary: t(
        'Strong medical foundation in treating blood pressure, chest pain, heart failure, and emergency care.',
        'ब्लड प्रेशर, सीने में दर्द, हार्ट फेल्योर और इमरजेंसी केयर के इलाज में मजबूत मेडिकल अनुभव।'
      ),
    },
    {
      badge: t('TRUSTED CARE', 'भरोसेमंद केयर'),
      degree: t('22+ Years Practice', '22+ साल का अनुभव'),
      institute: t('Pulse Heart Centre, Betiahata', 'पल्स हार्ट सेंटर, बेतियाहाता'),
      tag: t('15,000+ Heart Procedures', '15,000+ हार्ट प्रोसीजर्स'),
      image: '/images/pu.png',
      pos: 'object-center',
      summary: t(
        'Providing Gorakhpur with gentle heart care through the wrist and 24/7 emergency heart attack support.',
        'गोरखपुर में कलाई के रास्ते आरामदायक हार्ट केयर और 24/7 हार्ट अटैक इमरजेंसी सहायता।'
      ),
    },
  ];

  const standards = [
    t('Painless Heart Care Through Wrist', 'कलाई के रास्ते बिना दर्द हार्ट केयर'),
    t('Honest Advice — Only Needed Treatment', 'ईमानदार सलाह — सिर्फ ज़रूरी ट्रीटमेंट'),
    t('Clear Report & CD Review with Family', 'परिवार के साथ साफ रिपोर्ट और सीडी रिव्यू'),
    t('Long-Term Follow-Up at Betiahata', 'बेतियाहाता में लॉन्ग-टर्म फॉलो-अप'),
  ];

  return (
    <section className="relative pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12 overflow-hidden bg-[#0A1128] text-white">
      {/* Subtle Architectural Radial Depth */}
      <div
        className="absolute -top-40 right-0 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.20) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 left-0 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,41,59,0.55) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-rose-400">
              <Award className="w-4 h-4" />
              <span>{t('Academic Pedigree', 'एकेडमिक पेडिग्री')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t('Trained at India’s Apex Medical Institutes', 'भारत के शीर्ष मेडिकल संस्थानों से प्रशिक्षित')}
            </h2>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-colors w-fit shrink-0"
          >
            <span>{t('View Full Profile', 'पूरी प्रोफाइल देखें')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Visual Credential Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-rose-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Visual Header Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.degree}
                  loading="lazy"
                  className={`w-full h-full object-cover ${item.pos} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-[#0A1128]/85 border border-white/15 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-rose-200 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{item.institute}</span>
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{item.tag}</span>
                  <ShieldCheck className="w-4 h-4 text-rose-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wide Doctor Stewardship Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white text-[#0A1128] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-left">
          <div className="lg:col-span-5 flex items-center gap-4">
            <img
              src="/images/d2.jpeg"
              alt={doctor.name}
              loading="lazy"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border border-slate-200 shadow-sm shrink-0"
            />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                {t('Ethical Clinical Stewardship', 'एथिकल क्लिनिकल स्टीवर्डशिप')}
              </span>
              <h4 className="text-lg font-extrabold text-[#0A1128] mt-0.5">
                {t(doctor.name, 'डॉ. प्रकाश चंद शाही')}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {t('Director & Chief Interventional Cardiologist, Pulse Heart Centre', 'डायरेक्टर एंड चीफ इंटरवेंशनल कार्डियोलॉजिस्ट, पल्स हार्ट सेंटर')}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:border-l lg:border-slate-200 lg:pl-8">
            {standards.map((std, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#0A1128]">
                <CheckCircle2 className="w-4 h-4 text-[#BE123C] shrink-0" />
                <span>{std}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
