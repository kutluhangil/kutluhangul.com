import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 - Present",
    title: "GoIT Full Stack Developer Program",
    description: "Intensive training in modern web technologies, building scalable apps with React, Node.js, and clean architecture.",
    type: "education"
  },
  {
    year: "2022 - 2024",
    title: "Senior Selling Partner Support Associate",
    description: "Amazon (Remote). Delivered multi-channel technical support and resolved complex catalog and backend issues across EU marketplaces.",
    type: "work"
  },
  {
    year: "2021 - 2022",
    title: "Guest Service Agent",
    description: "Crowne Plaza Istanbul. Managed front-desk operations, ensuring smooth check-ins and professional guest experiences.",
    type: "work"
  },
  {
    year: "2019 - 2021",
    title: "Guest Service Agent",
    description: "Radisson Blu Hotel & Spa. Delivered premium front-desk operations, handled reservations and secure transactions.",
    type: "work"
  },
  {
    year: "2017 - 2019",
    title: "Master's Degree in Tourism",
    description: "Atilim University. Master’s Degree in Tourism and Travel Services Management.",
    type: "education"
  },
  {
    year: "2013 - 2016",
    title: "Work & Travel Program (USA)",
    description: "Park City, Utah. Held various roles including Floor Supervisor & Inspector. Managed inventory, operations, and cultural exchange.",
    type: "work"
  }
];

export function Timeline() {
  return (
    <section className="py-32 bg-background border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Career Journey</h2>
          <p className="text-muted-foreground font-light">
            From operations to development—a deliberate transition into software engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/40 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${idx % 2 !== 0 ? "md:text-right" : ""}`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-6 md:left-1/2 top-1.5 w-4 h-4 md:w-5 md:h-5 -translate-x-1/2 bg-background border-2 border-foreground rounded-full z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${idx % 2 !== 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                        {item.type === "education" ? "Education" : "Experience"}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm font-light text-muted-foreground">{item.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display">{item.title}</h3>
                    <p className="text-foreground/70 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
