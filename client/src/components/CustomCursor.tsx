import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Touch cihazlarda cursor gösterme
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    // Ring smooth lerp animation
    const animateRing = () => {
      ringRef.current.x += (position.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (position.y - ringRef.current.y) * 0.12;
      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });
      rafRef.current = requestAnimationFrame(animateRing);
    };
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [position.x, position.y, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full bg-foreground"
          style={{
            width: isHovering ? "8px" : "6px",
            height: isHovering ? "8px" : "6px",
            transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
          }}
        />
      </div>

      {/* Ring */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          transform: `translate(${ringPosition.x - (isHovering ? 20 : 14)}px, ${ringPosition.y - (isHovering ? 20 : 14)}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full border border-foreground/50"
          style={{
            width: isHovering ? "40px" : "28px",
            height: isHovering ? "40px" : "28px",
            transition: "width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      </div>
    </>
  );
}
