"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HeroTextWrapper = ({
  className,
  children,
  transitionDelay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  transitionDelay?: number;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "100%",
      transition: { duration: 1.5, ease: "easeInOut", delay: transitionDelay },
    });
  }, [controls, transitionDelay]);

  return (
    <motion.div className={`herotextwrapper ${className}`}>
      <motion.div
        className="overlay "
        initial={{ x: "0%" }}
        animate={controls}
      />
      {children}
    </motion.div>
  );
};

export default HeroTextWrapper;
