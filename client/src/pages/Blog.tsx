import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

type Category = "All" | "Dev" | "Notes";

const categories: Category[] = ["All", "Dev", "Notes"];

const staticPosts = [
  {
    id: 0,
    title: "Successfully Completed the Full Stack Developer Program at GoIT",
    excerpt: (
      <div className="space-y-4">
        <p>After 10 months of intensive learning, I've successfully completed the Full Stack Developer program at GoIT.</p>
        <p>This journey included 700+ hours of training, covering both frontend and backend development in depth.</p>
        <p>During the program, I worked with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React (Hooks, Router, Redux Toolkit)</li>
          <li>Node.js & Express</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>REST APIs</li>
        </ul>
        <p>I completed 36+ technical assignments and 4 team projects. The final project was a comprehensive team project that brought together everything we learned throughout the program.</p>
        <p>Breakdown of the learning process:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>HTML & CSS → 120 hours (6 assignments)</li>
          <li>JavaScript → 234 hours (12 assignments)</li>
          <li>React → 135 hours (8 assignments)</li>
          <li>Node.js → 155 hours (7 assignments)</li>
          <li>TypeScript → 25 hours (3 assignments)</li>
        </ul>
        <p>I successfully passed all exams and earned this certificate.</p>
        <p>In addition to the program, I also developed 8 personal projects during this period, which I'll be sharing gradually.</p>
        <p>You can check my work here:<br />
          🔗 <a href="https://github.com/kutluhangil" className="underline hover:text-foreground">https://github.com/kutluhangil</a><br />
          🔗 <a href="https://www.kutluhangul.com/" className="underline hover:text-foreground">https://www.kutluhangul.com/</a>
        </p>
        <p>(My portfolio website is also one of the projects I built — you can explore my work there in detail.)</p>
        <p>Throughout this journey, I also improved my English by completing additional training focused on understanding and using technical terms in software development.</p>
        <p>It wasn't always easy, but seeing my progress step by step and building real projects made it all worth it.</p>
        <p>This is just the beginning — I'm excited for what's next 🚀</p>
        <p>Finally, I would like to thank the entire GoIT team for their support throughout this journey. Special thanks to Sena for her continuous guidance and support 🙏</p>
      </div>
    ),
    category: "Dev" as Category,
    date: "2026-04-16",
    readTime: "4 min read",
    published: true,
  },
  {
    id: 1,
    title: "From Operations to Code: My Career Transition Story",
    excerpt:
      "After 8+ years in hospitality and logistics, making the decision to pivot into software development was the most deliberate — and terrifying — choice I've made. Here's what I learned.",
    category: "Notes" as Category,
    date: "2025-03-15",
    readTime: "5 min read",
    published: true,
  },
  {
    id: 2,
    title: "Building Cinemania: Lessons from My First Team Project",
    excerpt:
      "Working in a team of 5 across different timezones taught me more about real-world development than any solo project. Here's a breakdown of our workflow, decisions, and the bugs that haunted us.",
    category: "Dev" as Category,
    date: "2025-02-28",
    readTime: "8 min read",
    published: true,
  },
  {
    id: 3,
    title: "The 'Now' Page Philosophy",
    excerpt:
      "Derek Sivers' concept of a '/now' page is deceptively simple but surprisingly powerful. It forces you to articulate what you're actually focused on — not just what you want people to think you're doing.",
    category: "Notes" as Category,
    date: "2025-01-10",
    readTime: "3 min read",
    published: true,
  },
  {
    id: 4,
    title: "CSS Architecture: Why I Stopped Fighting with Specificity",
    excerpt:
      "After months of specificity wars and !important abuse, I finally sat down with BEM, CSS Modules, and utility-first methodologies. Here's what actually stuck and why.",
    category: "Dev" as Category,
    date: "2024-12-05",
    readTime: "4 min read",
    published: true,
  },
  {
    id: 5,
    title: "Understanding React Query: No More useEffect for Data Fetching",
    excerpt:
      "I resisted using React Query for months. Once I understood what it was actually solving — server state vs. client state — I couldn't imagine going back to manual fetch + useEffect patterns.",
    category: "Dev" as Category,
    date: "2024-11-20",
    readTime: "6 min read",
    published: true,
  },
  {
    id: 6,
    title: "On Vibecoding: When Intuition Meets Engineering",
    excerpt:
      "There's a moment in development where you're no longer just following a tutorial or copying a pattern — you're feeling your way through the problem. I call this vibecoding, and it's worth cultivating.",
    category: "Dev" as Category,
    date: "2024-10-14",
    readTime: "5 min read",
    published: true,
  },
];

import { useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? staticPosts
      : staticPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display mb-4">Blog & Notes</h1>
        <p className="text-muted-foreground text-lg font-light mb-12 leading-relaxed">
          Sharing my journey, technical notes, and project breakdowns.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-border/40 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border/40 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            {filtered.length === 0 ? (
              <p className="text-muted-foreground font-light py-20 text-center">
                No posts in this category yet.
              </p>
            ) : (
              filtered.map((post) => (
                <article key={post.id} className="group border-b border-border/40 pb-16 last:border-0">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] tracking-widest uppercase px-2 py-1 border border-border/40 bg-muted/30">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-muted-foreground/60">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display mb-4 group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h2>
                  <div className="text-foreground/70 font-light leading-relaxed mb-6 space-y-4">
                    {post.excerpt}
                  </div>
                  {/* "Read More" — Yazı henüz hazır değil, yakında eklenecek */}
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground/40 cursor-not-allowed select-none border-b border-muted/20 pb-1">
                    Coming Soon
                  </span>
                </article>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
