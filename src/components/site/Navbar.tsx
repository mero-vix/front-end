import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to hero section on initial load
  useEffect(() => {
    const hero = document.getElementById('home');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-1" : "py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2 transition-all duration-500 bg-gradient-to-r from-sand via-umber to-cocoa`}
        >
          <a href="#home" className="flex items-center group">
            <img
              src="/images/mero-vix_logo.svg"
              alt="Mero-Vix logo"
              className="h-16 w-auto rounded-lg"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-12">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-sand hover:after:w-full after:transition-all"
                  style={{ fontFamily: "'Playwrite Australia Victoria Guides', sans-serif" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="/Product" className="text-sm font-medium bg-sand text-background px-4 py-2 rounded-full hover:scale-105 transition-transform glow-sand">
              Sign Up
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 rounded-2xl glass-strong p-5"
            >
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                     <a
                       onClick={() => setOpen(false)}
                       href={l.href}
                       className="block text-base text-muted-foreground hover:text-foreground py-1"
                     >
                       {l.label}
                     </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <a href="/Product" className="w-full bg-sand text-background rounded-full py-2 text-sm font-medium text-center">
                  Sign Up
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
