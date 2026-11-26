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
      title: t('Modern Heart Cath Lab', 'मॉडर्न हार्ट कैथ लैब'),
      category: t('LIVE HEART IMAGING', 'लाइव हार्ट इमेजिंग'),
      description: t('Shows crystal-clear live heart images with 40% lower X-ray exposure for safer treatment.', 'सुरक्षित ट्रीटमेंट के लिए 40% कम एक्स-रे एक्सपोजर के साथ बिल्कुल साफ लाइव हार्ट इमेज दिखाता है।'),
      image: '/images/operation-theatre-laminar.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      type: 'facilities-walkthrough',
      specs: [
        { label: t('Image Clarity', 'इमेज क्लैरिटी'), value: t('Ultra-Sharp HD', 'अल्ट्रा-शार्प एचडी') },
        { label: t('Live Speed', 'लाइव स्पीड'), value: t('Smooth Real-Time', 'स्मूथ रियल-टाइम') },
        { label: t('Safety', 'सेफ्टी'), value: t('40% Lower Radiation', '40% कम रेडिएशन') },
        { label: t('Uses', 'उपयोग'), value: t('Heart & Artery Care', 'हार्ट और आर्टरी केयर') },
      ],
      clinicalValue: t('Helps Dr. Shahi treat blocked heart arteries safely and accurately.', 'डॉ. शाही को बंद हार्ट आर्टरीज़ का सुरक्षित और सटीक इलाज करने में मदद करता है।'),
    },
    {
      id: 'angiogram-fluoroscopy',
      title: t('Clear Blockage Mapping', 'साफ ब्लॉकेज मैपिंग'),
      category: t('ACCURATE HEART CHECK', 'सटीक हार्ट चेकअप'),
      description: t('Checks heart blood flow clearly to find the exact location and size of any blockage.', 'किसी भी ब्लॉकेज की सही जगह और साइज का पता लगाने के लिए हार्ट ब्लड फ्लो की साफ जांच करता है।'),
      image: '/images/heart-ct-scanner.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      type: 'cardiac-catheterization',
      specs: [
        { label: t('Angles', 'एंगल्स'), value: t('Full 3D Views', 'फुल 3डी व्यूज़') },
        { label: t('Measurement', 'माप'), value: t('Exact Blockage %', 'सटीक ब्लॉकेज %') },
        { label: t('Entry Point', 'एंट्री पॉइंट'), value: t('Through the Wrist (Painless)', 'कलाई के रास्ते (बिना दर्द)') },
        { label: t('Recovery', 'रिकवरी'), value: t('Walk in 2 Hours', '2 घंटे में चलें') },
      ],
      clinicalValue: t('Helps decide honestly whether medicines alone or a stent is best.', 'ईमानदारी से यह तय करने में मदद करता है कि सिर्फ दवाइयां बेहतर हैं या स्टेंट।'),
    },
    {
      id: 'stent-biomaterials',
      title: t('Safe Coated Heart Stents', 'सेफ कोटेड हार्ट स्टेंट्स'),
      category: t('HEART ARTERY SUPPORT', 'हार्ट आर्टरी सपोर्ट'),
      description: t('Ultra-thin, medicine-coated stents that gently keep arteries open and heal smoothly.', 'बेहद पतले, मेडिसिन-कोटेड स्टेंट्स जो आर्टरीज़ को आराम से खुला रखते हैं और जल्दी हील करते हैं।'),
      image: '/images/echo-machine-suite.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: t('Thickness', 'मोटाई'), value: t('Ultra-Thin Design', 'अल्ट्रा-थिन डिज़ाइन') },
        { label: t('Coating', 'कोटिंग'), value: t('Safe Healing Layer', 'सेफ हीलिंग लेयर') },
        { label: t('Medicine', 'दवा'), value: t('Prevents Re-Blockage', 'दोबारा ब्लॉकेज से बचाव') },
        { label: t('Success Rate', 'सफलता दर'), value: t('99.4% Blood Flow', '99.4% ब्लड फ्लो') },
      ],
      clinicalValue: t('Smooth healing with long-lasting protection against future blockages.', 'भविष्य में ब्लॉकेज से लंबे समय तक सुरक्षा और आसान हीलिंग।'),
    },
    {
      id: 'pacemaker-conduction',
      title: t('Long-Life Heart Pacemaker', 'लॉन्ग-लाइफ हार्ट पेसमेकर'),
      category: t('HEARTBEAT SUPPORT', 'हार्टबीट सपोर्ट'),
      description: t('Small, safe device that keeps a slow or irregular heartbeat steady day and night.', 'एक छोटा और सुरक्षित डिवाइस जो दिन-रात धीमी या अनियमित हार्टबीट को स्थिर रखता है।'),
      image: '/images/ecg-checkup-room.jpg',
      videoUrl: '/videos/cardiology-heart.mp4',
      type: 'cardiology-heart',
      specs: [
        { label: t('Battery Life', 'बैटरी लाइफ'), value: t('10–14 Years', '10–14 साल') },
        { label: t('Models', 'मॉडल्स'), value: t('Single & Dual Chamber', 'सिंगल और ड्यूल चैंबर') },
        { label: t('Smart Sensor', 'स्मार्ट सेंसर'), value: t('Auto-Adjusts Rhythm', 'ऑटो-एडजस्ट रिदम') },
        { label: t('Checkups', 'चेकअप्स'), value: t('Quick & Painless', 'तेज़ और बिना दर्द') },
      ],
      clinicalValue: t('Keeps your heart beating steadily so you feel active and safe.', 'आपकी हार्टबीट को स्थिर रखता है ताकि आप एक्टिव और सुरक्षित महसूस करें।'),
    },
  ];

  const current = techArsenal[activeTech];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">

      {/* Bespoke Cleanroom Background */}
      <SectionBackgroundMotion variant={variant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal variant="fade-down">
          <div className="mb-10 text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-rose-200 text-[#0A1128] text-xs font-mono font-medium shadow-xs">
              <Radio className="w-4 h-4 text-[#BE123C] animate-pulse" />
              <span className="uppercase tracking-[0.2em]">{t('Cath Lab & Diagnostic Systems', 'कैथ लैब एंड डायग्नोस्टिक सिस्टम्स')}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
              {t('Interventional Technology', 'इंटरवेंशनल टेक्नोलॉजी')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Suite', 'सूट')}</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px] font-bold">
              <span className="bg-rose-50 text-rose-950 px-3 py-1 rounded-full border border-rose-200 shadow-xs">{t('< 0.3 mm Matrix', '< 0.3 मिमी मैट्रिक्स')}</span>
              <span className="bg-slate-100 text-[#0A1128] px-3 py-1 rounded-full border border-slate-200 shadow-xs">{t('DoseSense -40%', 'डोजसेंस -40%')}</span>
              <span className="bg-rose-50 text-[#BE123C] px-3 py-1 rounded-full border border-rose-200 shadow-xs">{t('99.4% Flow Restored', '99.4% फ्लो रिस्टोर्ड')}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content Grid: Balanced Side-by-Side Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start my-8">

          {/* Left Column (7 cols): Completely Unobstructed 4K Cinematic Equipment Showcase with 3D Tilt */}
          <div className="lg:col-span-7 space-y-4">
            <Interactive3DTilt maxTilt={8} glowColor="rgba(190, 18, 60, 0.22)">
              <div className="group relative rounded-[2.5rem] overflow-hidden bg-white/95 p-3 sm:p-4 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-rose-300 transition-all duration-500">
                <div className="relative rounded-[2rem] overflow-hidden">
                  <SectionCinematicVideo
                    type={current.type || "facilities-walkthrough"}
                    videoUrl={false}
                    showControls={false}
                    styleVariant="floating-3d"
                    posterImage={current.image}
                    title={current.title}
                    subtitle={current.category}
                    specs={current.clinicalValue}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>

                {/* Bottom Equipment Status Ticker with Lead Operator PiP Portrait */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/doctor-portrait.jpg"
                      alt="Dr. Prakash Chand Shahi"
                      loading="lazy"
                      className="w-8 h-8 rounded-lg object-cover object-[50%_20%] border border-slate-300 shrink-0"
                    />
                    <div className="text-left">
                      <span className="font-mono font-bold text-[#0A1128] block leading-tight">{current.title}</span>
                      <span className="text-[10px] text-slate-500 block">{t('Directed by Dr. Prakash Chand Shahi', 'डायरेक्टेड बाय डॉ. प्रकाश चंद शाही')}</span>
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
                  {t('Clinical Value & Safety Standard', 'क्लिनिकल वैल्यू एंड सेफ्टी स्टैंडर्ड')}
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
                {t('Select Interventional Suite', 'सेलेक्ट इंटरवेंशनल सूट')}
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
                  <span>{t('Technical Specifications', 'टेक्निकल स्पेसिफिकेशंस')}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[10px] font-mono font-bold text-[#BE123C] border border-rose-200">
                  {t('VERIFIED', 'वेरिफाइड')}
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
