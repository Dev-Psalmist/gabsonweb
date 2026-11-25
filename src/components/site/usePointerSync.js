import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * A single shared pointer signal, normalised to -0.5 → 0.5.
 * Every depth layer reads from it, so the whole page tilts together.
 */
export default function usePointerSync(stiffness = 55, damping = 22) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });

  useEffect(() => {
    const onMove = (event) => {
      x.set(event.clientX / window.innerWidth - 0.5);
      y.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return { x: springX, y: springY };
}