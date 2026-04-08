import { motion } from "framer-motion";
import profileImg from "@assets/0B2A8300a_-_Copy_(2)ss_1772740463085.jpg";

export function About() {
  const skills = [
    "HTML/CSS", "JavaScript", "React", "TypeScript", 
    "Node.js", "REST API", "Redux", "Clean UI", 
    "Git", "Prompt Engineering", "Vibecoding"
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="aspect-square w-full max-w-md mx-auto overflow-hidden relative group rounded-2xl"
          >
            <img
              src={profileImg}
              alt="Kutluhan Gül"
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none" />
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
            <div className="space-y-6 text-foreground/70 font-light leading-relaxed text-lg mb-8">
              <p>
                Full Stack Developer in transition with 2.5+ years of experience as a Senior Selling Partner Support Associate at Amazon. 
                In 2024, I made a deliberate career shift into software development to build strong technical foundations in modern web technologies.
              </p>
              <p>
                Backed by 8+ years of international professional experience, including hospitality and supervisory roles in the United States, 
                I bring strong analytical thinking, problem-solving skills, and a disciplined work ethic to every project.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 border border-border/40 text-xs uppercase tracking-widest bg-muted/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8">
              <a href="https://linkedin.com/in/kutluhangil" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">LinkedIn</a>
              <a href="https://github.com/kutluhangil" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">GitHub</a>
              <a href="https://linkedin.com/in/kutluhangil" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 font-medium">View Online Resume</a>
              <a href="https://linkedin.com/in/kutluhangil" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 font-medium">Download PDF</a>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border/40 pt-16">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">Work Experience</h3>
            <div className="space-y-12">
              <div>
                <span className="text-xs text-muted-foreground mb-1 block">2022 — 2024</span>
                <h4 className="text-xl font-display">Amazon (Remote)</h4>
                <p className="text-sm text-muted-foreground mb-4">Senior Selling Partner Support Associate</p>
                <p className="text-sm font-light text-foreground/70 leading-relaxed">
                  Delivered multi-channel technical support to over 60 active sellers across European marketplaces, resolving complex issues related to product listings and backend system errors.
                </p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground mb-1 block">2021 — 2022</span>
                <h4 className="text-xl font-display">Crowne Plaza Istanbul</h4>
                <p className="text-sm text-muted-foreground mb-4">Guest Service Agent</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground mb-1 block">2013 — 2016</span>
                <h4 className="text-xl font-display">Park City, Utah, USA</h4>
                <p className="text-sm text-muted-foreground mb-4">Hospitality & Supervisory Roles</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">Education</h3>
            <div className="space-y-12">
              <div>
                <span className="text-xs text-muted-foreground mb-1 block">2025 — Present</span>
                <h4 className="text-xl font-display">IT School GoIT</h4>
                <p className="text-sm text-muted-foreground">Full Stack Developer Program</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground mb-1 block">2022 — 2026</span>
                <h4 className="text-xl font-display">Anadolu University</h4>
                <p className="text-sm text-muted-foreground">Associate's degree in Computer Programming</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground mb-1 block">2009 — 2014</span>
                <h4 className="text-xl font-display">Mustafa Kemal University</h4>
                <p className="text-sm text-muted-foreground">Bachelor's Degree in Tourism and Hotel Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
