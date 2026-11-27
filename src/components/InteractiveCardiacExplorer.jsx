import React, { useState } from 'react';
import { Activity, ShieldCheck, Heart, ArrowRight, Eye, Sparkles, Layers, Maximize2, CheckCircle2 } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import { useLanguage } from '../context/LanguageContext';

/**
 * InteractiveCardiacExplorer: Simple Interactive Heart Guide
 */
export default function InteractiveCardiacExplorer({ onBookClick }) {
  const { t } = useLanguage();
  const explorerHotspots = [
    {
      id: 'coronary',
      label: t('Main Heart Artery', 'मेन हार्ट आर्टरी'),
      x: '52%',
      y: '38%',
      domain: t('Stent & Blockage Care', 'स्टेंट एंड ब्लॉकेज केयर'),
      detail: t('Main artery supplying fresh blood to the front of your heart.', 'मेन आर्टरी सप्लाइंग फ्रेश ब्लड टू द फ्रंट ऑफ योर हार्ट।'),
      chamber: t('Front Heart Wall', 'फ्रंट हार्ट वॉल'),
      clinicalInsight: t('Opened gently through the wrist using a safe, medicine-coated stent.', 'ओपन्ड जेंटली थ्रू द रिस्ट यूजिंग अ सेफ, मेडिसिन-कोटेड स्टेंट।'),
    },
    {
      id: 'interventional',
      label: t('Safe Wrist Entry', 'सेफ रिस्ट एंट्री'),
      x: '46%',
      y: '22%',
      domain: t('Painless Wrist Path', 'पेनलेस रिस्ट पाथ'),
      detail: t('Safe pathway used to guide a tiny tube to the heart without any leg cut.', 'सेफ पाथवे यूज्ड टू गाइड अ टाइनी ट्यूब टू द हार्ट विदाउट एनी लेग कट।'),
      chamber: t('Main Heart Gateway', 'मेन हार्ट गेटवे'),
      clinicalInsight: t('Lets patients sit up and walk comfortably soon after the procedure.', 'लेट्स पेशेंट्स सिट अप एंड वॉक कम्फर्टेबली सून आफ्टर द प्रोसीजर।'),
    },
    {
      id: 'pacemaker',
      label: t('Heartbeat Control Spot', 'हार्टबीट कंट्रोल स्पॉट'),
      x: '38%',
      y: '48%',
      domain: t('Pacemaker Support', 'पेसमेकर सपोर्ट'),
      detail: t('Natural rhythm center that keeps your heart beating steadily.', 'नेचुरल रिदम सेंटर दैट कीप्स योर हार्ट बीटिंग स्टेडीली।'),
      chamber: t('Upper Heart Chamber', 'अपर हार्ट चैंबर'),
      clinicalInsight: t('Supported by a small pacemaker if your heartbeat becomes too slow.', 'सपोर्टेड बाय अ स्मॉल पेसमेकर इफ योर हार्टबीट बिकम्स टू स्लो।'),
    },
  ];

  const [activeId, setActiveId] = useState(explorerHotspots[0]?.id || 'coronary');
  const [viewMode, setViewMode] = useState('anatomy'); // 'anatomy' or 'angiogram'

  const activeData = explorerHotspots.find((h) => h.id === activeId) || explorerHotspots[0];

  return (
    <section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FAFBF9] via-[#F0FDF4]/30 to-[#FAFBF9] rounded-3xl sm:rounded-[3rem] my-4 sm:my-8 border-2 border-[#A7F3D0]/80 shadow-lg">
      {/* Animated Lightbox Illuminator Background Grid & Dynamic Scan Sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lightboxGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#047857" strokeWidth="0.8" strokeDasharray="2 4" />
              <circle cx="40" cy="40" r="1.5" fill="#059669" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lightboxGrid)" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#059669]/15 via-teal-300/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#A7F3D0] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#047857]" />
            <span className="text-xs font-bold text-[#064E3B] uppercase tracking-wider">
              {t('Interactive Heart Guide', 'इंटरैक्टिव हार्ट गाइड')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight leading-tight">
            {t('How Your Heart', 'हाउ योर हार्ट')} <span className="font-serif italic font-normal text-[#047857]">{t('Works & Heals', 'वर्क्स एंड हील्स')}</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            {t(
              'Click any part of the heart below to see how Dr. Shahi checks blockages, opens arteries, and keeps your heartbeat steady.',
              'क्लिक एनी पार्ट ऑफ द हार्ट बिलो टू सी हाउ डॉ. शाही चेक्स ब्लॉकेजेस, ओपन्स आर्टरीज, एंड कीप्स योर हार्टबीट स्टेडी।'
            )}
          </p>
        </div>

        {/* Master Diagnostic Lightbox Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-white border-2 border-[#A7F3D0]/60 shadow-xl overflow-hidden p-3.5 sm:p-8 backdrop-blur-2xl">
          
          {/* Top Control Bar: Mode Toggle + Target Domains */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200">
              <button
                onClick={() => setViewMode('anatomy')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'anatomy'
                    ? 'bg-[#064E3B] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#064E3B]'
                }`}
              >
                {t('Heart View', 'हार्ट व्यू')}
              </button>
              <button
                onClick={() => setViewMode('angiogram')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'angiogram'
                    ? 'bg-[#064E3B] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#064E3B]'
                }`}
              >
                {t('Angiogram View', 'एंजियोग्राम व्यू')}
              </button>
            </div>

            {/* Target Specialty Selector */}
            <div className="flex flex-wrap items-center gap-2">
              {explorerHotspots.map((item) => {
                const isSelected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#047857] text-white shadow-md shadow-[#064E3B]/25'
                        : 'bg-white hover:bg-[#F0FDF4] text-slate-700 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Photographic Medical Display Stage */}
          <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] my-5 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
            
            {/* Real Photographic Medical Image */}
            <img
              src={viewMode === 'anatomy' ? '/images/Advanced.png' : '/images/doctor-angiogram-explain.jpg'}
              alt={viewMode === 'anatomy' ? 'Advanced Heart Anatomy & Care' : 'Real Diagnostic Coronary Angiogram Review'}
              className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-95 group-hover:scale-102"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50 pointer-events-none" />

            {/* Top Diagnostic Badges */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 pointer-events-none">
              <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-medium flex items-center gap-1.5 sm:gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping shrink-0" />
                <span className="truncate max-w-[190px] sm:max-w-none">{viewMode === 'anatomy' ? t('Heart View: Clear Artery Guide', 'हार्ट व्यू: क्लियर आर्टरी गाइड') : t('Angiogram View: Live Blood Flow Check', 'एंजियोग्राम व्यू: लाइव ब्लड फ्लो चेक')}</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 pointer-events-none hidden sm:block">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] font-mono shadow-md font-bold">
                {t('72 BPM · Healthy Heartbeat', '72 बीपीएम · हेल्दी हार्टबीट')}
              </div>
            </div>

            {/* Interactive Anatomical Hotspots */}
            {viewMode === 'anatomy' && explorerHotspots.map((spot) => {
              const isSpotActive = spot.id === activeId;
              return (
                <div
                  key={spot.id}
                  style={{ top: spot.y, left: spot.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
                  onClick={() => setActiveId(spot.id)}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-8 h-8 rounded-full ${isSpotActive ? 'bg-[#059669]/40 animate-ping' : 'bg-[#059669]/20'}`} />
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-transform ${
                      isSpotActive ? 'bg-[#10B981 scale-125' : 'bg-slate-900 group-hover/pin:scale-110'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Hotspot Floating Tooltip */}
                  <div className={`hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3.5 rounded-2xl bg-slate-950/95 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all pointer-events-none ${
                    isSpotActive ? 'opacity-100 visible -translate-y-0' : 'opacity-0 invisible group-hover/pin:opacity-100 group-hover/pin:visible'
                  }`}>
                    <span className="text-[10px] font-mono text-[#059669] block uppercase font-bold">
                      {spot.domain}
                    </span>
                    <span className="text-xs font-bold text-white block mt-0.5">
                      {spot.label}
                    </span>
                    <span className="text-[10px] text-slate-300 block mt-1 leading-tight font-medium">
                      {spot.detail}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Bottom Overlay Info Card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block">
                  {t('SELECTED HEART PART', 'चुना गया हार्ट हिस्सा')}
                </span>
                <span className="text-sm sm:text-base font-bold text-white block">
                  {activeData.label} · {activeData.chamber}
                </span>
                <span className="text-xs text-slate-300 block font-normal">
                  {activeData.clinicalInsight}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] text-slate-400 block">{t('Treatment Result', 'ट्रीटमेंट रिज़ल्ट')}</span>
                  <span className="text-sm font-bold text-amber-300 font-mono">{t('99.4% Success', '99.4% सफलता')}</span>
                </div>
                <button
                  onClick={onBookClick}
                  className="px-5 py-2.5 rounded-full bg-[#10B981 hover:bg-[#059669] text-slate-950 text-xs font-bold shadow transition-all"
                >
                  {t('Consult on', 'परामर्श लें:')} {activeData.label}
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Simple Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#F0FDF4]/70 border border-[#A7F3D0]/60">
              <span className="font-bold text-[#064E3B] block">{t('Heart Stenting Through Wrist', 'कलाई के रास्ते हार्ट स्टेंटिंग')}</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">{t('Gentle wrist procedure so patients recover fast and walk sooner.', 'आरामदायक रिस्ट प्रोसीजर जिससे मरीज़ जल्दी ठीक होते हैं और जल्द चल सकते हैं।')}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-[#064E3B] block">{t('Clear Blockage Check', 'साफ ब्लॉकेज जांच')}</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">{t('Live scan shows the exact location and percentage of any blockage.', 'लाइव स्कैन किसी भी ब्लॉकेज की सही जगह और प्रतिशत दिखाता है।')}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
              <span className="font-bold text-amber-900 block">{t('Safe Pacemaker Care', 'सेफ पेसमेकर केयर')}</span>
              <span className="text-slate-600 text-[11px] block mt-0.5 font-medium">{t('Small heart device that keeps a slow or weak pulse steady.', 'एक छोटा हार्ट डिवाइस जो धीमी या कमज़ोर धड़कन को स्थिर रखता है।')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
