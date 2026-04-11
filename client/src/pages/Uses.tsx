import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// ✏️ Ekipmanlarını buraya ekle/güncelle
const gear = [
  {
    category: "Hardware",
    items: [
      { name: "MacBook Pro", note: "Primary development machine" },
      { name: "External Monitor", note: "For extended workspace" },
      { name: "Mechanical Keyboard", note: "Daily driver for coding" },
      { name: "Mouse", note: "Precision pointing device" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "VS Code", note: "Primary code editor", url: "https://code.visualstudio.com" },
      { name: "GitHub", note: "Version control & collaboration", url: "https://github.com" },
      { name: "Figma", note: "UI design & prototyping", url: "https://figma.com" },
      { name: "Terminal (Zsh)", note: "With Oh My Zsh" },
    ],
  },
  {
    category: "Tools & Apps",
    items: [
      { name: "Postman", note: "API testing & documentation", url: "https://postman.com" },
      { name: "Chrome DevTools", note: "Debugging & performance profiling" },
      { name: "Notion", note: "Notes, planning & documentation", url: "https://notion.so" },
      { name: "Vercel", note: "Deployment & hosting", url: "https://vercel.com" },
    ],
  },
  {
    category: "Tech Stack",
    items: [
      { name: "React + TypeScript", note: "Frontend framework of choice" },
      { name: "Node.js + Express", note: "Backend runtime & framework" },
      { name: "MongoDB & PostgreSQL", note: "Database solutions" },
      { name: "Tailwind CSS", note: "Utility-first styling" },
    ],
  },
];

export default function Uses() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display mb-4 italic">Uses</h1>
        <p className="text-muted-foreground text-lg font-light mb-4 leading-relaxed">
          The hardware, software, and tools I use daily to build digital products.
        </p>
        <p className="text-xs text-muted-foreground/60 font-light mb-16">
          ✏️ This page will be updated as my setup evolves. Equipment photos coming soon.
        </p>

        <div className="space-y-20">
          {gear.map((section, sectionIdx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 border-b border-border/40 pb-4">
                {section.category}
              </h3>
              <ul className="space-y-6">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4 group">
                    <div>
                      <p className="text-xl font-light text-foreground/80 group-hover:text-foreground transition-colors">
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="text-sm text-muted-foreground font-light mt-1">{item.note}</p>
                      )}
                    </div>
                    {"url" in item && item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/40 hover:text-foreground transition-colors mt-1 flex-shrink-0"
                        aria-label={`Visit ${item.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Photo placeholder note */}
        <div className="mt-24 border border-border/40 border-dashed p-8 text-center">
          <p className="text-muted-foreground/60 font-light text-sm">
            📸 Equipment photos coming soon — I'll be adding real images of my setup here.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
