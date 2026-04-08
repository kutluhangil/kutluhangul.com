import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Kutluhan brings a rare combination of technical precision and creative thinking. His attention to detail in both code quality and visual design consistently raised the bar for our team.",
    author: "Deniz Yılmaz",
    role: "Team Lead · GoIT Full Stack Program",
    initials: "DY",
  },
  {
    quote:
      "Working with Kutluhan during our Cinemania project was seamless. He owned his features independently, communicated clearly, and delivered pixel-perfect results every sprint.",
    author: "Alina Marchenko",
    role: "Frontend Developer · Cinemania Team",
    initials: "AM",
  },
  {
    quote:
      "Kutluhan's problem-solving approach impressed me throughout our collaboration. He doesn't just fix bugs — he understands the root cause and prevents the next three.",
    author: "Mykola Hrytsenko",
    role: "Fullstack Developer · GoIT Cohort",
    initials: "MH",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">What People Say</h2>
          <p className="text-muted-foreground font-light">
            Feedback from teammates and collaborators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col gap-8 border border-border/40 p-8 hover:bg-muted/20 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="text-4xl font-display text-muted-foreground/30 leading-none select-none">
                &ldquo;
              </div>

              <p className="text-foreground/70 font-light leading-relaxed text-sm md:text-base flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 border-t border-border/40 pt-6">
                {/* Avatar initials */}
                <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-[10px] font-semibold tracking-wider shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
