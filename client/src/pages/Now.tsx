import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { NowEntry } from "@shared/schema";
import { api } from "@shared/routes";
import { Loader2 } from "lucide-react";

export default function Now() {
  const { data: now, isLoading } = useQuery<NowEntry>({
    queryKey: [api.now.get.path]
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display mb-12 italic">Now</h1>
        
        <div className="border-l border-border/40 pl-8 space-y-8">
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          ) : (
            <>
              <div className="text-2xl md:text-3xl font-light text-foreground/80 leading-relaxed">
                {now?.content}
              </div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground">
                Last updated: {now?.updatedAt ? new Date(now.updatedAt).toLocaleDateString() : "Recently"}
              </div>
            </>
          )}
        </div>

        <div className="mt-24 space-y-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About this page</h2>
          <p className="text-foreground/60 font-light leading-relaxed max-w-xl">
            Inspired by Derek Sivers, this is a "Now" page. It tells you what I’m focused on at this point in my life. It’s a great way to stay accountable and share my current trajectory.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
