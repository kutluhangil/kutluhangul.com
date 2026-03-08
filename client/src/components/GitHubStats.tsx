import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Users, Package } from "lucide-react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const githubUsername = "kutluhangil";

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading || !stats) return null;

  const metrics = [
    {
      icon: Package,
      number: stats.public_repos,
      label: "Public Repositories"
    },
    {
      icon: Users,
      number: stats.followers,
      label: "Followers"
    },
    {
      icon: Users,
      number: stats.following,
      label: "Following"
    }
  ];

  return (
    <section className="py-32 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4"
        >
          <Github className="w-6 h-6" />
          <div>
            <h2 className="text-3xl md:text-4xl font-display">GitHub Activity</h2>
            <p className="text-muted-foreground font-light mt-2">Live stats from my GitHub profile</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="border border-border/40 p-8 hover:bg-muted/20 transition-colors"
              >
                <Icon className="w-6 h-6 text-muted-foreground mb-4" />
                <div className="text-4xl md:text-5xl font-display mb-3">
                  {metric.number}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            className="text-xs uppercase tracking-widest border-b border-foreground/20 hover:border-foreground transition-colors pb-1 inline-flex items-center gap-2"
          >
            View Profile <Github className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
