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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Fine Art Photography
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-balance leading-tight tracking-tight mb-12"
        >
          Capturing the <span className="italic font-light">silence</span> between moments.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#gallery"
            className="inline-block border border-foreground px-8 py-4 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-500 ease-out"
          >
            View Portfolio
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
