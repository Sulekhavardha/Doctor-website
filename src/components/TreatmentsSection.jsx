import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Activity, Play, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { PULSE_DATA } from '../data/pulseData';

export default function TreatmentsSection({ onBookClick }) {
  const { treatments } = PULSE_DATA;
  const [selectedId, setSelectedId] = useState(treatments[0].id);
  const [animStep, setAnimStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setAnimStep((prev) => (prev % 4) + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, selectedId]);

  const activeTreatment = treatments.find((t) => t.id === selectedId) || treatments[0];

  return (
    <section id="treatments" className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FFF1F2]/70 via-[#FAF5FF]/80 to-[#F0FDF4]/50">

      {/* Ambient Floating Atmospheric Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/25 via-pink-400/30 to-purple-400/25 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-1" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-purple-500/35 via-emerald-400/30 to-teal-400/25 rounded-full blur-[85px] pointer-events-none -z-10 animate-float-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 px-3.5 py-1 rounded-full shadow-sm">
              Procedural Excellence
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-emerald-400" />
            <span className="text-xs font-medium tracking-wider text-purple-900 uppercase">
              Interventional & Diagnostic Catheterization
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 block mb-1">
                Super-Specialty Clinical Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-tight">
                Top Treatments & Procedures Offered by <span className="font-serif italic font-normal text-purple-700">Dr. Prakash Chand Shahi</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-md">
              Dr. Prakash Chand Shahi specializes in the following core treatments: <strong className="text-slate-900 font-medium">Peripheral Angioplasty & Stenting</strong>, <strong className="text-slate-900 font-medium">Coronary Angiogram</strong>, and <strong className="text-slate-900 font-medium">CT Coronary Angiography</strong>.
            </p>
          </div>
        </div>

        {/* Treatment Runway Selector: Overlapping Interactive Stadium Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center -space-y-3 md:-space-y-0 md:-space-x-6 lg:-space-x-8 mb-10">
          {treatments.map((item, index) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedId(item.id);
                  setAnimStep(1);
                }}
                className={`w-full md:w-[36%] text-left p-6 sm:p-7 rounded-[2rem] border-2 transition-all duration-400 ease-out relative overflow-hidden backdrop-blur-xl cursor-pointer ${isSelected
                  ? 'bg-gradient-to-br from-slate-950 via-[#180E2E] to-slate-950 text-white border-purple-400 shadow-[0_20px_50px_-10px_rgba(5, 150, 105, 0.3)] scale-[1.03] z-20 ring-2 ring-purple-400/40'
                  : 'bg-white/85 text-slate-800 border-purple-100 hover:bg-white hover:border-purple-300 hover:scale-[1.02] hover:z-25 shadow-sm z-10'
                  }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isSelected ? 'text-purple-300' : 'text-slate-400'
                    }`}>
                    0{index + 1} / {item.category}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isSelected ? 'bg-purple-600 text-white shadow-sm' : 'bg-purple-50 text-purple-700'
                    }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-light leading-snug">
                  {item.name}
                </h3>

                <p className={`text-xs mt-2 line-clamp-2 font-normal ${isSelected ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  {item.tagline}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-emerald-400 to-amber-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Master Integrated Procedure Showcase */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-[#130A24] to-slate-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl border-2 border-purple-500/30 relative overflow-hidden space-y-8">

          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* 1. Header Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-medium text-purple-200 mb-2">
                <span>{activeTreatment.category}</span>
                <span>•</span>
                <span>Pulse Heart Centre</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                {activeTreatment.name}
              </h3>
            </div>

            <p className="text-slate-300 text-sm font-light max-w-lg leading-relaxed">
              {activeTreatment.summary}
            </p>
          </div>

          {/* 2. Full-Width Interactive Simulation Stage */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 bg-white/5 backdrop-blur-xl p-5 z-10">

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
                <span className="text-xs font-mono uppercase tracking-wider text-purple-200 font-bold">
                  HEMODYNAMIC VISUALIZATION STAGE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <Play className={`w-3.5 h-3.5 ${isPlaying ? 'text-purple-300' : 'text-slate-300'}`} />
                  <span>{isPlaying ? "Live Simulation" : "Paused"}</span>
                </button>
                <button
                  onClick={() => setAnimStep(1)}
                  className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-slate-300"
                  title="Reset Stage"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Real Photographic Clinical Visualization Stage */}
            <div className="w-full h-64 sm:h-80 rounded-xl relative overflow-hidden border border-white/10 group">

              <img
                src={
                  activeTreatment.id === 'peripheral-angioplasty'
                    ? '/images/cath-lab.jpg'
                    : activeTreatment.id === 'coronary-angiogram'
                    ? '/images/angiogram-scan.jpg'
                    : '/images/pu.png'
                }
                alt={activeTreatment.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Top Telemetry Stamp */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span>
                  {activeTreatment.id === 'peripheral-angioplasty' && 'Cath Lab Suite · Radial Access Balloon Stent'}
                  {activeTreatment.id === 'coronary-angiogram' && 'Digital Fluoroscopy · Quantitative Stenosis Map'}
                  {activeTreatment.id === 'ct-angiography' && 'Volumetric 3D CT · Coronary Calcium Scoring'}
                </span>
              </div>

              {/* Bottom Step-by-Step Clinical Phase Bar */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-purple-600 text-white text-[10px] font-bold">
                    STEP {animStep} / 4
                  </span>
                  <span className="text-xs font-semibold text-purple-200">
                    {activeTreatment.id === 'peripheral-angioplasty' && (
                      animStep === 1 ? 'Guidewire crossing coronary lesion' :
                        animStep === 2 ? 'Balloon inflation & arterial plaque dilation' :
                          animStep === 3 ? 'High-precision drug-eluting stent deployed' :
                            '100% distal vessel hemodynamic flow restored'
                    )}
                    {activeTreatment.id === 'coronary-angiogram' && (
                      animStep === 1 ? 'Radial catheter engaged in coronary ostium' :
                        animStep === 2 ? 'Radiopaque contrast bolus injected under X-ray' :
                          animStep === 3 ? 'Full arterial tree opacification mapped' :
                            'Quantitative stenosis analysis verified'
                    )}
                    {activeTreatment.id === 'ct-angiography' && (
                      animStep === 1 ? 'ECG-gated volumetric cardiac acquisition' :
                        animStep === 2 ? 'Sub-millimeter multi-slice 3D reconstruction' :
                          animStep === 3 ? 'Agatston coronary calcium score calculated' :
                            'Non-invasive soft plaque report compiled'
                    )}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-amber-300 font-semibold shrink-0">
                  99.4% Flow Perfusion
                </span>
              </div>

            </div>
          </div>

          {/* 3. Bottom 3-Column Bento Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 z-10 relative">

            {/* Box 1: Diagnostic Indications */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold block">
                Clinical Indications
              </span>
              <ul className="space-y-2">
                {activeTreatment.indications.map((ind) => (
                  <li key={ind} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Procedural Highlights */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold block">
                Procedural Highlights
              </span>
              <ul className="space-y-2">
                {activeTreatment.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200 font-medium">
                    <span className="font-mono text-purple-300 font-bold">0{i + 1}.</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Consultation CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-950 text-white flex flex-col justify-between shadow-xl border border-purple-500/30">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-200 block mb-1">
                  Physician Consultation
                </span>
                <h4 className="text-xl font-light text-white leading-tight">
                  Discuss {activeTreatment.name}
                </h4>
                <p className="text-xs text-purple-200 font-light mt-2 leading-relaxed">
                  Direct evaluation with Dr. Prakash Chand Shahi at Pulse Heart Centre.
                </p>
              </div>

              <button
                onClick={onBookClick}
                className="mt-4 w-full py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book This Procedure</span>
                <ArrowUpRight className="w-4 h-4 text-purple-700" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
