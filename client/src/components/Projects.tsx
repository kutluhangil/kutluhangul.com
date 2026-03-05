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
    fullDescription: (
      <div className="space-y-4 text-sm md:text-base">
        <p>
          Cinemania simulates a real-world movie discovery platform. Users can browse trending films, search movies by keyword or year, explore upcoming releases, and manage a personalized movie library.
        </p>
        <div>
          <h4 className="font-semibold text-foreground mb-2 italic">Core Features (MVP)</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Mobile-first responsive layout (320px / 768px / 1280px)</li>
            <li>Theme switcher (Dark / Light) with localStorage persistence</li>
            <li>Hero section with daily trending movie</li>
            <li>Movie detail modal with trailer support</li>
            <li>My Library with add/remove logic (localStorage)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2 italic">Additional Features</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Weekly Trends & Upcoming This Month sections</li>
            <li>Catalog search with year filter</li>
            <li>Server-side pagination & Load more functionality</li>
            <li>Global loader (spinner) for async requests</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2 italic">Technologies Used</h4>
          <p className="text-muted-foreground">HTML5, CSS3 (Flexbox & Grid), Vanilla JavaScript (ES6+), Vite, Git & GitHub, TMDB API.</p>
        </div>
      </div>
    ),
    image: cinemaniaImg,
    links: {
      github: "https://github.com/kutluhangil",
      live: "https://january-javascript-project.github.io/cinemania/"
    }
  },
  {
    title: "FOCUS FRAME",
    subtitle: "Photography School Landing Page",
    description: "A single-page, fully responsive photography school website developed as part of the GoIT Full Stack Developer course. The page includes sections for courses, mentors, reviews, contact information, and a professional footer.",
    fullDescription: (
      <div className="space-y-4 text-sm md:text-base">
        <p>
          Focus.Frame simulates a real landing page experience with a Hero section, Course cards (Basics, Landscape, Portrait), Mentor profiles, Student Reviews, and a Sign Up form.
        </p>
        <div>
          <h4 className="font-semibold text-foreground mb-2 italic">Technical Specifications</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Mobile-first responsive layout (375px / 768px / 1280px)</li>
            <li>Image optimization for Retina displays</li>
            <li>SVG icons via sprite & Validated HTML5/CSS3 semantics</li>
            <li>Dotted grid background applied as a PNG image for a technical look</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2 italic">Project Structure</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
            <li><strong>Header:</strong> Logo, navigation, and Sign Up link with fixed dropdown sidebar on mobile.</li>
            <li><strong>Hero:</strong> Atmospheric introduction with student info and references.</li>
            <li><strong>Courses:</strong> Detailed list of photography courses with numbered cards.</li>
            <li><strong>Mentors & Reviews:</strong> Professional profiles and student feedback with rating system.</li>
            <li><strong>Footer:</strong> Comprehensive company info, social links (Instagram, YouTube, Facebook), and subscription form.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2 italic">Technologies Used</h4>
          <p className="text-muted-foreground">HTML5, CSS3, Flexbox & CSS Grid, Git & GitHub, Figma design reference.</p>
        </div>
      </div>
    ),
    image: focusFrameImg,
    links: {
      github: "https://github.com/kutluhangil/goit-focusframe-project",
      live: "https://kutluhangil.github.io/goit-focusframe-project/"
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
                  <div className="space-y-6 text-foreground/70 font-light leading-relaxed mb-12">
                    {selectedProject.fullDescription}
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
