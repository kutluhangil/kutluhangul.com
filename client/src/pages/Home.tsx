import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Statistics } from "@/components/Statistics";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Timeline } from "@/components/Timeline";
import { GitHubStats } from "@/components/GitHubStats";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Hero />
      <About />
      <Statistics />
      <Skills />
      <Projects />
      <FeaturedPosts />
      <Timeline />
      <GitHubStats />
      <Newsletter />
      <Contact />
    </main>
  );
}
