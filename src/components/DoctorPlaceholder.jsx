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
  imageSrc = '/images/doctor-portrait.jpg',
}) {
  const { t } = useLanguage();
  const doctor = PULSE_DATA?.doctor || {
    name: 'Dr. Prakash Chand Shahi',
    qualifications: 'DM Cardiology (PGIMER) • MD (KGMU)',
  };

  const [imgSrc, setImgSrc] = useState(imageSrc || '/images/doctor-portrait.jpg');

  return (
    <div className={`relative select-none ${className}`}>
      <div className="rounded-3xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_24px_50px_-14px_rgba(10,17,40,0.12)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-14px_rgba(10,17,40,0.18)]">
        {/* Clean, Uncluttered Portrait Canvas */}
        <div className={`relative ${aspectRatio} w-full rounded-2xl overflow-hidden bg-slate-100`}>
          <img
            src={imgSrc}
            alt={`${doctor.name} - Chief Interventional Cardiologist`}
            onError={() => setImgSrc('/images/i.png')}
            className="w-full h-full object-cover object-[50%_22%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A1128]/85 via-[#0A1128]/35 to-transparent pointer-events-none" />

          {/* Clean Bottom Identity Strip */}
          <div className="absolute bottom-3.5 inset-x-3.5 px-4 py-3 rounded-xl bg-white/95 border border-slate-200/90 shadow-md flex items-center justify-between gap-3 text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#BE123C] font-bold block">
                {t('Chief Interventional Cardiologist', 'चीफ इंटरवेंशनल कार्डियोलॉजिस्ट')}
              </span>
              <span className="text-sm font-extrabold text-[#0A1128] block leading-tight mt-0.5">
                {t(doctor.name, 'डॉ. प्रकाश चंद शाही')}
              </span>
              <span className="text-[11px] font-medium text-slate-600 block mt-0.5">
                {t('DM Cardiology (PGIMER) • MD (KGMU)', 'डीएम कार्डियोलॉजी (पीजीआईएमईआर) • एमडी (केजीएमयू)')}
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#BE123C]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
