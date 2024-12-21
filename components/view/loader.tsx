"use client";

import { motion } from "framer-motion";
import { useLoading } from "@/app/context/loadingcontext";

export const Loader = () => {
  const { isLoading, loaderText} = useLoading();

  return (
    <motion.div
      initial={{ translateY: 0 }} 
      animate={{ translateY: isLoading ? 0 : "-100%" }} 
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center z-[999]"
      id="wrapper"
    >
      <div >
        <h1 className="glitch" data-text={loaderText}>
          {loaderText}
        </h1>
      </div>
    </motion.div>
  );
};
