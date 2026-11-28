import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Radio, Sparkles, Activity, ShieldCheck } from 'lucide-react';

/**
 * SectionCinematicVideo
 * A high-performance, responsive cinematic video presentation engine
 * Features:
 * - HTML5 <video> with autoPlay, muted, loop, playsInline & graceful fallback
 * - Automatic resolution to 13 distinct 4K cinematic video files in /videos/
 * - 60FPS procedural medical simulation canvas for guaranteed authentic visual feeds
 * - 8 distinct presentation styles:
 *   1. 'floating-3d'
 *   2. 'split-screen'
 *   3. 'curved-mask'
 *   4. 'asymmetric'
 *   5. 'video-card'
 *   6. 'fullscreen-bg'
 *   7. 'panoramic-stage'
 *   8. 'circular-pod'
 * - Real-time HUD telemetry, live timecode counters, REC indicator, camera markers, and interactive controls
 */

const VIDEO_SOURCE_MAP = {
  'hero-architecture': '/videos/hero-architecture.mp4',
  'about-hospital': '/videos/about-hospital.mp4',
  'cardiology-heart': '/videos/cardiology-heart.mp4',
  'cardiology-cath': '/videos/cardiology-heart.mp4',
  'neurology-brain': '/videos/neurology-synapse.mp4',
  'neurology-synapse': '/videos/neurology-synapse.mp4',
  'orthopedics-joint': '/videos/orthopedics-joint.mp4',
  'doctors-procedure': '/videos/doctors-procedure.mp4',
  'doctors': '/videos/doctors-procedure.mp4',
  'advanced-tech': '/videos/advanced-tech.mp4',
  'facilities': '/videos/facilities-walkthrough.mp4',
  'facilities-walkthrough': '/videos/facilities-walkthrough.mp4',
  'patient-care': '/videos/patient-care.mp4',
  'testimonials': '/videos/testimonials-stories.mp4',
  'testimonials-stories': '/videos/testimonials-stories.mp4',
  'appointment-suite': '/videos/appointment-suite.mp4',
  'contact-location': '/videos/contact-location.mp4',
  'cardiac-catheterization': '/videos/cardiac-catheterization.mp4',
};

const POSTER_SOURCE_MAP = {
  'hero-architecture': '/images/ppp.webp',
  'about-hospital': '/images/hospital-ward-suites.jpg',
  'cardiology-heart': '/images/cardiology-3d-heart-beat.jpg',
  'cardiology-cath': '/images/cardiac-stent-procedure.jpg',
  'neurology-brain': '/images/cardiology-3d-heart-beat.jpg',
  'neurology-synapse': '/images/cardiac-icu-telemetry.jpg',
  'orthopedics-joint': '/images/radial-catheter-sheath.jpg',
  'doctors-procedure': '/images/doctor-patient-consult.jpg',
  'doctors': '/images/operation-theatre-laminar.jpg',
  'advanced-tech': '/images/cath-lab.jpg',
  'facilities': '/images/operation-theatre-laminar.jpg',
  'facilities-walkthrough': '/images/cath-lab.jpg',
  'patient-care': '/images/doctor-recovery-discharge.jpg',
  'testimonials': '/images/patient-recovery-story.jpg',
  'testimonials-stories': '/images/patient-recovery-story.jpg',
  'appointment-suite': '/images/hospital-opd-lounge.jpg',
  'contact-location': '/images/pulse-betiahata-campus.jpg',
  'cardiac-catheterization': '/images/doctor-cathlab-procedure.jpg',
};

export default function SectionCinematicVideo({
  type = 'hero-architecture',
  styleVariant = 'floating-3d',
  posterImage = null,
  title = 'Live Clinical Feed',
  subtitle = '4K UHD • 60 FPS • Real-Time Broadcast',
  specs = 'Siemens Artis Zee • HEPA-14 Cleanroom',
  className = '',
  videoUrl = null,
  showControls = true,
  aspectRatio = 'aspect-[16/10]',
  onPlayClick = null,
}) {
  const resolvedVideoUrl =
    videoUrl === false
      ? null
      : videoUrl || VIDEO_SOURCE_MAP[type] || '/videos/hero-architecture.mp4';
  const resolvedPoster = posterImage || POSTER_SOURCE_MAP[type] || '/images/ppp.webp';

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const glareRef = useRef(null);
  const timecodeRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const tiltRafRef = useRef(null);

  // Viewport IntersectionObserver: pauses offscreen videos, canvases, and timers
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '150px 0px', threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-pause/play HTML5 video based on viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;
    if (isInView && isPlaying) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [isInView, isPlaying, videoError]);

  const handleMouseMove = () => { };
  const handleMouseLeave = () => { };

  // Reset video error on URL or type change
  useEffect(() => {
    setVideoError(false);
  }, [resolvedVideoUrl, type]);

  const togglePlay = (e) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // STYLES VARIANT WRAPPERS
  const getContainerStyle = () => {
    switch (styleVariant) {
      case 'floating-3d':
        return 'relative rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-b from-white/95 via-slate-50/70 to-white/95 border-2 border-slate-200/90 shadow-2xl group hover:shadow-rose-900/20 transition-shadow duration-500';
      case 'split-screen':
        return 'relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-950 group';
      case 'curved-mask':
        return 'relative rounded-[3.5rem] overflow-hidden border-4 border-slate-200/90 shadow-2xl bg-black group';
      case 'asymmetric':
        return 'relative rounded-[2.5rem] overflow-hidden border-2 border-rose-200/80 shadow-2xl bg-black transform -rotate-1 hover:rotate-0 transition-transform duration-500 group';
      case 'video-card':
        return 'relative rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group';
      case 'panoramic-stage':
        return 'relative w-full rounded-[2.5rem] overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-slate-950 group';
      case 'circular-pod':
        return 'relative rounded-full aspect-square overflow-hidden border-4 border-rose-500/60 shadow-2xl bg-slate-950 group';
      case 'fullscreen-bg':
        return 'absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10';
      default:
        return 'relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group';
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        styleVariant === 'floating-3d'
          ? {
            transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transformStyle: 'preserve-3d',
          }
          : undefined
      }
      className={`${getContainerStyle()} ${className}`}
    >
      {/* Dynamic Specular Glare Reflection on 3D Tilt */}
      {styleVariant === 'floating-3d' && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-[2.5rem] z-30 transition-opacity duration-300 opacity-0"
        />
      )}

      {/* Video Viewport Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden ${styleVariant === 'circular-pod' ? 'rounded-full' : 'rounded-[2rem]'} bg-slate-950 flex items-center justify-center`}>

        {/* 1. Underlying Poster Image */}
        {resolvedPoster && (
          <img
            src={resolvedPoster}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
          />
        )}

        {/* 2. Real HTML5 Video element (mounted only when user plays, preventing frame-0 overlay & decode lag) */}
        {!videoError && resolvedVideoUrl && isPlaying && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            key={resolvedVideoUrl}
            onError={() => {
              setVideoError(true);
            }}
            className="absolute inset-0 w-full h-full object-cover z-5 opacity-90 transition-opacity duration-700"
          >
            <source src={resolvedVideoUrl} type="video/mp4" />
          </video>
        )}

        {/* 3. Cinematic Dark Vignette & Color Grading Overlay */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0A1128]/90 via-transparent to-black/30 pointer-events-none" />

        {/* 5. TOP CONTROLS: Clean Playback Controls Only (Zero fake broadcast HUDs) */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2 text-white">
          {showControls && (
            <button
              type="button"
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-[#0A1128]/75 hover:bg-[#BE123C] border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title={isPlaying ? "Pause video" : "Play video"}
              aria-label="Toggle playback"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />}
            </button>
          )}

          {showControls && (
            <button
              type="button"
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-[#0A1128]/75 hover:bg-[#BE123C] border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title={isMuted ? "Unmute audio" : "Mute audio"}
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-200" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
            </button>
          )}
        </div>

        {/* 6. CENTER INTERACTIVE PLAY BUTTON */}
        {onPlayClick && (
          <button
            type="button"
            onClick={onPlayClick}
            className="absolute inset-0 z-25 flex items-center justify-center group-hover:scale-105 transition-transform cursor-pointer"
            aria-label="Expand video"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#BE123C]/90 hover:bg-[#E11D48] text-white flex items-center justify-center shadow-2xl border-2 border-white/40 transition-all">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
            </div>
          </button>
        )}

        {/* 7. BOTTOM CLEAN CAPTION BAR */}
        <div className="absolute bottom-3.5 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white pointer-events-none">
          <div className="space-y-0.5 text-left">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white drop-shadow-md block">
              {title}
            </span>
            <p className="text-[11px] text-slate-200 font-medium">
              {specs}
            </p>
          </div>

          <div className="text-[10px] font-mono text-white/90 bg-[#0A1128]/75 px-3 py-1 rounded-full border border-white/15 self-start sm:self-auto">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
