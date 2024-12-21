"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const ArrowDown = () => {
    const scrollToAbout = () => {
      const aboutSection = document.getElementById("about");
       if (aboutSection) {
            const yOffset = -100; 
            const yPosition = aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: yPosition, behavior: "smooth" });
        }
    };
    return (
      <div
        onClick={scrollToAbout}
        className="w-[54px] h-[54px] flex justify-center items-center rounded-full border-2 border-white/[0.10] cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/arrowdown.png"
            alt="Arrow pointing down"
            width={24}
            height={24}
          />
        </motion.div>
      </div>
    );
};
