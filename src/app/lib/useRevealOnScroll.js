"use client";
import { useEffect, useRef } from "react";

export default function useRevealOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleReveal = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("opacity-100", "translate-y-0");
          node.classList.remove("opacity-0", "translate-y-8");
        } else {
          node.classList.remove("opacity-100", "translate-y-0");
          node.classList.add("opacity-0", "translate-y-8");
        }
      });
    };

    const observer = new window.IntersectionObserver(handleReveal, {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
} 