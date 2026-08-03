import React from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  Moon,
  Scale,
  Hourglass,
  TriangleAlert,
  FlaskConical,
  Leaf,
  Apple,
} from 'lucide-react';
import AnatomyViewer3D from './AnatomyViewer3D';

/**
 * Orbit layout matched to the design mockup.
 * Angle 0° = top, clockwise. No categories in the bottom arc (~155°–205°).
 *
 * Top cluster:
 *   Chronic Inflammation (higher), Lifestyle Risk Factors (top-right after it),
 *   Stress & Recovery, Nutritional Status (top-left)
 * Sides:
 *   Body Composition, Biological Age (right)
 *   Gut Health, Hormonal Health (left — mid, not bottom)
 */
const healthAreas = [
  { label: 'Chronic Inflammation', icon: Flame, angle: -14, radius: 46 },
  { label: 'Lifestyle Risk Factors', icon: TriangleAlert, angle: 28, radius: 46 },
  { label: 'Stress & Recovery', icon: Moon, angle: 62, radius: 46 },
  { label: 'Body Composition', icon: Scale, angle: 100, radius: 46 },
  { label: 'Biological Age', icon: Hourglass, angle: 138, radius: 46 },
  { label: 'Hormonal Health', icon: FlaskConical, angle: 228, radius: 46 },
  { label: 'Gut Health', icon: Leaf, angle: 268, radius: 46 },
  { label: 'Nutritional Status', icon: Apple, angle: 312, radius: 46 },
];

function polarStyle(angleDeg, radiusPct) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const x = 50 + Math.cos(rad) * radiusPct;
  let y = 50 + Math.sin(rad) * radiusPct;
  // Pull Chronic Inflammation further up
  if (angleDeg === -14) y -= 3;
  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: 'translate(-50%, -50%)',
  };
}

const OrbitCategory = ({ label, icon: Icon, angle, radius }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="absolute z-20 flex flex-col items-center text-center pointer-events-auto w-[3.5rem] sm:w-[5rem] md:w-28 lg:w-32 gap-0.5 sm:gap-1.5"
    style={polarStyle(angle, radius)}
  >
    <div className="rounded-full bg-white border-2 border-primary/40 shadow-md shadow-primary/10 flex items-center justify-center text-primary hover:border-primary hover:scale-105 transition-transform w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 lg:w-16 lg:h-16">
      <Icon
        className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
        strokeWidth={1.75}
      />
    </div>
    <span className="font-semibold text-slate-700 leading-tight text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
      {label}
    </span>
  </motion.div>
);

const HealthAreasSection = () => {
  return (
    <section
      id="health-areas"
      className="relative w-full bg-white py-14 sm:py-16 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,560px)] h-[min(92vw,560px)] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Whole-Person Health
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Health Areas We Assess
          </h2>
          <p className="mt-3 md:mt-4 text-slate-500 text-sm md:text-lg leading-relaxed">
            EPHR looks across interconnected systems — not isolated test results —
            to reveal how your body is functioning as a whole.
          </p>
        </motion.div>

        {/* Circular orbit — same UI on mobile & desktop */}
        <div className="relative mx-auto w-[min(100%,340px)] sm:w-full sm:max-w-[460px] md:max-w-3xl lg:max-w-4xl aspect-square">
          {/* Dashed orbital guide (like mockup) */}
          <div className="pointer-events-none absolute inset-[8%] sm:inset-[9%] md:inset-[11%] rounded-full border border-dashed border-primary/25" />
          <div className="pointer-events-none absolute inset-[20%] sm:inset-[21%] md:inset-[23%] rounded-full border border-primary/10" />

          {/* Human body — center, clear of orbits */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="pointer-events-auto w-[40%] sm:w-[38%] md:w-[34%] lg:w-[32%] max-w-[210px] aspect-[220/480]">
              <AnatomyViewer3D className="w-full h-full" />
            </div>
          </div>

          {healthAreas.map((item) => (
            <OrbitCategory key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthAreasSection;
