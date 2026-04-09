import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* subtle atmospheric noise texture */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      
      <div className="z-10 max-w-5xl mx-auto px-6 text-center mt-16">
        {/* Available for work badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 border border-border/40 bg-muted/30 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/70">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Full Stack Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-balance leading-tight tracking-tight mb-12"
        >
          Building digital <span className="italic font-light">experiences</span> with precision.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/#projects"
            className="inline-block border border-foreground bg-foreground text-background px-8 py-4 text-xs uppercase tracking-widest hover:bg-transparent hover:text-foreground transition-all duration-500 ease-out"
          >
            View Projects
          </a>
          <a
            href="/blog"
            className="inline-block border border-foreground px-8 py-4 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-500 ease-out"
          >
            Blog & Notes
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}
