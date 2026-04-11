import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
      {/* Noise texture */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noise404">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise404)" />
        </svg>
      </div>

      <div className="z-10 text-center max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Error 404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[8rem] md:text-[12rem] font-display font-medium leading-none tracking-tight mb-6 select-none"
        >
          4<span className="italic font-light">0</span>4
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground font-light text-lg mb-12 leading-relaxed"
        >
          This page doesn't exist — or maybe it's still being built.{" "}
          <span className="italic">Things break, that's how we learn.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground text-background px-8 py-4 text-xs uppercase tracking-widest hover:bg-transparent hover:text-foreground transition-all duration-500 ease-out"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="inline-block border border-foreground px-8 py-4 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-500 ease-out"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
