import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2, ChevronRight, Stethoscope, Clock, Zap, Target } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import { useLanguage } from '../context/LanguageContext';

/**
 * TreatmentStorytellingSection
 * Visual & Motion Identity: Visual Procedural Storytelling & Stepped Clinical Roadmap
 * Color Palette: Soft Peach, Vibrant Magenta, Warm Amber & Electric Violet
 * Motion Features:
 * - Flowing peach/magenta ambient ribbon gradients
 * - Sequential numbered step progression with animated connector line
 * - Interactive step cards that elevate (-8px) and illuminate on hover
 * - Smooth transition when switching between procedures
 */
export default function TreatmentStorytellingSection() {
  const [activeProcedure, setActiveProcedure] = useState('peripheral-angioplasty');
  const { t } = useLanguage();

  const storyboards = {
    'peripheral-angioplasty': {
      title: t('Heart & Artery Stenting', 'हार्ट और आर्टरी स्टेंटिंग'),
      badge: t('Painless Wrist Procedure', 'बिना दर्द कलाई प्रोसीजर'),
      tagline: t('Opening blocked arteries gently to restore smooth blood flow.', 'सही ब्लड फ्लो वापस लाने के लिए बंद आर्टरीज़ को आराम से खोलना।'),
      recovery: t('Go home in 24–48 Hours', '24–48 घंटे में घर जाएं'),
      stats: t('99.4% Success Rate', '99.4% सफलता दर'),
      steps: [
        {
          num: '01',
          phase: t('Painless Wrist Entry', 'कलाई से आसान शुरुआत'),
          detail: t('A tiny, pain-free point on the wrist without any cuts.', 'कलाई पर बिना चीरे और बिना दर्द के आसान शुरुआत।'),
        },
        {
          num: '02',
          phase: t('Reaching the Blockage', 'ब्लॉकेज तक पहुंचना'),
          detail: t('Thin flexible tube safely reaches the blocked spot.', 'पतली लचीली ट्यूब सुरक्षित तरीके से ब्लॉकेज तक पहुंचती है।'),
        },
        {
          num: '03',
          phase: t('Opening the Blocked Artery', 'बंद नस को खोलना'),
          detail: t('A soft balloon gently opens the blocked artery.', 'एक मुलायम बैलून से बंद नस को आराम से खोल दिया जाता है।'),
        },
        {
          num: '04',
          phase: t('Placing the Safe Stent', 'सुरक्षित स्टेंट लगाना'),
          detail: t('Coated stent keeps blood flowing freely long-term.', 'कोटेड स्टेंट लंबे समय तक ब्लड फ्लो को सुचारू रखता है।'),
        },
      ],
      indications: [
        t('Leg pain while walking', 'चलते समय पैरों में दर्द'),
        t('Slow-healing foot wounds', 'पैर के घाव धीरे भरना'),
        t('Blocked leg or kidney arteries', 'पैर या किडनी की बंद आर्टरीज़'),
      ],
    },
    'coronary-angiogram': {
      title: t('Heart Blockage Check (Angiogram)', 'हार्ट ब्लॉकेज जांच (एंजियोग्राम)'),
      badge: t('15-Minute Heart Test', '15-मिनट हार्ट टेस्ट'),
      tagline: t('A quick, clear test to check if any heart arteries are blocked.', 'यह जांचने के लिए तेज़ और साफ टेस्ट कि हार्ट की कोई आर्टरी बंद तो नहीं है।'),
      recovery: t('Same-Day Discharge (2 Hrs)', 'उसी दिन डिस्चार्ज (2 घंटे)'),
      stats: t('15-Min Painless Test', '15-मिनट बिना दर्द टेस्ट'),
      steps: [
        {
          num: '01',
          phase: t('Painless Wrist Numbing', 'कलाई को सुन्न करना'),
          detail: t('Gentle numbing medicine on the wrist — no pain.', 'कलाई पर हल्की सुन्न करने की दवा — कोई दर्द नहीं।'),
        },
        {
          num: '02',
          phase: t('Gentle Tube Entry', 'पतली ट्यूब से जांच'),
          detail: t('Ultra-thin tube checks the heart arteries safely.', 'बेहद पतली ट्यूब हार्ट आर्टरीज़ की सुरक्षित जांच करती है।'),
        },
        {
          num: '03',
          phase: t('Clear Artery Scan', 'साफ आर्टरी स्कैन'),
          detail: t('Safe dye shows exact blood flow on the live screen.', 'सुरक्षित डाई लाइव स्क्रीन पर सटीक ब्लड फ्लो दिखाती है।'),
        },
        {
          num: '04',
          phase: t('Full Report Check', 'पूरी रिपोर्ट की जांच'),
          detail: t('Dr. Shahi explains your full report and CD clearly.', 'डॉ. शाही आपकी पूरी रिपोर्ट और सीडी साफ शब्दों में समझाते हैं।'),
        },
      ],
      indications: [
        t('Chest pain or tightness', 'सीने में दर्द या जकड़न'),
        t('Abnormal ECG or TMT test', 'एबनॉर्मल ईसीजी या टीएमटी टेस्ट'),
        t('Follow-up heart checkup', 'फॉलो-अप हार्ट चेकअप'),
      ],
    },
    'pacemaker-implantation': {
      title: t('Permanent Pacemaker', 'परमानेंट पेसमेकर'),
      badge: t('Heartbeat Support', 'हार्टबीट सपोर्ट'),
      tagline: t('Small, safe device that keeps a slow heartbeat steady.', 'छोटा और सुरक्षित डिवाइस जो धीमी हार्टबीट को स्थिर रखता है।'),
      recovery: t('Overnight Stay • Quick Recovery', 'एक रात का स्टे • तेज़ रिकवरी'),
      stats: t('10–14 Year Battery Life', '10–14 साल बैटरी लाइफ'),
      steps: [
        {
          num: '01',
          phase: t('Small Collarbone Entry', 'कॉलरबोन के पास छोटा पॉइंट'),
          detail: t('Tiny opening made gently under local numbing.', 'लोकल नंबिंग के साथ हल्का और छोटा पॉइंट बनाया जाता है।'),
        },
        {
          num: '02',
          phase: t('Safe Wire Placement', 'सुरक्षित वायर प्लेसमेंट'),
          detail: t('Soft pacemaker wires guided safely to the heart.', 'सॉफ्ट पेसमेकर वायर्स सुरक्षित रूप से हार्ट तक पहुंचाए जाते हैं।'),
        },
        {
          num: '03',
          phase: t('Heartbeat Testing', 'हार्टबीट टेस्टिंग'),
          detail: t('Device checked to ensure steady, natural rhythm.', 'स्थिर और सामान्य धड़कन सुनिश्चित करने के लिए डिवाइस चेक किया जाता है।'),
        },
        {
          num: '04',
          phase: t('Device Placement', 'डिवाइस प्लेसमेंट'),
          detail: t('Small battery unit placed comfortably under skin.', 'छोटा बैटरी यूनिट त्वचा के नीचे आराम से लगाया जाता है।'),
        },
      ],
      indications: [
        t('Complete AV heart block', 'कम्प्लीट एवी हार्ट ब्लॉक'),
        t('Symptomatic Sinus Dysfunction', 'साइनस डिसफंक्शन के लक्षण'),
        t('Recurrent syncopal bradycardia', 'बार-बार चक्कर आना या धीमी धड़कन'),
      ],
    },
  };

  const currentStory = storyboards[activeProcedure];

  return (
    <section className="relative pt-6 pb-6 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-8 overflow-hidden bg-gradient-to-b from-[#FFF6F0] via-[#FFF2EB] to-[#FFF5F7] border-b border-rose-100/60">

      {/* Soft coral-peach gradient with translucent floating shapes */}
      <SectionBackgroundMotion variant="patient-care" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-6 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white text-xs font-mono font-bold shadow-md shadow-navy/20 border border-rose-300/30">
            <Target className="w-4 h-4 text-rose-300" />
            <span className="uppercase tracking-[0.2em]">{t('Step-by-Step Treatment Guide', 'स्टेप-बाय-स्टेप ट्रीटमेंट गाइड')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
            {t('How Your', 'आपका')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Treatment Works', 'ट्रीटमेंट कैसे होता है')}</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] font-bold">
            <span className="bg-rose-50 text-[#BE123C] px-3 py-0.5 rounded-full border border-rose-200">{t('Simple Checkup', 'आसान चेकअप')}</span>
            <span className="bg-slate-100 text-[#0A1128] px-3 py-0.5 rounded-full border border-slate-200">{t('Through Wrist', 'कलाई के रास्ते')}</span>
            <span className="bg-rose-50 text-[#BE123C] px-3 py-0.5 rounded-full border border-rose-200">{t('Safe Stent', 'सेफ स्टेंट')}</span>
            <span className="bg-slate-100 text-[#0A1128] px-3 py-0.5 rounded-full border border-slate-200">{t('Fast Recovery', 'तेज़ रिकवरी')}</span>
          </div>
        </div>

        {/* Procedure Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          {Object.entries(storyboards).map(([key, data]) => {
            const isActive = activeProcedure === key;
            return (
              <button
                key={key}
                onClick={() => setActiveProcedure(key)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 ${isActive
                  ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md shadow-navy/25 sm:scale-105 border border-rose-300/30'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
                  }`}
              >
                {data.title}
              </button>
            );
          })}
        </div>

        {/* Master Procedural Journey Card with Smooth Step Elevation */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-white border-2 border-slate-200 shadow-layered p-4 sm:p-10 space-y-6 sm:space-y-8 text-left transition-all duration-400 hover:shadow-2xl">

          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-[#BE123C] uppercase tracking-wider block mb-1">
                {currentStory.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] tracking-tight">
                {currentStory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                {currentStory.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-[#0A1128]">
                <Clock className="w-3.5 h-3.5 inline mr-1 text-[#BE123C]" />
                {currentStory.recovery}
              </div>
              <div className="px-4 py-2 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-[#BE123C]">
                <CheckCircle2 className="w-3.5 h-3.5 inline mr-1 text-[#BE123C]" />
                {currentStory.stats}
              </div>
            </div>
          </div>

          {/* Active Procedural Visual Stage in 3D */}
          <div className="py-1 sm:py-2">
            {activeProcedure === 'peripheral-angioplasty' ? (
              <div className="w-full max-w-5xl mx-auto relative rounded-2xl sm:rounded-[2rem] p-1 sm:p-2 bg-gradient-to-b from-white/95 via-slate-50/70 to-white/95 border-2 border-slate-200/90 shadow-2xl">
                <div className="overflow-hidden rounded-xl sm:rounded-[1.6rem] bg-[#EAF4FF]">
                  <img
                    src="/images/hhhh.webp"
                    alt={currentStory.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block object-contain"
                  />
                </div>
              </div>
            ) : (
              <SectionCinematicVideo
                type={activeProcedure === 'ct-coronary-angiography' ? 'advanced-tech' : activeProcedure === 'pacemaker-implantation' ? 'cardiology-heart' : 'cardiac-catheterization'}
                videoUrl={false}
                showControls={false}
                styleVariant="floating-3d"
                posterImage={
                  activeProcedure === 'coronary-angiogram'
                    ? '/images/precision.webp'
                    : activeProcedure === 'pacemaker-implantation'
                    ? '/images/pace.jpg'
                    : '/images/heart.webp'
                }
                title={`${currentStory.title} • ${t('Live Procedural Cine', 'लाइव प्रोसीजरल सिने')}`}
                subtitle={currentStory.badge}
                specs={currentStory.stats}
                aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
              />
            )}
          </div>

          {/* Stepped Visual Procedural Grid (4 Image-Explained Steps) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {currentStory.steps.map((step, sIdx) => {
              const stepImages = [
                { src: '/images/hospital-opd-lounge.jpg', pos: 'object-center' },
                { src: '/images/doctor-echo-checkup.jpg', pos: 'object-center' },
                { src: '/images/cardiac-icu-room.jpg', pos: 'object-center' },
                { src: '/images/cardiac-stent-procedure.jpg', pos: 'object-center' },
              ];
              const media = stepImages[sIdx % stepImages.length];
              return (
                <div
                  key={step.num}
                  className="group relative rounded-xl sm:rounded-2xl bg-white border border-slate-200 sm:border-2 hover:border-rose-300 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden text-left flex flex-col"
                >
                  <div className="relative h-24 sm:h-32 w-full overflow-hidden bg-slate-900">
                    <img
                      src={media.src}
                      alt={step.phase}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover ${media.pos} group-hover:scale-110 transition-transform duration-700`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                    <div className="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-br from-[#0A1128] to-[#BE123C] text-white flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold shadow-md border border-white/20">
                      {step.num}
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3.5 space-y-1 flex-1">
                    <h4 className="text-[11px] sm:text-sm font-extrabold text-[#0A1128] tracking-tight group-hover:text-[#BE123C] transition-colors leading-snug">
                      {step.phase}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-snug">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indications & Doctor Consultation Banner */}
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-rose-50/60 border-2 border-slate-200 text-slate-900 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 flex-1 min-w-0">
              {/* Top Row on Mobile / Left on Desktop: Doctor Portrait + Header */}
              <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
                <div className="w-24 sm:w-28 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#BE123C]/40 shadow-lg shrink-0 bg-slate-100">
                  <img
                    src="/images/d1.jpeg"
                    alt="Dr. Prakash Chand Shahi"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
                <div className="sm:hidden text-left space-y-1 min-w-0">
                  <span className="text-[10px] font-mono text-[#BE123C] font-bold uppercase tracking-wider block">
                    {t('Primary Indications', 'प्रमुख लक्षण')}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#0A1128] leading-tight">
                    {t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-600">
                    {t('Supervised Clinical Care', 'सुपरवाइज्ड क्लिनिकल केयर')}
                  </p>
                </div>
              </div>

              {/* Indications List */}
              <div className="flex-1 min-w-0 space-y-2 text-left">
                <span className="hidden sm:block text-[11px] font-mono text-[#BE123C] font-bold uppercase tracking-wider leading-snug">
                  {t('Primary Clinical Indications • Supervised by Dr. Prakash Chand Shahi', 'प्राइमरी क्लिनिकल इंडिकेशंस • सुपरवाइज्ड बाय डॉ. प्रकाश चंद शाही')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStory.indications.map((ind, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[11px] font-bold text-[#0A1128] border border-slate-200 shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BE123C] shrink-0" />
                      <span>{ind}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="luxury-btn-primary w-full lg:w-auto justify-center whitespace-nowrap shrink-0"
            >
              <span>{t('Discuss with Dr. Shahi', 'डॉ. शाही से बात करें')}</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
