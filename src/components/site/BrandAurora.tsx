import { motion, useReducedMotion } from "motion/react";

/**
 * BrandAurora: the hero backdrop. A soft brand-gradient light field over a
 * dot grid, with a slowly drawing corridor line between two nodes.
 * Uses only the SimplyBiz logo greens.
 */
export function BrandAurora() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_72%)]" />

      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-40 -top-40 h-[46rem] w-[46rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, color-mix(in srgb, var(--brand-lime) 34%, transparent), transparent 62%)",
        }}
      />
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-56 -left-32 h-[40rem] w-[40rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--brand-deep) 26%, transparent), transparent 62%)",
        }}
      />

      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 h-full w-full opacity-[0.45] [mask-image:linear-gradient(to_bottom,transparent_0%,black_55%,black_100%)]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sb-corridor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-lime)" />
            <stop offset="100%" stopColor="var(--brand-deep)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M40 560 C 300 560, 340 320, 620 320 S 920 420, 1180 250"
          fill="none"
          stroke="url(#sb-corridor)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reduced ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {[
          { cx: 40, cy: 560, label: "ORIGIN" },
          { cx: 620, cy: 320, label: "SIMPLYBIZ" },
          { cx: 1180, cy: 250, label: "INDIA" },
        ].map((n, i) => (
          <motion.g
            key={n.label}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.25 }}
          >
            <circle cx={n.cx} cy={n.cy} r="16" fill="var(--brand)" opacity="0.1" />
            <circle cx={n.cx} cy={n.cy} r="4" fill="var(--brand-deep)" />
            <text
              x={n.cx + 16}
              y={n.cy - 14}
              fill="var(--brand-deep)"
              opacity="0.55"
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em" }}
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
