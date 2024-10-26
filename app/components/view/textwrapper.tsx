"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

 
  const x = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  return (
    <motion.div className={`text-wrapper ${className}`} ref={ref}>
      <motion.div className="overlay" style={{ x }} />
      {children}
    </motion.div>
  );
};

export default TextWrapper;
