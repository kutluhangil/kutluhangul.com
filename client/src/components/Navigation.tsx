import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navigation() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.05)"]
  );

  const blur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  );

  return (
    <motion.header
      style={{ background, borderBottomColor: borderColor, backdropFilter: blur }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="text-xl font-display font-semibold tracking-widest uppercase hover:opacity-60 transition-opacity">
          Kutluhan Gül
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <a href="#about" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </a>
          <Link href="/blog" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/now" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors">
            Now
          </Link>
          <a href="#contact" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
