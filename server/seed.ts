import { db } from "./db";
import { photos } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");
  const existingPhotos = await db.select().from(photos);
  
  if (existingPhotos.length === 0) {
    const seedPhotos = [
      {
        title: "Urban Architecture",
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        description: "A study in lines and concrete."
      },
      {
        title: "Portrait of a Stranger",
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        description: "Capturing the essence of human expression."
      },
      {
        title: "Misty Mountains",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
        description: "Nature's quiet moments in monochrome."
      },
      {
        title: "Street Shadows",
        url: "https://images.unsplash.com/photo-1519069065630-9c362b9cce1e?q=80&w=1200&auto=format&fit=crop",
        description: "The interplay of light and dark in the city."
      },
      {
        title: "Minimalist Geometry",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        description: "Finding shapes in everyday objects."
      },
      {
        title: "Ocean Waves",
        url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1200&auto=format&fit=crop",
        description: "The raw power of the sea."
      }
    ];

    await db.insert(photos).values(seedPhotos);
    console.log("Seeded photos successfully.");
  } else {
    console.log("Database already seeded.");
  }
}

seed().catch(console.error).then(() => process.exit(0));
