import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * PixelatedImageTrail
 * Interactive cursor trail that reveals sliced/pixelated images as the user moves their pointer.
 *
 * Props:
 * - images: string[] - Array of image URLs to cycle through
 * - imageSize: number - Dimensions (width & height) of trail images in pixels (default: 220)
 * - slices: number - Number of horizontal mask slices (default: 5)
 * - smoothing: number - Interpolation factor for smooth pointer tracking (default: 0.32)
 * - spawnThreshold: number - Minimum pointer movement (in pixels) before spawning next image (default: 32)
 * - config: object - Timing and duration overrides
 *     - imageLifespan: number (default: 1500)
 *     - inDuration: number (default: 280)
 *     - outDuration: number (default: 620)
 *     - staggerIn: number (default: 12)
 *     - staggerOut: number (default: 9)
 *     - slideDuration: number (default: 1300)
 * - className: string - Container class names
 * - children: React.ReactNode - Optional foreground content overlay
 */
export default function PixelatedImageTrail({
  images = [],
  imageSize = 220,
  slices = 5,
  smoothing = 0.32,
  spawnThreshold = 32,
  config = {},
  className = "",
  children
}) {
  const {
    imageLifespan = 1500,
    inDuration = 280,
    outDuration = 620,
    staggerIn = 12,
    staggerOut = 9,
    slideDuration = 1300,
  } = config;

  const containerRef = useRef(null);
  const [trailItems, setTrailItems] = useState([]);

  // Mutable refs for high-frequency coordinate tracking without unnecessary re-renders
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const lastSpawnPos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const nextId = useRef(0);
  const isInside = useRef(false);
  const animFrameId = useRef(null);

  // Spawn an image at given coordinates
  const spawnImage = useCallback((x, y, dx, dy) => {
    if (!images || images.length === 0) return;

    const angle = Math.atan2(dy, dx);
    const speed = Math.min(Math.hypot(dx, dy), 15);
    // Drift displacement
    const slideX = Math.cos(angle) * (speed * 2.5);
    const slideY = Math.sin(angle) * (speed * 2.5);

    const newItem = {
      id: nextId.current++,
      x: x - imageSize / 2,
      y: y - imageSize / 2,
      slideX,
      slideY,
      src: images[imageIndex.current % images.length],
      createdAt: performance.now(),
      exiting: false,
    };

    imageIndex.current += 1;

    setTrailItems((prev) => {
      // Keep at most 24 concurrent active items for optimal rendering performance
      const kept = prev.slice(-23);
      return [...kept, newItem];
    });

    // Schedule exit transition
    setTimeout(() => {
      setTrailItems((prev) =>
        prev.map((item) =>
          item.id === newItem.id ? { ...item, exiting: true } : item
        )
      );
    }, imageLifespan);

    // Schedule total removal
    const totalLifetime = imageLifespan + outDuration + slices * staggerOut + 100;
    setTimeout(() => {
      setTrailItems((prev) => prev.filter((item) => item.id !== newItem.id));
    }, totalLifetime);
  }, [images, imageSize, imageLifespan, outDuration, slices, staggerOut]);

  // Animation frame loop for smooth pointer interpolation and threshold evaluation
  useEffect(() => {
    const loop = () => {
      if (isInside.current) {
        // Linear interpolation
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * smoothing;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * smoothing;

        const dx = currentPos.current.x - lastSpawnPos.current.x;
        const dy = currentPos.current.y - lastSpawnPos.current.y;
        const dist = Math.hypot(dx, dy);

        if (dist >= spawnThreshold) {
          spawnImage(currentPos.current.x, currentPos.current.y, dx, dy);
          lastSpawnPos.current = { ...currentPos.current };
        }
      }
      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [smoothing, spawnThreshold, spawnImage]);

  // Pointer event handlers
  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetPos.current = { x, y };

    if (!isInside.current) {
      isInside.current = true;
      currentPos.current = { x, y };
      lastSpawnPos.current = { x, y };
      spawnImage(x, y, 0, 0);
    }
  };

  const handlePointerLeave = () => {
    isInside.current = false;
  };

  const sliceHeight = imageSize / slices;

  return (
    <div
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={(e) => {
        if (e.touches[0]) {
          handlePointerMove(e.touches[0]);
        }
      }}
      onTouchStart={(e) => {
        if (e.touches[0]) {
          handlePointerMove(e.touches[0]);
        }
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spawned Trail Images Canvas */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {trailItems.map((item) => (
          <div
            key={item.id}
            className="absolute will-change-transform"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              transform: `translate3d(${item.slideX}px, ${item.slideY}px, 0)`,
              transition: `transform ${slideDuration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          >
            {Array.from({ length: slices }).map((_, sliceIdx) => {
              const delay = item.exiting
                ? sliceIdx * staggerOut
                : sliceIdx * staggerIn;
              const duration = item.exiting ? outDuration : inDuration;

              return (
                <div
                  key={sliceIdx}
                  className="absolute left-0 right-0 overflow-hidden rounded-md shadow-sm"
                  style={{
                    top: `${sliceIdx * sliceHeight}px`,
                    height: `${sliceHeight + 0.5}px`, // +0.5px prevents sub-pixel gaps
                    opacity: item.exiting ? 0 : 1,
                    transform: item.exiting
                      ? 'scaleY(0) translateY(-8px)'
                      : 'scaleY(1) translateY(0)',
                    transformOrigin: sliceIdx % 2 === 0 ? 'top center' : 'bottom center',
                    transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
                  }}
                >
                  <img
                    src={item.src}
                    alt="Clinical Visual Trail"
                    loading="eager"
                    className="absolute left-0 w-full object-cover rounded-md pointer-events-none select-none"
                    style={{
                      top: `-${sliceIdx * sliceHeight}px`,
                      width: `${imageSize}px`,
                      height: `${imageSize}px`,
                    }}
                  / decoding="async">
                  {/* Subtle pixelated medical scan-line overlay on each slice */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-rose-500/10 pointer-events-none mix-blend-overlay" />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Children Foreground Layer */}
      {children && (
        <div className="relative z-10 pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
}
