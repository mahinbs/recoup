import React, { useRef } from 'react';

/**
 * Human anatomy figure (SVG) with purple glow.
 * Rotates in 3D only while the pointer/finger moves over it — no auto-spin.
 */
export default function AnatomyViewer3D({ className = '' }) {
  const wrapRef = useRef(null);
  const figureRef = useRef(null);
  const rot = useRef({ y: 12, x: 0 });
  const last = useRef({ x: null, y: null });
  const over = useRef(false);

  const applyTransform = () => {
    if (!figureRef.current) return;
    const { y, x } = rot.current;
    figureRef.current.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  };

  const onPointerEnter = (e) => {
    over.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerLeave = () => {
    over.current = false;
    last.current = { x: null, y: null };
  };

  const onPointerMove = (e) => {
    if (!over.current) return;
    const x = e.clientX;
    const y = e.clientY;
    if (last.current.x == null) {
      last.current = { x, y };
      return;
    }
    const dx = x - last.current.x;
    const dy = y - last.current.y;
    last.current = { x, y };
    if (Math.abs(dx) < 0.4 && Math.abs(dy) < 0.4) return;

    rot.current.y += dx * 0.45;
    rot.current.x = Math.max(-18, Math.min(18, rot.current.x + dy * 0.2));
    applyTransform();
  };

  return (
    <div
      ref={wrapRef}
      className={`relative touch-none cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ perspective: '1000px' }}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      role="img"
      aria-label="Interactive 3D human body. Move over the figure to rotate it."
    >
      {/* Soft purple glow behind torso */}
      <div className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[70%] rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-full bg-[#a665e4]/40 blur-2xl" />

      <div
        ref={figureRef}
        className="relative w-full h-full will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(12deg) rotateX(0deg)',
          transition: 'transform 0.05s linear',
        }}
      >
        <svg
          viewBox="0 0 220 480"
          className="w-full h-full drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ha-body" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ec5f7" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#6b8fd4" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#4a6fb5" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="ha-muscle" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7eb0ef" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#4d74c4" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="ha-heart" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff6b5b" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
            <linearGradient id="ha-lung" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#fb7185" />
            </linearGradient>
            <linearGradient id="ha-gut" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <filter id="ha-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Head */}
          <ellipse cx="110" cy="48" rx="32" ry="38" fill="url(#ha-body)" filter="url(#ha-glow)" />
          {/* Neck */}
          <path
            d="M96 82 C96 82 98 98 100 108 L120 108 C122 98 124 82 124 82 Z"
            fill="url(#ha-body)"
            opacity="0.95"
          />

          {/* Torso */}
          <path
            d="M62 110
               C58 130 54 155 56 190
               L58 250
               C60 275 78 292 110 294
               C142 292 160 275 162 250
               L164 190
               C166 155 162 130 158 110
               C145 100 128 96 110 96
               C92 96 75 100 62 110 Z"
            fill="url(#ha-body)"
            filter="url(#ha-glow)"
            opacity="0.88"
          />

          {/* Chest muscle definition */}
          <path
            d="M70 130 C85 125 100 128 110 140 C120 128 135 125 150 130 L148 175 C135 170 120 172 110 180 C100 172 85 170 72 175 Z"
            fill="url(#ha-muscle)"
            opacity="0.45"
          />

          {/* Left arm */}
          <path
            d="M62 118
               C42 135 32 165 34 200
               C35 218 44 228 52 220
               L62 175
               C64 150 66 130 62 118 Z"
            fill="url(#ha-body)"
            opacity="0.85"
          />
          <path
            d="M48 215 C40 235 38 265 42 290 C46 302 58 300 60 288 L58 230 Z"
            fill="url(#ha-body)"
            opacity="0.8"
          />

          {/* Right arm */}
          <path
            d="M158 118
               C178 135 188 165 186 200
               C185 218 176 228 168 220
               L158 175
               C156 150 154 130 158 118 Z"
            fill="url(#ha-body)"
            opacity="0.85"
          />
          <path
            d="M172 215 C180 235 182 265 178 290 C174 302 162 300 160 288 L162 230 Z"
            fill="url(#ha-body)"
            opacity="0.8"
          />

          {/* Legs */}
          <path
            d="M78 290
               C74 330 70 380 74 430
               C76 448 92 452 98 438
               L102 310
               C100 300 92 292 78 290 Z"
            fill="url(#ha-body)"
            opacity="0.88"
          />
          <path
            d="M142 290
               C146 330 150 380 146 430
               C144 448 128 452 122 438
               L118 310
               C120 300 128 292 142 290 Z"
            fill="url(#ha-body)"
            opacity="0.88"
          />

          {/* Organs — heart */}
          <ellipse
            cx="98"
            cy="155"
            rx="16"
            ry="20"
            fill="url(#ha-heart)"
            filter="url(#ha-glow)"
            opacity="0.95"
          />
          {/* Lungs */}
          <ellipse cx="82" cy="158" rx="18" ry="28" fill="url(#ha-lung)" opacity="0.75" />
          <ellipse cx="132" cy="158" rx="18" ry="28" fill="url(#ha-lung)" opacity="0.75" />
          {/* Liver hint */}
          <ellipse cx="128" cy="195" rx="16" ry="12" fill="#f97316" opacity="0.7" />
          {/* Intestines */}
          <path
            d="M88 210
               Q110 198 130 212
               Q138 235 110 255
               Q82 235 88 210 Z"
            fill="url(#ha-gut)"
            opacity="0.85"
          />
          <path
            d="M95 220 Q110 215 122 222 Q124 238 110 245 Q96 238 95 220 Z"
            fill="#fdba74"
            opacity="0.7"
          />

          {/* Subtle vessel lines */}
          <path
            d="M110 120 L98 155 M110 120 L132 158 M110 180 L110 240"
            stroke="#ffffff"
            strokeWidth="1.2"
            fill="none"
            opacity="0.35"
          />
          <circle cx="110" cy="120" r="2.5" fill="#fff" opacity="0.6" />
          <circle cx="98" cy="155" r="2" fill="#fff" opacity="0.5" />
          <circle cx="110" cy="240" r="2" fill="#fff" opacity="0.5" />
        </svg>
      </div>

      <p className="pointer-events-none absolute -bottom-1 left-0 right-0 text-center text-[9px] sm:text-[10px] text-slate-400 font-medium">
        Move over body to rotate
      </p>
    </div>
  );
}
