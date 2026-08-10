import { useRef, useState, type ComponentProps } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";

type MagneticCTAProps = {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "inverse";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">;

const base =
  "relative inline-flex items-center gap-2 rounded-[2px] px-5 py-3 text-[0.9rem] font-medium transition-colors duration-200";

const variants = {
  solid: "bg-[var(--accent)] text-[var(--paper)] hover:bg-[var(--accent-lit)]",
  ghost: "border border-[var(--rule)] text-[var(--ink)] hover:border-[var(--accent)]",
  inverse: "border border-[var(--rule-inverse)] text-[var(--paper)] hover:border-[var(--accent-lit)]",
};

export function MagneticCTA({ to, children, variant = "solid", className = "", ...rest }: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const max = 4;
    setOffset({
      x: Math.max(-max, Math.min(max, dx / 6)),
      y: Math.max(-max, Math.min(max, dy / 6)),
    });
  }

  return (
    <motion.span
      className="inline-block"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <Link ref={ref} to={to} className={`${base} ${variants[variant]} group ${className}`} {...rest}>
        <span>{children}</span>
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-5 right-5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      </Link>
    </motion.span>
  );
}
