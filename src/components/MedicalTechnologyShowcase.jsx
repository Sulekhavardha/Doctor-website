import React, { useState } from 'react';
import { Radio, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import DiagnosticScannerFullCanvas from './DiagnosticScannerFullCanvas';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import SectionCinematicVideo from './SectionCinematicVideo';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

/**
 * MedicalTechnologyShowcase
 * Visual & Motion Identity: Luminous High-Tech Fluoroscopy Suite (Deep Midnight Navy & Crimson Ruby)
 * Features 3D Tilt interaction on 4K equipment console, animated technical specifications,
 * and live C-Arm fluoroscopy telemetry.
 */
export default function MedicalTechnologyShowcase({ variant = 'home-technology' }) {
  const [activeTech, setActiveTech] = useState(0);
  const { t } = useLanguage();

  const techArsenal = [
    {
      id: 'cathlab-system',
      title: t('Modern Heart Cath Lab', 'आधुनिक हार्ट कैथ लैब'),
      category: t('LIVE HEART IMAGING', 'लाइव दिल की जांच'),
      description: t('Shows crystal-clear live heart images with 40% lower X-ray exposure for safer treatment.', 'सुरक्षित इलाज के लिए 40% कम एक्स-रे के साथ दिल की बिल्कुल साफ लाइव तस्वीर दिखाता है।'),
      image: '/images/doctor-cathlab-procedure.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      type: 'facilities-walkthrough',
      specs: [
        { label: t('Image Clarity', 'तस्वीर की क्वालिटी'), value: t('Ultra-Sharp HD', 'बेहद साफ एचडी') },
        { label: t('Live Speed', 'लाइव गति'), value: t('Smooth Real-Time', 'तुरंत और साफ') },
        { label: t('Safety', 'सुरक्षा'), value: t('40% Lower Radiation', '40% कम रेडिएशन') },
        { label: t('Uses', 'उपयोग'), value: t('Heart & Artery Care', 'दिल और नसों की देखभाल') },
      ],
      clinicalValue: t('Helps Dr. Shahi treat blocked heart arteries safely and accurately.', 'इससे डॉ. शाही को दिल की बंद नसों का सुरक्षित और सटीक इलाज करने में मदद मिलती है।'),
    },
    {
      id: 'stent-biomaterials',
      title: t('Safe Coated Heart Stents', 'सुरक्षित कोटेड हार्ट स्टेंट'),
      category: t('HEART ARTERY SUPPORT', 'दिल की नसों का सहारा'),
      description: t('Ultra-thin, medicine-coated stents that gently keep arteries open and heal smoothly.', 'बेहद पतले और दवा-कोटेड स्टेंट, जो दिल की नसों को खुला रखते हैं और जल्दी ठीक होने में मदद करते हैं।'),
      image: '/images/safe.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: t('Thickness', 'मोटाई'), value: t('Ultra-Thin Design', 'बेहद पतला डिज़ाइन') },
        { label: t('Coating', 'कोटिंग'), value: t('Safe Healing Layer', 'सुरक्षित परत') },
        { label: t('Medicine', 'दवा'), value: t('Prevents Re-Blockage', 'दोबारा ब्लॉकेज से बचाव') },
        { label: t('Success Rate', 'सफलता दर'), value: t('99.4% Blood Flow', '99.4% रक्त प्रवाह') },
      ],
      clinicalValue: t('Smooth healing with long-lasting protection against future blockages.', 'आगे भी नस बंद होने से लंबे समय तक सुरक्षा और जल्दी आराम।'),
    },
    {
      id: 'pacemaker-conduction',
      title: t('Long-Life Heart Pacemaker', 'लंबे समय तक चलने वाला पेसमेकर'),
      category: t('HEARTBEAT SUPPORT', 'धड़कन को सामान्य रखना'),
      description: t('Small, safe device that keeps a slow or irregular heartbeat steady day and night.', 'एक छोटा और सुरक्षित उपकरण जो दिन-रात धीमी या अनियमित धड़कन को सामान्य बनाए रखता है।'),
      image: '/images/pace.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: t('Battery Life', 'बैटरी क्षमता'), value: t('10–14 Years', '10–14 साल') },
        { label: t('Models', 'प्रकार'), value: t('Single & Dual Chamber', 'सिंगल और ड्यूल चैंबर') },
        { label: t('Smart Sensor', 'स्मार्ट सेंसर'), value: t('Auto-Adjusts Rhythm', 'धड़कन खुद संतुलित') },
        { label: t('Checkups', 'जांच'), value: t('Quick & Painless', 'तेज़ और बिना दर्द') },
      ],
      clinicalValue: t('Keeps your heart beating steadily so you feel active and safe.', 'यह आपकी धड़कन को सामान्य रखता है ताकि आप स्वस्थ और सुरक्षित महसूस करें।'),
    },
  ];

  const current = techArsenal[activeTech] || techArsenal[0];

  return (
    <section className="relative pt-6 pb-6 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-8 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">

      {/* Bespoke Cleanroom Background */}
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal variant="fade-down">
          <div className="mb-6 text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-rose-200 text-[#0A1128] text-xs font-mono font-medium shadow-xs">
              <Radio className="w-4 h-4 text-[#BE123C] animate-pulse" />
              <span className="uppercase tracking-[0.2em]">{t('Cath Lab & Diagnostic Systems', 'कैथ लैब और जांच मशीनें')}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
              {t('Interventional Technology', 'आधुनिक हार्ट इलाज')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Suite', 'तकनीक')}</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] font-bold">
              <span className="bg-rose-50 text-rose-950 px-3 py-1 rounded-full border border-rose-200 shadow-xs">{t('< 0.3 mm Matrix', '< 0.3 मिमी सटीक जांच')}</span>
              <span className="bg-slate-100 text-[#0A1128] px-3 py-1 rounded-full border border-slate-200 shadow-xs">{t('DoseSense -40%', '40% कम रेडिएशन')}</span>
              <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-xs">{t('99.4% Flow Restored', '99.4% सफल रक्त प्रवाह')}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content Grid: Balanced Side-by-Side Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start my-8">

          {/* Left Column (7 cols): Completely Unobstructed 4K Cinematic Equipment Showcase with 3D Tilt */}
          <div className="lg:col-span-7 space-y-4">
            <Interactive3DTilt maxTilt={8} glowColor="rgba(190, 18, 60, 0.22)">
              <div className="group relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-white/95 p-2.5 sm:p-4 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-rose-300 transition-all duration-500">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-[2rem] overflow-hidden bg-slate-100">
                  <img
                    src={current.image}
                    alt={current.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Equipment Status Ticker with Lead Operator PiP Portrait */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/d1.jpeg"
                      alt="Dr. Prakash Chand Shahi"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 rounded-lg object-cover object-top border border-slate-300 shrink-0"
                    />
                    <div className="text-left">
                      <span className="font-mono font-bold text-[#0A1128] block leading-tight">{current.title}</span>
                      <span className="text-[10px] text-slate-500 block">{t('Directed by Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही की देखरेख में')}</span>
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-[#BE123C] font-bold">
                    {current.category}
                  </div>
                </div>
              </div>
            </Interactive3DTilt>

            {/* Clinical Value Callout */}
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 shadow-xs text-left flex items-start gap-3 card-hover-elevate">
              <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center text-[#BE123C] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-[#BE123C]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                  {t('Clinical Value & Safety Standard', 'मरीजों के लिए लाभ और सुरक्षा')}
                </span>
                <p className="text-xs text-slate-800 font-medium mt-0.5 leading-relaxed">
                  {current.clinicalValue}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Technology Selector & Technical Specifications */}
          <div className="lg:col-span-5 space-y-5 text-left">

            {/* Technology Selection Tabs */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0A1128] font-bold block">
                {t('Select Interventional Suite', 'तकनीक चुनें')}
              </span>
              <div className="grid grid-cols-1 gap-2">
                {techArsenal.map((tech, idx) => {
                  const isActive = activeTech === idx;

                  return (
                    <button
                      key={tech.id}
                      onClick={() => setActiveTech(idx)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-lg scale-[1.01] border-rose-300/40'
                          : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={tech.image}
                          alt={tech.title}
                          loading="lazy"
                          decoding="async"
                          className="w-12 h-12 rounded-xl object-cover border border-white/20 shrink-0"
                        />
                        <div className="space-y-0.5 text-left">
                          <span className={`text-xs font-bold block ${isActive ? 'text-white' : 'text-[#0A1128]'}`}>
                            {tech.title}
                          </span>
                          <span className={`text-[10px] font-mono block ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                            {tech.category}
                          </span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white font-bold' : 'bg-slate-100 text-slate-600'
                      }`}>
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dedicated Technical Specifications HUD Table with Interactive Card Hover */}
            <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-slate-200 shadow-md space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0A1128] font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#BE123C]" />
                  <span>{t('Technical Specifications', 'मुख्य विशेषताएं')}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[10px] font-mono font-bold text-[#BE123C] border border-rose-200">
                  {t('VERIFIED', 'प्रमाणित')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {current.specs.map((s, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-rose-50/50 hover:border-rose-200 transition-all text-left">
                    <span className="text-[10px] font-medium text-slate-500 block uppercase">
                      {s.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0A1128] block mt-0.5">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
