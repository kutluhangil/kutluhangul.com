import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cinemaniaImg from "@assets/Desktop_Home_1772658643356.png";
import focusFrameImg from "@assets/FocusFrame_1440_1772658643357.png";
import { X } from "lucide-react";

const projects = [
  {
    title: "CINEMANIA",
    subtitle: "Digital Movie Discovery Platform",
    description: "A fully responsive, multi-page web application developed as a collaborative group project within the GoIT Full Stack Developer Program. The platform allows users to discover trending movies, explore upcoming releases, manage a personal movie library, and view detailed movie information using real-time data from The Movie Database (TMDB) API.",
    fullDescription: "Cinemania simulates a real-world movie discovery platform. The application is designed with a Mobile-First approach and follows modern frontend best practices including semantic HTML, modular CSS architecture, and asynchronous JavaScript logic. Features include: Theme switcher (Dark / Light) with localStorage, Movie detail modal with trailer support, My Library with add/remove logic (localStorage), Weekly Trends & Upcoming sections, Catalog search with year filter, and Server-side pagination. Developed as a collaborative group project within the GoIT Full Stack Developer Program.",
    image: cinemaniaImg,
    links: {
      github: "https://github.com",
      live: "https://github.com"
    }
  },
  {
    title: "FOCUS FRAME",
    subtitle: "Photography School Landing Page",
    description: "A single-page, fully responsive photography school website developed as part of the GoIT Full Stack Developer course. The page includes sections for courses, mentors, reviews, contact information, and a professional footer.",
    fullDescription: "Focus.Frame simulates a real landing page experience with a Hero section, Course cards (Basics, Landscape, Portrait), Mentor profiles, Student Reviews, and a Sign Up form. Technical features include: Mobile-first responsive layout (375px / 768px / 1280px), Image optimization for Retina displays, SVG icons via sprite, and validated HTML5/CSS3 semantics. Dotted grid background applied as a PNG image for a technical, precise look. Developed as part of the GoIT Full Stack Developer course.",
    image: focusFrameImg,
    links: {
      github: "https://github.com",
      live: "https://github.com"
    }
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${index}`}
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
                <p className="text-muted-foreground font-light mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex gap-6">
                  <span className="text-xs uppercase tracking-widest border-b border-foreground/20 group-hover:border-foreground transition-colors pb-1">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-background border border-border/40 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 hover:bg-muted transition-colors rounded-full"
                data-testid="button-close-modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square overflow-hidden bg-muted">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[10px] tracking-widest uppercase text-muted-foreground mb-4 block">{selectedProject.subtitle}</span>
                  <h3 className="text-3xl md:text-5xl font-display mb-8">{selectedProject.title}</h3>
                  <div className="space-y-6 text-foreground/70 font-light leading-relaxed text-lg mb-12">
                    <p>{selectedProject.description}</p>
                    <p>{selectedProject.fullDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-8">
                    <a href={selectedProject.links.github} target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">GitHub Repo</a>
                    <a href={selectedProject.links.live} target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">Live Demo</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
