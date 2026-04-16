import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();
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
              src="/images/profile-avatar.jpg"
              alt="Kutluhan Gül"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
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
              {t("about.title")} <br/><span className="italic text-muted-foreground">{t("about.title2")}</span>
            </h2>
            <div className="space-y-6 text-foreground/70 font-light leading-relaxed text-lg mb-8">
              <p>
                {t("about.p1")}
              </p>
              <p>
                {t("about.p2")}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">{t("about.skills")}</h3>
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
              <a href="/documents/Kutluhan_Gul_Full_Stack_Developer.pdf" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 font-medium">{t("about.resume")}</a>
              <a href="/documents/Kutluhan_Gul_Full_Stack_Developer.pdf" download="Kutluhan_Gul_Full_Stack_Developer.pdf" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 font-medium">{t("about.download")}</a>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border/40 pt-16">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">{t("about.exp")}</h3>
            <div className="space-y-12">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("exp.1.date")}</span>
                <h4 className="text-xl font-display">{t("exp.1.company")}</h4>
                <p className="text-sm text-foreground mb-4">{t("exp.1.role")}</p>
                <div className="text-sm font-light text-foreground/70 leading-relaxed space-y-2 border-l border-border/40 pl-4">
                  <p>{t("exp.1.desc1")}</p>
                  <p>{t("exp.1.desc2")}</p>
                  <p>{t("exp.1.desc3")}</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("exp.2.date")}</span>
                <h4 className="text-xl font-display">{t("exp.2.company")}</h4>
                <p className="text-sm text-foreground mb-4">{t("exp.2.role")}</p>
                <p className="text-sm font-light text-foreground/70 leading-relaxed border-l border-border/40 pl-4">
                  {t("exp.2.desc")}
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("exp.3.date")}</span>
                <h4 className="text-xl font-display">{t("exp.3.company")}</h4>
                <p className="text-sm text-foreground mb-4">{t("exp.3.role")}</p>
                <p className="text-sm font-light text-foreground/70 leading-relaxed border-l border-border/40 pl-4">
                  {t("exp.3.desc")}
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("exp.4.date")}</span>
                <h4 className="text-xl font-display">{t("exp.4.company")}</h4>
                <p className="text-sm text-foreground mb-4">{t("exp.4.role")}</p>
                <div className="text-sm font-light text-foreground/70 leading-relaxed space-y-2 border-l border-border/40 pl-4">
                  <p>{t("exp.4.desc1")}</p>
                  <p>{t("exp.4.desc2")}</p>
                  <p>{t("exp.4.desc3")}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">{t("about.edu")}</h3>
            <div className="space-y-12">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("edu.1.date")}</span>
                <h4 className="text-xl font-display">{t("edu.1.school")}</h4>
                <p className="text-sm text-foreground/70">{t("edu.1.program")}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("edu.2.date")}</span>
                <h4 className="text-xl font-display">{t("edu.2.school")}</h4>
                <p className="text-sm text-foreground/70">{t("edu.2.program")}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("edu.3.date")}</span>
                <h4 className="text-xl font-display">{t("edu.3.school")}</h4>
                <p className="text-sm text-foreground/70">{t("edu.3.program")}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("edu.4.date")}</span>
                <h4 className="text-xl font-display">{t("edu.4.school")}</h4>
                <p className="text-sm text-foreground/70">{t("edu.4.program")}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-xs text-muted-foreground mb-1 block">{t("edu.5.date")}</span>
                <h4 className="text-xl font-display">{t("edu.5.school")}</h4>
                <p className="text-sm text-foreground/70">{t("edu.5.program")}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
