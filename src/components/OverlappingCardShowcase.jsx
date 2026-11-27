import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Stethoscope, Building2, Calendar, Sparkles, ShieldCheck, Heart, MapPin, Activity } from 'lucide-react';

/**
 * OverlappingCardShowcase: High-End Interactive Overlapping Card Deck
 * Abstract Luxury & Editorial Aesthetics:
 * - Fluid horizontal overlapping stadium cards (-space-x-8 to -space-x-14)
 * - Dynamic hover-expansion: Active card scales and broadens to 52% width at z-30
 * - Inactive cards gracefully layer with deep perspective shadows (z-20, z-10)
 * - Real high-definition medical photography with frosted glass HUD badges
 * - Category quick-switch pills for instant tactile control
 * - Responsive mobile snap-carousel track
 */
export default function OverlappingCardShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 'doctor',
      number: '01',
      tag: 'LEAD SPECIALIST',
      title: 'About Dr. Shahi',
      subtitle: 'Academic Pedigree & Bedside Devotion',
      description: 'DM Cardiology from apex PGIMER Chandigarh, MD Medicine from KGMU Lucknow, with 22+ years of bedside catheterization mastery.',
      image: '/images/pu.png',
      link: '/about',
      badge: 'PGIMER Chandigarh · 22+ Yrs',
      icon: UserCheck,
      accent: 'from-[#064E3B] to-[#047857]',
      glow: 'shadow-[0_25px_50px_-10px_rgba(6, 78, 59, 0.22)]',
      dotColor: 'bg-[#059669]',
    },
    {
      id: 'treatments',
      number: '02',
      tag: 'CATH LAB MODALITIES',
      title: 'Clinical Treatments',
      subtitle: 'Coronary Interventions & Angiography',
      description: 'Radial balloon angioplasty, high-precision drug-eluting stents, fluoroscopic coronary angiograms, and permanent pacemakers.',
      image: '/images/cath-lab.jpg',
      link: '/treatments',
      badge: '99.4% Flow Restoration',
      icon: Stethoscope,
      accent: 'from-[#064E3B] to-[#059669]',
      glow: 'shadow-[0_25px_50px_-10px_rgba(197,160,89,0.22)]',
      dotColor: 'bg-[#A7F3D0]',
    },
    {
      id: 'hospital',
      number: '03',
      tag: 'OUTPATIENT FACILITY',
      title: 'Pulse Heart Centre',
      subtitle: 'Centrally Located at Betiahata',
      description: 'Consultation suites, digital 12-lead ECG, Echo evaluations, dedicated recovery bays, and accessible transit in Gorakhpur.',
      image: '/images/hospital-ward-suites.jpg',
      link: '/hospital',
      badge: 'Betiahata, Gorakhpur · Mon–Sat',
      icon: Building2,
      accent: 'from-[#022C22] to-[#064E3B]',
      glow: 'shadow-[0_25px_50px_-10px_rgba(74,2,19,0.25)]',
      dotColor: 'bg-[#34D399]',
    },
    {
      id: 'appointment',
      number: '04',
      tag: 'DIRECT ACCESS',
      title: 'Book Appointment',
      subtitle: 'Priority Outpatient Consultation',
      description: 'Schedule a structured OPD consultation slot with Dr. Prakash Chand Shahi or access emergency cardiac guidance.',
      image: '/images/cardiac-icu-telemetry.jpg',
      link: '/contact',
      badge: 'Instant Online Token',
      icon: Calendar,
      accent: 'from-[#064E3B] to-[#047857]',
      glow: 'shadow-[0_25px_50px_-10px_rgba(225,29,72,0.2)]',
      dotColor: 'bg-emerald-400',
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-purple-900">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Interactive Cardiology Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-tight">
            Explore the <span className="font-serif italic font-normal text-purple-700">Practice Disciplines</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Hover or tap any card in the overlapping deck to bring it into focal view and explore dedicated clinic pathways.
          </p>
        </div>

        {/* Tactile Category Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {cards.map((c, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={c.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isCurrent
                    ? 'bg-slate-900 text-white shadow-md scale-105 ring-2 ring-purple-300'
                    : 'bg-white/80 hover:bg-white text-slate-700 border border-purple-100 hover:border-purple-300'
                }`}
              >
                <span>{c.number}. {c.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          DESKTOP OVERLAPPING STADIUM DECK (Visible on sm and up)
         ========================================================================= */}
      <div className="hidden sm:flex items-center -space-x-8 sm:-space-x-12 lg:-space-x-14 w-full py-4 select-none">
        {cards.map((card, idx) => {
          const isFocal = idx === activeIndex;
          const Icon = card.icon;

          let zIndexClass = 'z-10';
          if (isFocal) zIndexClass = 'z-30';
          else if (Math.abs(idx - activeIndex) === 1) zIndexClass = 'z-20';

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`relative shrink-0 overflow-hidden rounded-[2.2rem] lg:rounded-[2.6rem] border-2 transition-all duration-500 ease-out cursor-pointer group ${
                isFocal
                  ? `w-[50%] lg:w-[52%] aspect-[16/11] ${zIndexClass} ${card.glow} scale-[1.03] border-white ring-4 ring-purple-400/30`
                  : `w-[30%] lg:w-[32%] aspect-[3/3.8] ${zIndexClass} border-white/90 opacity-90 hover:opacity-100 hover:scale-[1.02] filter brightness-95 hover:brightness-100`
              }`}
            >
              {/* High-Resolution Real Medical Photography */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Cinematic Vignette Overlay */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                isFocal 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/40' 
                  : 'bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent'
              }`} />

              {/* Top Floating Glass Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
                <span className={`w-2 h-2 rounded-full ${card.dotColor} ${isFocal ? 'animate-ping' : ''}`} />
                <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                  {card.number} · {card.tag}
                </span>
              </div>

              {/* Top Right Institution Badge (Only on Focal) */}
              {isFocal && (
                <div className="absolute top-4 right-4 z-20 hidden lg:flex items-center gap-1.5 bg-slate-950/75 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 text-white text-[11px] font-medium shadow-md">
                  <span className="text-amber-200 font-serif italic">{card.badge}</span>
                </div>
              )}

              {/* Bottom Interactive Plaque */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                {isFocal ? (
                  // Expanded Focal Card Information
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15 text-white space-y-2 shadow-2xl transition-all">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-r ${card.accent} flex items-center justify-center text-white shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-light text-white tracking-tight">
                          {card.title}
                        </h3>
                      </div>
                      <span className="text-xs font-serif italic text-purple-200">
                        {card.subtitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/10">
                      <span className="text-[11px] font-mono text-purple-200 font-medium">
                        {card.badge}
                      </span>

                      <Link
                        to={card.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs font-semibold shadow hover:scale-105 transition-all"
                      >
                        <span>Open Section</span>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  // Compact Tucked Card Tab
                  <div className="p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2 truncate">
                      <Icon className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                      <span className="text-xs font-semibold text-white truncate">
                        {card.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 font-bold shrink-0">
                      Expand →
                    </span>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* =========================================================================
          MOBILE VIEW: TOUCH-SWIPEABLE SNAP TRACK
         ========================================================================= */}
      <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar select-none px-1">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="relative shrink-0 w-[85%] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-2 border-white snap-center group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-mono font-medium">
                <span className={`w-2 h-2 rounded-full ${card.dotColor}`} />
                <span>{card.number} · {card.tag}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white space-y-2">
                <h3 className="text-lg font-light text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {card.description}
                </p>
                <Link
                  to={card.link}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-slate-950 text-xs font-bold w-full justify-center"
                >
                  <span>Explore {card.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
