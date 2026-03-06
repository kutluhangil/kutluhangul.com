import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import { api } from "@shared/routes";
import { Loader2 } from "lucide-react";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: [api.posts.list.path]
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display mb-8">Blog & Notes</h1>
        <p className="text-muted-foreground text-lg font-light mb-16 leading-relaxed">
          Sharing my journey, technical notes, and project breakdowns.
        </p>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="space-y-20">
            {posts?.map((post) => (
              <article key={post.id} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] tracking-widest uppercase px-2 py-1 border border-border/40 bg-muted/30">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.createdAt!).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-4 group-hover:text-muted-foreground transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-foreground/70 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1">
                  Read More
                </button>
              </article>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
