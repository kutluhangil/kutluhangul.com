import { motion } from "framer-motion";

const gear = [
  {
    category: "Hardware",
    items: ["Mac Mini", "LG 27\" 4K Monitor", "Keychron K2 Keyboard", "Logitech MX Master 3S"]
  },
  {
    category: "Development",
    items: ["VS Code", "GitHub", "Figma", "Terminal (Zsh)"]
  },
  {
    category: "Tools",
    items: ["Postman", "Chrome DevTools", "Notion", "Slack"]
  }
];

export default function Uses() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display mb-8 italic">Uses</h1>
        <p className="text-muted-foreground text-lg font-light mb-16 leading-relaxed">
          The hardware, software, and tools I use daily to build digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {gear.map((section) => (
            <div key={section.category}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 border-b border-border/40 pb-4">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="text-xl font-light text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
