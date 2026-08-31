import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/simplybiz-logo.png.asset.json";
import { MagneticCTA } from "@/components/motion/MagneticCTA";

type NavItem = { label: string; to: string; panel?: { label: string; to: string; note: string }[] };

const NAV: NavItem[] = [
  { label: "Setting up in India", to: "/setting-up-in-india" },
  {
    label: "Services",
    to: "/services",
    panel: [
      { label: "Setup", to: "/services/setup", note: "Entity formation and registrations" },
      { label: "Manage", to: "/services/manage", note: "Accounting, payroll, tax, secretarial" },
      { label: "Grow", to: "/services/grow", note: "Transactions, structuring, advisory" },
    ],
  },
  {
    label: "Who we serve",
    to: "/who-we-serve",
    panel: [
      { label: "Entering India", to: "/who-we-serve/entering-india", note: "Foreign parents opening a subsidiary" },
      { label: "Funded startups", to: "/who-we-serve/funded-startups", note: "Post raise compliance and reporting" },
      { label: "Mid-market", to: "/who-we-serve/mid-market", note: "Established operations, multi state" },
    ],
  },
  { label: "GCC", to: "/gcc" },
  { label: "Case studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-[var(--paper)]/90 pt-0 backdrop-blur-md transition-colors duration-300" onMouseLeave={() => setOpen(null)}>
      <div className="container-editorial">
        <div
          className={`grid h-[4.75rem] grid-cols-[auto_1fr_auto] items-center gap-6 transition-all duration-300 ${
            scrolled || open
              ? ""
              : ""
          }`}
        >
          <Link to="/" className="flex items-center" aria-label="SimplyBiz home">
            <img src={logo.url} alt="SimplyBiz" width={160} height={42} className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <div key={item.label} onMouseEnter={() => setOpen(item.panel ? item.label : null)}>
                <Link
                  to={item.to}
                    className={`rounded-[2px] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[var(--graphite)] transition-colors hover:text-[var(--brand-deep)] ${
                    open === item.label ? "text-[var(--brand-deep)]" : ""
                  }`}
                  activeProps={{ className: "text-[var(--brand-deep)]" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticCTA to="/contact" className="px-5 py-2.5">
              Talk to us
            </MagneticCTA>
          </div>

          <button
            type="button"
            className="justify-self-end text-[var(--ink)] lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobile(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Desktop mega panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="container-editorial hidden pt-2 lg:block"
          >
            <div className="glass-panel grid grid-cols-3 gap-px bg-[var(--rule)] p-px shadow-[var(--shadow-panel)]">
              {NAV.find((n) => n.label === open)?.panel?.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  onClick={() => setOpen(null)}
                  className="group bg-[var(--paper)] p-5 transition-colors hover:bg-[var(--surface)]"
                >
                  <span className="flex items-center gap-1.5 text-[0.95rem] font-semibold text-[var(--ink)]">
                    {p.label}
                    <ArrowUpRight
                      size={15}
                      className="text-[var(--brand)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </span>
                  <p className="mt-1.5 max-w-xs text-[0.85rem] text-[var(--muted-foreground)]">{p.note}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--paper)] lg:hidden"
          >
            <div className="container-editorial flex h-20 items-center justify-between">
              <img src={logo.url} alt="SimplyBiz" width={160} height={42} className="h-7 w-auto" />
              <button type="button" aria-label="Close menu" onClick={() => setMobile(false)} className="text-[var(--ink)]">
                <X size={22} />
              </button>
            </div>
            <div className="container-editorial flex flex-1 flex-col overflow-y-auto pb-16">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-[var(--rule)] py-4"
                >
                  <Link
                    to={item.to}
                    onClick={() => setMobile(false)}
                    className="text-[var(--ink)]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "var(--step-2)", fontWeight: 600 }}
                  >
                    {item.label}
                  </Link>
                  {item.panel && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.panel.map((p) => (
                        <Link
                          key={p.to}
                          to={p.to}
                          onClick={() => setMobile(false)}
                          className="pill text-[var(--brand-deep)]"
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="pt-8">
                <MagneticCTA to="/contact">Talk to us</MagneticCTA>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
