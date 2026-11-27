import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award, Play, Eye, Sparkles, ChevronRight, Stethoscope, Zap, Radio, Maximize2 } from 'lucide-react';
import CardiologyFullCanvas from './CardiologyFullCanvas';
import SectionBackgroundMotion from './SectionBackgroundMotion';
import CinematicVideoPlayerModal from './CinematicVideoPlayerModal';


export default function CardiologyShowcaseSection() {
  const [activeChannel, setActiveChannel] = useState('stenting');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const channels = {
    stenting: {
      id: 'stenting',
      title: 'Transradial Coronary Angioplasty & Stenting',
      category: 'INTERVENTIONAL CATH-LAB',
      badge: 'WRIST-FIRST ACCESS',
      image: '/images/ca.png',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      primaryMetric: '99.4% Flow Restored',
      statLabel: 'Vessel Patency Restored',
      highlight: '< 0.3mm Guidewire Sub-Millimeter Crossing',
      specs: [
        'Transradial Wrist-First Access (Zero Groin Immobilization)',
        'Cobalt-Chromium Drug-Eluting Stent Apposition',
        'Siemens Flat-Panel Fluoroscopic Guidance'
      ],
      telemetry: {
        rhythm: '72 BPM Sinus Rhythm',
        luminalGain: '+2.8 mm Post-Stent',
        flowGrade: 'TIMI-3 Complete Perfusion',
        doseReduction: '-40% Low-Dose Fluoroscopy'
      }
    },
    angiogram: {
      id: 'angiogram',
      title: 'Definitive Digital Cineangiogram (CAG)',
      category: 'DIAGNOSTIC CATHETERIZATION',
      badge: 'HIGH-SPEED CINE',
      image: '/images/doctor-angiogram-explain.jpg',
      videoUrl: '/videos/cardiac-catheterization.mp4',
      primaryMetric: '< 15 Min Outpatient',
      statLabel: 'Rapid Diagnostic Precision',
      highlight: 'Sub-Millimeter Stenosis & Bifurcation Localization',
      specs: [
        '15–30 FPS High-Speed Digital Cine Acquisition',
        'Direct Angiogram CD Review with Dr. Prakash Chand Shahi',
        'Ultra-Low Contrast Volume Protocol'
      ],
      telemetry: {
        rhythm: '74 BPM Normal Sinus',
        luminalGain: 'Stenosis Mapped: 85% LAD',
        flowGrade: 'Pre-Intervention Assessment',
        doseReduction: 'CareDose4D Active'
      }
    },
    pacemaker: {
      id: 'pacemaker',
      title: 'Permanent Pacemaker Implantation (PPI)',
      category: 'CARDIAC ELECTROPHYSIOLOGY',
      badge: 'PHYSIOLOGICAL PACING',
      image: '/images/doctor-echo-checkup.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      primaryMetric: '14-Year Battery Life',
      statLabel: 'Micro-Lithium Generator',
      highlight: 'Dual-Chamber Rate-Responsive Physiological Synchrony',
      specs: [
        'Physiological Right Ventricular & Atrial Pacing Leads',
        'Automated Threshold & Impedance Telemetry Checks',
        'Minimally Invasive Sub-Clavicular Pouch Placement'
      ],
      telemetry: {
        rhythm: '60–100 BPM Rate-Responsive',
        luminalGain: 'Impedance: 520 Ohms Normal',
        flowGrade: '100% AV Synchrony',
        doseReduction: 'Lead Position Confirmed'
      }
    },
    cathlab: {
      id: 'cathlab',
      title: 'Siemens Artis Zee Cath Lab Pavilion',
      category: 'ADVANCED INFRASTRUCTURE',
      badge: 'BETIAHATA CAMPUS',
      image: '/images/doctor-icu-rounds.jpg',
      videoUrl: '/videos/facilities-walkthrough.mp4',
      primaryMetric: '< 45 Min Door-to-Balloon',
      statLabel: '24/7 STEMI Emergency Care',
      highlight: 'Class-100 HEPA-14 Sterile Interventional Cleanroom',
      specs: [
        'Sub-Millimeter High-Resolution Digital Flat Panel',
        'Emergency 24/7 Cardiac Catheterization Standby',
        'Direct In-Person Oversight by Dr. Prakash Chand Shahi'
      ],
      telemetry: {
        rhythm: 'Continuous Cardiac Telemetry',
        luminalGain: 'Class-100 Laminar Clean Air',
        flowGrade: '14,000 Sq. Ft. Facility',
        doseReduction: 'NABH Accreditation Standard'
      }
    }
  };

  const current = channels[activeChannel] || channels.stenting;

  const proceduresList = [
    {
      id: 'stenting',
      title: 'Transradial Angioplasty & Stenting',
      tag: 'Wrist-First Access',
      metric: '99.4% Flow',
      image: '/images/radial-catheter-sheath.jpg',
      icon: HeartPulse,
      activeBorder: 'border-rose-500',
      activeBg: 'from-rose-50/80 via-white to-rose-50/40',
      activeRing: 'ring-rose-400/30',
      activeBadge: 'bg-rose-600 text-white border-rose-600',
      inactiveBadge: 'bg-rose-50 text-rose-800 border-rose-200',
      activeTitle: 'text-rose-900',
      lineGradient: 'from-rose-500 via-pink-400 to-rose-600',
    },
    {
      id: 'angiogram',
      title: 'Coronary Angiogram (CAG)',
      tag: 'Fluoroscopic Cine',
      metric: '< 15 Min',
      image: '/images/angiogram-scan.jpg',
      icon: Activity,
      activeBorder: 'border-cyan-500',
      activeBg: 'from-cyan-50/80 via-white to-cyan-50/40',
      activeRing: 'ring-cyan-400/30',
      activeBadge: 'bg-cyan-600 text-white border-cyan-600',
      inactiveBadge: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      activeTitle: 'text-cyan-900',
      lineGradient: 'from-cyan-500 via-blue-400 to-cyan-600',
    },
    {
      id: 'pacemaker',
      title: 'Permanent Pacemaker (PPI)',
      tag: 'Physiological Rhythm',
      metric: '14-Yr Life',
      image: '/images/pacemaker-tech.jpg',
      icon: Zap,
      activeBorder: 'border-purple-500',
      activeBg: 'from-purple-50/80 via-white to-purple-50/40',
      activeRing: 'ring-purple-400/30',
      activeBadge: 'bg-purple-600 text-white border-purple-600',
      inactiveBadge: 'bg-purple-50 text-purple-800 border-purple-200',
      activeTitle: 'text-purple-900',
      lineGradient: 'from-purple-500 via-indigo-400 to-purple-600',
    },
    {
      id: 'cathlab',
      title: 'Siemens Artis Zee Cath Lab',
      tag: 'Betiahata Campus',
      metric: '< 45 Min',
      image: '/images/cath-lab.jpg',
      icon: ShieldCheck,
      activeBorder: 'border-amber-500',
      activeBg: 'from-amber-50/80 via-white to-amber-50/40',
      activeRing: 'ring-amber-400/30',
      activeBadge: 'bg-amber-600 text-white border-amber-600',
      inactiveBadge: 'bg-amber-50 text-amber-800 border-amber-200',
      activeTitle: 'text-amber-900',
      lineGradient: 'from-amber-500 via-orange-400 to-amber-600',
    },
  ];

  return (
    <section id="cardiology" className="relative min-h-[92vh] flex items-center py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#FAF9F6] border-b border-slate-200 select-none">

      {/* Clean Cardiology Background */}
      <SectionBackgroundMotion variant="home-cardiology" />

      {/* =========================================================================
          MAIN CONTENT GRID: 6 COLS (EDITORIAL & 3D CARDS) + 6 COLS (3D HUD STAGE)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full relative z-10 py-4">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =====================================================================
              LEFT COLUMN (6 Cols): Header, Clinician Crest & 4 Interactive 3D Cards
             ===================================================================== */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* 1. Header Badges */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#9A3412] border border-orange-200/80 text-xs font-bold uppercase tracking-[0.22em] shadow-xs">
                <HeartPulse className="w-4 h-4 text-[#E11D48] animate-pulse" />
                <span>Cardiovascular Sciences &amp; Hemodynamics</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.05]">
                Preserving Every <br />
                <span className="font-serif italic font-normal text-[#BE123C]">Heartbeat with Precision.</span>
              </h2>

              {/* Lead Cardiologist Squircle Portrait Badge */}
              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-md">
                <img
                  src="/images/d1.jpeg"
                  alt="Dr. Prakash Chand Shahi"
                  loading="lazy"
                  className="w-12 h-12 rounded-xl object-cover object-[50%_20%] border border-rose-200 shrink-0"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold text-[#0A1128]">Dr. Prakash Chand Shahi</span>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-50 text-[#BE123C] border border-rose-200">LEAD CLINICIAN</span>
                  </div>
                  <span className="text-[10px] text-[#BE123C] font-mono font-bold block mt-0.5">
                    DM Cardiology (PGIMER) • MD (KGMU Lucknow)
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Four Interactive 3D Procedure Selector Cards (Colorful & Vibrant) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {proceduresList.map((proc) => {
                const isActive = activeChannel === proc.id;
                const IconComponent = proc.icon;

                return (
                  <button
                    key={proc.id}
                    onClick={() => setActiveChannel(proc.id)}
                    className={`relative text-left p-3.5 rounded-2xl border-2 transition-all duration-300 overflow-hidden group ${isActive
                      ? `${proc.activeBorder} bg-gradient-to-br ${proc.activeBg} shadow-md ring-2 ${proc.activeRing}`
                      : 'border-rose-100/90 bg-white/80 hover:bg-white hover:border-rose-200 shadow-xs'
                      }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${isActive
                          ? 'bg-white text-[#EA580C] shadow-xs'
                          : 'bg-rose-50 text-slate-700'
                          }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${isActive ? proc.activeBadge : proc.inactiveBadge
                          }`}
                      >
                        {proc.metric}
                      </span>
                    </div>

                    <h3
                      className={`text-xs font-extrabold leading-snug line-clamp-1 ${isActive ? proc.activeTitle : 'text-slate-800'
                        }`}
                    >
                      {proc.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">{proc.tag}</p>

                    {/* Active Bottom Glow Line */}
                    {isActive && (
                      <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${proc.lineGradient}`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 3. Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FB923C] hover:from-[#C2410C] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 transition-all hover:scale-102"
              >
                <span>Book Priority OPD Pass</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </Link>

              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-orange-50/70 text-[#C2410C] font-bold text-xs uppercase tracking-wider border-2 border-orange-200 shadow-xs transition-all"
              >
                <span>Explore Treatments Dossier</span>
                <ChevronRight className="w-4 h-4 text-[#EA580C]" />
              </Link>
            </div>

          </div>

          {/* =====================================================================
              RIGHT COLUMN (6 Cols): 3D Panoramic Cardiac Cath-Lab Stage & HUD Console
             ===================================================================== */}
          <div className="lg:col-span-6 space-y-4">

            {/* The Main High-End 3D Visual Console */}
            <div className="relative rounded-[2.5rem] bg-slate-950 border-2 border-orange-200/90 shadow-2xl overflow-hidden group">

              {/* Media Container with 4K Imaging */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                <img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Ambient Dark Gradient & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60 pointer-events-none" />

                {/* Top HUD Status Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#A7F3D0] font-bold">
                      <Radio className="w-3 h-3 text-emerald-500 animate-ping" />
                      <span>LIVE CATH-LAB FLURO</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hidden sm:inline-block text-slate-300">
                      {current.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="px-3 py-1 rounded-full bg-[#10B981] hover:bg-[#059669] text-slate-950 font-sans text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Reel</span>
                    </button>
                  </div>
                </div>

                {/* Center Precision Aim Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-30">
                  <div className="w-24 h-24 border border-[#10B981] rounded-full flex items-center justify-center">
                    <div className="w-full h-px bg-[#10B981]" />
                    <div className="h-full w-px bg-[#10B981] absolute" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981] animate-ping absolute" />
                  </div>
                </div>

                {/* Bottom Overlay Title & Live Telemetry Metrics */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 text-white space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#10B981] uppercase bg-[#022C22]/80 px-2.5 py-0.5 rounded border border-[#059669]/40">
                      {current.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      {current.primaryMetric}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    {current.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-light hidden sm:block">
                    {current.highlight}
                  </p>

                  {/* Real-time Telemetry Grid Inside HUD */}
                  <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono border-t border-white/15">
                    <div className="bg-black/40 p-1.5 rounded-lg border border-white/10">
                      <span className="text-slate-400 block text-[9px]">SINUS RHYTHM</span>
                      <span className="text-[#34D399] font-bold">{current.telemetry.rhythm}</span>
                    </div>

                  </div>

                  {/* Visual Channel Switcher Bar */}
                  <div className="flex items-center gap-2">
                    {Object.values(channels).map((chan) => {
                      const isActive = activeChannel === chan.id;
                      return (
                        <button
                          key={chan.id}
                          onClick={() => setActiveChannel(chan.id)}
                          className={`flex-1 py-2 px-2.5 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-300 text-center truncate ${isActive
                            ? 'bg-gradient-to-r from-[#BE123C] to-[#FB923C] text-white shadow-md border border-rose-300'
                            : 'bg-white hover:bg-orange-50 text-slate-700 border border-orange-200/80'
                            }`}
                        >
                          {chan.id === 'stenting' && '🫀 Stenting'}
                          {chan.id === 'angiogram' && '🩺 Angiogram'}
                          {chan.id === 'pacemaker' && '⚡ Pacemaker'}
                          {chan.id === 'cathlab' && '🏥 Cath Lab'}
                        </button>
                      );
                    })}
                  </div>

                  {/* Verified Clinical Facts Ribbon Under Visual Console */}
                  <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/95 p-3 rounded-2xl border border-orange-200 shadow-xs">
                    <div className="text-left px-2 border-r border-slate-200">
                      <span className="text-xl font-extrabold text-[#C2410C] block leading-none">15,000+</span>
                      <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Procedures</span>
                      <span className="text-[9px] text-slate-500 block">Radial angioplasty</span>
                    </div>
                    <div className="text-left px-2 sm:border-r border-slate-200">
                      <span className="text-xl font-extrabold text-[#EA580C] block leading-none">&lt; 45 Min</span>
                      <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Door-To-Balloon</span>
                      <span className="text-[9px] text-slate-500 block">24/7 STEMI standby</span>
                    </div>
                    <div className="text-left px-2 border-r border-slate-200">
                      <span className="text-xl font-extrabold text-[#BE123C] block leading-none">99.4%</span>
                      <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Patency</span>
                      <span className="text-[9px] text-slate-500 block">Restored blood flow</span>
                    </div>
                    <div className="text-left px-2">
                      <span className="text-xl font-extrabold text-slate-900 block leading-none">22+ Yrs</span>
                      <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Experience</span>
                      <span className="text-[9px] text-slate-500 block">Dr. Prakash Chand Shahi</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Visual Channel Switcher Bar */}
            <div className="flex items-center gap-2">
              {Object.values(channels).map((chan) => {
                const isActive = activeChannel === chan.id;
                return (
                  <button
                    key={chan.id}
                    onClick={() => setActiveChannel(chan.id)}
                    className={`flex-1 py-2 px-2.5 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-300 text-center truncate ${isActive
                      ? 'bg-[#064E3B] text-white shadow-md border border-[#10B981]'
                      : 'bg-white hover:bg-[#F0FDF4] text-slate-700 border border-[#A7F3D0]/70'
                      }`}
                  >
                    {chan.id === 'stenting' && '🫀 Stenting'}
                    {chan.id === 'angiogram' && '🩺 Angiogram'}
                    {chan.id === 'pacemaker' && '⚡ Pacemaker'}
                    {chan.id === 'cathlab' && '🏥 Cath Lab'}
                  </button>
                );
              })}
            </div>

            {/* Verified Clinical Facts Ribbon Under Visual Console */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/90 p-3 rounded-2xl border border-[#A7F3D0] shadow-xs">
              <div className="text-left px-2 border-r border-slate-200">
                <span className="text-xl font-extrabold text-[#064E3B] block leading-none">15,000+</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Procedures</span>
                <span className="text-[9px] text-slate-500 block">Radial angioplasty</span>
              </div>
              <div className="text-left px-2 sm:border-r border-slate-200">
                <span className="text-xl font-extrabold text-[#047857] block leading-none">&lt; 45 Min</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Door-To-Balloon</span>
                <span className="text-[9px] text-slate-500 block">24/7 STEMI standby</span>
              </div>
              <div className="text-left px-2 border-r border-slate-200">
                <span className="text-xl font-extrabold text-[#059669] block leading-none">99.4%</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Patency</span>
                <span className="text-[9px] text-slate-500 block">Restored blood flow</span>
              </div>
              <div className="text-left px-2">
                <span className="text-xl font-extrabold text-[#064E3B] block leading-none">22+ Yrs</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block pt-1">Experience</span>
                <span className="text-[9px] text-slate-500 block">Dr. Prakash Chand Shahi</span>
              </div>
            </div>

          </div>

        </div>

        {/* Visual Channel Switcher Bar */}
        <div className="flex items-center gap-2">
          {Object.values(channels).map((chan) => {
            const isActive = activeChannel === chan.id;
            return (
              <button
                key={chan.id}
                onClick={() => setActiveChannel(chan.id)}
                className={`flex-1 py-2 px-2.5 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-300 text-center truncate ${isActive
                  ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-md border border-rose-300/40'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
              >
                {chan.id === 'stenting' && '🫀 Stenting'}
                {chan.id === 'angiogram' && '🩺 Angiogram'}
                {chan.id === 'pacemaker' && '⚡ Pacemaker'}
                {chan.id === 'cathlab' && '🏥 Cath Lab'}
              </button>
            );
          })}
        </div>

        {/* Verified Clinical Facts Ribbon Under Visual Console */}
        <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/95 p-3 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-left px-2 border-r border-slate-100">
            <span className="text-xl font-extrabold text-[#0A1128] block leading-none font-serif">15,000+</span>
            <span className="text-[10px] text-slate-700 font-bold uppercase tracking-wider block pt-1">Procedures</span>
            <span className="text-[9px] text-slate-500 block">Radial angioplasty</span>
          </div>
          <div className="text-left px-2 sm:border-r border-slate-100">
            <span className="text-xl font-extrabold text-[#BE123C] block leading-none font-serif">&lt; 45 Min</span>
            <span className="text-[10px] text-slate-700 font-bold uppercase tracking-wider block pt-1">Door-To-Balloon</span>
            <span className="text-[9px] text-slate-500 block">24/7 STEMI standby</span>
          </div>
          <div className="text-left px-2 border-r border-slate-100">
            <span className="text-xl font-extrabold text-[#0A1128] block leading-none font-serif">99.4%</span>
            <span className="text-[10px] text-slate-700 font-bold uppercase tracking-wider block pt-1">Patency</span>
            <span className="text-[9px] text-slate-500 block">Restored blood flow</span>
          </div>
          <div className="text-left px-2">
            <span className="text-xl font-extrabold text-[#BE123C] block leading-none font-serif">22+ Yrs</span>
            <span className="text-[10px] text-slate-700 font-bold uppercase tracking-wider block pt-1">Experience</span>
            <span className="text-[9px] text-slate-500 block">Dr. Prakash Chand Shahi</span>
          </div>
        </div>

      </div>

    </section>
  );
}
