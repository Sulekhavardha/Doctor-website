import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, ShieldCheck, Building2, Users, HeartPulse,
  Target, CheckCircle2, ArrowRight, Clock, MapPin, Sparkles, Calendar, Play, Stethoscope, Phone, Activity, Zap, Layers, RefreshCw
} from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from '../components/SectionCinematicVideo';
import DoctorPlaceholder from '../components/DoctorPlaceholder';
import ThreeDImageCard from '../components/ThreeDImageCard';
import SectionBackgroundMotion from '../components/SectionBackgroundMotion';
import DoctorHeroMedicalCanvas from '../components/DoctorHeroMedicalCanvas';
import { useLanguage } from '../context/LanguageContext';

const CylinderCarouselMilestones = lazy(() => import('../components/CylinderCarouselMilestones'));

export default function AboutPage() {
  const [timelineMode, setTimelineMode] = useState('expanded'); // 'cylinder' | 'expanded'
  const { t } = useLanguage();
  const milestones = [
    {
      year: "2023",
      phase: t('LATEST', 'नवीनतम'),
      badge: t('24/7 Heart ICU', '24/7 हार्ट आईसीयू'),
      institution: t('Emergency • Heart ICU', 'इमरजेंसी • हार्ट आईसीयू'),
      title: t('Expanded Emergency & Heart ICU', '24/7 हार्ट आईसीयू एवं आपातकालीन विस्तार'),
      desc: t('Expanded 24/7 emergency heart care, modern artery imaging, and a dedicated Heart ICU — crossing 15,000+ successful procedures.', '24/7 हार्ट आईसीयू और आधुनिक इमेजिंग का विस्तार — 15,000 से अधिक सफल हृदय प्रक्रियाओं का गौरवशाली मील का पत्थर।'),
      tags: [t('Modern Imaging', 'आधुनिक इमेजिंग'), t('Dedicated Heart ICU', 'समर्पित हार्ट आईसीयू'), t('15,000+ Procedures', '15,000+ सफल प्रक्रियाएं')],
      icon: Activity,
      accent: "from-[#881337] to-[#BE123C]",
      borderAccent: "border-rose-300",
      num: "05"
    },
    {
      year: "2018",
      phase: t('MILESTONE', 'माइलस्टोन'),
      badge: t('Modern Cath Lab', 'डिजिटल कैथ लैब'),
      institution: t('Siemens Artis Zee Cath Lab', 'सीमेंस आर्टिस जी कैथ लैब'),
      title: t('Digital Heart Cath Lab Opened', 'डिजिटल सीमेंस कैथ लैब की स्थापना'),
      desc: t('Set up the modern Siemens Artis Zee Cath Lab in Betiahata to provide 24/7 emergency heart attack care with clear live imaging.', 'बेतियाहाता में सीमेंस आर्टिस जी डिजिटल कैथ लैब की स्थापना — आपातकालीन हार्ट अटैक में 24/7 तुरंत लाइव एंजियोप्लास्टी सुविधा।'),
      tags: [t('Siemens Cath Lab', 'सीमेंस कैथ लैब'), t('Clear Heart Stents', 'लाइव आर्टरी इमेजिंग'), t('24/7 Emergency', '24/7 आपातकालीन सेवा')],
      icon: ShieldCheck,
      accent: "from-[#0A1128] to-[#BE123C]",
      borderAccent: "border-rose-300",
      num: "04"
    },
    {
      year: "2013",
      phase: t('SUPER-SPECIALTY', 'सुपर-स्पेशियलिटी'),
      badge: t('Heart Specialist', 'सुपर-स्पेशियलिटी'),
      institution: t('PGIMER Chandigarh', 'पीजीआईएमईआर चंडीगढ़'),
      title: t('DM Cardiology at PGIMER Chandigarh', 'पीजीआईएमईआर चंडीगढ़ से डीएम कार्डियोलॉजी'),
      desc: t('Completed super-specialty DM Cardiology at PGIMER Chandigarh, bringing painless heart checkups and stenting through the wrist to eastern UP.', 'पीजीआईएमईआर (PGIMER) चंडीगढ़ से सुपर-स्पेशियलिटी डीएम (कार्डियोलॉजी) पूर्ण — पूर्वांचल में कलाई के रास्ते दर्दरहित एंजियोप्लास्टी की शुरुआत।'),
      tags: [t('PGIMER Chandigarh', 'पीजीआईएमईआर चंडीगढ़'), t('Safe Wrist Care', 'कलाई से सुरक्षित स्टेंटिंग'), t('Eastern UP', 'पूर्वांचल')],
      icon: Sparkles,
      accent: "from-[#BE123C] to-[#E11D48]",
      borderAccent: "border-rose-300",
      num: "03"
    },
    {
      year: "2007",
      phase: t('POST-GRADUATE', 'पोस्ट-ग्रेजुएट'),
      badge: t('Medical Degree', 'एमडी मेडिसिन'),
      institution: t('KGMU Lucknow', 'केजीएमयू लखनऊ'),
      title: t('MD Medicine at KGMU Lucknow', 'केजीएमयू लखनऊ से एमडी (मेडिसिन)'),
      desc: t("Completed MD General Medicine at King George's Medical University, Lucknow, building strong experience in treating complex heart and BP cases.", "किंग जॉर्ज मेडिकल यूनिवर्सिटी (KGMU), लखनऊ से एमडी (जनरल मेडिसिन) पूर्ण, जटिल हृदय एवं उच्च रक्तचाप (BP) के इलाज में गहन अनुभव।"),
      tags: [t('KGMU Lucknow', 'केजीएमयू लखनऊ'), t('Strong Diagnosis', 'सटीक निदान'), t('Trusted Care', 'विश्वसनीय चिकित्सा')],
      icon: Award,
      accent: "from-[#1E293B] to-[#334155]",
      borderAccent: "border-slate-300",
      num: "02"
    },
    {
      year: "2002",
      phase: t('ORIGIN', 'शुरुआत'),
      badge: t('Starting Point', 'शुरुआती पड़ाव'),
      institution: t('Betiahata, Gorakhpur', 'बेतियाहाता, गोरखपुर'),
      title: t('Starting Heart Care in Betiahata', 'बेतियाहाता में हृदय चिकित्सा का शुभारंभ'),
      desc: t('Started dedicated heart care in Betiahata, Gorakhpur, with a promise to listen patiently and put every patient first.', 'बेतियाहाता, गोरखपुर में समर्पित हृदय चिकित्सा की शुरुआत — हर मरीज़ को प्राथमिकता और धैर्यपूर्वक सुनने का संकल्प।'),
      tags: [t('Betiahata, Gorakhpur', 'बेतियाहाता, गोरखपुर'), t('Patient-First Care', 'मरीज़-प्रथम सेवा'), t('Day 1 Promise', 'पहला संकल्प')],
      icon: HeartPulse,
      accent: "from-[#0A1128] to-[#1E293B]",
      borderAccent: "border-slate-300",
      num: "01"
    }
  ];

  return (
    <div className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 bg-[#FAF9F6] overflow-hidden">

      {/* =========================================================================
          HERO SECTION: EXECUTIVE BIOGRAPHICAL & CLINICAL LEADERSHIP DOSSIER
         ========================================================================= */}
      <section className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">

        {/* Clean, Non-Intrusive Medical Backdrop */}
        <DoctorHeroMedicalCanvas />

        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center relative z-10 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

            {/* Left Column (7 cols): Clinical Leadership Monograph */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 text-[#BE123C] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
                <span>{t('Institutional Founder & Chief Cardiologist', 'इंस्टीट्यूशनल फाउंडर एंड चीफ कार्डियोलॉजिस्ट')}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#0A1128] tracking-tight leading-[1.06]">
                  {t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}
                </h1>
                <p className="font-serif italic font-normal text-[#BE123C] text-xl sm:text-3xl leading-snug">
                  {t('22+ Years of Trusted Heart Care & Dedication.', '22+ सालों का भरोसेमंद हार्ट केयर और समर्पण।')}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                {t('Consultant Cardiologist at Pulse Heart Centre, Betiahata, trained at', 'पल्स हार्ट सेंटर, बेतियाहाता में कंसल्टेंट कार्डियोलॉजिस्ट, जिन्होंने')} <span className="font-semibold text-[#0A1128]">{t('PGIMER Chandigarh', 'पीजीआईएमईआर चंडीगढ़')}</span> ({t('DM', 'डीएम')}), <span className="font-semibold text-[#0A1128]">{t('KGMU Lucknow', 'केजीएमयू लखनऊ')}</span> ({t('MD', 'एमडी')}), {t('and', 'और')} <span className="font-semibold text-[#0A1128]">{t('GSVM Kanpur', 'जीएसवीएम कानपुर')}</span> ({t('MBBS', 'एमबीबीएस')}) {t('—', 'से प्रशिक्षण प्राप्त किया —')} <span className="font-semibold text-[#0A1128]">{t('UP Medical Council Reg. No. 47395', 'यूपी मेडिकल काउंसिल रजि. नं. 47395')}</span>। {t('Dedicated to honest advice, gentle heart stenting through the wrist, and 24/7 heart emergency care.', 'ईमानदार सलाह, कलाई के रास्ते आरामदायक हार्ट स्टेंटिंग और 24/7 हार्ट इमरजेंसी केयर के लिए समर्पित।')}
              </p>

              {/* 3-Column Academic & Clinical Pedigree Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-rose-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-[#BE123C] shrink-0">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BE123C]">{t('Super-Specialty', 'सुपर-स्पेशियलिटी')}</span>
                  </div>
                  <p className="text-sm font-extrabold text-[#0A1128]">{t('DM Cardiology', 'डीएम कार्डियोलॉजी')}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{t('PGIMER Chandigarh', 'पीजीआईएमईआर चंडीगढ़')}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0A1128] shrink-0">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">{t('Gold Standard', 'गोल्ड स्टैंडर्ड')}</span>
                  </div>
                  <p className="text-sm font-extrabold text-[#0A1128]">{t('MD Medicine', 'एमडी मेडिसिन')}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{t('KGMU Lucknow', 'केजीएमयू लखनऊ')}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-rose-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-[#BE123C] shrink-0">
                      <Stethoscope className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BE123C]">{t('Betiahata, GKP', 'बेतियाहाता, जीकेपी')}</span>
                  </div>
                  <p className="text-sm font-extrabold text-[#0A1128]">{t('Artis Zee Cath Lab', 'आर्टिस जी कैथ लैब')}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{t('24/7 Heart Attack Care', '24/7 हार्ट अटैक केयर')}</p>
                </div>
              </div>

              {/* 4 Impact Micro-Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-lg sm:text-xl font-extrabold text-[#0A1128] block">{t('22+ Yrs', '22+ इयर्स')}</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight block">{t('Clinical Legacy', 'क्लिनिकल लिगेसी')}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-lg sm:text-xl font-extrabold text-[#BE123C] block">15,000+</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight block">{t('Cath Procedures', 'कैथ प्रोसीजर्स')}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-lg sm:text-xl font-extrabold text-[#0A1128] block">{t('< 45 Min', '< 45 मिन')}</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight block">{t('Door-To-Balloon', 'डोर-टू-बैलून')}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-lg sm:text-xl font-extrabold text-[#BE123C] block">99.4%</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight block">{t('Radial Patency', 'रेडियल पेटेंसी')}</span>
                </div>
              </div>

              {/* Direct Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A1128] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 hover:-translate-y-0.5 group text-center"
                >
                  <Calendar className="w-4 h-4 text-rose-300 group-hover:scale-110 transition-transform" />
                  <span>{t('Book Priority OPD Pass', 'बुक प्रायोरिटी ओपीडी पास')}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:+919455899378"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0A1128] font-bold text-xs uppercase tracking-wider border border-slate-300 hover:border-[#BE123C] hover:text-[#BE123C] shadow-xs transition-all duration-300 text-center"
                >
                  <Phone className="w-4 h-4 text-[#BE123C]" />
                  <span>{t('24/7 Helpline: +91 94558 99378', '24/7 हेल्पलाइन: +91 94558 99378')}</span>
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): Editorial Portrait + Real Clinical Action Collage */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* Main Arched-Top Portrait Frame */}
              <div className="relative max-w-md mx-auto w-full rounded-t-[10rem] rounded-b-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-xl">
                <div className="relative aspect-[4/5] rounded-t-[9.2rem] rounded-b-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/d3.jpeg"
                    alt="Dr. Prakash Chand Shahi — Chief Interventional Cardiologist"
                    className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-white font-extrabold text-sm leading-tight">{t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}</p>
                      <p className="text-rose-300 text-[11px] font-semibold">{t('DM (PGIMER) • MD (KGMU)', 'डीएम (पीजीआईएमईआर) • एमडी (केजीएमयू)')}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                      {t('Lead Clinician', 'लीड क्लिनिशियन')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Institutional Core Ethics Ribbon: Unique to About Page */}
        <div className="max-w-7xl mx-auto w-full pt-6 border-t border-slate-200 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#0A1128] block">{t('Honest Patient Care', 'ईमानदार पेशेंट केयर')}</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">{t('We listen carefully and give clear, caring advice to every heart patient.', 'हम हर हार्ट मरीज़ की बात ध्यान से सुनते हैं और साफ व सही सलाह देते हैं।')}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#BE123C] block">{t('Gentle Wrist Care', 'आरामदायक रिस्ट केयर')}</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">{t('Walk comfortably within 2 hours after your procedure with no leg pain.', 'प्रोसीजर के 2 घंटे के अंदर बिना पैर दर्द के आराम से चलें।')}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#0A1128] block">{t('Honest Report & CD Review', 'ईमानदार रिपोर्ट और सीडी रिव्यू')}</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">{t('Clear second opinions with no unnecessary stents or procedures.', 'बिना किसी गैर-ज़रूरी स्टेंट या प्रोसीजर के साफ सेकंड ओपिनियन।')}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#BE123C] block">{t('24/7 Heart Attack Care', '24/7 हार्ट अटैक केयर')}</span>
              <span className="text-[11px] text-slate-600 block mt-0.5">{t('Modern heart procedure room ready day and night for emergencies.', 'इमरजेंसी के लिए मॉडर्न हार्ट प्रोसीजर रूम दिन-रात तैयार।')}</span>
            </div>
          </div>
        </div>

      </section>

      <div className="relative z-10">
        <section className="relative py-6 sm:py-7 lg:py-8 overflow-hidden border-y border-slate-200 shadow-xs bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]">
          {/* Bespoke Four Monoliths of Trust & Sculptural Fluted Columns */}
          <SectionBackgroundMotion variant="about-pillars" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BE123C] bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full">{t('Our Promise', 'आवर प्रॉमिस')}</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
                {t('How We Care for', 'हम आपके हार्ट की')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Your Heart', 'देखभाल कैसे करते हैं')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/doctor-angiogram-explain.jpg"
                  image="/images/doctor-angiogram-explain.jpg"
                  alt="Safe Heart Treatment"
                  badge={t('STEP 01', 'स्टेप 01')}
                  title={t('Safe Heart Treatment', 'सेफ हार्ट ट्रीटमेंट')}
                  stat={t('Always Putting You First', 'ऑलवेज पुटिंग यू फर्स्ट')}
                  substat={t('Gentle Wrist Care', 'जेंटल रिस्ट केयर')}
                  aspectRatio="aspect-[16/10]"
                  laserBeam={false}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 text-[#0A1128] px-2.5 py-1 rounded-md">{t('Painless Heart Stenting', 'पेनलेस हार्ट स्टेंटिंग')}</span>
                  <span className="text-[10px] font-semibold bg-rose-50 text-[#BE123C] px-2.5 py-1 rounded-md">{t('Report & CD Check', 'रिपोर्ट एंड सीडी चेक')}</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/doctor-recovery-discharge.jpg"
                  image="/images/doctor-recovery-discharge.jpg"
                  alt="Honest Family Talk"
                  badge={t('STEP 02', 'स्टेप 02')}
                  title={t('Honest Family Talk', 'ऑनेस्ट फैमिली टॉक')}
                  stat={t('Calm & Clear Advice', 'काम एंड क्लियर एडवाइस')}
                  substat={t('No Unnecessary Stents', 'नो अननेसेसरी स्टेंट्स')}
                  aspectRatio="aspect-[16/10]"
                  laserBeam={false}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 text-[#0A1128] px-2.5 py-1 rounded-md">{t('Talk Directly with Doctor', 'टॉक डायरेक्टली विद डॉक्टर')}</span>
                  <span className="text-[10px] font-semibold bg-rose-50 text-[#BE123C] px-2.5 py-1 rounded-md">{t('Easy Explanations', 'ईजी एक्सप्लेनेशंस')}</span>
                </div>
              </div>

              <div className="space-y-3">
                <ThreeDImageCard
                  src="/images/Hospital-Grade Hygiene Room.png"
                  image="/images/Hospital-Grade Hygiene Room.png"
                  alt="Clean & Safe Rooms"
                  badge={t('STEP 03', 'स्टेप 03')}
                  title={t('Clean & Safe Rooms', 'क्लीन एंड सेफ रूम्स')}
                  stat={t('Hospital-Grade Hygiene', 'हॉस्पिटल-ग्रेड हाइजीन')}
                  substat={t('Trusted Heart Rules', 'ट्रस्टेड हार्ट रूल्स')}
                  aspectRatio="aspect-[16/10]"
                  laserBeam={false}
                />
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 text-[#0A1128] px-2.5 py-1 rounded-md">{t('Clean Fresh Air', 'क्लीन फ्रेश एयर')}</span>
                  <span className="text-[10px] font-semibold bg-rose-50 text-[#BE123C] px-2.5 py-1 rounded-md">{t('Safe Low-Dose Scan', 'सेफ लो-डोज स्कैन')}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Milestones Timeline: 3D Cylinder Carousel & Architectural Clinical Dossiers */}
        <section className="relative py-6 sm:py-7 lg:py-8 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]">
          {/* Bespoke Temporal Pathway & Luminous Chrono-Spine */}
          <SectionBackgroundMotion variant="about-milestones" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200/90 text-xs font-bold uppercase tracking-[0.24em] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
                <span>{t('Two Decades of Clinical Leadership', 'टू डिकेड्स ऑफ क्लिनिकल लीडरशिप')}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                {t('22-Year Journey of', '22 साल का सफर')} <br />
                <span className="font-serif italic font-normal text-[#BE123C]">{t('Trusted Heart Care', 'भरोसेमंद हार्ट केयर का')}</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
                {t(
                  'From starting in Betiahata to advanced medical training at KGMU & PGIMER, bringing safe and modern heart treatment to Gorakhpur.',
                  'बेतियाहाता में शुरुआत से लेकर केजीएमयू और पीजीआईएमईआर में एडवांस्ड मेडिकल ट्रेनिंग तक — गोरखपुर में सुरक्षित और मॉडर्न हार्ट ट्रीटमेंट लाते हुए।'
                )}
              </p>

              {/* View Switcher Pill */}
              <div className="pt-3 flex items-center justify-center">
                <div className="inline-flex p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-slate-200/90 shadow-sm">
                  <button
                    onClick={() => setTimelineMode('cylinder')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${timelineMode === 'cylinder'
                      ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#BE123C]'
                      }`}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t('Card Slider View', 'कार्ड स्लाइडर व्यू')}</span>
                  </button>
                  <button
                    onClick={() => setTimelineMode('expanded')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${timelineMode === 'expanded'
                      ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#BE123C]'
                      }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t('Full Timeline View', 'फुल टाइमलाइन व्यू')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* VIEW MODE 1: 3D CYLINDER CAROUSEL (DEFAULT) */}
            {timelineMode === 'cylinder' && (
              <div className="my-4">
                <Suspense fallback={null}>
                  <CylinderCarouselMilestones items={milestones} />
                </Suspense>
              </div>
            )}

            {/* VIEW MODE 2: ARCHITECTURAL VERTICAL SPINE */}
            {timelineMode === 'expanded' && (
              <div className="relative mt-8">
                {/* Central Glowing Catheter Guide-Wire Spine (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[#0A1128] via-[#BE123C] to-[#E11D48] rounded-full shadow-[0_0_16px_#E11D48]">
                  {/* Continuous Traveling Pulse Light Blip */}
                  <div className="absolute inset-x-0 w-3 h-12 -left-1 bg-white rounded-full blur-xs animate-laser-v" />
                </div>

                {/* Milestones Alternating Grid */}
                <div className="space-y-12 md:space-y-20">
                  {milestones.map((m, idx) => {
                    const isLeft = idx % 2 === 0;
                    const IconComp = m.icon;

                    return (
                      <div
                        key={idx}
                        className="relative flex flex-col md:flex-row items-center"
                      >
                        {/* Left Side Content Container */}
                        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-14 md:text-right' : 'md:order-2 md:pl-14 md:text-left'}`}>
                          <motion.div
                            initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative p-7 sm:p-9 rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(10,17,40,0.08)] hover:shadow-[0_28px_65px_-10px_rgba(190,18,60,0.15)] transition-all duration-500 hover:-translate-y-1.5 group overflow-hidden text-left"
                          >
                            {/* Giant Typographic Watermark Year */}
                            <div className="absolute -top-3 right-4 font-serif italic text-7xl sm:text-8xl text-slate-950/[0.04] select-none pointer-events-none group-hover:text-[#BE123C]/[0.08] transition-colors">
                              {m.year}
                            </div>

                            {/* Header Ribbon: Phase & Institution */}
                            <div className="flex items-center justify-between gap-3 mb-4">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#BE123C] bg-rose-50/90 px-3.5 py-1.5 rounded-full border border-rose-200 shadow-xs">
                                {m.phase} • {m.badge}
                              </span>
                              <span className="text-[11px] font-mono font-bold text-slate-500">
                                {m.institution}
                              </span>
                            </div>

                            {/* Year and Title */}
                            <div className="flex items-baseline gap-3 mb-2">
                              <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0A1128] group-hover:scale-105 transition-transform inline-block">
                                {m.year}
                              </span>
                              <span className="h-2 w-2 rounded-full bg-[#BE123C] animate-ping" />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] group-hover:text-[#BE123C] transition-colors leading-snug tracking-tight">
                              {m.title}
                            </h3>

                            <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                              {m.desc}
                            </p>

                            {/* Interactive Tags Row */}
                            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                              {m.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg transition-colors shadow-2xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Kinetic Accent Line in Bottom of Card */}
                            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A1128] via-[#BE123C] to-[#E11D48] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </div>

                        {/* Center Node on Central Guided Spine */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#BE123C] border-4 border-white shadow-xl shadow-navy/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <IconComp className="w-6 h-6 animate-pulse" />
                          </div>
                        </div>

                        {/* Right Side Spacer Container (for alternating balance) */}
                        <div className={`hidden md:block w-1/2 ${isLeft ? 'order-2 pl-14' : 'order-1 pr-14'}`}>
                          {/* Interactive Holographic Year Chip */}
                          <div className={`flex items-center gap-3 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                            <div className="px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md text-left">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-[#BE123C] block">
                                {t('CLINICAL RECORD', 'क्लिनिकल रिकॉर्ड')} #{m.num}
                              </span>
                              <span className="text-xs font-extrabold text-slate-900 block mt-0.5">
                                {m.institution}
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* 4. Luxury Direct Consultation Pavilion & Priority Access Suite */}
        <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
          {/* Bespoke Luminous Solarium Pavilion & Radiant Focus Ring */}
          <SectionBackgroundMotion variant="about-cta" />

          <div className="relative p-6 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/95 via-slate-50 to-white/90 text-slate-900 shadow-2xl border-2 border-slate-200/90 overflow-hidden backdrop-blur-xl">

            {/* Glowing Internal Ambient Flare */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-[#E11D48]/15 via-[#0A1128]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#BE123C]/15 via-slate-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 text-left">

              {/* Left Column (7 cols): Clinical Credibility & Doctor Endorsement */}
              <div className="lg:col-span-7 space-y-6">

                {/* Director Header Crest */}
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#BE123C] border-2 border-rose-300/40 shadow-lg flex items-center justify-center text-white shrink-0">
                    <Stethoscope className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#BE123C] font-bold">
                        {t('OPD Consultations Active Today', 'ओपीडी कंसल्टेशंस एक्टिव टुडे')}
                      </span>
                    </div>
                    <span className="text-base font-extrabold text-[#0A1128] block">
                      {t('Dr. Prakash Chand Shahi • DM (PGIMER) • MD (KGMU)', 'डॉ. प्रकाश चंद शाही • डीएम (पीजीआईएमईआर) • एमडी (केजीएमयू)')}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                    {t('Book Your', 'अपना')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Heart Checkup', 'हार्ट चेकअप बुक करें')}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t(
                      "Meet Gorakhpur's trusted heart specialist for a calm, caring consultation. Get honest advice, no unnecessary treatments, and clear second opinions.",
                      'गोरखपुर के भरोसेमंद हार्ट स्पेशलिस्ट से शांत और केयरिंग कंसल्टेशन के लिए मिलें। ईमानदार सलाह, बिना किसी गैर-ज़रूरी ट्रीटमेंट के और साफ सेकंड ओपिनियन पाएं।'
                    )}
                  </p>
                </div>

                {/* 3 Clinical Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#BE123C] block">{t('Personal OPD', 'पर्सनल ओपीडी')}</span>
                    <span className="text-xs font-bold text-slate-800">{t('1-on-1 Doctor Care', '1-ऑन-1 डॉक्टर केयर')}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#BE123C] block">{t('Honest Review', 'ऑनेस्ट रिव्यू')}</span>
                    <span className="text-xs font-bold text-slate-800">{t('Clear Report & CD Check', 'क्लियर रिपोर्ट एंड सीडी चेक')}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#BE123C] block">{t('24/7 Emergency', '24/7 इमरजेंसी')}</span>
                    <span className="text-xs font-bold text-slate-800">{t('Fast Heart Attack Care', 'फास्ट हार्ट अटैक केयर')}</span>
                  </div>
                </div>

              </div>

              {/* Right Column (5 cols): Instant Action Command Center */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/95 border-2 border-slate-200 shadow-xl space-y-5 text-left">

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                    {t('OPD TIMINGS & LOCATION', 'ओपीडी टाइमिंग्स एंड लोकेशन')}
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    {t('Mon — Sat • 10:00 AM – 8:00 PM', 'मंडे — सैटरडे • 10:00 एएम – 8:00 पीएम')}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    {t('Pulse Heart Centre, Betiahata, Gorakhpur', 'पल्स हार्ट सेंटर, बेतियाहाता, गोरखपुर')}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] hover:from-[#BE123C] hover:to-[#0A1128] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 border border-rose-300/40 text-center"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{t('Book OPD Appointment', 'बुक ओपीडी अपॉइंटमेंट')}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>

                  <a
                    href="tel:+919455899378"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0A1128] text-xs font-bold uppercase tracking-wider border-2 border-slate-300 hover:border-[#BE123C] hover:text-[#BE123C] shadow-sm transition-all text-center"
                  >
                    <Phone className="w-4 h-4 text-[#BE123C]" />
                    <span>{t('Emergency: +91 94558 99378', 'इमरजेंसी: +91 94558 99378')}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>{t('Fast-Track OPD Entry', 'फास्ट-ट्रैक ओपीडी एंट्री')}</span>
                  <span className="font-mono text-[#BE123C] font-bold">{t('< 15 Min Triage', '< 15 मिन ट्राइएज')}</span>
                </div>

              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
