import { db } from "./db";
import { posts, nowContent } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Seed Now page
  const existingNow = await db.select().from(nowContent);
  if (existingNow.length === 0) {
    await db.insert(nowContent).values({
      content: "I am currently finishing my Full Stack Development program at GoIT. Building a modern portfolio and deep diving into React and Node.js ecosystems. Also exploring photography and minimalist design."
    });
    console.log("Seeded 'Now' content.");
  }

  // Seed Blog/Notes/Case Studies
  const existingPosts = await db.select().from(posts);
  if (existingPosts.length === 0) {
    const seedPosts = [
      {
        title: "Why every developer needs a blog",
        slug: "why-developer-blog",
        excerpt: "Sharing knowledge is the best way to solidify your own understanding.",
        content: "A blog isn't just for others; it's a tool for you to document your learning journey, explain complex concepts to your future self, and establish your presence in the developer community.",
        category: "Blog"
      },
      {
        title: "React Query Best Practices",
        slug: "react-query-tips",
        excerpt: "Quick notes on managing server state efficiently.",
        content: "Always use descriptive query keys. Leverage the `select` option for data transformation. Don't forget to handle loading and error states globally using a custom hook.",
        category: "Note"
      },
      {
        title: "Cinemania: A Case Study",
        slug: "cinemania-case-study",
        excerpt: "A deep dive into building a movie discovery platform.",
        content: "Challenges included managing complex state across multiple pages and optimizing API calls to TMDB. We used a modular architecture to ensure scalability and ease of collaboration.",
        category: "Case Study"
      }
    ];

    await db.insert(posts).values(seedPosts);
    console.log("Seeded posts.");
  }

  console.log("Seeding complete.");
}

seed().catch(console.error).then(() => process.exit(0));
