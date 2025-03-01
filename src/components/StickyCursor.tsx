"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StickyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-primary rounded-full pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - 12, // Offset to center the cursor
        y: position.y - 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default StickyCursor;
