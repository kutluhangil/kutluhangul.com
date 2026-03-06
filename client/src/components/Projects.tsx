import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cinemaniaImg from "@assets/Desktop_Home_1772658643356.png";
import focusFrameImg from "@assets/FocusFrame_1440_1772658643357.png";
import moneyGuardImg from "@assets/Desktop3_1772813924846.png";
import { X, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CINEMANIA",
    subtitle: "Digital Movie Discovery Platform",
    description: "A fully responsive, multi-page web application developed as a collaborative group project within the GoIT Full Stack Developer Program. The platform allows users to discover trending movies, explore upcoming releases, manage a personal movie library, and view detailed movie information using real-time data from The Movie Database (TMDB) API.",
    fullDescription: (
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Project Overview</h4>
          <p className="text-muted-foreground font-light leading-relaxed">
            Cinemania simulates a real-world movie discovery platform. Users can browse trending films, search movies by keyword or year, explore upcoming releases, and manage a personalized movie library. The application is designed with a Mobile-First approach and follows modern frontend best practices.
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Core Features (MVP)</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light">
            <li>Mobile-first responsive layout (320px / 768px / 1280px)</li>
            <li>Theme switcher (Dark / Light) with localStorage persistence</li>
            <li>Hero section with daily trending movie</li>
            <li>Movie detail modal with trailer support</li>
            <li>My Library with add/remove logic (localStorage)</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Challenges & Lessons</h4>
          <p className="text-muted-foreground font-light leading-relaxed">
            Managing asynchronous data fetching from TMDB and ensuring a seamless UI across different viewports were the primary challenges. I learned the importance of modular CSS architecture and efficient state management for a multi-page application.
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["HTML5", "CSS3", "Vanilla JS", "Vite", "TMDB API", "Git"].map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/50 text-[10px] uppercase tracking-wider border border-border/40">{tech}</span>
            ))}
          </div>
        </section>
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
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Project Overview</h4>
          <p className="text-muted-foreground font-light leading-relaxed">
            Focus.Frame simulates a real landing page experience for a photography school. It includes a hero section, course cards, mentor profiles, student reviews, and a sign-up form.
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Technical Specifications</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light">
            <li>Mobile-first responsive layout (375px / 768px / 1280px)</li>
            <li>Image optimization for Retina displays</li>
            <li>SVG icons via sprite & Validated HTML5/CSS3 semantics</li>
            <li>Dotted grid background applied as a PNG image for a technical look</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Challenges & Lessons</h4>
          <p className="text-muted-foreground font-light leading-relaxed">
            Maintaining pixel-perfect alignment with Figma mockups was crucial. I strengthened my skills in Flexbox and CSS Grid while ensuring consistent spacing and typography across all breakpoints.
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["HTML5", "CSS3", "Flexbox", "CSS Grid", "Figma", "Git"].map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/50 text-[10px] uppercase tracking-wider border border-border/40">{tech}</span>
            ))}
          </div>
        </section>
      </div>
    ),
    image: focusFrameImg,
    links: {
      github: "https://github.com/kutluhangil/goit-focusframe-project",
      live: "https://kutluhangil.github.io/goit-focusframe-project/"
    }
  },
  {
    title: "MONEY GUARD",
    subtitle: "Personal Finance Management App",
    description: "A fully responsive financial management application developed as a collaborative team project. The application allows users to securely register, log in, manage income and expense transactions, and track total balance in real time.",
    fullDescription: (
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Project Overview</h4>
          <p className="text-muted-foreground font-light leading-relaxed">
            Money Guard is a React-based financial tracking system. Users can securely manage their finances, track transactions, and visualize their spending habits through interactive statistics.
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Core Features</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light">
            <li>Secure Authentication (Register / Login / Logout)</li>
            <li>Transaction CRUD operations with automatic balance sync</li>
            <li>Statistics Dashboard with interactive charts (Chart.js)</li>
            <li>Currency integration with Monobank API & LocalStorage cache</li>
            <li>JWT token persistence via redux-persist</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Challenges & Lessons</h4>
          <p className="text-muted-foreground font-light leading-relaxed">
            Implementing global state management with Redux Toolkit and ensuring data persistence were key challenges. I learned how to handle complex asynchronous operations and synchronized state across different components.
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2 italic">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["React", "Redux Toolkit", "Chart.js", "Axios", "Vite", "Yup"].map(tech => (
              <span key={tech} className="px-2 py-1 bg-muted/50 text-[10px] uppercase tracking-wider border border-border/40">{tech}</span>
            ))}
          </div>
        </section>
      </div>
    ),
    image: moneyGuardImg,
    links: {
      github: "https://github.com/kutluhangil",
      live: "https://github.com/kutluhangil"
    }
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Project Case Studies</h2>
          <p className="text-muted-foreground max-w-md font-light">
            Detailed breakdowns of my technical projects, featuring challenges, solutions, and architectural choices.
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
                  <span className="text-xs uppercase tracking-widest border-b border-foreground/20 group-hover:border-foreground transition-colors pb-1 flex items-center gap-2">
                    Case Study Details
                  </span>
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
                    <a href={selectedProject.links.github} target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 flex items-center gap-2">
                      <Github className="w-3 h-3" /> GitHub Repo
                    </a>
                    <a href={selectedProject.links.live} target="_blank" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 flex items-center gap-2">
                      <ExternalLink className="w-3 h-3" /> Live Demo
                    </a>
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
