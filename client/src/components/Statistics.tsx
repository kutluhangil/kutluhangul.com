import { motion } from "framer-motion";

const stats = [
  {
    number: "2.5+",
    label: "Years in Tech"
  },
  {
    number: "10+",
    label: "Projects Built"
  },
  {
    number: "8+",
    label: "Years Professional"
  },
  {
    number: "∞",
    label: "Coffee Consumed"
  }
];

export function Statistics() {
  return (
    <section className="py-32 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-display text-foreground mb-3">
                {stat.number}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
