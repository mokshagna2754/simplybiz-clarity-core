import { useRef, useState, type ComponentProps } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type MagneticCTAProps = {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "inverse";
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">;

const base =
  "group relative inline-flex items-center gap-2 overflow-hidden rounded-[2px] px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] transition-all duration-300";

const variants = {
  solid:
    "text-[var(--paper)] brand-gradient-bg shadow-[var(--shadow-lift)] hover:brightness-95",
  ghost:
    "border border-[var(--ink)] bg-transparent text-[var(--ink)] hover:border-[var(--brand-deep)] hover:bg-[var(--surface)]",
  inverse:
    "border border-[var(--rule-inverse)] bg-transparent text-[var(--paper)] hover:border-[var(--brand-lime)] hover:bg-[var(--surface-2)]/10",
};

export function MagneticCTA({
  to,
  children,
  variant = "solid",
  arrow = true,
  className = "",
  ...rest
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const max = 5;
    setOffset({
      x: Math.max(-max, Math.min(max, dx / 5)),
      y: Math.max(-max, Math.min(max, dy / 5)),
    });
  }

  return (
    <motion.span
      className="inline-block"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <Link ref={ref} to={to} className={`${base} ${variants[variant]} ${className}`} {...rest}>
        <span className="relative z-10">{children}</span>
        {arrow && (
          <ArrowUpRight
            size={16}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </Link>
    </motion.span>
  );
}
