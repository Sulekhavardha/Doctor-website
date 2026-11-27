import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, ArrowRight, Eye, Layers, Activity, Stethoscope, Building2, Calendar } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

/**
 * ExpertiseCollageSection
 * Section 3 of Designed Experiences:
 * An expertise section with overlapping image compositions.
 * - Monumental background typography watermark ("PRECISION")
 * - Asymmetrical multi-layered overlapping editorial collage
 * - Real high-definition medical photography with frosted glass HUD badges
 * - Interactive hover-depth shift where cards elevate, reveal telemetry, and expand
 */
export default function ExpertiseCollageSection() {
  const [activeCard, setActiveCard] = useState(0);

  const collageItems = [
    {
      id: 'cathlab',
      tag: 'CATHETERIZATION SUITE',
      title: 'Radial Intervention & Balloon Angioplasty',
      subtitle: '99.4% Endovascular Patency',
      description: 'Ultra-thin drug-eluting stents deployed under high-definition fluoroscopic guidance to open stenotic coronary and peripheral arteries.',
      image: '/images/cath-lab.jpg',
      aspect: 'aspect-[4/3]',
      stats: '99.4% Flow Restored',
      subtext: 'Transradial wrist access',
      badgeColor: 'text-purple-800 bg-purple-50 border-purple-200',
    },
    {
      id: 'angiogram',
      tag: 'DIAGNOSTIC FLUOROSCOPY',
      title: 'Coronary Angiographic Lesion Mapping',
      subtitle: '< 0.5 mm Spatial Precision',
      description: 'Gold-standard cineangiography utilizing biocompatible contrast to visualize arterial lumen flow dynamics and pinpoint calcified blockages.',
      image: '/images/angiogram-scan.jpg',
      aspect: 'aspect-[4/3]',
      stats: '< 0.5 mm Accuracy',
      subtext: 'Quantitative stenosis analysis',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    },
    {
      id: 'facility',
      tag: 'OUTPATIENT PAVILION',
      title: 'Pulse Heart Centre, Betiahata',
      subtitle: 'Comprehensive Ambulatory Care',
      description: 'Centrally situated in the prominent Betiahata medical corridor in Gorakhpur, featuring peaceful consultation suites, ECG, and echocardiography.',
      image: '/images/pu.png',
      aspect: 'aspect-[16/10]',
      stats: 'Mon – Sat Consultations',
      subtext: 'Prime Betiahata Location',
      badgeColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
    },
    {
      id: 'pacemaker',
      tag: 'ELECTROPHYSIOLOGY',
      title: 'Permanent Pacemaker Rhythm Management',
      subtitle: 'Conduction Synchronization',
      description: 'Subcutaneous pulse generator implantation with active-fixation transvenous leads for bradycardia, sinus node arrest, and heart block.',
      image: '/images/pacemaker-tech.jpg',
      aspect: 'aspect-[4/3]',
      stats: '10–15 Yr Battery Longevity',
      subtext: 'Physiological dual-chamber pacing',
      badgeColor: 'text-[#064E3B] bg-emerald-50 border-emerald-200',
    },
    {
      id: 'consult',
      tag: 'PHYSICIAN CONSULTATION',
      title: 'Direct Clinical Evaluation with Dr. Shahi',
      subtitle: '22+ Years of Bedside Devotion',
      description: 'Calm, detailed report review, honest second opinions on stenting or bypass, and long-term heart medicine plans for your peace of mind.',
      image: '/images/operation-theatre-laminar.jpg',
      aspect: 'aspect-[4/3]',
      stats: 'Over 22 Years Devotion',
      subtext: 'Betiahata, Gorakhpur',
      badgeColor: 'text-[#064E3B] bg-[#F0FDF4] border-[#A7F3D0]',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden select-none">
      
      {/* Monumental Watermark Typography Layered in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-typography text-[18vw] pointer-events-none z-0 opacity-25">
        PRECISION
      </div>

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[140px] pointer-events-none -z-5" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-emerald-100/30 rounded-full blur-[130px] pointer-events-none -z-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/70 text-xs font-semibold text-purple-900 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-purple-600" />
            <span className="font-mono uppercase tracking-[0.2em] text-[11px]">Section 03 • Overlapping Clinical Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-[1.12]">
            Interlocking Disciplines in <br />
            <span className="font-serif italic font-normal text-purple-700">Advanced Hemodynamics</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the interplay of modern catheterization laboratories, sub-millimeter fluoroscopic imaging, and personalized outpatient consultation.
          </p>
        </div>

        {/* Master Overlapping Collage Composition (Asymmetrical Architectural Staging) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (7 cols): Overlapping Visual Cards Matrix */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 relative z-10">
              
              {/* Primary Large Anchor Card: Cath Lab (Sm: 8 cols) */}
              <div 
                onMouseEnter={() => setActiveCard(0)}
                className={`sm:col-span-8 group relative rounded-[2rem] overflow-hidden p-3 bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_25px_50px_-12px_rgba(6, 78, 59, 0.12)] transition-all duration-500 cursor-pointer ${
                  activeCard === 0 ? 'scale-[1.02] ring-2 ring-purple-400 z-30' : 'hover:scale-[1.01] z-10'
                }`}
              >
                <div className="relative aspect-[16/11] rounded-[1.5rem] overflow-hidden">
                  <img
                    src={collageItems[0].image}
                    alt={collageItems[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono text-purple-900 font-bold tracking-wider border border-purple-200/80 shadow-md">
                    {collageItems[0].tag}
                  </div>

                  {/* Bottom Telemetry Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-mono text-purple-300 font-bold block">
                      {collageItems[0].stats}
                    </span>
                    <h4 className="text-base font-medium text-white leading-tight">
                      {collageItems[0].title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Card: Angiogram Scan (Sm: 4 cols - offset downward) */}
              <div 
                onMouseEnter={() => setActiveCard(1)}
                className={`sm:col-span-4 sm:translate-y-8 group relative rounded-[2rem] overflow-hidden p-3 bg-white/80 backdrop-blur-xl border border-white/90 shadow-lg transition-all duration-500 cursor-pointer ${
                  activeCard === 1 ? 'scale-[1.03] ring-2 ring-emerald-400 z-30' : 'hover:scale-[1.02] z-10'
                }`}
              >
                <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden">
                  <img
                    src={collageItems[1].image}
                    alt={collageItems[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[9px] font-mono text-emerald-900 font-bold border border-emerald-200 shadow-md">
                    DIAGNOSTIC
                  </div>

                  <div className="absolute bottom-3 left-2.5 right-2.5 text-left">
                    <span className="text-[9px] font-mono text-emerald-300 font-bold block">
                      {collageItems[1].stats}
                    </span>
                    <h5 className="text-xs font-medium text-white leading-tight">
                      Coronary Fluoroscopy
                    </h5>
                  </div>
                </div>
              </div>

              {/* Third Card: Pacemaker Electrophysiology (Sm: 5 cols - negative margin offset) */}
              <div 
                onMouseEnter={() => setActiveCard(3)}
                className={`sm:col-span-5 sm:-translate-y-4 group relative rounded-[2rem] overflow-hidden p-3 bg-white/80 backdrop-blur-xl border border-white/90 shadow-lg transition-all duration-500 cursor-pointer ${
                  activeCard === 3 ? 'scale-[1.03] ring-2 ring-emerald-400 z-30' : 'hover:scale-[1.02] z-20'
                }`}
              >
                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                  <img
                    src={collageItems[3].image}
                    alt={collageItems[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[9px] font-mono text-[#064E3B] font-bold border border-emerald-200 shadow-md">
                    PACEMAKERS
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                    <span className="text-[9px] font-mono text-emerald-300 font-bold block">
                      {collageItems[3].stats}
                    </span>
                    <h5 className="text-xs font-medium text-white leading-tight">
                      Rhythm Pacing
                    </h5>
                  </div>
                </div>
              </div>

              {/* Fourth Card: Pulse Heart Centre Facility (Sm: 7 cols) */}
              <div 
                onMouseEnter={() => setActiveCard(2)}
                className={`sm:col-span-7 group relative rounded-[2rem] overflow-hidden p-3 bg-white/80 backdrop-blur-xl border border-white/90 shadow-lg transition-all duration-500 cursor-pointer ${
                  activeCard === 2 ? 'scale-[1.02] ring-2 ring-indigo-400 z-30' : 'hover:scale-[1.01] z-10'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden">
                  <img
                    src={collageItems[2].image}
                    alt={collageItems[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[9px] font-mono text-indigo-900 font-bold border border-indigo-200 shadow-md">
                    BETIAHATA CLINIC
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-left">
                    <span className="text-[9px] font-mono text-indigo-300 font-bold block">
                      {collageItems[2].stats}
                    </span>
                    <h5 className="text-xs font-medium text-white leading-tight">
                      Pulse Heart Centre Architecture
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (5 cols): Dynamic Editorial Detail Panel corresponding to hovered card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-8 rounded-[2.5rem] bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-10px_rgba(6, 78, 59, 0.08)] space-y-5">
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border ${collageItems[activeCard].badgeColor}`}>
                  {collageItems[activeCard].tag}
                </span>
                <span className="text-[11px] font-mono text-purple-700 font-bold">
                  0{activeCard + 1} / 0{collageItems.length}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight leading-tight">
                  {collageItems[activeCard].title}
                </h3>
                <span className="font-serif italic text-base text-purple-700 block mt-1">
                  {collageItems[activeCard].subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                {collageItems[activeCard].description}
              </p>

              {/* Metric Callout Pill */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50/80 to-emerald-50/50 border border-purple-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    Key Clinical Benchmark
                  </span>
                  <span className="text-sm font-semibold text-slate-900 block mt-0.5">
                    {collageItems[activeCard].stats}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 font-bold block">
                    Protocol
                  </span>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    {collageItems[activeCard].subtext}
                  </span>
                </div>
              </div>

              {/* Tab Selector Buttons for Instant Clicking */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 block mb-2 font-semibold">
                  Switch Clinical Focal Dimension
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {collageItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveCard(idx)}
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all duration-300 ${
                        activeCard === idx
                          ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white font-semibold shadow-md shadow-purple-500/25 scale-105'
                          : 'bg-purple-50/80 text-purple-900 font-medium hover:bg-purple-100 border border-purple-200/60'
                      }`}
                    >
                      {item.tag.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-purple-900 uppercase tracking-wider group"
                >
                  <span>Explore Catheterization Modalities</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
