import React, { useState, useEffect } from 'react';

/**
 * ThreeDImageCard
 * Clean, calm, real-world editorial image card:
 * - Zero laggy mousemove React state, zero holographic glare, zero sci-fi laser beams
 * - Smooth subtle elevation and gentle photo zoom on hover
 * - Crisp Deep Midnight Navy & Crimson Ruby editorial captioning
 */
export default function ThreeDImageCard({
  src,
  image,
  alt = 'Pulse Heart Centre Clinical Care',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  badge = null,
  stat = null,
  statSub = null,
  title = null,
  borderColor = 'border-slate-200 hover:border-[#BE123C]/40',
  children = null,
}) {
  const resolvedSrc = src || image;
  const [imgSrc, setImgSrc] = useState(resolvedSrc);

  useEffect(() => {
    if (resolvedSrc) setImgSrc(resolvedSrc);
  }, [resolvedSrc]);

  return (
    <div className={`group relative select-none ${className}`}>
      <div
        className={`relative ${aspectRatio} w-full rounded-2xl overflow-hidden border ${borderColor} bg-slate-900 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setImgSrc('/images/ppp.webp')}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Clean dark bottom gradient for readable captions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/20 to-transparent pointer-events-none" />

        {/* Subtle Category Label */}
        {badge && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/95 text-[#0A1128] text-[9px] font-mono font-bold tracking-wider uppercase shadow-sm">
              {badge}
            </span>
          </div>
        )}

        {/* Clean Bottom Caption & Stat */}
        {(title || stat) && (
          <div className="absolute bottom-3 inset-x-3.5 z-10 text-left pointer-events-none">
            {stat && (
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-rose-300 block">
                {stat}
              </span>
            )}
            {title && (
              <h4 className="text-xs sm:text-sm font-bold text-white leading-snug mt-0.5">
                {title}
              </h4>
            )}
            {statSub && (
              <span className="text-[10px] text-slate-300 block mt-0.5">
                {statSub}
              </span>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
