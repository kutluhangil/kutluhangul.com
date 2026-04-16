import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export function Certificate() {
  return (
    <section id="certificate" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-foreground/20"></span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
              Milestone
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-wider">
            Certificate
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 border border-border/40 p-8 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-full md:w-1/3 aspect-[4/3] bg-muted/20 border border-border/40 relative group overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 duration-300">
              <a 
                href="/certifikate_fullstack_developer.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="bg-background text-foreground px-6 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Full
              </a>
            </div>
            {/* Provide a visual representation or embedded PDF. Using an embed for PDF or an icon. */}
            <div className="text-center text-muted-foreground flex flex-col items-center gap-4">
              <Download className="w-12 h-12 opacity-50" />
              <span className="text-xs uppercase tracking-widest">GoIT Fullstack Developer</span>
            </div>
            {/* If you want to render the PDF preview directly (only works well on desktop) */}
            {/* <embed src="/certifikate_fullstack_developer.pdf" width="100%" height="100%" type="application/pdf" className="hidden md:block absolute inset-0 object-cover" /> */}
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-display mb-2">Full Stack Developer Program</h3>
              <p className="text-muted-foreground font-light text-sm">Issued by GoIT</p>
            </div>
            
            <p className="text-foreground/80 font-light leading-relaxed">
              Successfully completed 700+ hours of intensive training, mastering both frontend and backend development. 
              The curriculum included HTML5, CSS3, JavaScript (ES6+), React, Node.js, MongoDB, TypeScript, and REST APIs, 
              focusing on real-world projects and team collaboration.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40">
              <a
                href="/certifikate_fullstack_developer.pdf"
                download
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity bg-foreground text-background px-6 py-3"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href="/certifikate_fullstack_developer.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity border border-border/40 px-6 py-3"
              >
                <ExternalLink className="w-4 h-4" />
                Open File
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
