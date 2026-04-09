import { Link, useLocation } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home", isRoute: true },
  { href: "/#about", label: "About", isRoute: false },
  { href: "/#projects", label: "Projects", isRoute: false },
  { href: "/blog", label: "Blog & Notes", isRoute: true },
  { href: "/now", label: "Now", isRoute: true },
  { href: "/uses", label: "Uses", isRoute: true },
  { href: "/#contact", label: "Contact", isRoute: false },
];

export function Navigation() {
  const { scrollY } = useScroll();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = resolvedTheme === "dark";

  const background = useTransform(
    scrollY,
    [0, 100],
    isDark
      ? ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.95)"]
      : ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    isDark
      ? ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"]
      : ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.05)"]
  );

  const blur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <motion.header
        style={{ background, borderBottomColor: borderColor, backdropFilter: blur }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b"
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link 
            href="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-display font-semibold tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            Kutluhan Gül
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            )}

            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-xs bg-background border-l border-border/40 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-24 border-b border-border/40">
                <span className="text-sm font-display font-semibold tracking-widest uppercase">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 px-6 py-10">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    {link.isRoute ? (
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-2xl font-display text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-2xl font-display text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto px-6 pb-10 flex gap-6">
                <a
                  href="https://linkedin.com/in/kutluhangil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/kutluhangil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
