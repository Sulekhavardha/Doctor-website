import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Heart, Sparkles, CheckCircle2, Quote, UserCheck } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import ThreeDImageCard from './ThreeDImageCard';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function PatientTestimonialsSection() {
  const [activeStory, setActiveStory] = useState(0);
  const { t } = useLanguage();

  const stories = [
    {
      id: 'story-1',
      name: t('Ramakant Tripathi', 'रमाकांत त्रिपाठी'),
      age: t('62 Yrs • Gorakhpur', '62 साल • गोरखपुर'),
      condition: t('3 Blocked Heart Arteries', '3 बंद हार्ट आर्टरीज़'),
      procedure: t('Heart Stenting (Wrist)', 'हार्ट स्टेंटिंग (कलाई के रास्ते)'),
      recovery: t('Discharged in 24 Hrs', '24 घंटे में डिस्चार्ज'),
      doctor: t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही'),
      quote: t(
        'Smooth stent treatment through the wrist with two stents. I was walking the next morning with no leg pain at all.',
        'कलाई के रास्ते दो स्टेंट्स के साथ बहुत आराम से ट्रीटमेंट हुआ। अगली ही सुबह मैं बिना किसी दर्द के आराम से चल रहा था।'
      ),
      image: '/images/w.webp',
      stat: t('99.4% Blood Flow Restored', '99.4% ब्लड फ्लो बहाल'),
      badge: t('Heart Recovery', 'हार्ट रिकवरी')
    },
    {
      id: 'story-2',
      name: t('Shanti Devi', 'शांति देवी'),
      age: t('68 Yrs • Deoria', '68 साल • देवरिया'),
      condition: t('Very Slow Heartbeat (Heart Block)', 'बहुत धीमी हार्टबीट (हार्ट ब्लॉक)'),
      procedure: t('Pacemaker Implant', 'पेसमेकर इम्प्लांट'),
      recovery: t('Active Lifestyle Restored', 'स्वस्थ जीवन की वापसी'),
      doctor: t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही'),
      quote: t(
        'Pulse rate was dropping below 35 BPM. Dr. Shahi placed the pacemaker smoothly; I feel healthy and active again.',
        'पल्स रेट 35 बीपीएम से नीचे जा रही थी। डॉ. शाही ने आराम से पेसमेकर लगाया; अब मैं फिर से स्वस्थ और एक्टिव महसूस कर रही हूं।'
      ),
      image: '/images/hospital-ward-suites.jpg',
      stat: t('Steady Heartbeat', 'स्थिर हार्टबीट'),
      badge: t('Pacemaker Recovery', 'पेसमेकर रिकवरी')
    },
    {
      id: 'story-3',
      name: t('Mohd. Tariq Siddiqui', 'मोहम्मद तारिक सिद्दीकी'),
      age: t('52 Yrs • Basti', '52 साल • बस्ती'),
      condition: t('Emergency Heart Attack', 'इमरजेंसी हार्ट अटैक'),
      procedure: t('Urgent Heart Stenting', 'अर्जेंट हार्ट स्टेंटिंग'),
      recovery: t('Discharged in 48 Hrs', '48 घंटे में डिस्चार्ज'),
      doctor: t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही'),
      quote: t(
        'Reached PULSE in emergency. Dr. Shahi opened the 100% blocked heart artery quickly and saved my life.',
        'इमरजेंसी में पल्स पहुंचा। डॉ. शाही ने 100% बंद हार्ट आर्टरी को तुरंत खोला और मेरी जान बचाई।'
      ),
      image: '/images/patient-recovery-story.jpg',
      stat: t('Fast < 38 Min Care', 'तेज़ < 38 मिनट केयर'),
      badge: t('Emergency Heart Care', 'इमरजेंसी हार्ट केयर')
    }
  ];

  const current = stories[activeStory];

  return (
    <section className="relative pt-6 pb-6 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-8 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200">
      {/* Bespoke Concentric Healing Resonance Waves & Luminescent Constellation */}
      <SectionBackgroundMotion variant="home-testimonials" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Doctor Stewardship Stamp */}
        <ScrollReveal variant="fade-down">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-rose-200 text-[#BE123C] text-xs font-mono font-bold shadow-xs">
              <Heart className="w-3.5 h-3.5 text-[#BE123C] fill-[#BE123C] animate-pulse" />
              <span className="uppercase tracking-widest">{t('Verified Clinical Outcomes', 'वेरिफाइड क्लिनिकल आउटकम्स')}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1128] tracking-tight">
              {t('Patient Stories &', 'मरीज़ों की कहानियां और')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Recovery Journeys', 'रिकवरी सफर')}</span>
            </h2>

            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
                <img
                  src="/images/d1.jpeg"
                  alt="Dr. Prakash Chand Shahi"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7 rounded-full object-cover object-top border border-rose-300 shrink-0"
                />
                <span className="text-[11px] font-bold text-[#0A1128]">{t('Under Clinical Direction of Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही की क्लिनिकल देखरेख में')}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 90% Visual Showcase: Grand Interactive Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: Large High-Resolution Patient Recovery Imagery in 3D */}
          <div className="lg:col-span-7">
            <ThreeDImageCard
              key={current.id}
              src={current.image}
              alt={current.name}
              aspectRatio="aspect-[16/10] sm:aspect-[16/11]"
            />
          </div>

          {/* Right: Minimal Punchy Testimonial Quote & Switchers with 3D Tilt */}
          <div className="lg:col-span-5 space-y-6">
            <Interactive3DTilt maxTilt={8} glowColor="rgba(190, 18, 60, 0.22)">
              <motion.div
                key={current.id + '-quote'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-[2rem] bg-white/95 backdrop-blur-xl border-2 border-slate-200 shadow-xl space-y-4 text-left relative card-hover-elevate"
              >
                <Quote className="w-10 h-10 text-rose-200/60 absolute top-6 right-6 -z-0" />
                
                <div className="flex items-center gap-1 text-amber-400 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">{t('5.0 Verified Care', '5.0 वेरिफाइड केयर')}</span>
                </div>

                <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug relative z-10 italic">
                  "{current.quote}"
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <div>
                    <span className="text-xs font-bold text-[#0A1128] block">{current.procedure}</span>
                    <span className="text-[11px] font-mono text-[#BE123C] font-semibold">{current.recovery}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#BE123C] text-[10px] font-bold border border-rose-200">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{t('Clinical Case File', 'क्लिनिकल केस फाइल')}</span>
                  </div>
                </div>
              </motion.div>
            </Interactive3DTilt>

            {/* Quick Case Switcher Tabs */}
            <div className="flex gap-3">
              {stories.map((s, idx) => {
                const isActive = activeStory === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStory(idx)}
                    className={`flex-1 p-3 rounded-2xl border-2 transition-all duration-300 text-left cursor-pointer hover:scale-105 active:scale-95 ${
                      isActive
                        ? 'bg-white border-[#BE123C] shadow-lg ring-2 ring-rose-200 scale-102'
                        : 'bg-white/80 border-slate-200 hover:border-rose-300 shadow-xs'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold block ${isActive ? 'text-[#BE123C]' : 'text-slate-500'}`}>
                      {t('CASE', 'केस')} 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[#0A1128] truncate block mt-0.5">
                      {s.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
