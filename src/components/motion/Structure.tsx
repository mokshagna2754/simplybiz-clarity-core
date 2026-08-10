import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";

export function HairlineDraw({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <motion.div
        style={{
          height: 1,
          backgroundColor: inverse ? "var(--rule-inverse)" : "var(--rule)",
          transformOrigin: "left",
        }}
        initial={reduced ? false : { scaleX: 0 }}
        animate={inView || reduced ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

/**
 * StickyStack: pins a label column while inner content advances past it.
 * Pinning is CSS position: sticky, so it stays cheap on mobile.
 */
export function StickyStack({
  label,
  children,
  className,
}: {
  label: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className={className}>
      <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {label}
          {!reduced && (
            <div className="mt-6 hidden h-px w-full bg-[var(--rule)] lg:block">
              <motion.div style={{ width: progress }} className="h-px bg-[var(--accent)]" />
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
