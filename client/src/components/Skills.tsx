import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST API", "PostgreSQL", "Drizzle ORM", "JWT Auth", "API Design"]
  },
  {
    title: "Tools & Methods",
    skills: ["Git/GitHub", "VS Code", "Figma", "Postman", "Vite", "npm", "Web Design"]
  }
];

export function Skills() {
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
          <h2 className="text-3xl md:text-4xl font-display mb-4">Technical Skills</h2>
          <p className="text-muted-foreground font-light">
            A focused toolkit for building modern, scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 border-b border-border/40 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground/70 font-light">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
