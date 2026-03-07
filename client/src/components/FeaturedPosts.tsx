import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@shared/schema";
import { api } from "@shared/routes";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function FeaturedPosts() {
  const { data: posts } = useQuery<Post[]>({
    queryKey: [api.posts.list.path]
  });

  const featured = posts?.slice(0, 3) || [];

  return (
    <section className="py-32 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-4">Latest Articles</h2>
            <p className="text-muted-foreground font-light">
              Thoughts on development, design, and building in public.
            </p>
          </div>
          <Link href="/blog" className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 hidden md:flex items-center gap-2">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {featured.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[8px] tracking-widest uppercase px-2 py-1 border border-border/40 bg-muted/30">
                  {post.category}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {new Date(post.createdAt!).toLocaleDateString("en-US", { 
                    month: "short", 
                    day: "numeric" 
                  })}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-display mb-3 group-hover:text-muted-foreground transition-colors cursor-pointer line-clamp-2">
                {post.title}
              </h3>
              <p className="text-foreground/60 font-light text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <Link href="/blog" className="text-[10px] uppercase tracking-widest border-b border-foreground/20 group-hover:border-foreground transition-colors pb-1">
                Read More
              </Link>
            </motion.article>
          ))}
        </div>

        <Link href="/blog" className="flex md:hidden text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 mt-12 items-center gap-2">
          View All Articles <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
