import React from 'react';
import { ClipboardList, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import SectionCinematicVideo from './SectionCinematicVideo';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import Interactive3DTilt from './Interactive3DTilt';
import ScrollReveal, { ScrollStagger, StaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function PatientExperienceSection({ onBookClick }) {
  const { patientJourney: rawJourney } = PULSE_DATA;
  const { t } = useLanguage();

  const journeyTranslations = {
    '01': {
      title: t('Book Appointment', 'अपॉइंटमेंट बुक करें'),
      description: t(
        'Seamlessly schedule your consultation online or via our dedicated priority helpline. Select your preferred specialist, clinical department, and time slot without waiting queues.',
        'बिना लंबी लाइन के, ऑनलाइन या हमारी प्रायोरिटी हेल्पलाइन के ज़रिए आसानी से अपना कंसल्टेशन और टाइम स्लॉट बुक करें।'
      ),
    },
    '02': {
      title: t('Doctor Consultation', 'डॉक्टर कंसल्टेशन'),
      description: t(
        'Meet your senior heart doctor for a calm, clear discussion. We carefully check your past reports, symptoms, and overall heart health.',
        'अपने सीनियर हार्ट डॉक्टर से शांत और साफ बातचीत के लिए मिलें। हम आपकी पुरानी रिपोर्ट्स, लक्षण और हार्ट हेल्थ को ध्यान से देखते हैं।'
      ),
    },
    '03': {
      title: t('Diagnosis & Tests', 'डायग्नोसिस और टेस्ट्स'),
      description: t(
        'Undergo recommended diagnostics—such as Flat-Panel Angiography, 3T MRI, 128-Slice CT, or automated pathology—with transparent, fast turnaround reporting.',
        'जरूरत के अनुसार फ्लैट-पैनल एंजियोग्राफी, 3T एमआरआई, 128-स्लाइस सीटी या पैथोलॉजी जैसे सटीक डायग्नोस्टिक्स और तेज़ रिपोर्ट प्राप्त करें।'
      ),
    },
    '04': {
      title: t('Personalized Treatment', 'पर्सनलाइज़्ड ट्रीटमेंट'),
      description: t(
        'From wrist-first transradial stenting and robotic joint replacement to targeted medical therapy, your care plan is customized with zero unnecessary procedures.',
        'कलाई के रास्ते ट्रांसरेडियल स्टेंटिंग से लेकर सटीक मेडिकल थेरेपी तक, आपका ट्रीटमेंट प्लान बिना किसी गैर-जरूरी प्रोसीजर के तैयार किया जाता है।'
      ),
    },
    '05': {
      title: t('Recovery & Follow-up', 'रिकवरी और फॉलो-अप'),
      description: t(
        'Step-down rehabilitation, post-discharge medication guidance, and tele-consultation follow-ups ensure your recovery is sustained, safe, and empowering.',
        'डिस्चार्ज के बाद दवाइयों की सही जानकारी, रिहैबिलिटेशन और फॉलो-अप के साथ आपकी सुरक्षित और स्थायी रिकवरी सुनिश्चित की जाती है।'
      ),
    },
  };

  const patientJourney = rawJourney.map((step) => ({
    ...step,
    ...(journeyTranslations[step.step] || {}),
  }));

  const preVisitDocuments = [
    t('Old ECG reports', 'पुरानी ईसीजी रिपोर्ट्स'),
    t('Past heart scan (Angiogram or CT) CD and reports', 'पिछले हार्ट स्कैन (एंजियोग्राम या सीटी) की सीडी और रिपोर्ट्स'),
    t('Current doctor prescriptions and daily medicines', 'मौजूदा डॉक्टर की पर्चियां और रोज़ाना की दवाइयां'),
    t('Recent blood test reports (Sugar, Cholesterol, Kidney)', 'हाल की ब्लड टेस्ट रिपोर्ट्स (शुगर, कोलेस्ट्रॉल, किडनी)'),
    t('Echo heart scan reports, if you have them', 'इको हार्ट स्कैन रिपोर्ट्स, अगर आपके पास हों'),
    t('Old hospital discharge papers or stent records', 'पुराने हॉस्पिटल डिस्चार्ज पेपर्स या स्टेंट रिकॉर्ड्स'),
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
                {t('Step-by-Step Visit', 'स्टेप-बाय-स्टेप विज़िट')}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8">
                <span className="text-[#0A1128] font-semibold text-xs uppercase tracking-widest block mb-1">
                  {t('Simple & Honest Heart Care', 'आसान और ईमानदार हार्ट केयर')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
                  {t('Your Visit', 'आपकी विज़िट')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Step by Step', 'स्टेप बाय स्टेप')}</span>
                </h2>
              </div>
              <div className="lg:col-span-4 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                {t(
                  'Clear and honest doctor consultation from checking your old reports to your regular follow-up care.',
                  'आपकी पुरानी रिपोर्ट्स की जांच से लेकर रेगुलर फॉलो-अप केयर तक साफ और ईमानदार डॉक्टर कंसल्टेशन।'
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
                        {t('PHASE', 'फेज़')} {step.step}
                      </span>
                      <span className="absolute bottom-2.5 right-3 font-serif font-bold text-2xl text-white/95 drop-shadow-md">
                        {step.step}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h3 className="font-extrabold text-base text-[#0A1128] leading-snug mb-2 group-hover:text-[#BE123C] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className={`mt-5 pt-3 border-t border-slate-100 flex items-center justify-between`}>
                        <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${a.pill} px-2.5 py-1 rounded-full`}>
                          {t('Dr. Shahi Protocol', 'डॉ. शाही प्रोटोकॉल')}
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-rose-200 border border-rose-300/30">
                  <ClipboardList className="w-3.5 h-3.5" />
                  <span>{t('Before Your Visit', 'विज़िट से पहले')}</span>
                </div>

                <h3 className="font-extrabold text-2xl sm:text-3xl text-white leading-snug">
                  {t('Reports to Bring for Your Checkup', 'चेकअप के लिए ये रिपोर्ट्स साथ लाएं')}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  {t(
                    'Bringing your old ECGs, heart scan CDs, and current medicines helps Dr. Prakash Chand Shahi understand your heart health clearly and give you the right advice.',
                    'अपनी पुरानी ईसीजी, हार्ट स्कैन की सीडी और मौजूदा दवाइयां साथ लाने से डॉ. प्रकाश चंद शाही को आपके हार्ट की स्थिति को बेहतर समझने और सही सलाह देने में मदद मिलती है।'
                  )}
                </p>

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

              <div className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {preVisitDocuments.map((doc, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/8 border border-white/15 hover:border-rose-300/50 hover:bg-white/15 transition-all flex items-start gap-2.5 cursor-default hover:scale-[1.02]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium leading-snug">
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Patient Care Video Telemetry */}
                <div className="pt-2">
                  <SectionCinematicVideo
                    type="patient-care"
                    videoUrl={false}
                    showControls={false}
                    styleVariant="video-card"
                    posterImage="/images/p3.jpeg"
                    title={t('Heart Scan CD & Report Checkup', 'हार्ट स्कैन सीडी और रिपोर्ट चेकअप')}
                    subtitle={t('Pulse Heart Centre • Patient Care', 'पल्स हार्ट सेंटर • पेशेंट केयर')}
                    specs={t('Doctor: Dr. Prakash Chand Shahi', 'डॉक्टर: डॉ. प्रकाश चंद शाही')}
                    aspectRatio="aspect-[16/8]"
                  />
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
