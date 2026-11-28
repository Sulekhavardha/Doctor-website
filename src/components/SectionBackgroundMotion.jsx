import React from 'react';

/**
 * SectionBackgroundMotion
 * World-Class Luxury International Healthcare Background Design System
 * 
 * Every section across every page features its own distinctive background treatment,
 * visual composition, layout, color harmony, and design identity.
 * 
 * Palette:
 * - Soft blush pink (#FFF0F3, #FCE7F3, #FFE4E6, #FDA4AF)
 * - Warm ivory and pearl white (#FDFBF7, #FAF7F2, #FCF9F2, #FAF5EE)
 * - Muted coral and peach (#FFF3EB, #FFEDD5, #FB923C, #F97316)
 * - Premium lavender (#F5F3FF, #EDE9FE, #DDD6FE, #8B5CF6)
 * - Soft champagne (#FAF5EE, #F7EFE2, #E2D9C8, #D4AF37)
 * - Medical blue & cyan accents (#0284C7, #0EA5E9, #38BDF8, #E0F2FE)
 * - Subtle teal (#0D9488, #14B8A6, #2DD4BF, #CCFBF1)
 * - High-contrast text legibility: foreground text is 100% crisp & unhampered.
 */
export default function SectionBackgroundMotion({
  variant = 'hero',
  className = '',
}) {
  const isHeroVariant =
    variant === 'hero' ||
    variant === 'home-hero' ||
    variant === 'treatments-hero' ||
    variant === 'hospital-hero' ||
    variant === 'contact-hero';

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
      data-hero-motion={isHeroVariant ? 'true' : undefined}
    >
      {/* =========================================================================
          PAGE 1: HOME SECTIONS
         ========================================================================= */}

      {/* 1.1 HOME HERO: Deep Midnight Navy & Crimson Ruby Architectural Citadel */}
      {(variant === 'hero' || variant === 'home-hero' || variant === 'default') && (
        <>
          {/* Rich Warm Ivory -> Soft Blush -> Platinum Silk Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#FFF1F3] to-[#EAEFF8]" />

          {/* Visibly Moving Ambient Silk Auras (GPU-free radial gradients) */}
          <div
            className="absolute -top-28 -left-24 w-[700px] h-[700px] rounded-full animate-float-1 will-change-transform"
            style={{ background: 'radial-gradient(circle, rgba(10,17,40,0.15) 0%, rgba(30,41,59,0.06) 45%, transparent 72%)' }}
          />
          <div
            className="absolute -top-16 right-0 w-[680px] h-[680px] rounded-full animate-float-2 will-change-transform"
            style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.18) 0%, rgba(190,18,60,0.07) 45%, transparent 72%)' }}
          />
          <div
            className="absolute -bottom-24 left-1/3 w-[680px] h-[680px] rounded-full animate-aurora-breathe will-change-transform"
            style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.14) 0%, rgba(10,17,40,0.07) 45%, transparent 72%)' }}
          />

          {/* Subtle Medical ECG Graph Grid */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_90%_80%_at_50%_45%,#000_65%,transparent_100%)]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(10,17,40,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,17,40,0.045) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Flowing Layered Silk Ribbons & Arterial Curves (GPU-Smooth Wave Drift) */}
          <div className="absolute -inset-x-8 inset-y-0 pointer-events-none animate-hero-ribbon-drift">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 900"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heroMotionFill1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0A1128" stopOpacity="0.06" />
                  <stop offset="50%" stopColor="#BE123C" stopOpacity="0.11" />
                  <stop offset="100%" stopColor="#E11D48" stopOpacity="0.04" />
                </linearGradient>
              </defs>
              <path
                d="M-60,610 C320,460 700,720 1120,510 C1300,420 1420,480 1500,440 L1500,900 L-60,900 Z"
                fill="url(#heroMotionFill1)"
              />
              <path
                d="M-60,590 C320,440 700,700 1120,490 C1300,400 1420,460 1500,420"
                stroke="#BE123C"
                strokeOpacity="0.45"
                strokeWidth="2.4"
                strokeDasharray="16 10"
                className="animate-flow-dash"
              />
              <path
                d="M-60,660 C360,530 740,760 1160,570 C1340,490 1440,540 1500,510"
                stroke="#0A1128"
                strokeOpacity="0.28"
                strokeWidth="1.8"
                strokeDasharray="12 10"
                className="animate-flow-dash-fast"
              />
            </svg>
          </div>

          {/* Subtle Rotating Medical Orbital Rings Behind Right Portrait */}
          <div className="absolute top-1/2 right-[-40px] lg:right-[8%] -translate-y-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] rounded-full border border-rose-200/60 pointer-events-none opacity-75 lg:opacity-100">
            <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-dashed border-[#BE123C]/30 animate-gentle-cw" />
            <div className="absolute inset-10 sm:inset-16 rounded-full border border-dashed border-[#0A1128]/20 animate-hero-ring-ccw" />
          </div>

          {/* Floating Medical Cross (+) Accents in Outer Margins */}
          <div className="absolute top-24 sm:top-32 left-4 sm:left-8 text-[#BE123C]/55 font-mono text-lg sm:text-xl font-bold animate-float-1 select-none pointer-events-none">+</div>
          <div className="absolute bottom-28 sm:bottom-36 left-8 sm:left-12 text-[#0A1128]/45 font-mono text-base sm:text-lg font-bold animate-float-2 select-none pointer-events-none">+</div>
          <div className="absolute top-28 sm:top-36 right-5 sm:right-10 text-[#BE123C]/50 font-mono text-lg sm:text-xl font-bold animate-float-2 select-none pointer-events-none">+</div>

          {/* Bottom ECG Heartbeat Rhythm Line + GPU-Smooth Sweeping Pulse Light */}
          <div className="absolute inset-x-0 bottom-2 sm:bottom-1 h-20 sm:h-24 pointer-events-none overflow-hidden">
            {/* Mobile-proportioned ECG line (prevents horizontal squishing on narrow screens) */}
            <svg
              className="w-full h-full opacity-85 sm:hidden"
              viewBox="0 0 400 80"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M0,48 L70,48 L82,48 L92,30 L102,68 L114,12 L126,58 L136,48 L220,48 L232,48 L242,30 L252,68 L264,12 L276,58 L286,48 L400,48"
                stroke="#BE123C"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="14 6"
                className="animate-flow-dash-fast"
              />
            </svg>
            {/* Desktop/Tablet ECG line */}
            <svg
              className="hidden sm:block w-full h-full opacity-65"
              viewBox="0 0 1440 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0,65 L320,65 L335,65 L345,40 L358,90 L372,18 L385,78 L395,65 L780,65 L795,65 L805,40 L818,90 L832,18 L845,78 L855,65 L1440,65"
                stroke="#BE123C"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="18 8"
                className="animate-flow-dash-fast"
              />
            </svg>
            <div
              className="absolute inset-y-0 left-0 w-52 animate-hero-ecg-sweep pointer-events-none flex items-center justify-center"
              style={{ background: 'radial-gradient(ellipse at center, rgba(225,29,72,0.34) 0%, transparent 70%)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] shadow-[0_0_12px_#E11D48] translate-y-4" />
            </div>
          </div>
        </>
      )}

      {/* 1.2 HOME CLINICIAN MONOGRAPH: Deep Midnight Navy & Crimson Ruby Editorial Dossier */}
      {(variant === 'home-monograph' || variant === 'doctor-monograph') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Luminous Deep Midnight Navy & Crimson Ruby Specular Orbs */}
          <div className="absolute top-12 left-1/4 w-[620px] h-[620px] bg-gradient-to-br from-[#0A1128]/15 via-[#1E293B]/10 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 right-1/4 w-[580px] h-[580px] bg-gradient-to-tl from-[#E11D48]/18 via-[#BE123C]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Acoustic Stethoscope Sonar Radar Concentric Waves (Radiating from Left Column) */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-slate-300/40 hidden lg:block pointer-events-none">
            <div className="absolute inset-10 rounded-full border border-rose-300/35 animate-sonar-ping" />
            <div className="absolute inset-24 rounded-full border border-slate-400/25 animate-sonar-ping-delayed" />
            <div className="absolute inset-40 rounded-full border-2 border-dashed border-[#BE123C]/35 animate-radar-sweep" />
            <div className="absolute inset-56 rounded-full border border-slate-300/50 flex items-center justify-center">
              <span className="text-[9px] font-mono font-bold text-[#BE123C] uppercase tracking-widest bg-white/95 px-3 py-1 rounded-full border border-rose-200 shadow-xs">
                ACOUSTIC PHONOCARDIOGRAM
              </span>
            </div>
          </div>

          {/* Subtle Latin & English Clinical Monograph Watermark */}
          <div className="absolute top-20 right-8 text-right font-serif italic text-slate-900/[0.04] text-8xl lg:text-9xl select-none pointer-events-none leading-none hidden md:block">
            Devotio <br /> Medica
          </div>

          {/* Micro-Cross Matrix Grid in Deep Navy */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.16]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="monographCrossGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 20 15 L 20 25 M 15 20 L 25 20" stroke="#0A1128" strokeWidth="1" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#monographCrossGrid)" />
          </svg>

          {/* Sweeping Crimson Ruby Laser Line across Section Top */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E11D48]/60 to-transparent shadow-[0_0_14px_#BE123C]" />
        </>
      )}

      {/* 1.3 HOME CARDIOLOGY SHOWCASE: Crimson Ruby Hemodynamic Revascularization & Deep Navy Stage */}
      {(variant === 'home-cardiology' || variant === 'cardiology-showcase') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FFF1F2]/60 to-[#F8FAFC]" />
          
          {/* Arterial Crimson & Deep Midnight Navy Atmospheric Glows */}
          <div className="absolute -top-24 right-10 w-[660px] h-[660px] bg-gradient-to-bl from-[#E11D48]/20 via-[#BE123C]/14 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-0 left-12 w-[620px] h-[620px] bg-gradient-to-tr from-[#0A1128]/16 via-[#1E293B]/10 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Micro-Vascular Capillary Tree Network SVG */}
          <div className="absolute inset-0 w-full h-full opacity-35 pointer-events-none animate-vascular-breathe">
            <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
              <path
                d="M 100,500 C 300,420 500,600 720,480 C 940,360 1100,540 1350,420 M 720,480 C 800,320 860,250 940,180 M 720,480 C 780,620 880,720 980,800 M 300,420 C 380,300 450,220 520,160 M 1100,540 C 1180,640 1260,700 1380,760"
                stroke="#E11D48"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="8 8"
                className="animate-flow-dash"
              />
              <path
                d="M 150,460 C 350,380 550,560 760,450 C 980,340 1150,510 1400,390"
                stroke="#0A1128"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="6 6"
                className="animate-flow-dash"
              />
            </svg>
          </div>

          {/* Dual Counter-Rotating Biometric HUD Dials */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-slate-300/40 hidden lg:block">
            <div className="absolute inset-10 rounded-full border-2 border-dashed border-rose-400/40 animate-radar-sweep" />
            <div className="absolute inset-24 rounded-full border border-slate-400/30 animate-reticle-slow" />
            <div className="absolute inset-40 rounded-full border-2 border-dashed border-[#BE123C]/40 animate-reticle-reverse-slow" />
            <div className="absolute inset-56 rounded-full border border-slate-300 flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-[#BE123C] bg-white/95 px-3 py-1 rounded-full border border-rose-200 shadow-xs">
                TIMI-3 PERFUSION
              </span>
            </div>
          </div>
        </>
      )}

      {/* 1.4 HOME CLINICAL SPECIALTIES: Subtle Arterial Flow Curves & ECG Graph Paper */}
      {(variant === 'home-specialties' || variant === 'specialties-showcase') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          <div
            className="absolute top-0 right-1/4 w-[680px] h-[680px] rounded-full opacity-60 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(10,17,40,0.08) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[620px] h-[620px] rounded-full opacity-60 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.08) 0%, transparent 70%)' }}
          />
          {/* Subtle Medical Graph Paper */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(10,17,40,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,17,40,0.035) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
          {/* Smooth Arterial Curves */}
          <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
            <path d="M-80,540 C360,420 720,660 1180,460 C1340,390 1460,440 1520,410" stroke="#BE123C" strokeWidth="1.8" strokeDasharray="10 10" className="animate-flow-dash" />
            <path d="M-80,620 C380,510 740,720 1200,540 C1360,480 1460,520 1520,500" stroke="#0A1128" strokeWidth="1.4" strokeDasharray="8 12" className="animate-flow-dash-fast" />
          </svg>
        </>
      )}

      {/* 1.5 HOME MEDICAL TECHNOLOGY: Siemens Cleanroom Fluoroscopy & Cyan/Ruby Laser Calibration Sweeps */}
      {(variant === 'home-technology' || variant === 'technology-showcase') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/80 to-[#FAF9F6]" />
          
          {/* Midnight Navy & Crimson Ruby Depth Glows */}
          <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-[#0A1128]/16 via-[#1E293B]/10 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 left-10 w-[620px] h-[620px] bg-gradient-to-tr from-[#E11D48]/18 via-[#BE123C]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Sub-Millimeter Cleanroom Isometric Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A11280C_1px,transparent_1px),linear-gradient(to_bottom,#0A11280C_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_75%,transparent_100%)] pointer-events-none" />

          {/* Siemens Artis Zee Rotating Collimator Reticle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-slate-300/40 hidden md:block pointer-events-none">
            <div className="absolute inset-12 rounded-full border-2 border-dashed border-rose-400/40 animate-reticle-slow" />
            <div className="absolute inset-28 rounded-full border border-slate-400/35 flex items-center justify-center animate-reticle-reverse-slow">
              <div className="w-full h-px bg-rose-400/40" />
              <div className="h-full w-px bg-rose-400/40 absolute" />
              <div className="w-5 h-5 rounded-full bg-[#BE123C] animate-ping" />
            </div>
            {/* Degree Calibration Marks */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold text-[#0A1128]">000°</div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[9px] font-bold text-[#BE123C]">090°</div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold text-[#0A1128]">180°</div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-[9px] font-bold text-[#BE123C]">270°</div>
          </div>

          {/* Horizontal Crimson Calibration Laser Beam */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_12px_#BE123C] opacity-40 pointer-events-none" />
        </>
      )}

      {/* 1.6 HOME TREATMENT STORYTELLING: Asymmetric Circadian Recovery Trajectory */}
      {(variant === 'home-storytelling' || variant === 'treatment-storytelling') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Deep Navy & Crimson Ruby Specular Glows */}
          <div className="absolute -top-24 right-10 w-[660px] h-[660px] bg-gradient-to-bl from-[#0A1128]/16 via-[#1E293B]/10 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-0 left-10 w-[620px] h-[620px] bg-gradient-to-tr from-[#E11D48]/18 via-[#BE123C]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Circadian Recovery Trajectory Flowing Curve */}
          <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 1440 900" fill="none">
            <path
              d="M-50,380 C320,240 600,520 950,340 C1220,200 1380,360 1500,280"
              stroke="#BE123C"
              strokeWidth="3"
              strokeDasharray="14 14"
              className="animate-flow-dash"
            />
            <path
              d="M-50,460 C340,320 630,580 980,410 C1250,280 1400,420 1500,350"
              stroke="#0A1128"
              strokeWidth="2"
              strokeDasharray="10 10"
              className="animate-flow-dash"
            />
          </svg>

          {/* Floating Time Markers */}
          <div className="absolute top-1/4 left-1/4 px-3 py-1 rounded-full bg-white/95 border border-slate-200 text-[10px] font-mono font-bold text-[#0A1128] shadow-xs hidden sm:block">
            T-0: RADIAL SHEATH
          </div>
          <div className="absolute top-1/2 left-1/2 px-3 py-1 rounded-full bg-white/95 border border-rose-200 text-[10px] font-mono font-bold text-[#BE123C] shadow-xs hidden sm:block">
            T+2H: SAFE AMBULATION
          </div>
          <div className="absolute bottom-1/4 right-1/4 px-3 py-1 rounded-full bg-white/95 border border-slate-200 text-[10px] font-mono font-bold text-[#0A1128] shadow-xs hidden sm:block">
            T+24H: DISCHARGE HOME
          </div>
        </>
      )}

      {/* 1.7 HOME CREDENTIALS: Apex Institute Heraldry in Deep Navy & Crimson Ruby */}
      {(variant === 'home-credentials' || variant === 'credentials-editorial') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Midnight Navy & Crimson Ruby Spotlights */}
          <div className="absolute -top-24 right-1/4 w-[680px] h-[680px] bg-gradient-to-bl from-[#0A1128]/16 via-[#1E293B]/10 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute -bottom-24 left-1/4 w-[620px] h-[620px] bg-gradient-to-tr from-[#E11D48]/18 via-[#BE123C]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Concentric Caliper Circles with Slow Dual Rotation */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-slate-300/40 hidden lg:block">
            <div className="absolute inset-8 rounded-full border border-dashed border-rose-400/40 animate-radar-sweep" />
            <div className="absolute inset-20 rounded-full border border-slate-400/30 flex items-center justify-center animate-reticle-reverse-slow">
              <span className="text-[10px] font-mono text-[#0A1128] font-bold bg-white/95 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
                APEX INSTITUTIONAL PEDIGREE · PGIMER &amp; KGMU
              </span>
            </div>
          </div>
        </>
      )}

      {/* 1.8 HOME ARCHITECTURAL GALLERY: Hospital Floorplan Elevation Grid */}
      {(variant === 'home-gallery' || variant === 'architectural-gallery') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          <div
            className="absolute top-1/4 right-1/4 w-[680px] h-[680px] rounded-full opacity-55 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(10,17,40,0.08) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-10 w-[620px] h-[620px] rounded-full opacity-55 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.08) 0%, transparent 70%)' }}
          />
          {/* Subtle Architectural Hospital Blueprint Grid */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(10,17,40,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,17,40,0.035) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
            <path d="M0,180 Q720,340 1440,180" stroke="#0A1128" strokeWidth="1.5" strokeDasharray="8 10" />
            <path d="M0,640 Q720,500 1440,640" stroke="#BE123C" strokeWidth="1.5" strokeDasharray="8 10" />
          </svg>
        </>
      )}

      {/* 1.9 HOME PATIENT TESTIMONIALS: Soft Rose-Silk Wash & Heartbeat Baseline */}
      {(variant === 'home-testimonials' || variant === 'patient-testimonials') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FFF5F6]/70 to-[#F8FAFC]" />
          <div
            className="absolute top-1/3 left-1/4 w-[640px] h-[640px] rounded-full opacity-60 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(190,18,60,0.09) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-55 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(10,17,40,0.08) 0%, transparent 70%)' }}
          />

          {/* Soft Heartbeat Waveform across bottom */}
          <div className="absolute bottom-4 left-0 right-0 z-0 opacity-40 pointer-events-none">
            <svg className="w-full h-16" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
              <path
                d="M0,30 L400,30 L420,30 L430,10 L445,50 L460,5 L475,45 L485,30 L540,30 L800,30 L820,30 L830,10 L845,50 L860,5 L875,45 L885,30 L1440,30"
                stroke="#E11D48"
                strokeWidth="2"
                strokeDasharray="400"
                className="animate-flow-dash"
              />
            </svg>
          </div>
        </>
      )}

      {/* 1.10 HOME APPOINTMENT PASS: Deep Midnight Navy & Crimson Ruby Priority Pass */}
      {(variant === 'home-appointment' || variant === 'appointment-suite') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          <div className="absolute -top-24 left-1/3 w-[680px] h-[680px] bg-gradient-to-br from-[#0A1128]/16 via-[#1E293B]/10 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-0 right-10 w-[620px] h-[620px] bg-gradient-to-tl from-[#E11D48]/18 via-[#BE123C]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Laser Edge Sweep in Crimson Ruby */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_12px_#BE123C] opacity-40 pointer-events-none" />
        </>
      )}


      {/* =========================================================================
          PAGE 2: ABOUT SECTIONS
         ========================================================================= */}

      {/* 2.1 ABOUT HERO: Biographical Retrospective & Acoustic Stethoscope Sonar Canvas */}
      {(variant === 'about-hero' || variant === 'about') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7F4] via-[#FAF4EE] to-[#FFF1F4]" />
          <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-gradient-to-br from-[#FED7AA]/35 via-[#FCE7F3]/25 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 right-1/4 w-[580px] h-[580px] bg-gradient-to-tl from-[#FDA4AF]/25 via-[#FFEDD5]/30 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />
          <div className="absolute top-1/2 right-10 w-[480px] h-[480px] bg-gradient-to-tr from-[#FB923C]/18 via-[#FDA4AF]/20 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-3" />

          {/* Blueprint Architectural Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#E8C5B8_1.2px,transparent_1.2px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_35%,#000_80%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#EA580C12_1px,transparent_1px),linear-gradient(to_bottom,#EA580C12_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_75%,transparent_100%)] pointer-events-none" />

          {/* Sweeping Fluoroscopy Laser Beam */}
          <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#EA580C] to-transparent shadow-[0_0_20px_#FB923C] opacity-45 animate-laser-sweep pointer-events-none" />

          {/* Layered Flowing Waves */}
          <div className="absolute inset-0 w-full h-full animate-wave-flow">
            <svg className="w-full h-full opacity-40" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="aboutWaveGrad1" x1="0%" y1="0%" x2="100%" y2="80%">
                  <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#FDA4AF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.18" />
                </linearGradient>
              </defs>
              <path
                d="M-50,220 C240,120 480,360 840,240 C1140,140 1340,310 1500,200 L1500,900 L-50,900 Z"
                fill="url(#aboutWaveGrad1)"
              />
            </svg>
          </div>

          {/* Rotating Biometric Telemetry & Acoustic Stethoscope Radar Rings */}
          <div className="absolute top-1/2 right-[-50px] lg:right-6 -translate-y-1/2 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] lg:w-[580px] lg:h-[580px] rounded-full border border-orange-300/35 pointer-events-none opacity-70 lg:opacity-100">
            <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-dashed border-orange-400/35 animate-radar-sweep" />
            <div className="absolute inset-12 sm:inset-20 rounded-full border border-rose-300/35 flex items-center justify-center animate-rotate-reverse">
              <div className="w-full h-px bg-orange-300/40" />
              <div className="h-full w-px bg-orange-300/40 absolute" />
              <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#EA580C] animate-ping" />
            </div>
            <div className="absolute inset-20 sm:inset-36 rounded-full border-2 border-dashed border-peach-400/40 animate-gentle-cw" />
          </div>

          {/* ECG Sinus Wave along bottom */}
          <div className="absolute bottom-4 left-0 right-0 z-0 opacity-90 pointer-events-none">
            <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="aboutEcgFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FB923C" stopOpacity="0.4" />
                  <stop offset="35%" stopColor="#EA580C" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#FB923C" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FDA4AF" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 L260,50 L280,50 L290,25 L305,80 L320,8 L335,70 L345,50 L400,50 L640,50 L660,50 L670,20 L685,82 L700,6 L715,72 L725,50 L780,50 L1020,50 L1040,50 L1050,25 L1065,80 L1080,8 L1095,70 L1105,50 L1440,50"
                stroke="url(#aboutEcgFlow)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="600"
                className="animate-flow-dash"
              />
              <circle cx="320" cy="8" r="5.5" fill="#EA580C" className="animate-ping" />
              <circle cx="700" cy="6" r="5.5" fill="#FB923C" className="animate-ping" />
              <circle cx="1080" cy="8" r="5.5" fill="#EA580C" className="animate-ping" />
            </svg>
          </div>
        </>
      )}

      {/* 2.2 ABOUT VIDEO THEATER: Cinematic Documentary Auditorium & Ambient Horizon Stage */}
      {variant === 'about-video' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EE] via-[#FFFDF9] to-[#FDF6ED]" />
          
          {/* Cinema-Grade Ambient Horizon Flare */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#FED7AA]/30 via-[#FDA4AF]/25 to-[#EDE9FE]/20 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform pointer-events-none animate-aurora-breathe" />

          {/* Amphitheater Contour Arcs */}
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 1440 800" fill="none">
            <circle cx="720" cy="900" r="450" stroke="#C2A266" strokeWidth="1.5" strokeDasharray="6 8" />
            <circle cx="720" cy="900" r="600" stroke="#E5B9AB" strokeWidth="1.2" strokeDasharray="8 10" />
            <circle cx="720" cy="900" r="750" stroke="#C27866" strokeWidth="1" />
          </svg>
        </>
      )}

      {/* 2.3 ABOUT PILLARS: Four Monoliths of Trust & Sculptural Fluted Columns */}
      {variant === 'about-pillars' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDFB] via-[#FFF5EE]/60 to-[#FFF8F5]" />
          
          {/* Vertical Architectural Fluting / Sculptural Ribs */}
          <div className="absolute inset-0 w-full h-full opacity-25 pointer-events-none animate-fluted-shimmer">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pillarFlutedLines" width="60" height="100" patternUnits="userSpaceOnUse">
                  <line x1="15" y1="0" x2="15" y2="100" stroke="#EA580C" strokeWidth="1.2" strokeDasharray="8 8" />
                  <line x1="45" y1="0" x2="45" y2="100" stroke="#FED7AA" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pillarFlutedLines)" />
            </svg>
          </div>

          {/* Embossed Geometric Crosses in Peach */}
          <div className="absolute top-16 left-1/4 text-[#EA580C]/35 font-mono text-sm font-bold animate-medical-cross-1">+</div>
          <div className="absolute bottom-20 right-1/4 text-[#EA580C]/35 font-mono text-sm font-bold animate-medical-cross-2">+</div>
          <div className="absolute top-1/2 right-10 text-[#EA580C]/30 font-mono text-xs font-bold">+</div>

          {/* Soft Amber Atmospheric Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FED7AA]/22 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform" />
        </>
      )}

      {/* 2.4 ABOUT CHRONOLOGY: Deep Midnight Navy & Crimson Ruby Temporal Pathway */}
      {variant === 'about-milestones' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

          {/* Floating Luminous Orbs */}
          <div className="absolute top-10 right-1/4 w-[620px] h-[620px] bg-gradient-to-bl from-[#0A1128]/16 via-[#1E293B]/10 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#E11D48]/18 via-[#BE123C]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />
          <div className="absolute top-1/2 left-1/3 w-[460px] h-[460px] bg-[#CBD5E1]/25 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-3" />

          {/* Millimeter Medical Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0A112814_1.5px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_95%_85%_at_50%_40%,#000_80%,transparent_100%)] opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A11280A_1px,transparent_1px),linear-gradient(to_bottom,#0A11280A_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

          {/* Sweeping Fluoroscopy Scanning Laser Beam */}
          <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_24px_#BE123C] opacity-75 animate-laser-sweep pointer-events-none" />

          {/* Left Side Diagnostic Stethoscope Radar Sweep */}
          <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-2 border-slate-300/40 pointer-events-none hidden lg:block">
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-rose-400/40 animate-radar-sweep" />
            <div className="absolute inset-20 rounded-full border border-slate-400/30 animate-gentle-cw">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-rose-400/40" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-rose-400/40" />
            </div>
            <div className="absolute inset-32 rounded-full border-2 border-slate-300/45 animate-pulse-glow" />
            <div className="absolute inset-44 rounded-full bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 shadow-md flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#E11D48] animate-ping opacity-80" />
            </div>
          </div>

          {/* Right Side Rotating Biometric Reticle */}
          <div className="absolute top-2/3 -right-20 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-slate-300/40 pointer-events-none hidden lg:block">
            <div className="absolute inset-10 rounded-full border-2 border-dashed border-rose-400/40 animate-rotate-reverse" />
            <div className="absolute inset-24 rounded-full border border-slate-400/30 animate-radar-sweep" />
            <div className="absolute inset-36 rounded-full border-2 border-slate-300/50 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#BE123C] animate-ping" />
            </div>
          </div>

          {/* Flowing Chrono-Spine Hemodynamic Streamlines */}
          <svg className="absolute inset-0 w-full h-full opacity-65 pointer-events-none" viewBox="0 0 1440 900" fill="none">
            <path
              d="M 200,0 Q 150,225 220,450 Q 280,675 200,900"
              stroke="#0A1128"
              strokeWidth="2.5"
              strokeDasharray="14 10"
              className="animate-flow-dash"
            />
            <path
              d="M 1240,0 Q 1290,225 1220,450 Q 1160,675 1240,900"
              stroke="#BE123C"
              strokeWidth="2.5"
              strokeDasharray="14 10"
              className="animate-flow-dash-fast"
            />
            <path
              d="M 720,0 Q 760,225 720,450 Q 680,675 720,900"
              stroke="#E11D48"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Floating Clinical Telemetry HUD Chips */}

          <div className="absolute top-20 right-6 sm:right-12 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md animate-float-2 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0A1128] animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-800">
              PGIMER DM • 15,000+ Cath Interventions
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-[#0A1128] font-bold border border-slate-300">
              APEX
            </span>
          </div>

          <div className="absolute bottom-24 left-8 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm animate-float-3 z-10">
            <span className="text-[11px] font-mono font-bold text-slate-700">
              Betiahata, Gorakhpur • Artis Zee Cath Lab Active
            </span>
          </div>

          {/* Floating Medical Crosses (+) & Sparkles (✦) */}
          <div className="absolute top-1/4 left-8 text-[#0A1128] font-mono text-2xl font-black animate-medical-cross-1 select-none opacity-80">+</div>
          <div className="absolute top-1/3 right-16 text-[#BE123C] font-mono text-2xl font-black animate-medical-cross-2 select-none opacity-80">+</div>
          <div className="absolute bottom-1/3 left-14 text-[#0A1128] font-mono text-xl font-black animate-medical-cross-2 select-none opacity-70">+</div>
          <div className="absolute bottom-20 right-20 text-[#BE123C] font-mono text-2xl font-black animate-medical-cross-1 select-none opacity-80">+</div>
          <div className="absolute top-1/2 left-20 text-[#BE123C] text-lg animate-float-bob">✦</div>
          <div className="absolute top-2/3 right-12 text-[#0A1128] text-lg animate-float-1">✦</div>

          {/* Continuous Moving ECG Sinus Wave along bottom */}
          <div className="absolute bottom-2 left-0 right-0 z-0 opacity-90 pointer-events-none">
            <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chronoEcgRubyNavyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0A1128" stopOpacity="0.5" />
                  <stop offset="30%" stopColor="#E11D48" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#BE123C" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0A1128" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 L260,50 L280,50 L290,25 L305,80 L320,8 L335,70 L345,50 L400,50 L640,50 L660,50 L670,20 L685,82 L700,6 L715,72 L725,50 L780,50 L1020,50 L1040,50 L1050,25 L1065,80 L1080,8 L1095,70 L1105,50 L1440,50"
                stroke="url(#chronoEcgRubyNavyGrad)"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="600"
                className="animate-flow-dash"
              />
              <circle cx="320" cy="8" r="6" fill="#E11D48" className="animate-ping" />
              <circle cx="700" cy="6" r="6" fill="#BE123C" className="animate-ping" />
              <circle cx="1080" cy="8" r="6" fill="#0A1128" className="animate-ping" />
            </svg>
          </div>
        </>
      )}

      {/* 2.5 ABOUT CTA: Deep Midnight Navy & Crimson Ruby Solarium Pavilion */}
      {variant === 'about-cta' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FFF1F2]/60 to-[#F8FAFC]" />

          {/* Sweeping Fluoroscopy Laser Beam */}
          <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_20px_#BE123C] opacity-75 animate-laser-sweep pointer-events-none" />

          {/* Concentric Pulsing Radiant Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-2 border-slate-300/40 pointer-events-none">
            <div className="absolute inset-12 rounded-full border-2 border-dashed border-rose-300/45 animate-radar-sweep" />
            <div className="absolute inset-28 rounded-full border-2 border-slate-300/45 animate-pulse-glow" />
            <div className="absolute inset-44 rounded-full border border-rose-400/40 animate-gentle-cw" />
          </div>

          {/* Floating Medical Crosses (+) */}
          <div className="absolute top-1/3 left-12 text-[#0A1128] font-mono text-2xl font-black animate-medical-cross-1 select-none opacity-80">+</div>
          <div className="absolute top-1/4 right-16 text-[#BE123C] font-mono text-2xl font-black animate-medical-cross-2 select-none opacity-80">+</div>
          <div className="absolute bottom-1/4 left-16 text-[#0A1128] font-mono text-2xl font-black animate-medical-cross-2 select-none opacity-80">+</div>
          <div className="absolute bottom-1/3 right-14 text-[#BE123C] font-mono text-xl font-black animate-medical-cross-1 select-none opacity-70">+</div>

          {/* Deep Navy & Ruby Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-[#0A1128]/14 to-[#BE123C]/16 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform" />
        </>
      )}


      {/* =========================================================================
          PAGE 3: TREATMENTS SECTIONS
         ========================================================================= */}

      {/* 3.1 TREATMENTS HERO: Interventional Catheterization Theater & Fluoroscopic Rayfield */}
      {variant === 'treatments-hero' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Luminous Floating Atmospheric Orbs */}
          <div className="absolute -top-20 right-1/4 w-[680px] h-[680px] bg-gradient-to-bl from-[#0A1128]/20 via-[#1E293B]/14 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 left-10 w-[620px] h-[620px] bg-gradient-to-tr from-[#E11D48]/24 via-[#BE123C]/16 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Fluoroscopic Cone-Beam Rayfield (C-Arm Ray Projection) */}
          <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
              <defs>
                <linearGradient id="fluoroscopyConeRuby" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#BE123C" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0A1128" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path d="M 720,0 L 200,900 L 1240,900 Z" fill="url(#fluoroscopyConeRuby)" />
              {/* Radial Guidewire Tracks */}
              <path d="M 720,0 L 500,900 M 720,0 L 940,900" stroke="#BE123C" strokeWidth="1.5" strokeDasharray="10 10" className="animate-flow-dash" />
            </svg>
          </div>

          {/* Sweeping Laser Line in Crimson Ruby */}
          <div className="absolute left-0 right-0 h-[2.5px] top-1/3 bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_20px_#BE123C] opacity-80 animate-laser-fast" />

          {/* Precision Blueprint Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0A112814_1.5px,transparent_1.5px)] bg-[size:28px_28px] opacity-70" />
        </>
      )}

      {/* 3.2 TREATMENTS SPECIALTIES: 3D Hemodynamic Arterial Field & Gyroscopic Stent Axis (SCREENSHOT 1 OVERHAUL) */}
      {variant === 'treatments-specialties' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Deep Navy & Crimson Ruby Luminous Motion Orbs */}
          <div className="absolute top-10 left-1/4 w-[680px] h-[680px] bg-gradient-to-bl from-[#0A1128]/22 via-[#1E293B]/14 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 right-1/4 w-[620px] h-[620px] bg-gradient-to-tr from-[#E11D48]/26 via-[#BE123C]/18 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />
          <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-gradient-to-br from-[#CBD5E1]/30 via-transparent to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-pulse-glow" />

          {/* 3D Rotating Gyroscopic Stent Axis Ring (Continuous Visual Drama) */}
          <div className="absolute top-1/2 left-[-40px] lg:left-10 -translate-y-1/2 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px] rounded-full border-2 border-slate-300/40 pointer-events-none opacity-70 lg:opacity-100">
            <div className="absolute inset-5 sm:inset-8 rounded-full border-2 border-dashed border-rose-400/40 animate-radar-sweep" />
            <div className="absolute inset-12 sm:inset-20 rounded-full border border-slate-400/30 animate-rotate-reverse">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-rose-400/40" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-rose-400/40" />
            </div>
            <div className="absolute inset-20 sm:inset-32 rounded-full border-2 border-slate-300/45 animate-pulse-glow" />
            <div className="absolute inset-24 sm:inset-40 rounded-full bg-white/80 border border-slate-200 shadow-lg flex items-center justify-center">
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#BE123C] animate-ping" />
            </div>
          </div>

          {/* Sweeping High-Speed Fluoroscopy Laser Sweep (Continuous Motion) */}
          <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_24px_#BE123C] opacity-85 animate-laser-fast pointer-events-none" />

          {/* Fluid Hemodynamic Arterial Streamlines */}
          <div className="absolute inset-0 opacity-60 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="treatSpecialtyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0A1128" stopOpacity="0.1" />
                  <stop offset="40%" stopColor="#BE123C" stopOpacity="0.55" />
                  <stop offset="70%" stopColor="#E11D48" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#0A1128" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d="M -100,280 C 350,150 680,480 1150,220 C 1300,140 1480,260 1560,200"
                stroke="url(#treatSpecialtyGrad)"
                strokeWidth="2.8"
                strokeDasharray="14 10"
                className="animate-flow-dash"
              />
              <path
                d="M -100,420 C 320,560 760,250 1200,480 C 1350,560 1480,400 1560,450"
                stroke="url(#treatSpecialtyGrad)"
                strokeWidth="2"
                strokeDasharray="10 12"
                className="animate-flow-dash-fast"
              />
              <circle cx="680" cy="480" r="4" fill="#BE123C" className="animate-ping" />
              <circle cx="1150" cy="220" r="5" fill="#E11D48" className="animate-ping" />
            </svg>
          </div>

          {/* Hairline Medical Blueprint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A11280A_1px,transparent_1px),linear-gradient(to_bottom,#0A11280A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Floating Clinical Telemetry HUD Markers */}
          <div className="absolute top-12 left-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-slate-800 font-mono text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
            <span>RADIAL-FIRST INTERVENTION • TIMI-3 FLOW</span>
          </div>
          <div className="absolute bottom-16 right-12 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-slate-800 font-mono text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0A1128] animate-pulse" />
            <span>SUB-MILLIMETER BALLOON APPOSITION: 99.4%</span>
          </div>
        </>
      )}

      {/* 3.3 TREATMENTS STORYTELLING: Radial-First Procedural Ribbon & Stepwise Care Odyssey */}
      {variant === 'treatments-storytelling' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Luminous Ambient Orbs */}
          <div className="absolute top-1/4 right-10 w-[660px] h-[660px] bg-gradient-to-bl from-[#0A1128]/18 via-[#1E293B]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 left-10 w-[620px] h-[620px] bg-gradient-to-tr from-[#E11D48]/22 via-[#BE123C]/16 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Stepwise Care Odyssey Bezier Waves */}
          <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 1440 800" fill="none">
            <path
              d="M 0,300 C 360,180 720,440 1080,260 C 1260,180 1380,320 1440,280"
              stroke="#0A1128"
              strokeWidth="2.5"
              strokeDasharray="14 10"
              className="animate-flow-dash"
            />
            <path
              d="M 0,380 C 380,260 740,500 1100,340 C 1280,260 1400,380 1440,340"
              stroke="#BE123C"
              strokeWidth="2"
              strokeDasharray="10 12"
              className="animate-flow-dash-fast"
            />
            <circle cx="720" cy="440" r="5" fill="#E11D48" className="animate-ping" />
            <circle cx="1080" cy="260" r="5" fill="#0A1128" className="animate-ping" />
          </svg>

          {/* Sweeping Laser Line */}
          <div className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#BE123C] to-transparent opacity-75 animate-laser-fast pointer-events-none" />
        </>
      )}

      {/* 3.4 TREATMENTS TECHNOLOGY: Siemens Artis Zee Technical Schematic & C-Arm Collimator Reticle */}
      {variant === 'treatments-technology' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Luminous Float Orbs */}
          <div className="absolute top-10 right-10 w-[650px] h-[650px] bg-gradient-to-bl from-[#0A1128]/20 via-[#1E293B]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#E11D48]/24 via-[#BE123C]/16 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Technical Schematic Blueprint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A11280D_1px,transparent_1px),linear-gradient(to_bottom,#0A11280D_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Rotating Collimator Reticle */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-slate-300/40 hidden lg:block pointer-events-none">
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-rose-400/40" />
            <div className="absolute inset-24 rounded-full border border-slate-400/30" />
          </div>
        </>
      )}

      {/* 3.5 TREATMENTS EXPLORER: Backlit Radiographic Lightbox & Perfusion Grid Matrix */}
      {variant === 'treatments-explorer' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* High-Contrast Lightbox Specular Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#0A1128]/10 via-[#BE123C]/15 to-[#0A1128]/10 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform" />

          {/* Radiographic Perfusion Dot Matrix */}
          <div className="absolute inset-0 bg-[radial-gradient(#0A112814_1.2px,transparent_1.2px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
        </>
      )}

      {/* 3.6 TREATMENTS CTA: Priority Cardiology Access Chamber & Compassionate Medical Seal */}
      {variant === 'treatments-cta' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Double Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-300/40 pointer-events-none">
            <div className="absolute inset-10 rounded-full border-2 border-dashed border-rose-400/35 animate-radar-sweep" />
            <div className="absolute inset-28 rounded-full border border-slate-300/40 animate-pulse-glow" />
          </div>

          {/* Deep Navy & Crimson Ruby Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#0A1128]/15 via-[#BE123C]/20 to-[#E11D48]/15 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform" />
        </>
      )}

      {/* =========================================================================
          PAGE 4: HOSPITAL SECTIONS
         ========================================================================= */}

      {/* 4.1 HOSPITAL HERO: Architectural Masterplan & Modern Glass Pavilion */}
      {variant === 'hospital-hero' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

          {/* Floating Luminous Vitality Spheres */}
          <div className="absolute -top-20 right-1/4 w-[680px] h-[680px] bg-gradient-to-bl from-[#0A1128]/22 via-[#1E293B]/14 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute top-1/3 -left-20 w-[620px] h-[620px] bg-gradient-to-tr from-[#E11D48]/25 via-[#BE123C]/18 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />
          <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-gradient-to-t from-[#0A1128]/15 via-[#CBD5E1]/25 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-3" />

          {/* Architectural Masterplan Elevation Blueprint Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0A112818_1.5px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_95%_85%_at_50%_40%,#000_80%,transparent_100%)] opacity-75" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A11280D_1px,transparent_1px),linear-gradient(to_bottom,#0A11280D_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

          {/* Sweeping Fluoroscopy Laser Beam */}
          <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_24px_#BE123C] opacity-80 animate-laser-fast pointer-events-none" />

          {/* Cleanroom Laminar Airflow Streamline Graphics */}
          <svg className="absolute inset-0 w-full h-full opacity-65 pointer-events-none" viewBox="0 0 1440 800" fill="none">
            <path d="M 0,160 Q 720,380 1440,160" stroke="#0A1128" strokeWidth="2.5" strokeDasharray="12 10" className="animate-flow-dash" />
            <path d="M 0,360 Q 720,580 1440,360" stroke="#BE123C" strokeWidth="2.2" strokeDasharray="10 12" className="animate-flow-dash-fast" />
            <path d="M 0,560 Q 720,280 1440,560" stroke="#E11D48" strokeWidth="2" strokeDasharray="8 8" />
          </svg>

          {/* Rotating Biometric Telemetry & Architectural Radar Rings */}
          <div className="absolute top-1/3 -right-12 lg:-right-16 -translate-y-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] rounded-full border-2 border-slate-300/40 pointer-events-none opacity-70 lg:opacity-100">
            <div className="absolute inset-5 sm:inset-8 rounded-full border-2 border-dashed border-rose-400/40 animate-radar-sweep" />
            <div className="absolute inset-12 sm:inset-20 rounded-full border border-slate-400/30 animate-rotate-reverse">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-rose-400/40" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-rose-400/40" />
            </div>
            <div className="absolute inset-20 sm:inset-32 rounded-full border-2 border-slate-300/45 animate-pulse-glow" />
            <div className="absolute inset-24 sm:inset-44 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center">
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#BE123C] animate-ping" />
            </div>
          </div>

          {/* Floating Hospital Telemetry HUD Chips */}
          <div className="absolute top-24 left-6 sm:left-12 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md animate-float-1 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] animate-ping" />
            <span className="text-xs font-mono font-bold text-slate-800">
              Class-100 Laminar Cleanroom • HEPA Filtered
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-50 text-[#BE123C] font-bold border border-rose-200">
              ACTIVE
            </span>
          </div>

          <div className="absolute top-24 right-6 sm:right-12 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md animate-float-2 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0A1128] animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-800">
              Siemens Artis Zee Cath Lab • 24/7 STEMI
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-[#0A1128] font-bold border border-slate-300">
              STANDBY
            </span>
          </div>

          {/* Continuous Moving ECG Waveform */}
          <div className="absolute bottom-2 left-0 right-0 z-0 opacity-90 pointer-events-none">
            <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hospHeroEcgGradRuby" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0A1128" stopOpacity="0.3" />
                  <stop offset="30%" stopColor="#BE123C" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#E11D48" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0A1128" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 L260,50 L280,50 L290,25 L305,80 L320,8 L335,70 L345,50 L400,50 L640,50 L660,50 L670,20 L685,82 L700,6 L715,72 L725,50 L780,50 L1020,50 L1040,50 L1050,25 L1065,80 L1080,8 L1095,70 L1105,50 L1440,50"
                stroke="url(#hospHeroEcgGradRuby)"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="600"
                className="animate-flow-dash"
              />
              <circle cx="320" cy="8" r="6" fill="#BE123C" className="animate-ping" />
              <circle cx="700" cy="6" r="6" fill="#E11D48" className="animate-ping" />
              <circle cx="1080" cy="8" r="6" fill="#BE123C" className="animate-ping" />
            </svg>
          </div>
        </>
      )}

      {/* 4.2 HOSPITAL PULSE CENTRE: Betiahata Medical Quarter Blueprint & Kinetic Medical HUD */}
      {variant === 'hospital-pulse-centre' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

          {/* Glowing Ambient Vitality Orbs */}
          <div className="absolute -top-24 right-1/4 w-[640px] h-[640px] bg-gradient-to-bl from-[#0A1128]/20 via-[#1E293B]/12 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute top-1/3 -left-20 w-[580px] h-[580px] bg-gradient-to-tr from-[#E11D48]/24 via-[#BE123C]/16 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />
          <div className="absolute -bottom-20 right-10 w-[520px] h-[520px] bg-gradient-to-t from-[#CBD5E1]/25 via-transparent to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-3" />

          {/* Precision GIS & Hospital Masterplan Blueprint Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0A112818_1.5px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_95%_85%_at_50%_40%,#000_80%,transparent_100%)] opacity-75" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A11280D_1px,transparent_1px),linear-gradient(to_bottom,#0A11280D_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

          {/* Sweeping Fluoroscopy Laser Beam */}
          <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_24px_#BE123C] opacity-80 animate-laser-fast pointer-events-none" />

          {/* Asymmetric Architectural Horizon Arc & Hemodynamic Waves */}
          <svg className="absolute inset-0 w-full h-full opacity-65 pointer-events-none" viewBox="0 0 1440 800" fill="none">
            <path d="M-100,500 Q 600,200 1550,550" stroke="#0A1128" strokeWidth="2.8" strokeDasharray="16 14" className="animate-flow-dash" />
            <path d="M-100,320 Q 720,520 1550,300" stroke="#BE123C" strokeWidth="2.2" strokeDasharray="12 12" className="animate-flow-dash-fast" />
          </svg>

          {/* Rotating Acoustic Diagnostic Radar Rings */}
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-2 border-slate-300/40 pointer-events-none hidden lg:block">
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-rose-400/40 animate-radar-sweep" />
            <div className="absolute inset-20 rounded-full border border-slate-400/30 animate-rotate-reverse" />
            <div className="absolute inset-32 rounded-full border-2 border-slate-300/45 animate-pulse-glow" />
            <div className="absolute inset-44 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#BE123C] animate-ping" />
            </div>
          </div>

          {/* Floating Hospital Telemetry HUD Chips */}
          <div className="absolute top-12 left-8 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md animate-float-1 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] animate-ping" />
            <span className="text-xs font-mono font-bold text-slate-800">
              Betiahata Medical Campus • 26.7606° N, 83.3732° E
            </span>
          </div>

          <div className="absolute bottom-16 right-10 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md animate-float-3 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0A1128] animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-800">
              15,000+ Interventions • &lt;45 Min STEMI Response
            </span>
          </div>
        </>
      )}

      {/* 4.3 HOSPITAL ADVANCED SUITES: Tri-Suite Cleanroom Isolation & Laminar Airflow Streams */}
      {variant === 'hospital-suites' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

          {/* Laminar Airflow Blueprint Grid & Cleanroom Laser Sweep */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A11280D_1px,transparent_1px),linear-gradient(to_bottom,#0A11280D_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A1128]/15 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#BE123C]/15 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] pointer-events-none" />
        </>
      )}

      {/* 4.4 HOSPITAL PATIENT EXPERIENCE: Serene Hospitality & Calming Organic Waves */}
      {variant === 'hospital-experience' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

          {/* Calming Breathing Organic Undulations */}
          <div className="absolute inset-0 w-full h-full animate-wave-flow">
            <svg className="w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none">
              <path d="M 0,400 Q 720,200 1440,400" stroke="#0A1128" strokeWidth="2.5" strokeDasharray="12 10" className="animate-flow-dash" />
              <path d="M 0,500 Q 720,300 1440,500" stroke="#BE123C" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          {/* Soft Glows */}
          <div className="absolute -top-20 right-10 w-[620px] h-[620px] bg-[#0A1128]/14 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute bottom-0 left-10 w-[580px] h-[580px] bg-[#BE123C]/18 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />
        </>
      )}

      {/* 4.5 HOSPITAL CTA: Betiahata Gateway & Radiant Geographic Beacon */}
      {variant === 'hospital-cta' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

          {/* Concentric Distance Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border-2 border-slate-300/40 pointer-events-none">
            <div className="absolute inset-10 rounded-full border-2 border-dashed border-rose-400/40 animate-radar-sweep" />
            <div className="absolute inset-28 rounded-full border border-slate-300/40 animate-rotate-reverse" />
          </div>
        </>
      )}

      {/* =========================================================================
          PAGE 5: CONTACT SECTIONS
         ========================================================================= */}

      {/* 5.1 CONTACT HERO: Treatments-Related Dual-Beacon Arrival Rayfield, Blueprint Grid & Laser */}
      {(variant === 'contact-hero' || variant === 'contact') && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />

          {/* Luminous Floating Atmospheric Orbs (Midnight Navy & Crimson Ruby) */}
          <div className="absolute -top-24 left-1/4 w-[680px] h-[680px] bg-gradient-to-br from-[#0A1128]/20 via-[#1E293B]/14 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute -bottom-16 right-1/5 w-[640px] h-[640px] bg-gradient-to-tl from-[#E11D48]/24 via-[#BE123C]/16 to-transparent rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />

          {/* Diagonal Hospital Arrival Beacon Rayfield (Distinct from Treatments Center Cone) */}
          <div className="absolute inset-0 w-full h-full opacity-45 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="contactBeaconRuby" x1="100%" y1="0%" x2="20%" y2="100%">
                  <stop offset="0%" stopColor="#BE123C" stopOpacity="0.42" />
                  <stop offset="60%" stopColor="#0A1128" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0A1128" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="contactBeaconNavy" x1="0%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#0A1128" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#BE123C" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Angled Arrival Spotlight Beam from Top-Right */}
              <path d="M 1180,0 L 1440,0 L 820,900 L 300,900 Z" fill="url(#contactBeaconRuby)" />
              {/* Secondary Counter-Beam from Top-Left */}
              <path d="M 0,0 L 340,0 L 960,900 L 580,900 Z" fill="url(#contactBeaconNavy)" />
              {/* Dashed Wayfinding & Emergency Corridor Tracks */}
              <path d="M 1220,0 L 560,900 M 1360,0 L 760,900" stroke="#BE123C" strokeWidth="1.5" strokeDasharray="10 10" className="animate-flow-dash" />
              <path d="M 180,0 L 780,900" stroke="#0A1128" strokeOpacity="0.35" strokeWidth="1.25" strokeDasharray="8 12" className="animate-flow-dash-fast" />
            </svg>
          </div>

          {/* Concentric Location Beacon Rings Behind Right Portrait */}
          <div className="absolute top-1/2 right-[-40px] lg:right-[8%] -translate-y-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full border border-rose-300/40 pointer-events-none opacity-80 lg:opacity-100">
            <div className="absolute inset-5 sm:inset-8 rounded-full border border-dashed border-[#BE123C]/35 animate-gentle-cw" />
            <div className="absolute inset-12 sm:inset-20 rounded-full border border-dashed border-[#0A1128]/25 animate-hero-ring-ccw" />
          </div>

          {/* Subtle Finishing Laser Line along Bottom of Contact Hero */}
          <div className="absolute left-0 right-0 h-[2px] bottom-0 bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_16px_#BE123C] opacity-60 pointer-events-none" />

          {/* Precision Blueprint Dot Grid (Matched with Treatments Hero) */}
          <div className="absolute inset-0 bg-[radial-gradient(#0A112814_1.5px,transparent_1.5px)] bg-[size:28px_28px] opacity-70" />
        </>
      )}

      {/* 5.2 CONTACT VIDEO: Wayfinding Horizon & Transit Access Routes */}
      {variant === 'contact-video' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Wayfinding Transit Route Vectors */}
          <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1440 600" fill="none">
            <path d="M 100,300 C 400,200 800,400 1340,250" stroke="#0A1128" strokeWidth="2.5" strokeDasharray="12 12" className="animate-flow-dash" />
            <circle cx="100" cy="300" r="5" fill="#0A1128" />
            <circle cx="1340" cy="250" r="5" fill="#E11D48" className="animate-ping" />
          </svg>

          {/* Soft Light Falloff */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#BE123C]/12 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform" />
        </>
      )}

      {/* 5.3 CONTACT PROTOCOL GUIDE: Editorial Wayfinding & Patient Checklist Dossier */}
      {variant === 'contact-protocol' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F8FAFC] to-[#F1F5F9]" />
          
          {/* Delicate Wave Divider Vector */}
          <svg className="absolute inset-x-0 top-0 w-full h-16 opacity-45" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0,0 C360,40 1080,40 1440,0 L1440,60 L0,60 Z" fill="#FAF9F6" />
          </svg>

          {/* Tactile Micro-Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0A112814_1.2px,transparent_1.2px)] bg-[size:28px_28px] opacity-30 pointer-events-none" />
        </>
      )}

      {/* =========================================================================
          GLOBAL FOOTER: Luxury Deep Midnight Navy & Crimson Ruby Telemetry
         ========================================================================= */}
      {variant === 'footer' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#070D1F] to-[#040813]" />
          <div className="absolute -top-24 left-1/4 w-[680px] h-[680px] bg-[#E11D48]/18 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-1" />
          <div className="absolute -bottom-20 right-10 w-[620px] h-[620px] bg-[#BE123C]/16 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-float-2" />
          <div className="absolute top-1/2 left-2/3 w-[450px] h-[450px] bg-[#1E293B]/30 rounded-full [mask-image:radial-gradient(closest-side,black_15%,transparent_100%)] will-change-transform animate-pulse-glow" />

          {/* Constellation Grid Pattern in Silk Platinum */}
          <div className="absolute inset-0 bg-[radial-gradient(#CBD5E125_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-35" />

          {/* Flowing Crimson Ruby ECG Cardiac Line */}
          <div className="absolute bottom-0 left-0 right-0 z-0 opacity-80">
            <svg className="w-full h-20" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
              <path
                d="M0,40 L300,40 L320,40 L330,15 L340,65 L350,5 L360,55 L370,40 L600,40 L620,40 L630,15 L640,65 L650,5 L660,55 L670,40 L1000,40 L1020,40 L1030,15 L1040,65 L1050,5 L1060,55 L1070,40 L1440,40"
                stroke="#E11D48"
                strokeWidth="2.5"
                strokeDasharray="600"
                className="animate-flow-dash"
              />
              <circle cx="350" cy="5" r="5" fill="#BE123C" className="animate-ping" />
              <circle cx="650" cy="5" r="5" fill="#E11D48" className="animate-ping" />
              <circle cx="1050" cy="5" r="5" fill="#BE123C" className="animate-ping" />
            </svg>
          </div>

          {/* Finishing Crimson Ruby Laser Line across top */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E11D48] to-transparent shadow-[0_0_15px_#E11D48] opacity-80" />
        </>
      )}
    </div>
  );
}
