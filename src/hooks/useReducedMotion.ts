import { useEffect, useState } from "react";

/**
 * Returns true when the user prefers reduced motion.
 * All animation wrapper components check this value and
 * skip animations accordingly, rendering children instantly.
 */
export const useReducedMotion = (): boolean => {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
};
