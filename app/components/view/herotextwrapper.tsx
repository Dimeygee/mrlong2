"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLoading } from "@/app/context/loadingcontext";

const HeroTextWrapper = ({
  className,
  children,
  transitionDelay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  transitionDelay?: number;
}) => {
  const { isLoading } = useLoading();
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        x: "100%",
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          delay: transitionDelay,
        },
      });
    }
  }, [controls, transitionDelay, isLoading]);

  return (
    <motion.div className={`herotextwrapper ${className}`}>
      <motion.div
        className="overlay"
        initial={{ x: "0%" }}
        animate={controls}
      />
      {children}
    </motion.div>
  );
};

export default HeroTextWrapper;
