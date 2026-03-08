import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function MouseFollower() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const particles = useRef<Array<{ id: number; x: number; y: number }>>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Create new particle
      if (Math.random() > 0.7) {
        const particle = {
          id: nextId.current++,
          x: mouseX.current,
          y: mouseY.current
        };
        particles.current.push(particle);

        // Remove particle after animation
        setTimeout(() => {
          particles.current = particles.current.filter(p => p.id !== particle.id);
        }, 600);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ x: particle.x, y: particle.y, scale: 1, opacity: 1 }}
          animate={{ y: particle.y - 50, scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute w-1 h-1 bg-foreground rounded-full pointer-events-none"
        />
      ))}
    </div>
  );
}
