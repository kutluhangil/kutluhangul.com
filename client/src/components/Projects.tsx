import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

type FilterKey = "All" | "HTML/CSS" | "React" | "Node.js";

const filters: FilterKey[] = ["All", "HTML/CSS", "React", "Node.js"];

const projects = [
  {
    title: "CINEMANIA",
    subtitle: "Digital Movie Discovery Platform",
    tags: ["HTML/CSS"] as FilterKey[],
    description: "A fully responsive, multi-page web application developed as a collaborative group project within the GoIT Full Stack Developer Program. The platform allows users to discover trending movies, explore upcoming releases, manage a personal movie library, and view detailed movie information using real-time data from The Movie Database (TMDB) API.",
    fullDescription: (
      <div className="space-y-8 text-sm md:text-base">
        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">📖</span> About the Project</h4>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Cinemania simulates a real-world movie discovery platform. Users can browse trending films, search movies by keyword or year, explore upcoming releases, and manage a personalized movie library.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            The application is designed with a Mobile-First approach and follows modern frontend best practices including semantic HTML, modular CSS architecture, and asynchronous JavaScript logic.
          </p>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">✨</span> Core Features (MVP)</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light mb-4">
            <li>Mobile-first responsive layout (320px / 768px / 1280px)</li>
            <li>Theme switcher (Dark / Light) with localStorage persistence</li>
            <li>Hero section with daily trending movie</li>
            <li>Movie detail modal with trailer support</li>
            <li>My Library with add/remove logic (localStorage)</li>
            <li>Footer with team modal (GoIT Students)</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">🚀</span> Additional Features</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light mb-4">
            <li>Weekly Trends & Upcoming This Month sections</li>
            <li>Catalog search with year filter</li>
            <li>Server-side pagination & Load more functionality</li>
            <li>Scroll-to-top button & Global loader (spinner) for async requests</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">⚙️</span> Technical Requirements</h4>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-light">
            <li><strong>Semantics:</strong> Semantic HTML5 & Modern-normalize integrated.</li>
            <li><strong>Performance:</strong> Optimized retina-ready images, PageSpeed score ≥ 80%.</li>
            <li><strong>Assets:</strong> Fonts via @font-face, all static assets under src/images.</li>
            <li><strong>Validation:</strong> Passed W3C HTML & CSS validation, no console errors.</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">🛠️</span> Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["HTML5", "CSS3 (Flexbox & Grid)", "Vanilla JS (ES6+)", "Vite", "Git & GitHub", "TMDB API"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-muted/40 text-[10px] uppercase tracking-widest border border-border/40">{tech}</span>
            ))}
          </div>
        </section>
        
        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">👥</span> Team Members & Responsibilities</h4>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            This project was developed collaboratively as part of the GoIT group project under the leadership of Team Lead Çiğdem Ergal and Scrum Master Halenur Gürel.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            As a Developer in the team, my primary responsibility was building the <strong>Footer & Team Modal</strong>, ensuring a responsive design and seamless integration with the rest of the application.
          </p>
        </section>
      </div>
    ),
    image: "/images/projects/covers/cinemania.png",
    modalImage: "/images/projects/cinemania.jpg",
    links: {
      github: "https://github.com/kutluhangil",
      live: "https://january-javascript-project.github.io/cinemania/"
    }
  },
  {
    title: "FOCUS FRAME",
    subtitle: "Photography School Landing Page",
    tags: ["HTML/CSS"] as FilterKey[],
    description: "A single-page, fully responsive photography school website developed as part of the GoIT Full Stack Developer course. The page includes sections for courses, mentors, reviews, contact information, and a professional footer.",
    fullDescription: (
      <div className="space-y-8 text-sm md:text-base">
        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">📖</span> About the Project</h4>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Focus.Frame simulates a real landing page experience. It includes a hero section introducing the school, course cards (Basics, Landscape, Portrait), mentor profiles, student reviews, a sign-up form, and a professional footer with social links.
          </p>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">✨</span> Core Features and Requirements</h4>
          <p className="font-medium text-foreground mb-2">Layout and Responsiveness 📱💻🖥️</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light mb-4">
            <li>Mobile: Responsive from 375px</li>
            <li>Tablet: Responsive from 768px</li>
            <li>Desktop: Responsive from 1280px (optimization for 1440px)</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">⚙️</span> Technical Specifications</h4>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-light">
            <li><strong>Validation:</strong> Must pass HTML/CSS validation via W3C validators.</li>
            <li><strong>Semantics:</strong> Must comply with HTML5 semantic standards.</li>
            <li><strong>Image Optimization:</strong> Optimized dimensions for vector and raster images, support for Retina displays, and optimized loading.</li>
            <li><strong>SVG Icons:</strong> All icons must be linked via a sprite.</li>
            <li><strong>Styling:</strong> Dotted grid background applied as a PNG image, fonts externally linked, Flexbox & CSS Grid layout.</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">🚧</span> Challenges</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light">
            <li>Maintaining pixel-perfect alignment with Figma mockups</li>
            <li>Ensuring responsive design at all breakpoints</li>
            <li>Keeping fonts, spacing, and icons consistent</li>
            <li>Team coordination and resolving merge conflicts</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">🛠️</span> Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["HTML5", "CSS3", "Flexbox & CSS Grid", "Figma", "Git & GitHub"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-muted/40 text-[10px] uppercase tracking-widest border border-border/40">{tech}</span>
            ))}
          </div>
        </section>
        
        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">👥</span> Team Members</h4>
          <p className="text-muted-foreground font-light leading-relaxed">
            This project was developed collaboratively as part of the GoIT group project. I was specifically responsible for developing the complete Footer section. We collaborated using GitHub branches, Pull Requests, and Trello for task management.
          </p>
        </section>
      </div>
    ),
    image: "/images/projects/covers/focusframe.png",
    modalImage: "/images/projects/focusframe.png",
    links: {
      github: "https://github.com/kutluhangil/goit-focusframe-project",
      live: "https://kutluhangil.github.io/goit-focusframe-project/"
    }
  },
  {
    title: "MONEY GUARD",
    subtitle: "Personal Finance Management App",
    tags: ["React", "Node.js"] as FilterKey[],
    description: "A fully responsive financial management application developed as a collaborative team project. The application allows users to securely register, log in, manage income and expense transactions, and track total balance in real time.",
    fullDescription: (
      <div className="space-y-8 text-sm md:text-base">
        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">📖</span> About the Project</h4>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Money Guard is a React-based financial tracking system where users can securely manage their finances, track transactions, and visualize their spending habits through interactive statistics.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            The application follows a Mobile-First design approach and implements a scalable Redux architecture for global state management.
          </p>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">✨</span> Core Features</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light mb-4">
            <li>Secure Authentication (Register / Login / Logout)</li>
            <li>JWT token persistence via redux-persist</li>
            <li>Transaction CRUD (Create / Read / Update / Delete)</li>
            <li>Responsive Transactions Table & Mobile Card Layout</li>
            <li>Floating "+" Add Transaction Button with Modal Forms</li>
            <li>Automatic balance synchronization & Toast-based error handling</li>
            <li>Statistics Dashboard (Chart.js) & Currency integration (Monobank API)</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">⚙️</span> Technical Architecture</h4>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-light">
            <li><strong>State & Storage:</strong> Redux Toolkit for global state, redux-persist for secure token storage.</li>
            <li><strong>Routing & API:</strong> React Router for private/public routing, Async Thunks for backend communication.</li>
            <li><strong>Layout:</strong> Mobile-first responsive CSS (Grid & Flexbox).</li>
            <li><strong>Architecture:</strong> Component-based modular structure with clear separation of UI and business logic.</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">🛠️</span> Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["React 18", "Redux Toolkit", "React Router", "Yup", "react-hook-form", "Chart.js", "Axios", "Vite", "ESLint"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-muted/40 text-[10px] uppercase tracking-widest border border-border/40">{tech}</span>
            ))}
          </div>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">👥</span> Team Responsibilities & Workflow</h4>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            In this collaborative project, my primary responsibility was the <strong>Transaction CRUD & Modals</strong> logic. I developed the floating Add Transaction button, ModalAddTransaction, AddTransactionForm (using react-hook-form + Yup), and the auto balance synchronization system.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            We implemented a parallel development workflow stringently separated by responsibility layers and relied on unified error handling across the team.
          </p>
        </section>
      </div>
    ),
    image: "/images/projects/covers/moneyguard.png",
    modalImage: [
      "/images/projects/moneyguard/1.jpg", 
      "/images/projects/moneyguard/2.jpg", 
      "/images/projects/moneyguard/3.jpg", 
      "/images/projects/moneyguard/4.jpg"
    ],
    links: {
      github: "https://github.com/kutluhangil",
      live: "https://github.com/kutluhangil"
    }
  },
  {
    title: "SLIM MOMS",
    subtitle: "Calorie Tracker App",
    tags: ["React", "Node.js"] as FilterKey[],
    description: "A fullstack web application for tracking daily calorie intake with personalized recommendations based on the user's physical parameters and blood type.",
    fullDescription: (
      <div className="space-y-8 text-sm md:text-base">
        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">📖</span> About the Project</h4>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Slim Moms allows users to calculate their personalized daily calorie goal based on height, weight, age, and blood type. It features a daily food diary where users can search, add products, and track their consumed calories against their daily limits.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Unregistered users can utilize a quick calorie calculator on the landing page, while authenticated users get access to detailed tracking and personalized non-recommended food lists.
          </p>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">✨</span> Core Features</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-light mb-4">
            <li>Public & Private Routing with persistent JWT sessions via Redux Persist</li>
            <li>Personalized calorie calculator algorithm based on blood types</li>
            <li>Interactive Food Diary with searchable product database</li>
            <li>Dynamic UI rendering based on daily intake vs. goal comparison</li>
            <li>Custom modals displaying personalized non-recommended foods</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">⚙️</span> Technical Architecture</h4>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-light">
            <li><strong>Frontend:</strong> React, Vite, Redux Toolkit, React Router DOM, Axios.</li>
            <li><strong>Backend:</strong> Node.js, Express, MongoDB Atlas, Mongoose.</li>
            <li><strong>Authentication:</strong> JWT (token-based), bcryptjs password hashing.</li>
            <li><strong>Documentation:</strong> Swagger UI Express for interactive API specs.</li>
          </ul>
        </section>

        <section>
          <h4 className="flex items-center gap-2 font-display text-xl mb-4"><span className="text-xl">🛠️</span> Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["React 19", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Swagger UI", "JWT", "Axios", "Vite", "ESLint"].map(tech => (
              <span key={tech} className="px-3 py-1 bg-muted/40 text-[10px] uppercase tracking-widest border border-border/40">{tech}</span>
            ))}
          </div>
        </section>
      </div>
    ),
    image: "/images/projects/covers/slimmoms.png",
    modalImage: [
      "/images/projects/slimmoms/1.jpg", 
      "/images/projects/slimmoms/2.jpg", 
      "/images/projects/slimmoms/3.jpg", 
      "/images/projects/slimmoms/4.jpg",
      "/images/projects/slimmoms/5.jpg"
    ],
    links: {
      github: "https://github.com/goit-nodejs-project/slim-moms",
      live: "https://goit-slim-moms.vercel.app/"
    }
  }
];

const ScrollableImage = ({ src, alt }: { src: string | string[]; alt: string }) => {
  const images = Array.isArray(src) ? src : [src];

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar grayscale hover:grayscale-0 transition-all duration-300 bg-muted">
      <div className="flex flex-col w-full h-max">
        {images.map((imgSrc, i) => (
          <img key={`${imgSrc}-${i}`} src={imgSrc} alt={`${alt} ${i}`} className="w-full h-auto block" />
        ))}
      </div>
    </div>
  );
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Project Case Studies</h2>
          <p className="text-muted-foreground max-w-md font-light">
            Detailed breakdowns of my technical projects, featuring challenges, solutions, and architectural choices.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-foreground text-background border-foreground"
                  : "border-border/40 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                data-testid={`card-project-${index}`}
              >
                <div className="overflow-hidden bg-muted mb-8 relative border border-border/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-widest uppercase text-muted-foreground">{project.subtitle}</span>
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-0.5 border border-border/40 bg-muted/30">
                        {tag}
                      </span>
                    ))}
                  </div>
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
          </AnimatePresence>
        </motion.div>
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
              className="relative w-full max-w-5xl bg-background border border-border/40 shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-background/50 backdrop-blur hover:bg-muted transition-colors rounded-full"
                data-testid="button-close-modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex-1 lg:w-1/2 h-[40vh] lg:h-auto overflow-hidden bg-muted border-b lg:border-b-0 lg:border-r border-border/40 shrink-0">
                {selectedProject.modalImage ? (
                  <ScrollableImage src={selectedProject.modalImage} alt={selectedProject.title} />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover grayscale"
                  />
                )}
              </div>
              <div className="flex-1 lg:w-1/2 p-8 md:p-12 overflow-y-auto lg:max-h-[90vh]">
                  <span className="text-[10px] tracking-widest uppercase text-muted-foreground mb-4 block">{selectedProject.subtitle}</span>
                  <h3 className="text-3xl md:text-5xl font-display mb-8">{selectedProject.title}</h3>
                  <div className="space-y-6 text-foreground/70 font-light leading-relaxed mb-12">
                    {selectedProject.fullDescription}
                  </div>
                  <div className="flex flex-wrap gap-8">
                    <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 flex items-center gap-2">
                      <Github className="w-3 h-3" /> GitHub Repo
                    </a>
                    <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 flex items-center gap-2">
                      <ExternalLink className="w-3 h-3" /> Live Demo
                    </a>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
