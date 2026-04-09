import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Fallback high-end photography if API is empty
const FALLBACK_PHOTOS = [
  {
    id: 1,
    title: "Brutalist Geometry",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Concrete structures intersecting the sky."
  },
  {
    id: 2,
    title: "Morning Commute",
    url: "https://images.unsplash.com/photo-1495168051787-8df7d9b98687?q=80&w=2070&auto=format&fit=crop",
    description: "Shadows stretching across pavement."
  },
  {
    id: 3,
    title: "Silence",
    url: "https://images.unsplash.com/photo-1440613905118-99b921706b5c?q=80&w=2069&auto=format&fit=crop",
    description: "Mist rolling over the valley."
  },
  {
    id: 4,
    title: "Texture Study",
    url: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop",
    description: "Close up abstraction."
  },
  {
    id: 5,
    title: "The Look",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    description: "Studio portraiture."
  },
  {
    id: 6,
    title: "Urban Canyon",
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop",
    description: "Looking up in the metropolis."
  }
];

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof FALLBACK_PHOTOS[0] | null>(null);

  const displayPhotos = FALLBACK_PHOTOS;

  return (
    <section id="gallery" className="py-32 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-4">Photography</h2>
            <p className="text-muted-foreground max-w-md font-light">
              Capturing the silence between moments. A monochromatic perspective.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {displayPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
                data-testid={`card-photo-${photo.id}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted mb-6 relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">{photo.title}</h3>
                  {photo.description && (
                    <p className="text-sm text-muted-foreground font-light">{photo.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-full flex flex-col items-center"
            >
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 md:-right-12 text-foreground hover:opacity-60 transition-opacity"
                data-testid="button-close-photo"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain grayscale shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-display mb-2">{selectedPhoto.title}</h3>
                <p className="text-muted-foreground font-light">{selectedPhoto.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
