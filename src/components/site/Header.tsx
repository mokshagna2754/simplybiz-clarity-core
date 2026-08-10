import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 80);
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

  const dark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-[var(--rule)] bg-[var(--paper)]" : "border-b border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-editorial flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="SimplyBiz home">
          <img
            src={logo.url}
            alt="SimplyBiz"
            width={160}
            height={42}
            className={`h-8 w-auto ${dark ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpen(item.panel ? item.label : null)}>
              <Link
                to={item.to}
                className={`text-[0.875rem] transition-colors ${
                  dark ? "text-[var(--paper)]/85 hover:text-[var(--paper)]" : "text-[var(--graphite)] hover:text-[var(--accent)]"
                }`}
                activeProps={{ className: "underline underline-offset-8 decoration-[var(--accent-lit)]" }}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticCTA to="/contact" variant={dark ? "inverse" : "solid"}>
            Talk to us
          </MagneticCTA>
        </div>

        <button
          type="button"
          className={`lg:hidden ${dark ? "text-[var(--paper)]" : "text-[var(--ink)]"}`}
          aria-label="Open menu"
          onClick={() => setMobile(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Desktop mega panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden overflow-hidden bg-[var(--ink)] lg:block"
          >
            <div className="container-editorial grid grid-cols-3 gap-px py-10">
              {NAV.find((n) => n.label === open)?.panel?.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  onClick={() => setOpen(null)}
                  className="group border-l border-[var(--rule-inverse)] px-6"
                >
                  <span className="mono-label text-[var(--accent-lit)]">{p.label}</span>
                  <p className="mt-3 max-w-xs text-[var(--paper)]/70 transition-colors group-hover:text-[var(--paper)]">
                    {p.note}
                  </p>
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
            className="fixed inset-0 z-50 flex flex-col bg-[var(--ink)] lg:hidden"
          >
            <div className="container-editorial flex h-20 items-center justify-between">
              <span className="mono-label text-[var(--paper)]/60">Menu</span>
              <button type="button" aria-label="Close menu" onClick={() => setMobile(false)} className="text-[var(--paper)]">
                <X size={22} />
              </button>
            </div>
            <div className="container-editorial flex flex-1 flex-col gap-1 overflow-y-auto pb-16">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-[var(--rule-inverse)] py-4"
                >
                  <Link
                    to={item.to}
                    onClick={() => setMobile(false)}
                    className="font-display text-[var(--paper)]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "var(--step-2)" }}
                  >
                    {item.label}
                  </Link>
                  {item.panel && (
                    <div className="mt-3 flex flex-wrap gap-4">
                      {item.panel.map((p) => (
                        <Link
                          key={p.to}
                          to={p.to}
                          onClick={() => setMobile(false)}
                          className="mono-label text-[var(--accent-lit)]"
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="pt-8">
                <MagneticCTA to="/contact" variant="solid">
                  Talk to us
                </MagneticCTA>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
