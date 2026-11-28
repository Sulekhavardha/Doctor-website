import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * InteractiveCardiacExplorer: Clean Heart Guide Visual
 */
export default function InteractiveCardiacExplorer() {
  const { t } = useLanguage();

  return (
    <section className="relative py-6 sm:py-8 lg:py-10 overflow-hidden select-none bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9] rounded-3xl sm:rounded-[3rem] my-2 sm:my-3 border border-slate-200/90 shadow-lg">
      {/* Subtle Lightbox Grid & Crimson Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lightboxGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 4" />
              <circle cx="40" cy="40" r="1.5" fill="#BE123C" opacity="0.45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lightboxGrid)" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#BE123C]/10 via-rose-200/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/90 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
            <span className="text-xs font-bold text-[#BE123C] uppercase tracking-wider">
              {t('Interactive Heart Guide', 'इंटरैक्टिव हार्ट गाइड')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight leading-tight">
            {t('How Your Heart', 'हाउ योर हार्ट')} <span className="font-serif italic font-normal text-[#BE123C]">{t('Works & Heals', 'वर्क्स एंड हील्स')}</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            {t(
              'Click any part of the heart below to see how Dr. Shahi checks blockages, opens arteries, and keeps your heartbeat steady.',
              'क्लिक एनी पार्ट ऑफ द हार्ट बिलो टू सी हाउ डॉ. शाही चेक्स ब्लॉकेजेस, ओपन्स आर्टरीज, एंड कीप्स योर हार्टबीट स्टेडी।'
            )}
          </p>
        </div>

        {/* Simple Clean Heart Image Display */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-white border border-slate-200/90 shadow-xl overflow-hidden p-3.5 sm:p-6">
          <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80">
            <img
              src="/images/ggg.webp"
              alt="How Your Heart Works & Heals"
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[560px] object-contain mx-auto block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
