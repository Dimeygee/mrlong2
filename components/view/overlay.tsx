"use client";

import { motion } from "framer-motion";
import { useLoading } from "@/app/context/loadingcontext";

export const Overlay = () => {
  const { isLoading, loaderText } = useLoading();


  return (
    <motion.div
      initial={{ opacity: 1, zIndex: 888 }}
      animate={{
        opacity: isLoading ? 1 : 0,
        zIndex: isLoading ? 999 : 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 loaderoverlay w-full h-full flex justify-center items-center"
    >
      {isLoading && (
        <motion.div
          initial={{ translateY: 0 }}
          animate={{ translateY: isLoading ? 0 : "-100%" }}
          transition={{ duration: 0.8,ease: "easeInOut" }}
          className="flex items-center justify-center bg-black z-[999]"
          id="wrapper"
        >
          <div>
            <h1 className="glitch" data-text={loaderText}>
              {loaderText}
            </h1>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

