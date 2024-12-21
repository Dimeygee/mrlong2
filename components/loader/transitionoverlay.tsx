
"use client";

import { motion } from "framer-motion";

interface TransitionOverlayProps {
  isExiting: boolean;
}

export const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ isExiting }) => {
  const variants = {
    enter: {
      y: "-100%", // Start above the viewport
    },
    center: {
      y: "0%", // Fully visible
    },
    exit: {
      y: "100%", // Slide out below the viewport
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      initial={isExiting ? "exit" : "enter"}
      animate="center"
      exit={isExiting ? "enter" : "exit"}
      variants={variants}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    />
  );
};
