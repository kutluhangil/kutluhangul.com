import { motion } from "framer-motion";
import { BookOpen, Code2, Headphones, MapPin, Target } from "lucide-react";

const nowItems = [
  {
    icon: Code2,
    label: "Building",
    content: "Actively working on my portfolio at kutluhangul.com and deepening my full-stack skills with the GoIT Full Stack Developer program. Currently exploring Node.js, MongoDB, and REST API design patterns.",
  },
  {
    icon: Target,
    label: "Focus",
    content: "Job hunting. Looking for my first professional developer role — open to full-time positions, junior roles, and freelance collaborations. If you need a motivated developer who ships, let's talk.",
  },
  {
    icon: BookOpen,
    label: "Reading",
    content: "\"The Pragmatic Programmer\" by David Thomas & Andrew Hunt. Slowly working through \"Clean Code\" in parallel. Both are reshaping how I think about code quality.",
  },
  {
    icon: Headphones,
    label: "Listening",
    content: "A mix of ambient electronic and post-rock for deep coding sessions. Lately hooked on Ólafur Arnalds and 65daysofstatic. Lo-fi hip-hop for lighter work.",
  },
  {
    icon: MapPin,
    label: "Location",
    content: "Based in Istanbul, Turkey. Open to remote work globally and on-site opportunities in Turkey.",
  },
];

// Son güncelleme tarihi — manuel güncelle
const LAST_UPDATED = "April 2026";

export default function Now() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display mb-4 italic">Now</h1>
        <p className="text-muted-foreground font-light mb-16 text-lg">
          Last updated:{" "}
          <span className="text-foreground">{LAST_UPDATED}</span>
        </p>

        {/* Now items */}
        <div className="space-y-12 mb-24">
          {nowItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid grid-cols-[auto_1fr] gap-6 items-start border-b border-border/40 pb-12 last:border-0"
              >
                <div className="flex flex-col items-center gap-2 pt-1">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    {item.label}
                  </p>
                  <p className="text-foreground/80 font-light leading-relaxed text-lg">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About this page */}
        <div className="border-t border-border/40 pt-16 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About this page</h2>
          <p className="text-foreground/60 font-light leading-relaxed max-w-xl">
            Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-foreground/20 hover:border-foreground transition-colors"
            >
              Derek Sivers
            </a>
            , this is a &ldquo;Now&rdquo; page. It tells you what I&apos;m focused on at this point in my life.
            It&apos;s a great way to stay accountable and share my current trajectory.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
