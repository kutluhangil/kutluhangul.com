import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Dev" | "Notes" | "Photography";

const categories: Category[] = ["All", "Dev", "Notes", "Photography"];

const staticPosts = [
  {
    id: 1,
    title: "From Operations to Code: My Career Transition Story",
    excerpt:
      "After 8+ years in hospitality and logistics, making the decision to pivot into software development was the most deliberate — and terrifying — choice I've made. Here's what I learned.",
    category: "Notes",
    date: "2025-03-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Cinemania: Lessons from My First Team Project",
    excerpt:
      "Working in a team of 5 across different timezones taught me more about real-world development than any solo project. Here's a breakdown of our workflow, decisions, and the bugs that haunted us.",
    category: "Dev",
    date: "2025-02-28",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The 'Now' Page Philosophy",
    excerpt:
      "Derek Sivers' concept of a '/now' page is deceptively simple but surprisingly powerful. It forces you to articulate what you're actually focused on — not just what you want people to think you're doing.",
    category: "Notes",
    date: "2025-01-10",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Why I Shoot in Black & White",
    excerpt:
      "Color can be a crutch. When you remove it, your eye is forced to look for light, shadow, form, and texture. This is what drew me to monochromatic photography — and kept me there.",
    category: "Photography",
    date: "2024-12-05",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Understanding React Query: No More useEffect for Data Fetching",
    excerpt:
      "I resisted using React Query for months. Once I understood what it was actually solving — server state vs. client state — I couldn't imagine going back to manual fetch + useEffect patterns.",
    category: "Dev",
    date: "2024-11-20",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "On Vibecoding: When Intuition Meets Engineering",
    excerpt:
      "There's a moment in development where you're no longer just following a tutorial or copying a pattern — you're feeling your way through the problem. I call this vibecoding, and it's worth cultivating.",
    category: "Dev",
    date: "2024-10-14",
    readTime: "5 min read",
  },
];

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
                  <p className="text-foreground/70 font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">
                    Read More
                  </button>
                </article>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
