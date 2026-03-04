import { motion } from "framer-motion";
import cinemaniaImg from "@assets/Desktop_Home_1772658643356.png";
import focusFrameImg from "@assets/FocusFrame_1440_1772658643357.png";

const projects = [
  {
    title: "CINEMANIA",
    subtitle: "Digital Movie Discovery Platform",
    description: "A responsive movie discovery experience powered by TMDB API. Built with Vanilla JS, featuring trending movies, personal library, and detail modals.",
    image: cinemaniaImg,
    links: {
      github: "https://github.com",
      live: "https://github.com"
    }
  },
  {
    title: "FOCUS FRAME",
    subtitle: "Photography School Landing Page",
    description: "A single-page responsive photography school website developed based on a Figma design. Features courses, mentors, and student reviews.",
    image: focusFrameImg,
    links: {
      github: "https://github.com",
      live: "https://github.com"
    }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Development Projects</h2>
          <p className="text-muted-foreground max-w-md font-light">
            Selected works from my journey as a Full Stack Developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="aspect-video overflow-hidden bg-muted mb-8 relative border border-border/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground mb-2 block">{project.subtitle}</span>
                <h3 className="text-2xl font-display mb-4">{project.title}</h3>
                <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-6">
                  <a href={project.links.github} target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">Repo</a>
                  <a href={project.links.live} target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
