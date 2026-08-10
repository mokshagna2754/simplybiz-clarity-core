import { motion, useReducedMotion } from "motion/react";

/**
 * Abstract cross-border corridor: two nodes, one drawn route.
 * Low contrast accent strokes, draws itself over 1800ms on load.
 */
export function CorridorDrawing() {
  const reduced = useReducedMotion();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <svg
      viewBox="0 0 1200 600"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.55 }}
    >
      <g stroke="var(--accent-lit)" strokeOpacity="0.08" fill="none" strokeWidth="1.25">
        <motion.path
          d="M120 470 C 340 470, 380 180, 600 180 S 880 430, 1080 150"
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          variants={draw}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M120 470 C 420 520, 700 520, 1080 150"
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          variants={draw}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <motion.circle
          cx="120"
          cy="470"
          r="46"
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          variants={draw}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
        <motion.circle
          cx="1080"
          cy="150"
          r="46"
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
          variants={draw}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </g>
      <g
        fill="var(--accent-lit)"
        fillOpacity="0.18"
        style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.14em" }}
      >
        <text x="120" y="546" textAnchor="middle">
          ORIGIN
        </text>
        <text x="1080" y="70" textAnchor="middle">
          INDIA
        </text>
      </g>
    </svg>
  );
}
