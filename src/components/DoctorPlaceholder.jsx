import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';
import { useLanguage } from '../context/LanguageContext';

/**
 * DoctorPlaceholder
 * Clean, calm, authentic editorial portrait of Dr. Prakash Chand Shahi.
 * Zero over-done animations, zero cluttered badges covering the image.
 */
export default function DoctorPlaceholder({
  className = '',
  aspectRatio = 'aspect-[3/4] sm:aspect-[4/5]',
  imageSrc = '/images/d1.jpeg',
}) {
  const { t } = useLanguage();
  const doctor = PULSE_DATA?.doctor || {
    name: 'Dr. Prakash Chand Shahi',
    qualifications: 'DM Cardiology (PGIMER) • MD (KGMU)',
  };

  const [imgSrc, setImgSrc] = useState(imageSrc || '/images/d1.jpeg');

  return (
    <div className={`relative select-none ${className}`}>
      <div className="rounded-3xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_24px_50px_-14px_rgba(10,17,40,0.12)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-14px_rgba(10,17,40,0.18)]">
        {/* Clean, Uncluttered Portrait Canvas */}
        <div className={`relative ${aspectRatio} w-full rounded-2xl overflow-hidden bg-slate-100`}>
          <img
            src={imgSrc}
            alt={`${doctor.name} - Chief Interventional Cardiologist`}
            loading="lazy"
            decoding="async"
            onError={() => setImgSrc('/images/d1.jpeg')}
            className="w-full h-full object-cover object-[50%_22%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A1128]/70 via-[#0A1128]/20 to-transparent pointer-events-none" />

          {/* Compact Bottom Identity Strip */}
          <div className="absolute bottom-2.5 inset-x-2.5 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md flex items-center justify-between gap-2 text-left">
            <div className="min-w-0">
              <span className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-wider text-[#BE123C] font-bold block leading-tight truncate">
                {t('Chief Interventional Cardiologist', 'चीफ इंटरवेंशनल कार्डियोलॉजिस्ट')}
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-[#0A1128] block leading-tight mt-0.5 truncate">
                {t(doctor.name, 'डॉ. प्रकाश चंद शाही')}
              </span>
              <span className="text-[9.5px] sm:text-[10px] font-medium text-slate-600 block leading-tight mt-0.5 truncate">
                {t('DM Cardiology (PGIMER) • MD (KGMU)', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • एमडी (केजीएमयू)')}
              </span>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#BE123C]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
