import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import { useLanguage } from '../context/LanguageContext';

/**
 * AnatomicalSpecialtyShowcase
 * Redesigned Interactive Split Showcase:
 * - Distinct asymmetric layout (interactive procedure list on left + large uncluttered real photo on right)
 * - Uses 100% real clinical & hospital photography (zero AI-generated faces, zero text overlaid on photos)
 * - Paired with Dr. Prakash Chand Shahi's real portrait & credentials
 */
export default function AnatomicalSpecialtyShowcase({ variant = 'home-specialties' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const specialties = [
    {
      id: 'angioplasty',
      num: '01',
      title: t('Heart Stenting & Blockage Care', 'हार्ट स्टेंटिंग और ब्लॉकेज केयर'),
      category: t('Painless Wrist Procedure', 'बिना दर्द कलाई प्रोसीजर'),
      desc: t('Opening blocked heart arteries gently through the wrist using safe, medicine-coated stents with quick recovery.', 'कलाई के रास्ते सेफ मेडिसिन-कोटेड स्टेंट्स के ज़रिए बंद हार्ट आर्टरीज़ को आराम से खोलना और तेज़ रिकवरी।'),
      image: '/images/rist.png',
      stat: t('99.4% Success Rate', '99.4% सफलता दर'),
      recovery: t('Walk in 2 Hours', '2 घंटे में चलें'),
      points: [
        t('Done gently through the wrist — no leg pain or long bed rest', 'कलाई के रास्ते आसानी से — पैर में दर्द या लंबा बेड रेस्ट नहीं'),
        t('Safe medicine-coated stents to keep arteries open', 'आर्टरीज़ को खुला रखने के लिए सेफ मेडिसिन-कोटेड स्टेंट्स'),
        t('Clear live heart imaging for accurate placement', 'सटीक प्लेसमेंट के लिए साफ लाइव हार्ट इमेजिंग'),
      ],
    },
    {
      id: 'angiogram',
      num: '02',
      title: t('Heart Blockage Check (Angiogram)', 'हार्ट ब्लॉकेज जांच (एंजियोग्राम)'),
      category: t('15-Minute Heart Test', '15-मिनट हार्ट टेस्ट'),
      desc: t('A quick, painless heart test through the wrist to clearly see if any arteries are blocked.', 'कलाई के रास्ते एक तेज़ और बिना दर्द का हार्ट टेस्ट, जिससे साफ पता चलता है कि कोई आर्टरी बंद तो नहीं है।'),
      image: '/images/ca.png',
      stat: t('15-Min Quick Check', '15-मिनट तेज़ जांच'),
      recovery: t('Same-Day Discharge', 'उसी दिन डिस्चार्ज'),
      points: [
        t('Simple outpatient wrist test — go home the same day', 'आसान ओपीडी रिस्ट टेस्ट — उसी दिन घर जाएं'),
        t('Dr. Shahi explains your full report and CD clearly to family', 'डॉ. शाही परिवार को आपकी पूरी रिपोर्ट और सीडी साफ समझाते हैं'),
        t('Honest advice on whether medicines or a stent is needed', 'दवाइयां या स्टेंट किसकी ज़रूरत है, इस पर ईमानदार सलाह'),
      ],
    },
    {
      id: 'pacemakers',
      num: '03',
      title: t('Pacemaker for Slow Heartbeat', 'धीमी हार्टबीट के लिए पेसमेकर'),
      category: t('Heartbeat Support', 'हार्टबीट सपोर्ट'),
      desc: t('Safe small heart device that keeps a slow or irregular heartbeat steady and prevents dizziness.', 'छोटा और सुरक्षित हार्ट डिवाइस जो धीमी या अनियमित हार्टबीट को स्थिर रखता है और चक्कर आने से बचाता है।'),
      image: '/images/Pacemaker for a Steady Heart.png',
      stat: t('10–14 Yr Battery', '10–14 साल बैटरी'),
      recovery: t('24–48 Hr Recovery', '24–48 घंटे रिकवरी'),
      points: [
        t('Supports natural, steady heartbeat day and night', 'दिन-रात सामान्य और स्थिर हार्टबीट में मदद करता है'),
        t('Easy regular checkups and battery monitoring', 'आसान रेगुलर चेकअप और बैटरी मॉनिटरिंग'),
        t('Small, comfortable placement with fast healing', 'छोटा, आरामदायक प्लेसमेंट और तेज़ हीलिंग'),
      ],
    },
    {
      id: 'icu-emergency',
      num: '04',
      title: t('24/7 Heart Attack Emergency', '24/7 हार्ट अटैक इमरजेंसी'),
      category: t('Round-the-Clock Care', '24 घंटे देखभाल'),
      desc: t('Immediate emergency heart care and 24/7 cardiac ICU support at Pulse Heart Centre, Betiahata.', 'पल्स हार्ट सेंटर, बेतियाहाता में तुरंत इमरजेंसी हार्ट केयर और 24/7 कार्डियक आईसीयू सपोर्ट।'),
      image: '/images/24.png',
      stat: t('Under 45 Min Care', '45 मिनट से कम में केयर'),
      recovery: t('24/7 Emergency Team', '24/7 इमरजेंसी टीम'),
      points: [
        t('Fast emergency checkup the moment you arrive', 'पहुंचते ही तुरंत इमरजेंसी चेकअप'),
        t('Dedicated clean cath lab and heart ICU beds', 'समर्पित साफ कैथ लैब और हार्ट आईसीयू बेड्स'),
        t('Direct care and supervision by Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही की सीधी देखरेख और इलाज'),
      ],
    },
  ];

  const current = specialties[activeIndex];

  return (
    <section className="relative pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12 overflow-hidden bg-[#FAF9F6] border-b border-slate-200">
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Editorial Header */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#BE123C] block">
              {t('Simple & Safe Heart Care', 'आसान और सुरक्षित हार्ट केयर')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
              {t('Our Heart Treatments', 'हमारे हार्ट ट्रीटमेंट्स')}
            </h2>
          </div>

          <Link to="/treatments" className="luxury-btn-secondary shrink-0 w-fit">
            <span>{t('All Treatments', 'सभी ट्रीटमेंट्स')}</span>
            <ArrowRight className="w-4 h-4 text-[#BE123C]" />
          </Link>
        </div>

        {/* Distinct Asymmetric Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column (5 cols): Interactive Procedure Selector */}
          <div className="lg:col-span-5 space-y-3 text-left">
            {specialties.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-start justify-between gap-4 ${
                    isActive
                      ? 'bg-[#0A1128] text-white border-[#0A1128] shadow-lg'
                      : 'bg-white text-[#0A1128] border-slate-200 hover:border-[#BE123C]/40 hover:bg-slate-50/80'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-rose-300' : 'text-[#BE123C]'}`}>
                        {item.num}
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className={`text-base font-extrabold leading-snug ${isActive ? 'text-white' : 'text-[#0A1128]'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isActive ? 'text-rose-300 translate-x-0.5' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Large Clean Real Photography Showcase + Attending Doctor Strip */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden text-left">
            {/* Uncluttered Real Clinical Photo */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Clean Clinical Details Below Photo */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                    {current.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] mt-0.5">
                    {current.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#BE123C] text-xs font-bold">
                    {current.stat}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0A1128] text-xs font-semibold inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
                    {current.recovery}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#BE123C] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Attending Doctor Footer Strip (Real Photo of Dr. Prakash Chand Shahi) */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/d2.jpeg"
                    alt="Dr. Prakash Chand Shahi"
                    className="w-11 h-11 rounded-full object-cover object-top border border-slate-300 shrink-0"
                  />
                  <div>
                    <span className="text-xs font-extrabold text-[#0A1128] flex items-center gap-1.5">
                      <span>{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#BE123C]" />
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {t('DM Cardiology (PGIMER) • MD (KGMU)', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • एमडी (केजीएमयू)')}
                    </span>
                  </div>
                </div>

                <Link to="/contact" className="luxury-btn-primary !py-2.5 !px-5 !text-xs w-fit">
                  <span>{t('Book Consultation', 'बुक कंसल्टेशन')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
