import React from 'react';
import { ClipboardList, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal, { ScrollStagger, StaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function PatientExperienceSection({ onBookClick }) {
  const { patientJourney } = PULSE_DATA;
  const { t } = useLanguage();

  const preVisitDocuments = [
    {
      en: "Old ECG reports",
      hi: "पुरानी ईसीजी (ECG) रिपोर्ट्स"
    },
    {
      en: "Past heart scan (Angiogram or CT) CD and reports",
      hi: "पिछले हार्ट स्कैन (एंजियोग्राम या सीटी) की सीडी और रिपोर्ट्स"
    },
    {
      en: "Current doctor prescriptions and daily medicines",
      hi: "डॉक्टर का मौजूदा पर्चा और रोज़ाना की दवाइयां"
    },
    {
      en: "Recent blood test reports (Sugar, Cholesterol, Kidney)",
      hi: "हाल की ब्लड टेस्ट रिपोर्ट्स (शुगर, कोलेस्ट्रॉल, किडनी)"
    },
    {
      en: "Echo heart scan reports, if you have them",
      hi: "दिल के इको (Echo) टेस्ट की रिपोर्ट्स, यदि आपके पास हों"
    },
    {
      en: "Old hospital discharge papers or stent records",
      hi: "अस्पताल के पुराने डिस्चार्ज पेपर या स्टेंट के रिकॉर्ड"
    }
  ];

  return (
    <section id="patient-experience" className="relative py-16 lg:py-24 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] rounded-[3rem] border border-slate-200 shadow-lg my-12">
      {/* Bespoke Serene Hospitality & Calming Organic Waves */}
      <SectionBackgroundMotion variant="hospital-experience" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal variant="fade-down">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] px-3.5 py-1 rounded-full shadow-sm border border-rose-300/30">
                {t('Patient Care Guide', 'पेशेंट केयर गाइड')}
              </span>
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#0A1128] to-[#BE123C]" />
              <span className="text-xs font-medium tracking-wider text-[#BE123C] uppercase font-mono">
                {t('Step-by-Step Visit', 'विज़िट के चरण')}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8">
                <span className="text-[#0A1128] font-semibold text-xs uppercase tracking-widest block mb-1">
                  {t('Simple & Honest Heart Care', 'सरल और ईमानदार हार्ट केयर')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                  {t('Your Visit', 'आपकी विज़िट')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Step by Step', 'कदम दर कदम')}</span>
                </h2>
              </div>
              <div className="lg:col-span-4 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                {t(
                  'Clear and honest doctor consultation from checking your old reports to your regular follow-up care.',
                  'आपकी पुरानी रिपोर्ट्स देखने से लेकर नियमित फॉलो-अप तक, साफ और ईमानदार डॉक्टर सलाह।'
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Stage Visual Pathway Cards with Doctor & Procedure Photography */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14" staggerDelay={0.12}>
          {patientJourney.map((step, index) => {
            const stepMedia = [
              { img: '/images/doctor-patient-consult.jpg', pos: 'object-center', border: 'border-slate-200', text: 'text-[#0A1128]', pill: 'bg-slate-100 text-[#0A1128]' },
              { img: '/images/doctor-echo-checkup.jpg', pos: 'object-center', border: 'border-rose-200', text: 'text-[#BE123C]', pill: 'bg-rose-50 text-[#BE123C]' },
              { img: '/images/doctor-cathlab-procedure.jpg', pos: 'object-center', border: 'border-slate-200', text: 'text-[#0A1128]', pill: 'bg-slate-100 text-[#0A1128]' },
              { img: '/images/doctor-icu-rounds.jpg', pos: 'object-center', border: 'border-rose-200', text: 'text-[#BE123C]', pill: 'bg-rose-50 text-[#BE123C]' },
            ];
            const a = stepMedia[index % stepMedia.length];
            return (
              <StaggerItem key={step.step}>
                <Interactive3DTilt maxTilt={9} glowColor="rgba(190, 18, 60, 0.22)">
                  <div
                    className={`group rounded-[2rem] bg-white border-2 ${a.border} shadow-md flex flex-col justify-between h-full hover:border-rose-300 transition-all duration-300 overflow-hidden`}
                  >
                    {/* Visual Image Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={a.img}
                        alt={step.title}
                        loading="lazy"
                        className={`w-full h-full object-cover ${a.pos} group-hover:scale-108 transition-transform duration-700`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0A1128]/80 border border-white/20 text-[10px] font-mono font-bold text-white">
                        {t('STEP', 'चरण')} {step.step}
                      </span>
                      <span className="absolute bottom-2.5 right-3 font-serif font-bold text-2xl text-white/95 drop-shadow-md">
                        {step.step}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h3 className="font-extrabold text-base text-[#0A1128] leading-snug mb-2 group-hover:text-[#BE123C] transition-colors">
                          {t(step.title, step.titleHi || step.title)}
                        </h3>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          {t(step.description, step.descriptionHi || step.description)}
                        </p>
                      </div>

                      <div className={`mt-5 pt-3 border-t border-slate-100 flex items-center justify-between`}>
                        <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${a.pill} px-2.5 py-1 rounded-full`}>
                          {t('Dr. Shahi Care', 'डॉ. शाही केयर')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Interactive3DTilt>
              </StaggerItem>
            );
          })}
        </ScrollStagger>

        {/* Pre-Visit Records Checklist with Interactive Document Hover */}
        <ScrollReveal variant="fade-up">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#0A1128] text-white p-8 sm:p-12 shadow-2xl border-2 border-rose-300/25 relative overflow-hidden">
            {/* Luminous Ambient Glow inside card */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#E11D48]/20 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

              {/* Left Column (7 Cols): Heading, Description, 2-Column Checklist & CTA (Below Image on Mobile) */}
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-5 text-left">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-rose-200 border border-rose-300/30">
                    <ClipboardList className="w-3.5 h-3.5" />
                    <span>{t('Before Your Visit', 'विज़िट से पहले')}</span>
                  </div>

                  <h3 className="font-extrabold text-xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-tight">
                    {t('Reports to Bring for Your Checkup', 'चेकअप के लिए ये रिपोर्ट्स साथ लाएं')}
                  </h3>

                  <p className="text-slate-300 text-[11px] sm:text-sm font-normal leading-relaxed max-w-2xl">
                    {t(
                      'Bringing your old ECGs, heart scan CDs, and current medicines helps Dr. Prakash Chand Shahi understand your heart health clearly and give you the right advice.',
                      'अपनी पुरानी ईसीजी, हार्ट स्कैन की सीडी और मौजूदा दवाइयां साथ लाने से डॉ. प्रकाश चंद शाही को आपके हार्ट की स्थिति को बेहतर समझने और सही सलाह देने में मदद मिलती है।'
                    )}
                  </p>
                </div>

                {/* 2-Column Checklist Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 pt-1">
                  {preVisitDocuments.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/8 border border-white/15 hover:border-rose-300/50 hover:bg-white/15 transition-all flex items-start gap-2 sm:gap-2.5 cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E11D48] shrink-0 mt-0.5" />
                      <span className="text-[11px] sm:text-xs text-slate-200 font-medium leading-snug">
                        {t(doc.en, doc.hi)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onBookClick}
                    className="luxury-btn-ruby group"
                  >
                    <span>{t('Book Your Checkup', 'अपना चेकअप बुक करें')}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column (5 Cols): Clean Editorial Card (On Top in Mobile View) */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="max-w-sm mx-auto rounded-3xl bg-white p-2.5 shadow-2xl border border-white/20 overflow-hidden">
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="/images/d4.jpeg"
                      alt="Dr. Prakash Chand Shahi — Heart Scan CD & Report Checkup"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-3.5 text-left space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#BE123C] block">
                      {t('Pulse Heart Centre • Patient Care', 'पल्स हार्ट सेंटर • पेशेंट केयर')}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#0A1128] leading-snug">
                      {t('Heart Scan CD & Report Checkup', 'हार्ट स्कैन सीडी और रिपोर्ट चेकअप')}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      {t('Dr. Prakash Chand Shahi', 'डॉ. प्रकाश चंद शाही')}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
