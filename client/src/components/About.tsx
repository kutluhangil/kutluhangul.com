import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="aspect-[4/5] w-full max-w-md mx-auto overflow-hidden relative group"
          >
            {/* portrait of the photographer */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
              alt="Photographer Portrait"
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-display mb-8">
              A study in <br/><span className="italic text-muted-foreground">monochrome</span>.
            </h2>
            <div className="space-y-6 text-foreground/70 font-light leading-relaxed text-lg">
              <p>
                Based in Paris, I specialize in minimalist, high-contrast black and white photography. 
                My work strips away the distraction of color to reveal the raw emotion, geometry, and texture of the subject.
              </p>
              <p>
                Whether shooting architecture, intimate portraits, or desolate landscapes, my philosophy remains the same: 
                simplicity is the ultimate sophistication. I believe that in the absence of color, light speaks loudest.
              </p>
              <p>
                My work has been featured in international galleries and private collections, focusing on the interplay between deep shadows and stark highlights.
              </p>
            </div>
            
            <div className="mt-12">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-80 invert dark:invert-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
