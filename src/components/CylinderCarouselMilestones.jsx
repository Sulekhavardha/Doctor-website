import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse, Award, Sparkles, ShieldCheck, Activity,
  ChevronLeft, ChevronRight, Play, Pause, Calendar, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/**
 * CylinderCarouselMilestones
 * High-End 3D Cylindrical Carousel for Clinical Milestones.
 * Uses real CSS 3D transforms (`rotateY` + `translateZ` with `perspective`),
 * smooth drag & swipe, clickable cards, auto-play with pause-on-hover,
 * and luxury medical styling.
 */
export default function CylinderCarouselMilestones({
  items,
  className = ""
}) {
  const { t } = useLanguage();
  const defaultMilestones = [
    {
      year: "2002",
      phase: "PHASE 01",
      badge: "Clinical Genesis",
      institution: "Betiahata, Gorakhpur",
      title: "Foundation of Clinical Devotion",
      desc: "Started dedicated heart care in Betiahata, Gorakhpur with honest medical ethics and patient-first care.",
      tags: ["Betiahata Origin", "Bedside Ethics", "Day 1 Commitment"],
      icon: HeartPulse,
      accent: "from-[#0A1128] to-[#1E293B]",
      borderAccent: "border-slate-300",
      num: "01",
      glowColor: "rgba(10, 17, 40, 0.25)"
    },
    {
      year: "2007",
      phase: "PHASE 02",
      badge: "Apex Residency",
      institution: "KGMU Lucknow",
      title: "Apex Medical Training at KGMU",
      desc: "Rigorous MD General Medicine residency at King George's Medical University, Lucknow, solidifying diagnostic depth for complex multi-system cardiac patients.",
      tags: ["King George's Med Univ", "Diagnostic Mastery", "Gold Standard"],
      icon: Award,
      accent: "from-[#1E293B] to-[#334155]",
      borderAccent: "border-slate-300",
      num: "02",
      glowColor: "rgba(30, 41, 59, 0.25)"
    },
    {
      year: "2013",
      phase: "PHASE 03",
      badge: "Super-Specialty",
      institution: "PGIMER Chandigarh",
      title: "Super-Specialty DM in Interventional Cardiology",
      desc: "Completion of apex DM Cardiology at PGIMER Chandigarh, introducing high-volume transradial intervention and complex heart stenting through the wrist to eastern UP.",
      tags: ["PGIMER Chandigarh", "Radial Access Pioneer", "Eastern UP First"],
      icon: Sparkles,
      accent: "from-[#BE123C] to-[#E11D48]",
      borderAccent: "border-rose-300",
      num: "03",
      glowColor: "rgba(190, 18, 60, 0.25)"
    },
    {
      year: "2018",
      phase: "PHASE 04",
      badge: "Cath Lab Suite",
      institution: "Siemens Artis Zee Flat-Panel",
      title: "Flat-Panel Digital Cath Lab Commissioned",
      desc: "Installation of the advanced Siemens Artis Zee digital catheterization suite, performing 24/7 emergency heart stenting with clear live imaging.",
      tags: ["Siemens Artis Zee", "Sub-Millimeter Stents", "24/7 STEMI Triage"],
      icon: ShieldCheck,
      accent: "from-[#0A1128] to-[#BE123C]",
      borderAccent: "border-rose-300",
      num: "04",
      glowColor: "rgba(190, 18, 60, 0.25)"
    },
    {
      year: "2023",
      phase: "PHASE 05",
      badge: "Next-Gen Era",
      institution: "IVUS • OCT • HD-ICU",
      title: "Next-Gen Cardiac Care Expansion",
      desc: "Advanced 24/7 Cardiac Emergency, Intra-Vascular Ultrasound (IVUS), Optical Coherence Tomography (OCT), and High-Dependency Cardiac ICU for precision coronary interventions.",
      tags: ["IVUS & OCT Guided", "High-Dependency ICU", "15,000+ Procedures"],
      icon: Activity,
      accent: "from-[#881337] to-[#BE123C]",
      borderAccent: "border-rose-300",
      num: "05",
      glowColor: "rgba(190, 18, 60, 0.25)"
    }
  ];

  const milestones = items || defaultMilestones;
  const count = milestones.length;
  const stepAngle = 360 / count; // 72 deg for 5 items

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartAngle, setDragStartAngle] = useState(0);

  // Dynamic radius based on viewport width
  const [cylinderRadius, setCylinderRadius] = useState(440);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setCylinderRadius(280);
      } else if (window.innerWidth < 1024) {
        setCylinderRadius(360);
      } else {
        setCylinderRadius(460);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Rotate to specific index
  const rotateToIndex = useCallback((index) => {
    const targetIdx = ((index % count) + count) % count;
    setCurrentIndex(targetIdx);
    setRotationAngle(-targetIdx * stepAngle);
  }, [count, stepAngle]);

  const handleNext = useCallback(() => {
    rotateToIndex(currentIndex + 1);
  }, [currentIndex, rotateToIndex]);

  const handlePrev = useCallback(() => {
    rotateToIndex(currentIndex - 1);
  }, [currentIndex, rotateToIndex]);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isDragging, handleNext]);

  // Touch / Mouse Drag handlers
  const onPointerDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    setDragStartX(clientX);
    setDragStartAngle(rotationAngle);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const deltaX = clientX - dragStartX;
    // Map pixels to rotation degrees
    const degPerPx = 0.35;
    const newAngle = dragStartAngle + deltaX * degPerPx;
    setRotationAngle(newAngle);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to closest milestone index
    const snappedIdx = Math.round(-rotationAngle / stepAngle);
    rotateToIndex(snappedIdx);
  };

  // Helper to calculate card's normalized orientation to viewer
  const getCardOrientation = (idx) => {
    const rawAngle = (idx * stepAngle + rotationAngle) % 360;
    const angle = ((rawAngle + 180) % 360) - 180; // normalize between -180 and +180
    const absAngle = Math.abs(angle);

    // Front card is when absAngle <= 36 degrees
    const isFront = absAngle <= 36;
    const isBack = absAngle > 110;

    let opacity = 1;
    let scale = 1;
    let zIndex = 20;

    if (isFront) {
      opacity = 1;
      scale = 1.04;
      zIndex = 30;
    } else if (isBack) {
      opacity = 0.35;
      scale = 0.85;
      zIndex = 5;
    } else {
      opacity = 0.75;
      scale = 0.94;
      zIndex = 15;
    }

    return { angle, isFront, isBack, opacity, scale, zIndex };
  };

  const currentItem = milestones[currentIndex];

  return (
    <div
      className={`relative select-none w-full py-8 ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 1. Header Mode Pill: Cylinder Carousel Indicator */}
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-rose-200 text-xs font-mono font-bold text-[#BE123C] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#BE123C] animate-ping" />
          <span>{t('3D CYLINDER CAROUSEL • 360° CLINICAL TIMELINE', '3डी सिलेंडर कैराउसेल • 360° क्लिनिकल टाइमलाइन')}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-xl bg-white/90 hover:bg-slate-100 border border-slate-200 text-[#0A1128] shadow-sm transition-all text-xs flex items-center gap-1.5 font-mono font-bold"
            title={isAutoPlaying ? "Pause Auto-Rotation" : "Resume Auto-Rotation"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#BE123C]" />
                <span className="hidden sm:inline">{t('Pause', 'पॉज')}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#0A1128]" />
                <span className="hidden sm:inline">{t('Play', 'प्ले')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Main 3D Cylinder Stage */}
      <div
        className="relative w-full h-[520px] sm:h-[560px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1300px',
          perspectiveOrigin: '50% 50%',
        }}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
      >
        {/* Floating Ambient Depth Ring in Stage Background */}
        <div
          className="absolute w-[450px] sm:w-[680px] h-[450px] sm:h-[680px] rounded-full border border-rose-300/30 pointer-events-none"
          style={{
            transform: 'rotateX(82deg)',
            transformOrigin: '50% 50%',
          }}
        >
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-rose-400/35 animate-radar-sweep" />
          <div className="absolute inset-16 rounded-full border border-rose-300/40" />
        </div>

        {/* The 3D Rotating Cylinder Axis */}
        <div
          className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[420px] sm:h-[460px] flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationAngle}deg)`,
            transition: isDragging ? 'none' : 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {milestones.map((m, idx) => {
            const cardAngle = idx * stepAngle;
            const IconComp = m.icon;
            const { isFront, isBack, opacity, scale, zIndex } = getCardOrientation(idx);

            return (
              <div
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isFront) rotateToIndex(idx);
                }}
                className={`absolute inset-0 rounded-[2.5rem] p-6 sm:p-8 backdrop-blur-2xl border-2 transition-all duration-500 flex flex-col justify-between text-left group shadow-2xl ${
                  isFront
                    ? `${m.borderAccent} bg-white/95 ring-4 ring-rose-400/20`
                    : 'border-slate-200/80 bg-white/80 hover:bg-white/90'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${cardAngle}deg) translateZ(${cylinderRadius}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: isBack ? 'none' : 'auto',
                  cursor: isFront ? 'default' : 'pointer',
                  boxShadow: isFront
                    ? `0 25px 60px -15px ${m.glowColor}, 0 0 30px rgba(190, 18, 60, 0.15)`
                    : '0 15px 35px -10px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Background Oversized Typographic Year Watermark */}
                <div className="absolute -top-3 -right-3 font-serif italic font-normal text-7xl sm:text-8xl text-slate-950/[0.04] select-none pointer-events-none group-hover:text-[#BE123C]/[0.08] transition-colors">
                  {m.year}
                </div>

                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#BE123C] bg-rose-50/90 px-3 py-1 rounded-full border border-rose-200 shadow-xs">
                      {m.phase} • {m.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-500">
                      {m.institution}
                    </span>
                  </div>

                  {/* Year Header & Icon Node */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white flex items-center justify-center shadow-lg shadow-navy/25 shrink-0">
                      <IconComp className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0A1128] block leading-none">
                        {m.year}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-500 block uppercase tracking-wider mt-0.5">
                        {t('Clinical Epoch', 'क्लिनिकल एपक')} #{m.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 group-hover:text-[#BE123C] transition-colors leading-snug tracking-tight">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                {/* Bottom Interactive Tags */}
                <div>
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {m.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Front Card Glowing Bottom Laser Line */}
                  {isFront && (
                    <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#BE123C] to-transparent rounded-b-[2.5rem] shadow-[0_0_12px_#E11D48]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Prev / Next Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Milestone"
          className="absolute left-2 sm:left-6 md:left-12 z-40 w-12 h-12 rounded-2xl bg-white/95 hover:bg-[#0A1128] hover:text-white border-2 border-slate-200 text-slate-800 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Milestone"
          className="absolute right-2 sm:right-6 md:right-12 z-40 w-12 h-12 rounded-2xl bg-white/95 hover:bg-[#0A1128] hover:text-white border-2 border-slate-200 text-slate-800 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 3. Bottom Year Pill Selector */}
      <div className="max-w-xl mx-auto px-4 mt-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {milestones.map((m, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => rotateToIndex(idx)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0A1128] via-[#1E293B] to-[#BE123C] text-white shadow-lg shadow-navy/25 scale-105 border-2 border-rose-300/40'
                    : 'bg-white/90 hover:bg-slate-100 text-slate-700 border-2 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{m.year}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
              </button>
            );
          })}
        </div>

        <div className="text-center mt-3">
          <span className="text-[11px] font-mono text-slate-500">
            {t('Drag horizontally or click years to rotate 3D Cylinder', 'ड्रैग हॉरिजॉन्टली ऑर क्लिक इयर्स टू रोटेट 3डी सिलेंडर')}
          </span>
        </div>
      </div>
    </div>
  );
}
