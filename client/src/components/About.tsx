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
              Kutluhan <br/><span className="italic text-muted-foreground">Gül</span>.
            </h2>
            <div className="space-y-6 text-foreground/70 font-light leading-relaxed text-lg">
              <p>
                I am a Full Stack Developer with 2.5+ years of experience as a Senior Selling Partner Support Associate at Amazon, 
                where I handled complex cases and technical troubleshooting in high-performance environments. 
                In 2024, I made a deliberate transition into software development, focusing on building clean, scalable, and user-centered digital products.
              </p>
              <p>
                Specializing in HTML, CSS, JavaScript, React, and Node.js, I bring strong analytical thinking and problem-solving skills 
                from my 8+ years of international professional experience. I am an associate degree graduate in Computer Programming and Web Coding from Anadolu University.
              </p>
              <p>
                When I'm not coding, I'm capturing the world through my lens, focusing on the raw geometry and silent moments that often go unnoticed.
              </p>
            </div>
            
            <div className="mt-12 flex gap-6">
              <a href="https://linkedin.com" target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">LinkedIn</a>
              <a href="https://github.com" target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">GitHub</a>
              <a href="#" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">Download CV</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
